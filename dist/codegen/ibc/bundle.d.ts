import * as _137 from "./applications/interchain_accounts/controller/v1/controller";
import * as _138 from "./applications/interchain_accounts/controller/v1/query";
import * as _139 from "./applications/interchain_accounts/controller/v1/tx";
import * as _140 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _141 from "./applications/interchain_accounts/host/v1/host";
import * as _142 from "./applications/interchain_accounts/host/v1/query";
import * as _143 from "./applications/interchain_accounts/host/v1/tx";
import * as _144 from "./applications/interchain_accounts/v1/account";
import * as _145 from "./applications/interchain_accounts/v1/metadata";
import * as _146 from "./applications/interchain_accounts/v1/packet";
import * as _147 from "./applications/transfer/v1/authz";
import * as _148 from "./applications/transfer/v1/genesis";
import * as _149 from "./applications/transfer/v1/query";
import * as _150 from "./applications/transfer/v1/transfer";
import * as _151 from "./applications/transfer/v1/tx";
import * as _152 from "./applications/transfer/v2/packet";
import * as _153 from "./core/channel/v1/channel";
import * as _154 from "./core/channel/v1/genesis";
import * as _155 from "./core/channel/v1/query";
import * as _156 from "./core/channel/v1/tx";
import * as _157 from "./core/client/v1/client";
import * as _158 from "./core/client/v1/genesis";
import * as _159 from "./core/client/v1/query";
import * as _160 from "./core/client/v1/tx";
import * as _161 from "./core/commitment/v1/commitment";
import * as _162 from "./core/connection/v1/connection";
import * as _163 from "./core/connection/v1/genesis";
import * as _164 from "./core/connection/v1/query";
import * as _165 from "./core/connection/v1/tx";
import * as _166 from "./lightclients/localhost/v2/localhost";
import * as _167 from "./lightclients/solomachine/v2/solomachine";
import * as _168 from "./lightclients/solomachine/v3/solomachine";
import * as _169 from "./lightclients/tendermint/v1/tendermint";
import * as _290 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _291 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _292 from "./applications/transfer/v1/query.lcd";
import * as _293 from "./core/channel/v1/query.lcd";
import * as _294 from "./core/client/v1/query.lcd";
import * as _295 from "./core/connection/v1/query.lcd";
import * as _296 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _297 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _298 from "./applications/transfer/v1/query.rpc.Query";
import * as _299 from "./core/channel/v1/query.rpc.Query";
import * as _300 from "./core/client/v1/query.rpc.Query";
import * as _301 from "./core/connection/v1/query.rpc.Query";
import * as _302 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _303 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _304 from "./applications/transfer/v1/tx.rpc.msg";
import * as _305 from "./core/channel/v1/tx.rpc.msg";
import * as _306 from "./core/client/v1/tx.rpc.msg";
import * as _307 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    Msg: typeof _302.Msg;
                    Query: typeof _296.Query;
                    QueryClientImpl: typeof _296.QueryClientImpl;
                    LCDQueryClient: typeof _290.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _139.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _139.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            updateParams(value: _139.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _139.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _139.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _139.MsgSendTx): {
                                typeUrl: string;
                                value: _139.MsgSendTx;
                            };
                            updateParams(value: _139.MsgUpdateParams): {
                                typeUrl: string;
                                value: _139.MsgUpdateParams;
                            };
                        };
                        toJSON: {
                            registerInterchainAccount(value: _139.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: unknown;
                            };
                            sendTx(value: _139.MsgSendTx): {
                                typeUrl: string;
                                value: unknown;
                            };
                            updateParams(value: _139.MsgUpdateParams): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            registerInterchainAccount(value: any): {
                                typeUrl: string;
                                value: _139.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: any): {
                                typeUrl: string;
                                value: _139.MsgSendTx;
                            };
                            updateParams(value: any): {
                                typeUrl: string;
                                value: _139.MsgUpdateParams;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _139.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _139.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _139.MsgSendTx): {
                                typeUrl: string;
                                value: _139.MsgSendTx;
                            };
                            updateParams(value: _139.MsgUpdateParams): {
                                typeUrl: string;
                                value: _139.MsgUpdateParams;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _139.MsgRegisterInterchainAccount) => _139.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _139.MsgRegisterInterchainAccountAmino) => _139.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _139.MsgSendTx) => _139.MsgSendTxAmino;
                            fromAmino: (object: _139.MsgSendTxAmino) => _139.MsgSendTx;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _139.MsgUpdateParams) => _139.MsgUpdateParamsAmino;
                            fromAmino: (object: _139.MsgUpdateParamsAmino) => _139.MsgUpdateParams;
                        };
                    };
                    protobufPackage: "ibc.applications.interchain_accounts.controller.v1";
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _139.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgRegisterInterchainAccount;
                        fromJSON(object: any): _139.MsgRegisterInterchainAccount;
                        toJSON(message: _139.MsgRegisterInterchainAccount): unknown;
                        fromPartial(object: Partial<_139.MsgRegisterInterchainAccount>): _139.MsgRegisterInterchainAccount;
                        fromAmino(object: _139.MsgRegisterInterchainAccountAmino): _139.MsgRegisterInterchainAccount;
                        toAmino(message: _139.MsgRegisterInterchainAccount): _139.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _139.MsgRegisterInterchainAccountAminoMsg): _139.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _139.MsgRegisterInterchainAccount): _139.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _139.MsgRegisterInterchainAccountProtoMsg): _139.MsgRegisterInterchainAccount;
                        toProto(message: _139.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _139.MsgRegisterInterchainAccount): _139.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _139.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgRegisterInterchainAccountResponse;
                        fromJSON(object: any): _139.MsgRegisterInterchainAccountResponse;
                        toJSON(message: _139.MsgRegisterInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_139.MsgRegisterInterchainAccountResponse>): _139.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _139.MsgRegisterInterchainAccountResponseAmino): _139.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _139.MsgRegisterInterchainAccountResponse): _139.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _139.MsgRegisterInterchainAccountResponseAminoMsg): _139.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _139.MsgRegisterInterchainAccountResponse): _139.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _139.MsgRegisterInterchainAccountResponseProtoMsg): _139.MsgRegisterInterchainAccountResponse;
                        toProto(message: _139.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _139.MsgRegisterInterchainAccountResponse): _139.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _139.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgSendTx;
                        fromJSON(object: any): _139.MsgSendTx;
                        toJSON(message: _139.MsgSendTx): unknown;
                        fromPartial(object: Partial<_139.MsgSendTx>): _139.MsgSendTx;
                        fromAmino(object: _139.MsgSendTxAmino): _139.MsgSendTx;
                        toAmino(message: _139.MsgSendTx): _139.MsgSendTxAmino;
                        fromAminoMsg(object: _139.MsgSendTxAminoMsg): _139.MsgSendTx;
                        toAminoMsg(message: _139.MsgSendTx): _139.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _139.MsgSendTxProtoMsg): _139.MsgSendTx;
                        toProto(message: _139.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _139.MsgSendTx): _139.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _139.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgSendTxResponse;
                        fromJSON(object: any): _139.MsgSendTxResponse;
                        toJSON(message: _139.MsgSendTxResponse): unknown;
                        fromPartial(object: Partial<_139.MsgSendTxResponse>): _139.MsgSendTxResponse;
                        fromAmino(object: _139.MsgSendTxResponseAmino): _139.MsgSendTxResponse;
                        toAmino(message: _139.MsgSendTxResponse): _139.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _139.MsgSendTxResponseAminoMsg): _139.MsgSendTxResponse;
                        toAminoMsg(message: _139.MsgSendTxResponse): _139.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _139.MsgSendTxResponseProtoMsg): _139.MsgSendTxResponse;
                        toProto(message: _139.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _139.MsgSendTxResponse): _139.MsgSendTxResponseProtoMsg;
                    };
                    MsgUpdateParams: {
                        typeUrl: string;
                        encode(message: _139.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgUpdateParams;
                        fromJSON(object: any): _139.MsgUpdateParams;
                        toJSON(message: _139.MsgUpdateParams): unknown;
                        fromPartial(object: Partial<_139.MsgUpdateParams>): _139.MsgUpdateParams;
                        fromAmino(object: _139.MsgUpdateParamsAmino): _139.MsgUpdateParams;
                        toAmino(message: _139.MsgUpdateParams): _139.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _139.MsgUpdateParamsAminoMsg): _139.MsgUpdateParams;
                        toAminoMsg(message: _139.MsgUpdateParams): _139.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _139.MsgUpdateParamsProtoMsg): _139.MsgUpdateParams;
                        toProto(message: _139.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _139.MsgUpdateParams): _139.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        encode(_: _139.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgUpdateParamsResponse;
                        fromJSON(_: any): _139.MsgUpdateParamsResponse;
                        toJSON(_: _139.MsgUpdateParamsResponse): unknown;
                        fromPartial(_: Partial<_139.MsgUpdateParamsResponse>): _139.MsgUpdateParamsResponse;
                        fromAmino(_: _139.MsgUpdateParamsResponseAmino): _139.MsgUpdateParamsResponse;
                        toAmino(_: _139.MsgUpdateParamsResponse): _139.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _139.MsgUpdateParamsResponseAminoMsg): _139.MsgUpdateParamsResponse;
                        toAminoMsg(message: _139.MsgUpdateParamsResponse): _139.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _139.MsgUpdateParamsResponseProtoMsg): _139.MsgUpdateParamsResponse;
                        toProto(message: _139.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _139.MsgUpdateParamsResponse): _139.MsgUpdateParamsResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _138.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryInterchainAccountRequest;
                        fromJSON(object: any): _138.QueryInterchainAccountRequest;
                        toJSON(message: _138.QueryInterchainAccountRequest): unknown;
                        fromPartial(object: Partial<_138.QueryInterchainAccountRequest>): _138.QueryInterchainAccountRequest;
                        fromAmino(object: _138.QueryInterchainAccountRequestAmino): _138.QueryInterchainAccountRequest;
                        toAmino(message: _138.QueryInterchainAccountRequest): _138.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _138.QueryInterchainAccountRequestAminoMsg): _138.QueryInterchainAccountRequest;
                        toAminoMsg(message: _138.QueryInterchainAccountRequest): _138.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _138.QueryInterchainAccountRequestProtoMsg): _138.QueryInterchainAccountRequest;
                        toProto(message: _138.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _138.QueryInterchainAccountRequest): _138.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _138.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryInterchainAccountResponse;
                        fromJSON(object: any): _138.QueryInterchainAccountResponse;
                        toJSON(message: _138.QueryInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_138.QueryInterchainAccountResponse>): _138.QueryInterchainAccountResponse;
                        fromAmino(object: _138.QueryInterchainAccountResponseAmino): _138.QueryInterchainAccountResponse;
                        toAmino(message: _138.QueryInterchainAccountResponse): _138.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _138.QueryInterchainAccountResponseAminoMsg): _138.QueryInterchainAccountResponse;
                        toAminoMsg(message: _138.QueryInterchainAccountResponse): _138.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _138.QueryInterchainAccountResponseProtoMsg): _138.QueryInterchainAccountResponse;
                        toProto(message: _138.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _138.QueryInterchainAccountResponse): _138.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _138.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryParamsRequest;
                        fromJSON(_: any): _138.QueryParamsRequest;
                        toJSON(_: _138.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_138.QueryParamsRequest>): _138.QueryParamsRequest;
                        fromAmino(_: _138.QueryParamsRequestAmino): _138.QueryParamsRequest;
                        toAmino(_: _138.QueryParamsRequest): _138.QueryParamsRequestAmino;
                        fromAminoMsg(object: _138.QueryParamsRequestAminoMsg): _138.QueryParamsRequest;
                        toAminoMsg(message: _138.QueryParamsRequest): _138.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _138.QueryParamsRequestProtoMsg): _138.QueryParamsRequest;
                        toProto(message: _138.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _138.QueryParamsRequest): _138.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _138.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryParamsResponse;
                        fromJSON(object: any): _138.QueryParamsResponse;
                        toJSON(message: _138.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_138.QueryParamsResponse>): _138.QueryParamsResponse;
                        fromAmino(object: _138.QueryParamsResponseAmino): _138.QueryParamsResponse;
                        toAmino(message: _138.QueryParamsResponse): _138.QueryParamsResponseAmino;
                        fromAminoMsg(object: _138.QueryParamsResponseAminoMsg): _138.QueryParamsResponse;
                        toAminoMsg(message: _138.QueryParamsResponse): _138.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _138.QueryParamsResponseProtoMsg): _138.QueryParamsResponse;
                        toProto(message: _138.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _138.QueryParamsResponse): _138.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _137.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.Params;
                        fromJSON(object: any): _137.Params;
                        toJSON(message: _137.Params): unknown;
                        fromPartial(object: Partial<_137.Params>): _137.Params;
                        fromAmino(object: _137.ParamsAmino): _137.Params;
                        toAmino(message: _137.Params): _137.ParamsAmino;
                        fromAminoMsg(object: _137.ParamsAminoMsg): _137.Params;
                        toAminoMsg(message: _137.Params): _137.ParamsAminoMsg;
                        fromProtoMsg(message: _137.ParamsProtoMsg): _137.Params;
                        toProto(message: _137.Params): Uint8Array;
                        toProtoMsg(message: _137.Params): _137.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    protobufPackage: "ibc.applications.interchain_accounts.genesis.v1";
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _140.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _140.GenesisState;
                        fromJSON(object: any): _140.GenesisState;
                        toJSON(message: _140.GenesisState): unknown;
                        fromPartial(object: Partial<_140.GenesisState>): _140.GenesisState;
                        fromAmino(object: _140.GenesisStateAmino): _140.GenesisState;
                        toAmino(message: _140.GenesisState): _140.GenesisStateAmino;
                        fromAminoMsg(object: _140.GenesisStateAminoMsg): _140.GenesisState;
                        toAminoMsg(message: _140.GenesisState): _140.GenesisStateAminoMsg;
                        fromProtoMsg(message: _140.GenesisStateProtoMsg): _140.GenesisState;
                        toProto(message: _140.GenesisState): Uint8Array;
                        toProtoMsg(message: _140.GenesisState): _140.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _140.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _140.ControllerGenesisState;
                        fromJSON(object: any): _140.ControllerGenesisState;
                        toJSON(message: _140.ControllerGenesisState): unknown;
                        fromPartial(object: Partial<_140.ControllerGenesisState>): _140.ControllerGenesisState;
                        fromAmino(object: _140.ControllerGenesisStateAmino): _140.ControllerGenesisState;
                        toAmino(message: _140.ControllerGenesisState): _140.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _140.ControllerGenesisStateAminoMsg): _140.ControllerGenesisState;
                        toAminoMsg(message: _140.ControllerGenesisState): _140.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _140.ControllerGenesisStateProtoMsg): _140.ControllerGenesisState;
                        toProto(message: _140.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _140.ControllerGenesisState): _140.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _140.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _140.HostGenesisState;
                        fromJSON(object: any): _140.HostGenesisState;
                        toJSON(message: _140.HostGenesisState): unknown;
                        fromPartial(object: Partial<_140.HostGenesisState>): _140.HostGenesisState;
                        fromAmino(object: _140.HostGenesisStateAmino): _140.HostGenesisState;
                        toAmino(message: _140.HostGenesisState): _140.HostGenesisStateAmino;
                        fromAminoMsg(object: _140.HostGenesisStateAminoMsg): _140.HostGenesisState;
                        toAminoMsg(message: _140.HostGenesisState): _140.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _140.HostGenesisStateProtoMsg): _140.HostGenesisState;
                        toProto(message: _140.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _140.HostGenesisState): _140.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _140.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _140.ActiveChannel;
                        fromJSON(object: any): _140.ActiveChannel;
                        toJSON(message: _140.ActiveChannel): unknown;
                        fromPartial(object: Partial<_140.ActiveChannel>): _140.ActiveChannel;
                        fromAmino(object: _140.ActiveChannelAmino): _140.ActiveChannel;
                        toAmino(message: _140.ActiveChannel): _140.ActiveChannelAmino;
                        fromAminoMsg(object: _140.ActiveChannelAminoMsg): _140.ActiveChannel;
                        toAminoMsg(message: _140.ActiveChannel): _140.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _140.ActiveChannelProtoMsg): _140.ActiveChannel;
                        toProto(message: _140.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _140.ActiveChannel): _140.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _140.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _140.RegisteredInterchainAccount;
                        fromJSON(object: any): _140.RegisteredInterchainAccount;
                        toJSON(message: _140.RegisteredInterchainAccount): unknown;
                        fromPartial(object: Partial<_140.RegisteredInterchainAccount>): _140.RegisteredInterchainAccount;
                        fromAmino(object: _140.RegisteredInterchainAccountAmino): _140.RegisteredInterchainAccount;
                        toAmino(message: _140.RegisteredInterchainAccount): _140.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _140.RegisteredInterchainAccountAminoMsg): _140.RegisteredInterchainAccount;
                        toAminoMsg(message: _140.RegisteredInterchainAccount): _140.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _140.RegisteredInterchainAccountProtoMsg): _140.RegisteredInterchainAccount;
                        toProto(message: _140.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _140.RegisteredInterchainAccount): _140.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    Msg: typeof _303.Msg;
                    Query: typeof _297.Query;
                    QueryClientImpl: typeof _297.QueryClientImpl;
                    LCDQueryClient: typeof _291.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            updateParams(value: _143.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            updateParams(value: _143.MsgUpdateParams): {
                                typeUrl: string;
                                value: _143.MsgUpdateParams;
                            };
                        };
                        toJSON: {
                            updateParams(value: _143.MsgUpdateParams): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            updateParams(value: any): {
                                typeUrl: string;
                                value: _143.MsgUpdateParams;
                            };
                        };
                        fromPartial: {
                            updateParams(value: _143.MsgUpdateParams): {
                                typeUrl: string;
                                value: _143.MsgUpdateParams;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _143.MsgUpdateParams) => _143.MsgUpdateParamsAmino;
                            fromAmino: (object: _143.MsgUpdateParamsAmino) => _143.MsgUpdateParams;
                        };
                    };
                    protobufPackage: "ibc.applications.interchain_accounts.host.v1";
                    MsgUpdateParams: {
                        typeUrl: string;
                        encode(message: _143.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.MsgUpdateParams;
                        fromJSON(object: any): _143.MsgUpdateParams;
                        toJSON(message: _143.MsgUpdateParams): unknown;
                        fromPartial(object: Partial<_143.MsgUpdateParams>): _143.MsgUpdateParams;
                        fromAmino(object: _143.MsgUpdateParamsAmino): _143.MsgUpdateParams;
                        toAmino(message: _143.MsgUpdateParams): _143.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _143.MsgUpdateParamsAminoMsg): _143.MsgUpdateParams;
                        toAminoMsg(message: _143.MsgUpdateParams): _143.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _143.MsgUpdateParamsProtoMsg): _143.MsgUpdateParams;
                        toProto(message: _143.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _143.MsgUpdateParams): _143.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        encode(_: _143.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.MsgUpdateParamsResponse;
                        fromJSON(_: any): _143.MsgUpdateParamsResponse;
                        toJSON(_: _143.MsgUpdateParamsResponse): unknown;
                        fromPartial(_: Partial<_143.MsgUpdateParamsResponse>): _143.MsgUpdateParamsResponse;
                        fromAmino(_: _143.MsgUpdateParamsResponseAmino): _143.MsgUpdateParamsResponse;
                        toAmino(_: _143.MsgUpdateParamsResponse): _143.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _143.MsgUpdateParamsResponseAminoMsg): _143.MsgUpdateParamsResponse;
                        toAminoMsg(message: _143.MsgUpdateParamsResponse): _143.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _143.MsgUpdateParamsResponseProtoMsg): _143.MsgUpdateParamsResponse;
                        toProto(message: _143.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _143.MsgUpdateParamsResponse): _143.MsgUpdateParamsResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _142.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _142.QueryParamsRequest;
                        fromJSON(_: any): _142.QueryParamsRequest;
                        toJSON(_: _142.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_142.QueryParamsRequest>): _142.QueryParamsRequest;
                        fromAmino(_: _142.QueryParamsRequestAmino): _142.QueryParamsRequest;
                        toAmino(_: _142.QueryParamsRequest): _142.QueryParamsRequestAmino;
                        fromAminoMsg(object: _142.QueryParamsRequestAminoMsg): _142.QueryParamsRequest;
                        toAminoMsg(message: _142.QueryParamsRequest): _142.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _142.QueryParamsRequestProtoMsg): _142.QueryParamsRequest;
                        toProto(message: _142.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _142.QueryParamsRequest): _142.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _142.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _142.QueryParamsResponse;
                        fromJSON(object: any): _142.QueryParamsResponse;
                        toJSON(message: _142.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_142.QueryParamsResponse>): _142.QueryParamsResponse;
                        fromAmino(object: _142.QueryParamsResponseAmino): _142.QueryParamsResponse;
                        toAmino(message: _142.QueryParamsResponse): _142.QueryParamsResponseAmino;
                        fromAminoMsg(object: _142.QueryParamsResponseAminoMsg): _142.QueryParamsResponse;
                        toAminoMsg(message: _142.QueryParamsResponse): _142.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _142.QueryParamsResponseProtoMsg): _142.QueryParamsResponse;
                        toProto(message: _142.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _142.QueryParamsResponse): _142.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _141.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _141.Params;
                        fromJSON(object: any): _141.Params;
                        toJSON(message: _141.Params): unknown;
                        fromPartial(object: Partial<_141.Params>): _141.Params;
                        fromAmino(object: _141.ParamsAmino): _141.Params;
                        toAmino(message: _141.Params): _141.ParamsAmino;
                        fromAminoMsg(object: _141.ParamsAminoMsg): _141.Params;
                        toAminoMsg(message: _141.Params): _141.ParamsAminoMsg;
                        fromProtoMsg(message: _141.ParamsProtoMsg): _141.Params;
                        toProto(message: _141.Params): Uint8Array;
                        toProtoMsg(message: _141.Params): _141.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _146.Type;
                typeToJSON(object: _146.Type): string;
                protobufPackage: "ibc.applications.interchain_accounts.v1";
                Type: typeof _146.Type;
                TypeSDKType: typeof _146.Type;
                TypeAmino: typeof _146.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _146.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _146.InterchainAccountPacketData;
                    fromJSON(object: any): _146.InterchainAccountPacketData;
                    toJSON(message: _146.InterchainAccountPacketData): unknown;
                    fromPartial(object: Partial<_146.InterchainAccountPacketData>): _146.InterchainAccountPacketData;
                    fromAmino(object: _146.InterchainAccountPacketDataAmino): _146.InterchainAccountPacketData;
                    toAmino(message: _146.InterchainAccountPacketData): _146.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _146.InterchainAccountPacketDataAminoMsg): _146.InterchainAccountPacketData;
                    toAminoMsg(message: _146.InterchainAccountPacketData): _146.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _146.InterchainAccountPacketDataProtoMsg): _146.InterchainAccountPacketData;
                    toProto(message: _146.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _146.InterchainAccountPacketData): _146.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _146.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _146.CosmosTx;
                    fromJSON(object: any): _146.CosmosTx;
                    toJSON(message: _146.CosmosTx): unknown;
                    fromPartial(object: Partial<_146.CosmosTx>): _146.CosmosTx;
                    fromAmino(object: _146.CosmosTxAmino): _146.CosmosTx;
                    toAmino(message: _146.CosmosTx): _146.CosmosTxAmino;
                    fromAminoMsg(object: _146.CosmosTxAminoMsg): _146.CosmosTx;
                    toAminoMsg(message: _146.CosmosTx): _146.CosmosTxAminoMsg;
                    fromProtoMsg(message: _146.CosmosTxProtoMsg): _146.CosmosTx;
                    toProto(message: _146.CosmosTx): Uint8Array;
                    toProtoMsg(message: _146.CosmosTx): _146.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _145.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.Metadata;
                    fromJSON(object: any): _145.Metadata;
                    toJSON(message: _145.Metadata): unknown;
                    fromPartial(object: Partial<_145.Metadata>): _145.Metadata;
                    fromAmino(object: _145.MetadataAmino): _145.Metadata;
                    toAmino(message: _145.Metadata): _145.MetadataAmino;
                    fromAminoMsg(object: _145.MetadataAminoMsg): _145.Metadata;
                    toAminoMsg(message: _145.Metadata): _145.MetadataAminoMsg;
                    fromProtoMsg(message: _145.MetadataProtoMsg): _145.Metadata;
                    toProto(message: _145.Metadata): Uint8Array;
                    toProtoMsg(message: _145.Metadata): _145.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _144.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.InterchainAccount;
                    fromJSON(object: any): _144.InterchainAccount;
                    toJSON(message: _144.InterchainAccount): unknown;
                    fromPartial(object: Partial<_144.InterchainAccount>): _144.InterchainAccount;
                    fromAmino(object: _144.InterchainAccountAmino): _144.InterchainAccount;
                    toAmino(message: _144.InterchainAccount): _144.InterchainAccountAmino;
                    fromAminoMsg(object: _144.InterchainAccountAminoMsg): _144.InterchainAccount;
                    toAminoMsg(message: _144.InterchainAccount): _144.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _144.InterchainAccountProtoMsg): _144.InterchainAccount;
                    toProto(message: _144.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _144.InterchainAccount): _144.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                Msg: typeof _304.Msg;
                Query: typeof _298.Query;
                QueryClientImpl: typeof _298.QueryClientImpl;
                LCDQueryClient: typeof _292.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _151.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateParams(value: _151.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _151.MsgTransfer): {
                            typeUrl: string;
                            value: _151.MsgTransfer;
                        };
                        updateParams(value: _151.MsgUpdateParams): {
                            typeUrl: string;
                            value: _151.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        transfer(value: _151.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateParams(value: _151.MsgUpdateParams): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _151.MsgTransfer;
                        };
                        updateParams(value: any): {
                            typeUrl: string;
                            value: _151.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        transfer(value: _151.MsgTransfer): {
                            typeUrl: string;
                            value: _151.MsgTransfer;
                        };
                        updateParams(value: _151.MsgUpdateParams): {
                            typeUrl: string;
                            value: _151.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _151.MsgTransfer) => _151.MsgTransferAmino;
                        fromAmino: (object: _151.MsgTransferAmino) => _151.MsgTransfer;
                    };
                    "/ibc.applications.transfer.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _151.MsgUpdateParams) => _151.MsgUpdateParamsAmino;
                        fromAmino: (object: _151.MsgUpdateParamsAmino) => _151.MsgUpdateParams;
                    };
                };
                protobufPackage: "ibc.applications.transfer.v1";
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _151.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.MsgTransfer;
                    fromJSON(object: any): _151.MsgTransfer;
                    toJSON(message: _151.MsgTransfer): unknown;
                    fromPartial(object: Partial<_151.MsgTransfer>): _151.MsgTransfer;
                    fromAmino(object: _151.MsgTransferAmino): _151.MsgTransfer;
                    toAmino(message: _151.MsgTransfer): _151.MsgTransferAmino;
                    fromAminoMsg(object: _151.MsgTransferAminoMsg): _151.MsgTransfer;
                    toAminoMsg(message: _151.MsgTransfer): _151.MsgTransferAminoMsg;
                    fromProtoMsg(message: _151.MsgTransferProtoMsg): _151.MsgTransfer;
                    toProto(message: _151.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _151.MsgTransfer): _151.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _151.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.MsgTransferResponse;
                    fromJSON(object: any): _151.MsgTransferResponse;
                    toJSON(message: _151.MsgTransferResponse): unknown;
                    fromPartial(object: Partial<_151.MsgTransferResponse>): _151.MsgTransferResponse;
                    fromAmino(object: _151.MsgTransferResponseAmino): _151.MsgTransferResponse;
                    toAmino(message: _151.MsgTransferResponse): _151.MsgTransferResponseAmino;
                    fromAminoMsg(object: _151.MsgTransferResponseAminoMsg): _151.MsgTransferResponse;
                    toAminoMsg(message: _151.MsgTransferResponse): _151.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _151.MsgTransferResponseProtoMsg): _151.MsgTransferResponse;
                    toProto(message: _151.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _151.MsgTransferResponse): _151.MsgTransferResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _151.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.MsgUpdateParams;
                    fromJSON(object: any): _151.MsgUpdateParams;
                    toJSON(message: _151.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_151.MsgUpdateParams>): _151.MsgUpdateParams;
                    fromAmino(object: _151.MsgUpdateParamsAmino): _151.MsgUpdateParams;
                    toAmino(message: _151.MsgUpdateParams): _151.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _151.MsgUpdateParamsAminoMsg): _151.MsgUpdateParams;
                    toAminoMsg(message: _151.MsgUpdateParams): _151.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _151.MsgUpdateParamsProtoMsg): _151.MsgUpdateParams;
                    toProto(message: _151.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _151.MsgUpdateParams): _151.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _151.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.MsgUpdateParamsResponse;
                    fromJSON(_: any): _151.MsgUpdateParamsResponse;
                    toJSON(_: _151.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_151.MsgUpdateParamsResponse>): _151.MsgUpdateParamsResponse;
                    fromAmino(_: _151.MsgUpdateParamsResponseAmino): _151.MsgUpdateParamsResponse;
                    toAmino(_: _151.MsgUpdateParamsResponse): _151.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _151.MsgUpdateParamsResponseAminoMsg): _151.MsgUpdateParamsResponse;
                    toAminoMsg(message: _151.MsgUpdateParamsResponse): _151.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _151.MsgUpdateParamsResponseProtoMsg): _151.MsgUpdateParamsResponse;
                    toProto(message: _151.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _151.MsgUpdateParamsResponse): _151.MsgUpdateParamsResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _150.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _150.DenomTrace;
                    fromJSON(object: any): _150.DenomTrace;
                    toJSON(message: _150.DenomTrace): unknown;
                    fromPartial(object: Partial<_150.DenomTrace>): _150.DenomTrace;
                    fromAmino(object: _150.DenomTraceAmino): _150.DenomTrace;
                    toAmino(message: _150.DenomTrace): _150.DenomTraceAmino;
                    fromAminoMsg(object: _150.DenomTraceAminoMsg): _150.DenomTrace;
                    toAminoMsg(message: _150.DenomTrace): _150.DenomTraceAminoMsg;
                    fromProtoMsg(message: _150.DenomTraceProtoMsg): _150.DenomTrace;
                    toProto(message: _150.DenomTrace): Uint8Array;
                    toProtoMsg(message: _150.DenomTrace): _150.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _150.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _150.Params;
                    fromJSON(object: any): _150.Params;
                    toJSON(message: _150.Params): unknown;
                    fromPartial(object: Partial<_150.Params>): _150.Params;
                    fromAmino(object: _150.ParamsAmino): _150.Params;
                    toAmino(message: _150.Params): _150.ParamsAmino;
                    fromAminoMsg(object: _150.ParamsAminoMsg): _150.Params;
                    toAminoMsg(message: _150.Params): _150.ParamsAminoMsg;
                    fromProtoMsg(message: _150.ParamsProtoMsg): _150.Params;
                    toProto(message: _150.Params): Uint8Array;
                    toProtoMsg(message: _150.Params): _150.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _149.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.QueryDenomTraceRequest;
                    fromJSON(object: any): _149.QueryDenomTraceRequest;
                    toJSON(message: _149.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_149.QueryDenomTraceRequest>): _149.QueryDenomTraceRequest;
                    fromAmino(object: _149.QueryDenomTraceRequestAmino): _149.QueryDenomTraceRequest;
                    toAmino(message: _149.QueryDenomTraceRequest): _149.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _149.QueryDenomTraceRequestAminoMsg): _149.QueryDenomTraceRequest;
                    toAminoMsg(message: _149.QueryDenomTraceRequest): _149.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _149.QueryDenomTraceRequestProtoMsg): _149.QueryDenomTraceRequest;
                    toProto(message: _149.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _149.QueryDenomTraceRequest): _149.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _149.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.QueryDenomTraceResponse;
                    fromJSON(object: any): _149.QueryDenomTraceResponse;
                    toJSON(message: _149.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_149.QueryDenomTraceResponse>): _149.QueryDenomTraceResponse;
                    fromAmino(object: _149.QueryDenomTraceResponseAmino): _149.QueryDenomTraceResponse;
                    toAmino(message: _149.QueryDenomTraceResponse): _149.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _149.QueryDenomTraceResponseAminoMsg): _149.QueryDenomTraceResponse;
                    toAminoMsg(message: _149.QueryDenomTraceResponse): _149.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _149.QueryDenomTraceResponseProtoMsg): _149.QueryDenomTraceResponse;
                    toProto(message: _149.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _149.QueryDenomTraceResponse): _149.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _149.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.QueryDenomTracesRequest;
                    fromJSON(object: any): _149.QueryDenomTracesRequest;
                    toJSON(message: _149.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_149.QueryDenomTracesRequest>): _149.QueryDenomTracesRequest;
                    fromAmino(object: _149.QueryDenomTracesRequestAmino): _149.QueryDenomTracesRequest;
                    toAmino(message: _149.QueryDenomTracesRequest): _149.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _149.QueryDenomTracesRequestAminoMsg): _149.QueryDenomTracesRequest;
                    toAminoMsg(message: _149.QueryDenomTracesRequest): _149.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _149.QueryDenomTracesRequestProtoMsg): _149.QueryDenomTracesRequest;
                    toProto(message: _149.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _149.QueryDenomTracesRequest): _149.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _149.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.QueryDenomTracesResponse;
                    fromJSON(object: any): _149.QueryDenomTracesResponse;
                    toJSON(message: _149.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_149.QueryDenomTracesResponse>): _149.QueryDenomTracesResponse;
                    fromAmino(object: _149.QueryDenomTracesResponseAmino): _149.QueryDenomTracesResponse;
                    toAmino(message: _149.QueryDenomTracesResponse): _149.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _149.QueryDenomTracesResponseAminoMsg): _149.QueryDenomTracesResponse;
                    toAminoMsg(message: _149.QueryDenomTracesResponse): _149.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _149.QueryDenomTracesResponseProtoMsg): _149.QueryDenomTracesResponse;
                    toProto(message: _149.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _149.QueryDenomTracesResponse): _149.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _149.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.QueryParamsRequest;
                    fromJSON(_: any): _149.QueryParamsRequest;
                    toJSON(_: _149.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_149.QueryParamsRequest>): _149.QueryParamsRequest;
                    fromAmino(_: _149.QueryParamsRequestAmino): _149.QueryParamsRequest;
                    toAmino(_: _149.QueryParamsRequest): _149.QueryParamsRequestAmino;
                    fromAminoMsg(object: _149.QueryParamsRequestAminoMsg): _149.QueryParamsRequest;
                    toAminoMsg(message: _149.QueryParamsRequest): _149.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _149.QueryParamsRequestProtoMsg): _149.QueryParamsRequest;
                    toProto(message: _149.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _149.QueryParamsRequest): _149.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _149.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.QueryParamsResponse;
                    fromJSON(object: any): _149.QueryParamsResponse;
                    toJSON(message: _149.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_149.QueryParamsResponse>): _149.QueryParamsResponse;
                    fromAmino(object: _149.QueryParamsResponseAmino): _149.QueryParamsResponse;
                    toAmino(message: _149.QueryParamsResponse): _149.QueryParamsResponseAmino;
                    fromAminoMsg(object: _149.QueryParamsResponseAminoMsg): _149.QueryParamsResponse;
                    toAminoMsg(message: _149.QueryParamsResponse): _149.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _149.QueryParamsResponseProtoMsg): _149.QueryParamsResponse;
                    toProto(message: _149.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _149.QueryParamsResponse): _149.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _149.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.QueryDenomHashRequest;
                    fromJSON(object: any): _149.QueryDenomHashRequest;
                    toJSON(message: _149.QueryDenomHashRequest): unknown;
                    fromPartial(object: Partial<_149.QueryDenomHashRequest>): _149.QueryDenomHashRequest;
                    fromAmino(object: _149.QueryDenomHashRequestAmino): _149.QueryDenomHashRequest;
                    toAmino(message: _149.QueryDenomHashRequest): _149.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _149.QueryDenomHashRequestAminoMsg): _149.QueryDenomHashRequest;
                    toAminoMsg(message: _149.QueryDenomHashRequest): _149.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _149.QueryDenomHashRequestProtoMsg): _149.QueryDenomHashRequest;
                    toProto(message: _149.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _149.QueryDenomHashRequest): _149.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _149.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.QueryDenomHashResponse;
                    fromJSON(object: any): _149.QueryDenomHashResponse;
                    toJSON(message: _149.QueryDenomHashResponse): unknown;
                    fromPartial(object: Partial<_149.QueryDenomHashResponse>): _149.QueryDenomHashResponse;
                    fromAmino(object: _149.QueryDenomHashResponseAmino): _149.QueryDenomHashResponse;
                    toAmino(message: _149.QueryDenomHashResponse): _149.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _149.QueryDenomHashResponseAminoMsg): _149.QueryDenomHashResponse;
                    toAminoMsg(message: _149.QueryDenomHashResponse): _149.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _149.QueryDenomHashResponseProtoMsg): _149.QueryDenomHashResponse;
                    toProto(message: _149.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _149.QueryDenomHashResponse): _149.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _149.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.QueryEscrowAddressRequest;
                    fromJSON(object: any): _149.QueryEscrowAddressRequest;
                    toJSON(message: _149.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: Partial<_149.QueryEscrowAddressRequest>): _149.QueryEscrowAddressRequest;
                    fromAmino(object: _149.QueryEscrowAddressRequestAmino): _149.QueryEscrowAddressRequest;
                    toAmino(message: _149.QueryEscrowAddressRequest): _149.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _149.QueryEscrowAddressRequestAminoMsg): _149.QueryEscrowAddressRequest;
                    toAminoMsg(message: _149.QueryEscrowAddressRequest): _149.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _149.QueryEscrowAddressRequestProtoMsg): _149.QueryEscrowAddressRequest;
                    toProto(message: _149.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _149.QueryEscrowAddressRequest): _149.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _149.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.QueryEscrowAddressResponse;
                    fromJSON(object: any): _149.QueryEscrowAddressResponse;
                    toJSON(message: _149.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: Partial<_149.QueryEscrowAddressResponse>): _149.QueryEscrowAddressResponse;
                    fromAmino(object: _149.QueryEscrowAddressResponseAmino): _149.QueryEscrowAddressResponse;
                    toAmino(message: _149.QueryEscrowAddressResponse): _149.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _149.QueryEscrowAddressResponseAminoMsg): _149.QueryEscrowAddressResponse;
                    toAminoMsg(message: _149.QueryEscrowAddressResponse): _149.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _149.QueryEscrowAddressResponseProtoMsg): _149.QueryEscrowAddressResponse;
                    toProto(message: _149.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _149.QueryEscrowAddressResponse): _149.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _149.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.QueryTotalEscrowForDenomRequest;
                    fromJSON(object: any): _149.QueryTotalEscrowForDenomRequest;
                    toJSON(message: _149.QueryTotalEscrowForDenomRequest): unknown;
                    fromPartial(object: Partial<_149.QueryTotalEscrowForDenomRequest>): _149.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _149.QueryTotalEscrowForDenomRequestAmino): _149.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _149.QueryTotalEscrowForDenomRequest): _149.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _149.QueryTotalEscrowForDenomRequestAminoMsg): _149.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _149.QueryTotalEscrowForDenomRequest): _149.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _149.QueryTotalEscrowForDenomRequestProtoMsg): _149.QueryTotalEscrowForDenomRequest;
                    toProto(message: _149.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _149.QueryTotalEscrowForDenomRequest): _149.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _149.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.QueryTotalEscrowForDenomResponse;
                    fromJSON(object: any): _149.QueryTotalEscrowForDenomResponse;
                    toJSON(message: _149.QueryTotalEscrowForDenomResponse): unknown;
                    fromPartial(object: Partial<_149.QueryTotalEscrowForDenomResponse>): _149.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _149.QueryTotalEscrowForDenomResponseAmino): _149.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _149.QueryTotalEscrowForDenomResponse): _149.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _149.QueryTotalEscrowForDenomResponseAminoMsg): _149.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _149.QueryTotalEscrowForDenomResponse): _149.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _149.QueryTotalEscrowForDenomResponseProtoMsg): _149.QueryTotalEscrowForDenomResponse;
                    toProto(message: _149.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _149.QueryTotalEscrowForDenomResponse): _149.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _148.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.GenesisState;
                    fromJSON(object: any): _148.GenesisState;
                    toJSON(message: _148.GenesisState): unknown;
                    fromPartial(object: Partial<_148.GenesisState>): _148.GenesisState;
                    fromAmino(object: _148.GenesisStateAmino): _148.GenesisState;
                    toAmino(message: _148.GenesisState): _148.GenesisStateAmino;
                    fromAminoMsg(object: _148.GenesisStateAminoMsg): _148.GenesisState;
                    toAminoMsg(message: _148.GenesisState): _148.GenesisStateAminoMsg;
                    fromProtoMsg(message: _148.GenesisStateProtoMsg): _148.GenesisState;
                    toProto(message: _148.GenesisState): Uint8Array;
                    toProtoMsg(message: _148.GenesisState): _148.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _147.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.Allocation;
                    fromJSON(object: any): _147.Allocation;
                    toJSON(message: _147.Allocation): unknown;
                    fromPartial(object: Partial<_147.Allocation>): _147.Allocation;
                    fromAmino(object: _147.AllocationAmino): _147.Allocation;
                    toAmino(message: _147.Allocation): _147.AllocationAmino;
                    fromAminoMsg(object: _147.AllocationAminoMsg): _147.Allocation;
                    toAminoMsg(message: _147.Allocation): _147.AllocationAminoMsg;
                    fromProtoMsg(message: _147.AllocationProtoMsg): _147.Allocation;
                    toProto(message: _147.Allocation): Uint8Array;
                    toProtoMsg(message: _147.Allocation): _147.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _147.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.TransferAuthorization;
                    fromJSON(object: any): _147.TransferAuthorization;
                    toJSON(message: _147.TransferAuthorization): unknown;
                    fromPartial(object: Partial<_147.TransferAuthorization>): _147.TransferAuthorization;
                    fromAmino(object: _147.TransferAuthorizationAmino): _147.TransferAuthorization;
                    toAmino(message: _147.TransferAuthorization): _147.TransferAuthorizationAmino;
                    fromAminoMsg(object: _147.TransferAuthorizationAminoMsg): _147.TransferAuthorization;
                    toAminoMsg(message: _147.TransferAuthorization): _147.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _147.TransferAuthorizationProtoMsg): _147.TransferAuthorization;
                    toProto(message: _147.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _147.TransferAuthorization): _147.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                protobufPackage: "ibc.applications.transfer.v2";
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _152.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.FungibleTokenPacketData;
                    fromJSON(object: any): _152.FungibleTokenPacketData;
                    toJSON(message: _152.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_152.FungibleTokenPacketData>): _152.FungibleTokenPacketData;
                    fromAmino(object: _152.FungibleTokenPacketDataAmino): _152.FungibleTokenPacketData;
                    toAmino(message: _152.FungibleTokenPacketData): _152.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _152.FungibleTokenPacketDataAminoMsg): _152.FungibleTokenPacketData;
                    toAminoMsg(message: _152.FungibleTokenPacketData): _152.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _152.FungibleTokenPacketDataProtoMsg): _152.FungibleTokenPacketData;
                    toProto(message: _152.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _152.FungibleTokenPacketData): _152.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                Msg: typeof _305.Msg;
                Query: typeof _299.Query;
                QueryClientImpl: typeof _299.QueryClientImpl;
                LCDQueryClient: typeof _293.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _156.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _156.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _156.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _156.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _156.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _156.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _156.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _156.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _156.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _156.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _156.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _156.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _156.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _156.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _156.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _156.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _156.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _156.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _156.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _156.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _156.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _156.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _156.MsgRecvPacket): {
                            typeUrl: string;
                            value: _156.MsgRecvPacket;
                        };
                        timeout(value: _156.MsgTimeout): {
                            typeUrl: string;
                            value: _156.MsgTimeout;
                        };
                        timeoutOnClose(value: _156.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _156.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _156.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _156.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _156.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _156.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _156.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _156.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _156.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _156.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _156.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _156.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _156.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _156.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _156.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _156.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _156.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _156.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _156.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _156.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _156.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _156.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _156.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _156.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _156.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _156.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _156.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _156.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _156.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _156.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _156.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _156.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _156.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _156.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _156.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _156.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _156.MsgRecvPacket): {
                            typeUrl: string;
                            value: _156.MsgRecvPacket;
                        };
                        timeout(value: _156.MsgTimeout): {
                            typeUrl: string;
                            value: _156.MsgTimeout;
                        };
                        timeoutOnClose(value: _156.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _156.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _156.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _156.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _156.MsgChannelOpenInit) => _156.MsgChannelOpenInitAmino;
                        fromAmino: (object: _156.MsgChannelOpenInitAmino) => _156.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _156.MsgChannelOpenTry) => _156.MsgChannelOpenTryAmino;
                        fromAmino: (object: _156.MsgChannelOpenTryAmino) => _156.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _156.MsgChannelOpenAck) => _156.MsgChannelOpenAckAmino;
                        fromAmino: (object: _156.MsgChannelOpenAckAmino) => _156.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _156.MsgChannelOpenConfirm) => _156.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _156.MsgChannelOpenConfirmAmino) => _156.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _156.MsgChannelCloseInit) => _156.MsgChannelCloseInitAmino;
                        fromAmino: (object: _156.MsgChannelCloseInitAmino) => _156.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _156.MsgChannelCloseConfirm) => _156.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _156.MsgChannelCloseConfirmAmino) => _156.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _156.MsgRecvPacket) => _156.MsgRecvPacketAmino;
                        fromAmino: (object: _156.MsgRecvPacketAmino) => _156.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _156.MsgTimeout) => _156.MsgTimeoutAmino;
                        fromAmino: (object: _156.MsgTimeoutAmino) => _156.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _156.MsgTimeoutOnClose) => _156.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _156.MsgTimeoutOnCloseAmino) => _156.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _156.MsgAcknowledgement) => _156.MsgAcknowledgementAmino;
                        fromAmino: (object: _156.MsgAcknowledgementAmino) => _156.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _156.ResponseResultType;
                responseResultTypeToJSON(object: _156.ResponseResultType): string;
                protobufPackage: "ibc.core.channel.v1";
                ResponseResultType: typeof _156.ResponseResultType;
                ResponseResultTypeSDKType: typeof _156.ResponseResultType;
                ResponseResultTypeAmino: typeof _156.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _156.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgChannelOpenInit;
                    fromJSON(object: any): _156.MsgChannelOpenInit;
                    toJSON(message: _156.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_156.MsgChannelOpenInit>): _156.MsgChannelOpenInit;
                    fromAmino(object: _156.MsgChannelOpenInitAmino): _156.MsgChannelOpenInit;
                    toAmino(message: _156.MsgChannelOpenInit): _156.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _156.MsgChannelOpenInitAminoMsg): _156.MsgChannelOpenInit;
                    toAminoMsg(message: _156.MsgChannelOpenInit): _156.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _156.MsgChannelOpenInitProtoMsg): _156.MsgChannelOpenInit;
                    toProto(message: _156.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _156.MsgChannelOpenInit): _156.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _156.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgChannelOpenInitResponse;
                    fromJSON(object: any): _156.MsgChannelOpenInitResponse;
                    toJSON(message: _156.MsgChannelOpenInitResponse): unknown;
                    fromPartial(object: Partial<_156.MsgChannelOpenInitResponse>): _156.MsgChannelOpenInitResponse;
                    fromAmino(object: _156.MsgChannelOpenInitResponseAmino): _156.MsgChannelOpenInitResponse;
                    toAmino(message: _156.MsgChannelOpenInitResponse): _156.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _156.MsgChannelOpenInitResponseAminoMsg): _156.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _156.MsgChannelOpenInitResponse): _156.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgChannelOpenInitResponseProtoMsg): _156.MsgChannelOpenInitResponse;
                    toProto(message: _156.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgChannelOpenInitResponse): _156.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _156.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgChannelOpenTry;
                    fromJSON(object: any): _156.MsgChannelOpenTry;
                    toJSON(message: _156.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_156.MsgChannelOpenTry>): _156.MsgChannelOpenTry;
                    fromAmino(object: _156.MsgChannelOpenTryAmino): _156.MsgChannelOpenTry;
                    toAmino(message: _156.MsgChannelOpenTry): _156.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _156.MsgChannelOpenTryAminoMsg): _156.MsgChannelOpenTry;
                    toAminoMsg(message: _156.MsgChannelOpenTry): _156.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _156.MsgChannelOpenTryProtoMsg): _156.MsgChannelOpenTry;
                    toProto(message: _156.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _156.MsgChannelOpenTry): _156.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _156.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgChannelOpenTryResponse;
                    fromJSON(object: any): _156.MsgChannelOpenTryResponse;
                    toJSON(message: _156.MsgChannelOpenTryResponse): unknown;
                    fromPartial(object: Partial<_156.MsgChannelOpenTryResponse>): _156.MsgChannelOpenTryResponse;
                    fromAmino(object: _156.MsgChannelOpenTryResponseAmino): _156.MsgChannelOpenTryResponse;
                    toAmino(message: _156.MsgChannelOpenTryResponse): _156.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _156.MsgChannelOpenTryResponseAminoMsg): _156.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _156.MsgChannelOpenTryResponse): _156.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgChannelOpenTryResponseProtoMsg): _156.MsgChannelOpenTryResponse;
                    toProto(message: _156.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgChannelOpenTryResponse): _156.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _156.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgChannelOpenAck;
                    fromJSON(object: any): _156.MsgChannelOpenAck;
                    toJSON(message: _156.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_156.MsgChannelOpenAck>): _156.MsgChannelOpenAck;
                    fromAmino(object: _156.MsgChannelOpenAckAmino): _156.MsgChannelOpenAck;
                    toAmino(message: _156.MsgChannelOpenAck): _156.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _156.MsgChannelOpenAckAminoMsg): _156.MsgChannelOpenAck;
                    toAminoMsg(message: _156.MsgChannelOpenAck): _156.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _156.MsgChannelOpenAckProtoMsg): _156.MsgChannelOpenAck;
                    toProto(message: _156.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _156.MsgChannelOpenAck): _156.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _156.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _156.MsgChannelOpenAckResponse;
                    toJSON(_: _156.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_156.MsgChannelOpenAckResponse>): _156.MsgChannelOpenAckResponse;
                    fromAmino(_: _156.MsgChannelOpenAckResponseAmino): _156.MsgChannelOpenAckResponse;
                    toAmino(_: _156.MsgChannelOpenAckResponse): _156.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _156.MsgChannelOpenAckResponseAminoMsg): _156.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _156.MsgChannelOpenAckResponse): _156.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgChannelOpenAckResponseProtoMsg): _156.MsgChannelOpenAckResponse;
                    toProto(message: _156.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgChannelOpenAckResponse): _156.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _156.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgChannelOpenConfirm;
                    fromJSON(object: any): _156.MsgChannelOpenConfirm;
                    toJSON(message: _156.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_156.MsgChannelOpenConfirm>): _156.MsgChannelOpenConfirm;
                    fromAmino(object: _156.MsgChannelOpenConfirmAmino): _156.MsgChannelOpenConfirm;
                    toAmino(message: _156.MsgChannelOpenConfirm): _156.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _156.MsgChannelOpenConfirmAminoMsg): _156.MsgChannelOpenConfirm;
                    toAminoMsg(message: _156.MsgChannelOpenConfirm): _156.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _156.MsgChannelOpenConfirmProtoMsg): _156.MsgChannelOpenConfirm;
                    toProto(message: _156.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _156.MsgChannelOpenConfirm): _156.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _156.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _156.MsgChannelOpenConfirmResponse;
                    toJSON(_: _156.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_156.MsgChannelOpenConfirmResponse>): _156.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _156.MsgChannelOpenConfirmResponseAmino): _156.MsgChannelOpenConfirmResponse;
                    toAmino(_: _156.MsgChannelOpenConfirmResponse): _156.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _156.MsgChannelOpenConfirmResponseAminoMsg): _156.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _156.MsgChannelOpenConfirmResponse): _156.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgChannelOpenConfirmResponseProtoMsg): _156.MsgChannelOpenConfirmResponse;
                    toProto(message: _156.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgChannelOpenConfirmResponse): _156.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _156.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgChannelCloseInit;
                    fromJSON(object: any): _156.MsgChannelCloseInit;
                    toJSON(message: _156.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_156.MsgChannelCloseInit>): _156.MsgChannelCloseInit;
                    fromAmino(object: _156.MsgChannelCloseInitAmino): _156.MsgChannelCloseInit;
                    toAmino(message: _156.MsgChannelCloseInit): _156.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _156.MsgChannelCloseInitAminoMsg): _156.MsgChannelCloseInit;
                    toAminoMsg(message: _156.MsgChannelCloseInit): _156.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _156.MsgChannelCloseInitProtoMsg): _156.MsgChannelCloseInit;
                    toProto(message: _156.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _156.MsgChannelCloseInit): _156.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _156.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _156.MsgChannelCloseInitResponse;
                    toJSON(_: _156.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_156.MsgChannelCloseInitResponse>): _156.MsgChannelCloseInitResponse;
                    fromAmino(_: _156.MsgChannelCloseInitResponseAmino): _156.MsgChannelCloseInitResponse;
                    toAmino(_: _156.MsgChannelCloseInitResponse): _156.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _156.MsgChannelCloseInitResponseAminoMsg): _156.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _156.MsgChannelCloseInitResponse): _156.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgChannelCloseInitResponseProtoMsg): _156.MsgChannelCloseInitResponse;
                    toProto(message: _156.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgChannelCloseInitResponse): _156.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _156.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgChannelCloseConfirm;
                    fromJSON(object: any): _156.MsgChannelCloseConfirm;
                    toJSON(message: _156.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_156.MsgChannelCloseConfirm>): _156.MsgChannelCloseConfirm;
                    fromAmino(object: _156.MsgChannelCloseConfirmAmino): _156.MsgChannelCloseConfirm;
                    toAmino(message: _156.MsgChannelCloseConfirm): _156.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _156.MsgChannelCloseConfirmAminoMsg): _156.MsgChannelCloseConfirm;
                    toAminoMsg(message: _156.MsgChannelCloseConfirm): _156.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _156.MsgChannelCloseConfirmProtoMsg): _156.MsgChannelCloseConfirm;
                    toProto(message: _156.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _156.MsgChannelCloseConfirm): _156.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _156.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _156.MsgChannelCloseConfirmResponse;
                    toJSON(_: _156.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_156.MsgChannelCloseConfirmResponse>): _156.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _156.MsgChannelCloseConfirmResponseAmino): _156.MsgChannelCloseConfirmResponse;
                    toAmino(_: _156.MsgChannelCloseConfirmResponse): _156.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _156.MsgChannelCloseConfirmResponseAminoMsg): _156.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _156.MsgChannelCloseConfirmResponse): _156.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgChannelCloseConfirmResponseProtoMsg): _156.MsgChannelCloseConfirmResponse;
                    toProto(message: _156.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgChannelCloseConfirmResponse): _156.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _156.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgRecvPacket;
                    fromJSON(object: any): _156.MsgRecvPacket;
                    toJSON(message: _156.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_156.MsgRecvPacket>): _156.MsgRecvPacket;
                    fromAmino(object: _156.MsgRecvPacketAmino): _156.MsgRecvPacket;
                    toAmino(message: _156.MsgRecvPacket): _156.MsgRecvPacketAmino;
                    fromAminoMsg(object: _156.MsgRecvPacketAminoMsg): _156.MsgRecvPacket;
                    toAminoMsg(message: _156.MsgRecvPacket): _156.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _156.MsgRecvPacketProtoMsg): _156.MsgRecvPacket;
                    toProto(message: _156.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _156.MsgRecvPacket): _156.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _156.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgRecvPacketResponse;
                    fromJSON(object: any): _156.MsgRecvPacketResponse;
                    toJSON(message: _156.MsgRecvPacketResponse): unknown;
                    fromPartial(object: Partial<_156.MsgRecvPacketResponse>): _156.MsgRecvPacketResponse;
                    fromAmino(object: _156.MsgRecvPacketResponseAmino): _156.MsgRecvPacketResponse;
                    toAmino(message: _156.MsgRecvPacketResponse): _156.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _156.MsgRecvPacketResponseAminoMsg): _156.MsgRecvPacketResponse;
                    toAminoMsg(message: _156.MsgRecvPacketResponse): _156.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgRecvPacketResponseProtoMsg): _156.MsgRecvPacketResponse;
                    toProto(message: _156.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgRecvPacketResponse): _156.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _156.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgTimeout;
                    fromJSON(object: any): _156.MsgTimeout;
                    toJSON(message: _156.MsgTimeout): unknown;
                    fromPartial(object: Partial<_156.MsgTimeout>): _156.MsgTimeout;
                    fromAmino(object: _156.MsgTimeoutAmino): _156.MsgTimeout;
                    toAmino(message: _156.MsgTimeout): _156.MsgTimeoutAmino;
                    fromAminoMsg(object: _156.MsgTimeoutAminoMsg): _156.MsgTimeout;
                    toAminoMsg(message: _156.MsgTimeout): _156.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _156.MsgTimeoutProtoMsg): _156.MsgTimeout;
                    toProto(message: _156.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _156.MsgTimeout): _156.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _156.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgTimeoutResponse;
                    fromJSON(object: any): _156.MsgTimeoutResponse;
                    toJSON(message: _156.MsgTimeoutResponse): unknown;
                    fromPartial(object: Partial<_156.MsgTimeoutResponse>): _156.MsgTimeoutResponse;
                    fromAmino(object: _156.MsgTimeoutResponseAmino): _156.MsgTimeoutResponse;
                    toAmino(message: _156.MsgTimeoutResponse): _156.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _156.MsgTimeoutResponseAminoMsg): _156.MsgTimeoutResponse;
                    toAminoMsg(message: _156.MsgTimeoutResponse): _156.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgTimeoutResponseProtoMsg): _156.MsgTimeoutResponse;
                    toProto(message: _156.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgTimeoutResponse): _156.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _156.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgTimeoutOnClose;
                    fromJSON(object: any): _156.MsgTimeoutOnClose;
                    toJSON(message: _156.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_156.MsgTimeoutOnClose>): _156.MsgTimeoutOnClose;
                    fromAmino(object: _156.MsgTimeoutOnCloseAmino): _156.MsgTimeoutOnClose;
                    toAmino(message: _156.MsgTimeoutOnClose): _156.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _156.MsgTimeoutOnCloseAminoMsg): _156.MsgTimeoutOnClose;
                    toAminoMsg(message: _156.MsgTimeoutOnClose): _156.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _156.MsgTimeoutOnCloseProtoMsg): _156.MsgTimeoutOnClose;
                    toProto(message: _156.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _156.MsgTimeoutOnClose): _156.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _156.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgTimeoutOnCloseResponse;
                    fromJSON(object: any): _156.MsgTimeoutOnCloseResponse;
                    toJSON(message: _156.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(object: Partial<_156.MsgTimeoutOnCloseResponse>): _156.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _156.MsgTimeoutOnCloseResponseAmino): _156.MsgTimeoutOnCloseResponse;
                    toAmino(message: _156.MsgTimeoutOnCloseResponse): _156.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _156.MsgTimeoutOnCloseResponseAminoMsg): _156.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _156.MsgTimeoutOnCloseResponse): _156.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgTimeoutOnCloseResponseProtoMsg): _156.MsgTimeoutOnCloseResponse;
                    toProto(message: _156.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgTimeoutOnCloseResponse): _156.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _156.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgAcknowledgement;
                    fromJSON(object: any): _156.MsgAcknowledgement;
                    toJSON(message: _156.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_156.MsgAcknowledgement>): _156.MsgAcknowledgement;
                    fromAmino(object: _156.MsgAcknowledgementAmino): _156.MsgAcknowledgement;
                    toAmino(message: _156.MsgAcknowledgement): _156.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _156.MsgAcknowledgementAminoMsg): _156.MsgAcknowledgement;
                    toAminoMsg(message: _156.MsgAcknowledgement): _156.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _156.MsgAcknowledgementProtoMsg): _156.MsgAcknowledgement;
                    toProto(message: _156.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _156.MsgAcknowledgement): _156.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _156.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.MsgAcknowledgementResponse;
                    fromJSON(object: any): _156.MsgAcknowledgementResponse;
                    toJSON(message: _156.MsgAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_156.MsgAcknowledgementResponse>): _156.MsgAcknowledgementResponse;
                    fromAmino(object: _156.MsgAcknowledgementResponseAmino): _156.MsgAcknowledgementResponse;
                    toAmino(message: _156.MsgAcknowledgementResponse): _156.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _156.MsgAcknowledgementResponseAminoMsg): _156.MsgAcknowledgementResponse;
                    toAminoMsg(message: _156.MsgAcknowledgementResponse): _156.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _156.MsgAcknowledgementResponseProtoMsg): _156.MsgAcknowledgementResponse;
                    toProto(message: _156.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _156.MsgAcknowledgementResponse): _156.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryChannelRequest;
                    fromJSON(object: any): _155.QueryChannelRequest;
                    toJSON(message: _155.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_155.QueryChannelRequest>): _155.QueryChannelRequest;
                    fromAmino(object: _155.QueryChannelRequestAmino): _155.QueryChannelRequest;
                    toAmino(message: _155.QueryChannelRequest): _155.QueryChannelRequestAmino;
                    fromAminoMsg(object: _155.QueryChannelRequestAminoMsg): _155.QueryChannelRequest;
                    toAminoMsg(message: _155.QueryChannelRequest): _155.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryChannelRequestProtoMsg): _155.QueryChannelRequest;
                    toProto(message: _155.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryChannelRequest): _155.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryChannelResponse;
                    fromJSON(object: any): _155.QueryChannelResponse;
                    toJSON(message: _155.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_155.QueryChannelResponse>): _155.QueryChannelResponse;
                    fromAmino(object: _155.QueryChannelResponseAmino): _155.QueryChannelResponse;
                    toAmino(message: _155.QueryChannelResponse): _155.QueryChannelResponseAmino;
                    fromAminoMsg(object: _155.QueryChannelResponseAminoMsg): _155.QueryChannelResponse;
                    toAminoMsg(message: _155.QueryChannelResponse): _155.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryChannelResponseProtoMsg): _155.QueryChannelResponse;
                    toProto(message: _155.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryChannelResponse): _155.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryChannelsRequest;
                    fromJSON(object: any): _155.QueryChannelsRequest;
                    toJSON(message: _155.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_155.QueryChannelsRequest>): _155.QueryChannelsRequest;
                    fromAmino(object: _155.QueryChannelsRequestAmino): _155.QueryChannelsRequest;
                    toAmino(message: _155.QueryChannelsRequest): _155.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _155.QueryChannelsRequestAminoMsg): _155.QueryChannelsRequest;
                    toAminoMsg(message: _155.QueryChannelsRequest): _155.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryChannelsRequestProtoMsg): _155.QueryChannelsRequest;
                    toProto(message: _155.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryChannelsRequest): _155.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryChannelsResponse;
                    fromJSON(object: any): _155.QueryChannelsResponse;
                    toJSON(message: _155.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_155.QueryChannelsResponse>): _155.QueryChannelsResponse;
                    fromAmino(object: _155.QueryChannelsResponseAmino): _155.QueryChannelsResponse;
                    toAmino(message: _155.QueryChannelsResponse): _155.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _155.QueryChannelsResponseAminoMsg): _155.QueryChannelsResponse;
                    toAminoMsg(message: _155.QueryChannelsResponse): _155.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryChannelsResponseProtoMsg): _155.QueryChannelsResponse;
                    toProto(message: _155.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryChannelsResponse): _155.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _155.QueryConnectionChannelsRequest;
                    toJSON(message: _155.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_155.QueryConnectionChannelsRequest>): _155.QueryConnectionChannelsRequest;
                    fromAmino(object: _155.QueryConnectionChannelsRequestAmino): _155.QueryConnectionChannelsRequest;
                    toAmino(message: _155.QueryConnectionChannelsRequest): _155.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _155.QueryConnectionChannelsRequestAminoMsg): _155.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _155.QueryConnectionChannelsRequest): _155.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryConnectionChannelsRequestProtoMsg): _155.QueryConnectionChannelsRequest;
                    toProto(message: _155.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryConnectionChannelsRequest): _155.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _155.QueryConnectionChannelsResponse;
                    toJSON(message: _155.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_155.QueryConnectionChannelsResponse>): _155.QueryConnectionChannelsResponse;
                    fromAmino(object: _155.QueryConnectionChannelsResponseAmino): _155.QueryConnectionChannelsResponse;
                    toAmino(message: _155.QueryConnectionChannelsResponse): _155.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _155.QueryConnectionChannelsResponseAminoMsg): _155.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _155.QueryConnectionChannelsResponse): _155.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryConnectionChannelsResponseProtoMsg): _155.QueryConnectionChannelsResponse;
                    toProto(message: _155.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryConnectionChannelsResponse): _155.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryChannelClientStateRequest;
                    fromJSON(object: any): _155.QueryChannelClientStateRequest;
                    toJSON(message: _155.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_155.QueryChannelClientStateRequest>): _155.QueryChannelClientStateRequest;
                    fromAmino(object: _155.QueryChannelClientStateRequestAmino): _155.QueryChannelClientStateRequest;
                    toAmino(message: _155.QueryChannelClientStateRequest): _155.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _155.QueryChannelClientStateRequestAminoMsg): _155.QueryChannelClientStateRequest;
                    toAminoMsg(message: _155.QueryChannelClientStateRequest): _155.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryChannelClientStateRequestProtoMsg): _155.QueryChannelClientStateRequest;
                    toProto(message: _155.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryChannelClientStateRequest): _155.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryChannelClientStateResponse;
                    fromJSON(object: any): _155.QueryChannelClientStateResponse;
                    toJSON(message: _155.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_155.QueryChannelClientStateResponse>): _155.QueryChannelClientStateResponse;
                    fromAmino(object: _155.QueryChannelClientStateResponseAmino): _155.QueryChannelClientStateResponse;
                    toAmino(message: _155.QueryChannelClientStateResponse): _155.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _155.QueryChannelClientStateResponseAminoMsg): _155.QueryChannelClientStateResponse;
                    toAminoMsg(message: _155.QueryChannelClientStateResponse): _155.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryChannelClientStateResponseProtoMsg): _155.QueryChannelClientStateResponse;
                    toProto(message: _155.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryChannelClientStateResponse): _155.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _155.QueryChannelConsensusStateRequest;
                    toJSON(message: _155.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_155.QueryChannelConsensusStateRequest>): _155.QueryChannelConsensusStateRequest;
                    fromAmino(object: _155.QueryChannelConsensusStateRequestAmino): _155.QueryChannelConsensusStateRequest;
                    toAmino(message: _155.QueryChannelConsensusStateRequest): _155.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _155.QueryChannelConsensusStateRequestAminoMsg): _155.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _155.QueryChannelConsensusStateRequest): _155.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryChannelConsensusStateRequestProtoMsg): _155.QueryChannelConsensusStateRequest;
                    toProto(message: _155.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryChannelConsensusStateRequest): _155.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _155.QueryChannelConsensusStateResponse;
                    toJSON(message: _155.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_155.QueryChannelConsensusStateResponse>): _155.QueryChannelConsensusStateResponse;
                    fromAmino(object: _155.QueryChannelConsensusStateResponseAmino): _155.QueryChannelConsensusStateResponse;
                    toAmino(message: _155.QueryChannelConsensusStateResponse): _155.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _155.QueryChannelConsensusStateResponseAminoMsg): _155.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _155.QueryChannelConsensusStateResponse): _155.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryChannelConsensusStateResponseProtoMsg): _155.QueryChannelConsensusStateResponse;
                    toProto(message: _155.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryChannelConsensusStateResponse): _155.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _155.QueryPacketCommitmentRequest;
                    toJSON(message: _155.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_155.QueryPacketCommitmentRequest>): _155.QueryPacketCommitmentRequest;
                    fromAmino(object: _155.QueryPacketCommitmentRequestAmino): _155.QueryPacketCommitmentRequest;
                    toAmino(message: _155.QueryPacketCommitmentRequest): _155.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _155.QueryPacketCommitmentRequestAminoMsg): _155.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _155.QueryPacketCommitmentRequest): _155.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryPacketCommitmentRequestProtoMsg): _155.QueryPacketCommitmentRequest;
                    toProto(message: _155.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryPacketCommitmentRequest): _155.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _155.QueryPacketCommitmentResponse;
                    toJSON(message: _155.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_155.QueryPacketCommitmentResponse>): _155.QueryPacketCommitmentResponse;
                    fromAmino(object: _155.QueryPacketCommitmentResponseAmino): _155.QueryPacketCommitmentResponse;
                    toAmino(message: _155.QueryPacketCommitmentResponse): _155.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _155.QueryPacketCommitmentResponseAminoMsg): _155.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _155.QueryPacketCommitmentResponse): _155.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryPacketCommitmentResponseProtoMsg): _155.QueryPacketCommitmentResponse;
                    toProto(message: _155.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryPacketCommitmentResponse): _155.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _155.QueryPacketCommitmentsRequest;
                    toJSON(message: _155.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_155.QueryPacketCommitmentsRequest>): _155.QueryPacketCommitmentsRequest;
                    fromAmino(object: _155.QueryPacketCommitmentsRequestAmino): _155.QueryPacketCommitmentsRequest;
                    toAmino(message: _155.QueryPacketCommitmentsRequest): _155.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _155.QueryPacketCommitmentsRequestAminoMsg): _155.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _155.QueryPacketCommitmentsRequest): _155.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryPacketCommitmentsRequestProtoMsg): _155.QueryPacketCommitmentsRequest;
                    toProto(message: _155.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryPacketCommitmentsRequest): _155.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _155.QueryPacketCommitmentsResponse;
                    toJSON(message: _155.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_155.QueryPacketCommitmentsResponse>): _155.QueryPacketCommitmentsResponse;
                    fromAmino(object: _155.QueryPacketCommitmentsResponseAmino): _155.QueryPacketCommitmentsResponse;
                    toAmino(message: _155.QueryPacketCommitmentsResponse): _155.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _155.QueryPacketCommitmentsResponseAminoMsg): _155.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _155.QueryPacketCommitmentsResponse): _155.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryPacketCommitmentsResponseProtoMsg): _155.QueryPacketCommitmentsResponse;
                    toProto(message: _155.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryPacketCommitmentsResponse): _155.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryPacketReceiptRequest;
                    fromJSON(object: any): _155.QueryPacketReceiptRequest;
                    toJSON(message: _155.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_155.QueryPacketReceiptRequest>): _155.QueryPacketReceiptRequest;
                    fromAmino(object: _155.QueryPacketReceiptRequestAmino): _155.QueryPacketReceiptRequest;
                    toAmino(message: _155.QueryPacketReceiptRequest): _155.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _155.QueryPacketReceiptRequestAminoMsg): _155.QueryPacketReceiptRequest;
                    toAminoMsg(message: _155.QueryPacketReceiptRequest): _155.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryPacketReceiptRequestProtoMsg): _155.QueryPacketReceiptRequest;
                    toProto(message: _155.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryPacketReceiptRequest): _155.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryPacketReceiptResponse;
                    fromJSON(object: any): _155.QueryPacketReceiptResponse;
                    toJSON(message: _155.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_155.QueryPacketReceiptResponse>): _155.QueryPacketReceiptResponse;
                    fromAmino(object: _155.QueryPacketReceiptResponseAmino): _155.QueryPacketReceiptResponse;
                    toAmino(message: _155.QueryPacketReceiptResponse): _155.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _155.QueryPacketReceiptResponseAminoMsg): _155.QueryPacketReceiptResponse;
                    toAminoMsg(message: _155.QueryPacketReceiptResponse): _155.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryPacketReceiptResponseProtoMsg): _155.QueryPacketReceiptResponse;
                    toProto(message: _155.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryPacketReceiptResponse): _155.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _155.QueryPacketAcknowledgementRequest;
                    toJSON(message: _155.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_155.QueryPacketAcknowledgementRequest>): _155.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _155.QueryPacketAcknowledgementRequestAmino): _155.QueryPacketAcknowledgementRequest;
                    toAmino(message: _155.QueryPacketAcknowledgementRequest): _155.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _155.QueryPacketAcknowledgementRequestAminoMsg): _155.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _155.QueryPacketAcknowledgementRequest): _155.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryPacketAcknowledgementRequestProtoMsg): _155.QueryPacketAcknowledgementRequest;
                    toProto(message: _155.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryPacketAcknowledgementRequest): _155.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _155.QueryPacketAcknowledgementResponse;
                    toJSON(message: _155.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_155.QueryPacketAcknowledgementResponse>): _155.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _155.QueryPacketAcknowledgementResponseAmino): _155.QueryPacketAcknowledgementResponse;
                    toAmino(message: _155.QueryPacketAcknowledgementResponse): _155.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _155.QueryPacketAcknowledgementResponseAminoMsg): _155.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _155.QueryPacketAcknowledgementResponse): _155.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryPacketAcknowledgementResponseProtoMsg): _155.QueryPacketAcknowledgementResponse;
                    toProto(message: _155.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryPacketAcknowledgementResponse): _155.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _155.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _155.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_155.QueryPacketAcknowledgementsRequest>): _155.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _155.QueryPacketAcknowledgementsRequestAmino): _155.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _155.QueryPacketAcknowledgementsRequest): _155.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _155.QueryPacketAcknowledgementsRequestAminoMsg): _155.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _155.QueryPacketAcknowledgementsRequest): _155.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryPacketAcknowledgementsRequestProtoMsg): _155.QueryPacketAcknowledgementsRequest;
                    toProto(message: _155.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryPacketAcknowledgementsRequest): _155.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _155.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _155.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_155.QueryPacketAcknowledgementsResponse>): _155.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _155.QueryPacketAcknowledgementsResponseAmino): _155.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _155.QueryPacketAcknowledgementsResponse): _155.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _155.QueryPacketAcknowledgementsResponseAminoMsg): _155.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _155.QueryPacketAcknowledgementsResponse): _155.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryPacketAcknowledgementsResponseProtoMsg): _155.QueryPacketAcknowledgementsResponse;
                    toProto(message: _155.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryPacketAcknowledgementsResponse): _155.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _155.QueryUnreceivedPacketsRequest;
                    toJSON(message: _155.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_155.QueryUnreceivedPacketsRequest>): _155.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _155.QueryUnreceivedPacketsRequestAmino): _155.QueryUnreceivedPacketsRequest;
                    toAmino(message: _155.QueryUnreceivedPacketsRequest): _155.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _155.QueryUnreceivedPacketsRequestAminoMsg): _155.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _155.QueryUnreceivedPacketsRequest): _155.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryUnreceivedPacketsRequestProtoMsg): _155.QueryUnreceivedPacketsRequest;
                    toProto(message: _155.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryUnreceivedPacketsRequest): _155.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _155.QueryUnreceivedPacketsResponse;
                    toJSON(message: _155.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_155.QueryUnreceivedPacketsResponse>): _155.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _155.QueryUnreceivedPacketsResponseAmino): _155.QueryUnreceivedPacketsResponse;
                    toAmino(message: _155.QueryUnreceivedPacketsResponse): _155.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _155.QueryUnreceivedPacketsResponseAminoMsg): _155.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _155.QueryUnreceivedPacketsResponse): _155.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryUnreceivedPacketsResponseProtoMsg): _155.QueryUnreceivedPacketsResponse;
                    toProto(message: _155.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryUnreceivedPacketsResponse): _155.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _155.QueryUnreceivedAcksRequest;
                    toJSON(message: _155.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_155.QueryUnreceivedAcksRequest>): _155.QueryUnreceivedAcksRequest;
                    fromAmino(object: _155.QueryUnreceivedAcksRequestAmino): _155.QueryUnreceivedAcksRequest;
                    toAmino(message: _155.QueryUnreceivedAcksRequest): _155.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _155.QueryUnreceivedAcksRequestAminoMsg): _155.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _155.QueryUnreceivedAcksRequest): _155.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryUnreceivedAcksRequestProtoMsg): _155.QueryUnreceivedAcksRequest;
                    toProto(message: _155.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryUnreceivedAcksRequest): _155.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _155.QueryUnreceivedAcksResponse;
                    toJSON(message: _155.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_155.QueryUnreceivedAcksResponse>): _155.QueryUnreceivedAcksResponse;
                    fromAmino(object: _155.QueryUnreceivedAcksResponseAmino): _155.QueryUnreceivedAcksResponse;
                    toAmino(message: _155.QueryUnreceivedAcksResponse): _155.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _155.QueryUnreceivedAcksResponseAminoMsg): _155.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _155.QueryUnreceivedAcksResponse): _155.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryUnreceivedAcksResponseProtoMsg): _155.QueryUnreceivedAcksResponse;
                    toProto(message: _155.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryUnreceivedAcksResponse): _155.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _155.QueryNextSequenceReceiveRequest;
                    toJSON(message: _155.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_155.QueryNextSequenceReceiveRequest>): _155.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _155.QueryNextSequenceReceiveRequestAmino): _155.QueryNextSequenceReceiveRequest;
                    toAmino(message: _155.QueryNextSequenceReceiveRequest): _155.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _155.QueryNextSequenceReceiveRequestAminoMsg): _155.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _155.QueryNextSequenceReceiveRequest): _155.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryNextSequenceReceiveRequestProtoMsg): _155.QueryNextSequenceReceiveRequest;
                    toProto(message: _155.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryNextSequenceReceiveRequest): _155.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _155.QueryNextSequenceReceiveResponse;
                    toJSON(message: _155.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_155.QueryNextSequenceReceiveResponse>): _155.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _155.QueryNextSequenceReceiveResponseAmino): _155.QueryNextSequenceReceiveResponse;
                    toAmino(message: _155.QueryNextSequenceReceiveResponse): _155.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _155.QueryNextSequenceReceiveResponseAminoMsg): _155.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _155.QueryNextSequenceReceiveResponse): _155.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryNextSequenceReceiveResponseProtoMsg): _155.QueryNextSequenceReceiveResponse;
                    toProto(message: _155.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryNextSequenceReceiveResponse): _155.QueryNextSequenceReceiveResponseProtoMsg;
                };
                QueryNextSequenceSendRequest: {
                    typeUrl: string;
                    encode(message: _155.QueryNextSequenceSendRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryNextSequenceSendRequest;
                    fromJSON(object: any): _155.QueryNextSequenceSendRequest;
                    toJSON(message: _155.QueryNextSequenceSendRequest): unknown;
                    fromPartial(object: Partial<_155.QueryNextSequenceSendRequest>): _155.QueryNextSequenceSendRequest;
                    fromAmino(object: _155.QueryNextSequenceSendRequestAmino): _155.QueryNextSequenceSendRequest;
                    toAmino(message: _155.QueryNextSequenceSendRequest): _155.QueryNextSequenceSendRequestAmino;
                    fromAminoMsg(object: _155.QueryNextSequenceSendRequestAminoMsg): _155.QueryNextSequenceSendRequest;
                    toAminoMsg(message: _155.QueryNextSequenceSendRequest): _155.QueryNextSequenceSendRequestAminoMsg;
                    fromProtoMsg(message: _155.QueryNextSequenceSendRequestProtoMsg): _155.QueryNextSequenceSendRequest;
                    toProto(message: _155.QueryNextSequenceSendRequest): Uint8Array;
                    toProtoMsg(message: _155.QueryNextSequenceSendRequest): _155.QueryNextSequenceSendRequestProtoMsg;
                };
                QueryNextSequenceSendResponse: {
                    typeUrl: string;
                    encode(message: _155.QueryNextSequenceSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.QueryNextSequenceSendResponse;
                    fromJSON(object: any): _155.QueryNextSequenceSendResponse;
                    toJSON(message: _155.QueryNextSequenceSendResponse): unknown;
                    fromPartial(object: Partial<_155.QueryNextSequenceSendResponse>): _155.QueryNextSequenceSendResponse;
                    fromAmino(object: _155.QueryNextSequenceSendResponseAmino): _155.QueryNextSequenceSendResponse;
                    toAmino(message: _155.QueryNextSequenceSendResponse): _155.QueryNextSequenceSendResponseAmino;
                    fromAminoMsg(object: _155.QueryNextSequenceSendResponseAminoMsg): _155.QueryNextSequenceSendResponse;
                    toAminoMsg(message: _155.QueryNextSequenceSendResponse): _155.QueryNextSequenceSendResponseAminoMsg;
                    fromProtoMsg(message: _155.QueryNextSequenceSendResponseProtoMsg): _155.QueryNextSequenceSendResponse;
                    toProto(message: _155.QueryNextSequenceSendResponse): Uint8Array;
                    toProtoMsg(message: _155.QueryNextSequenceSendResponse): _155.QueryNextSequenceSendResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _154.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.GenesisState;
                    fromJSON(object: any): _154.GenesisState;
                    toJSON(message: _154.GenesisState): unknown;
                    fromPartial(object: Partial<_154.GenesisState>): _154.GenesisState;
                    fromAmino(object: _154.GenesisStateAmino): _154.GenesisState;
                    toAmino(message: _154.GenesisState): _154.GenesisStateAmino;
                    fromAminoMsg(object: _154.GenesisStateAminoMsg): _154.GenesisState;
                    toAminoMsg(message: _154.GenesisState): _154.GenesisStateAminoMsg;
                    fromProtoMsg(message: _154.GenesisStateProtoMsg): _154.GenesisState;
                    toProto(message: _154.GenesisState): Uint8Array;
                    toProtoMsg(message: _154.GenesisState): _154.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _154.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.PacketSequence;
                    fromJSON(object: any): _154.PacketSequence;
                    toJSON(message: _154.PacketSequence): unknown;
                    fromPartial(object: Partial<_154.PacketSequence>): _154.PacketSequence;
                    fromAmino(object: _154.PacketSequenceAmino): _154.PacketSequence;
                    toAmino(message: _154.PacketSequence): _154.PacketSequenceAmino;
                    fromAminoMsg(object: _154.PacketSequenceAminoMsg): _154.PacketSequence;
                    toAminoMsg(message: _154.PacketSequence): _154.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _154.PacketSequenceProtoMsg): _154.PacketSequence;
                    toProto(message: _154.PacketSequence): Uint8Array;
                    toProtoMsg(message: _154.PacketSequence): _154.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _153.State;
                stateToJSON(object: _153.State): string;
                orderFromJSON(object: any): _153.Order;
                orderToJSON(object: _153.Order): string;
                State: typeof _153.State;
                StateSDKType: typeof _153.State;
                StateAmino: typeof _153.State;
                Order: typeof _153.Order;
                OrderSDKType: typeof _153.Order;
                OrderAmino: typeof _153.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _153.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.Channel;
                    fromJSON(object: any): _153.Channel;
                    toJSON(message: _153.Channel): unknown;
                    fromPartial(object: Partial<_153.Channel>): _153.Channel;
                    fromAmino(object: _153.ChannelAmino): _153.Channel;
                    toAmino(message: _153.Channel): _153.ChannelAmino;
                    fromAminoMsg(object: _153.ChannelAminoMsg): _153.Channel;
                    toAminoMsg(message: _153.Channel): _153.ChannelAminoMsg;
                    fromProtoMsg(message: _153.ChannelProtoMsg): _153.Channel;
                    toProto(message: _153.Channel): Uint8Array;
                    toProtoMsg(message: _153.Channel): _153.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _153.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.IdentifiedChannel;
                    fromJSON(object: any): _153.IdentifiedChannel;
                    toJSON(message: _153.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_153.IdentifiedChannel>): _153.IdentifiedChannel;
                    fromAmino(object: _153.IdentifiedChannelAmino): _153.IdentifiedChannel;
                    toAmino(message: _153.IdentifiedChannel): _153.IdentifiedChannelAmino;
                    fromAminoMsg(object: _153.IdentifiedChannelAminoMsg): _153.IdentifiedChannel;
                    toAminoMsg(message: _153.IdentifiedChannel): _153.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _153.IdentifiedChannelProtoMsg): _153.IdentifiedChannel;
                    toProto(message: _153.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _153.IdentifiedChannel): _153.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _153.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.Counterparty;
                    fromJSON(object: any): _153.Counterparty;
                    toJSON(message: _153.Counterparty): unknown;
                    fromPartial(object: Partial<_153.Counterparty>): _153.Counterparty;
                    fromAmino(object: _153.CounterpartyAmino): _153.Counterparty;
                    toAmino(message: _153.Counterparty): _153.CounterpartyAmino;
                    fromAminoMsg(object: _153.CounterpartyAminoMsg): _153.Counterparty;
                    toAminoMsg(message: _153.Counterparty): _153.CounterpartyAminoMsg;
                    fromProtoMsg(message: _153.CounterpartyProtoMsg): _153.Counterparty;
                    toProto(message: _153.Counterparty): Uint8Array;
                    toProtoMsg(message: _153.Counterparty): _153.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _153.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.Packet;
                    fromJSON(object: any): _153.Packet;
                    toJSON(message: _153.Packet): unknown;
                    fromPartial(object: Partial<_153.Packet>): _153.Packet;
                    fromAmino(object: _153.PacketAmino): _153.Packet;
                    toAmino(message: _153.Packet): _153.PacketAmino;
                    fromAminoMsg(object: _153.PacketAminoMsg): _153.Packet;
                    toAminoMsg(message: _153.Packet): _153.PacketAminoMsg;
                    fromProtoMsg(message: _153.PacketProtoMsg): _153.Packet;
                    toProto(message: _153.Packet): Uint8Array;
                    toProtoMsg(message: _153.Packet): _153.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _153.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.PacketState;
                    fromJSON(object: any): _153.PacketState;
                    toJSON(message: _153.PacketState): unknown;
                    fromPartial(object: Partial<_153.PacketState>): _153.PacketState;
                    fromAmino(object: _153.PacketStateAmino): _153.PacketState;
                    toAmino(message: _153.PacketState): _153.PacketStateAmino;
                    fromAminoMsg(object: _153.PacketStateAminoMsg): _153.PacketState;
                    toAminoMsg(message: _153.PacketState): _153.PacketStateAminoMsg;
                    fromProtoMsg(message: _153.PacketStateProtoMsg): _153.PacketState;
                    toProto(message: _153.PacketState): Uint8Array;
                    toProtoMsg(message: _153.PacketState): _153.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _153.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.PacketId;
                    fromJSON(object: any): _153.PacketId;
                    toJSON(message: _153.PacketId): unknown;
                    fromPartial(object: Partial<_153.PacketId>): _153.PacketId;
                    fromAmino(object: _153.PacketIdAmino): _153.PacketId;
                    toAmino(message: _153.PacketId): _153.PacketIdAmino;
                    fromAminoMsg(object: _153.PacketIdAminoMsg): _153.PacketId;
                    toAminoMsg(message: _153.PacketId): _153.PacketIdAminoMsg;
                    fromProtoMsg(message: _153.PacketIdProtoMsg): _153.PacketId;
                    toProto(message: _153.PacketId): Uint8Array;
                    toProtoMsg(message: _153.PacketId): _153.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _153.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.Acknowledgement;
                    fromJSON(object: any): _153.Acknowledgement;
                    toJSON(message: _153.Acknowledgement): unknown;
                    fromPartial(object: Partial<_153.Acknowledgement>): _153.Acknowledgement;
                    fromAmino(object: _153.AcknowledgementAmino): _153.Acknowledgement;
                    toAmino(message: _153.Acknowledgement): _153.AcknowledgementAmino;
                    fromAminoMsg(object: _153.AcknowledgementAminoMsg): _153.Acknowledgement;
                    toAminoMsg(message: _153.Acknowledgement): _153.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _153.AcknowledgementProtoMsg): _153.Acknowledgement;
                    toProto(message: _153.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _153.Acknowledgement): _153.AcknowledgementProtoMsg;
                };
                Timeout: {
                    typeUrl: string;
                    encode(message: _153.Timeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.Timeout;
                    fromJSON(object: any): _153.Timeout;
                    toJSON(message: _153.Timeout): unknown;
                    fromPartial(object: Partial<_153.Timeout>): _153.Timeout;
                    fromAmino(object: _153.TimeoutAmino): _153.Timeout;
                    toAmino(message: _153.Timeout): _153.TimeoutAmino;
                    fromAminoMsg(object: _153.TimeoutAminoMsg): _153.Timeout;
                    toAminoMsg(message: _153.Timeout): _153.TimeoutAminoMsg;
                    fromProtoMsg(message: _153.TimeoutProtoMsg): _153.Timeout;
                    toProto(message: _153.Timeout): Uint8Array;
                    toProtoMsg(message: _153.Timeout): _153.TimeoutProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                Msg: typeof _306.Msg;
                Query: typeof _300.Query;
                QueryClientImpl: typeof _300.QueryClientImpl;
                LCDQueryClient: typeof _294.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _160.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _160.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _160.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _160.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recoverClient(value: _160.MsgRecoverClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        iBCSoftwareUpgrade(value: _160.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClientParams(value: _160.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _160.MsgCreateClient): {
                            typeUrl: string;
                            value: _160.MsgCreateClient;
                        };
                        updateClient(value: _160.MsgUpdateClient): {
                            typeUrl: string;
                            value: _160.MsgUpdateClient;
                        };
                        upgradeClient(value: _160.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _160.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _160.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _160.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: _160.MsgRecoverClient): {
                            typeUrl: string;
                            value: _160.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: _160.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: _160.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: _160.MsgUpdateParams): {
                            typeUrl: string;
                            value: _160.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        createClient(value: _160.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _160.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _160.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _160.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recoverClient(value: _160.MsgRecoverClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        iBCSoftwareUpgrade(value: _160.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClientParams(value: _160.MsgUpdateParams): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _160.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _160.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _160.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _160.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: any): {
                            typeUrl: string;
                            value: _160.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: any): {
                            typeUrl: string;
                            value: _160.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: any): {
                            typeUrl: string;
                            value: _160.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        createClient(value: _160.MsgCreateClient): {
                            typeUrl: string;
                            value: _160.MsgCreateClient;
                        };
                        updateClient(value: _160.MsgUpdateClient): {
                            typeUrl: string;
                            value: _160.MsgUpdateClient;
                        };
                        upgradeClient(value: _160.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _160.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _160.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _160.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: _160.MsgRecoverClient): {
                            typeUrl: string;
                            value: _160.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: _160.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: _160.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: _160.MsgUpdateParams): {
                            typeUrl: string;
                            value: _160.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _160.MsgCreateClient) => _160.MsgCreateClientAmino;
                        fromAmino: (object: _160.MsgCreateClientAmino) => _160.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _160.MsgUpdateClient) => _160.MsgUpdateClientAmino;
                        fromAmino: (object: _160.MsgUpdateClientAmino) => _160.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _160.MsgUpgradeClient) => _160.MsgUpgradeClientAmino;
                        fromAmino: (object: _160.MsgUpgradeClientAmino) => _160.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _160.MsgSubmitMisbehaviour) => _160.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _160.MsgSubmitMisbehaviourAmino) => _160.MsgSubmitMisbehaviour;
                    };
                    "/ibc.core.client.v1.MsgRecoverClient": {
                        aminoType: string;
                        toAmino: (message: _160.MsgRecoverClient) => _160.MsgRecoverClientAmino;
                        fromAmino: (object: _160.MsgRecoverClientAmino) => _160.MsgRecoverClient;
                    };
                    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
                        aminoType: string;
                        toAmino: (message: _160.MsgIBCSoftwareUpgrade) => _160.MsgIBCSoftwareUpgradeAmino;
                        fromAmino: (object: _160.MsgIBCSoftwareUpgradeAmino) => _160.MsgIBCSoftwareUpgrade;
                    };
                    "/ibc.core.client.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _160.MsgUpdateParams) => _160.MsgUpdateParamsAmino;
                        fromAmino: (object: _160.MsgUpdateParamsAmino) => _160.MsgUpdateParams;
                    };
                };
                protobufPackage: "ibc.core.client.v1";
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _160.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgCreateClient;
                    fromJSON(object: any): _160.MsgCreateClient;
                    toJSON(message: _160.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_160.MsgCreateClient>): _160.MsgCreateClient;
                    fromAmino(object: _160.MsgCreateClientAmino): _160.MsgCreateClient;
                    toAmino(message: _160.MsgCreateClient): _160.MsgCreateClientAmino;
                    fromAminoMsg(object: _160.MsgCreateClientAminoMsg): _160.MsgCreateClient;
                    toAminoMsg(message: _160.MsgCreateClient): _160.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _160.MsgCreateClientProtoMsg): _160.MsgCreateClient;
                    toProto(message: _160.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _160.MsgCreateClient): _160.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _160.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgCreateClientResponse;
                    fromJSON(_: any): _160.MsgCreateClientResponse;
                    toJSON(_: _160.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_160.MsgCreateClientResponse>): _160.MsgCreateClientResponse;
                    fromAmino(_: _160.MsgCreateClientResponseAmino): _160.MsgCreateClientResponse;
                    toAmino(_: _160.MsgCreateClientResponse): _160.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _160.MsgCreateClientResponseAminoMsg): _160.MsgCreateClientResponse;
                    toAminoMsg(message: _160.MsgCreateClientResponse): _160.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgCreateClientResponseProtoMsg): _160.MsgCreateClientResponse;
                    toProto(message: _160.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgCreateClientResponse): _160.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _160.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgUpdateClient;
                    fromJSON(object: any): _160.MsgUpdateClient;
                    toJSON(message: _160.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_160.MsgUpdateClient>): _160.MsgUpdateClient;
                    fromAmino(object: _160.MsgUpdateClientAmino): _160.MsgUpdateClient;
                    toAmino(message: _160.MsgUpdateClient): _160.MsgUpdateClientAmino;
                    fromAminoMsg(object: _160.MsgUpdateClientAminoMsg): _160.MsgUpdateClient;
                    toAminoMsg(message: _160.MsgUpdateClient): _160.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _160.MsgUpdateClientProtoMsg): _160.MsgUpdateClient;
                    toProto(message: _160.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _160.MsgUpdateClient): _160.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _160.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgUpdateClientResponse;
                    fromJSON(_: any): _160.MsgUpdateClientResponse;
                    toJSON(_: _160.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_160.MsgUpdateClientResponse>): _160.MsgUpdateClientResponse;
                    fromAmino(_: _160.MsgUpdateClientResponseAmino): _160.MsgUpdateClientResponse;
                    toAmino(_: _160.MsgUpdateClientResponse): _160.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _160.MsgUpdateClientResponseAminoMsg): _160.MsgUpdateClientResponse;
                    toAminoMsg(message: _160.MsgUpdateClientResponse): _160.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgUpdateClientResponseProtoMsg): _160.MsgUpdateClientResponse;
                    toProto(message: _160.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgUpdateClientResponse): _160.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _160.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgUpgradeClient;
                    fromJSON(object: any): _160.MsgUpgradeClient;
                    toJSON(message: _160.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_160.MsgUpgradeClient>): _160.MsgUpgradeClient;
                    fromAmino(object: _160.MsgUpgradeClientAmino): _160.MsgUpgradeClient;
                    toAmino(message: _160.MsgUpgradeClient): _160.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _160.MsgUpgradeClientAminoMsg): _160.MsgUpgradeClient;
                    toAminoMsg(message: _160.MsgUpgradeClient): _160.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _160.MsgUpgradeClientProtoMsg): _160.MsgUpgradeClient;
                    toProto(message: _160.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _160.MsgUpgradeClient): _160.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _160.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgUpgradeClientResponse;
                    fromJSON(_: any): _160.MsgUpgradeClientResponse;
                    toJSON(_: _160.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_160.MsgUpgradeClientResponse>): _160.MsgUpgradeClientResponse;
                    fromAmino(_: _160.MsgUpgradeClientResponseAmino): _160.MsgUpgradeClientResponse;
                    toAmino(_: _160.MsgUpgradeClientResponse): _160.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _160.MsgUpgradeClientResponseAminoMsg): _160.MsgUpgradeClientResponse;
                    toAminoMsg(message: _160.MsgUpgradeClientResponse): _160.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgUpgradeClientResponseProtoMsg): _160.MsgUpgradeClientResponse;
                    toProto(message: _160.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgUpgradeClientResponse): _160.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _160.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _160.MsgSubmitMisbehaviour;
                    toJSON(message: _160.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_160.MsgSubmitMisbehaviour>): _160.MsgSubmitMisbehaviour;
                    fromAmino(object: _160.MsgSubmitMisbehaviourAmino): _160.MsgSubmitMisbehaviour;
                    toAmino(message: _160.MsgSubmitMisbehaviour): _160.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _160.MsgSubmitMisbehaviourAminoMsg): _160.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _160.MsgSubmitMisbehaviour): _160.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _160.MsgSubmitMisbehaviourProtoMsg): _160.MsgSubmitMisbehaviour;
                    toProto(message: _160.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _160.MsgSubmitMisbehaviour): _160.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _160.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _160.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _160.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_160.MsgSubmitMisbehaviourResponse>): _160.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _160.MsgSubmitMisbehaviourResponseAmino): _160.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _160.MsgSubmitMisbehaviourResponse): _160.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _160.MsgSubmitMisbehaviourResponseAminoMsg): _160.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _160.MsgSubmitMisbehaviourResponse): _160.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgSubmitMisbehaviourResponseProtoMsg): _160.MsgSubmitMisbehaviourResponse;
                    toProto(message: _160.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgSubmitMisbehaviourResponse): _160.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                MsgRecoverClient: {
                    typeUrl: string;
                    encode(message: _160.MsgRecoverClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgRecoverClient;
                    fromJSON(object: any): _160.MsgRecoverClient;
                    toJSON(message: _160.MsgRecoverClient): unknown;
                    fromPartial(object: Partial<_160.MsgRecoverClient>): _160.MsgRecoverClient;
                    fromAmino(object: _160.MsgRecoverClientAmino): _160.MsgRecoverClient;
                    toAmino(message: _160.MsgRecoverClient): _160.MsgRecoverClientAmino;
                    fromAminoMsg(object: _160.MsgRecoverClientAminoMsg): _160.MsgRecoverClient;
                    toAminoMsg(message: _160.MsgRecoverClient): _160.MsgRecoverClientAminoMsg;
                    fromProtoMsg(message: _160.MsgRecoverClientProtoMsg): _160.MsgRecoverClient;
                    toProto(message: _160.MsgRecoverClient): Uint8Array;
                    toProtoMsg(message: _160.MsgRecoverClient): _160.MsgRecoverClientProtoMsg;
                };
                MsgRecoverClientResponse: {
                    typeUrl: string;
                    encode(_: _160.MsgRecoverClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgRecoverClientResponse;
                    fromJSON(_: any): _160.MsgRecoverClientResponse;
                    toJSON(_: _160.MsgRecoverClientResponse): unknown;
                    fromPartial(_: Partial<_160.MsgRecoverClientResponse>): _160.MsgRecoverClientResponse;
                    fromAmino(_: _160.MsgRecoverClientResponseAmino): _160.MsgRecoverClientResponse;
                    toAmino(_: _160.MsgRecoverClientResponse): _160.MsgRecoverClientResponseAmino;
                    fromAminoMsg(object: _160.MsgRecoverClientResponseAminoMsg): _160.MsgRecoverClientResponse;
                    toAminoMsg(message: _160.MsgRecoverClientResponse): _160.MsgRecoverClientResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgRecoverClientResponseProtoMsg): _160.MsgRecoverClientResponse;
                    toProto(message: _160.MsgRecoverClientResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgRecoverClientResponse): _160.MsgRecoverClientResponseProtoMsg;
                };
                MsgIBCSoftwareUpgrade: {
                    typeUrl: string;
                    encode(message: _160.MsgIBCSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgIBCSoftwareUpgrade;
                    fromJSON(object: any): _160.MsgIBCSoftwareUpgrade;
                    toJSON(message: _160.MsgIBCSoftwareUpgrade): unknown;
                    fromPartial(object: Partial<_160.MsgIBCSoftwareUpgrade>): _160.MsgIBCSoftwareUpgrade;
                    fromAmino(object: _160.MsgIBCSoftwareUpgradeAmino): _160.MsgIBCSoftwareUpgrade;
                    toAmino(message: _160.MsgIBCSoftwareUpgrade): _160.MsgIBCSoftwareUpgradeAmino;
                    fromAminoMsg(object: _160.MsgIBCSoftwareUpgradeAminoMsg): _160.MsgIBCSoftwareUpgrade;
                    toAminoMsg(message: _160.MsgIBCSoftwareUpgrade): _160.MsgIBCSoftwareUpgradeAminoMsg;
                    fromProtoMsg(message: _160.MsgIBCSoftwareUpgradeProtoMsg): _160.MsgIBCSoftwareUpgrade;
                    toProto(message: _160.MsgIBCSoftwareUpgrade): Uint8Array;
                    toProtoMsg(message: _160.MsgIBCSoftwareUpgrade): _160.MsgIBCSoftwareUpgradeProtoMsg;
                };
                MsgIBCSoftwareUpgradeResponse: {
                    typeUrl: string;
                    encode(_: _160.MsgIBCSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgIBCSoftwareUpgradeResponse;
                    fromJSON(_: any): _160.MsgIBCSoftwareUpgradeResponse;
                    toJSON(_: _160.MsgIBCSoftwareUpgradeResponse): unknown;
                    fromPartial(_: Partial<_160.MsgIBCSoftwareUpgradeResponse>): _160.MsgIBCSoftwareUpgradeResponse;
                    fromAmino(_: _160.MsgIBCSoftwareUpgradeResponseAmino): _160.MsgIBCSoftwareUpgradeResponse;
                    toAmino(_: _160.MsgIBCSoftwareUpgradeResponse): _160.MsgIBCSoftwareUpgradeResponseAmino;
                    fromAminoMsg(object: _160.MsgIBCSoftwareUpgradeResponseAminoMsg): _160.MsgIBCSoftwareUpgradeResponse;
                    toAminoMsg(message: _160.MsgIBCSoftwareUpgradeResponse): _160.MsgIBCSoftwareUpgradeResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgIBCSoftwareUpgradeResponseProtoMsg): _160.MsgIBCSoftwareUpgradeResponse;
                    toProto(message: _160.MsgIBCSoftwareUpgradeResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgIBCSoftwareUpgradeResponse): _160.MsgIBCSoftwareUpgradeResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _160.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgUpdateParams;
                    fromJSON(object: any): _160.MsgUpdateParams;
                    toJSON(message: _160.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_160.MsgUpdateParams>): _160.MsgUpdateParams;
                    fromAmino(object: _160.MsgUpdateParamsAmino): _160.MsgUpdateParams;
                    toAmino(message: _160.MsgUpdateParams): _160.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _160.MsgUpdateParamsAminoMsg): _160.MsgUpdateParams;
                    toAminoMsg(message: _160.MsgUpdateParams): _160.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _160.MsgUpdateParamsProtoMsg): _160.MsgUpdateParams;
                    toProto(message: _160.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _160.MsgUpdateParams): _160.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _160.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.MsgUpdateParamsResponse;
                    fromJSON(_: any): _160.MsgUpdateParamsResponse;
                    toJSON(_: _160.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_160.MsgUpdateParamsResponse>): _160.MsgUpdateParamsResponse;
                    fromAmino(_: _160.MsgUpdateParamsResponseAmino): _160.MsgUpdateParamsResponse;
                    toAmino(_: _160.MsgUpdateParamsResponse): _160.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _160.MsgUpdateParamsResponseAminoMsg): _160.MsgUpdateParamsResponse;
                    toAminoMsg(message: _160.MsgUpdateParamsResponse): _160.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgUpdateParamsResponseProtoMsg): _160.MsgUpdateParamsResponse;
                    toProto(message: _160.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgUpdateParamsResponse): _160.MsgUpdateParamsResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryClientStateRequest;
                    fromJSON(object: any): _159.QueryClientStateRequest;
                    toJSON(message: _159.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_159.QueryClientStateRequest>): _159.QueryClientStateRequest;
                    fromAmino(object: _159.QueryClientStateRequestAmino): _159.QueryClientStateRequest;
                    toAmino(message: _159.QueryClientStateRequest): _159.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _159.QueryClientStateRequestAminoMsg): _159.QueryClientStateRequest;
                    toAminoMsg(message: _159.QueryClientStateRequest): _159.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryClientStateRequestProtoMsg): _159.QueryClientStateRequest;
                    toProto(message: _159.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryClientStateRequest): _159.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryClientStateResponse;
                    fromJSON(object: any): _159.QueryClientStateResponse;
                    toJSON(message: _159.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_159.QueryClientStateResponse>): _159.QueryClientStateResponse;
                    fromAmino(object: _159.QueryClientStateResponseAmino): _159.QueryClientStateResponse;
                    toAmino(message: _159.QueryClientStateResponse): _159.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _159.QueryClientStateResponseAminoMsg): _159.QueryClientStateResponse;
                    toAminoMsg(message: _159.QueryClientStateResponse): _159.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryClientStateResponseProtoMsg): _159.QueryClientStateResponse;
                    toProto(message: _159.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryClientStateResponse): _159.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryClientStatesRequest;
                    fromJSON(object: any): _159.QueryClientStatesRequest;
                    toJSON(message: _159.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_159.QueryClientStatesRequest>): _159.QueryClientStatesRequest;
                    fromAmino(object: _159.QueryClientStatesRequestAmino): _159.QueryClientStatesRequest;
                    toAmino(message: _159.QueryClientStatesRequest): _159.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _159.QueryClientStatesRequestAminoMsg): _159.QueryClientStatesRequest;
                    toAminoMsg(message: _159.QueryClientStatesRequest): _159.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryClientStatesRequestProtoMsg): _159.QueryClientStatesRequest;
                    toProto(message: _159.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryClientStatesRequest): _159.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryClientStatesResponse;
                    fromJSON(object: any): _159.QueryClientStatesResponse;
                    toJSON(message: _159.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_159.QueryClientStatesResponse>): _159.QueryClientStatesResponse;
                    fromAmino(object: _159.QueryClientStatesResponseAmino): _159.QueryClientStatesResponse;
                    toAmino(message: _159.QueryClientStatesResponse): _159.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _159.QueryClientStatesResponseAminoMsg): _159.QueryClientStatesResponse;
                    toAminoMsg(message: _159.QueryClientStatesResponse): _159.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryClientStatesResponseProtoMsg): _159.QueryClientStatesResponse;
                    toProto(message: _159.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryClientStatesResponse): _159.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryConsensusStateRequest;
                    fromJSON(object: any): _159.QueryConsensusStateRequest;
                    toJSON(message: _159.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_159.QueryConsensusStateRequest>): _159.QueryConsensusStateRequest;
                    fromAmino(object: _159.QueryConsensusStateRequestAmino): _159.QueryConsensusStateRequest;
                    toAmino(message: _159.QueryConsensusStateRequest): _159.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _159.QueryConsensusStateRequestAminoMsg): _159.QueryConsensusStateRequest;
                    toAminoMsg(message: _159.QueryConsensusStateRequest): _159.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryConsensusStateRequestProtoMsg): _159.QueryConsensusStateRequest;
                    toProto(message: _159.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryConsensusStateRequest): _159.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryConsensusStateResponse;
                    fromJSON(object: any): _159.QueryConsensusStateResponse;
                    toJSON(message: _159.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_159.QueryConsensusStateResponse>): _159.QueryConsensusStateResponse;
                    fromAmino(object: _159.QueryConsensusStateResponseAmino): _159.QueryConsensusStateResponse;
                    toAmino(message: _159.QueryConsensusStateResponse): _159.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _159.QueryConsensusStateResponseAminoMsg): _159.QueryConsensusStateResponse;
                    toAminoMsg(message: _159.QueryConsensusStateResponse): _159.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryConsensusStateResponseProtoMsg): _159.QueryConsensusStateResponse;
                    toProto(message: _159.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryConsensusStateResponse): _159.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryConsensusStatesRequest;
                    fromJSON(object: any): _159.QueryConsensusStatesRequest;
                    toJSON(message: _159.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_159.QueryConsensusStatesRequest>): _159.QueryConsensusStatesRequest;
                    fromAmino(object: _159.QueryConsensusStatesRequestAmino): _159.QueryConsensusStatesRequest;
                    toAmino(message: _159.QueryConsensusStatesRequest): _159.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _159.QueryConsensusStatesRequestAminoMsg): _159.QueryConsensusStatesRequest;
                    toAminoMsg(message: _159.QueryConsensusStatesRequest): _159.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryConsensusStatesRequestProtoMsg): _159.QueryConsensusStatesRequest;
                    toProto(message: _159.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryConsensusStatesRequest): _159.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryConsensusStatesResponse;
                    fromJSON(object: any): _159.QueryConsensusStatesResponse;
                    toJSON(message: _159.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_159.QueryConsensusStatesResponse>): _159.QueryConsensusStatesResponse;
                    fromAmino(object: _159.QueryConsensusStatesResponseAmino): _159.QueryConsensusStatesResponse;
                    toAmino(message: _159.QueryConsensusStatesResponse): _159.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _159.QueryConsensusStatesResponseAminoMsg): _159.QueryConsensusStatesResponse;
                    toAminoMsg(message: _159.QueryConsensusStatesResponse): _159.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryConsensusStatesResponseProtoMsg): _159.QueryConsensusStatesResponse;
                    toProto(message: _159.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryConsensusStatesResponse): _159.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _159.QueryConsensusStateHeightsRequest;
                    toJSON(message: _159.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: Partial<_159.QueryConsensusStateHeightsRequest>): _159.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _159.QueryConsensusStateHeightsRequestAmino): _159.QueryConsensusStateHeightsRequest;
                    toAmino(message: _159.QueryConsensusStateHeightsRequest): _159.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _159.QueryConsensusStateHeightsRequestAminoMsg): _159.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _159.QueryConsensusStateHeightsRequest): _159.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryConsensusStateHeightsRequestProtoMsg): _159.QueryConsensusStateHeightsRequest;
                    toProto(message: _159.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryConsensusStateHeightsRequest): _159.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _159.QueryConsensusStateHeightsResponse;
                    toJSON(message: _159.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: Partial<_159.QueryConsensusStateHeightsResponse>): _159.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _159.QueryConsensusStateHeightsResponseAmino): _159.QueryConsensusStateHeightsResponse;
                    toAmino(message: _159.QueryConsensusStateHeightsResponse): _159.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _159.QueryConsensusStateHeightsResponseAminoMsg): _159.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _159.QueryConsensusStateHeightsResponse): _159.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryConsensusStateHeightsResponseProtoMsg): _159.QueryConsensusStateHeightsResponse;
                    toProto(message: _159.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryConsensusStateHeightsResponse): _159.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryClientStatusRequest;
                    fromJSON(object: any): _159.QueryClientStatusRequest;
                    toJSON(message: _159.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_159.QueryClientStatusRequest>): _159.QueryClientStatusRequest;
                    fromAmino(object: _159.QueryClientStatusRequestAmino): _159.QueryClientStatusRequest;
                    toAmino(message: _159.QueryClientStatusRequest): _159.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _159.QueryClientStatusRequestAminoMsg): _159.QueryClientStatusRequest;
                    toAminoMsg(message: _159.QueryClientStatusRequest): _159.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryClientStatusRequestProtoMsg): _159.QueryClientStatusRequest;
                    toProto(message: _159.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryClientStatusRequest): _159.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryClientStatusResponse;
                    fromJSON(object: any): _159.QueryClientStatusResponse;
                    toJSON(message: _159.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_159.QueryClientStatusResponse>): _159.QueryClientStatusResponse;
                    fromAmino(object: _159.QueryClientStatusResponseAmino): _159.QueryClientStatusResponse;
                    toAmino(message: _159.QueryClientStatusResponse): _159.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _159.QueryClientStatusResponseAminoMsg): _159.QueryClientStatusResponse;
                    toAminoMsg(message: _159.QueryClientStatusResponse): _159.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryClientStatusResponseProtoMsg): _159.QueryClientStatusResponse;
                    toProto(message: _159.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryClientStatusResponse): _159.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _159.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryClientParamsRequest;
                    fromJSON(_: any): _159.QueryClientParamsRequest;
                    toJSON(_: _159.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_159.QueryClientParamsRequest>): _159.QueryClientParamsRequest;
                    fromAmino(_: _159.QueryClientParamsRequestAmino): _159.QueryClientParamsRequest;
                    toAmino(_: _159.QueryClientParamsRequest): _159.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _159.QueryClientParamsRequestAminoMsg): _159.QueryClientParamsRequest;
                    toAminoMsg(message: _159.QueryClientParamsRequest): _159.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryClientParamsRequestProtoMsg): _159.QueryClientParamsRequest;
                    toProto(message: _159.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryClientParamsRequest): _159.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryClientParamsResponse;
                    fromJSON(object: any): _159.QueryClientParamsResponse;
                    toJSON(message: _159.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_159.QueryClientParamsResponse>): _159.QueryClientParamsResponse;
                    fromAmino(object: _159.QueryClientParamsResponseAmino): _159.QueryClientParamsResponse;
                    toAmino(message: _159.QueryClientParamsResponse): _159.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _159.QueryClientParamsResponseAminoMsg): _159.QueryClientParamsResponse;
                    toAminoMsg(message: _159.QueryClientParamsResponse): _159.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryClientParamsResponseProtoMsg): _159.QueryClientParamsResponse;
                    toProto(message: _159.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryClientParamsResponse): _159.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _159.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _159.QueryUpgradedClientStateRequest;
                    toJSON(_: _159.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_159.QueryUpgradedClientStateRequest>): _159.QueryUpgradedClientStateRequest;
                    fromAmino(_: _159.QueryUpgradedClientStateRequestAmino): _159.QueryUpgradedClientStateRequest;
                    toAmino(_: _159.QueryUpgradedClientStateRequest): _159.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _159.QueryUpgradedClientStateRequestAminoMsg): _159.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _159.QueryUpgradedClientStateRequest): _159.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryUpgradedClientStateRequestProtoMsg): _159.QueryUpgradedClientStateRequest;
                    toProto(message: _159.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryUpgradedClientStateRequest): _159.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _159.QueryUpgradedClientStateResponse;
                    toJSON(message: _159.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_159.QueryUpgradedClientStateResponse>): _159.QueryUpgradedClientStateResponse;
                    fromAmino(object: _159.QueryUpgradedClientStateResponseAmino): _159.QueryUpgradedClientStateResponse;
                    toAmino(message: _159.QueryUpgradedClientStateResponse): _159.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _159.QueryUpgradedClientStateResponseAminoMsg): _159.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _159.QueryUpgradedClientStateResponse): _159.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryUpgradedClientStateResponseProtoMsg): _159.QueryUpgradedClientStateResponse;
                    toProto(message: _159.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryUpgradedClientStateResponse): _159.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _159.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _159.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _159.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_159.QueryUpgradedConsensusStateRequest>): _159.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _159.QueryUpgradedConsensusStateRequestAmino): _159.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _159.QueryUpgradedConsensusStateRequest): _159.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _159.QueryUpgradedConsensusStateRequestAminoMsg): _159.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _159.QueryUpgradedConsensusStateRequest): _159.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryUpgradedConsensusStateRequestProtoMsg): _159.QueryUpgradedConsensusStateRequest;
                    toProto(message: _159.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryUpgradedConsensusStateRequest): _159.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _159.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _159.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_159.QueryUpgradedConsensusStateResponse>): _159.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _159.QueryUpgradedConsensusStateResponseAmino): _159.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _159.QueryUpgradedConsensusStateResponse): _159.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _159.QueryUpgradedConsensusStateResponseAminoMsg): _159.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _159.QueryUpgradedConsensusStateResponse): _159.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryUpgradedConsensusStateResponseProtoMsg): _159.QueryUpgradedConsensusStateResponse;
                    toProto(message: _159.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryUpgradedConsensusStateResponse): _159.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _158.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.GenesisState;
                    fromJSON(object: any): _158.GenesisState;
                    toJSON(message: _158.GenesisState): unknown;
                    fromPartial(object: Partial<_158.GenesisState>): _158.GenesisState;
                    fromAmino(object: _158.GenesisStateAmino): _158.GenesisState;
                    toAmino(message: _158.GenesisState): _158.GenesisStateAmino;
                    fromAminoMsg(object: _158.GenesisStateAminoMsg): _158.GenesisState;
                    toAminoMsg(message: _158.GenesisState): _158.GenesisStateAminoMsg;
                    fromProtoMsg(message: _158.GenesisStateProtoMsg): _158.GenesisState;
                    toProto(message: _158.GenesisState): Uint8Array;
                    toProtoMsg(message: _158.GenesisState): _158.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _158.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.GenesisMetadata;
                    fromJSON(object: any): _158.GenesisMetadata;
                    toJSON(message: _158.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_158.GenesisMetadata>): _158.GenesisMetadata;
                    fromAmino(object: _158.GenesisMetadataAmino): _158.GenesisMetadata;
                    toAmino(message: _158.GenesisMetadata): _158.GenesisMetadataAmino;
                    fromAminoMsg(object: _158.GenesisMetadataAminoMsg): _158.GenesisMetadata;
                    toAminoMsg(message: _158.GenesisMetadata): _158.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _158.GenesisMetadataProtoMsg): _158.GenesisMetadata;
                    toProto(message: _158.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _158.GenesisMetadata): _158.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _158.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _158.IdentifiedGenesisMetadata;
                    toJSON(message: _158.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_158.IdentifiedGenesisMetadata>): _158.IdentifiedGenesisMetadata;
                    fromAmino(object: _158.IdentifiedGenesisMetadataAmino): _158.IdentifiedGenesisMetadata;
                    toAmino(message: _158.IdentifiedGenesisMetadata): _158.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _158.IdentifiedGenesisMetadataAminoMsg): _158.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _158.IdentifiedGenesisMetadata): _158.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _158.IdentifiedGenesisMetadataProtoMsg): _158.IdentifiedGenesisMetadata;
                    toProto(message: _158.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _158.IdentifiedGenesisMetadata): _158.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _157.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.IdentifiedClientState;
                    fromJSON(object: any): _157.IdentifiedClientState;
                    toJSON(message: _157.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_157.IdentifiedClientState>): _157.IdentifiedClientState;
                    fromAmino(object: _157.IdentifiedClientStateAmino): _157.IdentifiedClientState;
                    toAmino(message: _157.IdentifiedClientState): _157.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _157.IdentifiedClientStateAminoMsg): _157.IdentifiedClientState;
                    toAminoMsg(message: _157.IdentifiedClientState): _157.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _157.IdentifiedClientStateProtoMsg): _157.IdentifiedClientState;
                    toProto(message: _157.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _157.IdentifiedClientState): _157.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _157.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.ConsensusStateWithHeight;
                    fromJSON(object: any): _157.ConsensusStateWithHeight;
                    toJSON(message: _157.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_157.ConsensusStateWithHeight>): _157.ConsensusStateWithHeight;
                    fromAmino(object: _157.ConsensusStateWithHeightAmino): _157.ConsensusStateWithHeight;
                    toAmino(message: _157.ConsensusStateWithHeight): _157.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _157.ConsensusStateWithHeightAminoMsg): _157.ConsensusStateWithHeight;
                    toAminoMsg(message: _157.ConsensusStateWithHeight): _157.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _157.ConsensusStateWithHeightProtoMsg): _157.ConsensusStateWithHeight;
                    toProto(message: _157.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _157.ConsensusStateWithHeight): _157.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _157.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.ClientConsensusStates;
                    fromJSON(object: any): _157.ClientConsensusStates;
                    toJSON(message: _157.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_157.ClientConsensusStates>): _157.ClientConsensusStates;
                    fromAmino(object: _157.ClientConsensusStatesAmino): _157.ClientConsensusStates;
                    toAmino(message: _157.ClientConsensusStates): _157.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _157.ClientConsensusStatesAminoMsg): _157.ClientConsensusStates;
                    toAminoMsg(message: _157.ClientConsensusStates): _157.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _157.ClientConsensusStatesProtoMsg): _157.ClientConsensusStates;
                    toProto(message: _157.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _157.ClientConsensusStates): _157.ClientConsensusStatesProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _157.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.Height;
                    fromJSON(object: any): _157.Height;
                    toJSON(message: _157.Height): unknown;
                    fromPartial(object: Partial<_157.Height>): _157.Height;
                    fromAmino(object: _157.HeightAmino): _157.Height;
                    toAmino(message: _157.Height): _157.HeightAmino;
                    fromAminoMsg(object: _157.HeightAminoMsg): _157.Height;
                    toAminoMsg(message: _157.Height): _157.HeightAminoMsg;
                    fromProtoMsg(message: _157.HeightProtoMsg): _157.Height;
                    toProto(message: _157.Height): Uint8Array;
                    toProtoMsg(message: _157.Height): _157.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _157.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.Params;
                    fromJSON(object: any): _157.Params;
                    toJSON(message: _157.Params): unknown;
                    fromPartial(object: Partial<_157.Params>): _157.Params;
                    fromAmino(object: _157.ParamsAmino): _157.Params;
                    toAmino(message: _157.Params): _157.ParamsAmino;
                    fromAminoMsg(object: _157.ParamsAminoMsg): _157.Params;
                    toAminoMsg(message: _157.Params): _157.ParamsAminoMsg;
                    fromProtoMsg(message: _157.ParamsProtoMsg): _157.Params;
                    toProto(message: _157.Params): Uint8Array;
                    toProtoMsg(message: _157.Params): _157.ParamsProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _157.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.ClientUpdateProposal;
                    fromJSON(object: any): _157.ClientUpdateProposal;
                    toJSON(message: _157.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_157.ClientUpdateProposal>): _157.ClientUpdateProposal;
                    fromAmino(object: _157.ClientUpdateProposalAmino): _157.ClientUpdateProposal;
                    toAmino(message: _157.ClientUpdateProposal): _157.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _157.ClientUpdateProposalAminoMsg): _157.ClientUpdateProposal;
                    toAminoMsg(message: _157.ClientUpdateProposal): _157.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _157.ClientUpdateProposalProtoMsg): _157.ClientUpdateProposal;
                    toProto(message: _157.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _157.ClientUpdateProposal): _157.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _157.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.UpgradeProposal;
                    fromJSON(object: any): _157.UpgradeProposal;
                    toJSON(message: _157.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_157.UpgradeProposal>): _157.UpgradeProposal;
                    fromAmino(object: _157.UpgradeProposalAmino): _157.UpgradeProposal;
                    toAmino(message: _157.UpgradeProposal): _157.UpgradeProposalAmino;
                    fromAminoMsg(object: _157.UpgradeProposalAminoMsg): _157.UpgradeProposal;
                    toAminoMsg(message: _157.UpgradeProposal): _157.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _157.UpgradeProposalProtoMsg): _157.UpgradeProposal;
                    toProto(message: _157.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _157.UpgradeProposal): _157.UpgradeProposalProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                protobufPackage: "ibc.core.commitment.v1";
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _161.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _161.MerkleRoot;
                    fromJSON(object: any): _161.MerkleRoot;
                    toJSON(message: _161.MerkleRoot): unknown;
                    fromPartial(object: Partial<_161.MerkleRoot>): _161.MerkleRoot;
                    fromAmino(object: _161.MerkleRootAmino): _161.MerkleRoot;
                    toAmino(message: _161.MerkleRoot): _161.MerkleRootAmino;
                    fromAminoMsg(object: _161.MerkleRootAminoMsg): _161.MerkleRoot;
                    toAminoMsg(message: _161.MerkleRoot): _161.MerkleRootAminoMsg;
                    fromProtoMsg(message: _161.MerkleRootProtoMsg): _161.MerkleRoot;
                    toProto(message: _161.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _161.MerkleRoot): _161.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _161.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _161.MerklePrefix;
                    fromJSON(object: any): _161.MerklePrefix;
                    toJSON(message: _161.MerklePrefix): unknown;
                    fromPartial(object: Partial<_161.MerklePrefix>): _161.MerklePrefix;
                    fromAmino(object: _161.MerklePrefixAmino): _161.MerklePrefix;
                    toAmino(message: _161.MerklePrefix): _161.MerklePrefixAmino;
                    fromAminoMsg(object: _161.MerklePrefixAminoMsg): _161.MerklePrefix;
                    toAminoMsg(message: _161.MerklePrefix): _161.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _161.MerklePrefixProtoMsg): _161.MerklePrefix;
                    toProto(message: _161.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _161.MerklePrefix): _161.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _161.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _161.MerklePath;
                    fromJSON(object: any): _161.MerklePath;
                    toJSON(message: _161.MerklePath): unknown;
                    fromPartial(object: Partial<_161.MerklePath>): _161.MerklePath;
                    fromAmino(object: _161.MerklePathAmino): _161.MerklePath;
                    toAmino(message: _161.MerklePath): _161.MerklePathAmino;
                    fromAminoMsg(object: _161.MerklePathAminoMsg): _161.MerklePath;
                    toAminoMsg(message: _161.MerklePath): _161.MerklePathAminoMsg;
                    fromProtoMsg(message: _161.MerklePathProtoMsg): _161.MerklePath;
                    toProto(message: _161.MerklePath): Uint8Array;
                    toProtoMsg(message: _161.MerklePath): _161.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _161.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _161.MerkleProof;
                    fromJSON(object: any): _161.MerkleProof;
                    toJSON(message: _161.MerkleProof): unknown;
                    fromPartial(object: Partial<_161.MerkleProof>): _161.MerkleProof;
                    fromAmino(object: _161.MerkleProofAmino): _161.MerkleProof;
                    toAmino(message: _161.MerkleProof): _161.MerkleProofAmino;
                    fromAminoMsg(object: _161.MerkleProofAminoMsg): _161.MerkleProof;
                    toAminoMsg(message: _161.MerkleProof): _161.MerkleProofAminoMsg;
                    fromProtoMsg(message: _161.MerkleProofProtoMsg): _161.MerkleProof;
                    toProto(message: _161.MerkleProof): Uint8Array;
                    toProtoMsg(message: _161.MerkleProof): _161.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                Msg: typeof _307.Msg;
                Query: typeof _301.Query;
                QueryClientImpl: typeof _301.QueryClientImpl;
                LCDQueryClient: typeof _295.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _165.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _165.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _165.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _165.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateConnectionParams(value: _165.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _165.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _165.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _165.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _165.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _165.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _165.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _165.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _165.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: _165.MsgUpdateParams): {
                            typeUrl: string;
                            value: _165.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _165.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _165.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _165.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _165.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateConnectionParams(value: _165.MsgUpdateParams): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _165.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _165.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _165.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _165.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: any): {
                            typeUrl: string;
                            value: _165.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _165.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _165.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _165.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _165.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _165.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _165.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _165.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _165.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: _165.MsgUpdateParams): {
                            typeUrl: string;
                            value: _165.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _165.MsgConnectionOpenInit) => _165.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _165.MsgConnectionOpenInitAmino) => _165.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _165.MsgConnectionOpenTry) => _165.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _165.MsgConnectionOpenTryAmino) => _165.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _165.MsgConnectionOpenAck) => _165.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _165.MsgConnectionOpenAckAmino) => _165.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _165.MsgConnectionOpenConfirm) => _165.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _165.MsgConnectionOpenConfirmAmino) => _165.MsgConnectionOpenConfirm;
                    };
                    "/ibc.core.connection.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _165.MsgUpdateParams) => _165.MsgUpdateParamsAmino;
                        fromAmino: (object: _165.MsgUpdateParamsAmino) => _165.MsgUpdateParams;
                    };
                };
                protobufPackage: "ibc.core.connection.v1";
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _165.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.MsgConnectionOpenInit;
                    fromJSON(object: any): _165.MsgConnectionOpenInit;
                    toJSON(message: _165.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_165.MsgConnectionOpenInit>): _165.MsgConnectionOpenInit;
                    fromAmino(object: _165.MsgConnectionOpenInitAmino): _165.MsgConnectionOpenInit;
                    toAmino(message: _165.MsgConnectionOpenInit): _165.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _165.MsgConnectionOpenInitAminoMsg): _165.MsgConnectionOpenInit;
                    toAminoMsg(message: _165.MsgConnectionOpenInit): _165.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _165.MsgConnectionOpenInitProtoMsg): _165.MsgConnectionOpenInit;
                    toProto(message: _165.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _165.MsgConnectionOpenInit): _165.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _165.MsgConnectionOpenInitResponse;
                    toJSON(_: _165.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_165.MsgConnectionOpenInitResponse>): _165.MsgConnectionOpenInitResponse;
                    fromAmino(_: _165.MsgConnectionOpenInitResponseAmino): _165.MsgConnectionOpenInitResponse;
                    toAmino(_: _165.MsgConnectionOpenInitResponse): _165.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _165.MsgConnectionOpenInitResponseAminoMsg): _165.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _165.MsgConnectionOpenInitResponse): _165.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgConnectionOpenInitResponseProtoMsg): _165.MsgConnectionOpenInitResponse;
                    toProto(message: _165.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgConnectionOpenInitResponse): _165.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _165.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.MsgConnectionOpenTry;
                    fromJSON(object: any): _165.MsgConnectionOpenTry;
                    toJSON(message: _165.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_165.MsgConnectionOpenTry>): _165.MsgConnectionOpenTry;
                    fromAmino(object: _165.MsgConnectionOpenTryAmino): _165.MsgConnectionOpenTry;
                    toAmino(message: _165.MsgConnectionOpenTry): _165.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _165.MsgConnectionOpenTryAminoMsg): _165.MsgConnectionOpenTry;
                    toAminoMsg(message: _165.MsgConnectionOpenTry): _165.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _165.MsgConnectionOpenTryProtoMsg): _165.MsgConnectionOpenTry;
                    toProto(message: _165.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _165.MsgConnectionOpenTry): _165.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _165.MsgConnectionOpenTryResponse;
                    toJSON(_: _165.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_165.MsgConnectionOpenTryResponse>): _165.MsgConnectionOpenTryResponse;
                    fromAmino(_: _165.MsgConnectionOpenTryResponseAmino): _165.MsgConnectionOpenTryResponse;
                    toAmino(_: _165.MsgConnectionOpenTryResponse): _165.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _165.MsgConnectionOpenTryResponseAminoMsg): _165.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _165.MsgConnectionOpenTryResponse): _165.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgConnectionOpenTryResponseProtoMsg): _165.MsgConnectionOpenTryResponse;
                    toProto(message: _165.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgConnectionOpenTryResponse): _165.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _165.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.MsgConnectionOpenAck;
                    fromJSON(object: any): _165.MsgConnectionOpenAck;
                    toJSON(message: _165.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_165.MsgConnectionOpenAck>): _165.MsgConnectionOpenAck;
                    fromAmino(object: _165.MsgConnectionOpenAckAmino): _165.MsgConnectionOpenAck;
                    toAmino(message: _165.MsgConnectionOpenAck): _165.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _165.MsgConnectionOpenAckAminoMsg): _165.MsgConnectionOpenAck;
                    toAminoMsg(message: _165.MsgConnectionOpenAck): _165.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _165.MsgConnectionOpenAckProtoMsg): _165.MsgConnectionOpenAck;
                    toProto(message: _165.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _165.MsgConnectionOpenAck): _165.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _165.MsgConnectionOpenAckResponse;
                    toJSON(_: _165.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_165.MsgConnectionOpenAckResponse>): _165.MsgConnectionOpenAckResponse;
                    fromAmino(_: _165.MsgConnectionOpenAckResponseAmino): _165.MsgConnectionOpenAckResponse;
                    toAmino(_: _165.MsgConnectionOpenAckResponse): _165.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _165.MsgConnectionOpenAckResponseAminoMsg): _165.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _165.MsgConnectionOpenAckResponse): _165.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgConnectionOpenAckResponseProtoMsg): _165.MsgConnectionOpenAckResponse;
                    toProto(message: _165.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgConnectionOpenAckResponse): _165.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _165.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _165.MsgConnectionOpenConfirm;
                    toJSON(message: _165.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_165.MsgConnectionOpenConfirm>): _165.MsgConnectionOpenConfirm;
                    fromAmino(object: _165.MsgConnectionOpenConfirmAmino): _165.MsgConnectionOpenConfirm;
                    toAmino(message: _165.MsgConnectionOpenConfirm): _165.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _165.MsgConnectionOpenConfirmAminoMsg): _165.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _165.MsgConnectionOpenConfirm): _165.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _165.MsgConnectionOpenConfirmProtoMsg): _165.MsgConnectionOpenConfirm;
                    toProto(message: _165.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _165.MsgConnectionOpenConfirm): _165.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _165.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _165.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_165.MsgConnectionOpenConfirmResponse>): _165.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _165.MsgConnectionOpenConfirmResponseAmino): _165.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _165.MsgConnectionOpenConfirmResponse): _165.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _165.MsgConnectionOpenConfirmResponseAminoMsg): _165.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _165.MsgConnectionOpenConfirmResponse): _165.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgConnectionOpenConfirmResponseProtoMsg): _165.MsgConnectionOpenConfirmResponse;
                    toProto(message: _165.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgConnectionOpenConfirmResponse): _165.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _165.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.MsgUpdateParams;
                    fromJSON(object: any): _165.MsgUpdateParams;
                    toJSON(message: _165.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_165.MsgUpdateParams>): _165.MsgUpdateParams;
                    fromAmino(object: _165.MsgUpdateParamsAmino): _165.MsgUpdateParams;
                    toAmino(message: _165.MsgUpdateParams): _165.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _165.MsgUpdateParamsAminoMsg): _165.MsgUpdateParams;
                    toAminoMsg(message: _165.MsgUpdateParams): _165.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _165.MsgUpdateParamsProtoMsg): _165.MsgUpdateParams;
                    toProto(message: _165.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _165.MsgUpdateParams): _165.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.MsgUpdateParamsResponse;
                    fromJSON(_: any): _165.MsgUpdateParamsResponse;
                    toJSON(_: _165.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_165.MsgUpdateParamsResponse>): _165.MsgUpdateParamsResponse;
                    fromAmino(_: _165.MsgUpdateParamsResponseAmino): _165.MsgUpdateParamsResponse;
                    toAmino(_: _165.MsgUpdateParamsResponse): _165.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _165.MsgUpdateParamsResponseAminoMsg): _165.MsgUpdateParamsResponse;
                    toAminoMsg(message: _165.MsgUpdateParamsResponse): _165.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgUpdateParamsResponseProtoMsg): _165.MsgUpdateParamsResponse;
                    toProto(message: _165.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgUpdateParamsResponse): _165.MsgUpdateParamsResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.QueryConnectionRequest;
                    fromJSON(object: any): _164.QueryConnectionRequest;
                    toJSON(message: _164.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_164.QueryConnectionRequest>): _164.QueryConnectionRequest;
                    fromAmino(object: _164.QueryConnectionRequestAmino): _164.QueryConnectionRequest;
                    toAmino(message: _164.QueryConnectionRequest): _164.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _164.QueryConnectionRequestAminoMsg): _164.QueryConnectionRequest;
                    toAminoMsg(message: _164.QueryConnectionRequest): _164.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionRequestProtoMsg): _164.QueryConnectionRequest;
                    toProto(message: _164.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionRequest): _164.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.QueryConnectionResponse;
                    fromJSON(object: any): _164.QueryConnectionResponse;
                    toJSON(message: _164.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_164.QueryConnectionResponse>): _164.QueryConnectionResponse;
                    fromAmino(object: _164.QueryConnectionResponseAmino): _164.QueryConnectionResponse;
                    toAmino(message: _164.QueryConnectionResponse): _164.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _164.QueryConnectionResponseAminoMsg): _164.QueryConnectionResponse;
                    toAminoMsg(message: _164.QueryConnectionResponse): _164.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionResponseProtoMsg): _164.QueryConnectionResponse;
                    toProto(message: _164.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionResponse): _164.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.QueryConnectionsRequest;
                    fromJSON(object: any): _164.QueryConnectionsRequest;
                    toJSON(message: _164.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_164.QueryConnectionsRequest>): _164.QueryConnectionsRequest;
                    fromAmino(object: _164.QueryConnectionsRequestAmino): _164.QueryConnectionsRequest;
                    toAmino(message: _164.QueryConnectionsRequest): _164.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _164.QueryConnectionsRequestAminoMsg): _164.QueryConnectionsRequest;
                    toAminoMsg(message: _164.QueryConnectionsRequest): _164.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionsRequestProtoMsg): _164.QueryConnectionsRequest;
                    toProto(message: _164.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionsRequest): _164.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.QueryConnectionsResponse;
                    fromJSON(object: any): _164.QueryConnectionsResponse;
                    toJSON(message: _164.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_164.QueryConnectionsResponse>): _164.QueryConnectionsResponse;
                    fromAmino(object: _164.QueryConnectionsResponseAmino): _164.QueryConnectionsResponse;
                    toAmino(message: _164.QueryConnectionsResponse): _164.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _164.QueryConnectionsResponseAminoMsg): _164.QueryConnectionsResponse;
                    toAminoMsg(message: _164.QueryConnectionsResponse): _164.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionsResponseProtoMsg): _164.QueryConnectionsResponse;
                    toProto(message: _164.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionsResponse): _164.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.QueryClientConnectionsRequest;
                    fromJSON(object: any): _164.QueryClientConnectionsRequest;
                    toJSON(message: _164.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_164.QueryClientConnectionsRequest>): _164.QueryClientConnectionsRequest;
                    fromAmino(object: _164.QueryClientConnectionsRequestAmino): _164.QueryClientConnectionsRequest;
                    toAmino(message: _164.QueryClientConnectionsRequest): _164.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _164.QueryClientConnectionsRequestAminoMsg): _164.QueryClientConnectionsRequest;
                    toAminoMsg(message: _164.QueryClientConnectionsRequest): _164.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryClientConnectionsRequestProtoMsg): _164.QueryClientConnectionsRequest;
                    toProto(message: _164.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryClientConnectionsRequest): _164.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.QueryClientConnectionsResponse;
                    fromJSON(object: any): _164.QueryClientConnectionsResponse;
                    toJSON(message: _164.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_164.QueryClientConnectionsResponse>): _164.QueryClientConnectionsResponse;
                    fromAmino(object: _164.QueryClientConnectionsResponseAmino): _164.QueryClientConnectionsResponse;
                    toAmino(message: _164.QueryClientConnectionsResponse): _164.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _164.QueryClientConnectionsResponseAminoMsg): _164.QueryClientConnectionsResponse;
                    toAminoMsg(message: _164.QueryClientConnectionsResponse): _164.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryClientConnectionsResponseProtoMsg): _164.QueryClientConnectionsResponse;
                    toProto(message: _164.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryClientConnectionsResponse): _164.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _164.QueryConnectionClientStateRequest;
                    toJSON(message: _164.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_164.QueryConnectionClientStateRequest>): _164.QueryConnectionClientStateRequest;
                    fromAmino(object: _164.QueryConnectionClientStateRequestAmino): _164.QueryConnectionClientStateRequest;
                    toAmino(message: _164.QueryConnectionClientStateRequest): _164.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _164.QueryConnectionClientStateRequestAminoMsg): _164.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _164.QueryConnectionClientStateRequest): _164.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionClientStateRequestProtoMsg): _164.QueryConnectionClientStateRequest;
                    toProto(message: _164.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionClientStateRequest): _164.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _164.QueryConnectionClientStateResponse;
                    toJSON(message: _164.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_164.QueryConnectionClientStateResponse>): _164.QueryConnectionClientStateResponse;
                    fromAmino(object: _164.QueryConnectionClientStateResponseAmino): _164.QueryConnectionClientStateResponse;
                    toAmino(message: _164.QueryConnectionClientStateResponse): _164.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _164.QueryConnectionClientStateResponseAminoMsg): _164.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _164.QueryConnectionClientStateResponse): _164.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionClientStateResponseProtoMsg): _164.QueryConnectionClientStateResponse;
                    toProto(message: _164.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionClientStateResponse): _164.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _164.QueryConnectionConsensusStateRequest;
                    toJSON(message: _164.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_164.QueryConnectionConsensusStateRequest>): _164.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _164.QueryConnectionConsensusStateRequestAmino): _164.QueryConnectionConsensusStateRequest;
                    toAmino(message: _164.QueryConnectionConsensusStateRequest): _164.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _164.QueryConnectionConsensusStateRequestAminoMsg): _164.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _164.QueryConnectionConsensusStateRequest): _164.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionConsensusStateRequestProtoMsg): _164.QueryConnectionConsensusStateRequest;
                    toProto(message: _164.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionConsensusStateRequest): _164.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _164.QueryConnectionConsensusStateResponse;
                    toJSON(message: _164.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_164.QueryConnectionConsensusStateResponse>): _164.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _164.QueryConnectionConsensusStateResponseAmino): _164.QueryConnectionConsensusStateResponse;
                    toAmino(message: _164.QueryConnectionConsensusStateResponse): _164.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _164.QueryConnectionConsensusStateResponseAminoMsg): _164.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _164.QueryConnectionConsensusStateResponse): _164.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionConsensusStateResponseProtoMsg): _164.QueryConnectionConsensusStateResponse;
                    toProto(message: _164.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionConsensusStateResponse): _164.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _164.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.QueryConnectionParamsRequest;
                    fromJSON(_: any): _164.QueryConnectionParamsRequest;
                    toJSON(_: _164.QueryConnectionParamsRequest): unknown;
                    fromPartial(_: Partial<_164.QueryConnectionParamsRequest>): _164.QueryConnectionParamsRequest;
                    fromAmino(_: _164.QueryConnectionParamsRequestAmino): _164.QueryConnectionParamsRequest;
                    toAmino(_: _164.QueryConnectionParamsRequest): _164.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _164.QueryConnectionParamsRequestAminoMsg): _164.QueryConnectionParamsRequest;
                    toAminoMsg(message: _164.QueryConnectionParamsRequest): _164.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionParamsRequestProtoMsg): _164.QueryConnectionParamsRequest;
                    toProto(message: _164.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionParamsRequest): _164.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.QueryConnectionParamsResponse;
                    fromJSON(object: any): _164.QueryConnectionParamsResponse;
                    toJSON(message: _164.QueryConnectionParamsResponse): unknown;
                    fromPartial(object: Partial<_164.QueryConnectionParamsResponse>): _164.QueryConnectionParamsResponse;
                    fromAmino(object: _164.QueryConnectionParamsResponseAmino): _164.QueryConnectionParamsResponse;
                    toAmino(message: _164.QueryConnectionParamsResponse): _164.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _164.QueryConnectionParamsResponseAminoMsg): _164.QueryConnectionParamsResponse;
                    toAminoMsg(message: _164.QueryConnectionParamsResponse): _164.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionParamsResponseProtoMsg): _164.QueryConnectionParamsResponse;
                    toProto(message: _164.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionParamsResponse): _164.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _163.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.GenesisState;
                    fromJSON(object: any): _163.GenesisState;
                    toJSON(message: _163.GenesisState): unknown;
                    fromPartial(object: Partial<_163.GenesisState>): _163.GenesisState;
                    fromAmino(object: _163.GenesisStateAmino): _163.GenesisState;
                    toAmino(message: _163.GenesisState): _163.GenesisStateAmino;
                    fromAminoMsg(object: _163.GenesisStateAminoMsg): _163.GenesisState;
                    toAminoMsg(message: _163.GenesisState): _163.GenesisStateAminoMsg;
                    fromProtoMsg(message: _163.GenesisStateProtoMsg): _163.GenesisState;
                    toProto(message: _163.GenesisState): Uint8Array;
                    toProtoMsg(message: _163.GenesisState): _163.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _162.State;
                stateToJSON(object: _162.State): string;
                State: typeof _162.State;
                StateSDKType: typeof _162.State;
                StateAmino: typeof _162.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _162.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.ConnectionEnd;
                    fromJSON(object: any): _162.ConnectionEnd;
                    toJSON(message: _162.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_162.ConnectionEnd>): _162.ConnectionEnd;
                    fromAmino(object: _162.ConnectionEndAmino): _162.ConnectionEnd;
                    toAmino(message: _162.ConnectionEnd): _162.ConnectionEndAmino;
                    fromAminoMsg(object: _162.ConnectionEndAminoMsg): _162.ConnectionEnd;
                    toAminoMsg(message: _162.ConnectionEnd): _162.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _162.ConnectionEndProtoMsg): _162.ConnectionEnd;
                    toProto(message: _162.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _162.ConnectionEnd): _162.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _162.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.IdentifiedConnection;
                    fromJSON(object: any): _162.IdentifiedConnection;
                    toJSON(message: _162.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_162.IdentifiedConnection>): _162.IdentifiedConnection;
                    fromAmino(object: _162.IdentifiedConnectionAmino): _162.IdentifiedConnection;
                    toAmino(message: _162.IdentifiedConnection): _162.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _162.IdentifiedConnectionAminoMsg): _162.IdentifiedConnection;
                    toAminoMsg(message: _162.IdentifiedConnection): _162.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _162.IdentifiedConnectionProtoMsg): _162.IdentifiedConnection;
                    toProto(message: _162.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _162.IdentifiedConnection): _162.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _162.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.Counterparty;
                    fromJSON(object: any): _162.Counterparty;
                    toJSON(message: _162.Counterparty): unknown;
                    fromPartial(object: Partial<_162.Counterparty>): _162.Counterparty;
                    fromAmino(object: _162.CounterpartyAmino): _162.Counterparty;
                    toAmino(message: _162.Counterparty): _162.CounterpartyAmino;
                    fromAminoMsg(object: _162.CounterpartyAminoMsg): _162.Counterparty;
                    toAminoMsg(message: _162.Counterparty): _162.CounterpartyAminoMsg;
                    fromProtoMsg(message: _162.CounterpartyProtoMsg): _162.Counterparty;
                    toProto(message: _162.Counterparty): Uint8Array;
                    toProtoMsg(message: _162.Counterparty): _162.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _162.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.ClientPaths;
                    fromJSON(object: any): _162.ClientPaths;
                    toJSON(message: _162.ClientPaths): unknown;
                    fromPartial(object: Partial<_162.ClientPaths>): _162.ClientPaths;
                    fromAmino(object: _162.ClientPathsAmino): _162.ClientPaths;
                    toAmino(message: _162.ClientPaths): _162.ClientPathsAmino;
                    fromAminoMsg(object: _162.ClientPathsAminoMsg): _162.ClientPaths;
                    toAminoMsg(message: _162.ClientPaths): _162.ClientPathsAminoMsg;
                    fromProtoMsg(message: _162.ClientPathsProtoMsg): _162.ClientPaths;
                    toProto(message: _162.ClientPaths): Uint8Array;
                    toProtoMsg(message: _162.ClientPaths): _162.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _162.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.ConnectionPaths;
                    fromJSON(object: any): _162.ConnectionPaths;
                    toJSON(message: _162.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_162.ConnectionPaths>): _162.ConnectionPaths;
                    fromAmino(object: _162.ConnectionPathsAmino): _162.ConnectionPaths;
                    toAmino(message: _162.ConnectionPaths): _162.ConnectionPathsAmino;
                    fromAminoMsg(object: _162.ConnectionPathsAminoMsg): _162.ConnectionPaths;
                    toAminoMsg(message: _162.ConnectionPaths): _162.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _162.ConnectionPathsProtoMsg): _162.ConnectionPaths;
                    toProto(message: _162.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _162.ConnectionPaths): _162.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _162.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.Version;
                    fromJSON(object: any): _162.Version;
                    toJSON(message: _162.Version): unknown;
                    fromPartial(object: Partial<_162.Version>): _162.Version;
                    fromAmino(object: _162.VersionAmino): _162.Version;
                    toAmino(message: _162.Version): _162.VersionAmino;
                    fromAminoMsg(object: _162.VersionAminoMsg): _162.Version;
                    toAminoMsg(message: _162.Version): _162.VersionAminoMsg;
                    fromProtoMsg(message: _162.VersionProtoMsg): _162.Version;
                    toProto(message: _162.Version): Uint8Array;
                    toProtoMsg(message: _162.Version): _162.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _162.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.Params;
                    fromJSON(object: any): _162.Params;
                    toJSON(message: _162.Params): unknown;
                    fromPartial(object: Partial<_162.Params>): _162.Params;
                    fromAmino(object: _162.ParamsAmino): _162.Params;
                    toAmino(message: _162.Params): _162.ParamsAmino;
                    fromAminoMsg(object: _162.ParamsAminoMsg): _162.Params;
                    toAminoMsg(message: _162.Params): _162.ParamsAminoMsg;
                    fromProtoMsg(message: _162.ParamsProtoMsg): _162.Params;
                    toProto(message: _162.Params): Uint8Array;
                    toProtoMsg(message: _162.Params): _162.ParamsProtoMsg;
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
                    encode(message: _166.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _166.ClientState;
                    fromJSON(object: any): _166.ClientState;
                    toJSON(message: _166.ClientState): unknown;
                    fromPartial(object: Partial<_166.ClientState>): _166.ClientState;
                    fromAmino(object: _166.ClientStateAmino): _166.ClientState;
                    toAmino(message: _166.ClientState): _166.ClientStateAmino;
                    fromAminoMsg(object: _166.ClientStateAminoMsg): _166.ClientState;
                    toAminoMsg(message: _166.ClientState): _166.ClientStateAminoMsg;
                    fromProtoMsg(message: _166.ClientStateProtoMsg): _166.ClientState;
                    toProto(message: _166.ClientState): Uint8Array;
                    toProtoMsg(message: _166.ClientState): _166.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _167.DataType;
                dataTypeToJSON(object: _167.DataType): string;
                protobufPackage: "ibc.lightclients.solomachine.v2";
                DataType: typeof _167.DataType;
                DataTypeSDKType: typeof _167.DataType;
                DataTypeAmino: typeof _167.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _167.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.ClientState;
                    fromJSON(object: any): _167.ClientState;
                    toJSON(message: _167.ClientState): unknown;
                    fromPartial(object: Partial<_167.ClientState>): _167.ClientState;
                    fromAmino(object: _167.ClientStateAmino): _167.ClientState;
                    toAmino(message: _167.ClientState): _167.ClientStateAmino;
                    fromAminoMsg(object: _167.ClientStateAminoMsg): _167.ClientState;
                    toAminoMsg(message: _167.ClientState): _167.ClientStateAminoMsg;
                    fromProtoMsg(message: _167.ClientStateProtoMsg): _167.ClientState;
                    toProto(message: _167.ClientState): Uint8Array;
                    toProtoMsg(message: _167.ClientState): _167.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _167.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.ConsensusState;
                    fromJSON(object: any): _167.ConsensusState;
                    toJSON(message: _167.ConsensusState): unknown;
                    fromPartial(object: Partial<_167.ConsensusState>): _167.ConsensusState;
                    fromAmino(object: _167.ConsensusStateAmino): _167.ConsensusState;
                    toAmino(message: _167.ConsensusState): _167.ConsensusStateAmino;
                    fromAminoMsg(object: _167.ConsensusStateAminoMsg): _167.ConsensusState;
                    toAminoMsg(message: _167.ConsensusState): _167.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _167.ConsensusStateProtoMsg): _167.ConsensusState;
                    toProto(message: _167.ConsensusState): Uint8Array;
                    toProtoMsg(message: _167.ConsensusState): _167.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _167.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.Header;
                    fromJSON(object: any): _167.Header;
                    toJSON(message: _167.Header): unknown;
                    fromPartial(object: Partial<_167.Header>): _167.Header;
                    fromAmino(object: _167.HeaderAmino): _167.Header;
                    toAmino(message: _167.Header): _167.HeaderAmino;
                    fromAminoMsg(object: _167.HeaderAminoMsg): _167.Header;
                    toAminoMsg(message: _167.Header): _167.HeaderAminoMsg;
                    fromProtoMsg(message: _167.HeaderProtoMsg): _167.Header;
                    toProto(message: _167.Header): Uint8Array;
                    toProtoMsg(message: _167.Header): _167.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _167.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.Misbehaviour;
                    fromJSON(object: any): _167.Misbehaviour;
                    toJSON(message: _167.Misbehaviour): unknown;
                    fromPartial(object: Partial<_167.Misbehaviour>): _167.Misbehaviour;
                    fromAmino(object: _167.MisbehaviourAmino): _167.Misbehaviour;
                    toAmino(message: _167.Misbehaviour): _167.MisbehaviourAmino;
                    fromAminoMsg(object: _167.MisbehaviourAminoMsg): _167.Misbehaviour;
                    toAminoMsg(message: _167.Misbehaviour): _167.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _167.MisbehaviourProtoMsg): _167.Misbehaviour;
                    toProto(message: _167.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _167.Misbehaviour): _167.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _167.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.SignatureAndData;
                    fromJSON(object: any): _167.SignatureAndData;
                    toJSON(message: _167.SignatureAndData): unknown;
                    fromPartial(object: Partial<_167.SignatureAndData>): _167.SignatureAndData;
                    fromAmino(object: _167.SignatureAndDataAmino): _167.SignatureAndData;
                    toAmino(message: _167.SignatureAndData): _167.SignatureAndDataAmino;
                    fromAminoMsg(object: _167.SignatureAndDataAminoMsg): _167.SignatureAndData;
                    toAminoMsg(message: _167.SignatureAndData): _167.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _167.SignatureAndDataProtoMsg): _167.SignatureAndData;
                    toProto(message: _167.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _167.SignatureAndData): _167.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _167.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.TimestampedSignatureData;
                    fromJSON(object: any): _167.TimestampedSignatureData;
                    toJSON(message: _167.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_167.TimestampedSignatureData>): _167.TimestampedSignatureData;
                    fromAmino(object: _167.TimestampedSignatureDataAmino): _167.TimestampedSignatureData;
                    toAmino(message: _167.TimestampedSignatureData): _167.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _167.TimestampedSignatureDataAminoMsg): _167.TimestampedSignatureData;
                    toAminoMsg(message: _167.TimestampedSignatureData): _167.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _167.TimestampedSignatureDataProtoMsg): _167.TimestampedSignatureData;
                    toProto(message: _167.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _167.TimestampedSignatureData): _167.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _167.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.SignBytes;
                    fromJSON(object: any): _167.SignBytes;
                    toJSON(message: _167.SignBytes): unknown;
                    fromPartial(object: Partial<_167.SignBytes>): _167.SignBytes;
                    fromAmino(object: _167.SignBytesAmino): _167.SignBytes;
                    toAmino(message: _167.SignBytes): _167.SignBytesAmino;
                    fromAminoMsg(object: _167.SignBytesAminoMsg): _167.SignBytes;
                    toAminoMsg(message: _167.SignBytes): _167.SignBytesAminoMsg;
                    fromProtoMsg(message: _167.SignBytesProtoMsg): _167.SignBytes;
                    toProto(message: _167.SignBytes): Uint8Array;
                    toProtoMsg(message: _167.SignBytes): _167.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _167.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.HeaderData;
                    fromJSON(object: any): _167.HeaderData;
                    toJSON(message: _167.HeaderData): unknown;
                    fromPartial(object: Partial<_167.HeaderData>): _167.HeaderData;
                    fromAmino(object: _167.HeaderDataAmino): _167.HeaderData;
                    toAmino(message: _167.HeaderData): _167.HeaderDataAmino;
                    fromAminoMsg(object: _167.HeaderDataAminoMsg): _167.HeaderData;
                    toAminoMsg(message: _167.HeaderData): _167.HeaderDataAminoMsg;
                    fromProtoMsg(message: _167.HeaderDataProtoMsg): _167.HeaderData;
                    toProto(message: _167.HeaderData): Uint8Array;
                    toProtoMsg(message: _167.HeaderData): _167.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _167.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.ClientStateData;
                    fromJSON(object: any): _167.ClientStateData;
                    toJSON(message: _167.ClientStateData): unknown;
                    fromPartial(object: Partial<_167.ClientStateData>): _167.ClientStateData;
                    fromAmino(object: _167.ClientStateDataAmino): _167.ClientStateData;
                    toAmino(message: _167.ClientStateData): _167.ClientStateDataAmino;
                    fromAminoMsg(object: _167.ClientStateDataAminoMsg): _167.ClientStateData;
                    toAminoMsg(message: _167.ClientStateData): _167.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _167.ClientStateDataProtoMsg): _167.ClientStateData;
                    toProto(message: _167.ClientStateData): Uint8Array;
                    toProtoMsg(message: _167.ClientStateData): _167.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _167.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.ConsensusStateData;
                    fromJSON(object: any): _167.ConsensusStateData;
                    toJSON(message: _167.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_167.ConsensusStateData>): _167.ConsensusStateData;
                    fromAmino(object: _167.ConsensusStateDataAmino): _167.ConsensusStateData;
                    toAmino(message: _167.ConsensusStateData): _167.ConsensusStateDataAmino;
                    fromAminoMsg(object: _167.ConsensusStateDataAminoMsg): _167.ConsensusStateData;
                    toAminoMsg(message: _167.ConsensusStateData): _167.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _167.ConsensusStateDataProtoMsg): _167.ConsensusStateData;
                    toProto(message: _167.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _167.ConsensusStateData): _167.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _167.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.ConnectionStateData;
                    fromJSON(object: any): _167.ConnectionStateData;
                    toJSON(message: _167.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_167.ConnectionStateData>): _167.ConnectionStateData;
                    fromAmino(object: _167.ConnectionStateDataAmino): _167.ConnectionStateData;
                    toAmino(message: _167.ConnectionStateData): _167.ConnectionStateDataAmino;
                    fromAminoMsg(object: _167.ConnectionStateDataAminoMsg): _167.ConnectionStateData;
                    toAminoMsg(message: _167.ConnectionStateData): _167.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _167.ConnectionStateDataProtoMsg): _167.ConnectionStateData;
                    toProto(message: _167.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _167.ConnectionStateData): _167.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _167.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.ChannelStateData;
                    fromJSON(object: any): _167.ChannelStateData;
                    toJSON(message: _167.ChannelStateData): unknown;
                    fromPartial(object: Partial<_167.ChannelStateData>): _167.ChannelStateData;
                    fromAmino(object: _167.ChannelStateDataAmino): _167.ChannelStateData;
                    toAmino(message: _167.ChannelStateData): _167.ChannelStateDataAmino;
                    fromAminoMsg(object: _167.ChannelStateDataAminoMsg): _167.ChannelStateData;
                    toAminoMsg(message: _167.ChannelStateData): _167.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _167.ChannelStateDataProtoMsg): _167.ChannelStateData;
                    toProto(message: _167.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _167.ChannelStateData): _167.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _167.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.PacketCommitmentData;
                    fromJSON(object: any): _167.PacketCommitmentData;
                    toJSON(message: _167.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_167.PacketCommitmentData>): _167.PacketCommitmentData;
                    fromAmino(object: _167.PacketCommitmentDataAmino): _167.PacketCommitmentData;
                    toAmino(message: _167.PacketCommitmentData): _167.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _167.PacketCommitmentDataAminoMsg): _167.PacketCommitmentData;
                    toAminoMsg(message: _167.PacketCommitmentData): _167.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _167.PacketCommitmentDataProtoMsg): _167.PacketCommitmentData;
                    toProto(message: _167.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _167.PacketCommitmentData): _167.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _167.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.PacketAcknowledgementData;
                    fromJSON(object: any): _167.PacketAcknowledgementData;
                    toJSON(message: _167.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_167.PacketAcknowledgementData>): _167.PacketAcknowledgementData;
                    fromAmino(object: _167.PacketAcknowledgementDataAmino): _167.PacketAcknowledgementData;
                    toAmino(message: _167.PacketAcknowledgementData): _167.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _167.PacketAcknowledgementDataAminoMsg): _167.PacketAcknowledgementData;
                    toAminoMsg(message: _167.PacketAcknowledgementData): _167.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _167.PacketAcknowledgementDataProtoMsg): _167.PacketAcknowledgementData;
                    toProto(message: _167.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _167.PacketAcknowledgementData): _167.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _167.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.PacketReceiptAbsenceData;
                    fromJSON(object: any): _167.PacketReceiptAbsenceData;
                    toJSON(message: _167.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_167.PacketReceiptAbsenceData>): _167.PacketReceiptAbsenceData;
                    fromAmino(object: _167.PacketReceiptAbsenceDataAmino): _167.PacketReceiptAbsenceData;
                    toAmino(message: _167.PacketReceiptAbsenceData): _167.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _167.PacketReceiptAbsenceDataAminoMsg): _167.PacketReceiptAbsenceData;
                    toAminoMsg(message: _167.PacketReceiptAbsenceData): _167.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _167.PacketReceiptAbsenceDataProtoMsg): _167.PacketReceiptAbsenceData;
                    toProto(message: _167.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _167.PacketReceiptAbsenceData): _167.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _167.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.NextSequenceRecvData;
                    fromJSON(object: any): _167.NextSequenceRecvData;
                    toJSON(message: _167.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_167.NextSequenceRecvData>): _167.NextSequenceRecvData;
                    fromAmino(object: _167.NextSequenceRecvDataAmino): _167.NextSequenceRecvData;
                    toAmino(message: _167.NextSequenceRecvData): _167.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _167.NextSequenceRecvDataAminoMsg): _167.NextSequenceRecvData;
                    toAminoMsg(message: _167.NextSequenceRecvData): _167.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _167.NextSequenceRecvDataProtoMsg): _167.NextSequenceRecvData;
                    toProto(message: _167.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _167.NextSequenceRecvData): _167.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                protobufPackage: "ibc.lightclients.solomachine.v3";
                ClientState: {
                    typeUrl: string;
                    encode(message: _168.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.ClientState;
                    fromJSON(object: any): _168.ClientState;
                    toJSON(message: _168.ClientState): unknown;
                    fromPartial(object: Partial<_168.ClientState>): _168.ClientState;
                    fromAmino(object: _168.ClientStateAmino): _168.ClientState;
                    toAmino(message: _168.ClientState): _168.ClientStateAmino;
                    fromAminoMsg(object: _168.ClientStateAminoMsg): _168.ClientState;
                    toAminoMsg(message: _168.ClientState): _168.ClientStateAminoMsg;
                    fromProtoMsg(message: _168.ClientStateProtoMsg): _168.ClientState;
                    toProto(message: _168.ClientState): Uint8Array;
                    toProtoMsg(message: _168.ClientState): _168.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _168.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.ConsensusState;
                    fromJSON(object: any): _168.ConsensusState;
                    toJSON(message: _168.ConsensusState): unknown;
                    fromPartial(object: Partial<_168.ConsensusState>): _168.ConsensusState;
                    fromAmino(object: _168.ConsensusStateAmino): _168.ConsensusState;
                    toAmino(message: _168.ConsensusState): _168.ConsensusStateAmino;
                    fromAminoMsg(object: _168.ConsensusStateAminoMsg): _168.ConsensusState;
                    toAminoMsg(message: _168.ConsensusState): _168.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _168.ConsensusStateProtoMsg): _168.ConsensusState;
                    toProto(message: _168.ConsensusState): Uint8Array;
                    toProtoMsg(message: _168.ConsensusState): _168.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _168.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.Header;
                    fromJSON(object: any): _168.Header;
                    toJSON(message: _168.Header): unknown;
                    fromPartial(object: Partial<_168.Header>): _168.Header;
                    fromAmino(object: _168.HeaderAmino): _168.Header;
                    toAmino(message: _168.Header): _168.HeaderAmino;
                    fromAminoMsg(object: _168.HeaderAminoMsg): _168.Header;
                    toAminoMsg(message: _168.Header): _168.HeaderAminoMsg;
                    fromProtoMsg(message: _168.HeaderProtoMsg): _168.Header;
                    toProto(message: _168.Header): Uint8Array;
                    toProtoMsg(message: _168.Header): _168.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _168.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.Misbehaviour;
                    fromJSON(object: any): _168.Misbehaviour;
                    toJSON(message: _168.Misbehaviour): unknown;
                    fromPartial(object: Partial<_168.Misbehaviour>): _168.Misbehaviour;
                    fromAmino(object: _168.MisbehaviourAmino): _168.Misbehaviour;
                    toAmino(message: _168.Misbehaviour): _168.MisbehaviourAmino;
                    fromAminoMsg(object: _168.MisbehaviourAminoMsg): _168.Misbehaviour;
                    toAminoMsg(message: _168.Misbehaviour): _168.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _168.MisbehaviourProtoMsg): _168.Misbehaviour;
                    toProto(message: _168.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _168.Misbehaviour): _168.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _168.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.SignatureAndData;
                    fromJSON(object: any): _168.SignatureAndData;
                    toJSON(message: _168.SignatureAndData): unknown;
                    fromPartial(object: Partial<_168.SignatureAndData>): _168.SignatureAndData;
                    fromAmino(object: _168.SignatureAndDataAmino): _168.SignatureAndData;
                    toAmino(message: _168.SignatureAndData): _168.SignatureAndDataAmino;
                    fromAminoMsg(object: _168.SignatureAndDataAminoMsg): _168.SignatureAndData;
                    toAminoMsg(message: _168.SignatureAndData): _168.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _168.SignatureAndDataProtoMsg): _168.SignatureAndData;
                    toProto(message: _168.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _168.SignatureAndData): _168.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _168.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.TimestampedSignatureData;
                    fromJSON(object: any): _168.TimestampedSignatureData;
                    toJSON(message: _168.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_168.TimestampedSignatureData>): _168.TimestampedSignatureData;
                    fromAmino(object: _168.TimestampedSignatureDataAmino): _168.TimestampedSignatureData;
                    toAmino(message: _168.TimestampedSignatureData): _168.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _168.TimestampedSignatureDataAminoMsg): _168.TimestampedSignatureData;
                    toAminoMsg(message: _168.TimestampedSignatureData): _168.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _168.TimestampedSignatureDataProtoMsg): _168.TimestampedSignatureData;
                    toProto(message: _168.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _168.TimestampedSignatureData): _168.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _168.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.SignBytes;
                    fromJSON(object: any): _168.SignBytes;
                    toJSON(message: _168.SignBytes): unknown;
                    fromPartial(object: Partial<_168.SignBytes>): _168.SignBytes;
                    fromAmino(object: _168.SignBytesAmino): _168.SignBytes;
                    toAmino(message: _168.SignBytes): _168.SignBytesAmino;
                    fromAminoMsg(object: _168.SignBytesAminoMsg): _168.SignBytes;
                    toAminoMsg(message: _168.SignBytes): _168.SignBytesAminoMsg;
                    fromProtoMsg(message: _168.SignBytesProtoMsg): _168.SignBytes;
                    toProto(message: _168.SignBytes): Uint8Array;
                    toProtoMsg(message: _168.SignBytes): _168.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _168.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.HeaderData;
                    fromJSON(object: any): _168.HeaderData;
                    toJSON(message: _168.HeaderData): unknown;
                    fromPartial(object: Partial<_168.HeaderData>): _168.HeaderData;
                    fromAmino(object: _168.HeaderDataAmino): _168.HeaderData;
                    toAmino(message: _168.HeaderData): _168.HeaderDataAmino;
                    fromAminoMsg(object: _168.HeaderDataAminoMsg): _168.HeaderData;
                    toAminoMsg(message: _168.HeaderData): _168.HeaderDataAminoMsg;
                    fromProtoMsg(message: _168.HeaderDataProtoMsg): _168.HeaderData;
                    toProto(message: _168.HeaderData): Uint8Array;
                    toProtoMsg(message: _168.HeaderData): _168.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                protobufPackage: "ibc.lightclients.tendermint.v1";
                ClientState: {
                    typeUrl: string;
                    encode(message: _169.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _169.ClientState;
                    fromJSON(object: any): _169.ClientState;
                    toJSON(message: _169.ClientState): unknown;
                    fromPartial(object: Partial<_169.ClientState>): _169.ClientState;
                    fromAmino(object: _169.ClientStateAmino): _169.ClientState;
                    toAmino(message: _169.ClientState): _169.ClientStateAmino;
                    fromAminoMsg(object: _169.ClientStateAminoMsg): _169.ClientState;
                    toAminoMsg(message: _169.ClientState): _169.ClientStateAminoMsg;
                    fromProtoMsg(message: _169.ClientStateProtoMsg): _169.ClientState;
                    toProto(message: _169.ClientState): Uint8Array;
                    toProtoMsg(message: _169.ClientState): _169.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _169.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _169.ConsensusState;
                    fromJSON(object: any): _169.ConsensusState;
                    toJSON(message: _169.ConsensusState): unknown;
                    fromPartial(object: Partial<_169.ConsensusState>): _169.ConsensusState;
                    fromAmino(object: _169.ConsensusStateAmino): _169.ConsensusState;
                    toAmino(message: _169.ConsensusState): _169.ConsensusStateAmino;
                    fromAminoMsg(object: _169.ConsensusStateAminoMsg): _169.ConsensusState;
                    toAminoMsg(message: _169.ConsensusState): _169.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _169.ConsensusStateProtoMsg): _169.ConsensusState;
                    toProto(message: _169.ConsensusState): Uint8Array;
                    toProtoMsg(message: _169.ConsensusState): _169.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _169.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _169.Misbehaviour;
                    fromJSON(object: any): _169.Misbehaviour;
                    toJSON(message: _169.Misbehaviour): unknown;
                    fromPartial(object: Partial<_169.Misbehaviour>): _169.Misbehaviour;
                    fromAmino(object: _169.MisbehaviourAmino): _169.Misbehaviour;
                    toAmino(message: _169.Misbehaviour): _169.MisbehaviourAmino;
                    fromAminoMsg(object: _169.MisbehaviourAminoMsg): _169.Misbehaviour;
                    toAminoMsg(message: _169.Misbehaviour): _169.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _169.MisbehaviourProtoMsg): _169.Misbehaviour;
                    toProto(message: _169.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _169.Misbehaviour): _169.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _169.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _169.Header;
                    fromJSON(object: any): _169.Header;
                    toJSON(message: _169.Header): unknown;
                    fromPartial(object: Partial<_169.Header>): _169.Header;
                    fromAmino(object: _169.HeaderAmino): _169.Header;
                    toAmino(message: _169.Header): _169.HeaderAmino;
                    fromAminoMsg(object: _169.HeaderAminoMsg): _169.Header;
                    toAminoMsg(message: _169.Header): _169.HeaderAminoMsg;
                    fromProtoMsg(message: _169.HeaderProtoMsg): _169.Header;
                    toProto(message: _169.Header): Uint8Array;
                    toProtoMsg(message: _169.Header): _169.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _169.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _169.Fraction;
                    fromJSON(object: any): _169.Fraction;
                    toJSON(message: _169.Fraction): unknown;
                    fromPartial(object: Partial<_169.Fraction>): _169.Fraction;
                    fromAmino(object: _169.FractionAmino): _169.Fraction;
                    toAmino(message: _169.Fraction): _169.FractionAmino;
                    fromAminoMsg(object: _169.FractionAminoMsg): _169.Fraction;
                    toAminoMsg(message: _169.Fraction): _169.FractionAminoMsg;
                    fromProtoMsg(message: _169.FractionProtoMsg): _169.Fraction;
                    toProto(message: _169.Fraction): Uint8Array;
                    toProtoMsg(message: _169.Fraction): _169.FractionProtoMsg;
                };
            };
        }
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
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.rpc.Service").ServiceClientImpl;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.rpc.Service").ServiceClientImpl;
                    };
                };
                circuit: {
                    v1: import("../cosmos/circuit/v1/query.rpc.Query").QueryClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.rpc.Query").QueryClientImpl;
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
                orm: {
                    query: {
                        v1alpha1: import("../cosmos/orm/query/v1alpha1/query.rpc.Query").QueryClientImpl;
                    };
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
                            v1: _296.QueryClientImpl;
                        };
                        host: {
                            v1: _297.QueryClientImpl;
                        };
                    };
                    transfer: {
                        v1: _298.QueryClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _299.QueryClientImpl;
                    };
                    client: {
                        v1: _300.QueryClientImpl;
                    };
                    connection: {
                        v1: _301.QueryClientImpl;
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
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                circuit: {
                    v1: import("../cosmos/circuit/v1/query.lcd").LCDQueryClient;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
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
                            v1: _290.LCDQueryClient;
                        };
                        host: {
                            v1: _291.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _292.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _293.LCDQueryClient;
                    };
                    client: {
                        v1: _294.LCDQueryClient;
                    };
                    connection: {
                        v1: _295.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}

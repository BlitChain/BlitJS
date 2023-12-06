import * as _135 from "./applications/interchain_accounts/controller/v1/controller";
import * as _136 from "./applications/interchain_accounts/controller/v1/query";
import * as _137 from "./applications/interchain_accounts/controller/v1/tx";
import * as _138 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _139 from "./applications/interchain_accounts/host/v1/host";
import * as _140 from "./applications/interchain_accounts/host/v1/query";
import * as _141 from "./applications/interchain_accounts/host/v1/tx";
import * as _142 from "./applications/interchain_accounts/v1/account";
import * as _143 from "./applications/interchain_accounts/v1/metadata";
import * as _144 from "./applications/interchain_accounts/v1/packet";
import * as _145 from "./applications/transfer/v1/authz";
import * as _146 from "./applications/transfer/v1/genesis";
import * as _147 from "./applications/transfer/v1/query";
import * as _148 from "./applications/transfer/v1/transfer";
import * as _149 from "./applications/transfer/v1/tx";
import * as _150 from "./applications/transfer/v2/packet";
import * as _151 from "./core/channel/v1/channel";
import * as _152 from "./core/channel/v1/genesis";
import * as _153 from "./core/channel/v1/query";
import * as _154 from "./core/channel/v1/tx";
import * as _155 from "./core/client/v1/client";
import * as _156 from "./core/client/v1/genesis";
import * as _157 from "./core/client/v1/query";
import * as _158 from "./core/client/v1/tx";
import * as _159 from "./core/commitment/v1/commitment";
import * as _160 from "./core/connection/v1/connection";
import * as _161 from "./core/connection/v1/genesis";
import * as _162 from "./core/connection/v1/query";
import * as _163 from "./core/connection/v1/tx";
import * as _164 from "./lightclients/localhost/v2/localhost";
import * as _165 from "./lightclients/solomachine/v2/solomachine";
import * as _166 from "./lightclients/solomachine/v3/solomachine";
import * as _167 from "./lightclients/tendermint/v1/tendermint";
import * as _288 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _289 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _290 from "./applications/transfer/v1/query.lcd";
import * as _291 from "./core/channel/v1/query.lcd";
import * as _292 from "./core/client/v1/query.lcd";
import * as _293 from "./core/connection/v1/query.lcd";
import * as _294 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _295 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _296 from "./applications/transfer/v1/query.rpc.Query";
import * as _297 from "./core/channel/v1/query.rpc.Query";
import * as _298 from "./core/client/v1/query.rpc.Query";
import * as _299 from "./core/connection/v1/query.rpc.Query";
import * as _300 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _301 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _302 from "./applications/transfer/v1/tx.rpc.msg";
import * as _303 from "./core/channel/v1/tx.rpc.msg";
import * as _304 from "./core/client/v1/tx.rpc.msg";
import * as _305 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    Msg: typeof _300.Msg;
                    Query: typeof _294.Query;
                    QueryClientImpl: typeof _294.QueryClientImpl;
                    LCDQueryClient: typeof _288.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _137.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _137.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            updateParams(value: _137.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _137.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _137.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _137.MsgSendTx): {
                                typeUrl: string;
                                value: _137.MsgSendTx;
                            };
                            updateParams(value: _137.MsgUpdateParams): {
                                typeUrl: string;
                                value: _137.MsgUpdateParams;
                            };
                        };
                        toJSON: {
                            registerInterchainAccount(value: _137.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: unknown;
                            };
                            sendTx(value: _137.MsgSendTx): {
                                typeUrl: string;
                                value: unknown;
                            };
                            updateParams(value: _137.MsgUpdateParams): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            registerInterchainAccount(value: any): {
                                typeUrl: string;
                                value: _137.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: any): {
                                typeUrl: string;
                                value: _137.MsgSendTx;
                            };
                            updateParams(value: any): {
                                typeUrl: string;
                                value: _137.MsgUpdateParams;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _137.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _137.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _137.MsgSendTx): {
                                typeUrl: string;
                                value: _137.MsgSendTx;
                            };
                            updateParams(value: _137.MsgUpdateParams): {
                                typeUrl: string;
                                value: _137.MsgUpdateParams;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _137.MsgRegisterInterchainAccount) => _137.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _137.MsgRegisterInterchainAccountAmino) => _137.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _137.MsgSendTx) => _137.MsgSendTxAmino;
                            fromAmino: (object: _137.MsgSendTxAmino) => _137.MsgSendTx;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _137.MsgUpdateParams) => _137.MsgUpdateParamsAmino;
                            fromAmino: (object: _137.MsgUpdateParamsAmino) => _137.MsgUpdateParams;
                        };
                    };
                    protobufPackage: "ibc.applications.interchain_accounts.controller.v1";
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _137.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.MsgRegisterInterchainAccount;
                        fromJSON(object: any): _137.MsgRegisterInterchainAccount;
                        toJSON(message: _137.MsgRegisterInterchainAccount): unknown;
                        fromPartial(object: Partial<_137.MsgRegisterInterchainAccount>): _137.MsgRegisterInterchainAccount;
                        fromAmino(object: _137.MsgRegisterInterchainAccountAmino): _137.MsgRegisterInterchainAccount;
                        toAmino(message: _137.MsgRegisterInterchainAccount): _137.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _137.MsgRegisterInterchainAccountAminoMsg): _137.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _137.MsgRegisterInterchainAccount): _137.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _137.MsgRegisterInterchainAccountProtoMsg): _137.MsgRegisterInterchainAccount;
                        toProto(message: _137.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _137.MsgRegisterInterchainAccount): _137.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _137.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.MsgRegisterInterchainAccountResponse;
                        fromJSON(object: any): _137.MsgRegisterInterchainAccountResponse;
                        toJSON(message: _137.MsgRegisterInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_137.MsgRegisterInterchainAccountResponse>): _137.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _137.MsgRegisterInterchainAccountResponseAmino): _137.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _137.MsgRegisterInterchainAccountResponse): _137.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _137.MsgRegisterInterchainAccountResponseAminoMsg): _137.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _137.MsgRegisterInterchainAccountResponse): _137.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _137.MsgRegisterInterchainAccountResponseProtoMsg): _137.MsgRegisterInterchainAccountResponse;
                        toProto(message: _137.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _137.MsgRegisterInterchainAccountResponse): _137.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _137.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.MsgSendTx;
                        fromJSON(object: any): _137.MsgSendTx;
                        toJSON(message: _137.MsgSendTx): unknown;
                        fromPartial(object: Partial<_137.MsgSendTx>): _137.MsgSendTx;
                        fromAmino(object: _137.MsgSendTxAmino): _137.MsgSendTx;
                        toAmino(message: _137.MsgSendTx): _137.MsgSendTxAmino;
                        fromAminoMsg(object: _137.MsgSendTxAminoMsg): _137.MsgSendTx;
                        toAminoMsg(message: _137.MsgSendTx): _137.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _137.MsgSendTxProtoMsg): _137.MsgSendTx;
                        toProto(message: _137.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _137.MsgSendTx): _137.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _137.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.MsgSendTxResponse;
                        fromJSON(object: any): _137.MsgSendTxResponse;
                        toJSON(message: _137.MsgSendTxResponse): unknown;
                        fromPartial(object: Partial<_137.MsgSendTxResponse>): _137.MsgSendTxResponse;
                        fromAmino(object: _137.MsgSendTxResponseAmino): _137.MsgSendTxResponse;
                        toAmino(message: _137.MsgSendTxResponse): _137.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _137.MsgSendTxResponseAminoMsg): _137.MsgSendTxResponse;
                        toAminoMsg(message: _137.MsgSendTxResponse): _137.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _137.MsgSendTxResponseProtoMsg): _137.MsgSendTxResponse;
                        toProto(message: _137.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _137.MsgSendTxResponse): _137.MsgSendTxResponseProtoMsg;
                    };
                    MsgUpdateParams: {
                        typeUrl: string;
                        encode(message: _137.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.MsgUpdateParams;
                        fromJSON(object: any): _137.MsgUpdateParams;
                        toJSON(message: _137.MsgUpdateParams): unknown;
                        fromPartial(object: Partial<_137.MsgUpdateParams>): _137.MsgUpdateParams;
                        fromAmino(object: _137.MsgUpdateParamsAmino): _137.MsgUpdateParams;
                        toAmino(message: _137.MsgUpdateParams): _137.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _137.MsgUpdateParamsAminoMsg): _137.MsgUpdateParams;
                        toAminoMsg(message: _137.MsgUpdateParams): _137.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _137.MsgUpdateParamsProtoMsg): _137.MsgUpdateParams;
                        toProto(message: _137.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _137.MsgUpdateParams): _137.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        encode(_: _137.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.MsgUpdateParamsResponse;
                        fromJSON(_: any): _137.MsgUpdateParamsResponse;
                        toJSON(_: _137.MsgUpdateParamsResponse): unknown;
                        fromPartial(_: Partial<_137.MsgUpdateParamsResponse>): _137.MsgUpdateParamsResponse;
                        fromAmino(_: _137.MsgUpdateParamsResponseAmino): _137.MsgUpdateParamsResponse;
                        toAmino(_: _137.MsgUpdateParamsResponse): _137.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _137.MsgUpdateParamsResponseAminoMsg): _137.MsgUpdateParamsResponse;
                        toAminoMsg(message: _137.MsgUpdateParamsResponse): _137.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _137.MsgUpdateParamsResponseProtoMsg): _137.MsgUpdateParamsResponse;
                        toProto(message: _137.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _137.MsgUpdateParamsResponse): _137.MsgUpdateParamsResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _136.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.QueryInterchainAccountRequest;
                        fromJSON(object: any): _136.QueryInterchainAccountRequest;
                        toJSON(message: _136.QueryInterchainAccountRequest): unknown;
                        fromPartial(object: Partial<_136.QueryInterchainAccountRequest>): _136.QueryInterchainAccountRequest;
                        fromAmino(object: _136.QueryInterchainAccountRequestAmino): _136.QueryInterchainAccountRequest;
                        toAmino(message: _136.QueryInterchainAccountRequest): _136.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _136.QueryInterchainAccountRequestAminoMsg): _136.QueryInterchainAccountRequest;
                        toAminoMsg(message: _136.QueryInterchainAccountRequest): _136.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _136.QueryInterchainAccountRequestProtoMsg): _136.QueryInterchainAccountRequest;
                        toProto(message: _136.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _136.QueryInterchainAccountRequest): _136.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _136.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.QueryInterchainAccountResponse;
                        fromJSON(object: any): _136.QueryInterchainAccountResponse;
                        toJSON(message: _136.QueryInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_136.QueryInterchainAccountResponse>): _136.QueryInterchainAccountResponse;
                        fromAmino(object: _136.QueryInterchainAccountResponseAmino): _136.QueryInterchainAccountResponse;
                        toAmino(message: _136.QueryInterchainAccountResponse): _136.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _136.QueryInterchainAccountResponseAminoMsg): _136.QueryInterchainAccountResponse;
                        toAminoMsg(message: _136.QueryInterchainAccountResponse): _136.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _136.QueryInterchainAccountResponseProtoMsg): _136.QueryInterchainAccountResponse;
                        toProto(message: _136.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _136.QueryInterchainAccountResponse): _136.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _136.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.QueryParamsRequest;
                        fromJSON(_: any): _136.QueryParamsRequest;
                        toJSON(_: _136.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_136.QueryParamsRequest>): _136.QueryParamsRequest;
                        fromAmino(_: _136.QueryParamsRequestAmino): _136.QueryParamsRequest;
                        toAmino(_: _136.QueryParamsRequest): _136.QueryParamsRequestAmino;
                        fromAminoMsg(object: _136.QueryParamsRequestAminoMsg): _136.QueryParamsRequest;
                        toAminoMsg(message: _136.QueryParamsRequest): _136.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _136.QueryParamsRequestProtoMsg): _136.QueryParamsRequest;
                        toProto(message: _136.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _136.QueryParamsRequest): _136.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _136.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.QueryParamsResponse;
                        fromJSON(object: any): _136.QueryParamsResponse;
                        toJSON(message: _136.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_136.QueryParamsResponse>): _136.QueryParamsResponse;
                        fromAmino(object: _136.QueryParamsResponseAmino): _136.QueryParamsResponse;
                        toAmino(message: _136.QueryParamsResponse): _136.QueryParamsResponseAmino;
                        fromAminoMsg(object: _136.QueryParamsResponseAminoMsg): _136.QueryParamsResponse;
                        toAminoMsg(message: _136.QueryParamsResponse): _136.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _136.QueryParamsResponseProtoMsg): _136.QueryParamsResponse;
                        toProto(message: _136.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _136.QueryParamsResponse): _136.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _135.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _135.Params;
                        fromJSON(object: any): _135.Params;
                        toJSON(message: _135.Params): unknown;
                        fromPartial(object: Partial<_135.Params>): _135.Params;
                        fromAmino(object: _135.ParamsAmino): _135.Params;
                        toAmino(message: _135.Params): _135.ParamsAmino;
                        fromAminoMsg(object: _135.ParamsAminoMsg): _135.Params;
                        toAminoMsg(message: _135.Params): _135.ParamsAminoMsg;
                        fromProtoMsg(message: _135.ParamsProtoMsg): _135.Params;
                        toProto(message: _135.Params): Uint8Array;
                        toProtoMsg(message: _135.Params): _135.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    protobufPackage: "ibc.applications.interchain_accounts.genesis.v1";
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _138.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.GenesisState;
                        fromJSON(object: any): _138.GenesisState;
                        toJSON(message: _138.GenesisState): unknown;
                        fromPartial(object: Partial<_138.GenesisState>): _138.GenesisState;
                        fromAmino(object: _138.GenesisStateAmino): _138.GenesisState;
                        toAmino(message: _138.GenesisState): _138.GenesisStateAmino;
                        fromAminoMsg(object: _138.GenesisStateAminoMsg): _138.GenesisState;
                        toAminoMsg(message: _138.GenesisState): _138.GenesisStateAminoMsg;
                        fromProtoMsg(message: _138.GenesisStateProtoMsg): _138.GenesisState;
                        toProto(message: _138.GenesisState): Uint8Array;
                        toProtoMsg(message: _138.GenesisState): _138.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _138.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.ControllerGenesisState;
                        fromJSON(object: any): _138.ControllerGenesisState;
                        toJSON(message: _138.ControllerGenesisState): unknown;
                        fromPartial(object: Partial<_138.ControllerGenesisState>): _138.ControllerGenesisState;
                        fromAmino(object: _138.ControllerGenesisStateAmino): _138.ControllerGenesisState;
                        toAmino(message: _138.ControllerGenesisState): _138.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _138.ControllerGenesisStateAminoMsg): _138.ControllerGenesisState;
                        toAminoMsg(message: _138.ControllerGenesisState): _138.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _138.ControllerGenesisStateProtoMsg): _138.ControllerGenesisState;
                        toProto(message: _138.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _138.ControllerGenesisState): _138.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _138.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.HostGenesisState;
                        fromJSON(object: any): _138.HostGenesisState;
                        toJSON(message: _138.HostGenesisState): unknown;
                        fromPartial(object: Partial<_138.HostGenesisState>): _138.HostGenesisState;
                        fromAmino(object: _138.HostGenesisStateAmino): _138.HostGenesisState;
                        toAmino(message: _138.HostGenesisState): _138.HostGenesisStateAmino;
                        fromAminoMsg(object: _138.HostGenesisStateAminoMsg): _138.HostGenesisState;
                        toAminoMsg(message: _138.HostGenesisState): _138.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _138.HostGenesisStateProtoMsg): _138.HostGenesisState;
                        toProto(message: _138.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _138.HostGenesisState): _138.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _138.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.ActiveChannel;
                        fromJSON(object: any): _138.ActiveChannel;
                        toJSON(message: _138.ActiveChannel): unknown;
                        fromPartial(object: Partial<_138.ActiveChannel>): _138.ActiveChannel;
                        fromAmino(object: _138.ActiveChannelAmino): _138.ActiveChannel;
                        toAmino(message: _138.ActiveChannel): _138.ActiveChannelAmino;
                        fromAminoMsg(object: _138.ActiveChannelAminoMsg): _138.ActiveChannel;
                        toAminoMsg(message: _138.ActiveChannel): _138.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _138.ActiveChannelProtoMsg): _138.ActiveChannel;
                        toProto(message: _138.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _138.ActiveChannel): _138.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _138.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.RegisteredInterchainAccount;
                        fromJSON(object: any): _138.RegisteredInterchainAccount;
                        toJSON(message: _138.RegisteredInterchainAccount): unknown;
                        fromPartial(object: Partial<_138.RegisteredInterchainAccount>): _138.RegisteredInterchainAccount;
                        fromAmino(object: _138.RegisteredInterchainAccountAmino): _138.RegisteredInterchainAccount;
                        toAmino(message: _138.RegisteredInterchainAccount): _138.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _138.RegisteredInterchainAccountAminoMsg): _138.RegisteredInterchainAccount;
                        toAminoMsg(message: _138.RegisteredInterchainAccount): _138.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _138.RegisteredInterchainAccountProtoMsg): _138.RegisteredInterchainAccount;
                        toProto(message: _138.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _138.RegisteredInterchainAccount): _138.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    Msg: typeof _301.Msg;
                    Query: typeof _295.Query;
                    QueryClientImpl: typeof _295.QueryClientImpl;
                    LCDQueryClient: typeof _289.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            updateParams(value: _141.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            updateParams(value: _141.MsgUpdateParams): {
                                typeUrl: string;
                                value: _141.MsgUpdateParams;
                            };
                        };
                        toJSON: {
                            updateParams(value: _141.MsgUpdateParams): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            updateParams(value: any): {
                                typeUrl: string;
                                value: _141.MsgUpdateParams;
                            };
                        };
                        fromPartial: {
                            updateParams(value: _141.MsgUpdateParams): {
                                typeUrl: string;
                                value: _141.MsgUpdateParams;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _141.MsgUpdateParams) => _141.MsgUpdateParamsAmino;
                            fromAmino: (object: _141.MsgUpdateParamsAmino) => _141.MsgUpdateParams;
                        };
                    };
                    protobufPackage: "ibc.applications.interchain_accounts.host.v1";
                    MsgUpdateParams: {
                        typeUrl: string;
                        encode(message: _141.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _141.MsgUpdateParams;
                        fromJSON(object: any): _141.MsgUpdateParams;
                        toJSON(message: _141.MsgUpdateParams): unknown;
                        fromPartial(object: Partial<_141.MsgUpdateParams>): _141.MsgUpdateParams;
                        fromAmino(object: _141.MsgUpdateParamsAmino): _141.MsgUpdateParams;
                        toAmino(message: _141.MsgUpdateParams): _141.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _141.MsgUpdateParamsAminoMsg): _141.MsgUpdateParams;
                        toAminoMsg(message: _141.MsgUpdateParams): _141.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _141.MsgUpdateParamsProtoMsg): _141.MsgUpdateParams;
                        toProto(message: _141.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _141.MsgUpdateParams): _141.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        encode(_: _141.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _141.MsgUpdateParamsResponse;
                        fromJSON(_: any): _141.MsgUpdateParamsResponse;
                        toJSON(_: _141.MsgUpdateParamsResponse): unknown;
                        fromPartial(_: Partial<_141.MsgUpdateParamsResponse>): _141.MsgUpdateParamsResponse;
                        fromAmino(_: _141.MsgUpdateParamsResponseAmino): _141.MsgUpdateParamsResponse;
                        toAmino(_: _141.MsgUpdateParamsResponse): _141.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _141.MsgUpdateParamsResponseAminoMsg): _141.MsgUpdateParamsResponse;
                        toAminoMsg(message: _141.MsgUpdateParamsResponse): _141.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _141.MsgUpdateParamsResponseProtoMsg): _141.MsgUpdateParamsResponse;
                        toProto(message: _141.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _141.MsgUpdateParamsResponse): _141.MsgUpdateParamsResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _140.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _140.QueryParamsRequest;
                        fromJSON(_: any): _140.QueryParamsRequest;
                        toJSON(_: _140.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_140.QueryParamsRequest>): _140.QueryParamsRequest;
                        fromAmino(_: _140.QueryParamsRequestAmino): _140.QueryParamsRequest;
                        toAmino(_: _140.QueryParamsRequest): _140.QueryParamsRequestAmino;
                        fromAminoMsg(object: _140.QueryParamsRequestAminoMsg): _140.QueryParamsRequest;
                        toAminoMsg(message: _140.QueryParamsRequest): _140.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _140.QueryParamsRequestProtoMsg): _140.QueryParamsRequest;
                        toProto(message: _140.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _140.QueryParamsRequest): _140.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _140.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _140.QueryParamsResponse;
                        fromJSON(object: any): _140.QueryParamsResponse;
                        toJSON(message: _140.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_140.QueryParamsResponse>): _140.QueryParamsResponse;
                        fromAmino(object: _140.QueryParamsResponseAmino): _140.QueryParamsResponse;
                        toAmino(message: _140.QueryParamsResponse): _140.QueryParamsResponseAmino;
                        fromAminoMsg(object: _140.QueryParamsResponseAminoMsg): _140.QueryParamsResponse;
                        toAminoMsg(message: _140.QueryParamsResponse): _140.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _140.QueryParamsResponseProtoMsg): _140.QueryParamsResponse;
                        toProto(message: _140.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _140.QueryParamsResponse): _140.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _139.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.Params;
                        fromJSON(object: any): _139.Params;
                        toJSON(message: _139.Params): unknown;
                        fromPartial(object: Partial<_139.Params>): _139.Params;
                        fromAmino(object: _139.ParamsAmino): _139.Params;
                        toAmino(message: _139.Params): _139.ParamsAmino;
                        fromAminoMsg(object: _139.ParamsAminoMsg): _139.Params;
                        toAminoMsg(message: _139.Params): _139.ParamsAminoMsg;
                        fromProtoMsg(message: _139.ParamsProtoMsg): _139.Params;
                        toProto(message: _139.Params): Uint8Array;
                        toProtoMsg(message: _139.Params): _139.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _144.Type;
                typeToJSON(object: _144.Type): string;
                protobufPackage: "ibc.applications.interchain_accounts.v1";
                Type: typeof _144.Type;
                TypeSDKType: typeof _144.Type;
                TypeAmino: typeof _144.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _144.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.InterchainAccountPacketData;
                    fromJSON(object: any): _144.InterchainAccountPacketData;
                    toJSON(message: _144.InterchainAccountPacketData): unknown;
                    fromPartial(object: Partial<_144.InterchainAccountPacketData>): _144.InterchainAccountPacketData;
                    fromAmino(object: _144.InterchainAccountPacketDataAmino): _144.InterchainAccountPacketData;
                    toAmino(message: _144.InterchainAccountPacketData): _144.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _144.InterchainAccountPacketDataAminoMsg): _144.InterchainAccountPacketData;
                    toAminoMsg(message: _144.InterchainAccountPacketData): _144.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _144.InterchainAccountPacketDataProtoMsg): _144.InterchainAccountPacketData;
                    toProto(message: _144.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _144.InterchainAccountPacketData): _144.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _144.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.CosmosTx;
                    fromJSON(object: any): _144.CosmosTx;
                    toJSON(message: _144.CosmosTx): unknown;
                    fromPartial(object: Partial<_144.CosmosTx>): _144.CosmosTx;
                    fromAmino(object: _144.CosmosTxAmino): _144.CosmosTx;
                    toAmino(message: _144.CosmosTx): _144.CosmosTxAmino;
                    fromAminoMsg(object: _144.CosmosTxAminoMsg): _144.CosmosTx;
                    toAminoMsg(message: _144.CosmosTx): _144.CosmosTxAminoMsg;
                    fromProtoMsg(message: _144.CosmosTxProtoMsg): _144.CosmosTx;
                    toProto(message: _144.CosmosTx): Uint8Array;
                    toProtoMsg(message: _144.CosmosTx): _144.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _143.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.Metadata;
                    fromJSON(object: any): _143.Metadata;
                    toJSON(message: _143.Metadata): unknown;
                    fromPartial(object: Partial<_143.Metadata>): _143.Metadata;
                    fromAmino(object: _143.MetadataAmino): _143.Metadata;
                    toAmino(message: _143.Metadata): _143.MetadataAmino;
                    fromAminoMsg(object: _143.MetadataAminoMsg): _143.Metadata;
                    toAminoMsg(message: _143.Metadata): _143.MetadataAminoMsg;
                    fromProtoMsg(message: _143.MetadataProtoMsg): _143.Metadata;
                    toProto(message: _143.Metadata): Uint8Array;
                    toProtoMsg(message: _143.Metadata): _143.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _142.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _142.InterchainAccount;
                    fromJSON(object: any): _142.InterchainAccount;
                    toJSON(message: _142.InterchainAccount): unknown;
                    fromPartial(object: Partial<_142.InterchainAccount>): _142.InterchainAccount;
                    fromAmino(object: _142.InterchainAccountAmino): _142.InterchainAccount;
                    toAmino(message: _142.InterchainAccount): _142.InterchainAccountAmino;
                    fromAminoMsg(object: _142.InterchainAccountAminoMsg): _142.InterchainAccount;
                    toAminoMsg(message: _142.InterchainAccount): _142.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _142.InterchainAccountProtoMsg): _142.InterchainAccount;
                    toProto(message: _142.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _142.InterchainAccount): _142.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                Msg: typeof _302.Msg;
                Query: typeof _296.Query;
                QueryClientImpl: typeof _296.QueryClientImpl;
                LCDQueryClient: typeof _290.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _149.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateParams(value: _149.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _149.MsgTransfer): {
                            typeUrl: string;
                            value: _149.MsgTransfer;
                        };
                        updateParams(value: _149.MsgUpdateParams): {
                            typeUrl: string;
                            value: _149.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        transfer(value: _149.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateParams(value: _149.MsgUpdateParams): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _149.MsgTransfer;
                        };
                        updateParams(value: any): {
                            typeUrl: string;
                            value: _149.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        transfer(value: _149.MsgTransfer): {
                            typeUrl: string;
                            value: _149.MsgTransfer;
                        };
                        updateParams(value: _149.MsgUpdateParams): {
                            typeUrl: string;
                            value: _149.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _149.MsgTransfer) => _149.MsgTransferAmino;
                        fromAmino: (object: _149.MsgTransferAmino) => _149.MsgTransfer;
                    };
                    "/ibc.applications.transfer.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _149.MsgUpdateParams) => _149.MsgUpdateParamsAmino;
                        fromAmino: (object: _149.MsgUpdateParamsAmino) => _149.MsgUpdateParams;
                    };
                };
                protobufPackage: "ibc.applications.transfer.v1";
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _149.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.MsgTransfer;
                    fromJSON(object: any): _149.MsgTransfer;
                    toJSON(message: _149.MsgTransfer): unknown;
                    fromPartial(object: Partial<_149.MsgTransfer>): _149.MsgTransfer;
                    fromAmino(object: _149.MsgTransferAmino): _149.MsgTransfer;
                    toAmino(message: _149.MsgTransfer): _149.MsgTransferAmino;
                    fromAminoMsg(object: _149.MsgTransferAminoMsg): _149.MsgTransfer;
                    toAminoMsg(message: _149.MsgTransfer): _149.MsgTransferAminoMsg;
                    fromProtoMsg(message: _149.MsgTransferProtoMsg): _149.MsgTransfer;
                    toProto(message: _149.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _149.MsgTransfer): _149.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _149.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.MsgTransferResponse;
                    fromJSON(object: any): _149.MsgTransferResponse;
                    toJSON(message: _149.MsgTransferResponse): unknown;
                    fromPartial(object: Partial<_149.MsgTransferResponse>): _149.MsgTransferResponse;
                    fromAmino(object: _149.MsgTransferResponseAmino): _149.MsgTransferResponse;
                    toAmino(message: _149.MsgTransferResponse): _149.MsgTransferResponseAmino;
                    fromAminoMsg(object: _149.MsgTransferResponseAminoMsg): _149.MsgTransferResponse;
                    toAminoMsg(message: _149.MsgTransferResponse): _149.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _149.MsgTransferResponseProtoMsg): _149.MsgTransferResponse;
                    toProto(message: _149.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _149.MsgTransferResponse): _149.MsgTransferResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _149.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.MsgUpdateParams;
                    fromJSON(object: any): _149.MsgUpdateParams;
                    toJSON(message: _149.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_149.MsgUpdateParams>): _149.MsgUpdateParams;
                    fromAmino(object: _149.MsgUpdateParamsAmino): _149.MsgUpdateParams;
                    toAmino(message: _149.MsgUpdateParams): _149.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _149.MsgUpdateParamsAminoMsg): _149.MsgUpdateParams;
                    toAminoMsg(message: _149.MsgUpdateParams): _149.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _149.MsgUpdateParamsProtoMsg): _149.MsgUpdateParams;
                    toProto(message: _149.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _149.MsgUpdateParams): _149.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _149.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.MsgUpdateParamsResponse;
                    fromJSON(_: any): _149.MsgUpdateParamsResponse;
                    toJSON(_: _149.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_149.MsgUpdateParamsResponse>): _149.MsgUpdateParamsResponse;
                    fromAmino(_: _149.MsgUpdateParamsResponseAmino): _149.MsgUpdateParamsResponse;
                    toAmino(_: _149.MsgUpdateParamsResponse): _149.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _149.MsgUpdateParamsResponseAminoMsg): _149.MsgUpdateParamsResponse;
                    toAminoMsg(message: _149.MsgUpdateParamsResponse): _149.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _149.MsgUpdateParamsResponseProtoMsg): _149.MsgUpdateParamsResponse;
                    toProto(message: _149.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _149.MsgUpdateParamsResponse): _149.MsgUpdateParamsResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _148.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.DenomTrace;
                    fromJSON(object: any): _148.DenomTrace;
                    toJSON(message: _148.DenomTrace): unknown;
                    fromPartial(object: Partial<_148.DenomTrace>): _148.DenomTrace;
                    fromAmino(object: _148.DenomTraceAmino): _148.DenomTrace;
                    toAmino(message: _148.DenomTrace): _148.DenomTraceAmino;
                    fromAminoMsg(object: _148.DenomTraceAminoMsg): _148.DenomTrace;
                    toAminoMsg(message: _148.DenomTrace): _148.DenomTraceAminoMsg;
                    fromProtoMsg(message: _148.DenomTraceProtoMsg): _148.DenomTrace;
                    toProto(message: _148.DenomTrace): Uint8Array;
                    toProtoMsg(message: _148.DenomTrace): _148.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _148.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.Params;
                    fromJSON(object: any): _148.Params;
                    toJSON(message: _148.Params): unknown;
                    fromPartial(object: Partial<_148.Params>): _148.Params;
                    fromAmino(object: _148.ParamsAmino): _148.Params;
                    toAmino(message: _148.Params): _148.ParamsAmino;
                    fromAminoMsg(object: _148.ParamsAminoMsg): _148.Params;
                    toAminoMsg(message: _148.Params): _148.ParamsAminoMsg;
                    fromProtoMsg(message: _148.ParamsProtoMsg): _148.Params;
                    toProto(message: _148.Params): Uint8Array;
                    toProtoMsg(message: _148.Params): _148.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.QueryDenomTraceRequest;
                    fromJSON(object: any): _147.QueryDenomTraceRequest;
                    toJSON(message: _147.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_147.QueryDenomTraceRequest>): _147.QueryDenomTraceRequest;
                    fromAmino(object: _147.QueryDenomTraceRequestAmino): _147.QueryDenomTraceRequest;
                    toAmino(message: _147.QueryDenomTraceRequest): _147.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _147.QueryDenomTraceRequestAminoMsg): _147.QueryDenomTraceRequest;
                    toAminoMsg(message: _147.QueryDenomTraceRequest): _147.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryDenomTraceRequestProtoMsg): _147.QueryDenomTraceRequest;
                    toProto(message: _147.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryDenomTraceRequest): _147.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.QueryDenomTraceResponse;
                    fromJSON(object: any): _147.QueryDenomTraceResponse;
                    toJSON(message: _147.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_147.QueryDenomTraceResponse>): _147.QueryDenomTraceResponse;
                    fromAmino(object: _147.QueryDenomTraceResponseAmino): _147.QueryDenomTraceResponse;
                    toAmino(message: _147.QueryDenomTraceResponse): _147.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _147.QueryDenomTraceResponseAminoMsg): _147.QueryDenomTraceResponse;
                    toAminoMsg(message: _147.QueryDenomTraceResponse): _147.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryDenomTraceResponseProtoMsg): _147.QueryDenomTraceResponse;
                    toProto(message: _147.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryDenomTraceResponse): _147.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.QueryDenomTracesRequest;
                    fromJSON(object: any): _147.QueryDenomTracesRequest;
                    toJSON(message: _147.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_147.QueryDenomTracesRequest>): _147.QueryDenomTracesRequest;
                    fromAmino(object: _147.QueryDenomTracesRequestAmino): _147.QueryDenomTracesRequest;
                    toAmino(message: _147.QueryDenomTracesRequest): _147.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _147.QueryDenomTracesRequestAminoMsg): _147.QueryDenomTracesRequest;
                    toAminoMsg(message: _147.QueryDenomTracesRequest): _147.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryDenomTracesRequestProtoMsg): _147.QueryDenomTracesRequest;
                    toProto(message: _147.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryDenomTracesRequest): _147.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.QueryDenomTracesResponse;
                    fromJSON(object: any): _147.QueryDenomTracesResponse;
                    toJSON(message: _147.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_147.QueryDenomTracesResponse>): _147.QueryDenomTracesResponse;
                    fromAmino(object: _147.QueryDenomTracesResponseAmino): _147.QueryDenomTracesResponse;
                    toAmino(message: _147.QueryDenomTracesResponse): _147.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _147.QueryDenomTracesResponseAminoMsg): _147.QueryDenomTracesResponse;
                    toAminoMsg(message: _147.QueryDenomTracesResponse): _147.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryDenomTracesResponseProtoMsg): _147.QueryDenomTracesResponse;
                    toProto(message: _147.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryDenomTracesResponse): _147.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _147.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.QueryParamsRequest;
                    fromJSON(_: any): _147.QueryParamsRequest;
                    toJSON(_: _147.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_147.QueryParamsRequest>): _147.QueryParamsRequest;
                    fromAmino(_: _147.QueryParamsRequestAmino): _147.QueryParamsRequest;
                    toAmino(_: _147.QueryParamsRequest): _147.QueryParamsRequestAmino;
                    fromAminoMsg(object: _147.QueryParamsRequestAminoMsg): _147.QueryParamsRequest;
                    toAminoMsg(message: _147.QueryParamsRequest): _147.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryParamsRequestProtoMsg): _147.QueryParamsRequest;
                    toProto(message: _147.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryParamsRequest): _147.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.QueryParamsResponse;
                    fromJSON(object: any): _147.QueryParamsResponse;
                    toJSON(message: _147.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_147.QueryParamsResponse>): _147.QueryParamsResponse;
                    fromAmino(object: _147.QueryParamsResponseAmino): _147.QueryParamsResponse;
                    toAmino(message: _147.QueryParamsResponse): _147.QueryParamsResponseAmino;
                    fromAminoMsg(object: _147.QueryParamsResponseAminoMsg): _147.QueryParamsResponse;
                    toAminoMsg(message: _147.QueryParamsResponse): _147.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryParamsResponseProtoMsg): _147.QueryParamsResponse;
                    toProto(message: _147.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryParamsResponse): _147.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.QueryDenomHashRequest;
                    fromJSON(object: any): _147.QueryDenomHashRequest;
                    toJSON(message: _147.QueryDenomHashRequest): unknown;
                    fromPartial(object: Partial<_147.QueryDenomHashRequest>): _147.QueryDenomHashRequest;
                    fromAmino(object: _147.QueryDenomHashRequestAmino): _147.QueryDenomHashRequest;
                    toAmino(message: _147.QueryDenomHashRequest): _147.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _147.QueryDenomHashRequestAminoMsg): _147.QueryDenomHashRequest;
                    toAminoMsg(message: _147.QueryDenomHashRequest): _147.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryDenomHashRequestProtoMsg): _147.QueryDenomHashRequest;
                    toProto(message: _147.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryDenomHashRequest): _147.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.QueryDenomHashResponse;
                    fromJSON(object: any): _147.QueryDenomHashResponse;
                    toJSON(message: _147.QueryDenomHashResponse): unknown;
                    fromPartial(object: Partial<_147.QueryDenomHashResponse>): _147.QueryDenomHashResponse;
                    fromAmino(object: _147.QueryDenomHashResponseAmino): _147.QueryDenomHashResponse;
                    toAmino(message: _147.QueryDenomHashResponse): _147.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _147.QueryDenomHashResponseAminoMsg): _147.QueryDenomHashResponse;
                    toAminoMsg(message: _147.QueryDenomHashResponse): _147.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryDenomHashResponseProtoMsg): _147.QueryDenomHashResponse;
                    toProto(message: _147.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryDenomHashResponse): _147.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.QueryEscrowAddressRequest;
                    fromJSON(object: any): _147.QueryEscrowAddressRequest;
                    toJSON(message: _147.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: Partial<_147.QueryEscrowAddressRequest>): _147.QueryEscrowAddressRequest;
                    fromAmino(object: _147.QueryEscrowAddressRequestAmino): _147.QueryEscrowAddressRequest;
                    toAmino(message: _147.QueryEscrowAddressRequest): _147.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _147.QueryEscrowAddressRequestAminoMsg): _147.QueryEscrowAddressRequest;
                    toAminoMsg(message: _147.QueryEscrowAddressRequest): _147.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryEscrowAddressRequestProtoMsg): _147.QueryEscrowAddressRequest;
                    toProto(message: _147.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryEscrowAddressRequest): _147.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.QueryEscrowAddressResponse;
                    fromJSON(object: any): _147.QueryEscrowAddressResponse;
                    toJSON(message: _147.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: Partial<_147.QueryEscrowAddressResponse>): _147.QueryEscrowAddressResponse;
                    fromAmino(object: _147.QueryEscrowAddressResponseAmino): _147.QueryEscrowAddressResponse;
                    toAmino(message: _147.QueryEscrowAddressResponse): _147.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _147.QueryEscrowAddressResponseAminoMsg): _147.QueryEscrowAddressResponse;
                    toAminoMsg(message: _147.QueryEscrowAddressResponse): _147.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryEscrowAddressResponseProtoMsg): _147.QueryEscrowAddressResponse;
                    toProto(message: _147.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryEscrowAddressResponse): _147.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.QueryTotalEscrowForDenomRequest;
                    fromJSON(object: any): _147.QueryTotalEscrowForDenomRequest;
                    toJSON(message: _147.QueryTotalEscrowForDenomRequest): unknown;
                    fromPartial(object: Partial<_147.QueryTotalEscrowForDenomRequest>): _147.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _147.QueryTotalEscrowForDenomRequestAmino): _147.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _147.QueryTotalEscrowForDenomRequest): _147.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _147.QueryTotalEscrowForDenomRequestAminoMsg): _147.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _147.QueryTotalEscrowForDenomRequest): _147.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryTotalEscrowForDenomRequestProtoMsg): _147.QueryTotalEscrowForDenomRequest;
                    toProto(message: _147.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryTotalEscrowForDenomRequest): _147.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.QueryTotalEscrowForDenomResponse;
                    fromJSON(object: any): _147.QueryTotalEscrowForDenomResponse;
                    toJSON(message: _147.QueryTotalEscrowForDenomResponse): unknown;
                    fromPartial(object: Partial<_147.QueryTotalEscrowForDenomResponse>): _147.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _147.QueryTotalEscrowForDenomResponseAmino): _147.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _147.QueryTotalEscrowForDenomResponse): _147.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _147.QueryTotalEscrowForDenomResponseAminoMsg): _147.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _147.QueryTotalEscrowForDenomResponse): _147.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryTotalEscrowForDenomResponseProtoMsg): _147.QueryTotalEscrowForDenomResponse;
                    toProto(message: _147.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryTotalEscrowForDenomResponse): _147.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _146.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _146.GenesisState;
                    fromJSON(object: any): _146.GenesisState;
                    toJSON(message: _146.GenesisState): unknown;
                    fromPartial(object: Partial<_146.GenesisState>): _146.GenesisState;
                    fromAmino(object: _146.GenesisStateAmino): _146.GenesisState;
                    toAmino(message: _146.GenesisState): _146.GenesisStateAmino;
                    fromAminoMsg(object: _146.GenesisStateAminoMsg): _146.GenesisState;
                    toAminoMsg(message: _146.GenesisState): _146.GenesisStateAminoMsg;
                    fromProtoMsg(message: _146.GenesisStateProtoMsg): _146.GenesisState;
                    toProto(message: _146.GenesisState): Uint8Array;
                    toProtoMsg(message: _146.GenesisState): _146.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _145.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.Allocation;
                    fromJSON(object: any): _145.Allocation;
                    toJSON(message: _145.Allocation): unknown;
                    fromPartial(object: Partial<_145.Allocation>): _145.Allocation;
                    fromAmino(object: _145.AllocationAmino): _145.Allocation;
                    toAmino(message: _145.Allocation): _145.AllocationAmino;
                    fromAminoMsg(object: _145.AllocationAminoMsg): _145.Allocation;
                    toAminoMsg(message: _145.Allocation): _145.AllocationAminoMsg;
                    fromProtoMsg(message: _145.AllocationProtoMsg): _145.Allocation;
                    toProto(message: _145.Allocation): Uint8Array;
                    toProtoMsg(message: _145.Allocation): _145.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _145.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.TransferAuthorization;
                    fromJSON(object: any): _145.TransferAuthorization;
                    toJSON(message: _145.TransferAuthorization): unknown;
                    fromPartial(object: Partial<_145.TransferAuthorization>): _145.TransferAuthorization;
                    fromAmino(object: _145.TransferAuthorizationAmino): _145.TransferAuthorization;
                    toAmino(message: _145.TransferAuthorization): _145.TransferAuthorizationAmino;
                    fromAminoMsg(object: _145.TransferAuthorizationAminoMsg): _145.TransferAuthorization;
                    toAminoMsg(message: _145.TransferAuthorization): _145.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _145.TransferAuthorizationProtoMsg): _145.TransferAuthorization;
                    toProto(message: _145.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _145.TransferAuthorization): _145.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                protobufPackage: "ibc.applications.transfer.v2";
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _150.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _150.FungibleTokenPacketData;
                    fromJSON(object: any): _150.FungibleTokenPacketData;
                    toJSON(message: _150.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_150.FungibleTokenPacketData>): _150.FungibleTokenPacketData;
                    fromAmino(object: _150.FungibleTokenPacketDataAmino): _150.FungibleTokenPacketData;
                    toAmino(message: _150.FungibleTokenPacketData): _150.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _150.FungibleTokenPacketDataAminoMsg): _150.FungibleTokenPacketData;
                    toAminoMsg(message: _150.FungibleTokenPacketData): _150.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _150.FungibleTokenPacketDataProtoMsg): _150.FungibleTokenPacketData;
                    toProto(message: _150.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _150.FungibleTokenPacketData): _150.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                Msg: typeof _303.Msg;
                Query: typeof _297.Query;
                QueryClientImpl: typeof _297.QueryClientImpl;
                LCDQueryClient: typeof _291.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _154.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _154.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _154.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _154.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _154.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _154.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _154.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _154.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _154.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _154.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _154.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _154.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _154.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _154.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _154.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _154.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _154.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _154.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _154.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _154.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _154.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _154.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _154.MsgRecvPacket): {
                            typeUrl: string;
                            value: _154.MsgRecvPacket;
                        };
                        timeout(value: _154.MsgTimeout): {
                            typeUrl: string;
                            value: _154.MsgTimeout;
                        };
                        timeoutOnClose(value: _154.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _154.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _154.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _154.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _154.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _154.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _154.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _154.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _154.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _154.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _154.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _154.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _154.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _154.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _154.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _154.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _154.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _154.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _154.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _154.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _154.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _154.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _154.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _154.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _154.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _154.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _154.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _154.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _154.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _154.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _154.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _154.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _154.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _154.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _154.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _154.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _154.MsgRecvPacket): {
                            typeUrl: string;
                            value: _154.MsgRecvPacket;
                        };
                        timeout(value: _154.MsgTimeout): {
                            typeUrl: string;
                            value: _154.MsgTimeout;
                        };
                        timeoutOnClose(value: _154.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _154.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _154.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _154.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _154.MsgChannelOpenInit) => _154.MsgChannelOpenInitAmino;
                        fromAmino: (object: _154.MsgChannelOpenInitAmino) => _154.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _154.MsgChannelOpenTry) => _154.MsgChannelOpenTryAmino;
                        fromAmino: (object: _154.MsgChannelOpenTryAmino) => _154.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _154.MsgChannelOpenAck) => _154.MsgChannelOpenAckAmino;
                        fromAmino: (object: _154.MsgChannelOpenAckAmino) => _154.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _154.MsgChannelOpenConfirm) => _154.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _154.MsgChannelOpenConfirmAmino) => _154.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _154.MsgChannelCloseInit) => _154.MsgChannelCloseInitAmino;
                        fromAmino: (object: _154.MsgChannelCloseInitAmino) => _154.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _154.MsgChannelCloseConfirm) => _154.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _154.MsgChannelCloseConfirmAmino) => _154.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _154.MsgRecvPacket) => _154.MsgRecvPacketAmino;
                        fromAmino: (object: _154.MsgRecvPacketAmino) => _154.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _154.MsgTimeout) => _154.MsgTimeoutAmino;
                        fromAmino: (object: _154.MsgTimeoutAmino) => _154.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _154.MsgTimeoutOnClose) => _154.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _154.MsgTimeoutOnCloseAmino) => _154.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _154.MsgAcknowledgement) => _154.MsgAcknowledgementAmino;
                        fromAmino: (object: _154.MsgAcknowledgementAmino) => _154.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _154.ResponseResultType;
                responseResultTypeToJSON(object: _154.ResponseResultType): string;
                protobufPackage: "ibc.core.channel.v1";
                ResponseResultType: typeof _154.ResponseResultType;
                ResponseResultTypeSDKType: typeof _154.ResponseResultType;
                ResponseResultTypeAmino: typeof _154.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _154.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgChannelOpenInit;
                    fromJSON(object: any): _154.MsgChannelOpenInit;
                    toJSON(message: _154.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_154.MsgChannelOpenInit>): _154.MsgChannelOpenInit;
                    fromAmino(object: _154.MsgChannelOpenInitAmino): _154.MsgChannelOpenInit;
                    toAmino(message: _154.MsgChannelOpenInit): _154.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _154.MsgChannelOpenInitAminoMsg): _154.MsgChannelOpenInit;
                    toAminoMsg(message: _154.MsgChannelOpenInit): _154.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _154.MsgChannelOpenInitProtoMsg): _154.MsgChannelOpenInit;
                    toProto(message: _154.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _154.MsgChannelOpenInit): _154.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _154.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgChannelOpenInitResponse;
                    fromJSON(object: any): _154.MsgChannelOpenInitResponse;
                    toJSON(message: _154.MsgChannelOpenInitResponse): unknown;
                    fromPartial(object: Partial<_154.MsgChannelOpenInitResponse>): _154.MsgChannelOpenInitResponse;
                    fromAmino(object: _154.MsgChannelOpenInitResponseAmino): _154.MsgChannelOpenInitResponse;
                    toAmino(message: _154.MsgChannelOpenInitResponse): _154.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _154.MsgChannelOpenInitResponseAminoMsg): _154.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _154.MsgChannelOpenInitResponse): _154.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgChannelOpenInitResponseProtoMsg): _154.MsgChannelOpenInitResponse;
                    toProto(message: _154.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgChannelOpenInitResponse): _154.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _154.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgChannelOpenTry;
                    fromJSON(object: any): _154.MsgChannelOpenTry;
                    toJSON(message: _154.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_154.MsgChannelOpenTry>): _154.MsgChannelOpenTry;
                    fromAmino(object: _154.MsgChannelOpenTryAmino): _154.MsgChannelOpenTry;
                    toAmino(message: _154.MsgChannelOpenTry): _154.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _154.MsgChannelOpenTryAminoMsg): _154.MsgChannelOpenTry;
                    toAminoMsg(message: _154.MsgChannelOpenTry): _154.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _154.MsgChannelOpenTryProtoMsg): _154.MsgChannelOpenTry;
                    toProto(message: _154.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _154.MsgChannelOpenTry): _154.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _154.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgChannelOpenTryResponse;
                    fromJSON(object: any): _154.MsgChannelOpenTryResponse;
                    toJSON(message: _154.MsgChannelOpenTryResponse): unknown;
                    fromPartial(object: Partial<_154.MsgChannelOpenTryResponse>): _154.MsgChannelOpenTryResponse;
                    fromAmino(object: _154.MsgChannelOpenTryResponseAmino): _154.MsgChannelOpenTryResponse;
                    toAmino(message: _154.MsgChannelOpenTryResponse): _154.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _154.MsgChannelOpenTryResponseAminoMsg): _154.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _154.MsgChannelOpenTryResponse): _154.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgChannelOpenTryResponseProtoMsg): _154.MsgChannelOpenTryResponse;
                    toProto(message: _154.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgChannelOpenTryResponse): _154.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _154.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgChannelOpenAck;
                    fromJSON(object: any): _154.MsgChannelOpenAck;
                    toJSON(message: _154.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_154.MsgChannelOpenAck>): _154.MsgChannelOpenAck;
                    fromAmino(object: _154.MsgChannelOpenAckAmino): _154.MsgChannelOpenAck;
                    toAmino(message: _154.MsgChannelOpenAck): _154.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _154.MsgChannelOpenAckAminoMsg): _154.MsgChannelOpenAck;
                    toAminoMsg(message: _154.MsgChannelOpenAck): _154.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _154.MsgChannelOpenAckProtoMsg): _154.MsgChannelOpenAck;
                    toProto(message: _154.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _154.MsgChannelOpenAck): _154.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _154.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _154.MsgChannelOpenAckResponse;
                    toJSON(_: _154.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_154.MsgChannelOpenAckResponse>): _154.MsgChannelOpenAckResponse;
                    fromAmino(_: _154.MsgChannelOpenAckResponseAmino): _154.MsgChannelOpenAckResponse;
                    toAmino(_: _154.MsgChannelOpenAckResponse): _154.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _154.MsgChannelOpenAckResponseAminoMsg): _154.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _154.MsgChannelOpenAckResponse): _154.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgChannelOpenAckResponseProtoMsg): _154.MsgChannelOpenAckResponse;
                    toProto(message: _154.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgChannelOpenAckResponse): _154.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _154.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgChannelOpenConfirm;
                    fromJSON(object: any): _154.MsgChannelOpenConfirm;
                    toJSON(message: _154.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_154.MsgChannelOpenConfirm>): _154.MsgChannelOpenConfirm;
                    fromAmino(object: _154.MsgChannelOpenConfirmAmino): _154.MsgChannelOpenConfirm;
                    toAmino(message: _154.MsgChannelOpenConfirm): _154.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _154.MsgChannelOpenConfirmAminoMsg): _154.MsgChannelOpenConfirm;
                    toAminoMsg(message: _154.MsgChannelOpenConfirm): _154.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _154.MsgChannelOpenConfirmProtoMsg): _154.MsgChannelOpenConfirm;
                    toProto(message: _154.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _154.MsgChannelOpenConfirm): _154.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _154.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _154.MsgChannelOpenConfirmResponse;
                    toJSON(_: _154.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_154.MsgChannelOpenConfirmResponse>): _154.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _154.MsgChannelOpenConfirmResponseAmino): _154.MsgChannelOpenConfirmResponse;
                    toAmino(_: _154.MsgChannelOpenConfirmResponse): _154.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _154.MsgChannelOpenConfirmResponseAminoMsg): _154.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _154.MsgChannelOpenConfirmResponse): _154.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgChannelOpenConfirmResponseProtoMsg): _154.MsgChannelOpenConfirmResponse;
                    toProto(message: _154.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgChannelOpenConfirmResponse): _154.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _154.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgChannelCloseInit;
                    fromJSON(object: any): _154.MsgChannelCloseInit;
                    toJSON(message: _154.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_154.MsgChannelCloseInit>): _154.MsgChannelCloseInit;
                    fromAmino(object: _154.MsgChannelCloseInitAmino): _154.MsgChannelCloseInit;
                    toAmino(message: _154.MsgChannelCloseInit): _154.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _154.MsgChannelCloseInitAminoMsg): _154.MsgChannelCloseInit;
                    toAminoMsg(message: _154.MsgChannelCloseInit): _154.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _154.MsgChannelCloseInitProtoMsg): _154.MsgChannelCloseInit;
                    toProto(message: _154.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _154.MsgChannelCloseInit): _154.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _154.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _154.MsgChannelCloseInitResponse;
                    toJSON(_: _154.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_154.MsgChannelCloseInitResponse>): _154.MsgChannelCloseInitResponse;
                    fromAmino(_: _154.MsgChannelCloseInitResponseAmino): _154.MsgChannelCloseInitResponse;
                    toAmino(_: _154.MsgChannelCloseInitResponse): _154.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _154.MsgChannelCloseInitResponseAminoMsg): _154.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _154.MsgChannelCloseInitResponse): _154.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgChannelCloseInitResponseProtoMsg): _154.MsgChannelCloseInitResponse;
                    toProto(message: _154.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgChannelCloseInitResponse): _154.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _154.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgChannelCloseConfirm;
                    fromJSON(object: any): _154.MsgChannelCloseConfirm;
                    toJSON(message: _154.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_154.MsgChannelCloseConfirm>): _154.MsgChannelCloseConfirm;
                    fromAmino(object: _154.MsgChannelCloseConfirmAmino): _154.MsgChannelCloseConfirm;
                    toAmino(message: _154.MsgChannelCloseConfirm): _154.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _154.MsgChannelCloseConfirmAminoMsg): _154.MsgChannelCloseConfirm;
                    toAminoMsg(message: _154.MsgChannelCloseConfirm): _154.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _154.MsgChannelCloseConfirmProtoMsg): _154.MsgChannelCloseConfirm;
                    toProto(message: _154.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _154.MsgChannelCloseConfirm): _154.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _154.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _154.MsgChannelCloseConfirmResponse;
                    toJSON(_: _154.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_154.MsgChannelCloseConfirmResponse>): _154.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _154.MsgChannelCloseConfirmResponseAmino): _154.MsgChannelCloseConfirmResponse;
                    toAmino(_: _154.MsgChannelCloseConfirmResponse): _154.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _154.MsgChannelCloseConfirmResponseAminoMsg): _154.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _154.MsgChannelCloseConfirmResponse): _154.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgChannelCloseConfirmResponseProtoMsg): _154.MsgChannelCloseConfirmResponse;
                    toProto(message: _154.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgChannelCloseConfirmResponse): _154.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _154.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgRecvPacket;
                    fromJSON(object: any): _154.MsgRecvPacket;
                    toJSON(message: _154.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_154.MsgRecvPacket>): _154.MsgRecvPacket;
                    fromAmino(object: _154.MsgRecvPacketAmino): _154.MsgRecvPacket;
                    toAmino(message: _154.MsgRecvPacket): _154.MsgRecvPacketAmino;
                    fromAminoMsg(object: _154.MsgRecvPacketAminoMsg): _154.MsgRecvPacket;
                    toAminoMsg(message: _154.MsgRecvPacket): _154.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _154.MsgRecvPacketProtoMsg): _154.MsgRecvPacket;
                    toProto(message: _154.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _154.MsgRecvPacket): _154.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _154.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgRecvPacketResponse;
                    fromJSON(object: any): _154.MsgRecvPacketResponse;
                    toJSON(message: _154.MsgRecvPacketResponse): unknown;
                    fromPartial(object: Partial<_154.MsgRecvPacketResponse>): _154.MsgRecvPacketResponse;
                    fromAmino(object: _154.MsgRecvPacketResponseAmino): _154.MsgRecvPacketResponse;
                    toAmino(message: _154.MsgRecvPacketResponse): _154.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _154.MsgRecvPacketResponseAminoMsg): _154.MsgRecvPacketResponse;
                    toAminoMsg(message: _154.MsgRecvPacketResponse): _154.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgRecvPacketResponseProtoMsg): _154.MsgRecvPacketResponse;
                    toProto(message: _154.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgRecvPacketResponse): _154.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _154.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgTimeout;
                    fromJSON(object: any): _154.MsgTimeout;
                    toJSON(message: _154.MsgTimeout): unknown;
                    fromPartial(object: Partial<_154.MsgTimeout>): _154.MsgTimeout;
                    fromAmino(object: _154.MsgTimeoutAmino): _154.MsgTimeout;
                    toAmino(message: _154.MsgTimeout): _154.MsgTimeoutAmino;
                    fromAminoMsg(object: _154.MsgTimeoutAminoMsg): _154.MsgTimeout;
                    toAminoMsg(message: _154.MsgTimeout): _154.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _154.MsgTimeoutProtoMsg): _154.MsgTimeout;
                    toProto(message: _154.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _154.MsgTimeout): _154.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _154.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgTimeoutResponse;
                    fromJSON(object: any): _154.MsgTimeoutResponse;
                    toJSON(message: _154.MsgTimeoutResponse): unknown;
                    fromPartial(object: Partial<_154.MsgTimeoutResponse>): _154.MsgTimeoutResponse;
                    fromAmino(object: _154.MsgTimeoutResponseAmino): _154.MsgTimeoutResponse;
                    toAmino(message: _154.MsgTimeoutResponse): _154.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _154.MsgTimeoutResponseAminoMsg): _154.MsgTimeoutResponse;
                    toAminoMsg(message: _154.MsgTimeoutResponse): _154.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgTimeoutResponseProtoMsg): _154.MsgTimeoutResponse;
                    toProto(message: _154.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgTimeoutResponse): _154.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _154.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgTimeoutOnClose;
                    fromJSON(object: any): _154.MsgTimeoutOnClose;
                    toJSON(message: _154.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_154.MsgTimeoutOnClose>): _154.MsgTimeoutOnClose;
                    fromAmino(object: _154.MsgTimeoutOnCloseAmino): _154.MsgTimeoutOnClose;
                    toAmino(message: _154.MsgTimeoutOnClose): _154.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _154.MsgTimeoutOnCloseAminoMsg): _154.MsgTimeoutOnClose;
                    toAminoMsg(message: _154.MsgTimeoutOnClose): _154.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _154.MsgTimeoutOnCloseProtoMsg): _154.MsgTimeoutOnClose;
                    toProto(message: _154.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _154.MsgTimeoutOnClose): _154.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _154.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgTimeoutOnCloseResponse;
                    fromJSON(object: any): _154.MsgTimeoutOnCloseResponse;
                    toJSON(message: _154.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(object: Partial<_154.MsgTimeoutOnCloseResponse>): _154.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _154.MsgTimeoutOnCloseResponseAmino): _154.MsgTimeoutOnCloseResponse;
                    toAmino(message: _154.MsgTimeoutOnCloseResponse): _154.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _154.MsgTimeoutOnCloseResponseAminoMsg): _154.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _154.MsgTimeoutOnCloseResponse): _154.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgTimeoutOnCloseResponseProtoMsg): _154.MsgTimeoutOnCloseResponse;
                    toProto(message: _154.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgTimeoutOnCloseResponse): _154.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _154.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgAcknowledgement;
                    fromJSON(object: any): _154.MsgAcknowledgement;
                    toJSON(message: _154.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_154.MsgAcknowledgement>): _154.MsgAcknowledgement;
                    fromAmino(object: _154.MsgAcknowledgementAmino): _154.MsgAcknowledgement;
                    toAmino(message: _154.MsgAcknowledgement): _154.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _154.MsgAcknowledgementAminoMsg): _154.MsgAcknowledgement;
                    toAminoMsg(message: _154.MsgAcknowledgement): _154.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _154.MsgAcknowledgementProtoMsg): _154.MsgAcknowledgement;
                    toProto(message: _154.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _154.MsgAcknowledgement): _154.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _154.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.MsgAcknowledgementResponse;
                    fromJSON(object: any): _154.MsgAcknowledgementResponse;
                    toJSON(message: _154.MsgAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_154.MsgAcknowledgementResponse>): _154.MsgAcknowledgementResponse;
                    fromAmino(object: _154.MsgAcknowledgementResponseAmino): _154.MsgAcknowledgementResponse;
                    toAmino(message: _154.MsgAcknowledgementResponse): _154.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _154.MsgAcknowledgementResponseAminoMsg): _154.MsgAcknowledgementResponse;
                    toAminoMsg(message: _154.MsgAcknowledgementResponse): _154.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgAcknowledgementResponseProtoMsg): _154.MsgAcknowledgementResponse;
                    toProto(message: _154.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgAcknowledgementResponse): _154.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryChannelRequest;
                    fromJSON(object: any): _153.QueryChannelRequest;
                    toJSON(message: _153.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_153.QueryChannelRequest>): _153.QueryChannelRequest;
                    fromAmino(object: _153.QueryChannelRequestAmino): _153.QueryChannelRequest;
                    toAmino(message: _153.QueryChannelRequest): _153.QueryChannelRequestAmino;
                    fromAminoMsg(object: _153.QueryChannelRequestAminoMsg): _153.QueryChannelRequest;
                    toAminoMsg(message: _153.QueryChannelRequest): _153.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryChannelRequestProtoMsg): _153.QueryChannelRequest;
                    toProto(message: _153.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryChannelRequest): _153.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryChannelResponse;
                    fromJSON(object: any): _153.QueryChannelResponse;
                    toJSON(message: _153.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_153.QueryChannelResponse>): _153.QueryChannelResponse;
                    fromAmino(object: _153.QueryChannelResponseAmino): _153.QueryChannelResponse;
                    toAmino(message: _153.QueryChannelResponse): _153.QueryChannelResponseAmino;
                    fromAminoMsg(object: _153.QueryChannelResponseAminoMsg): _153.QueryChannelResponse;
                    toAminoMsg(message: _153.QueryChannelResponse): _153.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryChannelResponseProtoMsg): _153.QueryChannelResponse;
                    toProto(message: _153.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryChannelResponse): _153.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryChannelsRequest;
                    fromJSON(object: any): _153.QueryChannelsRequest;
                    toJSON(message: _153.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_153.QueryChannelsRequest>): _153.QueryChannelsRequest;
                    fromAmino(object: _153.QueryChannelsRequestAmino): _153.QueryChannelsRequest;
                    toAmino(message: _153.QueryChannelsRequest): _153.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _153.QueryChannelsRequestAminoMsg): _153.QueryChannelsRequest;
                    toAminoMsg(message: _153.QueryChannelsRequest): _153.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryChannelsRequestProtoMsg): _153.QueryChannelsRequest;
                    toProto(message: _153.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryChannelsRequest): _153.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryChannelsResponse;
                    fromJSON(object: any): _153.QueryChannelsResponse;
                    toJSON(message: _153.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_153.QueryChannelsResponse>): _153.QueryChannelsResponse;
                    fromAmino(object: _153.QueryChannelsResponseAmino): _153.QueryChannelsResponse;
                    toAmino(message: _153.QueryChannelsResponse): _153.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _153.QueryChannelsResponseAminoMsg): _153.QueryChannelsResponse;
                    toAminoMsg(message: _153.QueryChannelsResponse): _153.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryChannelsResponseProtoMsg): _153.QueryChannelsResponse;
                    toProto(message: _153.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryChannelsResponse): _153.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _153.QueryConnectionChannelsRequest;
                    toJSON(message: _153.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_153.QueryConnectionChannelsRequest>): _153.QueryConnectionChannelsRequest;
                    fromAmino(object: _153.QueryConnectionChannelsRequestAmino): _153.QueryConnectionChannelsRequest;
                    toAmino(message: _153.QueryConnectionChannelsRequest): _153.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _153.QueryConnectionChannelsRequestAminoMsg): _153.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _153.QueryConnectionChannelsRequest): _153.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryConnectionChannelsRequestProtoMsg): _153.QueryConnectionChannelsRequest;
                    toProto(message: _153.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryConnectionChannelsRequest): _153.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _153.QueryConnectionChannelsResponse;
                    toJSON(message: _153.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_153.QueryConnectionChannelsResponse>): _153.QueryConnectionChannelsResponse;
                    fromAmino(object: _153.QueryConnectionChannelsResponseAmino): _153.QueryConnectionChannelsResponse;
                    toAmino(message: _153.QueryConnectionChannelsResponse): _153.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _153.QueryConnectionChannelsResponseAminoMsg): _153.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _153.QueryConnectionChannelsResponse): _153.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryConnectionChannelsResponseProtoMsg): _153.QueryConnectionChannelsResponse;
                    toProto(message: _153.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryConnectionChannelsResponse): _153.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryChannelClientStateRequest;
                    fromJSON(object: any): _153.QueryChannelClientStateRequest;
                    toJSON(message: _153.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_153.QueryChannelClientStateRequest>): _153.QueryChannelClientStateRequest;
                    fromAmino(object: _153.QueryChannelClientStateRequestAmino): _153.QueryChannelClientStateRequest;
                    toAmino(message: _153.QueryChannelClientStateRequest): _153.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _153.QueryChannelClientStateRequestAminoMsg): _153.QueryChannelClientStateRequest;
                    toAminoMsg(message: _153.QueryChannelClientStateRequest): _153.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryChannelClientStateRequestProtoMsg): _153.QueryChannelClientStateRequest;
                    toProto(message: _153.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryChannelClientStateRequest): _153.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryChannelClientStateResponse;
                    fromJSON(object: any): _153.QueryChannelClientStateResponse;
                    toJSON(message: _153.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_153.QueryChannelClientStateResponse>): _153.QueryChannelClientStateResponse;
                    fromAmino(object: _153.QueryChannelClientStateResponseAmino): _153.QueryChannelClientStateResponse;
                    toAmino(message: _153.QueryChannelClientStateResponse): _153.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _153.QueryChannelClientStateResponseAminoMsg): _153.QueryChannelClientStateResponse;
                    toAminoMsg(message: _153.QueryChannelClientStateResponse): _153.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryChannelClientStateResponseProtoMsg): _153.QueryChannelClientStateResponse;
                    toProto(message: _153.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryChannelClientStateResponse): _153.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _153.QueryChannelConsensusStateRequest;
                    toJSON(message: _153.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_153.QueryChannelConsensusStateRequest>): _153.QueryChannelConsensusStateRequest;
                    fromAmino(object: _153.QueryChannelConsensusStateRequestAmino): _153.QueryChannelConsensusStateRequest;
                    toAmino(message: _153.QueryChannelConsensusStateRequest): _153.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _153.QueryChannelConsensusStateRequestAminoMsg): _153.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _153.QueryChannelConsensusStateRequest): _153.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryChannelConsensusStateRequestProtoMsg): _153.QueryChannelConsensusStateRequest;
                    toProto(message: _153.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryChannelConsensusStateRequest): _153.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _153.QueryChannelConsensusStateResponse;
                    toJSON(message: _153.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_153.QueryChannelConsensusStateResponse>): _153.QueryChannelConsensusStateResponse;
                    fromAmino(object: _153.QueryChannelConsensusStateResponseAmino): _153.QueryChannelConsensusStateResponse;
                    toAmino(message: _153.QueryChannelConsensusStateResponse): _153.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _153.QueryChannelConsensusStateResponseAminoMsg): _153.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _153.QueryChannelConsensusStateResponse): _153.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryChannelConsensusStateResponseProtoMsg): _153.QueryChannelConsensusStateResponse;
                    toProto(message: _153.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryChannelConsensusStateResponse): _153.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _153.QueryPacketCommitmentRequest;
                    toJSON(message: _153.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_153.QueryPacketCommitmentRequest>): _153.QueryPacketCommitmentRequest;
                    fromAmino(object: _153.QueryPacketCommitmentRequestAmino): _153.QueryPacketCommitmentRequest;
                    toAmino(message: _153.QueryPacketCommitmentRequest): _153.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _153.QueryPacketCommitmentRequestAminoMsg): _153.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _153.QueryPacketCommitmentRequest): _153.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryPacketCommitmentRequestProtoMsg): _153.QueryPacketCommitmentRequest;
                    toProto(message: _153.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryPacketCommitmentRequest): _153.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _153.QueryPacketCommitmentResponse;
                    toJSON(message: _153.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_153.QueryPacketCommitmentResponse>): _153.QueryPacketCommitmentResponse;
                    fromAmino(object: _153.QueryPacketCommitmentResponseAmino): _153.QueryPacketCommitmentResponse;
                    toAmino(message: _153.QueryPacketCommitmentResponse): _153.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _153.QueryPacketCommitmentResponseAminoMsg): _153.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _153.QueryPacketCommitmentResponse): _153.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryPacketCommitmentResponseProtoMsg): _153.QueryPacketCommitmentResponse;
                    toProto(message: _153.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryPacketCommitmentResponse): _153.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _153.QueryPacketCommitmentsRequest;
                    toJSON(message: _153.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_153.QueryPacketCommitmentsRequest>): _153.QueryPacketCommitmentsRequest;
                    fromAmino(object: _153.QueryPacketCommitmentsRequestAmino): _153.QueryPacketCommitmentsRequest;
                    toAmino(message: _153.QueryPacketCommitmentsRequest): _153.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _153.QueryPacketCommitmentsRequestAminoMsg): _153.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _153.QueryPacketCommitmentsRequest): _153.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryPacketCommitmentsRequestProtoMsg): _153.QueryPacketCommitmentsRequest;
                    toProto(message: _153.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryPacketCommitmentsRequest): _153.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _153.QueryPacketCommitmentsResponse;
                    toJSON(message: _153.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_153.QueryPacketCommitmentsResponse>): _153.QueryPacketCommitmentsResponse;
                    fromAmino(object: _153.QueryPacketCommitmentsResponseAmino): _153.QueryPacketCommitmentsResponse;
                    toAmino(message: _153.QueryPacketCommitmentsResponse): _153.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _153.QueryPacketCommitmentsResponseAminoMsg): _153.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _153.QueryPacketCommitmentsResponse): _153.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryPacketCommitmentsResponseProtoMsg): _153.QueryPacketCommitmentsResponse;
                    toProto(message: _153.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryPacketCommitmentsResponse): _153.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryPacketReceiptRequest;
                    fromJSON(object: any): _153.QueryPacketReceiptRequest;
                    toJSON(message: _153.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_153.QueryPacketReceiptRequest>): _153.QueryPacketReceiptRequest;
                    fromAmino(object: _153.QueryPacketReceiptRequestAmino): _153.QueryPacketReceiptRequest;
                    toAmino(message: _153.QueryPacketReceiptRequest): _153.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _153.QueryPacketReceiptRequestAminoMsg): _153.QueryPacketReceiptRequest;
                    toAminoMsg(message: _153.QueryPacketReceiptRequest): _153.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryPacketReceiptRequestProtoMsg): _153.QueryPacketReceiptRequest;
                    toProto(message: _153.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryPacketReceiptRequest): _153.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryPacketReceiptResponse;
                    fromJSON(object: any): _153.QueryPacketReceiptResponse;
                    toJSON(message: _153.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_153.QueryPacketReceiptResponse>): _153.QueryPacketReceiptResponse;
                    fromAmino(object: _153.QueryPacketReceiptResponseAmino): _153.QueryPacketReceiptResponse;
                    toAmino(message: _153.QueryPacketReceiptResponse): _153.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _153.QueryPacketReceiptResponseAminoMsg): _153.QueryPacketReceiptResponse;
                    toAminoMsg(message: _153.QueryPacketReceiptResponse): _153.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryPacketReceiptResponseProtoMsg): _153.QueryPacketReceiptResponse;
                    toProto(message: _153.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryPacketReceiptResponse): _153.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _153.QueryPacketAcknowledgementRequest;
                    toJSON(message: _153.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_153.QueryPacketAcknowledgementRequest>): _153.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _153.QueryPacketAcknowledgementRequestAmino): _153.QueryPacketAcknowledgementRequest;
                    toAmino(message: _153.QueryPacketAcknowledgementRequest): _153.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _153.QueryPacketAcknowledgementRequestAminoMsg): _153.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _153.QueryPacketAcknowledgementRequest): _153.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryPacketAcknowledgementRequestProtoMsg): _153.QueryPacketAcknowledgementRequest;
                    toProto(message: _153.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryPacketAcknowledgementRequest): _153.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _153.QueryPacketAcknowledgementResponse;
                    toJSON(message: _153.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_153.QueryPacketAcknowledgementResponse>): _153.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _153.QueryPacketAcknowledgementResponseAmino): _153.QueryPacketAcknowledgementResponse;
                    toAmino(message: _153.QueryPacketAcknowledgementResponse): _153.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _153.QueryPacketAcknowledgementResponseAminoMsg): _153.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _153.QueryPacketAcknowledgementResponse): _153.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryPacketAcknowledgementResponseProtoMsg): _153.QueryPacketAcknowledgementResponse;
                    toProto(message: _153.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryPacketAcknowledgementResponse): _153.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _153.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _153.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_153.QueryPacketAcknowledgementsRequest>): _153.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _153.QueryPacketAcknowledgementsRequestAmino): _153.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _153.QueryPacketAcknowledgementsRequest): _153.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _153.QueryPacketAcknowledgementsRequestAminoMsg): _153.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _153.QueryPacketAcknowledgementsRequest): _153.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryPacketAcknowledgementsRequestProtoMsg): _153.QueryPacketAcknowledgementsRequest;
                    toProto(message: _153.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryPacketAcknowledgementsRequest): _153.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _153.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _153.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_153.QueryPacketAcknowledgementsResponse>): _153.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _153.QueryPacketAcknowledgementsResponseAmino): _153.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _153.QueryPacketAcknowledgementsResponse): _153.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _153.QueryPacketAcknowledgementsResponseAminoMsg): _153.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _153.QueryPacketAcknowledgementsResponse): _153.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryPacketAcknowledgementsResponseProtoMsg): _153.QueryPacketAcknowledgementsResponse;
                    toProto(message: _153.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryPacketAcknowledgementsResponse): _153.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _153.QueryUnreceivedPacketsRequest;
                    toJSON(message: _153.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_153.QueryUnreceivedPacketsRequest>): _153.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _153.QueryUnreceivedPacketsRequestAmino): _153.QueryUnreceivedPacketsRequest;
                    toAmino(message: _153.QueryUnreceivedPacketsRequest): _153.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _153.QueryUnreceivedPacketsRequestAminoMsg): _153.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _153.QueryUnreceivedPacketsRequest): _153.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryUnreceivedPacketsRequestProtoMsg): _153.QueryUnreceivedPacketsRequest;
                    toProto(message: _153.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryUnreceivedPacketsRequest): _153.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _153.QueryUnreceivedPacketsResponse;
                    toJSON(message: _153.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_153.QueryUnreceivedPacketsResponse>): _153.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _153.QueryUnreceivedPacketsResponseAmino): _153.QueryUnreceivedPacketsResponse;
                    toAmino(message: _153.QueryUnreceivedPacketsResponse): _153.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _153.QueryUnreceivedPacketsResponseAminoMsg): _153.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _153.QueryUnreceivedPacketsResponse): _153.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryUnreceivedPacketsResponseProtoMsg): _153.QueryUnreceivedPacketsResponse;
                    toProto(message: _153.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryUnreceivedPacketsResponse): _153.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _153.QueryUnreceivedAcksRequest;
                    toJSON(message: _153.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_153.QueryUnreceivedAcksRequest>): _153.QueryUnreceivedAcksRequest;
                    fromAmino(object: _153.QueryUnreceivedAcksRequestAmino): _153.QueryUnreceivedAcksRequest;
                    toAmino(message: _153.QueryUnreceivedAcksRequest): _153.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _153.QueryUnreceivedAcksRequestAminoMsg): _153.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _153.QueryUnreceivedAcksRequest): _153.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryUnreceivedAcksRequestProtoMsg): _153.QueryUnreceivedAcksRequest;
                    toProto(message: _153.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryUnreceivedAcksRequest): _153.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _153.QueryUnreceivedAcksResponse;
                    toJSON(message: _153.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_153.QueryUnreceivedAcksResponse>): _153.QueryUnreceivedAcksResponse;
                    fromAmino(object: _153.QueryUnreceivedAcksResponseAmino): _153.QueryUnreceivedAcksResponse;
                    toAmino(message: _153.QueryUnreceivedAcksResponse): _153.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _153.QueryUnreceivedAcksResponseAminoMsg): _153.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _153.QueryUnreceivedAcksResponse): _153.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryUnreceivedAcksResponseProtoMsg): _153.QueryUnreceivedAcksResponse;
                    toProto(message: _153.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryUnreceivedAcksResponse): _153.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _153.QueryNextSequenceReceiveRequest;
                    toJSON(message: _153.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_153.QueryNextSequenceReceiveRequest>): _153.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _153.QueryNextSequenceReceiveRequestAmino): _153.QueryNextSequenceReceiveRequest;
                    toAmino(message: _153.QueryNextSequenceReceiveRequest): _153.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _153.QueryNextSequenceReceiveRequestAminoMsg): _153.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _153.QueryNextSequenceReceiveRequest): _153.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryNextSequenceReceiveRequestProtoMsg): _153.QueryNextSequenceReceiveRequest;
                    toProto(message: _153.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryNextSequenceReceiveRequest): _153.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _153.QueryNextSequenceReceiveResponse;
                    toJSON(message: _153.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_153.QueryNextSequenceReceiveResponse>): _153.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _153.QueryNextSequenceReceiveResponseAmino): _153.QueryNextSequenceReceiveResponse;
                    toAmino(message: _153.QueryNextSequenceReceiveResponse): _153.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _153.QueryNextSequenceReceiveResponseAminoMsg): _153.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _153.QueryNextSequenceReceiveResponse): _153.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryNextSequenceReceiveResponseProtoMsg): _153.QueryNextSequenceReceiveResponse;
                    toProto(message: _153.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryNextSequenceReceiveResponse): _153.QueryNextSequenceReceiveResponseProtoMsg;
                };
                QueryNextSequenceSendRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryNextSequenceSendRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryNextSequenceSendRequest;
                    fromJSON(object: any): _153.QueryNextSequenceSendRequest;
                    toJSON(message: _153.QueryNextSequenceSendRequest): unknown;
                    fromPartial(object: Partial<_153.QueryNextSequenceSendRequest>): _153.QueryNextSequenceSendRequest;
                    fromAmino(object: _153.QueryNextSequenceSendRequestAmino): _153.QueryNextSequenceSendRequest;
                    toAmino(message: _153.QueryNextSequenceSendRequest): _153.QueryNextSequenceSendRequestAmino;
                    fromAminoMsg(object: _153.QueryNextSequenceSendRequestAminoMsg): _153.QueryNextSequenceSendRequest;
                    toAminoMsg(message: _153.QueryNextSequenceSendRequest): _153.QueryNextSequenceSendRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryNextSequenceSendRequestProtoMsg): _153.QueryNextSequenceSendRequest;
                    toProto(message: _153.QueryNextSequenceSendRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryNextSequenceSendRequest): _153.QueryNextSequenceSendRequestProtoMsg;
                };
                QueryNextSequenceSendResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryNextSequenceSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.QueryNextSequenceSendResponse;
                    fromJSON(object: any): _153.QueryNextSequenceSendResponse;
                    toJSON(message: _153.QueryNextSequenceSendResponse): unknown;
                    fromPartial(object: Partial<_153.QueryNextSequenceSendResponse>): _153.QueryNextSequenceSendResponse;
                    fromAmino(object: _153.QueryNextSequenceSendResponseAmino): _153.QueryNextSequenceSendResponse;
                    toAmino(message: _153.QueryNextSequenceSendResponse): _153.QueryNextSequenceSendResponseAmino;
                    fromAminoMsg(object: _153.QueryNextSequenceSendResponseAminoMsg): _153.QueryNextSequenceSendResponse;
                    toAminoMsg(message: _153.QueryNextSequenceSendResponse): _153.QueryNextSequenceSendResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryNextSequenceSendResponseProtoMsg): _153.QueryNextSequenceSendResponse;
                    toProto(message: _153.QueryNextSequenceSendResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryNextSequenceSendResponse): _153.QueryNextSequenceSendResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _152.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.GenesisState;
                    fromJSON(object: any): _152.GenesisState;
                    toJSON(message: _152.GenesisState): unknown;
                    fromPartial(object: Partial<_152.GenesisState>): _152.GenesisState;
                    fromAmino(object: _152.GenesisStateAmino): _152.GenesisState;
                    toAmino(message: _152.GenesisState): _152.GenesisStateAmino;
                    fromAminoMsg(object: _152.GenesisStateAminoMsg): _152.GenesisState;
                    toAminoMsg(message: _152.GenesisState): _152.GenesisStateAminoMsg;
                    fromProtoMsg(message: _152.GenesisStateProtoMsg): _152.GenesisState;
                    toProto(message: _152.GenesisState): Uint8Array;
                    toProtoMsg(message: _152.GenesisState): _152.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _152.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.PacketSequence;
                    fromJSON(object: any): _152.PacketSequence;
                    toJSON(message: _152.PacketSequence): unknown;
                    fromPartial(object: Partial<_152.PacketSequence>): _152.PacketSequence;
                    fromAmino(object: _152.PacketSequenceAmino): _152.PacketSequence;
                    toAmino(message: _152.PacketSequence): _152.PacketSequenceAmino;
                    fromAminoMsg(object: _152.PacketSequenceAminoMsg): _152.PacketSequence;
                    toAminoMsg(message: _152.PacketSequence): _152.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _152.PacketSequenceProtoMsg): _152.PacketSequence;
                    toProto(message: _152.PacketSequence): Uint8Array;
                    toProtoMsg(message: _152.PacketSequence): _152.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _151.State;
                stateToJSON(object: _151.State): string;
                orderFromJSON(object: any): _151.Order;
                orderToJSON(object: _151.Order): string;
                State: typeof _151.State;
                StateSDKType: typeof _151.State;
                StateAmino: typeof _151.State;
                Order: typeof _151.Order;
                OrderSDKType: typeof _151.Order;
                OrderAmino: typeof _151.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _151.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.Channel;
                    fromJSON(object: any): _151.Channel;
                    toJSON(message: _151.Channel): unknown;
                    fromPartial(object: Partial<_151.Channel>): _151.Channel;
                    fromAmino(object: _151.ChannelAmino): _151.Channel;
                    toAmino(message: _151.Channel): _151.ChannelAmino;
                    fromAminoMsg(object: _151.ChannelAminoMsg): _151.Channel;
                    toAminoMsg(message: _151.Channel): _151.ChannelAminoMsg;
                    fromProtoMsg(message: _151.ChannelProtoMsg): _151.Channel;
                    toProto(message: _151.Channel): Uint8Array;
                    toProtoMsg(message: _151.Channel): _151.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _151.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.IdentifiedChannel;
                    fromJSON(object: any): _151.IdentifiedChannel;
                    toJSON(message: _151.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_151.IdentifiedChannel>): _151.IdentifiedChannel;
                    fromAmino(object: _151.IdentifiedChannelAmino): _151.IdentifiedChannel;
                    toAmino(message: _151.IdentifiedChannel): _151.IdentifiedChannelAmino;
                    fromAminoMsg(object: _151.IdentifiedChannelAminoMsg): _151.IdentifiedChannel;
                    toAminoMsg(message: _151.IdentifiedChannel): _151.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _151.IdentifiedChannelProtoMsg): _151.IdentifiedChannel;
                    toProto(message: _151.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _151.IdentifiedChannel): _151.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _151.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.Counterparty;
                    fromJSON(object: any): _151.Counterparty;
                    toJSON(message: _151.Counterparty): unknown;
                    fromPartial(object: Partial<_151.Counterparty>): _151.Counterparty;
                    fromAmino(object: _151.CounterpartyAmino): _151.Counterparty;
                    toAmino(message: _151.Counterparty): _151.CounterpartyAmino;
                    fromAminoMsg(object: _151.CounterpartyAminoMsg): _151.Counterparty;
                    toAminoMsg(message: _151.Counterparty): _151.CounterpartyAminoMsg;
                    fromProtoMsg(message: _151.CounterpartyProtoMsg): _151.Counterparty;
                    toProto(message: _151.Counterparty): Uint8Array;
                    toProtoMsg(message: _151.Counterparty): _151.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _151.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.Packet;
                    fromJSON(object: any): _151.Packet;
                    toJSON(message: _151.Packet): unknown;
                    fromPartial(object: Partial<_151.Packet>): _151.Packet;
                    fromAmino(object: _151.PacketAmino): _151.Packet;
                    toAmino(message: _151.Packet): _151.PacketAmino;
                    fromAminoMsg(object: _151.PacketAminoMsg): _151.Packet;
                    toAminoMsg(message: _151.Packet): _151.PacketAminoMsg;
                    fromProtoMsg(message: _151.PacketProtoMsg): _151.Packet;
                    toProto(message: _151.Packet): Uint8Array;
                    toProtoMsg(message: _151.Packet): _151.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _151.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.PacketState;
                    fromJSON(object: any): _151.PacketState;
                    toJSON(message: _151.PacketState): unknown;
                    fromPartial(object: Partial<_151.PacketState>): _151.PacketState;
                    fromAmino(object: _151.PacketStateAmino): _151.PacketState;
                    toAmino(message: _151.PacketState): _151.PacketStateAmino;
                    fromAminoMsg(object: _151.PacketStateAminoMsg): _151.PacketState;
                    toAminoMsg(message: _151.PacketState): _151.PacketStateAminoMsg;
                    fromProtoMsg(message: _151.PacketStateProtoMsg): _151.PacketState;
                    toProto(message: _151.PacketState): Uint8Array;
                    toProtoMsg(message: _151.PacketState): _151.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _151.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.PacketId;
                    fromJSON(object: any): _151.PacketId;
                    toJSON(message: _151.PacketId): unknown;
                    fromPartial(object: Partial<_151.PacketId>): _151.PacketId;
                    fromAmino(object: _151.PacketIdAmino): _151.PacketId;
                    toAmino(message: _151.PacketId): _151.PacketIdAmino;
                    fromAminoMsg(object: _151.PacketIdAminoMsg): _151.PacketId;
                    toAminoMsg(message: _151.PacketId): _151.PacketIdAminoMsg;
                    fromProtoMsg(message: _151.PacketIdProtoMsg): _151.PacketId;
                    toProto(message: _151.PacketId): Uint8Array;
                    toProtoMsg(message: _151.PacketId): _151.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _151.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.Acknowledgement;
                    fromJSON(object: any): _151.Acknowledgement;
                    toJSON(message: _151.Acknowledgement): unknown;
                    fromPartial(object: Partial<_151.Acknowledgement>): _151.Acknowledgement;
                    fromAmino(object: _151.AcknowledgementAmino): _151.Acknowledgement;
                    toAmino(message: _151.Acknowledgement): _151.AcknowledgementAmino;
                    fromAminoMsg(object: _151.AcknowledgementAminoMsg): _151.Acknowledgement;
                    toAminoMsg(message: _151.Acknowledgement): _151.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _151.AcknowledgementProtoMsg): _151.Acknowledgement;
                    toProto(message: _151.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _151.Acknowledgement): _151.AcknowledgementProtoMsg;
                };
                Timeout: {
                    typeUrl: string;
                    encode(message: _151.Timeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.Timeout;
                    fromJSON(object: any): _151.Timeout;
                    toJSON(message: _151.Timeout): unknown;
                    fromPartial(object: Partial<_151.Timeout>): _151.Timeout;
                    fromAmino(object: _151.TimeoutAmino): _151.Timeout;
                    toAmino(message: _151.Timeout): _151.TimeoutAmino;
                    fromAminoMsg(object: _151.TimeoutAminoMsg): _151.Timeout;
                    toAminoMsg(message: _151.Timeout): _151.TimeoutAminoMsg;
                    fromProtoMsg(message: _151.TimeoutProtoMsg): _151.Timeout;
                    toProto(message: _151.Timeout): Uint8Array;
                    toProtoMsg(message: _151.Timeout): _151.TimeoutProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                Msg: typeof _304.Msg;
                Query: typeof _298.Query;
                QueryClientImpl: typeof _298.QueryClientImpl;
                LCDQueryClient: typeof _292.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _158.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _158.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _158.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _158.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recoverClient(value: _158.MsgRecoverClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        iBCSoftwareUpgrade(value: _158.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClientParams(value: _158.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _158.MsgCreateClient): {
                            typeUrl: string;
                            value: _158.MsgCreateClient;
                        };
                        updateClient(value: _158.MsgUpdateClient): {
                            typeUrl: string;
                            value: _158.MsgUpdateClient;
                        };
                        upgradeClient(value: _158.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _158.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _158.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _158.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: _158.MsgRecoverClient): {
                            typeUrl: string;
                            value: _158.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: _158.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: _158.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: _158.MsgUpdateParams): {
                            typeUrl: string;
                            value: _158.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        createClient(value: _158.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _158.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _158.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _158.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recoverClient(value: _158.MsgRecoverClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        iBCSoftwareUpgrade(value: _158.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClientParams(value: _158.MsgUpdateParams): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _158.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _158.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _158.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _158.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: any): {
                            typeUrl: string;
                            value: _158.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: any): {
                            typeUrl: string;
                            value: _158.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: any): {
                            typeUrl: string;
                            value: _158.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        createClient(value: _158.MsgCreateClient): {
                            typeUrl: string;
                            value: _158.MsgCreateClient;
                        };
                        updateClient(value: _158.MsgUpdateClient): {
                            typeUrl: string;
                            value: _158.MsgUpdateClient;
                        };
                        upgradeClient(value: _158.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _158.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _158.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _158.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: _158.MsgRecoverClient): {
                            typeUrl: string;
                            value: _158.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: _158.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: _158.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: _158.MsgUpdateParams): {
                            typeUrl: string;
                            value: _158.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _158.MsgCreateClient) => _158.MsgCreateClientAmino;
                        fromAmino: (object: _158.MsgCreateClientAmino) => _158.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _158.MsgUpdateClient) => _158.MsgUpdateClientAmino;
                        fromAmino: (object: _158.MsgUpdateClientAmino) => _158.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _158.MsgUpgradeClient) => _158.MsgUpgradeClientAmino;
                        fromAmino: (object: _158.MsgUpgradeClientAmino) => _158.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _158.MsgSubmitMisbehaviour) => _158.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _158.MsgSubmitMisbehaviourAmino) => _158.MsgSubmitMisbehaviour;
                    };
                    "/ibc.core.client.v1.MsgRecoverClient": {
                        aminoType: string;
                        toAmino: (message: _158.MsgRecoverClient) => _158.MsgRecoverClientAmino;
                        fromAmino: (object: _158.MsgRecoverClientAmino) => _158.MsgRecoverClient;
                    };
                    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
                        aminoType: string;
                        toAmino: (message: _158.MsgIBCSoftwareUpgrade) => _158.MsgIBCSoftwareUpgradeAmino;
                        fromAmino: (object: _158.MsgIBCSoftwareUpgradeAmino) => _158.MsgIBCSoftwareUpgrade;
                    };
                    "/ibc.core.client.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _158.MsgUpdateParams) => _158.MsgUpdateParamsAmino;
                        fromAmino: (object: _158.MsgUpdateParamsAmino) => _158.MsgUpdateParams;
                    };
                };
                protobufPackage: "ibc.core.client.v1";
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _158.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgCreateClient;
                    fromJSON(object: any): _158.MsgCreateClient;
                    toJSON(message: _158.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_158.MsgCreateClient>): _158.MsgCreateClient;
                    fromAmino(object: _158.MsgCreateClientAmino): _158.MsgCreateClient;
                    toAmino(message: _158.MsgCreateClient): _158.MsgCreateClientAmino;
                    fromAminoMsg(object: _158.MsgCreateClientAminoMsg): _158.MsgCreateClient;
                    toAminoMsg(message: _158.MsgCreateClient): _158.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _158.MsgCreateClientProtoMsg): _158.MsgCreateClient;
                    toProto(message: _158.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _158.MsgCreateClient): _158.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _158.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgCreateClientResponse;
                    fromJSON(_: any): _158.MsgCreateClientResponse;
                    toJSON(_: _158.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_158.MsgCreateClientResponse>): _158.MsgCreateClientResponse;
                    fromAmino(_: _158.MsgCreateClientResponseAmino): _158.MsgCreateClientResponse;
                    toAmino(_: _158.MsgCreateClientResponse): _158.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _158.MsgCreateClientResponseAminoMsg): _158.MsgCreateClientResponse;
                    toAminoMsg(message: _158.MsgCreateClientResponse): _158.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _158.MsgCreateClientResponseProtoMsg): _158.MsgCreateClientResponse;
                    toProto(message: _158.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _158.MsgCreateClientResponse): _158.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _158.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgUpdateClient;
                    fromJSON(object: any): _158.MsgUpdateClient;
                    toJSON(message: _158.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_158.MsgUpdateClient>): _158.MsgUpdateClient;
                    fromAmino(object: _158.MsgUpdateClientAmino): _158.MsgUpdateClient;
                    toAmino(message: _158.MsgUpdateClient): _158.MsgUpdateClientAmino;
                    fromAminoMsg(object: _158.MsgUpdateClientAminoMsg): _158.MsgUpdateClient;
                    toAminoMsg(message: _158.MsgUpdateClient): _158.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _158.MsgUpdateClientProtoMsg): _158.MsgUpdateClient;
                    toProto(message: _158.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _158.MsgUpdateClient): _158.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _158.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgUpdateClientResponse;
                    fromJSON(_: any): _158.MsgUpdateClientResponse;
                    toJSON(_: _158.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_158.MsgUpdateClientResponse>): _158.MsgUpdateClientResponse;
                    fromAmino(_: _158.MsgUpdateClientResponseAmino): _158.MsgUpdateClientResponse;
                    toAmino(_: _158.MsgUpdateClientResponse): _158.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _158.MsgUpdateClientResponseAminoMsg): _158.MsgUpdateClientResponse;
                    toAminoMsg(message: _158.MsgUpdateClientResponse): _158.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _158.MsgUpdateClientResponseProtoMsg): _158.MsgUpdateClientResponse;
                    toProto(message: _158.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _158.MsgUpdateClientResponse): _158.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _158.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgUpgradeClient;
                    fromJSON(object: any): _158.MsgUpgradeClient;
                    toJSON(message: _158.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_158.MsgUpgradeClient>): _158.MsgUpgradeClient;
                    fromAmino(object: _158.MsgUpgradeClientAmino): _158.MsgUpgradeClient;
                    toAmino(message: _158.MsgUpgradeClient): _158.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _158.MsgUpgradeClientAminoMsg): _158.MsgUpgradeClient;
                    toAminoMsg(message: _158.MsgUpgradeClient): _158.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _158.MsgUpgradeClientProtoMsg): _158.MsgUpgradeClient;
                    toProto(message: _158.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _158.MsgUpgradeClient): _158.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _158.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgUpgradeClientResponse;
                    fromJSON(_: any): _158.MsgUpgradeClientResponse;
                    toJSON(_: _158.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_158.MsgUpgradeClientResponse>): _158.MsgUpgradeClientResponse;
                    fromAmino(_: _158.MsgUpgradeClientResponseAmino): _158.MsgUpgradeClientResponse;
                    toAmino(_: _158.MsgUpgradeClientResponse): _158.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _158.MsgUpgradeClientResponseAminoMsg): _158.MsgUpgradeClientResponse;
                    toAminoMsg(message: _158.MsgUpgradeClientResponse): _158.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _158.MsgUpgradeClientResponseProtoMsg): _158.MsgUpgradeClientResponse;
                    toProto(message: _158.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _158.MsgUpgradeClientResponse): _158.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _158.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _158.MsgSubmitMisbehaviour;
                    toJSON(message: _158.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_158.MsgSubmitMisbehaviour>): _158.MsgSubmitMisbehaviour;
                    fromAmino(object: _158.MsgSubmitMisbehaviourAmino): _158.MsgSubmitMisbehaviour;
                    toAmino(message: _158.MsgSubmitMisbehaviour): _158.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _158.MsgSubmitMisbehaviourAminoMsg): _158.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _158.MsgSubmitMisbehaviour): _158.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _158.MsgSubmitMisbehaviourProtoMsg): _158.MsgSubmitMisbehaviour;
                    toProto(message: _158.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _158.MsgSubmitMisbehaviour): _158.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _158.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _158.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _158.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_158.MsgSubmitMisbehaviourResponse>): _158.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _158.MsgSubmitMisbehaviourResponseAmino): _158.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _158.MsgSubmitMisbehaviourResponse): _158.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _158.MsgSubmitMisbehaviourResponseAminoMsg): _158.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _158.MsgSubmitMisbehaviourResponse): _158.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _158.MsgSubmitMisbehaviourResponseProtoMsg): _158.MsgSubmitMisbehaviourResponse;
                    toProto(message: _158.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _158.MsgSubmitMisbehaviourResponse): _158.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                MsgRecoverClient: {
                    typeUrl: string;
                    encode(message: _158.MsgRecoverClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgRecoverClient;
                    fromJSON(object: any): _158.MsgRecoverClient;
                    toJSON(message: _158.MsgRecoverClient): unknown;
                    fromPartial(object: Partial<_158.MsgRecoverClient>): _158.MsgRecoverClient;
                    fromAmino(object: _158.MsgRecoverClientAmino): _158.MsgRecoverClient;
                    toAmino(message: _158.MsgRecoverClient): _158.MsgRecoverClientAmino;
                    fromAminoMsg(object: _158.MsgRecoverClientAminoMsg): _158.MsgRecoverClient;
                    toAminoMsg(message: _158.MsgRecoverClient): _158.MsgRecoverClientAminoMsg;
                    fromProtoMsg(message: _158.MsgRecoverClientProtoMsg): _158.MsgRecoverClient;
                    toProto(message: _158.MsgRecoverClient): Uint8Array;
                    toProtoMsg(message: _158.MsgRecoverClient): _158.MsgRecoverClientProtoMsg;
                };
                MsgRecoverClientResponse: {
                    typeUrl: string;
                    encode(_: _158.MsgRecoverClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgRecoverClientResponse;
                    fromJSON(_: any): _158.MsgRecoverClientResponse;
                    toJSON(_: _158.MsgRecoverClientResponse): unknown;
                    fromPartial(_: Partial<_158.MsgRecoverClientResponse>): _158.MsgRecoverClientResponse;
                    fromAmino(_: _158.MsgRecoverClientResponseAmino): _158.MsgRecoverClientResponse;
                    toAmino(_: _158.MsgRecoverClientResponse): _158.MsgRecoverClientResponseAmino;
                    fromAminoMsg(object: _158.MsgRecoverClientResponseAminoMsg): _158.MsgRecoverClientResponse;
                    toAminoMsg(message: _158.MsgRecoverClientResponse): _158.MsgRecoverClientResponseAminoMsg;
                    fromProtoMsg(message: _158.MsgRecoverClientResponseProtoMsg): _158.MsgRecoverClientResponse;
                    toProto(message: _158.MsgRecoverClientResponse): Uint8Array;
                    toProtoMsg(message: _158.MsgRecoverClientResponse): _158.MsgRecoverClientResponseProtoMsg;
                };
                MsgIBCSoftwareUpgrade: {
                    typeUrl: string;
                    encode(message: _158.MsgIBCSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgIBCSoftwareUpgrade;
                    fromJSON(object: any): _158.MsgIBCSoftwareUpgrade;
                    toJSON(message: _158.MsgIBCSoftwareUpgrade): unknown;
                    fromPartial(object: Partial<_158.MsgIBCSoftwareUpgrade>): _158.MsgIBCSoftwareUpgrade;
                    fromAmino(object: _158.MsgIBCSoftwareUpgradeAmino): _158.MsgIBCSoftwareUpgrade;
                    toAmino(message: _158.MsgIBCSoftwareUpgrade): _158.MsgIBCSoftwareUpgradeAmino;
                    fromAminoMsg(object: _158.MsgIBCSoftwareUpgradeAminoMsg): _158.MsgIBCSoftwareUpgrade;
                    toAminoMsg(message: _158.MsgIBCSoftwareUpgrade): _158.MsgIBCSoftwareUpgradeAminoMsg;
                    fromProtoMsg(message: _158.MsgIBCSoftwareUpgradeProtoMsg): _158.MsgIBCSoftwareUpgrade;
                    toProto(message: _158.MsgIBCSoftwareUpgrade): Uint8Array;
                    toProtoMsg(message: _158.MsgIBCSoftwareUpgrade): _158.MsgIBCSoftwareUpgradeProtoMsg;
                };
                MsgIBCSoftwareUpgradeResponse: {
                    typeUrl: string;
                    encode(_: _158.MsgIBCSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgIBCSoftwareUpgradeResponse;
                    fromJSON(_: any): _158.MsgIBCSoftwareUpgradeResponse;
                    toJSON(_: _158.MsgIBCSoftwareUpgradeResponse): unknown;
                    fromPartial(_: Partial<_158.MsgIBCSoftwareUpgradeResponse>): _158.MsgIBCSoftwareUpgradeResponse;
                    fromAmino(_: _158.MsgIBCSoftwareUpgradeResponseAmino): _158.MsgIBCSoftwareUpgradeResponse;
                    toAmino(_: _158.MsgIBCSoftwareUpgradeResponse): _158.MsgIBCSoftwareUpgradeResponseAmino;
                    fromAminoMsg(object: _158.MsgIBCSoftwareUpgradeResponseAminoMsg): _158.MsgIBCSoftwareUpgradeResponse;
                    toAminoMsg(message: _158.MsgIBCSoftwareUpgradeResponse): _158.MsgIBCSoftwareUpgradeResponseAminoMsg;
                    fromProtoMsg(message: _158.MsgIBCSoftwareUpgradeResponseProtoMsg): _158.MsgIBCSoftwareUpgradeResponse;
                    toProto(message: _158.MsgIBCSoftwareUpgradeResponse): Uint8Array;
                    toProtoMsg(message: _158.MsgIBCSoftwareUpgradeResponse): _158.MsgIBCSoftwareUpgradeResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _158.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgUpdateParams;
                    fromJSON(object: any): _158.MsgUpdateParams;
                    toJSON(message: _158.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_158.MsgUpdateParams>): _158.MsgUpdateParams;
                    fromAmino(object: _158.MsgUpdateParamsAmino): _158.MsgUpdateParams;
                    toAmino(message: _158.MsgUpdateParams): _158.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _158.MsgUpdateParamsAminoMsg): _158.MsgUpdateParams;
                    toAminoMsg(message: _158.MsgUpdateParams): _158.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _158.MsgUpdateParamsProtoMsg): _158.MsgUpdateParams;
                    toProto(message: _158.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _158.MsgUpdateParams): _158.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _158.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.MsgUpdateParamsResponse;
                    fromJSON(_: any): _158.MsgUpdateParamsResponse;
                    toJSON(_: _158.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_158.MsgUpdateParamsResponse>): _158.MsgUpdateParamsResponse;
                    fromAmino(_: _158.MsgUpdateParamsResponseAmino): _158.MsgUpdateParamsResponse;
                    toAmino(_: _158.MsgUpdateParamsResponse): _158.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _158.MsgUpdateParamsResponseAminoMsg): _158.MsgUpdateParamsResponse;
                    toAminoMsg(message: _158.MsgUpdateParamsResponse): _158.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _158.MsgUpdateParamsResponseProtoMsg): _158.MsgUpdateParamsResponse;
                    toProto(message: _158.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _158.MsgUpdateParamsResponse): _158.MsgUpdateParamsResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _157.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryClientStateRequest;
                    fromJSON(object: any): _157.QueryClientStateRequest;
                    toJSON(message: _157.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_157.QueryClientStateRequest>): _157.QueryClientStateRequest;
                    fromAmino(object: _157.QueryClientStateRequestAmino): _157.QueryClientStateRequest;
                    toAmino(message: _157.QueryClientStateRequest): _157.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _157.QueryClientStateRequestAminoMsg): _157.QueryClientStateRequest;
                    toAminoMsg(message: _157.QueryClientStateRequest): _157.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _157.QueryClientStateRequestProtoMsg): _157.QueryClientStateRequest;
                    toProto(message: _157.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _157.QueryClientStateRequest): _157.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _157.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryClientStateResponse;
                    fromJSON(object: any): _157.QueryClientStateResponse;
                    toJSON(message: _157.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_157.QueryClientStateResponse>): _157.QueryClientStateResponse;
                    fromAmino(object: _157.QueryClientStateResponseAmino): _157.QueryClientStateResponse;
                    toAmino(message: _157.QueryClientStateResponse): _157.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _157.QueryClientStateResponseAminoMsg): _157.QueryClientStateResponse;
                    toAminoMsg(message: _157.QueryClientStateResponse): _157.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _157.QueryClientStateResponseProtoMsg): _157.QueryClientStateResponse;
                    toProto(message: _157.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _157.QueryClientStateResponse): _157.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _157.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryClientStatesRequest;
                    fromJSON(object: any): _157.QueryClientStatesRequest;
                    toJSON(message: _157.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_157.QueryClientStatesRequest>): _157.QueryClientStatesRequest;
                    fromAmino(object: _157.QueryClientStatesRequestAmino): _157.QueryClientStatesRequest;
                    toAmino(message: _157.QueryClientStatesRequest): _157.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _157.QueryClientStatesRequestAminoMsg): _157.QueryClientStatesRequest;
                    toAminoMsg(message: _157.QueryClientStatesRequest): _157.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _157.QueryClientStatesRequestProtoMsg): _157.QueryClientStatesRequest;
                    toProto(message: _157.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _157.QueryClientStatesRequest): _157.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _157.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryClientStatesResponse;
                    fromJSON(object: any): _157.QueryClientStatesResponse;
                    toJSON(message: _157.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_157.QueryClientStatesResponse>): _157.QueryClientStatesResponse;
                    fromAmino(object: _157.QueryClientStatesResponseAmino): _157.QueryClientStatesResponse;
                    toAmino(message: _157.QueryClientStatesResponse): _157.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _157.QueryClientStatesResponseAminoMsg): _157.QueryClientStatesResponse;
                    toAminoMsg(message: _157.QueryClientStatesResponse): _157.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _157.QueryClientStatesResponseProtoMsg): _157.QueryClientStatesResponse;
                    toProto(message: _157.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _157.QueryClientStatesResponse): _157.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _157.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryConsensusStateRequest;
                    fromJSON(object: any): _157.QueryConsensusStateRequest;
                    toJSON(message: _157.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_157.QueryConsensusStateRequest>): _157.QueryConsensusStateRequest;
                    fromAmino(object: _157.QueryConsensusStateRequestAmino): _157.QueryConsensusStateRequest;
                    toAmino(message: _157.QueryConsensusStateRequest): _157.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _157.QueryConsensusStateRequestAminoMsg): _157.QueryConsensusStateRequest;
                    toAminoMsg(message: _157.QueryConsensusStateRequest): _157.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _157.QueryConsensusStateRequestProtoMsg): _157.QueryConsensusStateRequest;
                    toProto(message: _157.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _157.QueryConsensusStateRequest): _157.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _157.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryConsensusStateResponse;
                    fromJSON(object: any): _157.QueryConsensusStateResponse;
                    toJSON(message: _157.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_157.QueryConsensusStateResponse>): _157.QueryConsensusStateResponse;
                    fromAmino(object: _157.QueryConsensusStateResponseAmino): _157.QueryConsensusStateResponse;
                    toAmino(message: _157.QueryConsensusStateResponse): _157.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _157.QueryConsensusStateResponseAminoMsg): _157.QueryConsensusStateResponse;
                    toAminoMsg(message: _157.QueryConsensusStateResponse): _157.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _157.QueryConsensusStateResponseProtoMsg): _157.QueryConsensusStateResponse;
                    toProto(message: _157.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _157.QueryConsensusStateResponse): _157.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _157.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryConsensusStatesRequest;
                    fromJSON(object: any): _157.QueryConsensusStatesRequest;
                    toJSON(message: _157.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_157.QueryConsensusStatesRequest>): _157.QueryConsensusStatesRequest;
                    fromAmino(object: _157.QueryConsensusStatesRequestAmino): _157.QueryConsensusStatesRequest;
                    toAmino(message: _157.QueryConsensusStatesRequest): _157.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _157.QueryConsensusStatesRequestAminoMsg): _157.QueryConsensusStatesRequest;
                    toAminoMsg(message: _157.QueryConsensusStatesRequest): _157.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _157.QueryConsensusStatesRequestProtoMsg): _157.QueryConsensusStatesRequest;
                    toProto(message: _157.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _157.QueryConsensusStatesRequest): _157.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _157.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryConsensusStatesResponse;
                    fromJSON(object: any): _157.QueryConsensusStatesResponse;
                    toJSON(message: _157.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_157.QueryConsensusStatesResponse>): _157.QueryConsensusStatesResponse;
                    fromAmino(object: _157.QueryConsensusStatesResponseAmino): _157.QueryConsensusStatesResponse;
                    toAmino(message: _157.QueryConsensusStatesResponse): _157.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _157.QueryConsensusStatesResponseAminoMsg): _157.QueryConsensusStatesResponse;
                    toAminoMsg(message: _157.QueryConsensusStatesResponse): _157.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _157.QueryConsensusStatesResponseProtoMsg): _157.QueryConsensusStatesResponse;
                    toProto(message: _157.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _157.QueryConsensusStatesResponse): _157.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _157.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _157.QueryConsensusStateHeightsRequest;
                    toJSON(message: _157.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: Partial<_157.QueryConsensusStateHeightsRequest>): _157.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _157.QueryConsensusStateHeightsRequestAmino): _157.QueryConsensusStateHeightsRequest;
                    toAmino(message: _157.QueryConsensusStateHeightsRequest): _157.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _157.QueryConsensusStateHeightsRequestAminoMsg): _157.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _157.QueryConsensusStateHeightsRequest): _157.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _157.QueryConsensusStateHeightsRequestProtoMsg): _157.QueryConsensusStateHeightsRequest;
                    toProto(message: _157.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _157.QueryConsensusStateHeightsRequest): _157.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _157.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _157.QueryConsensusStateHeightsResponse;
                    toJSON(message: _157.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: Partial<_157.QueryConsensusStateHeightsResponse>): _157.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _157.QueryConsensusStateHeightsResponseAmino): _157.QueryConsensusStateHeightsResponse;
                    toAmino(message: _157.QueryConsensusStateHeightsResponse): _157.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _157.QueryConsensusStateHeightsResponseAminoMsg): _157.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _157.QueryConsensusStateHeightsResponse): _157.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _157.QueryConsensusStateHeightsResponseProtoMsg): _157.QueryConsensusStateHeightsResponse;
                    toProto(message: _157.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _157.QueryConsensusStateHeightsResponse): _157.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _157.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryClientStatusRequest;
                    fromJSON(object: any): _157.QueryClientStatusRequest;
                    toJSON(message: _157.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_157.QueryClientStatusRequest>): _157.QueryClientStatusRequest;
                    fromAmino(object: _157.QueryClientStatusRequestAmino): _157.QueryClientStatusRequest;
                    toAmino(message: _157.QueryClientStatusRequest): _157.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _157.QueryClientStatusRequestAminoMsg): _157.QueryClientStatusRequest;
                    toAminoMsg(message: _157.QueryClientStatusRequest): _157.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _157.QueryClientStatusRequestProtoMsg): _157.QueryClientStatusRequest;
                    toProto(message: _157.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _157.QueryClientStatusRequest): _157.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _157.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryClientStatusResponse;
                    fromJSON(object: any): _157.QueryClientStatusResponse;
                    toJSON(message: _157.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_157.QueryClientStatusResponse>): _157.QueryClientStatusResponse;
                    fromAmino(object: _157.QueryClientStatusResponseAmino): _157.QueryClientStatusResponse;
                    toAmino(message: _157.QueryClientStatusResponse): _157.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _157.QueryClientStatusResponseAminoMsg): _157.QueryClientStatusResponse;
                    toAminoMsg(message: _157.QueryClientStatusResponse): _157.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _157.QueryClientStatusResponseProtoMsg): _157.QueryClientStatusResponse;
                    toProto(message: _157.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _157.QueryClientStatusResponse): _157.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _157.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryClientParamsRequest;
                    fromJSON(_: any): _157.QueryClientParamsRequest;
                    toJSON(_: _157.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_157.QueryClientParamsRequest>): _157.QueryClientParamsRequest;
                    fromAmino(_: _157.QueryClientParamsRequestAmino): _157.QueryClientParamsRequest;
                    toAmino(_: _157.QueryClientParamsRequest): _157.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _157.QueryClientParamsRequestAminoMsg): _157.QueryClientParamsRequest;
                    toAminoMsg(message: _157.QueryClientParamsRequest): _157.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _157.QueryClientParamsRequestProtoMsg): _157.QueryClientParamsRequest;
                    toProto(message: _157.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _157.QueryClientParamsRequest): _157.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _157.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryClientParamsResponse;
                    fromJSON(object: any): _157.QueryClientParamsResponse;
                    toJSON(message: _157.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_157.QueryClientParamsResponse>): _157.QueryClientParamsResponse;
                    fromAmino(object: _157.QueryClientParamsResponseAmino): _157.QueryClientParamsResponse;
                    toAmino(message: _157.QueryClientParamsResponse): _157.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _157.QueryClientParamsResponseAminoMsg): _157.QueryClientParamsResponse;
                    toAminoMsg(message: _157.QueryClientParamsResponse): _157.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _157.QueryClientParamsResponseProtoMsg): _157.QueryClientParamsResponse;
                    toProto(message: _157.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _157.QueryClientParamsResponse): _157.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _157.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _157.QueryUpgradedClientStateRequest;
                    toJSON(_: _157.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_157.QueryUpgradedClientStateRequest>): _157.QueryUpgradedClientStateRequest;
                    fromAmino(_: _157.QueryUpgradedClientStateRequestAmino): _157.QueryUpgradedClientStateRequest;
                    toAmino(_: _157.QueryUpgradedClientStateRequest): _157.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _157.QueryUpgradedClientStateRequestAminoMsg): _157.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _157.QueryUpgradedClientStateRequest): _157.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _157.QueryUpgradedClientStateRequestProtoMsg): _157.QueryUpgradedClientStateRequest;
                    toProto(message: _157.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _157.QueryUpgradedClientStateRequest): _157.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _157.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _157.QueryUpgradedClientStateResponse;
                    toJSON(message: _157.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_157.QueryUpgradedClientStateResponse>): _157.QueryUpgradedClientStateResponse;
                    fromAmino(object: _157.QueryUpgradedClientStateResponseAmino): _157.QueryUpgradedClientStateResponse;
                    toAmino(message: _157.QueryUpgradedClientStateResponse): _157.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _157.QueryUpgradedClientStateResponseAminoMsg): _157.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _157.QueryUpgradedClientStateResponse): _157.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _157.QueryUpgradedClientStateResponseProtoMsg): _157.QueryUpgradedClientStateResponse;
                    toProto(message: _157.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _157.QueryUpgradedClientStateResponse): _157.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _157.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _157.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _157.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_157.QueryUpgradedConsensusStateRequest>): _157.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _157.QueryUpgradedConsensusStateRequestAmino): _157.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _157.QueryUpgradedConsensusStateRequest): _157.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _157.QueryUpgradedConsensusStateRequestAminoMsg): _157.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _157.QueryUpgradedConsensusStateRequest): _157.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _157.QueryUpgradedConsensusStateRequestProtoMsg): _157.QueryUpgradedConsensusStateRequest;
                    toProto(message: _157.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _157.QueryUpgradedConsensusStateRequest): _157.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _157.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _157.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _157.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_157.QueryUpgradedConsensusStateResponse>): _157.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _157.QueryUpgradedConsensusStateResponseAmino): _157.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _157.QueryUpgradedConsensusStateResponse): _157.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _157.QueryUpgradedConsensusStateResponseAminoMsg): _157.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _157.QueryUpgradedConsensusStateResponse): _157.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _157.QueryUpgradedConsensusStateResponseProtoMsg): _157.QueryUpgradedConsensusStateResponse;
                    toProto(message: _157.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _157.QueryUpgradedConsensusStateResponse): _157.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _156.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.GenesisState;
                    fromJSON(object: any): _156.GenesisState;
                    toJSON(message: _156.GenesisState): unknown;
                    fromPartial(object: Partial<_156.GenesisState>): _156.GenesisState;
                    fromAmino(object: _156.GenesisStateAmino): _156.GenesisState;
                    toAmino(message: _156.GenesisState): _156.GenesisStateAmino;
                    fromAminoMsg(object: _156.GenesisStateAminoMsg): _156.GenesisState;
                    toAminoMsg(message: _156.GenesisState): _156.GenesisStateAminoMsg;
                    fromProtoMsg(message: _156.GenesisStateProtoMsg): _156.GenesisState;
                    toProto(message: _156.GenesisState): Uint8Array;
                    toProtoMsg(message: _156.GenesisState): _156.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _156.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.GenesisMetadata;
                    fromJSON(object: any): _156.GenesisMetadata;
                    toJSON(message: _156.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_156.GenesisMetadata>): _156.GenesisMetadata;
                    fromAmino(object: _156.GenesisMetadataAmino): _156.GenesisMetadata;
                    toAmino(message: _156.GenesisMetadata): _156.GenesisMetadataAmino;
                    fromAminoMsg(object: _156.GenesisMetadataAminoMsg): _156.GenesisMetadata;
                    toAminoMsg(message: _156.GenesisMetadata): _156.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _156.GenesisMetadataProtoMsg): _156.GenesisMetadata;
                    toProto(message: _156.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _156.GenesisMetadata): _156.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _156.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _156.IdentifiedGenesisMetadata;
                    toJSON(message: _156.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_156.IdentifiedGenesisMetadata>): _156.IdentifiedGenesisMetadata;
                    fromAmino(object: _156.IdentifiedGenesisMetadataAmino): _156.IdentifiedGenesisMetadata;
                    toAmino(message: _156.IdentifiedGenesisMetadata): _156.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _156.IdentifiedGenesisMetadataAminoMsg): _156.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _156.IdentifiedGenesisMetadata): _156.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _156.IdentifiedGenesisMetadataProtoMsg): _156.IdentifiedGenesisMetadata;
                    toProto(message: _156.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _156.IdentifiedGenesisMetadata): _156.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _155.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.IdentifiedClientState;
                    fromJSON(object: any): _155.IdentifiedClientState;
                    toJSON(message: _155.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_155.IdentifiedClientState>): _155.IdentifiedClientState;
                    fromAmino(object: _155.IdentifiedClientStateAmino): _155.IdentifiedClientState;
                    toAmino(message: _155.IdentifiedClientState): _155.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _155.IdentifiedClientStateAminoMsg): _155.IdentifiedClientState;
                    toAminoMsg(message: _155.IdentifiedClientState): _155.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _155.IdentifiedClientStateProtoMsg): _155.IdentifiedClientState;
                    toProto(message: _155.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _155.IdentifiedClientState): _155.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _155.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.ConsensusStateWithHeight;
                    fromJSON(object: any): _155.ConsensusStateWithHeight;
                    toJSON(message: _155.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_155.ConsensusStateWithHeight>): _155.ConsensusStateWithHeight;
                    fromAmino(object: _155.ConsensusStateWithHeightAmino): _155.ConsensusStateWithHeight;
                    toAmino(message: _155.ConsensusStateWithHeight): _155.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _155.ConsensusStateWithHeightAminoMsg): _155.ConsensusStateWithHeight;
                    toAminoMsg(message: _155.ConsensusStateWithHeight): _155.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _155.ConsensusStateWithHeightProtoMsg): _155.ConsensusStateWithHeight;
                    toProto(message: _155.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _155.ConsensusStateWithHeight): _155.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _155.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.ClientConsensusStates;
                    fromJSON(object: any): _155.ClientConsensusStates;
                    toJSON(message: _155.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_155.ClientConsensusStates>): _155.ClientConsensusStates;
                    fromAmino(object: _155.ClientConsensusStatesAmino): _155.ClientConsensusStates;
                    toAmino(message: _155.ClientConsensusStates): _155.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _155.ClientConsensusStatesAminoMsg): _155.ClientConsensusStates;
                    toAminoMsg(message: _155.ClientConsensusStates): _155.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _155.ClientConsensusStatesProtoMsg): _155.ClientConsensusStates;
                    toProto(message: _155.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _155.ClientConsensusStates): _155.ClientConsensusStatesProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _155.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.Height;
                    fromJSON(object: any): _155.Height;
                    toJSON(message: _155.Height): unknown;
                    fromPartial(object: Partial<_155.Height>): _155.Height;
                    fromAmino(object: _155.HeightAmino): _155.Height;
                    toAmino(message: _155.Height): _155.HeightAmino;
                    fromAminoMsg(object: _155.HeightAminoMsg): _155.Height;
                    toAminoMsg(message: _155.Height): _155.HeightAminoMsg;
                    fromProtoMsg(message: _155.HeightProtoMsg): _155.Height;
                    toProto(message: _155.Height): Uint8Array;
                    toProtoMsg(message: _155.Height): _155.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _155.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.Params;
                    fromJSON(object: any): _155.Params;
                    toJSON(message: _155.Params): unknown;
                    fromPartial(object: Partial<_155.Params>): _155.Params;
                    fromAmino(object: _155.ParamsAmino): _155.Params;
                    toAmino(message: _155.Params): _155.ParamsAmino;
                    fromAminoMsg(object: _155.ParamsAminoMsg): _155.Params;
                    toAminoMsg(message: _155.Params): _155.ParamsAminoMsg;
                    fromProtoMsg(message: _155.ParamsProtoMsg): _155.Params;
                    toProto(message: _155.Params): Uint8Array;
                    toProtoMsg(message: _155.Params): _155.ParamsProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _155.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.ClientUpdateProposal;
                    fromJSON(object: any): _155.ClientUpdateProposal;
                    toJSON(message: _155.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_155.ClientUpdateProposal>): _155.ClientUpdateProposal;
                    fromAmino(object: _155.ClientUpdateProposalAmino): _155.ClientUpdateProposal;
                    toAmino(message: _155.ClientUpdateProposal): _155.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _155.ClientUpdateProposalAminoMsg): _155.ClientUpdateProposal;
                    toAminoMsg(message: _155.ClientUpdateProposal): _155.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _155.ClientUpdateProposalProtoMsg): _155.ClientUpdateProposal;
                    toProto(message: _155.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _155.ClientUpdateProposal): _155.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _155.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.UpgradeProposal;
                    fromJSON(object: any): _155.UpgradeProposal;
                    toJSON(message: _155.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_155.UpgradeProposal>): _155.UpgradeProposal;
                    fromAmino(object: _155.UpgradeProposalAmino): _155.UpgradeProposal;
                    toAmino(message: _155.UpgradeProposal): _155.UpgradeProposalAmino;
                    fromAminoMsg(object: _155.UpgradeProposalAminoMsg): _155.UpgradeProposal;
                    toAminoMsg(message: _155.UpgradeProposal): _155.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _155.UpgradeProposalProtoMsg): _155.UpgradeProposal;
                    toProto(message: _155.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _155.UpgradeProposal): _155.UpgradeProposalProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                protobufPackage: "ibc.core.commitment.v1";
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _159.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.MerkleRoot;
                    fromJSON(object: any): _159.MerkleRoot;
                    toJSON(message: _159.MerkleRoot): unknown;
                    fromPartial(object: Partial<_159.MerkleRoot>): _159.MerkleRoot;
                    fromAmino(object: _159.MerkleRootAmino): _159.MerkleRoot;
                    toAmino(message: _159.MerkleRoot): _159.MerkleRootAmino;
                    fromAminoMsg(object: _159.MerkleRootAminoMsg): _159.MerkleRoot;
                    toAminoMsg(message: _159.MerkleRoot): _159.MerkleRootAminoMsg;
                    fromProtoMsg(message: _159.MerkleRootProtoMsg): _159.MerkleRoot;
                    toProto(message: _159.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _159.MerkleRoot): _159.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _159.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.MerklePrefix;
                    fromJSON(object: any): _159.MerklePrefix;
                    toJSON(message: _159.MerklePrefix): unknown;
                    fromPartial(object: Partial<_159.MerklePrefix>): _159.MerklePrefix;
                    fromAmino(object: _159.MerklePrefixAmino): _159.MerklePrefix;
                    toAmino(message: _159.MerklePrefix): _159.MerklePrefixAmino;
                    fromAminoMsg(object: _159.MerklePrefixAminoMsg): _159.MerklePrefix;
                    toAminoMsg(message: _159.MerklePrefix): _159.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _159.MerklePrefixProtoMsg): _159.MerklePrefix;
                    toProto(message: _159.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _159.MerklePrefix): _159.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _159.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.MerklePath;
                    fromJSON(object: any): _159.MerklePath;
                    toJSON(message: _159.MerklePath): unknown;
                    fromPartial(object: Partial<_159.MerklePath>): _159.MerklePath;
                    fromAmino(object: _159.MerklePathAmino): _159.MerklePath;
                    toAmino(message: _159.MerklePath): _159.MerklePathAmino;
                    fromAminoMsg(object: _159.MerklePathAminoMsg): _159.MerklePath;
                    toAminoMsg(message: _159.MerklePath): _159.MerklePathAminoMsg;
                    fromProtoMsg(message: _159.MerklePathProtoMsg): _159.MerklePath;
                    toProto(message: _159.MerklePath): Uint8Array;
                    toProtoMsg(message: _159.MerklePath): _159.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _159.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.MerkleProof;
                    fromJSON(object: any): _159.MerkleProof;
                    toJSON(message: _159.MerkleProof): unknown;
                    fromPartial(object: Partial<_159.MerkleProof>): _159.MerkleProof;
                    fromAmino(object: _159.MerkleProofAmino): _159.MerkleProof;
                    toAmino(message: _159.MerkleProof): _159.MerkleProofAmino;
                    fromAminoMsg(object: _159.MerkleProofAminoMsg): _159.MerkleProof;
                    toAminoMsg(message: _159.MerkleProof): _159.MerkleProofAminoMsg;
                    fromProtoMsg(message: _159.MerkleProofProtoMsg): _159.MerkleProof;
                    toProto(message: _159.MerkleProof): Uint8Array;
                    toProtoMsg(message: _159.MerkleProof): _159.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                Msg: typeof _305.Msg;
                Query: typeof _299.Query;
                QueryClientImpl: typeof _299.QueryClientImpl;
                LCDQueryClient: typeof _293.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _163.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _163.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _163.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _163.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateConnectionParams(value: _163.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _163.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _163.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _163.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _163.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _163.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _163.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _163.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _163.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: _163.MsgUpdateParams): {
                            typeUrl: string;
                            value: _163.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _163.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _163.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _163.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _163.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateConnectionParams(value: _163.MsgUpdateParams): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _163.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _163.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _163.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _163.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: any): {
                            typeUrl: string;
                            value: _163.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _163.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _163.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _163.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _163.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _163.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _163.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _163.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _163.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: _163.MsgUpdateParams): {
                            typeUrl: string;
                            value: _163.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _163.MsgConnectionOpenInit) => _163.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _163.MsgConnectionOpenInitAmino) => _163.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _163.MsgConnectionOpenTry) => _163.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _163.MsgConnectionOpenTryAmino) => _163.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _163.MsgConnectionOpenAck) => _163.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _163.MsgConnectionOpenAckAmino) => _163.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _163.MsgConnectionOpenConfirm) => _163.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _163.MsgConnectionOpenConfirmAmino) => _163.MsgConnectionOpenConfirm;
                    };
                    "/ibc.core.connection.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _163.MsgUpdateParams) => _163.MsgUpdateParamsAmino;
                        fromAmino: (object: _163.MsgUpdateParamsAmino) => _163.MsgUpdateParams;
                    };
                };
                protobufPackage: "ibc.core.connection.v1";
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _163.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.MsgConnectionOpenInit;
                    fromJSON(object: any): _163.MsgConnectionOpenInit;
                    toJSON(message: _163.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_163.MsgConnectionOpenInit>): _163.MsgConnectionOpenInit;
                    fromAmino(object: _163.MsgConnectionOpenInitAmino): _163.MsgConnectionOpenInit;
                    toAmino(message: _163.MsgConnectionOpenInit): _163.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _163.MsgConnectionOpenInitAminoMsg): _163.MsgConnectionOpenInit;
                    toAminoMsg(message: _163.MsgConnectionOpenInit): _163.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _163.MsgConnectionOpenInitProtoMsg): _163.MsgConnectionOpenInit;
                    toProto(message: _163.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _163.MsgConnectionOpenInit): _163.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _163.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _163.MsgConnectionOpenInitResponse;
                    toJSON(_: _163.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_163.MsgConnectionOpenInitResponse>): _163.MsgConnectionOpenInitResponse;
                    fromAmino(_: _163.MsgConnectionOpenInitResponseAmino): _163.MsgConnectionOpenInitResponse;
                    toAmino(_: _163.MsgConnectionOpenInitResponse): _163.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _163.MsgConnectionOpenInitResponseAminoMsg): _163.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _163.MsgConnectionOpenInitResponse): _163.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _163.MsgConnectionOpenInitResponseProtoMsg): _163.MsgConnectionOpenInitResponse;
                    toProto(message: _163.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _163.MsgConnectionOpenInitResponse): _163.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _163.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.MsgConnectionOpenTry;
                    fromJSON(object: any): _163.MsgConnectionOpenTry;
                    toJSON(message: _163.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_163.MsgConnectionOpenTry>): _163.MsgConnectionOpenTry;
                    fromAmino(object: _163.MsgConnectionOpenTryAmino): _163.MsgConnectionOpenTry;
                    toAmino(message: _163.MsgConnectionOpenTry): _163.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _163.MsgConnectionOpenTryAminoMsg): _163.MsgConnectionOpenTry;
                    toAminoMsg(message: _163.MsgConnectionOpenTry): _163.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _163.MsgConnectionOpenTryProtoMsg): _163.MsgConnectionOpenTry;
                    toProto(message: _163.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _163.MsgConnectionOpenTry): _163.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _163.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _163.MsgConnectionOpenTryResponse;
                    toJSON(_: _163.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_163.MsgConnectionOpenTryResponse>): _163.MsgConnectionOpenTryResponse;
                    fromAmino(_: _163.MsgConnectionOpenTryResponseAmino): _163.MsgConnectionOpenTryResponse;
                    toAmino(_: _163.MsgConnectionOpenTryResponse): _163.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _163.MsgConnectionOpenTryResponseAminoMsg): _163.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _163.MsgConnectionOpenTryResponse): _163.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _163.MsgConnectionOpenTryResponseProtoMsg): _163.MsgConnectionOpenTryResponse;
                    toProto(message: _163.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _163.MsgConnectionOpenTryResponse): _163.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _163.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.MsgConnectionOpenAck;
                    fromJSON(object: any): _163.MsgConnectionOpenAck;
                    toJSON(message: _163.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_163.MsgConnectionOpenAck>): _163.MsgConnectionOpenAck;
                    fromAmino(object: _163.MsgConnectionOpenAckAmino): _163.MsgConnectionOpenAck;
                    toAmino(message: _163.MsgConnectionOpenAck): _163.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _163.MsgConnectionOpenAckAminoMsg): _163.MsgConnectionOpenAck;
                    toAminoMsg(message: _163.MsgConnectionOpenAck): _163.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _163.MsgConnectionOpenAckProtoMsg): _163.MsgConnectionOpenAck;
                    toProto(message: _163.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _163.MsgConnectionOpenAck): _163.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _163.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _163.MsgConnectionOpenAckResponse;
                    toJSON(_: _163.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_163.MsgConnectionOpenAckResponse>): _163.MsgConnectionOpenAckResponse;
                    fromAmino(_: _163.MsgConnectionOpenAckResponseAmino): _163.MsgConnectionOpenAckResponse;
                    toAmino(_: _163.MsgConnectionOpenAckResponse): _163.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _163.MsgConnectionOpenAckResponseAminoMsg): _163.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _163.MsgConnectionOpenAckResponse): _163.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _163.MsgConnectionOpenAckResponseProtoMsg): _163.MsgConnectionOpenAckResponse;
                    toProto(message: _163.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _163.MsgConnectionOpenAckResponse): _163.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _163.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _163.MsgConnectionOpenConfirm;
                    toJSON(message: _163.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_163.MsgConnectionOpenConfirm>): _163.MsgConnectionOpenConfirm;
                    fromAmino(object: _163.MsgConnectionOpenConfirmAmino): _163.MsgConnectionOpenConfirm;
                    toAmino(message: _163.MsgConnectionOpenConfirm): _163.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _163.MsgConnectionOpenConfirmAminoMsg): _163.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _163.MsgConnectionOpenConfirm): _163.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _163.MsgConnectionOpenConfirmProtoMsg): _163.MsgConnectionOpenConfirm;
                    toProto(message: _163.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _163.MsgConnectionOpenConfirm): _163.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _163.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _163.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _163.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_163.MsgConnectionOpenConfirmResponse>): _163.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _163.MsgConnectionOpenConfirmResponseAmino): _163.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _163.MsgConnectionOpenConfirmResponse): _163.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _163.MsgConnectionOpenConfirmResponseAminoMsg): _163.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _163.MsgConnectionOpenConfirmResponse): _163.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _163.MsgConnectionOpenConfirmResponseProtoMsg): _163.MsgConnectionOpenConfirmResponse;
                    toProto(message: _163.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _163.MsgConnectionOpenConfirmResponse): _163.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _163.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.MsgUpdateParams;
                    fromJSON(object: any): _163.MsgUpdateParams;
                    toJSON(message: _163.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_163.MsgUpdateParams>): _163.MsgUpdateParams;
                    fromAmino(object: _163.MsgUpdateParamsAmino): _163.MsgUpdateParams;
                    toAmino(message: _163.MsgUpdateParams): _163.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _163.MsgUpdateParamsAminoMsg): _163.MsgUpdateParams;
                    toAminoMsg(message: _163.MsgUpdateParams): _163.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _163.MsgUpdateParamsProtoMsg): _163.MsgUpdateParams;
                    toProto(message: _163.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _163.MsgUpdateParams): _163.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _163.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.MsgUpdateParamsResponse;
                    fromJSON(_: any): _163.MsgUpdateParamsResponse;
                    toJSON(_: _163.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_163.MsgUpdateParamsResponse>): _163.MsgUpdateParamsResponse;
                    fromAmino(_: _163.MsgUpdateParamsResponseAmino): _163.MsgUpdateParamsResponse;
                    toAmino(_: _163.MsgUpdateParamsResponse): _163.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _163.MsgUpdateParamsResponseAminoMsg): _163.MsgUpdateParamsResponse;
                    toAminoMsg(message: _163.MsgUpdateParamsResponse): _163.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _163.MsgUpdateParamsResponseProtoMsg): _163.MsgUpdateParamsResponse;
                    toProto(message: _163.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _163.MsgUpdateParamsResponse): _163.MsgUpdateParamsResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _162.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.QueryConnectionRequest;
                    fromJSON(object: any): _162.QueryConnectionRequest;
                    toJSON(message: _162.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_162.QueryConnectionRequest>): _162.QueryConnectionRequest;
                    fromAmino(object: _162.QueryConnectionRequestAmino): _162.QueryConnectionRequest;
                    toAmino(message: _162.QueryConnectionRequest): _162.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _162.QueryConnectionRequestAminoMsg): _162.QueryConnectionRequest;
                    toAminoMsg(message: _162.QueryConnectionRequest): _162.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _162.QueryConnectionRequestProtoMsg): _162.QueryConnectionRequest;
                    toProto(message: _162.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _162.QueryConnectionRequest): _162.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _162.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.QueryConnectionResponse;
                    fromJSON(object: any): _162.QueryConnectionResponse;
                    toJSON(message: _162.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_162.QueryConnectionResponse>): _162.QueryConnectionResponse;
                    fromAmino(object: _162.QueryConnectionResponseAmino): _162.QueryConnectionResponse;
                    toAmino(message: _162.QueryConnectionResponse): _162.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _162.QueryConnectionResponseAminoMsg): _162.QueryConnectionResponse;
                    toAminoMsg(message: _162.QueryConnectionResponse): _162.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _162.QueryConnectionResponseProtoMsg): _162.QueryConnectionResponse;
                    toProto(message: _162.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _162.QueryConnectionResponse): _162.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _162.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.QueryConnectionsRequest;
                    fromJSON(object: any): _162.QueryConnectionsRequest;
                    toJSON(message: _162.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_162.QueryConnectionsRequest>): _162.QueryConnectionsRequest;
                    fromAmino(object: _162.QueryConnectionsRequestAmino): _162.QueryConnectionsRequest;
                    toAmino(message: _162.QueryConnectionsRequest): _162.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _162.QueryConnectionsRequestAminoMsg): _162.QueryConnectionsRequest;
                    toAminoMsg(message: _162.QueryConnectionsRequest): _162.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _162.QueryConnectionsRequestProtoMsg): _162.QueryConnectionsRequest;
                    toProto(message: _162.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _162.QueryConnectionsRequest): _162.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _162.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.QueryConnectionsResponse;
                    fromJSON(object: any): _162.QueryConnectionsResponse;
                    toJSON(message: _162.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_162.QueryConnectionsResponse>): _162.QueryConnectionsResponse;
                    fromAmino(object: _162.QueryConnectionsResponseAmino): _162.QueryConnectionsResponse;
                    toAmino(message: _162.QueryConnectionsResponse): _162.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _162.QueryConnectionsResponseAminoMsg): _162.QueryConnectionsResponse;
                    toAminoMsg(message: _162.QueryConnectionsResponse): _162.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _162.QueryConnectionsResponseProtoMsg): _162.QueryConnectionsResponse;
                    toProto(message: _162.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _162.QueryConnectionsResponse): _162.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _162.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.QueryClientConnectionsRequest;
                    fromJSON(object: any): _162.QueryClientConnectionsRequest;
                    toJSON(message: _162.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_162.QueryClientConnectionsRequest>): _162.QueryClientConnectionsRequest;
                    fromAmino(object: _162.QueryClientConnectionsRequestAmino): _162.QueryClientConnectionsRequest;
                    toAmino(message: _162.QueryClientConnectionsRequest): _162.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _162.QueryClientConnectionsRequestAminoMsg): _162.QueryClientConnectionsRequest;
                    toAminoMsg(message: _162.QueryClientConnectionsRequest): _162.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _162.QueryClientConnectionsRequestProtoMsg): _162.QueryClientConnectionsRequest;
                    toProto(message: _162.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _162.QueryClientConnectionsRequest): _162.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _162.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.QueryClientConnectionsResponse;
                    fromJSON(object: any): _162.QueryClientConnectionsResponse;
                    toJSON(message: _162.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_162.QueryClientConnectionsResponse>): _162.QueryClientConnectionsResponse;
                    fromAmino(object: _162.QueryClientConnectionsResponseAmino): _162.QueryClientConnectionsResponse;
                    toAmino(message: _162.QueryClientConnectionsResponse): _162.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _162.QueryClientConnectionsResponseAminoMsg): _162.QueryClientConnectionsResponse;
                    toAminoMsg(message: _162.QueryClientConnectionsResponse): _162.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _162.QueryClientConnectionsResponseProtoMsg): _162.QueryClientConnectionsResponse;
                    toProto(message: _162.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _162.QueryClientConnectionsResponse): _162.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _162.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _162.QueryConnectionClientStateRequest;
                    toJSON(message: _162.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_162.QueryConnectionClientStateRequest>): _162.QueryConnectionClientStateRequest;
                    fromAmino(object: _162.QueryConnectionClientStateRequestAmino): _162.QueryConnectionClientStateRequest;
                    toAmino(message: _162.QueryConnectionClientStateRequest): _162.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _162.QueryConnectionClientStateRequestAminoMsg): _162.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _162.QueryConnectionClientStateRequest): _162.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _162.QueryConnectionClientStateRequestProtoMsg): _162.QueryConnectionClientStateRequest;
                    toProto(message: _162.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _162.QueryConnectionClientStateRequest): _162.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _162.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _162.QueryConnectionClientStateResponse;
                    toJSON(message: _162.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_162.QueryConnectionClientStateResponse>): _162.QueryConnectionClientStateResponse;
                    fromAmino(object: _162.QueryConnectionClientStateResponseAmino): _162.QueryConnectionClientStateResponse;
                    toAmino(message: _162.QueryConnectionClientStateResponse): _162.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _162.QueryConnectionClientStateResponseAminoMsg): _162.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _162.QueryConnectionClientStateResponse): _162.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _162.QueryConnectionClientStateResponseProtoMsg): _162.QueryConnectionClientStateResponse;
                    toProto(message: _162.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _162.QueryConnectionClientStateResponse): _162.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _162.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _162.QueryConnectionConsensusStateRequest;
                    toJSON(message: _162.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_162.QueryConnectionConsensusStateRequest>): _162.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _162.QueryConnectionConsensusStateRequestAmino): _162.QueryConnectionConsensusStateRequest;
                    toAmino(message: _162.QueryConnectionConsensusStateRequest): _162.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _162.QueryConnectionConsensusStateRequestAminoMsg): _162.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _162.QueryConnectionConsensusStateRequest): _162.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _162.QueryConnectionConsensusStateRequestProtoMsg): _162.QueryConnectionConsensusStateRequest;
                    toProto(message: _162.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _162.QueryConnectionConsensusStateRequest): _162.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _162.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _162.QueryConnectionConsensusStateResponse;
                    toJSON(message: _162.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_162.QueryConnectionConsensusStateResponse>): _162.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _162.QueryConnectionConsensusStateResponseAmino): _162.QueryConnectionConsensusStateResponse;
                    toAmino(message: _162.QueryConnectionConsensusStateResponse): _162.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _162.QueryConnectionConsensusStateResponseAminoMsg): _162.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _162.QueryConnectionConsensusStateResponse): _162.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _162.QueryConnectionConsensusStateResponseProtoMsg): _162.QueryConnectionConsensusStateResponse;
                    toProto(message: _162.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _162.QueryConnectionConsensusStateResponse): _162.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _162.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.QueryConnectionParamsRequest;
                    fromJSON(_: any): _162.QueryConnectionParamsRequest;
                    toJSON(_: _162.QueryConnectionParamsRequest): unknown;
                    fromPartial(_: Partial<_162.QueryConnectionParamsRequest>): _162.QueryConnectionParamsRequest;
                    fromAmino(_: _162.QueryConnectionParamsRequestAmino): _162.QueryConnectionParamsRequest;
                    toAmino(_: _162.QueryConnectionParamsRequest): _162.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _162.QueryConnectionParamsRequestAminoMsg): _162.QueryConnectionParamsRequest;
                    toAminoMsg(message: _162.QueryConnectionParamsRequest): _162.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _162.QueryConnectionParamsRequestProtoMsg): _162.QueryConnectionParamsRequest;
                    toProto(message: _162.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _162.QueryConnectionParamsRequest): _162.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _162.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.QueryConnectionParamsResponse;
                    fromJSON(object: any): _162.QueryConnectionParamsResponse;
                    toJSON(message: _162.QueryConnectionParamsResponse): unknown;
                    fromPartial(object: Partial<_162.QueryConnectionParamsResponse>): _162.QueryConnectionParamsResponse;
                    fromAmino(object: _162.QueryConnectionParamsResponseAmino): _162.QueryConnectionParamsResponse;
                    toAmino(message: _162.QueryConnectionParamsResponse): _162.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _162.QueryConnectionParamsResponseAminoMsg): _162.QueryConnectionParamsResponse;
                    toAminoMsg(message: _162.QueryConnectionParamsResponse): _162.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _162.QueryConnectionParamsResponseProtoMsg): _162.QueryConnectionParamsResponse;
                    toProto(message: _162.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _162.QueryConnectionParamsResponse): _162.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _161.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _161.GenesisState;
                    fromJSON(object: any): _161.GenesisState;
                    toJSON(message: _161.GenesisState): unknown;
                    fromPartial(object: Partial<_161.GenesisState>): _161.GenesisState;
                    fromAmino(object: _161.GenesisStateAmino): _161.GenesisState;
                    toAmino(message: _161.GenesisState): _161.GenesisStateAmino;
                    fromAminoMsg(object: _161.GenesisStateAminoMsg): _161.GenesisState;
                    toAminoMsg(message: _161.GenesisState): _161.GenesisStateAminoMsg;
                    fromProtoMsg(message: _161.GenesisStateProtoMsg): _161.GenesisState;
                    toProto(message: _161.GenesisState): Uint8Array;
                    toProtoMsg(message: _161.GenesisState): _161.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _160.State;
                stateToJSON(object: _160.State): string;
                State: typeof _160.State;
                StateSDKType: typeof _160.State;
                StateAmino: typeof _160.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _160.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.ConnectionEnd;
                    fromJSON(object: any): _160.ConnectionEnd;
                    toJSON(message: _160.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_160.ConnectionEnd>): _160.ConnectionEnd;
                    fromAmino(object: _160.ConnectionEndAmino): _160.ConnectionEnd;
                    toAmino(message: _160.ConnectionEnd): _160.ConnectionEndAmino;
                    fromAminoMsg(object: _160.ConnectionEndAminoMsg): _160.ConnectionEnd;
                    toAminoMsg(message: _160.ConnectionEnd): _160.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _160.ConnectionEndProtoMsg): _160.ConnectionEnd;
                    toProto(message: _160.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _160.ConnectionEnd): _160.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _160.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.IdentifiedConnection;
                    fromJSON(object: any): _160.IdentifiedConnection;
                    toJSON(message: _160.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_160.IdentifiedConnection>): _160.IdentifiedConnection;
                    fromAmino(object: _160.IdentifiedConnectionAmino): _160.IdentifiedConnection;
                    toAmino(message: _160.IdentifiedConnection): _160.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _160.IdentifiedConnectionAminoMsg): _160.IdentifiedConnection;
                    toAminoMsg(message: _160.IdentifiedConnection): _160.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _160.IdentifiedConnectionProtoMsg): _160.IdentifiedConnection;
                    toProto(message: _160.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _160.IdentifiedConnection): _160.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _160.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.Counterparty;
                    fromJSON(object: any): _160.Counterparty;
                    toJSON(message: _160.Counterparty): unknown;
                    fromPartial(object: Partial<_160.Counterparty>): _160.Counterparty;
                    fromAmino(object: _160.CounterpartyAmino): _160.Counterparty;
                    toAmino(message: _160.Counterparty): _160.CounterpartyAmino;
                    fromAminoMsg(object: _160.CounterpartyAminoMsg): _160.Counterparty;
                    toAminoMsg(message: _160.Counterparty): _160.CounterpartyAminoMsg;
                    fromProtoMsg(message: _160.CounterpartyProtoMsg): _160.Counterparty;
                    toProto(message: _160.Counterparty): Uint8Array;
                    toProtoMsg(message: _160.Counterparty): _160.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _160.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.ClientPaths;
                    fromJSON(object: any): _160.ClientPaths;
                    toJSON(message: _160.ClientPaths): unknown;
                    fromPartial(object: Partial<_160.ClientPaths>): _160.ClientPaths;
                    fromAmino(object: _160.ClientPathsAmino): _160.ClientPaths;
                    toAmino(message: _160.ClientPaths): _160.ClientPathsAmino;
                    fromAminoMsg(object: _160.ClientPathsAminoMsg): _160.ClientPaths;
                    toAminoMsg(message: _160.ClientPaths): _160.ClientPathsAminoMsg;
                    fromProtoMsg(message: _160.ClientPathsProtoMsg): _160.ClientPaths;
                    toProto(message: _160.ClientPaths): Uint8Array;
                    toProtoMsg(message: _160.ClientPaths): _160.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _160.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.ConnectionPaths;
                    fromJSON(object: any): _160.ConnectionPaths;
                    toJSON(message: _160.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_160.ConnectionPaths>): _160.ConnectionPaths;
                    fromAmino(object: _160.ConnectionPathsAmino): _160.ConnectionPaths;
                    toAmino(message: _160.ConnectionPaths): _160.ConnectionPathsAmino;
                    fromAminoMsg(object: _160.ConnectionPathsAminoMsg): _160.ConnectionPaths;
                    toAminoMsg(message: _160.ConnectionPaths): _160.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _160.ConnectionPathsProtoMsg): _160.ConnectionPaths;
                    toProto(message: _160.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _160.ConnectionPaths): _160.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _160.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.Version;
                    fromJSON(object: any): _160.Version;
                    toJSON(message: _160.Version): unknown;
                    fromPartial(object: Partial<_160.Version>): _160.Version;
                    fromAmino(object: _160.VersionAmino): _160.Version;
                    toAmino(message: _160.Version): _160.VersionAmino;
                    fromAminoMsg(object: _160.VersionAminoMsg): _160.Version;
                    toAminoMsg(message: _160.Version): _160.VersionAminoMsg;
                    fromProtoMsg(message: _160.VersionProtoMsg): _160.Version;
                    toProto(message: _160.Version): Uint8Array;
                    toProtoMsg(message: _160.Version): _160.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _160.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.Params;
                    fromJSON(object: any): _160.Params;
                    toJSON(message: _160.Params): unknown;
                    fromPartial(object: Partial<_160.Params>): _160.Params;
                    fromAmino(object: _160.ParamsAmino): _160.Params;
                    toAmino(message: _160.Params): _160.ParamsAmino;
                    fromAminoMsg(object: _160.ParamsAminoMsg): _160.Params;
                    toAminoMsg(message: _160.Params): _160.ParamsAminoMsg;
                    fromProtoMsg(message: _160.ParamsProtoMsg): _160.Params;
                    toProto(message: _160.Params): Uint8Array;
                    toProtoMsg(message: _160.Params): _160.ParamsProtoMsg;
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
                    encode(message: _164.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.ClientState;
                    fromJSON(object: any): _164.ClientState;
                    toJSON(message: _164.ClientState): unknown;
                    fromPartial(object: Partial<_164.ClientState>): _164.ClientState;
                    fromAmino(object: _164.ClientStateAmino): _164.ClientState;
                    toAmino(message: _164.ClientState): _164.ClientStateAmino;
                    fromAminoMsg(object: _164.ClientStateAminoMsg): _164.ClientState;
                    toAminoMsg(message: _164.ClientState): _164.ClientStateAminoMsg;
                    fromProtoMsg(message: _164.ClientStateProtoMsg): _164.ClientState;
                    toProto(message: _164.ClientState): Uint8Array;
                    toProtoMsg(message: _164.ClientState): _164.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _165.DataType;
                dataTypeToJSON(object: _165.DataType): string;
                protobufPackage: "ibc.lightclients.solomachine.v2";
                DataType: typeof _165.DataType;
                DataTypeSDKType: typeof _165.DataType;
                DataTypeAmino: typeof _165.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _165.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.ClientState;
                    fromJSON(object: any): _165.ClientState;
                    toJSON(message: _165.ClientState): unknown;
                    fromPartial(object: Partial<_165.ClientState>): _165.ClientState;
                    fromAmino(object: _165.ClientStateAmino): _165.ClientState;
                    toAmino(message: _165.ClientState): _165.ClientStateAmino;
                    fromAminoMsg(object: _165.ClientStateAminoMsg): _165.ClientState;
                    toAminoMsg(message: _165.ClientState): _165.ClientStateAminoMsg;
                    fromProtoMsg(message: _165.ClientStateProtoMsg): _165.ClientState;
                    toProto(message: _165.ClientState): Uint8Array;
                    toProtoMsg(message: _165.ClientState): _165.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _165.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.ConsensusState;
                    fromJSON(object: any): _165.ConsensusState;
                    toJSON(message: _165.ConsensusState): unknown;
                    fromPartial(object: Partial<_165.ConsensusState>): _165.ConsensusState;
                    fromAmino(object: _165.ConsensusStateAmino): _165.ConsensusState;
                    toAmino(message: _165.ConsensusState): _165.ConsensusStateAmino;
                    fromAminoMsg(object: _165.ConsensusStateAminoMsg): _165.ConsensusState;
                    toAminoMsg(message: _165.ConsensusState): _165.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _165.ConsensusStateProtoMsg): _165.ConsensusState;
                    toProto(message: _165.ConsensusState): Uint8Array;
                    toProtoMsg(message: _165.ConsensusState): _165.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _165.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.Header;
                    fromJSON(object: any): _165.Header;
                    toJSON(message: _165.Header): unknown;
                    fromPartial(object: Partial<_165.Header>): _165.Header;
                    fromAmino(object: _165.HeaderAmino): _165.Header;
                    toAmino(message: _165.Header): _165.HeaderAmino;
                    fromAminoMsg(object: _165.HeaderAminoMsg): _165.Header;
                    toAminoMsg(message: _165.Header): _165.HeaderAminoMsg;
                    fromProtoMsg(message: _165.HeaderProtoMsg): _165.Header;
                    toProto(message: _165.Header): Uint8Array;
                    toProtoMsg(message: _165.Header): _165.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _165.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.Misbehaviour;
                    fromJSON(object: any): _165.Misbehaviour;
                    toJSON(message: _165.Misbehaviour): unknown;
                    fromPartial(object: Partial<_165.Misbehaviour>): _165.Misbehaviour;
                    fromAmino(object: _165.MisbehaviourAmino): _165.Misbehaviour;
                    toAmino(message: _165.Misbehaviour): _165.MisbehaviourAmino;
                    fromAminoMsg(object: _165.MisbehaviourAminoMsg): _165.Misbehaviour;
                    toAminoMsg(message: _165.Misbehaviour): _165.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _165.MisbehaviourProtoMsg): _165.Misbehaviour;
                    toProto(message: _165.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _165.Misbehaviour): _165.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _165.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.SignatureAndData;
                    fromJSON(object: any): _165.SignatureAndData;
                    toJSON(message: _165.SignatureAndData): unknown;
                    fromPartial(object: Partial<_165.SignatureAndData>): _165.SignatureAndData;
                    fromAmino(object: _165.SignatureAndDataAmino): _165.SignatureAndData;
                    toAmino(message: _165.SignatureAndData): _165.SignatureAndDataAmino;
                    fromAminoMsg(object: _165.SignatureAndDataAminoMsg): _165.SignatureAndData;
                    toAminoMsg(message: _165.SignatureAndData): _165.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _165.SignatureAndDataProtoMsg): _165.SignatureAndData;
                    toProto(message: _165.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _165.SignatureAndData): _165.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _165.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.TimestampedSignatureData;
                    fromJSON(object: any): _165.TimestampedSignatureData;
                    toJSON(message: _165.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_165.TimestampedSignatureData>): _165.TimestampedSignatureData;
                    fromAmino(object: _165.TimestampedSignatureDataAmino): _165.TimestampedSignatureData;
                    toAmino(message: _165.TimestampedSignatureData): _165.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _165.TimestampedSignatureDataAminoMsg): _165.TimestampedSignatureData;
                    toAminoMsg(message: _165.TimestampedSignatureData): _165.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _165.TimestampedSignatureDataProtoMsg): _165.TimestampedSignatureData;
                    toProto(message: _165.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _165.TimestampedSignatureData): _165.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _165.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.SignBytes;
                    fromJSON(object: any): _165.SignBytes;
                    toJSON(message: _165.SignBytes): unknown;
                    fromPartial(object: Partial<_165.SignBytes>): _165.SignBytes;
                    fromAmino(object: _165.SignBytesAmino): _165.SignBytes;
                    toAmino(message: _165.SignBytes): _165.SignBytesAmino;
                    fromAminoMsg(object: _165.SignBytesAminoMsg): _165.SignBytes;
                    toAminoMsg(message: _165.SignBytes): _165.SignBytesAminoMsg;
                    fromProtoMsg(message: _165.SignBytesProtoMsg): _165.SignBytes;
                    toProto(message: _165.SignBytes): Uint8Array;
                    toProtoMsg(message: _165.SignBytes): _165.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _165.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.HeaderData;
                    fromJSON(object: any): _165.HeaderData;
                    toJSON(message: _165.HeaderData): unknown;
                    fromPartial(object: Partial<_165.HeaderData>): _165.HeaderData;
                    fromAmino(object: _165.HeaderDataAmino): _165.HeaderData;
                    toAmino(message: _165.HeaderData): _165.HeaderDataAmino;
                    fromAminoMsg(object: _165.HeaderDataAminoMsg): _165.HeaderData;
                    toAminoMsg(message: _165.HeaderData): _165.HeaderDataAminoMsg;
                    fromProtoMsg(message: _165.HeaderDataProtoMsg): _165.HeaderData;
                    toProto(message: _165.HeaderData): Uint8Array;
                    toProtoMsg(message: _165.HeaderData): _165.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _165.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.ClientStateData;
                    fromJSON(object: any): _165.ClientStateData;
                    toJSON(message: _165.ClientStateData): unknown;
                    fromPartial(object: Partial<_165.ClientStateData>): _165.ClientStateData;
                    fromAmino(object: _165.ClientStateDataAmino): _165.ClientStateData;
                    toAmino(message: _165.ClientStateData): _165.ClientStateDataAmino;
                    fromAminoMsg(object: _165.ClientStateDataAminoMsg): _165.ClientStateData;
                    toAminoMsg(message: _165.ClientStateData): _165.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _165.ClientStateDataProtoMsg): _165.ClientStateData;
                    toProto(message: _165.ClientStateData): Uint8Array;
                    toProtoMsg(message: _165.ClientStateData): _165.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _165.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.ConsensusStateData;
                    fromJSON(object: any): _165.ConsensusStateData;
                    toJSON(message: _165.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_165.ConsensusStateData>): _165.ConsensusStateData;
                    fromAmino(object: _165.ConsensusStateDataAmino): _165.ConsensusStateData;
                    toAmino(message: _165.ConsensusStateData): _165.ConsensusStateDataAmino;
                    fromAminoMsg(object: _165.ConsensusStateDataAminoMsg): _165.ConsensusStateData;
                    toAminoMsg(message: _165.ConsensusStateData): _165.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _165.ConsensusStateDataProtoMsg): _165.ConsensusStateData;
                    toProto(message: _165.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _165.ConsensusStateData): _165.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _165.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.ConnectionStateData;
                    fromJSON(object: any): _165.ConnectionStateData;
                    toJSON(message: _165.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_165.ConnectionStateData>): _165.ConnectionStateData;
                    fromAmino(object: _165.ConnectionStateDataAmino): _165.ConnectionStateData;
                    toAmino(message: _165.ConnectionStateData): _165.ConnectionStateDataAmino;
                    fromAminoMsg(object: _165.ConnectionStateDataAminoMsg): _165.ConnectionStateData;
                    toAminoMsg(message: _165.ConnectionStateData): _165.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _165.ConnectionStateDataProtoMsg): _165.ConnectionStateData;
                    toProto(message: _165.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _165.ConnectionStateData): _165.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _165.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.ChannelStateData;
                    fromJSON(object: any): _165.ChannelStateData;
                    toJSON(message: _165.ChannelStateData): unknown;
                    fromPartial(object: Partial<_165.ChannelStateData>): _165.ChannelStateData;
                    fromAmino(object: _165.ChannelStateDataAmino): _165.ChannelStateData;
                    toAmino(message: _165.ChannelStateData): _165.ChannelStateDataAmino;
                    fromAminoMsg(object: _165.ChannelStateDataAminoMsg): _165.ChannelStateData;
                    toAminoMsg(message: _165.ChannelStateData): _165.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _165.ChannelStateDataProtoMsg): _165.ChannelStateData;
                    toProto(message: _165.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _165.ChannelStateData): _165.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _165.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.PacketCommitmentData;
                    fromJSON(object: any): _165.PacketCommitmentData;
                    toJSON(message: _165.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_165.PacketCommitmentData>): _165.PacketCommitmentData;
                    fromAmino(object: _165.PacketCommitmentDataAmino): _165.PacketCommitmentData;
                    toAmino(message: _165.PacketCommitmentData): _165.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _165.PacketCommitmentDataAminoMsg): _165.PacketCommitmentData;
                    toAminoMsg(message: _165.PacketCommitmentData): _165.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _165.PacketCommitmentDataProtoMsg): _165.PacketCommitmentData;
                    toProto(message: _165.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _165.PacketCommitmentData): _165.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _165.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.PacketAcknowledgementData;
                    fromJSON(object: any): _165.PacketAcknowledgementData;
                    toJSON(message: _165.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_165.PacketAcknowledgementData>): _165.PacketAcknowledgementData;
                    fromAmino(object: _165.PacketAcknowledgementDataAmino): _165.PacketAcknowledgementData;
                    toAmino(message: _165.PacketAcknowledgementData): _165.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _165.PacketAcknowledgementDataAminoMsg): _165.PacketAcknowledgementData;
                    toAminoMsg(message: _165.PacketAcknowledgementData): _165.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _165.PacketAcknowledgementDataProtoMsg): _165.PacketAcknowledgementData;
                    toProto(message: _165.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _165.PacketAcknowledgementData): _165.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _165.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.PacketReceiptAbsenceData;
                    fromJSON(object: any): _165.PacketReceiptAbsenceData;
                    toJSON(message: _165.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_165.PacketReceiptAbsenceData>): _165.PacketReceiptAbsenceData;
                    fromAmino(object: _165.PacketReceiptAbsenceDataAmino): _165.PacketReceiptAbsenceData;
                    toAmino(message: _165.PacketReceiptAbsenceData): _165.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _165.PacketReceiptAbsenceDataAminoMsg): _165.PacketReceiptAbsenceData;
                    toAminoMsg(message: _165.PacketReceiptAbsenceData): _165.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _165.PacketReceiptAbsenceDataProtoMsg): _165.PacketReceiptAbsenceData;
                    toProto(message: _165.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _165.PacketReceiptAbsenceData): _165.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _165.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.NextSequenceRecvData;
                    fromJSON(object: any): _165.NextSequenceRecvData;
                    toJSON(message: _165.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_165.NextSequenceRecvData>): _165.NextSequenceRecvData;
                    fromAmino(object: _165.NextSequenceRecvDataAmino): _165.NextSequenceRecvData;
                    toAmino(message: _165.NextSequenceRecvData): _165.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _165.NextSequenceRecvDataAminoMsg): _165.NextSequenceRecvData;
                    toAminoMsg(message: _165.NextSequenceRecvData): _165.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _165.NextSequenceRecvDataProtoMsg): _165.NextSequenceRecvData;
                    toProto(message: _165.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _165.NextSequenceRecvData): _165.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                protobufPackage: "ibc.lightclients.solomachine.v3";
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
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _166.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _166.ConsensusState;
                    fromJSON(object: any): _166.ConsensusState;
                    toJSON(message: _166.ConsensusState): unknown;
                    fromPartial(object: Partial<_166.ConsensusState>): _166.ConsensusState;
                    fromAmino(object: _166.ConsensusStateAmino): _166.ConsensusState;
                    toAmino(message: _166.ConsensusState): _166.ConsensusStateAmino;
                    fromAminoMsg(object: _166.ConsensusStateAminoMsg): _166.ConsensusState;
                    toAminoMsg(message: _166.ConsensusState): _166.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _166.ConsensusStateProtoMsg): _166.ConsensusState;
                    toProto(message: _166.ConsensusState): Uint8Array;
                    toProtoMsg(message: _166.ConsensusState): _166.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _166.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _166.Header;
                    fromJSON(object: any): _166.Header;
                    toJSON(message: _166.Header): unknown;
                    fromPartial(object: Partial<_166.Header>): _166.Header;
                    fromAmino(object: _166.HeaderAmino): _166.Header;
                    toAmino(message: _166.Header): _166.HeaderAmino;
                    fromAminoMsg(object: _166.HeaderAminoMsg): _166.Header;
                    toAminoMsg(message: _166.Header): _166.HeaderAminoMsg;
                    fromProtoMsg(message: _166.HeaderProtoMsg): _166.Header;
                    toProto(message: _166.Header): Uint8Array;
                    toProtoMsg(message: _166.Header): _166.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _166.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _166.Misbehaviour;
                    fromJSON(object: any): _166.Misbehaviour;
                    toJSON(message: _166.Misbehaviour): unknown;
                    fromPartial(object: Partial<_166.Misbehaviour>): _166.Misbehaviour;
                    fromAmino(object: _166.MisbehaviourAmino): _166.Misbehaviour;
                    toAmino(message: _166.Misbehaviour): _166.MisbehaviourAmino;
                    fromAminoMsg(object: _166.MisbehaviourAminoMsg): _166.Misbehaviour;
                    toAminoMsg(message: _166.Misbehaviour): _166.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _166.MisbehaviourProtoMsg): _166.Misbehaviour;
                    toProto(message: _166.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _166.Misbehaviour): _166.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _166.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _166.SignatureAndData;
                    fromJSON(object: any): _166.SignatureAndData;
                    toJSON(message: _166.SignatureAndData): unknown;
                    fromPartial(object: Partial<_166.SignatureAndData>): _166.SignatureAndData;
                    fromAmino(object: _166.SignatureAndDataAmino): _166.SignatureAndData;
                    toAmino(message: _166.SignatureAndData): _166.SignatureAndDataAmino;
                    fromAminoMsg(object: _166.SignatureAndDataAminoMsg): _166.SignatureAndData;
                    toAminoMsg(message: _166.SignatureAndData): _166.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _166.SignatureAndDataProtoMsg): _166.SignatureAndData;
                    toProto(message: _166.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _166.SignatureAndData): _166.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _166.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _166.TimestampedSignatureData;
                    fromJSON(object: any): _166.TimestampedSignatureData;
                    toJSON(message: _166.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_166.TimestampedSignatureData>): _166.TimestampedSignatureData;
                    fromAmino(object: _166.TimestampedSignatureDataAmino): _166.TimestampedSignatureData;
                    toAmino(message: _166.TimestampedSignatureData): _166.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _166.TimestampedSignatureDataAminoMsg): _166.TimestampedSignatureData;
                    toAminoMsg(message: _166.TimestampedSignatureData): _166.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _166.TimestampedSignatureDataProtoMsg): _166.TimestampedSignatureData;
                    toProto(message: _166.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _166.TimestampedSignatureData): _166.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _166.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _166.SignBytes;
                    fromJSON(object: any): _166.SignBytes;
                    toJSON(message: _166.SignBytes): unknown;
                    fromPartial(object: Partial<_166.SignBytes>): _166.SignBytes;
                    fromAmino(object: _166.SignBytesAmino): _166.SignBytes;
                    toAmino(message: _166.SignBytes): _166.SignBytesAmino;
                    fromAminoMsg(object: _166.SignBytesAminoMsg): _166.SignBytes;
                    toAminoMsg(message: _166.SignBytes): _166.SignBytesAminoMsg;
                    fromProtoMsg(message: _166.SignBytesProtoMsg): _166.SignBytes;
                    toProto(message: _166.SignBytes): Uint8Array;
                    toProtoMsg(message: _166.SignBytes): _166.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _166.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _166.HeaderData;
                    fromJSON(object: any): _166.HeaderData;
                    toJSON(message: _166.HeaderData): unknown;
                    fromPartial(object: Partial<_166.HeaderData>): _166.HeaderData;
                    fromAmino(object: _166.HeaderDataAmino): _166.HeaderData;
                    toAmino(message: _166.HeaderData): _166.HeaderDataAmino;
                    fromAminoMsg(object: _166.HeaderDataAminoMsg): _166.HeaderData;
                    toAminoMsg(message: _166.HeaderData): _166.HeaderDataAminoMsg;
                    fromProtoMsg(message: _166.HeaderDataProtoMsg): _166.HeaderData;
                    toProto(message: _166.HeaderData): Uint8Array;
                    toProtoMsg(message: _166.HeaderData): _166.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                protobufPackage: "ibc.lightclients.tendermint.v1";
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
                Fraction: {
                    typeUrl: string;
                    encode(message: _167.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.Fraction;
                    fromJSON(object: any): _167.Fraction;
                    toJSON(message: _167.Fraction): unknown;
                    fromPartial(object: Partial<_167.Fraction>): _167.Fraction;
                    fromAmino(object: _167.FractionAmino): _167.Fraction;
                    toAmino(message: _167.Fraction): _167.FractionAmino;
                    fromAminoMsg(object: _167.FractionAminoMsg): _167.Fraction;
                    toAminoMsg(message: _167.Fraction): _167.FractionAminoMsg;
                    fromProtoMsg(message: _167.FractionProtoMsg): _167.Fraction;
                    toProto(message: _167.Fraction): Uint8Array;
                    toProtoMsg(message: _167.Fraction): _167.FractionProtoMsg;
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
                            v1: _294.QueryClientImpl;
                        };
                        host: {
                            v1: _295.QueryClientImpl;
                        };
                    };
                    transfer: {
                        v1: _296.QueryClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _297.QueryClientImpl;
                    };
                    client: {
                        v1: _298.QueryClientImpl;
                    };
                    connection: {
                        v1: _299.QueryClientImpl;
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
                            v1: _288.LCDQueryClient;
                        };
                        host: {
                            v1: _289.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _290.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _291.LCDQueryClient;
                    };
                    client: {
                        v1: _292.LCDQueryClient;
                    };
                    connection: {
                        v1: _293.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}

import * as _1 from "./blit/future_task";
import * as _2 from "./blit/genesis";
import * as _3 from "./blit/params";
import * as _4 from "./blit/query";
import * as _5 from "./blit/task";
import * as _6 from "./blit/tx";
import * as _7 from "./script/genesis";
import * as _9 from "./script/params";
import * as _10 from "./script/query";
import * as _11 from "./script/script";
import * as _12 from "./script/tx";
import * as _13 from "./storage/genesis";
import * as _14 from "./storage/params";
import * as _15 from "./storage/query";
import * as _16 from "./storage/storage";
import * as _17 from "./storage/tx";
import * as _187 from "./blit/query.lcd";
import * as _188 from "./script/query.lcd";
import * as _189 from "./storage/query.lcd";
import * as _190 from "./blit/query.rpc.Service";
import * as _191 from "./script/query.rpc.Query";
import * as _192 from "./storage/query.rpc.Query";
import * as _193 from "./blit/tx.rpc.msg";
import * as _194 from "./script/tx.rpc.msg";
import * as _195 from "./storage/tx.rpc.msg";
export declare namespace blit {
    const blit: {
        Msg: typeof _193.Msg;
        Query: typeof _190.Query;
        QueryClientImpl: typeof _190.QueryClientImpl;
        Service: typeof _190.Service;
        ServiceClientImpl: typeof _190.ServiceClientImpl;
        LCDQueryClient: typeof _187.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _6.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                mintCoins(value: _6.MsgMintCoins): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                burnCoins(value: _6.MsgBurnCoins): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceTransferCoins(value: _6.MsgForceTransferCoins): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setDenomMetadata(value: _6.MsgSetDenomMetadata): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTask(value: _6.MsgCreateTask): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTask(value: _6.MsgDeleteTask): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _6.MsgUpdateParams): {
                    typeUrl: string;
                    value: _6.MsgUpdateParams;
                };
                mintCoins(value: _6.MsgMintCoins): {
                    typeUrl: string;
                    value: _6.MsgMintCoins;
                };
                burnCoins(value: _6.MsgBurnCoins): {
                    typeUrl: string;
                    value: _6.MsgBurnCoins;
                };
                forceTransferCoins(value: _6.MsgForceTransferCoins): {
                    typeUrl: string;
                    value: _6.MsgForceTransferCoins;
                };
                setDenomMetadata(value: _6.MsgSetDenomMetadata): {
                    typeUrl: string;
                    value: _6.MsgSetDenomMetadata;
                };
                createTask(value: _6.MsgCreateTask): {
                    typeUrl: string;
                    value: _6.MsgCreateTask;
                };
                deleteTask(value: _6.MsgDeleteTask): {
                    typeUrl: string;
                    value: _6.MsgDeleteTask;
                };
            };
            toJSON: {
                updateParams(value: _6.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
                mintCoins(value: _6.MsgMintCoins): {
                    typeUrl: string;
                    value: unknown;
                };
                burnCoins(value: _6.MsgBurnCoins): {
                    typeUrl: string;
                    value: unknown;
                };
                forceTransferCoins(value: _6.MsgForceTransferCoins): {
                    typeUrl: string;
                    value: unknown;
                };
                setDenomMetadata(value: _6.MsgSetDenomMetadata): {
                    typeUrl: string;
                    value: unknown;
                };
                createTask(value: _6.MsgCreateTask): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteTask(value: _6.MsgDeleteTask): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _6.MsgUpdateParams;
                };
                mintCoins(value: any): {
                    typeUrl: string;
                    value: _6.MsgMintCoins;
                };
                burnCoins(value: any): {
                    typeUrl: string;
                    value: _6.MsgBurnCoins;
                };
                forceTransferCoins(value: any): {
                    typeUrl: string;
                    value: _6.MsgForceTransferCoins;
                };
                setDenomMetadata(value: any): {
                    typeUrl: string;
                    value: _6.MsgSetDenomMetadata;
                };
                createTask(value: any): {
                    typeUrl: string;
                    value: _6.MsgCreateTask;
                };
                deleteTask(value: any): {
                    typeUrl: string;
                    value: _6.MsgDeleteTask;
                };
            };
            fromPartial: {
                updateParams(value: _6.MsgUpdateParams): {
                    typeUrl: string;
                    value: _6.MsgUpdateParams;
                };
                mintCoins(value: _6.MsgMintCoins): {
                    typeUrl: string;
                    value: _6.MsgMintCoins;
                };
                burnCoins(value: _6.MsgBurnCoins): {
                    typeUrl: string;
                    value: _6.MsgBurnCoins;
                };
                forceTransferCoins(value: _6.MsgForceTransferCoins): {
                    typeUrl: string;
                    value: _6.MsgForceTransferCoins;
                };
                setDenomMetadata(value: _6.MsgSetDenomMetadata): {
                    typeUrl: string;
                    value: _6.MsgSetDenomMetadata;
                };
                createTask(value: _6.MsgCreateTask): {
                    typeUrl: string;
                    value: _6.MsgCreateTask;
                };
                deleteTask(value: _6.MsgDeleteTask): {
                    typeUrl: string;
                    value: _6.MsgDeleteTask;
                };
            };
        };
        AminoConverter: {
            "/blit.blit.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _6.MsgUpdateParams) => _6.MsgUpdateParamsAmino;
                fromAmino: (object: _6.MsgUpdateParamsAmino) => _6.MsgUpdateParams;
            };
            "/blit.blit.MsgMintCoins": {
                aminoType: string;
                toAmino: (message: _6.MsgMintCoins) => _6.MsgMintCoinsAmino;
                fromAmino: (object: _6.MsgMintCoinsAmino) => _6.MsgMintCoins;
            };
            "/blit.blit.MsgBurnCoins": {
                aminoType: string;
                toAmino: (message: _6.MsgBurnCoins) => _6.MsgBurnCoinsAmino;
                fromAmino: (object: _6.MsgBurnCoinsAmino) => _6.MsgBurnCoins;
            };
            "/blit.blit.MsgForceTransferCoins": {
                aminoType: string;
                toAmino: (message: _6.MsgForceTransferCoins) => _6.MsgForceTransferCoinsAmino;
                fromAmino: (object: _6.MsgForceTransferCoinsAmino) => _6.MsgForceTransferCoins;
            };
            "/blit.blit.MsgSetDenomMetadata": {
                aminoType: string;
                toAmino: (message: _6.MsgSetDenomMetadata) => _6.MsgSetDenomMetadataAmino;
                fromAmino: (object: _6.MsgSetDenomMetadataAmino) => _6.MsgSetDenomMetadata;
            };
            "/blit.blit.MsgCreateTask": {
                aminoType: string;
                toAmino: (message: _6.MsgCreateTask) => _6.MsgCreateTaskAmino;
                fromAmino: (object: _6.MsgCreateTaskAmino) => _6.MsgCreateTask;
            };
            "/blit.blit.MsgDeleteTask": {
                aminoType: string;
                toAmino: (message: _6.MsgDeleteTask) => _6.MsgDeleteTaskAmino;
                fromAmino: (object: _6.MsgDeleteTaskAmino) => _6.MsgDeleteTask;
            };
        };
        protobufPackage: "blit.blit";
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _6.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgUpdateParams;
            fromJSON(object: any): _6.MsgUpdateParams;
            toJSON(message: _6.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_6.MsgUpdateParams>): _6.MsgUpdateParams;
            fromAmino(object: _6.MsgUpdateParamsAmino): _6.MsgUpdateParams;
            toAmino(message: _6.MsgUpdateParams): _6.MsgUpdateParamsAmino;
            fromAminoMsg(object: _6.MsgUpdateParamsAminoMsg): _6.MsgUpdateParams;
            toAminoMsg(message: _6.MsgUpdateParams): _6.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _6.MsgUpdateParamsProtoMsg): _6.MsgUpdateParams;
            toProto(message: _6.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _6.MsgUpdateParams): _6.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _6.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgUpdateParamsResponse;
            fromJSON(_: any): _6.MsgUpdateParamsResponse;
            toJSON(_: _6.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_6.MsgUpdateParamsResponse>): _6.MsgUpdateParamsResponse;
            fromAmino(_: _6.MsgUpdateParamsResponseAmino): _6.MsgUpdateParamsResponse;
            toAmino(_: _6.MsgUpdateParamsResponse): _6.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _6.MsgUpdateParamsResponseAminoMsg): _6.MsgUpdateParamsResponse;
            fromProtoMsg(message: _6.MsgUpdateParamsResponseProtoMsg): _6.MsgUpdateParamsResponse;
            toProto(message: _6.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _6.MsgUpdateParamsResponse): _6.MsgUpdateParamsResponseProtoMsg;
        };
        MsgMintCoins: {
            typeUrl: string;
            encode(message: _6.MsgMintCoins, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgMintCoins;
            fromJSON(object: any): _6.MsgMintCoins;
            toJSON(message: _6.MsgMintCoins): unknown;
            fromPartial(object: Partial<_6.MsgMintCoins>): _6.MsgMintCoins;
            fromAmino(object: _6.MsgMintCoinsAmino): _6.MsgMintCoins;
            toAmino(message: _6.MsgMintCoins): _6.MsgMintCoinsAmino;
            fromAminoMsg(object: _6.MsgMintCoinsAminoMsg): _6.MsgMintCoins;
            fromProtoMsg(message: _6.MsgMintCoinsProtoMsg): _6.MsgMintCoins;
            toProto(message: _6.MsgMintCoins): Uint8Array;
            toProtoMsg(message: _6.MsgMintCoins): _6.MsgMintCoinsProtoMsg;
        };
        MsgMintCoinsResponse: {
            typeUrl: string;
            encode(_: _6.MsgMintCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgMintCoinsResponse;
            fromJSON(_: any): _6.MsgMintCoinsResponse;
            toJSON(_: _6.MsgMintCoinsResponse): unknown;
            fromPartial(_: Partial<_6.MsgMintCoinsResponse>): _6.MsgMintCoinsResponse;
            fromAmino(_: _6.MsgMintCoinsResponseAmino): _6.MsgMintCoinsResponse;
            toAmino(_: _6.MsgMintCoinsResponse): _6.MsgMintCoinsResponseAmino;
            fromAminoMsg(object: _6.MsgMintCoinsResponseAminoMsg): _6.MsgMintCoinsResponse;
            fromProtoMsg(message: _6.MsgMintCoinsResponseProtoMsg): _6.MsgMintCoinsResponse;
            toProto(message: _6.MsgMintCoinsResponse): Uint8Array;
            toProtoMsg(message: _6.MsgMintCoinsResponse): _6.MsgMintCoinsResponseProtoMsg;
        };
        MsgBurnCoins: {
            typeUrl: string;
            encode(message: _6.MsgBurnCoins, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgBurnCoins;
            fromJSON(object: any): _6.MsgBurnCoins;
            toJSON(message: _6.MsgBurnCoins): unknown;
            fromPartial(object: Partial<_6.MsgBurnCoins>): _6.MsgBurnCoins;
            fromAmino(object: _6.MsgBurnCoinsAmino): _6.MsgBurnCoins;
            toAmino(message: _6.MsgBurnCoins): _6.MsgBurnCoinsAmino;
            fromAminoMsg(object: _6.MsgBurnCoinsAminoMsg): _6.MsgBurnCoins;
            fromProtoMsg(message: _6.MsgBurnCoinsProtoMsg): _6.MsgBurnCoins;
            toProto(message: _6.MsgBurnCoins): Uint8Array;
            toProtoMsg(message: _6.MsgBurnCoins): _6.MsgBurnCoinsProtoMsg;
        };
        MsgBurnCoinsResponse: {
            typeUrl: string;
            encode(_: _6.MsgBurnCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgBurnCoinsResponse;
            fromJSON(_: any): _6.MsgBurnCoinsResponse;
            toJSON(_: _6.MsgBurnCoinsResponse): unknown;
            fromPartial(_: Partial<_6.MsgBurnCoinsResponse>): _6.MsgBurnCoinsResponse;
            fromAmino(_: _6.MsgBurnCoinsResponseAmino): _6.MsgBurnCoinsResponse;
            toAmino(_: _6.MsgBurnCoinsResponse): _6.MsgBurnCoinsResponseAmino;
            fromAminoMsg(object: _6.MsgBurnCoinsResponseAminoMsg): _6.MsgBurnCoinsResponse;
            fromProtoMsg(message: _6.MsgBurnCoinsResponseProtoMsg): _6.MsgBurnCoinsResponse;
            toProto(message: _6.MsgBurnCoinsResponse): Uint8Array;
            toProtoMsg(message: _6.MsgBurnCoinsResponse): _6.MsgBurnCoinsResponseProtoMsg;
        };
        MsgForceTransferCoins: {
            typeUrl: string;
            encode(message: _6.MsgForceTransferCoins, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgForceTransferCoins;
            fromJSON(object: any): _6.MsgForceTransferCoins;
            toJSON(message: _6.MsgForceTransferCoins): unknown;
            fromPartial(object: Partial<_6.MsgForceTransferCoins>): _6.MsgForceTransferCoins;
            fromAmino(object: _6.MsgForceTransferCoinsAmino): _6.MsgForceTransferCoins;
            toAmino(message: _6.MsgForceTransferCoins): _6.MsgForceTransferCoinsAmino;
            fromAminoMsg(object: _6.MsgForceTransferCoinsAminoMsg): _6.MsgForceTransferCoins;
            fromProtoMsg(message: _6.MsgForceTransferCoinsProtoMsg): _6.MsgForceTransferCoins;
            toProto(message: _6.MsgForceTransferCoins): Uint8Array;
            toProtoMsg(message: _6.MsgForceTransferCoins): _6.MsgForceTransferCoinsProtoMsg;
        };
        MsgForceTransferCoinsResponse: {
            typeUrl: string;
            encode(_: _6.MsgForceTransferCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgForceTransferCoinsResponse;
            fromJSON(_: any): _6.MsgForceTransferCoinsResponse;
            toJSON(_: _6.MsgForceTransferCoinsResponse): unknown;
            fromPartial(_: Partial<_6.MsgForceTransferCoinsResponse>): _6.MsgForceTransferCoinsResponse;
            fromAmino(_: _6.MsgForceTransferCoinsResponseAmino): _6.MsgForceTransferCoinsResponse;
            toAmino(_: _6.MsgForceTransferCoinsResponse): _6.MsgForceTransferCoinsResponseAmino;
            fromAminoMsg(object: _6.MsgForceTransferCoinsResponseAminoMsg): _6.MsgForceTransferCoinsResponse;
            fromProtoMsg(message: _6.MsgForceTransferCoinsResponseProtoMsg): _6.MsgForceTransferCoinsResponse;
            toProto(message: _6.MsgForceTransferCoinsResponse): Uint8Array;
            toProtoMsg(message: _6.MsgForceTransferCoinsResponse): _6.MsgForceTransferCoinsResponseProtoMsg;
        };
        MsgSetDenomMetadata: {
            typeUrl: string;
            encode(message: _6.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgSetDenomMetadata;
            fromJSON(object: any): _6.MsgSetDenomMetadata;
            toJSON(message: _6.MsgSetDenomMetadata): unknown;
            fromPartial(object: Partial<_6.MsgSetDenomMetadata>): _6.MsgSetDenomMetadata;
            fromAmino(object: _6.MsgSetDenomMetadataAmino): _6.MsgSetDenomMetadata;
            toAmino(message: _6.MsgSetDenomMetadata): _6.MsgSetDenomMetadataAmino;
            fromAminoMsg(object: _6.MsgSetDenomMetadataAminoMsg): _6.MsgSetDenomMetadata;
            fromProtoMsg(message: _6.MsgSetDenomMetadataProtoMsg): _6.MsgSetDenomMetadata;
            toProto(message: _6.MsgSetDenomMetadata): Uint8Array;
            toProtoMsg(message: _6.MsgSetDenomMetadata): _6.MsgSetDenomMetadataProtoMsg;
        };
        MsgSetDenomMetadataResponse: {
            typeUrl: string;
            encode(_: _6.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgSetDenomMetadataResponse;
            fromJSON(_: any): _6.MsgSetDenomMetadataResponse;
            toJSON(_: _6.MsgSetDenomMetadataResponse): unknown;
            fromPartial(_: Partial<_6.MsgSetDenomMetadataResponse>): _6.MsgSetDenomMetadataResponse;
            fromAmino(_: _6.MsgSetDenomMetadataResponseAmino): _6.MsgSetDenomMetadataResponse;
            toAmino(_: _6.MsgSetDenomMetadataResponse): _6.MsgSetDenomMetadataResponseAmino;
            fromAminoMsg(object: _6.MsgSetDenomMetadataResponseAminoMsg): _6.MsgSetDenomMetadataResponse;
            fromProtoMsg(message: _6.MsgSetDenomMetadataResponseProtoMsg): _6.MsgSetDenomMetadataResponse;
            toProto(message: _6.MsgSetDenomMetadataResponse): Uint8Array;
            toProtoMsg(message: _6.MsgSetDenomMetadataResponse): _6.MsgSetDenomMetadataResponseProtoMsg;
        };
        MsgCreateTask: {
            typeUrl: string;
            encode(message: _6.MsgCreateTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgCreateTask;
            fromJSON(object: any): _6.MsgCreateTask;
            toJSON(message: _6.MsgCreateTask): unknown;
            fromPartial(object: Partial<_6.MsgCreateTask>): _6.MsgCreateTask;
            fromAmino(object: _6.MsgCreateTaskAmino): _6.MsgCreateTask;
            toAmino(message: _6.MsgCreateTask): _6.MsgCreateTaskAmino;
            fromAminoMsg(object: _6.MsgCreateTaskAminoMsg): _6.MsgCreateTask;
            fromProtoMsg(message: _6.MsgCreateTaskProtoMsg): _6.MsgCreateTask;
            toProto(message: _6.MsgCreateTask): Uint8Array;
            toProtoMsg(message: _6.MsgCreateTask): _6.MsgCreateTaskProtoMsg;
        };
        MsgCreateTaskResponse: {
            typeUrl: string;
            encode(message: _6.MsgCreateTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgCreateTaskResponse;
            fromJSON(object: any): _6.MsgCreateTaskResponse;
            toJSON(message: _6.MsgCreateTaskResponse): unknown;
            fromPartial(object: Partial<_6.MsgCreateTaskResponse>): _6.MsgCreateTaskResponse;
            fromAmino(object: _6.MsgCreateTaskResponseAmino): _6.MsgCreateTaskResponse;
            toAmino(message: _6.MsgCreateTaskResponse): _6.MsgCreateTaskResponseAmino;
            fromAminoMsg(object: _6.MsgCreateTaskResponseAminoMsg): _6.MsgCreateTaskResponse;
            fromProtoMsg(message: _6.MsgCreateTaskResponseProtoMsg): _6.MsgCreateTaskResponse;
            toProto(message: _6.MsgCreateTaskResponse): Uint8Array;
            toProtoMsg(message: _6.MsgCreateTaskResponse): _6.MsgCreateTaskResponseProtoMsg;
        };
        MsgDeleteTask: {
            typeUrl: string;
            encode(message: _6.MsgDeleteTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgDeleteTask;
            fromJSON(object: any): _6.MsgDeleteTask;
            toJSON(message: _6.MsgDeleteTask): unknown;
            fromPartial(object: Partial<_6.MsgDeleteTask>): _6.MsgDeleteTask;
            fromAmino(object: _6.MsgDeleteTaskAmino): _6.MsgDeleteTask;
            toAmino(message: _6.MsgDeleteTask): _6.MsgDeleteTaskAmino;
            fromAminoMsg(object: _6.MsgDeleteTaskAminoMsg): _6.MsgDeleteTask;
            fromProtoMsg(message: _6.MsgDeleteTaskProtoMsg): _6.MsgDeleteTask;
            toProto(message: _6.MsgDeleteTask): Uint8Array;
            toProtoMsg(message: _6.MsgDeleteTask): _6.MsgDeleteTaskProtoMsg;
        };
        MsgDeleteTaskResponse: {
            typeUrl: string;
            encode(_: _6.MsgDeleteTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.MsgDeleteTaskResponse;
            fromJSON(_: any): _6.MsgDeleteTaskResponse;
            toJSON(_: _6.MsgDeleteTaskResponse): unknown;
            fromPartial(_: Partial<_6.MsgDeleteTaskResponse>): _6.MsgDeleteTaskResponse;
            fromAmino(_: _6.MsgDeleteTaskResponseAmino): _6.MsgDeleteTaskResponse;
            toAmino(_: _6.MsgDeleteTaskResponse): _6.MsgDeleteTaskResponseAmino;
            fromAminoMsg(object: _6.MsgDeleteTaskResponseAminoMsg): _6.MsgDeleteTaskResponse;
            fromProtoMsg(message: _6.MsgDeleteTaskResponseProtoMsg): _6.MsgDeleteTaskResponse;
            toProto(message: _6.MsgDeleteTaskResponse): Uint8Array;
            toProtoMsg(message: _6.MsgDeleteTaskResponse): _6.MsgDeleteTaskResponseProtoMsg;
        };
        Cosmos_basev1beta1Msg_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
        Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
        Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        Task: {
            typeUrl: string;
            encode(message: _5.Task, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.Task;
            fromJSON(object: any): _5.Task;
            toJSON(message: _5.Task): unknown;
            fromPartial(object: Partial<_5.Task>): _5.Task;
            fromAmino(object: _5.TaskAmino): _5.Task;
            toAmino(message: _5.Task): _5.TaskAmino;
            fromAminoMsg(object: _5.TaskAminoMsg): _5.Task;
            fromProtoMsg(message: _5.TaskProtoMsg): _5.Task;
            toProto(message: _5.Task): Uint8Array;
            toProtoMsg(message: _5.Task): _5.TaskProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _4.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.QueryParamsRequest;
            fromJSON(_: any): _4.QueryParamsRequest;
            toJSON(_: _4.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
            fromAmino(_: _4.QueryParamsRequestAmino): _4.QueryParamsRequest;
            toAmino(_: _4.QueryParamsRequest): _4.QueryParamsRequestAmino;
            fromAminoMsg(object: _4.QueryParamsRequestAminoMsg): _4.QueryParamsRequest;
            fromProtoMsg(message: _4.QueryParamsRequestProtoMsg): _4.QueryParamsRequest;
            toProto(message: _4.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _4.QueryParamsRequest): _4.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _4.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.QueryParamsResponse;
            fromJSON(object: any): _4.QueryParamsResponse;
            toJSON(message: _4.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
            fromAmino(object: _4.QueryParamsResponseAmino): _4.QueryParamsResponse;
            toAmino(message: _4.QueryParamsResponse): _4.QueryParamsResponseAmino;
            fromAminoMsg(object: _4.QueryParamsResponseAminoMsg): _4.QueryParamsResponse;
            fromProtoMsg(message: _4.QueryParamsResponseProtoMsg): _4.QueryParamsResponse;
            toProto(message: _4.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _4.QueryParamsResponse): _4.QueryParamsResponseProtoMsg;
        };
        EndpointsRequest: {
            typeUrl: string;
            encode(_: _4.EndpointsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.EndpointsRequest;
            fromJSON(_: any): _4.EndpointsRequest;
            toJSON(_: _4.EndpointsRequest): unknown;
            fromPartial(_: Partial<_4.EndpointsRequest>): _4.EndpointsRequest;
            fromAmino(_: _4.EndpointsRequestAmino): _4.EndpointsRequest;
            toAmino(_: _4.EndpointsRequest): _4.EndpointsRequestAmino;
            fromAminoMsg(object: _4.EndpointsRequestAminoMsg): _4.EndpointsRequest;
            fromProtoMsg(message: _4.EndpointsRequestProtoMsg): _4.EndpointsRequest;
            toProto(message: _4.EndpointsRequest): Uint8Array;
            toProtoMsg(message: _4.EndpointsRequest): _4.EndpointsRequestProtoMsg;
        };
        EndpointsResponse: {
            typeUrl: string;
            encode(message: _4.EndpointsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.EndpointsResponse;
            fromJSON(object: any): _4.EndpointsResponse;
            toJSON(message: _4.EndpointsResponse): unknown;
            fromPartial(object: Partial<_4.EndpointsResponse>): _4.EndpointsResponse;
            fromAmino(object: _4.EndpointsResponseAmino): _4.EndpointsResponse;
            toAmino(message: _4.EndpointsResponse): _4.EndpointsResponseAmino;
            fromAminoMsg(object: _4.EndpointsResponseAminoMsg): _4.EndpointsResponse;
            fromProtoMsg(message: _4.EndpointsResponseProtoMsg): _4.EndpointsResponse;
            toProto(message: _4.EndpointsResponse): Uint8Array;
            toProtoMsg(message: _4.EndpointsResponse): _4.EndpointsResponseProtoMsg;
        };
        QueryGetTaskRequest: {
            typeUrl: string;
            encode(message: _4.QueryGetTaskRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.QueryGetTaskRequest;
            fromJSON(object: any): _4.QueryGetTaskRequest;
            toJSON(message: _4.QueryGetTaskRequest): unknown;
            fromPartial(object: Partial<_4.QueryGetTaskRequest>): _4.QueryGetTaskRequest;
            fromAmino(object: _4.QueryGetTaskRequestAmino): _4.QueryGetTaskRequest;
            toAmino(message: _4.QueryGetTaskRequest): _4.QueryGetTaskRequestAmino;
            fromAminoMsg(object: _4.QueryGetTaskRequestAminoMsg): _4.QueryGetTaskRequest;
            fromProtoMsg(message: _4.QueryGetTaskRequestProtoMsg): _4.QueryGetTaskRequest;
            toProto(message: _4.QueryGetTaskRequest): Uint8Array;
            toProtoMsg(message: _4.QueryGetTaskRequest): _4.QueryGetTaskRequestProtoMsg;
        };
        QueryGetTaskResponse: {
            typeUrl: string;
            encode(message: _4.QueryGetTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.QueryGetTaskResponse;
            fromJSON(object: any): _4.QueryGetTaskResponse;
            toJSON(message: _4.QueryGetTaskResponse): unknown;
            fromPartial(object: Partial<_4.QueryGetTaskResponse>): _4.QueryGetTaskResponse;
            fromAmino(object: _4.QueryGetTaskResponseAmino): _4.QueryGetTaskResponse;
            toAmino(message: _4.QueryGetTaskResponse): _4.QueryGetTaskResponseAmino;
            fromAminoMsg(object: _4.QueryGetTaskResponseAminoMsg): _4.QueryGetTaskResponse;
            fromProtoMsg(message: _4.QueryGetTaskResponseProtoMsg): _4.QueryGetTaskResponse;
            toProto(message: _4.QueryGetTaskResponse): Uint8Array;
            toProtoMsg(message: _4.QueryGetTaskResponse): _4.QueryGetTaskResponseProtoMsg;
        };
        QueryAllTaskRequest: {
            typeUrl: string;
            encode(message: _4.QueryAllTaskRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.QueryAllTaskRequest;
            fromJSON(object: any): _4.QueryAllTaskRequest;
            toJSON(message: _4.QueryAllTaskRequest): unknown;
            fromPartial(object: Partial<_4.QueryAllTaskRequest>): _4.QueryAllTaskRequest;
            fromAmino(object: _4.QueryAllTaskRequestAmino): _4.QueryAllTaskRequest;
            toAmino(message: _4.QueryAllTaskRequest): _4.QueryAllTaskRequestAmino;
            fromAminoMsg(object: _4.QueryAllTaskRequestAminoMsg): _4.QueryAllTaskRequest;
            fromProtoMsg(message: _4.QueryAllTaskRequestProtoMsg): _4.QueryAllTaskRequest;
            toProto(message: _4.QueryAllTaskRequest): Uint8Array;
            toProtoMsg(message: _4.QueryAllTaskRequest): _4.QueryAllTaskRequestProtoMsg;
        };
        QueryAllTaskResponse: {
            typeUrl: string;
            encode(message: _4.QueryAllTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.QueryAllTaskResponse;
            fromJSON(object: any): _4.QueryAllTaskResponse;
            toJSON(message: _4.QueryAllTaskResponse): unknown;
            fromPartial(object: Partial<_4.QueryAllTaskResponse>): _4.QueryAllTaskResponse;
            fromAmino(object: _4.QueryAllTaskResponseAmino): _4.QueryAllTaskResponse;
            toAmino(message: _4.QueryAllTaskResponse): _4.QueryAllTaskResponseAmino;
            fromAminoMsg(object: _4.QueryAllTaskResponseAminoMsg): _4.QueryAllTaskResponse;
            fromProtoMsg(message: _4.QueryAllTaskResponseProtoMsg): _4.QueryAllTaskResponse;
            toProto(message: _4.QueryAllTaskResponse): Uint8Array;
            toProtoMsg(message: _4.QueryAllTaskResponse): _4.QueryAllTaskResponseProtoMsg;
        };
        QueryGetFutureTaskRequest: {
            typeUrl: string;
            encode(message: _4.QueryGetFutureTaskRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.QueryGetFutureTaskRequest;
            fromJSON(object: any): _4.QueryGetFutureTaskRequest;
            toJSON(message: _4.QueryGetFutureTaskRequest): unknown;
            fromPartial(object: Partial<_4.QueryGetFutureTaskRequest>): _4.QueryGetFutureTaskRequest;
            fromAmino(object: _4.QueryGetFutureTaskRequestAmino): _4.QueryGetFutureTaskRequest;
            toAmino(message: _4.QueryGetFutureTaskRequest): _4.QueryGetFutureTaskRequestAmino;
            fromAminoMsg(object: _4.QueryGetFutureTaskRequestAminoMsg): _4.QueryGetFutureTaskRequest;
            fromProtoMsg(message: _4.QueryGetFutureTaskRequestProtoMsg): _4.QueryGetFutureTaskRequest;
            toProto(message: _4.QueryGetFutureTaskRequest): Uint8Array;
            toProtoMsg(message: _4.QueryGetFutureTaskRequest): _4.QueryGetFutureTaskRequestProtoMsg;
        };
        QueryGetFutureTaskResponse: {
            typeUrl: string;
            encode(message: _4.QueryGetFutureTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.QueryGetFutureTaskResponse;
            fromJSON(object: any): _4.QueryGetFutureTaskResponse;
            toJSON(message: _4.QueryGetFutureTaskResponse): unknown;
            fromPartial(object: Partial<_4.QueryGetFutureTaskResponse>): _4.QueryGetFutureTaskResponse;
            fromAmino(object: _4.QueryGetFutureTaskResponseAmino): _4.QueryGetFutureTaskResponse;
            toAmino(message: _4.QueryGetFutureTaskResponse): _4.QueryGetFutureTaskResponseAmino;
            fromAminoMsg(object: _4.QueryGetFutureTaskResponseAminoMsg): _4.QueryGetFutureTaskResponse;
            fromProtoMsg(message: _4.QueryGetFutureTaskResponseProtoMsg): _4.QueryGetFutureTaskResponse;
            toProto(message: _4.QueryGetFutureTaskResponse): Uint8Array;
            toProtoMsg(message: _4.QueryGetFutureTaskResponse): _4.QueryGetFutureTaskResponseProtoMsg;
        };
        QueryAllFutureTaskRequest: {
            typeUrl: string;
            encode(message: _4.QueryAllFutureTaskRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.QueryAllFutureTaskRequest;
            fromJSON(object: any): _4.QueryAllFutureTaskRequest;
            toJSON(message: _4.QueryAllFutureTaskRequest): unknown;
            fromPartial(object: Partial<_4.QueryAllFutureTaskRequest>): _4.QueryAllFutureTaskRequest;
            fromAmino(object: _4.QueryAllFutureTaskRequestAmino): _4.QueryAllFutureTaskRequest;
            toAmino(message: _4.QueryAllFutureTaskRequest): _4.QueryAllFutureTaskRequestAmino;
            fromAminoMsg(object: _4.QueryAllFutureTaskRequestAminoMsg): _4.QueryAllFutureTaskRequest;
            fromProtoMsg(message: _4.QueryAllFutureTaskRequestProtoMsg): _4.QueryAllFutureTaskRequest;
            toProto(message: _4.QueryAllFutureTaskRequest): Uint8Array;
            toProtoMsg(message: _4.QueryAllFutureTaskRequest): _4.QueryAllFutureTaskRequestProtoMsg;
        };
        QueryAllFutureTaskResponse: {
            typeUrl: string;
            encode(message: _4.QueryAllFutureTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.QueryAllFutureTaskResponse;
            fromJSON(object: any): _4.QueryAllFutureTaskResponse;
            toJSON(message: _4.QueryAllFutureTaskResponse): unknown;
            fromPartial(object: Partial<_4.QueryAllFutureTaskResponse>): _4.QueryAllFutureTaskResponse;
            fromAmino(object: _4.QueryAllFutureTaskResponseAmino): _4.QueryAllFutureTaskResponse;
            toAmino(message: _4.QueryAllFutureTaskResponse): _4.QueryAllFutureTaskResponseAmino;
            fromAminoMsg(object: _4.QueryAllFutureTaskResponseAminoMsg): _4.QueryAllFutureTaskResponse;
            fromProtoMsg(message: _4.QueryAllFutureTaskResponseProtoMsg): _4.QueryAllFutureTaskResponse;
            toProto(message: _4.QueryAllFutureTaskResponse): Uint8Array;
            toProtoMsg(message: _4.QueryAllFutureTaskResponse): _4.QueryAllFutureTaskResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _3.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.Params;
            fromJSON(_: any): _3.Params;
            toJSON(_: _3.Params): unknown;
            fromPartial(_: Partial<_3.Params>): _3.Params;
            fromAmino(_: _3.ParamsAmino): _3.Params;
            toAmino(_: _3.Params): _3.ParamsAmino;
            fromAminoMsg(object: _3.ParamsAminoMsg): _3.Params;
            toAminoMsg(message: _3.Params): _3.ParamsAminoMsg;
            fromProtoMsg(message: _3.ParamsProtoMsg): _3.Params;
            toProto(message: _3.Params): Uint8Array;
            toProtoMsg(message: _3.Params): _3.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _2.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _2.GenesisState;
            fromJSON(object: any): _2.GenesisState;
            toJSON(message: _2.GenesisState): unknown;
            fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
            fromAmino(object: _2.GenesisStateAmino): _2.GenesisState;
            toAmino(message: _2.GenesisState): _2.GenesisStateAmino;
            fromAminoMsg(object: _2.GenesisStateAminoMsg): _2.GenesisState;
            fromProtoMsg(message: _2.GenesisStateProtoMsg): _2.GenesisState;
            toProto(message: _2.GenesisState): Uint8Array;
            toProtoMsg(message: _2.GenesisState): _2.GenesisStateProtoMsg;
        };
        futureTaskStatusFromJSON(object: any): _1.FutureTaskStatus;
        futureTaskStatusToJSON(object: _1.FutureTaskStatus): string;
        FutureTaskStatus: typeof _1.FutureTaskStatus;
        FutureTaskStatusSDKType: typeof _1.FutureTaskStatus;
        FutureTaskStatusAmino: typeof _1.FutureTaskStatus;
        FutureTask: {
            typeUrl: string;
            encode(message: _1.FutureTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _1.FutureTask;
            fromJSON(object: any): _1.FutureTask;
            toJSON(message: _1.FutureTask): unknown;
            fromPartial(object: Partial<_1.FutureTask>): _1.FutureTask;
            fromAmino(object: _1.FutureTaskAmino): _1.FutureTask;
            toAmino(message: _1.FutureTask): _1.FutureTaskAmino;
            fromAminoMsg(object: _1.FutureTaskAminoMsg): _1.FutureTask;
            fromProtoMsg(message: _1.FutureTaskProtoMsg): _1.FutureTask;
            toProto(message: _1.FutureTask): Uint8Array;
            toProtoMsg(message: _1.FutureTask): _1.FutureTaskProtoMsg;
        };
    };
    const script: {
        Msg: typeof _194.Msg;
        Query: typeof _191.Query;
        QueryClientImpl: typeof _191.QueryClientImpl;
        LCDQueryClient: typeof _188.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _12.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createScript(value: _12.MsgCreateScript): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateScript(value: _12.MsgUpdateScript): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                run(value: _12.MsgRun): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _12.MsgUpdateParams): {
                    typeUrl: string;
                    value: _12.MsgUpdateParams;
                };
                createScript(value: _12.MsgCreateScript): {
                    typeUrl: string;
                    value: _12.MsgCreateScript;
                };
                updateScript(value: _12.MsgUpdateScript): {
                    typeUrl: string;
                    value: _12.MsgUpdateScript;
                };
                run(value: _12.MsgRun): {
                    typeUrl: string;
                    value: _12.MsgRun;
                };
            };
            toJSON: {
                updateParams(value: _12.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
                createScript(value: _12.MsgCreateScript): {
                    typeUrl: string;
                    value: unknown;
                };
                updateScript(value: _12.MsgUpdateScript): {
                    typeUrl: string;
                    value: unknown;
                };
                run(value: _12.MsgRun): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _12.MsgUpdateParams;
                };
                createScript(value: any): {
                    typeUrl: string;
                    value: _12.MsgCreateScript;
                };
                updateScript(value: any): {
                    typeUrl: string;
                    value: _12.MsgUpdateScript;
                };
                run(value: any): {
                    typeUrl: string;
                    value: _12.MsgRun;
                };
            };
            fromPartial: {
                updateParams(value: _12.MsgUpdateParams): {
                    typeUrl: string;
                    value: _12.MsgUpdateParams;
                };
                createScript(value: _12.MsgCreateScript): {
                    typeUrl: string;
                    value: _12.MsgCreateScript;
                };
                updateScript(value: _12.MsgUpdateScript): {
                    typeUrl: string;
                    value: _12.MsgUpdateScript;
                };
                run(value: _12.MsgRun): {
                    typeUrl: string;
                    value: _12.MsgRun;
                };
            };
        };
        AminoConverter: {
            "/blit.script.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _12.MsgUpdateParams) => _12.MsgUpdateParamsAmino;
                fromAmino: (object: _12.MsgUpdateParamsAmino) => _12.MsgUpdateParams;
            };
            "/blit.script.MsgCreateScript": {
                aminoType: string;
                toAmino: (message: _12.MsgCreateScript) => _12.MsgCreateScriptAmino;
                fromAmino: (object: _12.MsgCreateScriptAmino) => _12.MsgCreateScript;
            };
            "/blit.script.MsgUpdateScript": {
                aminoType: string;
                toAmino: (message: _12.MsgUpdateScript) => _12.MsgUpdateScriptAmino;
                fromAmino: (object: _12.MsgUpdateScriptAmino) => _12.MsgUpdateScript;
            };
            "/blit.script.MsgRun": {
                aminoType: string;
                toAmino: (message: _12.MsgRun) => _12.MsgRunAmino;
                fromAmino: (object: _12.MsgRunAmino) => _12.MsgRun;
            };
        };
        protobufPackage: "blit.script";
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _12.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgUpdateParams;
            fromJSON(object: any): _12.MsgUpdateParams;
            toJSON(message: _12.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_12.MsgUpdateParams>): _12.MsgUpdateParams;
            fromAmino(object: _12.MsgUpdateParamsAmino): _12.MsgUpdateParams;
            toAmino(message: _12.MsgUpdateParams): _12.MsgUpdateParamsAmino;
            fromAminoMsg(object: _12.MsgUpdateParamsAminoMsg): _12.MsgUpdateParams;
            toAminoMsg(message: _12.MsgUpdateParams): _12.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _12.MsgUpdateParamsProtoMsg): _12.MsgUpdateParams;
            toProto(message: _12.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _12.MsgUpdateParams): _12.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _12.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgUpdateParamsResponse;
            fromJSON(_: any): _12.MsgUpdateParamsResponse;
            toJSON(_: _12.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_12.MsgUpdateParamsResponse>): _12.MsgUpdateParamsResponse;
            fromAmino(_: _12.MsgUpdateParamsResponseAmino): _12.MsgUpdateParamsResponse;
            toAmino(_: _12.MsgUpdateParamsResponse): _12.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _12.MsgUpdateParamsResponseAminoMsg): _12.MsgUpdateParamsResponse;
            fromProtoMsg(message: _12.MsgUpdateParamsResponseProtoMsg): _12.MsgUpdateParamsResponse;
            toProto(message: _12.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _12.MsgUpdateParamsResponse): _12.MsgUpdateParamsResponseProtoMsg;
        };
        MsgCreateScript: {
            typeUrl: string;
            encode(message: _12.MsgCreateScript, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgCreateScript;
            fromJSON(object: any): _12.MsgCreateScript;
            toJSON(message: _12.MsgCreateScript): unknown;
            fromPartial(object: Partial<_12.MsgCreateScript>): _12.MsgCreateScript;
            fromAmino(object: _12.MsgCreateScriptAmino): _12.MsgCreateScript;
            toAmino(message: _12.MsgCreateScript): _12.MsgCreateScriptAmino;
            fromAminoMsg(object: _12.MsgCreateScriptAminoMsg): _12.MsgCreateScript;
            fromProtoMsg(message: _12.MsgCreateScriptProtoMsg): _12.MsgCreateScript;
            toProto(message: _12.MsgCreateScript): Uint8Array;
            toProtoMsg(message: _12.MsgCreateScript): _12.MsgCreateScriptProtoMsg;
        };
        MsgCreateScriptResponse: {
            typeUrl: string;
            encode(message: _12.MsgCreateScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgCreateScriptResponse;
            fromJSON(object: any): _12.MsgCreateScriptResponse;
            toJSON(message: _12.MsgCreateScriptResponse): unknown;
            fromPartial(object: Partial<_12.MsgCreateScriptResponse>): _12.MsgCreateScriptResponse;
            fromAmino(object: _12.MsgCreateScriptResponseAmino): _12.MsgCreateScriptResponse;
            toAmino(message: _12.MsgCreateScriptResponse): _12.MsgCreateScriptResponseAmino;
            fromAminoMsg(object: _12.MsgCreateScriptResponseAminoMsg): _12.MsgCreateScriptResponse;
            fromProtoMsg(message: _12.MsgCreateScriptResponseProtoMsg): _12.MsgCreateScriptResponse;
            toProto(message: _12.MsgCreateScriptResponse): Uint8Array;
            toProtoMsg(message: _12.MsgCreateScriptResponse): _12.MsgCreateScriptResponseProtoMsg;
        };
        MsgUpdateScript: {
            typeUrl: string;
            encode(message: _12.MsgUpdateScript, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgUpdateScript;
            fromJSON(object: any): _12.MsgUpdateScript;
            toJSON(message: _12.MsgUpdateScript): unknown;
            fromPartial(object: Partial<_12.MsgUpdateScript>): _12.MsgUpdateScript;
            fromAmino(object: _12.MsgUpdateScriptAmino): _12.MsgUpdateScript;
            toAmino(message: _12.MsgUpdateScript): _12.MsgUpdateScriptAmino;
            fromAminoMsg(object: _12.MsgUpdateScriptAminoMsg): _12.MsgUpdateScript;
            fromProtoMsg(message: _12.MsgUpdateScriptProtoMsg): _12.MsgUpdateScript;
            toProto(message: _12.MsgUpdateScript): Uint8Array;
            toProtoMsg(message: _12.MsgUpdateScript): _12.MsgUpdateScriptProtoMsg;
        };
        MsgUpdateScriptResponse: {
            typeUrl: string;
            encode(message: _12.MsgUpdateScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgUpdateScriptResponse;
            fromJSON(object: any): _12.MsgUpdateScriptResponse;
            toJSON(message: _12.MsgUpdateScriptResponse): unknown;
            fromPartial(object: Partial<_12.MsgUpdateScriptResponse>): _12.MsgUpdateScriptResponse;
            fromAmino(object: _12.MsgUpdateScriptResponseAmino): _12.MsgUpdateScriptResponse;
            toAmino(message: _12.MsgUpdateScriptResponse): _12.MsgUpdateScriptResponseAmino;
            fromAminoMsg(object: _12.MsgUpdateScriptResponseAminoMsg): _12.MsgUpdateScriptResponse;
            fromProtoMsg(message: _12.MsgUpdateScriptResponseProtoMsg): _12.MsgUpdateScriptResponse;
            toProto(message: _12.MsgUpdateScriptResponse): Uint8Array;
            toProtoMsg(message: _12.MsgUpdateScriptResponse): _12.MsgUpdateScriptResponseProtoMsg;
        };
        MsgDeleteScript: {
            typeUrl: string;
            encode(message: _12.MsgDeleteScript, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgDeleteScript;
            fromJSON(object: any): _12.MsgDeleteScript;
            toJSON(message: _12.MsgDeleteScript): unknown;
            fromPartial(object: Partial<_12.MsgDeleteScript>): _12.MsgDeleteScript;
            fromAmino(object: _12.MsgDeleteScriptAmino): _12.MsgDeleteScript;
            toAmino(message: _12.MsgDeleteScript): _12.MsgDeleteScriptAmino;
            fromAminoMsg(object: _12.MsgDeleteScriptAminoMsg): _12.MsgDeleteScript;
            fromProtoMsg(message: _12.MsgDeleteScriptProtoMsg): _12.MsgDeleteScript;
            toProto(message: _12.MsgDeleteScript): Uint8Array;
            toProtoMsg(message: _12.MsgDeleteScript): _12.MsgDeleteScriptProtoMsg;
        };
        MsgDeleteScriptResponse: {
            typeUrl: string;
            encode(_: _12.MsgDeleteScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgDeleteScriptResponse;
            fromJSON(_: any): _12.MsgDeleteScriptResponse;
            toJSON(_: _12.MsgDeleteScriptResponse): unknown;
            fromPartial(_: Partial<_12.MsgDeleteScriptResponse>): _12.MsgDeleteScriptResponse;
            fromAmino(_: _12.MsgDeleteScriptResponseAmino): _12.MsgDeleteScriptResponse;
            toAmino(_: _12.MsgDeleteScriptResponse): _12.MsgDeleteScriptResponseAmino;
            fromAminoMsg(object: _12.MsgDeleteScriptResponseAminoMsg): _12.MsgDeleteScriptResponse;
            fromProtoMsg(message: _12.MsgDeleteScriptResponseProtoMsg): _12.MsgDeleteScriptResponse;
            toProto(message: _12.MsgDeleteScriptResponse): Uint8Array;
            toProtoMsg(message: _12.MsgDeleteScriptResponse): _12.MsgDeleteScriptResponseProtoMsg;
        };
        MsgRun: {
            typeUrl: string;
            encode(message: _12.MsgRun, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgRun;
            fromJSON(object: any): _12.MsgRun;
            toJSON(message: _12.MsgRun): unknown;
            fromPartial(object: Partial<_12.MsgRun>): _12.MsgRun;
            fromAmino(object: _12.MsgRunAmino): _12.MsgRun;
            toAmino(message: _12.MsgRun): _12.MsgRunAmino;
            fromAminoMsg(object: _12.MsgRunAminoMsg): _12.MsgRun;
            fromProtoMsg(message: _12.MsgRunProtoMsg): _12.MsgRun;
            toProto(message: _12.MsgRun): Uint8Array;
            toProtoMsg(message: _12.MsgRun): _12.MsgRunProtoMsg;
        };
        MsgRunResponse: {
            typeUrl: string;
            encode(message: _12.MsgRunResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgRunResponse;
            fromJSON(object: any): _12.MsgRunResponse;
            toJSON(message: _12.MsgRunResponse): unknown;
            fromPartial(object: Partial<_12.MsgRunResponse>): _12.MsgRunResponse;
            fromAmino(object: _12.MsgRunResponseAmino): _12.MsgRunResponse;
            toAmino(message: _12.MsgRunResponse): _12.MsgRunResponseAmino;
            fromAminoMsg(object: _12.MsgRunResponseAminoMsg): _12.MsgRunResponse;
            fromProtoMsg(message: _12.MsgRunResponseProtoMsg): _12.MsgRunResponse;
            toProto(message: _12.MsgRunResponse): Uint8Array;
            toProtoMsg(message: _12.MsgRunResponse): _12.MsgRunResponseProtoMsg;
        };
        Cosmos_basev1beta1Msg_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
        Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
        Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        Script: {
            typeUrl: string;
            encode(message: _11.Script, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.Script;
            fromJSON(object: any): _11.Script;
            toJSON(message: _11.Script): unknown;
            fromPartial(object: Partial<_11.Script>): _11.Script;
            fromAmino(object: _11.ScriptAmino): _11.Script;
            toAmino(message: _11.Script): _11.ScriptAmino;
            fromAminoMsg(object: _11.ScriptAminoMsg): _11.Script;
            fromProtoMsg(message: _11.ScriptProtoMsg): _11.Script;
            toProto(message: _11.Script): Uint8Array;
            toProtoMsg(message: _11.Script): _11.ScriptProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _10.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryParamsRequest;
            fromJSON(_: any): _10.QueryParamsRequest;
            toJSON(_: _10.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_10.QueryParamsRequest>): _10.QueryParamsRequest;
            fromAmino(_: _10.QueryParamsRequestAmino): _10.QueryParamsRequest;
            toAmino(_: _10.QueryParamsRequest): _10.QueryParamsRequestAmino;
            fromAminoMsg(object: _10.QueryParamsRequestAminoMsg): _10.QueryParamsRequest;
            fromProtoMsg(message: _10.QueryParamsRequestProtoMsg): _10.QueryParamsRequest;
            toProto(message: _10.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _10.QueryParamsRequest): _10.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _10.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryParamsResponse;
            fromJSON(object: any): _10.QueryParamsResponse;
            toJSON(message: _10.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_10.QueryParamsResponse>): _10.QueryParamsResponse;
            fromAmino(object: _10.QueryParamsResponseAmino): _10.QueryParamsResponse;
            toAmino(message: _10.QueryParamsResponse): _10.QueryParamsResponseAmino;
            fromAminoMsg(object: _10.QueryParamsResponseAminoMsg): _10.QueryParamsResponse;
            fromProtoMsg(message: _10.QueryParamsResponseProtoMsg): _10.QueryParamsResponse;
            toProto(message: _10.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _10.QueryParamsResponse): _10.QueryParamsResponseProtoMsg;
        };
        QueryScriptRequest: {
            typeUrl: string;
            encode(message: _10.QueryScriptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryScriptRequest;
            fromJSON(object: any): _10.QueryScriptRequest;
            toJSON(message: _10.QueryScriptRequest): unknown;
            fromPartial(object: Partial<_10.QueryScriptRequest>): _10.QueryScriptRequest;
            fromAmino(object: _10.QueryScriptRequestAmino): _10.QueryScriptRequest;
            toAmino(message: _10.QueryScriptRequest): _10.QueryScriptRequestAmino;
            fromAminoMsg(object: _10.QueryScriptRequestAminoMsg): _10.QueryScriptRequest;
            fromProtoMsg(message: _10.QueryScriptRequestProtoMsg): _10.QueryScriptRequest;
            toProto(message: _10.QueryScriptRequest): Uint8Array;
            toProtoMsg(message: _10.QueryScriptRequest): _10.QueryScriptRequestProtoMsg;
        };
        QueryScriptResponse: {
            typeUrl: string;
            encode(message: _10.QueryScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryScriptResponse;
            fromJSON(object: any): _10.QueryScriptResponse;
            toJSON(message: _10.QueryScriptResponse): unknown;
            fromPartial(object: Partial<_10.QueryScriptResponse>): _10.QueryScriptResponse;
            fromAmino(object: _10.QueryScriptResponseAmino): _10.QueryScriptResponse;
            toAmino(message: _10.QueryScriptResponse): _10.QueryScriptResponseAmino;
            fromAminoMsg(object: _10.QueryScriptResponseAminoMsg): _10.QueryScriptResponse;
            fromProtoMsg(message: _10.QueryScriptResponseProtoMsg): _10.QueryScriptResponse;
            toProto(message: _10.QueryScriptResponse): Uint8Array;
            toProtoMsg(message: _10.QueryScriptResponse): _10.QueryScriptResponseProtoMsg;
        };
        QueryScriptsRequest: {
            typeUrl: string;
            encode(message: _10.QueryScriptsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryScriptsRequest;
            fromJSON(object: any): _10.QueryScriptsRequest;
            toJSON(message: _10.QueryScriptsRequest): unknown;
            fromPartial(object: Partial<_10.QueryScriptsRequest>): _10.QueryScriptsRequest;
            fromAmino(object: _10.QueryScriptsRequestAmino): _10.QueryScriptsRequest;
            toAmino(message: _10.QueryScriptsRequest): _10.QueryScriptsRequestAmino;
            fromAminoMsg(object: _10.QueryScriptsRequestAminoMsg): _10.QueryScriptsRequest;
            fromProtoMsg(message: _10.QueryScriptsRequestProtoMsg): _10.QueryScriptsRequest;
            toProto(message: _10.QueryScriptsRequest): Uint8Array;
            toProtoMsg(message: _10.QueryScriptsRequest): _10.QueryScriptsRequestProtoMsg;
        };
        QueryScriptsResponse: {
            typeUrl: string;
            encode(message: _10.QueryScriptsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryScriptsResponse;
            fromJSON(object: any): _10.QueryScriptsResponse;
            toJSON(message: _10.QueryScriptsResponse): unknown;
            fromPartial(object: Partial<_10.QueryScriptsResponse>): _10.QueryScriptsResponse;
            fromAmino(object: _10.QueryScriptsResponseAmino): _10.QueryScriptsResponse;
            toAmino(message: _10.QueryScriptsResponse): _10.QueryScriptsResponseAmino;
            fromAminoMsg(object: _10.QueryScriptsResponseAminoMsg): _10.QueryScriptsResponse;
            fromProtoMsg(message: _10.QueryScriptsResponseProtoMsg): _10.QueryScriptsResponse;
            toProto(message: _10.QueryScriptsResponse): Uint8Array;
            toProtoMsg(message: _10.QueryScriptsResponse): _10.QueryScriptsResponseProtoMsg;
        };
        QueryWebRequest: {
            typeUrl: string;
            encode(message: _10.QueryWebRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryWebRequest;
            fromJSON(object: any): _10.QueryWebRequest;
            toJSON(message: _10.QueryWebRequest): unknown;
            fromPartial(object: Partial<_10.QueryWebRequest>): _10.QueryWebRequest;
            fromAmino(object: _10.QueryWebRequestAmino): _10.QueryWebRequest;
            toAmino(message: _10.QueryWebRequest): _10.QueryWebRequestAmino;
            fromAminoMsg(object: _10.QueryWebRequestAminoMsg): _10.QueryWebRequest;
            fromProtoMsg(message: _10.QueryWebRequestProtoMsg): _10.QueryWebRequest;
            toProto(message: _10.QueryWebRequest): Uint8Array;
            toProtoMsg(message: _10.QueryWebRequest): _10.QueryWebRequestProtoMsg;
        };
        QueryWebResponse: {
            typeUrl: string;
            encode(message: _10.QueryWebResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryWebResponse;
            fromJSON(object: any): _10.QueryWebResponse;
            toJSON(message: _10.QueryWebResponse): unknown;
            fromPartial(object: Partial<_10.QueryWebResponse>): _10.QueryWebResponse;
            fromAmino(object: _10.QueryWebResponseAmino): _10.QueryWebResponse;
            toAmino(message: _10.QueryWebResponse): _10.QueryWebResponseAmino;
            fromAminoMsg(object: _10.QueryWebResponseAminoMsg): _10.QueryWebResponse;
            fromProtoMsg(message: _10.QueryWebResponseProtoMsg): _10.QueryWebResponse;
            toProto(message: _10.QueryWebResponse): Uint8Array;
            toProtoMsg(message: _10.QueryWebResponse): _10.QueryWebResponseProtoMsg;
        };
        QueryEvalRequest: {
            typeUrl: string;
            encode(message: _10.QueryEvalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryEvalRequest;
            fromJSON(object: any): _10.QueryEvalRequest;
            toJSON(message: _10.QueryEvalRequest): unknown;
            fromPartial(object: Partial<_10.QueryEvalRequest>): _10.QueryEvalRequest;
            fromAmino(object: _10.QueryEvalRequestAmino): _10.QueryEvalRequest;
            toAmino(message: _10.QueryEvalRequest): _10.QueryEvalRequestAmino;
            fromAminoMsg(object: _10.QueryEvalRequestAminoMsg): _10.QueryEvalRequest;
            fromProtoMsg(message: _10.QueryEvalRequestProtoMsg): _10.QueryEvalRequest;
            toProto(message: _10.QueryEvalRequest): Uint8Array;
            toProtoMsg(message: _10.QueryEvalRequest): _10.QueryEvalRequestProtoMsg;
        };
        QueryEvalResponse: {
            typeUrl: string;
            encode(message: _10.QueryEvalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryEvalResponse;
            fromJSON(object: any): _10.QueryEvalResponse;
            toJSON(message: _10.QueryEvalResponse): unknown;
            fromPartial(object: Partial<_10.QueryEvalResponse>): _10.QueryEvalResponse;
            fromAmino(object: _10.QueryEvalResponseAmino): _10.QueryEvalResponse;
            toAmino(message: _10.QueryEvalResponse): _10.QueryEvalResponseAmino;
            fromAminoMsg(object: _10.QueryEvalResponseAminoMsg): _10.QueryEvalResponse;
            fromProtoMsg(message: _10.QueryEvalResponseProtoMsg): _10.QueryEvalResponse;
            toProto(message: _10.QueryEvalResponse): Uint8Array;
            toProtoMsg(message: _10.QueryEvalResponse): _10.QueryEvalResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _9.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _9.Params;
            fromJSON(_: any): _9.Params;
            toJSON(_: _9.Params): unknown;
            fromPartial(_: Partial<_9.Params>): _9.Params;
            fromAmino(_: _9.ParamsAmino): _9.Params;
            toAmino(_: _9.Params): _9.ParamsAmino;
            fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
            toAminoMsg(message: _9.Params): _9.ParamsAminoMsg;
            fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
            toProto(message: _9.Params): Uint8Array;
            toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _7.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.GenesisState;
            fromJSON(object: any): _7.GenesisState;
            toJSON(message: _7.GenesisState): unknown;
            fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
            fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
            toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
            fromAminoMsg(object: _7.GenesisStateAminoMsg): _7.GenesisState;
            fromProtoMsg(message: _7.GenesisStateProtoMsg): _7.GenesisState;
            toProto(message: _7.GenesisState): Uint8Array;
            toProtoMsg(message: _7.GenesisState): _7.GenesisStateProtoMsg;
        };
    };
    const storage: {
        Msg: typeof _195.Msg;
        Query: typeof _192.Query;
        QueryClientImpl: typeof _192.QueryClientImpl;
        LCDQueryClient: typeof _189.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _17.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createStorage(value: _17.MsgCreateStorage): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateStorage(value: _17.MsgUpdateStorage): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteStorage(value: _17.MsgDeleteStorage): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _17.MsgUpdateParams): {
                    typeUrl: string;
                    value: _17.MsgUpdateParams;
                };
                createStorage(value: _17.MsgCreateStorage): {
                    typeUrl: string;
                    value: _17.MsgCreateStorage;
                };
                updateStorage(value: _17.MsgUpdateStorage): {
                    typeUrl: string;
                    value: _17.MsgUpdateStorage;
                };
                deleteStorage(value: _17.MsgDeleteStorage): {
                    typeUrl: string;
                    value: _17.MsgDeleteStorage;
                };
            };
            toJSON: {
                updateParams(value: _17.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
                createStorage(value: _17.MsgCreateStorage): {
                    typeUrl: string;
                    value: unknown;
                };
                updateStorage(value: _17.MsgUpdateStorage): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteStorage(value: _17.MsgDeleteStorage): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _17.MsgUpdateParams;
                };
                createStorage(value: any): {
                    typeUrl: string;
                    value: _17.MsgCreateStorage;
                };
                updateStorage(value: any): {
                    typeUrl: string;
                    value: _17.MsgUpdateStorage;
                };
                deleteStorage(value: any): {
                    typeUrl: string;
                    value: _17.MsgDeleteStorage;
                };
            };
            fromPartial: {
                updateParams(value: _17.MsgUpdateParams): {
                    typeUrl: string;
                    value: _17.MsgUpdateParams;
                };
                createStorage(value: _17.MsgCreateStorage): {
                    typeUrl: string;
                    value: _17.MsgCreateStorage;
                };
                updateStorage(value: _17.MsgUpdateStorage): {
                    typeUrl: string;
                    value: _17.MsgUpdateStorage;
                };
                deleteStorage(value: _17.MsgDeleteStorage): {
                    typeUrl: string;
                    value: _17.MsgDeleteStorage;
                };
            };
        };
        AminoConverter: {
            "/blit.storage.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _17.MsgUpdateParams) => _17.MsgUpdateParamsAmino;
                fromAmino: (object: _17.MsgUpdateParamsAmino) => _17.MsgUpdateParams;
            };
            "/blit.storage.MsgCreateStorage": {
                aminoType: string;
                toAmino: (message: _17.MsgCreateStorage) => _17.MsgCreateStorageAmino;
                fromAmino: (object: _17.MsgCreateStorageAmino) => _17.MsgCreateStorage;
            };
            "/blit.storage.MsgUpdateStorage": {
                aminoType: string;
                toAmino: (message: _17.MsgUpdateStorage) => _17.MsgUpdateStorageAmino;
                fromAmino: (object: _17.MsgUpdateStorageAmino) => _17.MsgUpdateStorage;
            };
            "/blit.storage.MsgDeleteStorage": {
                aminoType: string;
                toAmino: (message: _17.MsgDeleteStorage) => _17.MsgDeleteStorageAmino;
                fromAmino: (object: _17.MsgDeleteStorageAmino) => _17.MsgDeleteStorage;
            };
        };
        protobufPackage: "blit.storage";
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _17.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.MsgUpdateParams;
            fromJSON(object: any): _17.MsgUpdateParams;
            toJSON(message: _17.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_17.MsgUpdateParams>): _17.MsgUpdateParams;
            fromAmino(object: _17.MsgUpdateParamsAmino): _17.MsgUpdateParams;
            toAmino(message: _17.MsgUpdateParams): _17.MsgUpdateParamsAmino;
            fromAminoMsg(object: _17.MsgUpdateParamsAminoMsg): _17.MsgUpdateParams;
            toAminoMsg(message: _17.MsgUpdateParams): _17.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _17.MsgUpdateParamsProtoMsg): _17.MsgUpdateParams;
            toProto(message: _17.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _17.MsgUpdateParams): _17.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _17.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.MsgUpdateParamsResponse;
            fromJSON(_: any): _17.MsgUpdateParamsResponse;
            toJSON(_: _17.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_17.MsgUpdateParamsResponse>): _17.MsgUpdateParamsResponse;
            fromAmino(_: _17.MsgUpdateParamsResponseAmino): _17.MsgUpdateParamsResponse;
            toAmino(_: _17.MsgUpdateParamsResponse): _17.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _17.MsgUpdateParamsResponseAminoMsg): _17.MsgUpdateParamsResponse;
            fromProtoMsg(message: _17.MsgUpdateParamsResponseProtoMsg): _17.MsgUpdateParamsResponse;
            toProto(message: _17.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _17.MsgUpdateParamsResponse): _17.MsgUpdateParamsResponseProtoMsg;
        };
        MsgCreateStorage: {
            typeUrl: string;
            encode(message: _17.MsgCreateStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.MsgCreateStorage;
            fromJSON(object: any): _17.MsgCreateStorage;
            toJSON(message: _17.MsgCreateStorage): unknown;
            fromPartial(object: Partial<_17.MsgCreateStorage>): _17.MsgCreateStorage;
            fromAmino(object: _17.MsgCreateStorageAmino): _17.MsgCreateStorage;
            toAmino(message: _17.MsgCreateStorage): _17.MsgCreateStorageAmino;
            fromAminoMsg(object: _17.MsgCreateStorageAminoMsg): _17.MsgCreateStorage;
            fromProtoMsg(message: _17.MsgCreateStorageProtoMsg): _17.MsgCreateStorage;
            toProto(message: _17.MsgCreateStorage): Uint8Array;
            toProtoMsg(message: _17.MsgCreateStorage): _17.MsgCreateStorageProtoMsg;
        };
        MsgCreateStorageResponse: {
            typeUrl: string;
            encode(_: _17.MsgCreateStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.MsgCreateStorageResponse;
            fromJSON(_: any): _17.MsgCreateStorageResponse;
            toJSON(_: _17.MsgCreateStorageResponse): unknown;
            fromPartial(_: Partial<_17.MsgCreateStorageResponse>): _17.MsgCreateStorageResponse;
            fromAmino(_: _17.MsgCreateStorageResponseAmino): _17.MsgCreateStorageResponse;
            toAmino(_: _17.MsgCreateStorageResponse): _17.MsgCreateStorageResponseAmino;
            fromAminoMsg(object: _17.MsgCreateStorageResponseAminoMsg): _17.MsgCreateStorageResponse;
            fromProtoMsg(message: _17.MsgCreateStorageResponseProtoMsg): _17.MsgCreateStorageResponse;
            toProto(message: _17.MsgCreateStorageResponse): Uint8Array;
            toProtoMsg(message: _17.MsgCreateStorageResponse): _17.MsgCreateStorageResponseProtoMsg;
        };
        MsgUpdateStorage: {
            typeUrl: string;
            encode(message: _17.MsgUpdateStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.MsgUpdateStorage;
            fromJSON(object: any): _17.MsgUpdateStorage;
            toJSON(message: _17.MsgUpdateStorage): unknown;
            fromPartial(object: Partial<_17.MsgUpdateStorage>): _17.MsgUpdateStorage;
            fromAmino(object: _17.MsgUpdateStorageAmino): _17.MsgUpdateStorage;
            toAmino(message: _17.MsgUpdateStorage): _17.MsgUpdateStorageAmino;
            fromAminoMsg(object: _17.MsgUpdateStorageAminoMsg): _17.MsgUpdateStorage;
            fromProtoMsg(message: _17.MsgUpdateStorageProtoMsg): _17.MsgUpdateStorage;
            toProto(message: _17.MsgUpdateStorage): Uint8Array;
            toProtoMsg(message: _17.MsgUpdateStorage): _17.MsgUpdateStorageProtoMsg;
        };
        MsgUpdateStorageResponse: {
            typeUrl: string;
            encode(_: _17.MsgUpdateStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.MsgUpdateStorageResponse;
            fromJSON(_: any): _17.MsgUpdateStorageResponse;
            toJSON(_: _17.MsgUpdateStorageResponse): unknown;
            fromPartial(_: Partial<_17.MsgUpdateStorageResponse>): _17.MsgUpdateStorageResponse;
            fromAmino(_: _17.MsgUpdateStorageResponseAmino): _17.MsgUpdateStorageResponse;
            toAmino(_: _17.MsgUpdateStorageResponse): _17.MsgUpdateStorageResponseAmino;
            fromAminoMsg(object: _17.MsgUpdateStorageResponseAminoMsg): _17.MsgUpdateStorageResponse;
            fromProtoMsg(message: _17.MsgUpdateStorageResponseProtoMsg): _17.MsgUpdateStorageResponse;
            toProto(message: _17.MsgUpdateStorageResponse): Uint8Array;
            toProtoMsg(message: _17.MsgUpdateStorageResponse): _17.MsgUpdateStorageResponseProtoMsg;
        };
        MsgDeleteStorage: {
            typeUrl: string;
            encode(message: _17.MsgDeleteStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.MsgDeleteStorage;
            fromJSON(object: any): _17.MsgDeleteStorage;
            toJSON(message: _17.MsgDeleteStorage): unknown;
            fromPartial(object: Partial<_17.MsgDeleteStorage>): _17.MsgDeleteStorage;
            fromAmino(object: _17.MsgDeleteStorageAmino): _17.MsgDeleteStorage;
            toAmino(message: _17.MsgDeleteStorage): _17.MsgDeleteStorageAmino;
            fromAminoMsg(object: _17.MsgDeleteStorageAminoMsg): _17.MsgDeleteStorage;
            fromProtoMsg(message: _17.MsgDeleteStorageProtoMsg): _17.MsgDeleteStorage;
            toProto(message: _17.MsgDeleteStorage): Uint8Array;
            toProtoMsg(message: _17.MsgDeleteStorage): _17.MsgDeleteStorageProtoMsg;
        };
        MsgDeleteStorageResponse: {
            typeUrl: string;
            encode(_: _17.MsgDeleteStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.MsgDeleteStorageResponse;
            fromJSON(_: any): _17.MsgDeleteStorageResponse;
            toJSON(_: _17.MsgDeleteStorageResponse): unknown;
            fromPartial(_: Partial<_17.MsgDeleteStorageResponse>): _17.MsgDeleteStorageResponse;
            fromAmino(_: _17.MsgDeleteStorageResponseAmino): _17.MsgDeleteStorageResponse;
            toAmino(_: _17.MsgDeleteStorageResponse): _17.MsgDeleteStorageResponseAmino;
            fromAminoMsg(object: _17.MsgDeleteStorageResponseAminoMsg): _17.MsgDeleteStorageResponse;
            fromProtoMsg(message: _17.MsgDeleteStorageResponseProtoMsg): _17.MsgDeleteStorageResponse;
            toProto(message: _17.MsgDeleteStorageResponse): Uint8Array;
            toProtoMsg(message: _17.MsgDeleteStorageResponse): _17.MsgDeleteStorageResponseProtoMsg;
        };
        Storage: {
            typeUrl: string;
            encode(message: _16.Storage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.Storage;
            fromJSON(object: any): _16.Storage;
            toJSON(message: _16.Storage): unknown;
            fromPartial(object: Partial<_16.Storage>): _16.Storage;
            fromAmino(object: _16.StorageAmino): _16.Storage;
            toAmino(message: _16.Storage): _16.StorageAmino;
            fromAminoMsg(object: _16.StorageAminoMsg): _16.Storage;
            fromProtoMsg(message: _16.StorageProtoMsg): _16.Storage;
            toProto(message: _16.Storage): Uint8Array;
            toProtoMsg(message: _16.Storage): _16.StorageProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _15.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.QueryParamsRequest;
            fromJSON(_: any): _15.QueryParamsRequest;
            toJSON(_: _15.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_15.QueryParamsRequest>): _15.QueryParamsRequest;
            fromAmino(_: _15.QueryParamsRequestAmino): _15.QueryParamsRequest;
            toAmino(_: _15.QueryParamsRequest): _15.QueryParamsRequestAmino;
            fromAminoMsg(object: _15.QueryParamsRequestAminoMsg): _15.QueryParamsRequest;
            fromProtoMsg(message: _15.QueryParamsRequestProtoMsg): _15.QueryParamsRequest;
            toProto(message: _15.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _15.QueryParamsRequest): _15.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _15.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.QueryParamsResponse;
            fromJSON(object: any): _15.QueryParamsResponse;
            toJSON(message: _15.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_15.QueryParamsResponse>): _15.QueryParamsResponse;
            fromAmino(object: _15.QueryParamsResponseAmino): _15.QueryParamsResponse;
            toAmino(message: _15.QueryParamsResponse): _15.QueryParamsResponseAmino;
            fromAminoMsg(object: _15.QueryParamsResponseAminoMsg): _15.QueryParamsResponse;
            fromProtoMsg(message: _15.QueryParamsResponseProtoMsg): _15.QueryParamsResponse;
            toProto(message: _15.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _15.QueryParamsResponse): _15.QueryParamsResponseProtoMsg;
        };
        QueryStorageDetailRequest: {
            typeUrl: string;
            encode(message: _15.QueryStorageDetailRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.QueryStorageDetailRequest;
            fromJSON(object: any): _15.QueryStorageDetailRequest;
            toJSON(message: _15.QueryStorageDetailRequest): unknown;
            fromPartial(object: Partial<_15.QueryStorageDetailRequest>): _15.QueryStorageDetailRequest;
            fromAmino(object: _15.QueryStorageDetailRequestAmino): _15.QueryStorageDetailRequest;
            toAmino(message: _15.QueryStorageDetailRequest): _15.QueryStorageDetailRequestAmino;
            fromAminoMsg(object: _15.QueryStorageDetailRequestAminoMsg): _15.QueryStorageDetailRequest;
            fromProtoMsg(message: _15.QueryStorageDetailRequestProtoMsg): _15.QueryStorageDetailRequest;
            toProto(message: _15.QueryStorageDetailRequest): Uint8Array;
            toProtoMsg(message: _15.QueryStorageDetailRequest): _15.QueryStorageDetailRequestProtoMsg;
        };
        QueryStorageDetailResponse: {
            typeUrl: string;
            encode(message: _15.QueryStorageDetailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.QueryStorageDetailResponse;
            fromJSON(object: any): _15.QueryStorageDetailResponse;
            toJSON(message: _15.QueryStorageDetailResponse): unknown;
            fromPartial(object: Partial<_15.QueryStorageDetailResponse>): _15.QueryStorageDetailResponse;
            fromAmino(object: _15.QueryStorageDetailResponseAmino): _15.QueryStorageDetailResponse;
            toAmino(message: _15.QueryStorageDetailResponse): _15.QueryStorageDetailResponseAmino;
            fromAminoMsg(object: _15.QueryStorageDetailResponseAminoMsg): _15.QueryStorageDetailResponse;
            fromProtoMsg(message: _15.QueryStorageDetailResponseProtoMsg): _15.QueryStorageDetailResponse;
            toProto(message: _15.QueryStorageDetailResponse): Uint8Array;
            toProtoMsg(message: _15.QueryStorageDetailResponse): _15.QueryStorageDetailResponseProtoMsg;
        };
        QueryFilterStorageRequest: {
            typeUrl: string;
            encode(message: _15.QueryFilterStorageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.QueryFilterStorageRequest;
            fromJSON(object: any): _15.QueryFilterStorageRequest;
            toJSON(message: _15.QueryFilterStorageRequest): unknown;
            fromPartial(object: Partial<_15.QueryFilterStorageRequest>): _15.QueryFilterStorageRequest;
            fromAmino(object: _15.QueryFilterStorageRequestAmino): _15.QueryFilterStorageRequest;
            toAmino(message: _15.QueryFilterStorageRequest): _15.QueryFilterStorageRequestAmino;
            fromAminoMsg(object: _15.QueryFilterStorageRequestAminoMsg): _15.QueryFilterStorageRequest;
            fromProtoMsg(message: _15.QueryFilterStorageRequestProtoMsg): _15.QueryFilterStorageRequest;
            toProto(message: _15.QueryFilterStorageRequest): Uint8Array;
            toProtoMsg(message: _15.QueryFilterStorageRequest): _15.QueryFilterStorageRequestProtoMsg;
        };
        QueryFilterStorageResponse: {
            typeUrl: string;
            encode(message: _15.QueryFilterStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.QueryFilterStorageResponse;
            fromJSON(object: any): _15.QueryFilterStorageResponse;
            toJSON(message: _15.QueryFilterStorageResponse): unknown;
            fromPartial(object: Partial<_15.QueryFilterStorageResponse>): _15.QueryFilterStorageResponse;
            fromAmino(object: _15.QueryFilterStorageResponseAmino): _15.QueryFilterStorageResponse;
            toAmino(message: _15.QueryFilterStorageResponse): _15.QueryFilterStorageResponseAmino;
            fromAminoMsg(object: _15.QueryFilterStorageResponseAminoMsg): _15.QueryFilterStorageResponse;
            fromProtoMsg(message: _15.QueryFilterStorageResponseProtoMsg): _15.QueryFilterStorageResponse;
            toProto(message: _15.QueryFilterStorageResponse): Uint8Array;
            toProtoMsg(message: _15.QueryFilterStorageResponse): _15.QueryFilterStorageResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _14.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.Params;
            fromJSON(_: any): _14.Params;
            toJSON(_: _14.Params): unknown;
            fromPartial(_: Partial<_14.Params>): _14.Params;
            fromAmino(_: _14.ParamsAmino): _14.Params;
            toAmino(_: _14.Params): _14.ParamsAmino;
            fromAminoMsg(object: _14.ParamsAminoMsg): _14.Params;
            toAminoMsg(message: _14.Params): _14.ParamsAminoMsg;
            fromProtoMsg(message: _14.ParamsProtoMsg): _14.Params;
            toProto(message: _14.Params): Uint8Array;
            toProtoMsg(message: _14.Params): _14.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.GenesisState;
            fromJSON(object: any): _13.GenesisState;
            toJSON(message: _13.GenesisState): unknown;
            fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
            fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
            toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
            fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
            fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
            toProto(message: _13.GenesisState): Uint8Array;
            toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            blit: {
                blit: any;
                script: any;
                storage: any;
            };
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
            blit: {
                blit: _190.ServiceClientImpl;
                script: _191.QueryClientImpl;
                storage: _192.QueryClientImpl;
            };
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
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            blit: {
                blit: _187.LCDQueryClient;
                script: _188.LCDQueryClient;
                storage: _189.LCDQueryClient;
            };
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
        }>;
    };
}

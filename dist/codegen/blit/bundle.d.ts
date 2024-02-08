import * as _1 from "./blit/future_task";
import * as _2 from "./blit/genesis";
import * as _3 from "./blit/params";
import * as _4 from "./blit/query";
import * as _5 from "./blit/service";
import * as _6 from "./blit/task";
import * as _7 from "./blit/tx";
import * as _8 from "./script/genesis";
import * as _10 from "./script/params";
import * as _11 from "./script/query";
import * as _12 from "./script/script";
import * as _13 from "./script/tx";
import * as _14 from "./storage/genesis";
import * as _15 from "./storage/params";
import * as _16 from "./storage/query";
import * as _17 from "./storage/storage";
import * as _18 from "./storage/tx";
import * as _189 from "./blit/service.lcd";
import * as _190 from "./script/query.lcd";
import * as _191 from "./storage/query.lcd";
export declare namespace blit {
    const blit: {
        LCDQueryClient: typeof _189.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _7.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                mintCoins(value: _7.MsgMintCoins): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                burnCoins(value: _7.MsgBurnCoins): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceTransferCoins(value: _7.MsgForceTransferCoins): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setDenomMetadata(value: _7.MsgSetDenomMetadata): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTask(value: _7.MsgCreateTask): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTask(value: _7.MsgDeleteTask): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _7.MsgUpdateParams): {
                    typeUrl: string;
                    value: _7.MsgUpdateParams;
                };
                mintCoins(value: _7.MsgMintCoins): {
                    typeUrl: string;
                    value: _7.MsgMintCoins;
                };
                burnCoins(value: _7.MsgBurnCoins): {
                    typeUrl: string;
                    value: _7.MsgBurnCoins;
                };
                forceTransferCoins(value: _7.MsgForceTransferCoins): {
                    typeUrl: string;
                    value: _7.MsgForceTransferCoins;
                };
                setDenomMetadata(value: _7.MsgSetDenomMetadata): {
                    typeUrl: string;
                    value: _7.MsgSetDenomMetadata;
                };
                createTask(value: _7.MsgCreateTask): {
                    typeUrl: string;
                    value: _7.MsgCreateTask;
                };
                deleteTask(value: _7.MsgDeleteTask): {
                    typeUrl: string;
                    value: _7.MsgDeleteTask;
                };
            };
            toJSON: {
                updateParams(value: _7.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
                mintCoins(value: _7.MsgMintCoins): {
                    typeUrl: string;
                    value: unknown;
                };
                burnCoins(value: _7.MsgBurnCoins): {
                    typeUrl: string;
                    value: unknown;
                };
                forceTransferCoins(value: _7.MsgForceTransferCoins): {
                    typeUrl: string;
                    value: unknown;
                };
                setDenomMetadata(value: _7.MsgSetDenomMetadata): {
                    typeUrl: string;
                    value: unknown;
                };
                createTask(value: _7.MsgCreateTask): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteTask(value: _7.MsgDeleteTask): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _7.MsgUpdateParams;
                };
                mintCoins(value: any): {
                    typeUrl: string;
                    value: _7.MsgMintCoins;
                };
                burnCoins(value: any): {
                    typeUrl: string;
                    value: _7.MsgBurnCoins;
                };
                forceTransferCoins(value: any): {
                    typeUrl: string;
                    value: _7.MsgForceTransferCoins;
                };
                setDenomMetadata(value: any): {
                    typeUrl: string;
                    value: _7.MsgSetDenomMetadata;
                };
                createTask(value: any): {
                    typeUrl: string;
                    value: _7.MsgCreateTask;
                };
                deleteTask(value: any): {
                    typeUrl: string;
                    value: _7.MsgDeleteTask;
                };
            };
            fromPartial: {
                updateParams(value: _7.MsgUpdateParams): {
                    typeUrl: string;
                    value: _7.MsgUpdateParams;
                };
                mintCoins(value: _7.MsgMintCoins): {
                    typeUrl: string;
                    value: _7.MsgMintCoins;
                };
                burnCoins(value: _7.MsgBurnCoins): {
                    typeUrl: string;
                    value: _7.MsgBurnCoins;
                };
                forceTransferCoins(value: _7.MsgForceTransferCoins): {
                    typeUrl: string;
                    value: _7.MsgForceTransferCoins;
                };
                setDenomMetadata(value: _7.MsgSetDenomMetadata): {
                    typeUrl: string;
                    value: _7.MsgSetDenomMetadata;
                };
                createTask(value: _7.MsgCreateTask): {
                    typeUrl: string;
                    value: _7.MsgCreateTask;
                };
                deleteTask(value: _7.MsgDeleteTask): {
                    typeUrl: string;
                    value: _7.MsgDeleteTask;
                };
            };
        };
        AminoConverter: {
            "/blit.blit.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _7.MsgUpdateParams) => _7.MsgUpdateParamsAmino;
                fromAmino: (object: _7.MsgUpdateParamsAmino) => _7.MsgUpdateParams;
            };
            "/blit.blit.MsgMintCoins": {
                aminoType: string;
                toAmino: (message: _7.MsgMintCoins) => _7.MsgMintCoinsAmino;
                fromAmino: (object: _7.MsgMintCoinsAmino) => _7.MsgMintCoins;
            };
            "/blit.blit.MsgBurnCoins": {
                aminoType: string;
                toAmino: (message: _7.MsgBurnCoins) => _7.MsgBurnCoinsAmino;
                fromAmino: (object: _7.MsgBurnCoinsAmino) => _7.MsgBurnCoins;
            };
            "/blit.blit.MsgForceTransferCoins": {
                aminoType: string;
                toAmino: (message: _7.MsgForceTransferCoins) => _7.MsgForceTransferCoinsAmino;
                fromAmino: (object: _7.MsgForceTransferCoinsAmino) => _7.MsgForceTransferCoins;
            };
            "/blit.blit.MsgSetDenomMetadata": {
                aminoType: string;
                toAmino: (message: _7.MsgSetDenomMetadata) => _7.MsgSetDenomMetadataAmino;
                fromAmino: (object: _7.MsgSetDenomMetadataAmino) => _7.MsgSetDenomMetadata;
            };
            "/blit.blit.MsgCreateTask": {
                aminoType: string;
                toAmino: (message: _7.MsgCreateTask) => _7.MsgCreateTaskAmino;
                fromAmino: (object: _7.MsgCreateTaskAmino) => _7.MsgCreateTask;
            };
            "/blit.blit.MsgDeleteTask": {
                aminoType: string;
                toAmino: (message: _7.MsgDeleteTask) => _7.MsgDeleteTaskAmino;
                fromAmino: (object: _7.MsgDeleteTaskAmino) => _7.MsgDeleteTask;
            };
        };
        protobufPackage: "blit.blit";
        MsgUpdateParams: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _7.MsgUpdateParams;
            isSDK(o: any): o is _7.MsgUpdateParamsSDKType;
            isAmino(o: any): o is _7.MsgUpdateParamsAmino;
            encode(message: _7.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgUpdateParams;
            fromJSON(object: any): _7.MsgUpdateParams;
            toJSON(message: _7.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_7.MsgUpdateParams>): _7.MsgUpdateParams;
            fromAmino(object: _7.MsgUpdateParamsAmino): _7.MsgUpdateParams;
            toAmino(message: _7.MsgUpdateParams): _7.MsgUpdateParamsAmino;
            fromAminoMsg(object: _7.MsgUpdateParamsAminoMsg): _7.MsgUpdateParams;
            toAminoMsg(message: _7.MsgUpdateParams): _7.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _7.MsgUpdateParamsProtoMsg): _7.MsgUpdateParams;
            toProto(message: _7.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _7.MsgUpdateParams): _7.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            is(o: any): o is _7.MsgUpdateParamsResponse;
            isSDK(o: any): o is _7.MsgUpdateParamsResponseSDKType;
            isAmino(o: any): o is _7.MsgUpdateParamsResponseAmino;
            encode(_: _7.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgUpdateParamsResponse;
            fromJSON(_: any): _7.MsgUpdateParamsResponse;
            toJSON(_: _7.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_7.MsgUpdateParamsResponse>): _7.MsgUpdateParamsResponse;
            fromAmino(_: _7.MsgUpdateParamsResponseAmino): _7.MsgUpdateParamsResponse;
            toAmino(_: _7.MsgUpdateParamsResponse): _7.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _7.MsgUpdateParamsResponseAminoMsg): _7.MsgUpdateParamsResponse;
            fromProtoMsg(message: _7.MsgUpdateParamsResponseProtoMsg): _7.MsgUpdateParamsResponse;
            toProto(message: _7.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _7.MsgUpdateParamsResponse): _7.MsgUpdateParamsResponseProtoMsg;
        };
        MsgMintCoins: {
            typeUrl: string;
            is(o: any): o is _7.MsgMintCoins;
            isSDK(o: any): o is _7.MsgMintCoinsSDKType;
            isAmino(o: any): o is _7.MsgMintCoinsAmino;
            encode(message: _7.MsgMintCoins, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgMintCoins;
            fromJSON(object: any): _7.MsgMintCoins;
            toJSON(message: _7.MsgMintCoins): unknown;
            fromPartial(object: Partial<_7.MsgMintCoins>): _7.MsgMintCoins;
            fromAmino(object: _7.MsgMintCoinsAmino): _7.MsgMintCoins;
            toAmino(message: _7.MsgMintCoins): _7.MsgMintCoinsAmino;
            fromAminoMsg(object: _7.MsgMintCoinsAminoMsg): _7.MsgMintCoins;
            fromProtoMsg(message: _7.MsgMintCoinsProtoMsg): _7.MsgMintCoins;
            toProto(message: _7.MsgMintCoins): Uint8Array;
            toProtoMsg(message: _7.MsgMintCoins): _7.MsgMintCoinsProtoMsg;
        };
        MsgMintCoinsResponse: {
            typeUrl: string;
            is(o: any): o is _7.MsgMintCoinsResponse;
            isSDK(o: any): o is _7.MsgMintCoinsResponseSDKType;
            isAmino(o: any): o is _7.MsgMintCoinsResponseAmino;
            encode(_: _7.MsgMintCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgMintCoinsResponse;
            fromJSON(_: any): _7.MsgMintCoinsResponse;
            toJSON(_: _7.MsgMintCoinsResponse): unknown;
            fromPartial(_: Partial<_7.MsgMintCoinsResponse>): _7.MsgMintCoinsResponse;
            fromAmino(_: _7.MsgMintCoinsResponseAmino): _7.MsgMintCoinsResponse;
            toAmino(_: _7.MsgMintCoinsResponse): _7.MsgMintCoinsResponseAmino;
            fromAminoMsg(object: _7.MsgMintCoinsResponseAminoMsg): _7.MsgMintCoinsResponse;
            fromProtoMsg(message: _7.MsgMintCoinsResponseProtoMsg): _7.MsgMintCoinsResponse;
            toProto(message: _7.MsgMintCoinsResponse): Uint8Array;
            toProtoMsg(message: _7.MsgMintCoinsResponse): _7.MsgMintCoinsResponseProtoMsg;
        };
        MsgBurnCoins: {
            typeUrl: string;
            is(o: any): o is _7.MsgBurnCoins;
            isSDK(o: any): o is _7.MsgBurnCoinsSDKType;
            isAmino(o: any): o is _7.MsgBurnCoinsAmino;
            encode(message: _7.MsgBurnCoins, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgBurnCoins;
            fromJSON(object: any): _7.MsgBurnCoins;
            toJSON(message: _7.MsgBurnCoins): unknown;
            fromPartial(object: Partial<_7.MsgBurnCoins>): _7.MsgBurnCoins;
            fromAmino(object: _7.MsgBurnCoinsAmino): _7.MsgBurnCoins;
            toAmino(message: _7.MsgBurnCoins): _7.MsgBurnCoinsAmino;
            fromAminoMsg(object: _7.MsgBurnCoinsAminoMsg): _7.MsgBurnCoins;
            fromProtoMsg(message: _7.MsgBurnCoinsProtoMsg): _7.MsgBurnCoins;
            toProto(message: _7.MsgBurnCoins): Uint8Array;
            toProtoMsg(message: _7.MsgBurnCoins): _7.MsgBurnCoinsProtoMsg;
        };
        MsgBurnCoinsResponse: {
            typeUrl: string;
            is(o: any): o is _7.MsgBurnCoinsResponse;
            isSDK(o: any): o is _7.MsgBurnCoinsResponseSDKType;
            isAmino(o: any): o is _7.MsgBurnCoinsResponseAmino;
            encode(_: _7.MsgBurnCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgBurnCoinsResponse;
            fromJSON(_: any): _7.MsgBurnCoinsResponse;
            toJSON(_: _7.MsgBurnCoinsResponse): unknown;
            fromPartial(_: Partial<_7.MsgBurnCoinsResponse>): _7.MsgBurnCoinsResponse;
            fromAmino(_: _7.MsgBurnCoinsResponseAmino): _7.MsgBurnCoinsResponse;
            toAmino(_: _7.MsgBurnCoinsResponse): _7.MsgBurnCoinsResponseAmino;
            fromAminoMsg(object: _7.MsgBurnCoinsResponseAminoMsg): _7.MsgBurnCoinsResponse;
            fromProtoMsg(message: _7.MsgBurnCoinsResponseProtoMsg): _7.MsgBurnCoinsResponse;
            toProto(message: _7.MsgBurnCoinsResponse): Uint8Array;
            toProtoMsg(message: _7.MsgBurnCoinsResponse): _7.MsgBurnCoinsResponseProtoMsg;
        };
        MsgForceTransferCoins: {
            typeUrl: string;
            is(o: any): o is _7.MsgForceTransferCoins;
            isSDK(o: any): o is _7.MsgForceTransferCoinsSDKType;
            isAmino(o: any): o is _7.MsgForceTransferCoinsAmino;
            encode(message: _7.MsgForceTransferCoins, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgForceTransferCoins;
            fromJSON(object: any): _7.MsgForceTransferCoins;
            toJSON(message: _7.MsgForceTransferCoins): unknown;
            fromPartial(object: Partial<_7.MsgForceTransferCoins>): _7.MsgForceTransferCoins;
            fromAmino(object: _7.MsgForceTransferCoinsAmino): _7.MsgForceTransferCoins;
            toAmino(message: _7.MsgForceTransferCoins): _7.MsgForceTransferCoinsAmino;
            fromAminoMsg(object: _7.MsgForceTransferCoinsAminoMsg): _7.MsgForceTransferCoins;
            fromProtoMsg(message: _7.MsgForceTransferCoinsProtoMsg): _7.MsgForceTransferCoins;
            toProto(message: _7.MsgForceTransferCoins): Uint8Array;
            toProtoMsg(message: _7.MsgForceTransferCoins): _7.MsgForceTransferCoinsProtoMsg;
        };
        MsgForceTransferCoinsResponse: {
            typeUrl: string;
            is(o: any): o is _7.MsgForceTransferCoinsResponse;
            isSDK(o: any): o is _7.MsgForceTransferCoinsResponseSDKType;
            isAmino(o: any): o is _7.MsgForceTransferCoinsResponseAmino;
            encode(_: _7.MsgForceTransferCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgForceTransferCoinsResponse;
            fromJSON(_: any): _7.MsgForceTransferCoinsResponse;
            toJSON(_: _7.MsgForceTransferCoinsResponse): unknown;
            fromPartial(_: Partial<_7.MsgForceTransferCoinsResponse>): _7.MsgForceTransferCoinsResponse;
            fromAmino(_: _7.MsgForceTransferCoinsResponseAmino): _7.MsgForceTransferCoinsResponse;
            toAmino(_: _7.MsgForceTransferCoinsResponse): _7.MsgForceTransferCoinsResponseAmino;
            fromAminoMsg(object: _7.MsgForceTransferCoinsResponseAminoMsg): _7.MsgForceTransferCoinsResponse;
            fromProtoMsg(message: _7.MsgForceTransferCoinsResponseProtoMsg): _7.MsgForceTransferCoinsResponse;
            toProto(message: _7.MsgForceTransferCoinsResponse): Uint8Array;
            toProtoMsg(message: _7.MsgForceTransferCoinsResponse): _7.MsgForceTransferCoinsResponseProtoMsg;
        };
        MsgSetDenomMetadata: {
            typeUrl: string;
            is(o: any): o is _7.MsgSetDenomMetadata;
            isSDK(o: any): o is _7.MsgSetDenomMetadataSDKType;
            isAmino(o: any): o is _7.MsgSetDenomMetadataAmino;
            encode(message: _7.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgSetDenomMetadata;
            fromJSON(object: any): _7.MsgSetDenomMetadata;
            toJSON(message: _7.MsgSetDenomMetadata): unknown;
            fromPartial(object: Partial<_7.MsgSetDenomMetadata>): _7.MsgSetDenomMetadata;
            fromAmino(object: _7.MsgSetDenomMetadataAmino): _7.MsgSetDenomMetadata;
            toAmino(message: _7.MsgSetDenomMetadata): _7.MsgSetDenomMetadataAmino;
            fromAminoMsg(object: _7.MsgSetDenomMetadataAminoMsg): _7.MsgSetDenomMetadata;
            fromProtoMsg(message: _7.MsgSetDenomMetadataProtoMsg): _7.MsgSetDenomMetadata;
            toProto(message: _7.MsgSetDenomMetadata): Uint8Array;
            toProtoMsg(message: _7.MsgSetDenomMetadata): _7.MsgSetDenomMetadataProtoMsg;
        };
        MsgSetDenomMetadataResponse: {
            typeUrl: string;
            is(o: any): o is _7.MsgSetDenomMetadataResponse;
            isSDK(o: any): o is _7.MsgSetDenomMetadataResponseSDKType;
            isAmino(o: any): o is _7.MsgSetDenomMetadataResponseAmino;
            encode(_: _7.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgSetDenomMetadataResponse;
            fromJSON(_: any): _7.MsgSetDenomMetadataResponse;
            toJSON(_: _7.MsgSetDenomMetadataResponse): unknown;
            fromPartial(_: Partial<_7.MsgSetDenomMetadataResponse>): _7.MsgSetDenomMetadataResponse;
            fromAmino(_: _7.MsgSetDenomMetadataResponseAmino): _7.MsgSetDenomMetadataResponse;
            toAmino(_: _7.MsgSetDenomMetadataResponse): _7.MsgSetDenomMetadataResponseAmino;
            fromAminoMsg(object: _7.MsgSetDenomMetadataResponseAminoMsg): _7.MsgSetDenomMetadataResponse;
            fromProtoMsg(message: _7.MsgSetDenomMetadataResponseProtoMsg): _7.MsgSetDenomMetadataResponse;
            toProto(message: _7.MsgSetDenomMetadataResponse): Uint8Array;
            toProtoMsg(message: _7.MsgSetDenomMetadataResponse): _7.MsgSetDenomMetadataResponseProtoMsg;
        };
        MsgCreateTask: {
            typeUrl: string;
            is(o: any): o is _7.MsgCreateTask;
            isSDK(o: any): o is _7.MsgCreateTaskSDKType;
            isAmino(o: any): o is _7.MsgCreateTaskAmino;
            encode(message: _7.MsgCreateTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgCreateTask;
            fromJSON(object: any): _7.MsgCreateTask;
            toJSON(message: _7.MsgCreateTask): unknown;
            fromPartial(object: Partial<_7.MsgCreateTask>): _7.MsgCreateTask;
            fromAmino(object: _7.MsgCreateTaskAmino): _7.MsgCreateTask;
            toAmino(message: _7.MsgCreateTask): _7.MsgCreateTaskAmino;
            fromAminoMsg(object: _7.MsgCreateTaskAminoMsg): _7.MsgCreateTask;
            fromProtoMsg(message: _7.MsgCreateTaskProtoMsg): _7.MsgCreateTask;
            toProto(message: _7.MsgCreateTask): Uint8Array;
            toProtoMsg(message: _7.MsgCreateTask): _7.MsgCreateTaskProtoMsg;
        };
        MsgCreateTaskResponse: {
            typeUrl: string;
            is(o: any): o is _7.MsgCreateTaskResponse;
            isSDK(o: any): o is _7.MsgCreateTaskResponseSDKType;
            isAmino(o: any): o is _7.MsgCreateTaskResponseAmino;
            encode(message: _7.MsgCreateTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgCreateTaskResponse;
            fromJSON(object: any): _7.MsgCreateTaskResponse;
            toJSON(message: _7.MsgCreateTaskResponse): unknown;
            fromPartial(object: Partial<_7.MsgCreateTaskResponse>): _7.MsgCreateTaskResponse;
            fromAmino(object: _7.MsgCreateTaskResponseAmino): _7.MsgCreateTaskResponse;
            toAmino(message: _7.MsgCreateTaskResponse): _7.MsgCreateTaskResponseAmino;
            fromAminoMsg(object: _7.MsgCreateTaskResponseAminoMsg): _7.MsgCreateTaskResponse;
            fromProtoMsg(message: _7.MsgCreateTaskResponseProtoMsg): _7.MsgCreateTaskResponse;
            toProto(message: _7.MsgCreateTaskResponse): Uint8Array;
            toProtoMsg(message: _7.MsgCreateTaskResponse): _7.MsgCreateTaskResponseProtoMsg;
        };
        MsgDeleteTask: {
            typeUrl: string;
            is(o: any): o is _7.MsgDeleteTask;
            isSDK(o: any): o is _7.MsgDeleteTaskSDKType;
            isAmino(o: any): o is _7.MsgDeleteTaskAmino;
            encode(message: _7.MsgDeleteTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgDeleteTask;
            fromJSON(object: any): _7.MsgDeleteTask;
            toJSON(message: _7.MsgDeleteTask): unknown;
            fromPartial(object: Partial<_7.MsgDeleteTask>): _7.MsgDeleteTask;
            fromAmino(object: _7.MsgDeleteTaskAmino): _7.MsgDeleteTask;
            toAmino(message: _7.MsgDeleteTask): _7.MsgDeleteTaskAmino;
            fromAminoMsg(object: _7.MsgDeleteTaskAminoMsg): _7.MsgDeleteTask;
            fromProtoMsg(message: _7.MsgDeleteTaskProtoMsg): _7.MsgDeleteTask;
            toProto(message: _7.MsgDeleteTask): Uint8Array;
            toProtoMsg(message: _7.MsgDeleteTask): _7.MsgDeleteTaskProtoMsg;
        };
        MsgDeleteTaskResponse: {
            typeUrl: string;
            is(o: any): o is _7.MsgDeleteTaskResponse;
            isSDK(o: any): o is _7.MsgDeleteTaskResponseSDKType;
            isAmino(o: any): o is _7.MsgDeleteTaskResponseAmino;
            encode(_: _7.MsgDeleteTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgDeleteTaskResponse;
            fromJSON(_: any): _7.MsgDeleteTaskResponse;
            toJSON(_: _7.MsgDeleteTaskResponse): unknown;
            fromPartial(_: Partial<_7.MsgDeleteTaskResponse>): _7.MsgDeleteTaskResponse;
            fromAmino(_: _7.MsgDeleteTaskResponseAmino): _7.MsgDeleteTaskResponse;
            toAmino(_: _7.MsgDeleteTaskResponse): _7.MsgDeleteTaskResponseAmino;
            fromAminoMsg(object: _7.MsgDeleteTaskResponseAminoMsg): _7.MsgDeleteTaskResponse;
            fromProtoMsg(message: _7.MsgDeleteTaskResponseProtoMsg): _7.MsgDeleteTaskResponse;
            toProto(message: _7.MsgDeleteTaskResponse): Uint8Array;
            toProtoMsg(message: _7.MsgDeleteTaskResponse): _7.MsgDeleteTaskResponseProtoMsg;
        };
        Task: {
            typeUrl: string;
            is(o: any): o is _6.Task;
            isSDK(o: any): o is _6.TaskSDKType;
            isAmino(o: any): o is _6.TaskAmino;
            encode(message: _6.Task, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.Task;
            fromJSON(object: any): _6.Task;
            toJSON(message: _6.Task): unknown;
            fromPartial(object: Partial<_6.Task>): _6.Task;
            fromAmino(object: _6.TaskAmino): _6.Task;
            toAmino(message: _6.Task): _6.TaskAmino;
            fromAminoMsg(object: _6.TaskAminoMsg): _6.Task;
            fromProtoMsg(message: _6.TaskProtoMsg): _6.Task;
            toProto(message: _6.Task): Uint8Array;
            toProtoMsg(message: _6.Task): _6.TaskProtoMsg;
        };
        EndpointsRequest: {
            typeUrl: string;
            is(o: any): o is _5.EndpointsRequest;
            isSDK(o: any): o is _5.EndpointsRequestSDKType;
            isAmino(o: any): o is _5.EndpointsRequestAmino;
            encode(_: _5.EndpointsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.EndpointsRequest;
            fromJSON(_: any): _5.EndpointsRequest;
            toJSON(_: _5.EndpointsRequest): unknown;
            fromPartial(_: Partial<_5.EndpointsRequest>): _5.EndpointsRequest;
            fromAmino(_: _5.EndpointsRequestAmino): _5.EndpointsRequest;
            toAmino(_: _5.EndpointsRequest): _5.EndpointsRequestAmino;
            fromAminoMsg(object: _5.EndpointsRequestAminoMsg): _5.EndpointsRequest;
            fromProtoMsg(message: _5.EndpointsRequestProtoMsg): _5.EndpointsRequest;
            toProto(message: _5.EndpointsRequest): Uint8Array;
            toProtoMsg(message: _5.EndpointsRequest): _5.EndpointsRequestProtoMsg;
        };
        EndpointsResponse: {
            typeUrl: string;
            is(o: any): o is _5.EndpointsResponse;
            isSDK(o: any): o is _5.EndpointsResponseSDKType;
            isAmino(o: any): o is _5.EndpointsResponseAmino;
            encode(message: _5.EndpointsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.EndpointsResponse;
            fromJSON(object: any): _5.EndpointsResponse;
            toJSON(message: _5.EndpointsResponse): unknown;
            fromPartial(object: Partial<_5.EndpointsResponse>): _5.EndpointsResponse;
            fromAmino(object: _5.EndpointsResponseAmino): _5.EndpointsResponse;
            toAmino(message: _5.EndpointsResponse): _5.EndpointsResponseAmino;
            fromAminoMsg(object: _5.EndpointsResponseAminoMsg): _5.EndpointsResponse;
            fromProtoMsg(message: _5.EndpointsResponseProtoMsg): _5.EndpointsResponse;
            toProto(message: _5.EndpointsResponse): Uint8Array;
            toProtoMsg(message: _5.EndpointsResponse): _5.EndpointsResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            is(o: any): o is _4.QueryParamsRequest;
            isSDK(o: any): o is _4.QueryParamsRequestSDKType;
            isAmino(o: any): o is _4.QueryParamsRequestAmino;
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
            is(o: any): o is _4.QueryParamsResponse;
            isSDK(o: any): o is _4.QueryParamsResponseSDKType;
            isAmino(o: any): o is _4.QueryParamsResponseAmino;
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
        QueryGetTaskRequest: {
            typeUrl: string;
            is(o: any): o is _4.QueryGetTaskRequest;
            isSDK(o: any): o is _4.QueryGetTaskRequestSDKType;
            isAmino(o: any): o is _4.QueryGetTaskRequestAmino;
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
            is(o: any): o is _4.QueryGetTaskResponse;
            isSDK(o: any): o is _4.QueryGetTaskResponseSDKType;
            isAmino(o: any): o is _4.QueryGetTaskResponseAmino;
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
            is(o: any): o is _4.QueryAllTaskRequest;
            isSDK(o: any): o is _4.QueryAllTaskRequestSDKType;
            isAmino(o: any): o is _4.QueryAllTaskRequestAmino;
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
            is(o: any): o is _4.QueryAllTaskResponse;
            isSDK(o: any): o is _4.QueryAllTaskResponseSDKType;
            isAmino(o: any): o is _4.QueryAllTaskResponseAmino;
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
            is(o: any): o is _4.QueryGetFutureTaskRequest;
            isSDK(o: any): o is _4.QueryGetFutureTaskRequestSDKType;
            isAmino(o: any): o is _4.QueryGetFutureTaskRequestAmino;
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
            is(o: any): o is _4.QueryGetFutureTaskResponse;
            isSDK(o: any): o is _4.QueryGetFutureTaskResponseSDKType;
            isAmino(o: any): o is _4.QueryGetFutureTaskResponseAmino;
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
            is(o: any): o is _4.QueryAllFutureTaskRequest;
            isSDK(o: any): o is _4.QueryAllFutureTaskRequestSDKType;
            isAmino(o: any): o is _4.QueryAllFutureTaskRequestAmino;
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
            is(o: any): o is _4.QueryAllFutureTaskResponse;
            isSDK(o: any): o is _4.QueryAllFutureTaskResponseSDKType;
            isAmino(o: any): o is _4.QueryAllFutureTaskResponseAmino;
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
            aminoType: string;
            is(o: any): o is _3.Params;
            isSDK(o: any): o is _3.ParamsSDKType;
            isAmino(o: any): o is _3.ParamsAmino;
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
            is(o: any): o is _2.GenesisState;
            isSDK(o: any): o is _2.GenesisStateSDKType;
            isAmino(o: any): o is _2.GenesisStateAmino;
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
            is(o: any): o is _1.FutureTask;
            isSDK(o: any): o is _1.FutureTaskSDKType;
            isAmino(o: any): o is _1.FutureTaskAmino;
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
        LCDQueryClient: typeof _190.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _13.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createScript(value: _13.MsgCreateScript): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateScript(value: _13.MsgUpdateScript): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                run(value: _13.MsgRun): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _13.MsgUpdateParams): {
                    typeUrl: string;
                    value: _13.MsgUpdateParams;
                };
                createScript(value: _13.MsgCreateScript): {
                    typeUrl: string;
                    value: _13.MsgCreateScript;
                };
                updateScript(value: _13.MsgUpdateScript): {
                    typeUrl: string;
                    value: _13.MsgUpdateScript;
                };
                run(value: _13.MsgRun): {
                    typeUrl: string;
                    value: _13.MsgRun;
                };
            };
            toJSON: {
                updateParams(value: _13.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
                createScript(value: _13.MsgCreateScript): {
                    typeUrl: string;
                    value: unknown;
                };
                updateScript(value: _13.MsgUpdateScript): {
                    typeUrl: string;
                    value: unknown;
                };
                run(value: _13.MsgRun): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _13.MsgUpdateParams;
                };
                createScript(value: any): {
                    typeUrl: string;
                    value: _13.MsgCreateScript;
                };
                updateScript(value: any): {
                    typeUrl: string;
                    value: _13.MsgUpdateScript;
                };
                run(value: any): {
                    typeUrl: string;
                    value: _13.MsgRun;
                };
            };
            fromPartial: {
                updateParams(value: _13.MsgUpdateParams): {
                    typeUrl: string;
                    value: _13.MsgUpdateParams;
                };
                createScript(value: _13.MsgCreateScript): {
                    typeUrl: string;
                    value: _13.MsgCreateScript;
                };
                updateScript(value: _13.MsgUpdateScript): {
                    typeUrl: string;
                    value: _13.MsgUpdateScript;
                };
                run(value: _13.MsgRun): {
                    typeUrl: string;
                    value: _13.MsgRun;
                };
            };
        };
        AminoConverter: {
            "/blit.script.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _13.MsgUpdateParams) => _13.MsgUpdateParamsAmino;
                fromAmino: (object: _13.MsgUpdateParamsAmino) => _13.MsgUpdateParams;
            };
            "/blit.script.MsgCreateScript": {
                aminoType: string;
                toAmino: (message: _13.MsgCreateScript) => _13.MsgCreateScriptAmino;
                fromAmino: (object: _13.MsgCreateScriptAmino) => _13.MsgCreateScript;
            };
            "/blit.script.MsgUpdateScript": {
                aminoType: string;
                toAmino: (message: _13.MsgUpdateScript) => _13.MsgUpdateScriptAmino;
                fromAmino: (object: _13.MsgUpdateScriptAmino) => _13.MsgUpdateScript;
            };
            "/blit.script.MsgRun": {
                aminoType: string;
                toAmino: (message: _13.MsgRun) => _13.MsgRunAmino;
                fromAmino: (object: _13.MsgRunAmino) => _13.MsgRun;
            };
        };
        protobufPackage: "blit.script";
        MsgUpdateParams: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _13.MsgUpdateParams;
            isSDK(o: any): o is _13.MsgUpdateParamsSDKType;
            isAmino(o: any): o is _13.MsgUpdateParamsAmino;
            encode(message: _13.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgUpdateParams;
            fromJSON(object: any): _13.MsgUpdateParams;
            toJSON(message: _13.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_13.MsgUpdateParams>): _13.MsgUpdateParams;
            fromAmino(object: _13.MsgUpdateParamsAmino): _13.MsgUpdateParams;
            toAmino(message: _13.MsgUpdateParams): _13.MsgUpdateParamsAmino;
            fromAminoMsg(object: _13.MsgUpdateParamsAminoMsg): _13.MsgUpdateParams;
            toAminoMsg(message: _13.MsgUpdateParams): _13.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _13.MsgUpdateParamsProtoMsg): _13.MsgUpdateParams;
            toProto(message: _13.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _13.MsgUpdateParams): _13.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            is(o: any): o is _13.MsgUpdateParamsResponse;
            isSDK(o: any): o is _13.MsgUpdateParamsResponseSDKType;
            isAmino(o: any): o is _13.MsgUpdateParamsResponseAmino;
            encode(_: _13.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgUpdateParamsResponse;
            fromJSON(_: any): _13.MsgUpdateParamsResponse;
            toJSON(_: _13.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_13.MsgUpdateParamsResponse>): _13.MsgUpdateParamsResponse;
            fromAmino(_: _13.MsgUpdateParamsResponseAmino): _13.MsgUpdateParamsResponse;
            toAmino(_: _13.MsgUpdateParamsResponse): _13.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _13.MsgUpdateParamsResponseAminoMsg): _13.MsgUpdateParamsResponse;
            fromProtoMsg(message: _13.MsgUpdateParamsResponseProtoMsg): _13.MsgUpdateParamsResponse;
            toProto(message: _13.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _13.MsgUpdateParamsResponse): _13.MsgUpdateParamsResponseProtoMsg;
        };
        MsgCreateScript: {
            typeUrl: string;
            is(o: any): o is _13.MsgCreateScript;
            isSDK(o: any): o is _13.MsgCreateScriptSDKType;
            isAmino(o: any): o is _13.MsgCreateScriptAmino;
            encode(message: _13.MsgCreateScript, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgCreateScript;
            fromJSON(object: any): _13.MsgCreateScript;
            toJSON(message: _13.MsgCreateScript): unknown;
            fromPartial(object: Partial<_13.MsgCreateScript>): _13.MsgCreateScript;
            fromAmino(object: _13.MsgCreateScriptAmino): _13.MsgCreateScript;
            toAmino(message: _13.MsgCreateScript): _13.MsgCreateScriptAmino;
            fromAminoMsg(object: _13.MsgCreateScriptAminoMsg): _13.MsgCreateScript;
            fromProtoMsg(message: _13.MsgCreateScriptProtoMsg): _13.MsgCreateScript;
            toProto(message: _13.MsgCreateScript): Uint8Array;
            toProtoMsg(message: _13.MsgCreateScript): _13.MsgCreateScriptProtoMsg;
        };
        MsgCreateScriptResponse: {
            typeUrl: string;
            is(o: any): o is _13.MsgCreateScriptResponse;
            isSDK(o: any): o is _13.MsgCreateScriptResponseSDKType;
            isAmino(o: any): o is _13.MsgCreateScriptResponseAmino;
            encode(message: _13.MsgCreateScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgCreateScriptResponse;
            fromJSON(object: any): _13.MsgCreateScriptResponse;
            toJSON(message: _13.MsgCreateScriptResponse): unknown;
            fromPartial(object: Partial<_13.MsgCreateScriptResponse>): _13.MsgCreateScriptResponse;
            fromAmino(object: _13.MsgCreateScriptResponseAmino): _13.MsgCreateScriptResponse;
            toAmino(message: _13.MsgCreateScriptResponse): _13.MsgCreateScriptResponseAmino;
            fromAminoMsg(object: _13.MsgCreateScriptResponseAminoMsg): _13.MsgCreateScriptResponse;
            fromProtoMsg(message: _13.MsgCreateScriptResponseProtoMsg): _13.MsgCreateScriptResponse;
            toProto(message: _13.MsgCreateScriptResponse): Uint8Array;
            toProtoMsg(message: _13.MsgCreateScriptResponse): _13.MsgCreateScriptResponseProtoMsg;
        };
        MsgUpdateScript: {
            typeUrl: string;
            is(o: any): o is _13.MsgUpdateScript;
            isSDK(o: any): o is _13.MsgUpdateScriptSDKType;
            isAmino(o: any): o is _13.MsgUpdateScriptAmino;
            encode(message: _13.MsgUpdateScript, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgUpdateScript;
            fromJSON(object: any): _13.MsgUpdateScript;
            toJSON(message: _13.MsgUpdateScript): unknown;
            fromPartial(object: Partial<_13.MsgUpdateScript>): _13.MsgUpdateScript;
            fromAmino(object: _13.MsgUpdateScriptAmino): _13.MsgUpdateScript;
            toAmino(message: _13.MsgUpdateScript): _13.MsgUpdateScriptAmino;
            fromAminoMsg(object: _13.MsgUpdateScriptAminoMsg): _13.MsgUpdateScript;
            fromProtoMsg(message: _13.MsgUpdateScriptProtoMsg): _13.MsgUpdateScript;
            toProto(message: _13.MsgUpdateScript): Uint8Array;
            toProtoMsg(message: _13.MsgUpdateScript): _13.MsgUpdateScriptProtoMsg;
        };
        MsgUpdateScriptResponse: {
            typeUrl: string;
            is(o: any): o is _13.MsgUpdateScriptResponse;
            isSDK(o: any): o is _13.MsgUpdateScriptResponseSDKType;
            isAmino(o: any): o is _13.MsgUpdateScriptResponseAmino;
            encode(message: _13.MsgUpdateScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgUpdateScriptResponse;
            fromJSON(object: any): _13.MsgUpdateScriptResponse;
            toJSON(message: _13.MsgUpdateScriptResponse): unknown;
            fromPartial(object: Partial<_13.MsgUpdateScriptResponse>): _13.MsgUpdateScriptResponse;
            fromAmino(object: _13.MsgUpdateScriptResponseAmino): _13.MsgUpdateScriptResponse;
            toAmino(message: _13.MsgUpdateScriptResponse): _13.MsgUpdateScriptResponseAmino;
            fromAminoMsg(object: _13.MsgUpdateScriptResponseAminoMsg): _13.MsgUpdateScriptResponse;
            fromProtoMsg(message: _13.MsgUpdateScriptResponseProtoMsg): _13.MsgUpdateScriptResponse;
            toProto(message: _13.MsgUpdateScriptResponse): Uint8Array;
            toProtoMsg(message: _13.MsgUpdateScriptResponse): _13.MsgUpdateScriptResponseProtoMsg;
        };
        MsgDeleteScript: {
            typeUrl: string;
            is(o: any): o is _13.MsgDeleteScript;
            isSDK(o: any): o is _13.MsgDeleteScriptSDKType;
            isAmino(o: any): o is _13.MsgDeleteScriptAmino;
            encode(message: _13.MsgDeleteScript, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgDeleteScript;
            fromJSON(object: any): _13.MsgDeleteScript;
            toJSON(message: _13.MsgDeleteScript): unknown;
            fromPartial(object: Partial<_13.MsgDeleteScript>): _13.MsgDeleteScript;
            fromAmino(object: _13.MsgDeleteScriptAmino): _13.MsgDeleteScript;
            toAmino(message: _13.MsgDeleteScript): _13.MsgDeleteScriptAmino;
            fromAminoMsg(object: _13.MsgDeleteScriptAminoMsg): _13.MsgDeleteScript;
            fromProtoMsg(message: _13.MsgDeleteScriptProtoMsg): _13.MsgDeleteScript;
            toProto(message: _13.MsgDeleteScript): Uint8Array;
            toProtoMsg(message: _13.MsgDeleteScript): _13.MsgDeleteScriptProtoMsg;
        };
        MsgDeleteScriptResponse: {
            typeUrl: string;
            is(o: any): o is _13.MsgDeleteScriptResponse;
            isSDK(o: any): o is _13.MsgDeleteScriptResponseSDKType;
            isAmino(o: any): o is _13.MsgDeleteScriptResponseAmino;
            encode(_: _13.MsgDeleteScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgDeleteScriptResponse;
            fromJSON(_: any): _13.MsgDeleteScriptResponse;
            toJSON(_: _13.MsgDeleteScriptResponse): unknown;
            fromPartial(_: Partial<_13.MsgDeleteScriptResponse>): _13.MsgDeleteScriptResponse;
            fromAmino(_: _13.MsgDeleteScriptResponseAmino): _13.MsgDeleteScriptResponse;
            toAmino(_: _13.MsgDeleteScriptResponse): _13.MsgDeleteScriptResponseAmino;
            fromAminoMsg(object: _13.MsgDeleteScriptResponseAminoMsg): _13.MsgDeleteScriptResponse;
            fromProtoMsg(message: _13.MsgDeleteScriptResponseProtoMsg): _13.MsgDeleteScriptResponse;
            toProto(message: _13.MsgDeleteScriptResponse): Uint8Array;
            toProtoMsg(message: _13.MsgDeleteScriptResponse): _13.MsgDeleteScriptResponseProtoMsg;
        };
        MsgRun: {
            typeUrl: string;
            is(o: any): o is _13.MsgRun;
            isSDK(o: any): o is _13.MsgRunSDKType;
            isAmino(o: any): o is _13.MsgRunAmino;
            encode(message: _13.MsgRun, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgRun;
            fromJSON(object: any): _13.MsgRun;
            toJSON(message: _13.MsgRun): unknown;
            fromPartial(object: Partial<_13.MsgRun>): _13.MsgRun;
            fromAmino(object: _13.MsgRunAmino): _13.MsgRun;
            toAmino(message: _13.MsgRun): _13.MsgRunAmino;
            fromAminoMsg(object: _13.MsgRunAminoMsg): _13.MsgRun;
            fromProtoMsg(message: _13.MsgRunProtoMsg): _13.MsgRun;
            toProto(message: _13.MsgRun): Uint8Array;
            toProtoMsg(message: _13.MsgRun): _13.MsgRunProtoMsg;
        };
        MsgRunResponse: {
            typeUrl: string;
            is(o: any): o is _13.MsgRunResponse;
            isSDK(o: any): o is _13.MsgRunResponseSDKType;
            isAmino(o: any): o is _13.MsgRunResponseAmino;
            encode(message: _13.MsgRunResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgRunResponse;
            fromJSON(object: any): _13.MsgRunResponse;
            toJSON(message: _13.MsgRunResponse): unknown;
            fromPartial(object: Partial<_13.MsgRunResponse>): _13.MsgRunResponse;
            fromAmino(object: _13.MsgRunResponseAmino): _13.MsgRunResponse;
            toAmino(message: _13.MsgRunResponse): _13.MsgRunResponseAmino;
            fromAminoMsg(object: _13.MsgRunResponseAminoMsg): _13.MsgRunResponse;
            fromProtoMsg(message: _13.MsgRunResponseProtoMsg): _13.MsgRunResponse;
            toProto(message: _13.MsgRunResponse): Uint8Array;
            toProtoMsg(message: _13.MsgRunResponse): _13.MsgRunResponseProtoMsg;
        };
        Script: {
            typeUrl: string;
            is(o: any): o is _12.Script;
            isSDK(o: any): o is _12.ScriptSDKType;
            isAmino(o: any): o is _12.ScriptAmino;
            encode(message: _12.Script, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.Script;
            fromJSON(object: any): _12.Script;
            toJSON(message: _12.Script): unknown;
            fromPartial(object: Partial<_12.Script>): _12.Script;
            fromAmino(object: _12.ScriptAmino): _12.Script;
            toAmino(message: _12.Script): _12.ScriptAmino;
            fromAminoMsg(object: _12.ScriptAminoMsg): _12.Script;
            fromProtoMsg(message: _12.ScriptProtoMsg): _12.Script;
            toProto(message: _12.Script): Uint8Array;
            toProtoMsg(message: _12.Script): _12.ScriptProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            is(o: any): o is _11.QueryParamsRequest;
            isSDK(o: any): o is _11.QueryParamsRequestSDKType;
            isAmino(o: any): o is _11.QueryParamsRequestAmino;
            encode(_: _11.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.QueryParamsRequest;
            fromJSON(_: any): _11.QueryParamsRequest;
            toJSON(_: _11.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_11.QueryParamsRequest>): _11.QueryParamsRequest;
            fromAmino(_: _11.QueryParamsRequestAmino): _11.QueryParamsRequest;
            toAmino(_: _11.QueryParamsRequest): _11.QueryParamsRequestAmino;
            fromAminoMsg(object: _11.QueryParamsRequestAminoMsg): _11.QueryParamsRequest;
            fromProtoMsg(message: _11.QueryParamsRequestProtoMsg): _11.QueryParamsRequest;
            toProto(message: _11.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _11.QueryParamsRequest): _11.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            is(o: any): o is _11.QueryParamsResponse;
            isSDK(o: any): o is _11.QueryParamsResponseSDKType;
            isAmino(o: any): o is _11.QueryParamsResponseAmino;
            encode(message: _11.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.QueryParamsResponse;
            fromJSON(object: any): _11.QueryParamsResponse;
            toJSON(message: _11.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_11.QueryParamsResponse>): _11.QueryParamsResponse;
            fromAmino(object: _11.QueryParamsResponseAmino): _11.QueryParamsResponse;
            toAmino(message: _11.QueryParamsResponse): _11.QueryParamsResponseAmino;
            fromAminoMsg(object: _11.QueryParamsResponseAminoMsg): _11.QueryParamsResponse;
            fromProtoMsg(message: _11.QueryParamsResponseProtoMsg): _11.QueryParamsResponse;
            toProto(message: _11.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _11.QueryParamsResponse): _11.QueryParamsResponseProtoMsg;
        };
        QueryScriptRequest: {
            typeUrl: string;
            is(o: any): o is _11.QueryScriptRequest;
            isSDK(o: any): o is _11.QueryScriptRequestSDKType;
            isAmino(o: any): o is _11.QueryScriptRequestAmino;
            encode(message: _11.QueryScriptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.QueryScriptRequest;
            fromJSON(object: any): _11.QueryScriptRequest;
            toJSON(message: _11.QueryScriptRequest): unknown;
            fromPartial(object: Partial<_11.QueryScriptRequest>): _11.QueryScriptRequest;
            fromAmino(object: _11.QueryScriptRequestAmino): _11.QueryScriptRequest;
            toAmino(message: _11.QueryScriptRequest): _11.QueryScriptRequestAmino;
            fromAminoMsg(object: _11.QueryScriptRequestAminoMsg): _11.QueryScriptRequest;
            fromProtoMsg(message: _11.QueryScriptRequestProtoMsg): _11.QueryScriptRequest;
            toProto(message: _11.QueryScriptRequest): Uint8Array;
            toProtoMsg(message: _11.QueryScriptRequest): _11.QueryScriptRequestProtoMsg;
        };
        QueryScriptResponse: {
            typeUrl: string;
            is(o: any): o is _11.QueryScriptResponse;
            isSDK(o: any): o is _11.QueryScriptResponseSDKType;
            isAmino(o: any): o is _11.QueryScriptResponseAmino;
            encode(message: _11.QueryScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.QueryScriptResponse;
            fromJSON(object: any): _11.QueryScriptResponse;
            toJSON(message: _11.QueryScriptResponse): unknown;
            fromPartial(object: Partial<_11.QueryScriptResponse>): _11.QueryScriptResponse;
            fromAmino(object: _11.QueryScriptResponseAmino): _11.QueryScriptResponse;
            toAmino(message: _11.QueryScriptResponse): _11.QueryScriptResponseAmino;
            fromAminoMsg(object: _11.QueryScriptResponseAminoMsg): _11.QueryScriptResponse;
            fromProtoMsg(message: _11.QueryScriptResponseProtoMsg): _11.QueryScriptResponse;
            toProto(message: _11.QueryScriptResponse): Uint8Array;
            toProtoMsg(message: _11.QueryScriptResponse): _11.QueryScriptResponseProtoMsg;
        };
        QueryScriptsRequest: {
            typeUrl: string;
            is(o: any): o is _11.QueryScriptsRequest;
            isSDK(o: any): o is _11.QueryScriptsRequestSDKType;
            isAmino(o: any): o is _11.QueryScriptsRequestAmino;
            encode(message: _11.QueryScriptsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.QueryScriptsRequest;
            fromJSON(object: any): _11.QueryScriptsRequest;
            toJSON(message: _11.QueryScriptsRequest): unknown;
            fromPartial(object: Partial<_11.QueryScriptsRequest>): _11.QueryScriptsRequest;
            fromAmino(object: _11.QueryScriptsRequestAmino): _11.QueryScriptsRequest;
            toAmino(message: _11.QueryScriptsRequest): _11.QueryScriptsRequestAmino;
            fromAminoMsg(object: _11.QueryScriptsRequestAminoMsg): _11.QueryScriptsRequest;
            fromProtoMsg(message: _11.QueryScriptsRequestProtoMsg): _11.QueryScriptsRequest;
            toProto(message: _11.QueryScriptsRequest): Uint8Array;
            toProtoMsg(message: _11.QueryScriptsRequest): _11.QueryScriptsRequestProtoMsg;
        };
        QueryScriptsResponse: {
            typeUrl: string;
            is(o: any): o is _11.QueryScriptsResponse;
            isSDK(o: any): o is _11.QueryScriptsResponseSDKType;
            isAmino(o: any): o is _11.QueryScriptsResponseAmino;
            encode(message: _11.QueryScriptsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.QueryScriptsResponse;
            fromJSON(object: any): _11.QueryScriptsResponse;
            toJSON(message: _11.QueryScriptsResponse): unknown;
            fromPartial(object: Partial<_11.QueryScriptsResponse>): _11.QueryScriptsResponse;
            fromAmino(object: _11.QueryScriptsResponseAmino): _11.QueryScriptsResponse;
            toAmino(message: _11.QueryScriptsResponse): _11.QueryScriptsResponseAmino;
            fromAminoMsg(object: _11.QueryScriptsResponseAminoMsg): _11.QueryScriptsResponse;
            fromProtoMsg(message: _11.QueryScriptsResponseProtoMsg): _11.QueryScriptsResponse;
            toProto(message: _11.QueryScriptsResponse): Uint8Array;
            toProtoMsg(message: _11.QueryScriptsResponse): _11.QueryScriptsResponseProtoMsg;
        };
        QueryWebRequest: {
            typeUrl: string;
            is(o: any): o is _11.QueryWebRequest;
            isSDK(o: any): o is _11.QueryWebRequestSDKType;
            isAmino(o: any): o is _11.QueryWebRequestAmino;
            encode(message: _11.QueryWebRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.QueryWebRequest;
            fromJSON(object: any): _11.QueryWebRequest;
            toJSON(message: _11.QueryWebRequest): unknown;
            fromPartial(object: Partial<_11.QueryWebRequest>): _11.QueryWebRequest;
            fromAmino(object: _11.QueryWebRequestAmino): _11.QueryWebRequest;
            toAmino(message: _11.QueryWebRequest): _11.QueryWebRequestAmino;
            fromAminoMsg(object: _11.QueryWebRequestAminoMsg): _11.QueryWebRequest;
            fromProtoMsg(message: _11.QueryWebRequestProtoMsg): _11.QueryWebRequest;
            toProto(message: _11.QueryWebRequest): Uint8Array;
            toProtoMsg(message: _11.QueryWebRequest): _11.QueryWebRequestProtoMsg;
        };
        QueryWebResponse: {
            typeUrl: string;
            is(o: any): o is _11.QueryWebResponse;
            isSDK(o: any): o is _11.QueryWebResponseSDKType;
            isAmino(o: any): o is _11.QueryWebResponseAmino;
            encode(message: _11.QueryWebResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.QueryWebResponse;
            fromJSON(object: any): _11.QueryWebResponse;
            toJSON(message: _11.QueryWebResponse): unknown;
            fromPartial(object: Partial<_11.QueryWebResponse>): _11.QueryWebResponse;
            fromAmino(object: _11.QueryWebResponseAmino): _11.QueryWebResponse;
            toAmino(message: _11.QueryWebResponse): _11.QueryWebResponseAmino;
            fromAminoMsg(object: _11.QueryWebResponseAminoMsg): _11.QueryWebResponse;
            fromProtoMsg(message: _11.QueryWebResponseProtoMsg): _11.QueryWebResponse;
            toProto(message: _11.QueryWebResponse): Uint8Array;
            toProtoMsg(message: _11.QueryWebResponse): _11.QueryWebResponseProtoMsg;
        };
        QueryEvalRequest: {
            typeUrl: string;
            is(o: any): o is _11.QueryEvalRequest;
            isSDK(o: any): o is _11.QueryEvalRequestSDKType;
            isAmino(o: any): o is _11.QueryEvalRequestAmino;
            encode(message: _11.QueryEvalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.QueryEvalRequest;
            fromJSON(object: any): _11.QueryEvalRequest;
            toJSON(message: _11.QueryEvalRequest): unknown;
            fromPartial(object: Partial<_11.QueryEvalRequest>): _11.QueryEvalRequest;
            fromAmino(object: _11.QueryEvalRequestAmino): _11.QueryEvalRequest;
            toAmino(message: _11.QueryEvalRequest): _11.QueryEvalRequestAmino;
            fromAminoMsg(object: _11.QueryEvalRequestAminoMsg): _11.QueryEvalRequest;
            fromProtoMsg(message: _11.QueryEvalRequestProtoMsg): _11.QueryEvalRequest;
            toProto(message: _11.QueryEvalRequest): Uint8Array;
            toProtoMsg(message: _11.QueryEvalRequest): _11.QueryEvalRequestProtoMsg;
        };
        QueryEvalResponse: {
            typeUrl: string;
            is(o: any): o is _11.QueryEvalResponse;
            isSDK(o: any): o is _11.QueryEvalResponseSDKType;
            isAmino(o: any): o is _11.QueryEvalResponseAmino;
            encode(message: _11.QueryEvalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.QueryEvalResponse;
            fromJSON(object: any): _11.QueryEvalResponse;
            toJSON(message: _11.QueryEvalResponse): unknown;
            fromPartial(object: Partial<_11.QueryEvalResponse>): _11.QueryEvalResponse;
            fromAmino(object: _11.QueryEvalResponseAmino): _11.QueryEvalResponse;
            toAmino(message: _11.QueryEvalResponse): _11.QueryEvalResponseAmino;
            fromAminoMsg(object: _11.QueryEvalResponseAminoMsg): _11.QueryEvalResponse;
            fromProtoMsg(message: _11.QueryEvalResponseProtoMsg): _11.QueryEvalResponse;
            toProto(message: _11.QueryEvalResponse): Uint8Array;
            toProtoMsg(message: _11.QueryEvalResponse): _11.QueryEvalResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _10.Params;
            isSDK(o: any): o is _10.ParamsSDKType;
            isAmino(o: any): o is _10.ParamsAmino;
            encode(_: _10.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.Params;
            fromJSON(_: any): _10.Params;
            toJSON(_: _10.Params): unknown;
            fromPartial(_: Partial<_10.Params>): _10.Params;
            fromAmino(_: _10.ParamsAmino): _10.Params;
            toAmino(_: _10.Params): _10.ParamsAmino;
            fromAminoMsg(object: _10.ParamsAminoMsg): _10.Params;
            toAminoMsg(message: _10.Params): _10.ParamsAminoMsg;
            fromProtoMsg(message: _10.ParamsProtoMsg): _10.Params;
            toProto(message: _10.Params): Uint8Array;
            toProtoMsg(message: _10.Params): _10.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            is(o: any): o is _8.GenesisState;
            isSDK(o: any): o is _8.GenesisStateSDKType;
            isAmino(o: any): o is _8.GenesisStateAmino;
            encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.GenesisState;
            fromJSON(object: any): _8.GenesisState;
            toJSON(message: _8.GenesisState): unknown;
            fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
            fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
            toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
            fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
            fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
            toProto(message: _8.GenesisState): Uint8Array;
            toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
        };
    };
    const storage: {
        LCDQueryClient: typeof _191.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _18.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createStorage(value: _18.MsgCreateStorage): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateStorage(value: _18.MsgUpdateStorage): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteStorage(value: _18.MsgDeleteStorage): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _18.MsgUpdateParams): {
                    typeUrl: string;
                    value: _18.MsgUpdateParams;
                };
                createStorage(value: _18.MsgCreateStorage): {
                    typeUrl: string;
                    value: _18.MsgCreateStorage;
                };
                updateStorage(value: _18.MsgUpdateStorage): {
                    typeUrl: string;
                    value: _18.MsgUpdateStorage;
                };
                deleteStorage(value: _18.MsgDeleteStorage): {
                    typeUrl: string;
                    value: _18.MsgDeleteStorage;
                };
            };
            toJSON: {
                updateParams(value: _18.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
                createStorage(value: _18.MsgCreateStorage): {
                    typeUrl: string;
                    value: unknown;
                };
                updateStorage(value: _18.MsgUpdateStorage): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteStorage(value: _18.MsgDeleteStorage): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _18.MsgUpdateParams;
                };
                createStorage(value: any): {
                    typeUrl: string;
                    value: _18.MsgCreateStorage;
                };
                updateStorage(value: any): {
                    typeUrl: string;
                    value: _18.MsgUpdateStorage;
                };
                deleteStorage(value: any): {
                    typeUrl: string;
                    value: _18.MsgDeleteStorage;
                };
            };
            fromPartial: {
                updateParams(value: _18.MsgUpdateParams): {
                    typeUrl: string;
                    value: _18.MsgUpdateParams;
                };
                createStorage(value: _18.MsgCreateStorage): {
                    typeUrl: string;
                    value: _18.MsgCreateStorage;
                };
                updateStorage(value: _18.MsgUpdateStorage): {
                    typeUrl: string;
                    value: _18.MsgUpdateStorage;
                };
                deleteStorage(value: _18.MsgDeleteStorage): {
                    typeUrl: string;
                    value: _18.MsgDeleteStorage;
                };
            };
        };
        AminoConverter: {
            "/blit.storage.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _18.MsgUpdateParams) => _18.MsgUpdateParamsAmino;
                fromAmino: (object: _18.MsgUpdateParamsAmino) => _18.MsgUpdateParams;
            };
            "/blit.storage.MsgCreateStorage": {
                aminoType: string;
                toAmino: (message: _18.MsgCreateStorage) => _18.MsgCreateStorageAmino;
                fromAmino: (object: _18.MsgCreateStorageAmino) => _18.MsgCreateStorage;
            };
            "/blit.storage.MsgUpdateStorage": {
                aminoType: string;
                toAmino: (message: _18.MsgUpdateStorage) => _18.MsgUpdateStorageAmino;
                fromAmino: (object: _18.MsgUpdateStorageAmino) => _18.MsgUpdateStorage;
            };
            "/blit.storage.MsgDeleteStorage": {
                aminoType: string;
                toAmino: (message: _18.MsgDeleteStorage) => _18.MsgDeleteStorageAmino;
                fromAmino: (object: _18.MsgDeleteStorageAmino) => _18.MsgDeleteStorage;
            };
        };
        protobufPackage: "blit.storage";
        MsgUpdateParams: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _18.MsgUpdateParams;
            isSDK(o: any): o is _18.MsgUpdateParamsSDKType;
            isAmino(o: any): o is _18.MsgUpdateParamsAmino;
            encode(message: _18.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.MsgUpdateParams;
            fromJSON(object: any): _18.MsgUpdateParams;
            toJSON(message: _18.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_18.MsgUpdateParams>): _18.MsgUpdateParams;
            fromAmino(object: _18.MsgUpdateParamsAmino): _18.MsgUpdateParams;
            toAmino(message: _18.MsgUpdateParams): _18.MsgUpdateParamsAmino;
            fromAminoMsg(object: _18.MsgUpdateParamsAminoMsg): _18.MsgUpdateParams;
            toAminoMsg(message: _18.MsgUpdateParams): _18.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _18.MsgUpdateParamsProtoMsg): _18.MsgUpdateParams;
            toProto(message: _18.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _18.MsgUpdateParams): _18.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            is(o: any): o is _18.MsgUpdateParamsResponse;
            isSDK(o: any): o is _18.MsgUpdateParamsResponseSDKType;
            isAmino(o: any): o is _18.MsgUpdateParamsResponseAmino;
            encode(_: _18.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.MsgUpdateParamsResponse;
            fromJSON(_: any): _18.MsgUpdateParamsResponse;
            toJSON(_: _18.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_18.MsgUpdateParamsResponse>): _18.MsgUpdateParamsResponse;
            fromAmino(_: _18.MsgUpdateParamsResponseAmino): _18.MsgUpdateParamsResponse;
            toAmino(_: _18.MsgUpdateParamsResponse): _18.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _18.MsgUpdateParamsResponseAminoMsg): _18.MsgUpdateParamsResponse;
            fromProtoMsg(message: _18.MsgUpdateParamsResponseProtoMsg): _18.MsgUpdateParamsResponse;
            toProto(message: _18.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _18.MsgUpdateParamsResponse): _18.MsgUpdateParamsResponseProtoMsg;
        };
        MsgCreateStorage: {
            typeUrl: string;
            is(o: any): o is _18.MsgCreateStorage;
            isSDK(o: any): o is _18.MsgCreateStorageSDKType;
            isAmino(o: any): o is _18.MsgCreateStorageAmino;
            encode(message: _18.MsgCreateStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.MsgCreateStorage;
            fromJSON(object: any): _18.MsgCreateStorage;
            toJSON(message: _18.MsgCreateStorage): unknown;
            fromPartial(object: Partial<_18.MsgCreateStorage>): _18.MsgCreateStorage;
            fromAmino(object: _18.MsgCreateStorageAmino): _18.MsgCreateStorage;
            toAmino(message: _18.MsgCreateStorage): _18.MsgCreateStorageAmino;
            fromAminoMsg(object: _18.MsgCreateStorageAminoMsg): _18.MsgCreateStorage;
            fromProtoMsg(message: _18.MsgCreateStorageProtoMsg): _18.MsgCreateStorage;
            toProto(message: _18.MsgCreateStorage): Uint8Array;
            toProtoMsg(message: _18.MsgCreateStorage): _18.MsgCreateStorageProtoMsg;
        };
        MsgCreateStorageResponse: {
            typeUrl: string;
            is(o: any): o is _18.MsgCreateStorageResponse;
            isSDK(o: any): o is _18.MsgCreateStorageResponseSDKType;
            isAmino(o: any): o is _18.MsgCreateStorageResponseAmino;
            encode(_: _18.MsgCreateStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.MsgCreateStorageResponse;
            fromJSON(_: any): _18.MsgCreateStorageResponse;
            toJSON(_: _18.MsgCreateStorageResponse): unknown;
            fromPartial(_: Partial<_18.MsgCreateStorageResponse>): _18.MsgCreateStorageResponse;
            fromAmino(_: _18.MsgCreateStorageResponseAmino): _18.MsgCreateStorageResponse;
            toAmino(_: _18.MsgCreateStorageResponse): _18.MsgCreateStorageResponseAmino;
            fromAminoMsg(object: _18.MsgCreateStorageResponseAminoMsg): _18.MsgCreateStorageResponse;
            fromProtoMsg(message: _18.MsgCreateStorageResponseProtoMsg): _18.MsgCreateStorageResponse;
            toProto(message: _18.MsgCreateStorageResponse): Uint8Array;
            toProtoMsg(message: _18.MsgCreateStorageResponse): _18.MsgCreateStorageResponseProtoMsg;
        };
        MsgUpdateStorage: {
            typeUrl: string;
            is(o: any): o is _18.MsgUpdateStorage;
            isSDK(o: any): o is _18.MsgUpdateStorageSDKType;
            isAmino(o: any): o is _18.MsgUpdateStorageAmino;
            encode(message: _18.MsgUpdateStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.MsgUpdateStorage;
            fromJSON(object: any): _18.MsgUpdateStorage;
            toJSON(message: _18.MsgUpdateStorage): unknown;
            fromPartial(object: Partial<_18.MsgUpdateStorage>): _18.MsgUpdateStorage;
            fromAmino(object: _18.MsgUpdateStorageAmino): _18.MsgUpdateStorage;
            toAmino(message: _18.MsgUpdateStorage): _18.MsgUpdateStorageAmino;
            fromAminoMsg(object: _18.MsgUpdateStorageAminoMsg): _18.MsgUpdateStorage;
            fromProtoMsg(message: _18.MsgUpdateStorageProtoMsg): _18.MsgUpdateStorage;
            toProto(message: _18.MsgUpdateStorage): Uint8Array;
            toProtoMsg(message: _18.MsgUpdateStorage): _18.MsgUpdateStorageProtoMsg;
        };
        MsgUpdateStorageResponse: {
            typeUrl: string;
            is(o: any): o is _18.MsgUpdateStorageResponse;
            isSDK(o: any): o is _18.MsgUpdateStorageResponseSDKType;
            isAmino(o: any): o is _18.MsgUpdateStorageResponseAmino;
            encode(_: _18.MsgUpdateStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.MsgUpdateStorageResponse;
            fromJSON(_: any): _18.MsgUpdateStorageResponse;
            toJSON(_: _18.MsgUpdateStorageResponse): unknown;
            fromPartial(_: Partial<_18.MsgUpdateStorageResponse>): _18.MsgUpdateStorageResponse;
            fromAmino(_: _18.MsgUpdateStorageResponseAmino): _18.MsgUpdateStorageResponse;
            toAmino(_: _18.MsgUpdateStorageResponse): _18.MsgUpdateStorageResponseAmino;
            fromAminoMsg(object: _18.MsgUpdateStorageResponseAminoMsg): _18.MsgUpdateStorageResponse;
            fromProtoMsg(message: _18.MsgUpdateStorageResponseProtoMsg): _18.MsgUpdateStorageResponse;
            toProto(message: _18.MsgUpdateStorageResponse): Uint8Array;
            toProtoMsg(message: _18.MsgUpdateStorageResponse): _18.MsgUpdateStorageResponseProtoMsg;
        };
        MsgDeleteStorage: {
            typeUrl: string;
            is(o: any): o is _18.MsgDeleteStorage;
            isSDK(o: any): o is _18.MsgDeleteStorageSDKType;
            isAmino(o: any): o is _18.MsgDeleteStorageAmino;
            encode(message: _18.MsgDeleteStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.MsgDeleteStorage;
            fromJSON(object: any): _18.MsgDeleteStorage;
            toJSON(message: _18.MsgDeleteStorage): unknown;
            fromPartial(object: Partial<_18.MsgDeleteStorage>): _18.MsgDeleteStorage;
            fromAmino(object: _18.MsgDeleteStorageAmino): _18.MsgDeleteStorage;
            toAmino(message: _18.MsgDeleteStorage): _18.MsgDeleteStorageAmino;
            fromAminoMsg(object: _18.MsgDeleteStorageAminoMsg): _18.MsgDeleteStorage;
            fromProtoMsg(message: _18.MsgDeleteStorageProtoMsg): _18.MsgDeleteStorage;
            toProto(message: _18.MsgDeleteStorage): Uint8Array;
            toProtoMsg(message: _18.MsgDeleteStorage): _18.MsgDeleteStorageProtoMsg;
        };
        MsgDeleteStorageResponse: {
            typeUrl: string;
            is(o: any): o is _18.MsgDeleteStorageResponse;
            isSDK(o: any): o is _18.MsgDeleteStorageResponseSDKType;
            isAmino(o: any): o is _18.MsgDeleteStorageResponseAmino;
            encode(_: _18.MsgDeleteStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.MsgDeleteStorageResponse;
            fromJSON(_: any): _18.MsgDeleteStorageResponse;
            toJSON(_: _18.MsgDeleteStorageResponse): unknown;
            fromPartial(_: Partial<_18.MsgDeleteStorageResponse>): _18.MsgDeleteStorageResponse;
            fromAmino(_: _18.MsgDeleteStorageResponseAmino): _18.MsgDeleteStorageResponse;
            toAmino(_: _18.MsgDeleteStorageResponse): _18.MsgDeleteStorageResponseAmino;
            fromAminoMsg(object: _18.MsgDeleteStorageResponseAminoMsg): _18.MsgDeleteStorageResponse;
            fromProtoMsg(message: _18.MsgDeleteStorageResponseProtoMsg): _18.MsgDeleteStorageResponse;
            toProto(message: _18.MsgDeleteStorageResponse): Uint8Array;
            toProtoMsg(message: _18.MsgDeleteStorageResponse): _18.MsgDeleteStorageResponseProtoMsg;
        };
        Storage: {
            typeUrl: string;
            is(o: any): o is _17.Storage;
            isSDK(o: any): o is _17.StorageSDKType;
            isAmino(o: any): o is _17.StorageAmino;
            encode(message: _17.Storage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.Storage;
            fromJSON(object: any): _17.Storage;
            toJSON(message: _17.Storage): unknown;
            fromPartial(object: Partial<_17.Storage>): _17.Storage;
            fromAmino(object: _17.StorageAmino): _17.Storage;
            toAmino(message: _17.Storage): _17.StorageAmino;
            fromAminoMsg(object: _17.StorageAminoMsg): _17.Storage;
            fromProtoMsg(message: _17.StorageProtoMsg): _17.Storage;
            toProto(message: _17.Storage): Uint8Array;
            toProtoMsg(message: _17.Storage): _17.StorageProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            is(o: any): o is _16.QueryParamsRequest;
            isSDK(o: any): o is _16.QueryParamsRequestSDKType;
            isAmino(o: any): o is _16.QueryParamsRequestAmino;
            encode(_: _16.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.QueryParamsRequest;
            fromJSON(_: any): _16.QueryParamsRequest;
            toJSON(_: _16.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_16.QueryParamsRequest>): _16.QueryParamsRequest;
            fromAmino(_: _16.QueryParamsRequestAmino): _16.QueryParamsRequest;
            toAmino(_: _16.QueryParamsRequest): _16.QueryParamsRequestAmino;
            fromAminoMsg(object: _16.QueryParamsRequestAminoMsg): _16.QueryParamsRequest;
            fromProtoMsg(message: _16.QueryParamsRequestProtoMsg): _16.QueryParamsRequest;
            toProto(message: _16.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _16.QueryParamsRequest): _16.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            is(o: any): o is _16.QueryParamsResponse;
            isSDK(o: any): o is _16.QueryParamsResponseSDKType;
            isAmino(o: any): o is _16.QueryParamsResponseAmino;
            encode(message: _16.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.QueryParamsResponse;
            fromJSON(object: any): _16.QueryParamsResponse;
            toJSON(message: _16.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_16.QueryParamsResponse>): _16.QueryParamsResponse;
            fromAmino(object: _16.QueryParamsResponseAmino): _16.QueryParamsResponse;
            toAmino(message: _16.QueryParamsResponse): _16.QueryParamsResponseAmino;
            fromAminoMsg(object: _16.QueryParamsResponseAminoMsg): _16.QueryParamsResponse;
            fromProtoMsg(message: _16.QueryParamsResponseProtoMsg): _16.QueryParamsResponse;
            toProto(message: _16.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _16.QueryParamsResponse): _16.QueryParamsResponseProtoMsg;
        };
        QueryStorageDetailRequest: {
            typeUrl: string;
            is(o: any): o is _16.QueryStorageDetailRequest;
            isSDK(o: any): o is _16.QueryStorageDetailRequestSDKType;
            isAmino(o: any): o is _16.QueryStorageDetailRequestAmino;
            encode(message: _16.QueryStorageDetailRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.QueryStorageDetailRequest;
            fromJSON(object: any): _16.QueryStorageDetailRequest;
            toJSON(message: _16.QueryStorageDetailRequest): unknown;
            fromPartial(object: Partial<_16.QueryStorageDetailRequest>): _16.QueryStorageDetailRequest;
            fromAmino(object: _16.QueryStorageDetailRequestAmino): _16.QueryStorageDetailRequest;
            toAmino(message: _16.QueryStorageDetailRequest): _16.QueryStorageDetailRequestAmino;
            fromAminoMsg(object: _16.QueryStorageDetailRequestAminoMsg): _16.QueryStorageDetailRequest;
            fromProtoMsg(message: _16.QueryStorageDetailRequestProtoMsg): _16.QueryStorageDetailRequest;
            toProto(message: _16.QueryStorageDetailRequest): Uint8Array;
            toProtoMsg(message: _16.QueryStorageDetailRequest): _16.QueryStorageDetailRequestProtoMsg;
        };
        QueryStorageDetailResponse: {
            typeUrl: string;
            is(o: any): o is _16.QueryStorageDetailResponse;
            isSDK(o: any): o is _16.QueryStorageDetailResponseSDKType;
            isAmino(o: any): o is _16.QueryStorageDetailResponseAmino;
            encode(message: _16.QueryStorageDetailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.QueryStorageDetailResponse;
            fromJSON(object: any): _16.QueryStorageDetailResponse;
            toJSON(message: _16.QueryStorageDetailResponse): unknown;
            fromPartial(object: Partial<_16.QueryStorageDetailResponse>): _16.QueryStorageDetailResponse;
            fromAmino(object: _16.QueryStorageDetailResponseAmino): _16.QueryStorageDetailResponse;
            toAmino(message: _16.QueryStorageDetailResponse): _16.QueryStorageDetailResponseAmino;
            fromAminoMsg(object: _16.QueryStorageDetailResponseAminoMsg): _16.QueryStorageDetailResponse;
            fromProtoMsg(message: _16.QueryStorageDetailResponseProtoMsg): _16.QueryStorageDetailResponse;
            toProto(message: _16.QueryStorageDetailResponse): Uint8Array;
            toProtoMsg(message: _16.QueryStorageDetailResponse): _16.QueryStorageDetailResponseProtoMsg;
        };
        QueryFilterStorageRequest: {
            typeUrl: string;
            is(o: any): o is _16.QueryFilterStorageRequest;
            isSDK(o: any): o is _16.QueryFilterStorageRequestSDKType;
            isAmino(o: any): o is _16.QueryFilterStorageRequestAmino;
            encode(message: _16.QueryFilterStorageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.QueryFilterStorageRequest;
            fromJSON(object: any): _16.QueryFilterStorageRequest;
            toJSON(message: _16.QueryFilterStorageRequest): unknown;
            fromPartial(object: Partial<_16.QueryFilterStorageRequest>): _16.QueryFilterStorageRequest;
            fromAmino(object: _16.QueryFilterStorageRequestAmino): _16.QueryFilterStorageRequest;
            toAmino(message: _16.QueryFilterStorageRequest): _16.QueryFilterStorageRequestAmino;
            fromAminoMsg(object: _16.QueryFilterStorageRequestAminoMsg): _16.QueryFilterStorageRequest;
            fromProtoMsg(message: _16.QueryFilterStorageRequestProtoMsg): _16.QueryFilterStorageRequest;
            toProto(message: _16.QueryFilterStorageRequest): Uint8Array;
            toProtoMsg(message: _16.QueryFilterStorageRequest): _16.QueryFilterStorageRequestProtoMsg;
        };
        QueryFilterStorageResponse: {
            typeUrl: string;
            is(o: any): o is _16.QueryFilterStorageResponse;
            isSDK(o: any): o is _16.QueryFilterStorageResponseSDKType;
            isAmino(o: any): o is _16.QueryFilterStorageResponseAmino;
            encode(message: _16.QueryFilterStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.QueryFilterStorageResponse;
            fromJSON(object: any): _16.QueryFilterStorageResponse;
            toJSON(message: _16.QueryFilterStorageResponse): unknown;
            fromPartial(object: Partial<_16.QueryFilterStorageResponse>): _16.QueryFilterStorageResponse;
            fromAmino(object: _16.QueryFilterStorageResponseAmino): _16.QueryFilterStorageResponse;
            toAmino(message: _16.QueryFilterStorageResponse): _16.QueryFilterStorageResponseAmino;
            fromAminoMsg(object: _16.QueryFilterStorageResponseAminoMsg): _16.QueryFilterStorageResponse;
            fromProtoMsg(message: _16.QueryFilterStorageResponseProtoMsg): _16.QueryFilterStorageResponse;
            toProto(message: _16.QueryFilterStorageResponse): Uint8Array;
            toProtoMsg(message: _16.QueryFilterStorageResponse): _16.QueryFilterStorageResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _15.Params;
            isSDK(o: any): o is _15.ParamsSDKType;
            isAmino(o: any): o is _15.ParamsAmino;
            encode(_: _15.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.Params;
            fromJSON(_: any): _15.Params;
            toJSON(_: _15.Params): unknown;
            fromPartial(_: Partial<_15.Params>): _15.Params;
            fromAmino(_: _15.ParamsAmino): _15.Params;
            toAmino(_: _15.Params): _15.ParamsAmino;
            fromAminoMsg(object: _15.ParamsAminoMsg): _15.Params;
            toAminoMsg(message: _15.Params): _15.ParamsAminoMsg;
            fromProtoMsg(message: _15.ParamsProtoMsg): _15.Params;
            toProto(message: _15.Params): Uint8Array;
            toProtoMsg(message: _15.Params): _15.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            is(o: any): o is _14.GenesisState;
            isSDK(o: any): o is _14.GenesisStateSDKType;
            isAmino(o: any): o is _14.GenesisStateAmino;
            encode(message: _14.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.GenesisState;
            fromJSON(object: any): _14.GenesisState;
            toJSON(message: _14.GenesisState): unknown;
            fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
            fromAmino(object: _14.GenesisStateAmino): _14.GenesisState;
            toAmino(message: _14.GenesisState): _14.GenesisStateAmino;
            fromAminoMsg(object: _14.GenesisStateAminoMsg): _14.GenesisState;
            fromProtoMsg(message: _14.GenesisStateProtoMsg): _14.GenesisState;
            toProto(message: _14.GenesisState): Uint8Array;
            toProtoMsg(message: _14.GenesisState): _14.GenesisStateProtoMsg;
        };
    };
    const ClientFactory: {
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            blit: {
                blit: _189.LCDQueryClient;
                script: _190.LCDQueryClient;
                storage: _191.LCDQueryClient;
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

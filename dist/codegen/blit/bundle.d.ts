import * as _1 from "./blit/genesis";
import * as _2 from "./blit/params";
import * as _3 from "./blit/query";
import * as _4 from "./blit/tx";
import * as _5 from "./script/genesis";
import * as _7 from "./script/params";
import * as _8 from "./script/query";
import * as _9 from "./script/script";
import * as _10 from "./script/tx";
import * as _11 from "./storage/genesis";
import * as _12 from "./storage/params";
import * as _13 from "./storage/query";
import * as _14 from "./storage/storage";
import * as _15 from "./storage/tx";
import * as _185 from "./blit/query.lcd";
import * as _186 from "./script/query.lcd";
import * as _187 from "./storage/query.lcd";
import * as _188 from "./blit/query.rpc.Query";
import * as _189 from "./script/query.rpc.Query";
import * as _190 from "./storage/query.rpc.Query";
import * as _191 from "./blit/tx.rpc.msg";
import * as _192 from "./script/tx.rpc.msg";
import * as _193 from "./storage/tx.rpc.msg";
export declare namespace blit {
    const blit: {
        Msg: typeof _191.Msg;
        Query: typeof _188.Query;
        QueryClientImpl: typeof _188.QueryClientImpl;
        LCDQueryClient: typeof _185.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _4.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                mintCoins(value: _4.MsgMintCoins): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                burnCoins(value: _4.MsgBurnCoins): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceTransferCoins(value: _4.MsgForceTransferCoins): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setDenomMetadata(value: _4.MsgSetDenomMetadata): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _4.MsgUpdateParams): {
                    typeUrl: string;
                    value: _4.MsgUpdateParams;
                };
                mintCoins(value: _4.MsgMintCoins): {
                    typeUrl: string;
                    value: _4.MsgMintCoins;
                };
                burnCoins(value: _4.MsgBurnCoins): {
                    typeUrl: string;
                    value: _4.MsgBurnCoins;
                };
                forceTransferCoins(value: _4.MsgForceTransferCoins): {
                    typeUrl: string;
                    value: _4.MsgForceTransferCoins;
                };
                setDenomMetadata(value: _4.MsgSetDenomMetadata): {
                    typeUrl: string;
                    value: _4.MsgSetDenomMetadata;
                };
            };
            toJSON: {
                updateParams(value: _4.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
                mintCoins(value: _4.MsgMintCoins): {
                    typeUrl: string;
                    value: unknown;
                };
                burnCoins(value: _4.MsgBurnCoins): {
                    typeUrl: string;
                    value: unknown;
                };
                forceTransferCoins(value: _4.MsgForceTransferCoins): {
                    typeUrl: string;
                    value: unknown;
                };
                setDenomMetadata(value: _4.MsgSetDenomMetadata): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _4.MsgUpdateParams;
                };
                mintCoins(value: any): {
                    typeUrl: string;
                    value: _4.MsgMintCoins;
                };
                burnCoins(value: any): {
                    typeUrl: string;
                    value: _4.MsgBurnCoins;
                };
                forceTransferCoins(value: any): {
                    typeUrl: string;
                    value: _4.MsgForceTransferCoins;
                };
                setDenomMetadata(value: any): {
                    typeUrl: string;
                    value: _4.MsgSetDenomMetadata;
                };
            };
            fromPartial: {
                updateParams(value: _4.MsgUpdateParams): {
                    typeUrl: string;
                    value: _4.MsgUpdateParams;
                };
                mintCoins(value: _4.MsgMintCoins): {
                    typeUrl: string;
                    value: _4.MsgMintCoins;
                };
                burnCoins(value: _4.MsgBurnCoins): {
                    typeUrl: string;
                    value: _4.MsgBurnCoins;
                };
                forceTransferCoins(value: _4.MsgForceTransferCoins): {
                    typeUrl: string;
                    value: _4.MsgForceTransferCoins;
                };
                setDenomMetadata(value: _4.MsgSetDenomMetadata): {
                    typeUrl: string;
                    value: _4.MsgSetDenomMetadata;
                };
            };
        };
        AminoConverter: {
            "/blit.blit.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _4.MsgUpdateParams) => _4.MsgUpdateParamsAmino;
                fromAmino: (object: _4.MsgUpdateParamsAmino) => _4.MsgUpdateParams;
            };
            "/blit.blit.MsgMintCoins": {
                aminoType: string;
                toAmino: (message: _4.MsgMintCoins) => _4.MsgMintCoinsAmino;
                fromAmino: (object: _4.MsgMintCoinsAmino) => _4.MsgMintCoins;
            };
            "/blit.blit.MsgBurnCoins": {
                aminoType: string;
                toAmino: (message: _4.MsgBurnCoins) => _4.MsgBurnCoinsAmino;
                fromAmino: (object: _4.MsgBurnCoinsAmino) => _4.MsgBurnCoins;
            };
            "/blit.blit.MsgForceTransferCoins": {
                aminoType: string;
                toAmino: (message: _4.MsgForceTransferCoins) => _4.MsgForceTransferCoinsAmino;
                fromAmino: (object: _4.MsgForceTransferCoinsAmino) => _4.MsgForceTransferCoins;
            };
            "/blit.blit.MsgSetDenomMetadata": {
                aminoType: string;
                toAmino: (message: _4.MsgSetDenomMetadata) => _4.MsgSetDenomMetadataAmino;
                fromAmino: (object: _4.MsgSetDenomMetadataAmino) => _4.MsgSetDenomMetadata;
            };
        };
        protobufPackage: "blit.blit";
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _4.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.MsgUpdateParams;
            fromJSON(object: any): _4.MsgUpdateParams;
            toJSON(message: _4.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_4.MsgUpdateParams>): _4.MsgUpdateParams;
            fromAmino(object: _4.MsgUpdateParamsAmino): _4.MsgUpdateParams;
            toAmino(message: _4.MsgUpdateParams): _4.MsgUpdateParamsAmino;
            fromAminoMsg(object: _4.MsgUpdateParamsAminoMsg): _4.MsgUpdateParams;
            toAminoMsg(message: _4.MsgUpdateParams): _4.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _4.MsgUpdateParamsProtoMsg): _4.MsgUpdateParams;
            toProto(message: _4.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _4.MsgUpdateParams): _4.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _4.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.MsgUpdateParamsResponse;
            fromJSON(_: any): _4.MsgUpdateParamsResponse;
            toJSON(_: _4.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_4.MsgUpdateParamsResponse>): _4.MsgUpdateParamsResponse;
            fromAmino(_: _4.MsgUpdateParamsResponseAmino): _4.MsgUpdateParamsResponse;
            toAmino(_: _4.MsgUpdateParamsResponse): _4.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _4.MsgUpdateParamsResponseAminoMsg): _4.MsgUpdateParamsResponse;
            fromProtoMsg(message: _4.MsgUpdateParamsResponseProtoMsg): _4.MsgUpdateParamsResponse;
            toProto(message: _4.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _4.MsgUpdateParamsResponse): _4.MsgUpdateParamsResponseProtoMsg;
        };
        MsgMintCoins: {
            typeUrl: string;
            encode(message: _4.MsgMintCoins, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.MsgMintCoins;
            fromJSON(object: any): _4.MsgMintCoins;
            toJSON(message: _4.MsgMintCoins): unknown;
            fromPartial(object: Partial<_4.MsgMintCoins>): _4.MsgMintCoins;
            fromAmino(object: _4.MsgMintCoinsAmino): _4.MsgMintCoins;
            toAmino(message: _4.MsgMintCoins): _4.MsgMintCoinsAmino;
            fromAminoMsg(object: _4.MsgMintCoinsAminoMsg): _4.MsgMintCoins;
            fromProtoMsg(message: _4.MsgMintCoinsProtoMsg): _4.MsgMintCoins;
            toProto(message: _4.MsgMintCoins): Uint8Array;
            toProtoMsg(message: _4.MsgMintCoins): _4.MsgMintCoinsProtoMsg;
        };
        MsgMintCoinsResponse: {
            typeUrl: string;
            encode(_: _4.MsgMintCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.MsgMintCoinsResponse;
            fromJSON(_: any): _4.MsgMintCoinsResponse;
            toJSON(_: _4.MsgMintCoinsResponse): unknown;
            fromPartial(_: Partial<_4.MsgMintCoinsResponse>): _4.MsgMintCoinsResponse;
            fromAmino(_: _4.MsgMintCoinsResponseAmino): _4.MsgMintCoinsResponse;
            toAmino(_: _4.MsgMintCoinsResponse): _4.MsgMintCoinsResponseAmino;
            fromAminoMsg(object: _4.MsgMintCoinsResponseAminoMsg): _4.MsgMintCoinsResponse;
            fromProtoMsg(message: _4.MsgMintCoinsResponseProtoMsg): _4.MsgMintCoinsResponse;
            toProto(message: _4.MsgMintCoinsResponse): Uint8Array;
            toProtoMsg(message: _4.MsgMintCoinsResponse): _4.MsgMintCoinsResponseProtoMsg;
        };
        MsgBurnCoins: {
            typeUrl: string;
            encode(message: _4.MsgBurnCoins, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.MsgBurnCoins;
            fromJSON(object: any): _4.MsgBurnCoins;
            toJSON(message: _4.MsgBurnCoins): unknown;
            fromPartial(object: Partial<_4.MsgBurnCoins>): _4.MsgBurnCoins;
            fromAmino(object: _4.MsgBurnCoinsAmino): _4.MsgBurnCoins;
            toAmino(message: _4.MsgBurnCoins): _4.MsgBurnCoinsAmino;
            fromAminoMsg(object: _4.MsgBurnCoinsAminoMsg): _4.MsgBurnCoins;
            fromProtoMsg(message: _4.MsgBurnCoinsProtoMsg): _4.MsgBurnCoins;
            toProto(message: _4.MsgBurnCoins): Uint8Array;
            toProtoMsg(message: _4.MsgBurnCoins): _4.MsgBurnCoinsProtoMsg;
        };
        MsgBurnCoinsResponse: {
            typeUrl: string;
            encode(_: _4.MsgBurnCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.MsgBurnCoinsResponse;
            fromJSON(_: any): _4.MsgBurnCoinsResponse;
            toJSON(_: _4.MsgBurnCoinsResponse): unknown;
            fromPartial(_: Partial<_4.MsgBurnCoinsResponse>): _4.MsgBurnCoinsResponse;
            fromAmino(_: _4.MsgBurnCoinsResponseAmino): _4.MsgBurnCoinsResponse;
            toAmino(_: _4.MsgBurnCoinsResponse): _4.MsgBurnCoinsResponseAmino;
            fromAminoMsg(object: _4.MsgBurnCoinsResponseAminoMsg): _4.MsgBurnCoinsResponse;
            fromProtoMsg(message: _4.MsgBurnCoinsResponseProtoMsg): _4.MsgBurnCoinsResponse;
            toProto(message: _4.MsgBurnCoinsResponse): Uint8Array;
            toProtoMsg(message: _4.MsgBurnCoinsResponse): _4.MsgBurnCoinsResponseProtoMsg;
        };
        MsgForceTransferCoins: {
            typeUrl: string;
            encode(message: _4.MsgForceTransferCoins, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.MsgForceTransferCoins;
            fromJSON(object: any): _4.MsgForceTransferCoins;
            toJSON(message: _4.MsgForceTransferCoins): unknown;
            fromPartial(object: Partial<_4.MsgForceTransferCoins>): _4.MsgForceTransferCoins;
            fromAmino(object: _4.MsgForceTransferCoinsAmino): _4.MsgForceTransferCoins;
            toAmino(message: _4.MsgForceTransferCoins): _4.MsgForceTransferCoinsAmino;
            fromAminoMsg(object: _4.MsgForceTransferCoinsAminoMsg): _4.MsgForceTransferCoins;
            fromProtoMsg(message: _4.MsgForceTransferCoinsProtoMsg): _4.MsgForceTransferCoins;
            toProto(message: _4.MsgForceTransferCoins): Uint8Array;
            toProtoMsg(message: _4.MsgForceTransferCoins): _4.MsgForceTransferCoinsProtoMsg;
        };
        MsgForceTransferCoinsResponse: {
            typeUrl: string;
            encode(_: _4.MsgForceTransferCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.MsgForceTransferCoinsResponse;
            fromJSON(_: any): _4.MsgForceTransferCoinsResponse;
            toJSON(_: _4.MsgForceTransferCoinsResponse): unknown;
            fromPartial(_: Partial<_4.MsgForceTransferCoinsResponse>): _4.MsgForceTransferCoinsResponse;
            fromAmino(_: _4.MsgForceTransferCoinsResponseAmino): _4.MsgForceTransferCoinsResponse;
            toAmino(_: _4.MsgForceTransferCoinsResponse): _4.MsgForceTransferCoinsResponseAmino;
            fromAminoMsg(object: _4.MsgForceTransferCoinsResponseAminoMsg): _4.MsgForceTransferCoinsResponse;
            fromProtoMsg(message: _4.MsgForceTransferCoinsResponseProtoMsg): _4.MsgForceTransferCoinsResponse;
            toProto(message: _4.MsgForceTransferCoinsResponse): Uint8Array;
            toProtoMsg(message: _4.MsgForceTransferCoinsResponse): _4.MsgForceTransferCoinsResponseProtoMsg;
        };
        MsgSetDenomMetadata: {
            typeUrl: string;
            encode(message: _4.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.MsgSetDenomMetadata;
            fromJSON(object: any): _4.MsgSetDenomMetadata;
            toJSON(message: _4.MsgSetDenomMetadata): unknown;
            fromPartial(object: Partial<_4.MsgSetDenomMetadata>): _4.MsgSetDenomMetadata;
            fromAmino(object: _4.MsgSetDenomMetadataAmino): _4.MsgSetDenomMetadata;
            toAmino(message: _4.MsgSetDenomMetadata): _4.MsgSetDenomMetadataAmino;
            fromAminoMsg(object: _4.MsgSetDenomMetadataAminoMsg): _4.MsgSetDenomMetadata;
            fromProtoMsg(message: _4.MsgSetDenomMetadataProtoMsg): _4.MsgSetDenomMetadata;
            toProto(message: _4.MsgSetDenomMetadata): Uint8Array;
            toProtoMsg(message: _4.MsgSetDenomMetadata): _4.MsgSetDenomMetadataProtoMsg;
        };
        MsgSetDenomMetadataResponse: {
            typeUrl: string;
            encode(_: _4.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.MsgSetDenomMetadataResponse;
            fromJSON(_: any): _4.MsgSetDenomMetadataResponse;
            toJSON(_: _4.MsgSetDenomMetadataResponse): unknown;
            fromPartial(_: Partial<_4.MsgSetDenomMetadataResponse>): _4.MsgSetDenomMetadataResponse;
            fromAmino(_: _4.MsgSetDenomMetadataResponseAmino): _4.MsgSetDenomMetadataResponse;
            toAmino(_: _4.MsgSetDenomMetadataResponse): _4.MsgSetDenomMetadataResponseAmino;
            fromAminoMsg(object: _4.MsgSetDenomMetadataResponseAminoMsg): _4.MsgSetDenomMetadataResponse;
            fromProtoMsg(message: _4.MsgSetDenomMetadataResponseProtoMsg): _4.MsgSetDenomMetadataResponse;
            toProto(message: _4.MsgSetDenomMetadataResponse): Uint8Array;
            toProtoMsg(message: _4.MsgSetDenomMetadataResponse): _4.MsgSetDenomMetadataResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _3.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.QueryParamsRequest;
            fromJSON(_: any): _3.QueryParamsRequest;
            toJSON(_: _3.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_3.QueryParamsRequest>): _3.QueryParamsRequest;
            fromAmino(_: _3.QueryParamsRequestAmino): _3.QueryParamsRequest;
            toAmino(_: _3.QueryParamsRequest): _3.QueryParamsRequestAmino;
            fromAminoMsg(object: _3.QueryParamsRequestAminoMsg): _3.QueryParamsRequest;
            fromProtoMsg(message: _3.QueryParamsRequestProtoMsg): _3.QueryParamsRequest;
            toProto(message: _3.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _3.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.QueryParamsResponse;
            fromJSON(object: any): _3.QueryParamsResponse;
            toJSON(message: _3.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_3.QueryParamsResponse>): _3.QueryParamsResponse;
            fromAmino(object: _3.QueryParamsResponseAmino): _3.QueryParamsResponse;
            toAmino(message: _3.QueryParamsResponse): _3.QueryParamsResponseAmino;
            fromAminoMsg(object: _3.QueryParamsResponseAminoMsg): _3.QueryParamsResponse;
            fromProtoMsg(message: _3.QueryParamsResponseProtoMsg): _3.QueryParamsResponse;
            toProto(message: _3.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _2.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _2.Params;
            fromJSON(_: any): _2.Params;
            toJSON(_: _2.Params): unknown;
            fromPartial(_: Partial<_2.Params>): _2.Params;
            fromAmino(_: _2.ParamsAmino): _2.Params;
            toAmino(_: _2.Params): _2.ParamsAmino;
            fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
            toAminoMsg(message: _2.Params): _2.ParamsAminoMsg;
            fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
            toProto(message: _2.Params): Uint8Array;
            toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _1.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _1.GenesisState;
            fromJSON(object: any): _1.GenesisState;
            toJSON(message: _1.GenesisState): unknown;
            fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
            fromAmino(object: _1.GenesisStateAmino): _1.GenesisState;
            toAmino(message: _1.GenesisState): _1.GenesisStateAmino;
            fromAminoMsg(object: _1.GenesisStateAminoMsg): _1.GenesisState;
            fromProtoMsg(message: _1.GenesisStateProtoMsg): _1.GenesisState;
            toProto(message: _1.GenesisState): Uint8Array;
            toProtoMsg(message: _1.GenesisState): _1.GenesisStateProtoMsg;
        };
    };
    const script: {
        Msg: typeof _192.Msg;
        Query: typeof _189.Query;
        QueryClientImpl: typeof _189.QueryClientImpl;
        LCDQueryClient: typeof _186.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _10.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createScript(value: _10.MsgCreateScript): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateScript(value: _10.MsgUpdateScript): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                run(value: _10.MsgRun): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _10.MsgUpdateParams): {
                    typeUrl: string;
                    value: _10.MsgUpdateParams;
                };
                createScript(value: _10.MsgCreateScript): {
                    typeUrl: string;
                    value: _10.MsgCreateScript;
                };
                updateScript(value: _10.MsgUpdateScript): {
                    typeUrl: string;
                    value: _10.MsgUpdateScript;
                };
                run(value: _10.MsgRun): {
                    typeUrl: string;
                    value: _10.MsgRun;
                };
            };
            toJSON: {
                updateParams(value: _10.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
                createScript(value: _10.MsgCreateScript): {
                    typeUrl: string;
                    value: unknown;
                };
                updateScript(value: _10.MsgUpdateScript): {
                    typeUrl: string;
                    value: unknown;
                };
                run(value: _10.MsgRun): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _10.MsgUpdateParams;
                };
                createScript(value: any): {
                    typeUrl: string;
                    value: _10.MsgCreateScript;
                };
                updateScript(value: any): {
                    typeUrl: string;
                    value: _10.MsgUpdateScript;
                };
                run(value: any): {
                    typeUrl: string;
                    value: _10.MsgRun;
                };
            };
            fromPartial: {
                updateParams(value: _10.MsgUpdateParams): {
                    typeUrl: string;
                    value: _10.MsgUpdateParams;
                };
                createScript(value: _10.MsgCreateScript): {
                    typeUrl: string;
                    value: _10.MsgCreateScript;
                };
                updateScript(value: _10.MsgUpdateScript): {
                    typeUrl: string;
                    value: _10.MsgUpdateScript;
                };
                run(value: _10.MsgRun): {
                    typeUrl: string;
                    value: _10.MsgRun;
                };
            };
        };
        AminoConverter: {
            "/blit.script.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _10.MsgUpdateParams) => _10.MsgUpdateParamsAmino;
                fromAmino: (object: _10.MsgUpdateParamsAmino) => _10.MsgUpdateParams;
            };
            "/blit.script.MsgCreateScript": {
                aminoType: string;
                toAmino: (message: _10.MsgCreateScript) => _10.MsgCreateScriptAmino;
                fromAmino: (object: _10.MsgCreateScriptAmino) => _10.MsgCreateScript;
            };
            "/blit.script.MsgUpdateScript": {
                aminoType: string;
                toAmino: (message: _10.MsgUpdateScript) => _10.MsgUpdateScriptAmino;
                fromAmino: (object: _10.MsgUpdateScriptAmino) => _10.MsgUpdateScript;
            };
            "/blit.script.MsgRun": {
                aminoType: string;
                toAmino: (message: _10.MsgRun) => _10.MsgRunAmino;
                fromAmino: (object: _10.MsgRunAmino) => _10.MsgRun;
            };
        };
        protobufPackage: "blit.script";
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _10.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.MsgUpdateParams;
            fromJSON(object: any): _10.MsgUpdateParams;
            toJSON(message: _10.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_10.MsgUpdateParams>): _10.MsgUpdateParams;
            fromAmino(object: _10.MsgUpdateParamsAmino): _10.MsgUpdateParams;
            toAmino(message: _10.MsgUpdateParams): _10.MsgUpdateParamsAmino;
            fromAminoMsg(object: _10.MsgUpdateParamsAminoMsg): _10.MsgUpdateParams;
            toAminoMsg(message: _10.MsgUpdateParams): _10.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _10.MsgUpdateParamsProtoMsg): _10.MsgUpdateParams;
            toProto(message: _10.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _10.MsgUpdateParams): _10.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _10.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.MsgUpdateParamsResponse;
            fromJSON(_: any): _10.MsgUpdateParamsResponse;
            toJSON(_: _10.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_10.MsgUpdateParamsResponse>): _10.MsgUpdateParamsResponse;
            fromAmino(_: _10.MsgUpdateParamsResponseAmino): _10.MsgUpdateParamsResponse;
            toAmino(_: _10.MsgUpdateParamsResponse): _10.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _10.MsgUpdateParamsResponseAminoMsg): _10.MsgUpdateParamsResponse;
            fromProtoMsg(message: _10.MsgUpdateParamsResponseProtoMsg): _10.MsgUpdateParamsResponse;
            toProto(message: _10.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _10.MsgUpdateParamsResponse): _10.MsgUpdateParamsResponseProtoMsg;
        };
        MsgCreateScript: {
            typeUrl: string;
            encode(message: _10.MsgCreateScript, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.MsgCreateScript;
            fromJSON(object: any): _10.MsgCreateScript;
            toJSON(message: _10.MsgCreateScript): unknown;
            fromPartial(object: Partial<_10.MsgCreateScript>): _10.MsgCreateScript;
            fromAmino(object: _10.MsgCreateScriptAmino): _10.MsgCreateScript;
            toAmino(message: _10.MsgCreateScript): _10.MsgCreateScriptAmino;
            fromAminoMsg(object: _10.MsgCreateScriptAminoMsg): _10.MsgCreateScript;
            fromProtoMsg(message: _10.MsgCreateScriptProtoMsg): _10.MsgCreateScript;
            toProto(message: _10.MsgCreateScript): Uint8Array;
            toProtoMsg(message: _10.MsgCreateScript): _10.MsgCreateScriptProtoMsg;
        };
        MsgCreateScriptResponse: {
            typeUrl: string;
            encode(message: _10.MsgCreateScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.MsgCreateScriptResponse;
            fromJSON(object: any): _10.MsgCreateScriptResponse;
            toJSON(message: _10.MsgCreateScriptResponse): unknown;
            fromPartial(object: Partial<_10.MsgCreateScriptResponse>): _10.MsgCreateScriptResponse;
            fromAmino(object: _10.MsgCreateScriptResponseAmino): _10.MsgCreateScriptResponse;
            toAmino(message: _10.MsgCreateScriptResponse): _10.MsgCreateScriptResponseAmino;
            fromAminoMsg(object: _10.MsgCreateScriptResponseAminoMsg): _10.MsgCreateScriptResponse;
            fromProtoMsg(message: _10.MsgCreateScriptResponseProtoMsg): _10.MsgCreateScriptResponse;
            toProto(message: _10.MsgCreateScriptResponse): Uint8Array;
            toProtoMsg(message: _10.MsgCreateScriptResponse): _10.MsgCreateScriptResponseProtoMsg;
        };
        MsgUpdateScript: {
            typeUrl: string;
            encode(message: _10.MsgUpdateScript, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.MsgUpdateScript;
            fromJSON(object: any): _10.MsgUpdateScript;
            toJSON(message: _10.MsgUpdateScript): unknown;
            fromPartial(object: Partial<_10.MsgUpdateScript>): _10.MsgUpdateScript;
            fromAmino(object: _10.MsgUpdateScriptAmino): _10.MsgUpdateScript;
            toAmino(message: _10.MsgUpdateScript): _10.MsgUpdateScriptAmino;
            fromAminoMsg(object: _10.MsgUpdateScriptAminoMsg): _10.MsgUpdateScript;
            fromProtoMsg(message: _10.MsgUpdateScriptProtoMsg): _10.MsgUpdateScript;
            toProto(message: _10.MsgUpdateScript): Uint8Array;
            toProtoMsg(message: _10.MsgUpdateScript): _10.MsgUpdateScriptProtoMsg;
        };
        MsgUpdateScriptResponse: {
            typeUrl: string;
            encode(message: _10.MsgUpdateScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.MsgUpdateScriptResponse;
            fromJSON(object: any): _10.MsgUpdateScriptResponse;
            toJSON(message: _10.MsgUpdateScriptResponse): unknown;
            fromPartial(object: Partial<_10.MsgUpdateScriptResponse>): _10.MsgUpdateScriptResponse;
            fromAmino(object: _10.MsgUpdateScriptResponseAmino): _10.MsgUpdateScriptResponse;
            toAmino(message: _10.MsgUpdateScriptResponse): _10.MsgUpdateScriptResponseAmino;
            fromAminoMsg(object: _10.MsgUpdateScriptResponseAminoMsg): _10.MsgUpdateScriptResponse;
            fromProtoMsg(message: _10.MsgUpdateScriptResponseProtoMsg): _10.MsgUpdateScriptResponse;
            toProto(message: _10.MsgUpdateScriptResponse): Uint8Array;
            toProtoMsg(message: _10.MsgUpdateScriptResponse): _10.MsgUpdateScriptResponseProtoMsg;
        };
        MsgDeleteScript: {
            typeUrl: string;
            encode(message: _10.MsgDeleteScript, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.MsgDeleteScript;
            fromJSON(object: any): _10.MsgDeleteScript;
            toJSON(message: _10.MsgDeleteScript): unknown;
            fromPartial(object: Partial<_10.MsgDeleteScript>): _10.MsgDeleteScript;
            fromAmino(object: _10.MsgDeleteScriptAmino): _10.MsgDeleteScript;
            toAmino(message: _10.MsgDeleteScript): _10.MsgDeleteScriptAmino;
            fromAminoMsg(object: _10.MsgDeleteScriptAminoMsg): _10.MsgDeleteScript;
            fromProtoMsg(message: _10.MsgDeleteScriptProtoMsg): _10.MsgDeleteScript;
            toProto(message: _10.MsgDeleteScript): Uint8Array;
            toProtoMsg(message: _10.MsgDeleteScript): _10.MsgDeleteScriptProtoMsg;
        };
        MsgDeleteScriptResponse: {
            typeUrl: string;
            encode(_: _10.MsgDeleteScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.MsgDeleteScriptResponse;
            fromJSON(_: any): _10.MsgDeleteScriptResponse;
            toJSON(_: _10.MsgDeleteScriptResponse): unknown;
            fromPartial(_: Partial<_10.MsgDeleteScriptResponse>): _10.MsgDeleteScriptResponse;
            fromAmino(_: _10.MsgDeleteScriptResponseAmino): _10.MsgDeleteScriptResponse;
            toAmino(_: _10.MsgDeleteScriptResponse): _10.MsgDeleteScriptResponseAmino;
            fromAminoMsg(object: _10.MsgDeleteScriptResponseAminoMsg): _10.MsgDeleteScriptResponse;
            fromProtoMsg(message: _10.MsgDeleteScriptResponseProtoMsg): _10.MsgDeleteScriptResponse;
            toProto(message: _10.MsgDeleteScriptResponse): Uint8Array;
            toProtoMsg(message: _10.MsgDeleteScriptResponse): _10.MsgDeleteScriptResponseProtoMsg;
        };
        MsgRun: {
            typeUrl: string;
            encode(message: _10.MsgRun, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.MsgRun;
            fromJSON(object: any): _10.MsgRun;
            toJSON(message: _10.MsgRun): unknown;
            fromPartial(object: Partial<_10.MsgRun>): _10.MsgRun;
            fromAmino(object: _10.MsgRunAmino): _10.MsgRun;
            toAmino(message: _10.MsgRun): _10.MsgRunAmino;
            fromAminoMsg(object: _10.MsgRunAminoMsg): _10.MsgRun;
            fromProtoMsg(message: _10.MsgRunProtoMsg): _10.MsgRun;
            toProto(message: _10.MsgRun): Uint8Array;
            toProtoMsg(message: _10.MsgRun): _10.MsgRunProtoMsg;
        };
        MsgRunResponse: {
            typeUrl: string;
            encode(message: _10.MsgRunResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.MsgRunResponse;
            fromJSON(object: any): _10.MsgRunResponse;
            toJSON(message: _10.MsgRunResponse): unknown;
            fromPartial(object: Partial<_10.MsgRunResponse>): _10.MsgRunResponse;
            fromAmino(object: _10.MsgRunResponseAmino): _10.MsgRunResponse;
            toAmino(message: _10.MsgRunResponse): _10.MsgRunResponseAmino;
            fromAminoMsg(object: _10.MsgRunResponseAminoMsg): _10.MsgRunResponse;
            fromProtoMsg(message: _10.MsgRunResponseProtoMsg): _10.MsgRunResponse;
            toProto(message: _10.MsgRunResponse): Uint8Array;
            toProtoMsg(message: _10.MsgRunResponse): _10.MsgRunResponseProtoMsg;
        };
        Script: {
            typeUrl: string;
            encode(message: _9.Script, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _9.Script;
            fromJSON(object: any): _9.Script;
            toJSON(message: _9.Script): unknown;
            fromPartial(object: Partial<_9.Script>): _9.Script;
            fromAmino(object: _9.ScriptAmino): _9.Script;
            toAmino(message: _9.Script): _9.ScriptAmino;
            fromAminoMsg(object: _9.ScriptAminoMsg): _9.Script;
            fromProtoMsg(message: _9.ScriptProtoMsg): _9.Script;
            toProto(message: _9.Script): Uint8Array;
            toProtoMsg(message: _9.Script): _9.ScriptProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _8.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.QueryParamsRequest;
            fromJSON(_: any): _8.QueryParamsRequest;
            toJSON(_: _8.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_8.QueryParamsRequest>): _8.QueryParamsRequest;
            fromAmino(_: _8.QueryParamsRequestAmino): _8.QueryParamsRequest;
            toAmino(_: _8.QueryParamsRequest): _8.QueryParamsRequestAmino;
            fromAminoMsg(object: _8.QueryParamsRequestAminoMsg): _8.QueryParamsRequest;
            fromProtoMsg(message: _8.QueryParamsRequestProtoMsg): _8.QueryParamsRequest;
            toProto(message: _8.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _8.QueryParamsRequest): _8.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _8.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.QueryParamsResponse;
            fromJSON(object: any): _8.QueryParamsResponse;
            toJSON(message: _8.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_8.QueryParamsResponse>): _8.QueryParamsResponse;
            fromAmino(object: _8.QueryParamsResponseAmino): _8.QueryParamsResponse;
            toAmino(message: _8.QueryParamsResponse): _8.QueryParamsResponseAmino;
            fromAminoMsg(object: _8.QueryParamsResponseAminoMsg): _8.QueryParamsResponse;
            fromProtoMsg(message: _8.QueryParamsResponseProtoMsg): _8.QueryParamsResponse;
            toProto(message: _8.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _8.QueryParamsResponse): _8.QueryParamsResponseProtoMsg;
        };
        QueryScriptRequest: {
            typeUrl: string;
            encode(message: _8.QueryScriptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.QueryScriptRequest;
            fromJSON(object: any): _8.QueryScriptRequest;
            toJSON(message: _8.QueryScriptRequest): unknown;
            fromPartial(object: Partial<_8.QueryScriptRequest>): _8.QueryScriptRequest;
            fromAmino(object: _8.QueryScriptRequestAmino): _8.QueryScriptRequest;
            toAmino(message: _8.QueryScriptRequest): _8.QueryScriptRequestAmino;
            fromAminoMsg(object: _8.QueryScriptRequestAminoMsg): _8.QueryScriptRequest;
            fromProtoMsg(message: _8.QueryScriptRequestProtoMsg): _8.QueryScriptRequest;
            toProto(message: _8.QueryScriptRequest): Uint8Array;
            toProtoMsg(message: _8.QueryScriptRequest): _8.QueryScriptRequestProtoMsg;
        };
        QueryScriptResponse: {
            typeUrl: string;
            encode(message: _8.QueryScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.QueryScriptResponse;
            fromJSON(object: any): _8.QueryScriptResponse;
            toJSON(message: _8.QueryScriptResponse): unknown;
            fromPartial(object: Partial<_8.QueryScriptResponse>): _8.QueryScriptResponse;
            fromAmino(object: _8.QueryScriptResponseAmino): _8.QueryScriptResponse;
            toAmino(message: _8.QueryScriptResponse): _8.QueryScriptResponseAmino;
            fromAminoMsg(object: _8.QueryScriptResponseAminoMsg): _8.QueryScriptResponse;
            fromProtoMsg(message: _8.QueryScriptResponseProtoMsg): _8.QueryScriptResponse;
            toProto(message: _8.QueryScriptResponse): Uint8Array;
            toProtoMsg(message: _8.QueryScriptResponse): _8.QueryScriptResponseProtoMsg;
        };
        QueryScriptsRequest: {
            typeUrl: string;
            encode(message: _8.QueryScriptsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.QueryScriptsRequest;
            fromJSON(object: any): _8.QueryScriptsRequest;
            toJSON(message: _8.QueryScriptsRequest): unknown;
            fromPartial(object: Partial<_8.QueryScriptsRequest>): _8.QueryScriptsRequest;
            fromAmino(object: _8.QueryScriptsRequestAmino): _8.QueryScriptsRequest;
            toAmino(message: _8.QueryScriptsRequest): _8.QueryScriptsRequestAmino;
            fromAminoMsg(object: _8.QueryScriptsRequestAminoMsg): _8.QueryScriptsRequest;
            fromProtoMsg(message: _8.QueryScriptsRequestProtoMsg): _8.QueryScriptsRequest;
            toProto(message: _8.QueryScriptsRequest): Uint8Array;
            toProtoMsg(message: _8.QueryScriptsRequest): _8.QueryScriptsRequestProtoMsg;
        };
        QueryScriptsResponse: {
            typeUrl: string;
            encode(message: _8.QueryScriptsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.QueryScriptsResponse;
            fromJSON(object: any): _8.QueryScriptsResponse;
            toJSON(message: _8.QueryScriptsResponse): unknown;
            fromPartial(object: Partial<_8.QueryScriptsResponse>): _8.QueryScriptsResponse;
            fromAmino(object: _8.QueryScriptsResponseAmino): _8.QueryScriptsResponse;
            toAmino(message: _8.QueryScriptsResponse): _8.QueryScriptsResponseAmino;
            fromAminoMsg(object: _8.QueryScriptsResponseAminoMsg): _8.QueryScriptsResponse;
            fromProtoMsg(message: _8.QueryScriptsResponseProtoMsg): _8.QueryScriptsResponse;
            toProto(message: _8.QueryScriptsResponse): Uint8Array;
            toProtoMsg(message: _8.QueryScriptsResponse): _8.QueryScriptsResponseProtoMsg;
        };
        QueryWebRequest: {
            typeUrl: string;
            encode(message: _8.QueryWebRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.QueryWebRequest;
            fromJSON(object: any): _8.QueryWebRequest;
            toJSON(message: _8.QueryWebRequest): unknown;
            fromPartial(object: Partial<_8.QueryWebRequest>): _8.QueryWebRequest;
            fromAmino(object: _8.QueryWebRequestAmino): _8.QueryWebRequest;
            toAmino(message: _8.QueryWebRequest): _8.QueryWebRequestAmino;
            fromAminoMsg(object: _8.QueryWebRequestAminoMsg): _8.QueryWebRequest;
            fromProtoMsg(message: _8.QueryWebRequestProtoMsg): _8.QueryWebRequest;
            toProto(message: _8.QueryWebRequest): Uint8Array;
            toProtoMsg(message: _8.QueryWebRequest): _8.QueryWebRequestProtoMsg;
        };
        QueryWebResponse: {
            typeUrl: string;
            encode(message: _8.QueryWebResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.QueryWebResponse;
            fromJSON(object: any): _8.QueryWebResponse;
            toJSON(message: _8.QueryWebResponse): unknown;
            fromPartial(object: Partial<_8.QueryWebResponse>): _8.QueryWebResponse;
            fromAmino(object: _8.QueryWebResponseAmino): _8.QueryWebResponse;
            toAmino(message: _8.QueryWebResponse): _8.QueryWebResponseAmino;
            fromAminoMsg(object: _8.QueryWebResponseAminoMsg): _8.QueryWebResponse;
            fromProtoMsg(message: _8.QueryWebResponseProtoMsg): _8.QueryWebResponse;
            toProto(message: _8.QueryWebResponse): Uint8Array;
            toProtoMsg(message: _8.QueryWebResponse): _8.QueryWebResponseProtoMsg;
        };
        QueryEvalRequest: {
            typeUrl: string;
            encode(message: _8.QueryEvalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.QueryEvalRequest;
            fromJSON(object: any): _8.QueryEvalRequest;
            toJSON(message: _8.QueryEvalRequest): unknown;
            fromPartial(object: Partial<_8.QueryEvalRequest>): _8.QueryEvalRequest;
            fromAmino(object: _8.QueryEvalRequestAmino): _8.QueryEvalRequest;
            toAmino(message: _8.QueryEvalRequest): _8.QueryEvalRequestAmino;
            fromAminoMsg(object: _8.QueryEvalRequestAminoMsg): _8.QueryEvalRequest;
            fromProtoMsg(message: _8.QueryEvalRequestProtoMsg): _8.QueryEvalRequest;
            toProto(message: _8.QueryEvalRequest): Uint8Array;
            toProtoMsg(message: _8.QueryEvalRequest): _8.QueryEvalRequestProtoMsg;
        };
        QueryEvalResponse: {
            typeUrl: string;
            encode(message: _8.QueryEvalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.QueryEvalResponse;
            fromJSON(object: any): _8.QueryEvalResponse;
            toJSON(message: _8.QueryEvalResponse): unknown;
            fromPartial(object: Partial<_8.QueryEvalResponse>): _8.QueryEvalResponse;
            fromAmino(object: _8.QueryEvalResponseAmino): _8.QueryEvalResponse;
            toAmino(message: _8.QueryEvalResponse): _8.QueryEvalResponseAmino;
            fromAminoMsg(object: _8.QueryEvalResponseAminoMsg): _8.QueryEvalResponse;
            fromProtoMsg(message: _8.QueryEvalResponseProtoMsg): _8.QueryEvalResponse;
            toProto(message: _8.QueryEvalResponse): Uint8Array;
            toProtoMsg(message: _8.QueryEvalResponse): _8.QueryEvalResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _7.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.Params;
            fromJSON(_: any): _7.Params;
            toJSON(_: _7.Params): unknown;
            fromPartial(_: Partial<_7.Params>): _7.Params;
            fromAmino(_: _7.ParamsAmino): _7.Params;
            toAmino(_: _7.Params): _7.ParamsAmino;
            fromAminoMsg(object: _7.ParamsAminoMsg): _7.Params;
            toAminoMsg(message: _7.Params): _7.ParamsAminoMsg;
            fromProtoMsg(message: _7.ParamsProtoMsg): _7.Params;
            toProto(message: _7.Params): Uint8Array;
            toProtoMsg(message: _7.Params): _7.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _5.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.GenesisState;
            fromJSON(object: any): _5.GenesisState;
            toJSON(message: _5.GenesisState): unknown;
            fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
            fromAmino(object: _5.GenesisStateAmino): _5.GenesisState;
            toAmino(message: _5.GenesisState): _5.GenesisStateAmino;
            fromAminoMsg(object: _5.GenesisStateAminoMsg): _5.GenesisState;
            fromProtoMsg(message: _5.GenesisStateProtoMsg): _5.GenesisState;
            toProto(message: _5.GenesisState): Uint8Array;
            toProtoMsg(message: _5.GenesisState): _5.GenesisStateProtoMsg;
        };
    };
    const storage: {
        Msg: typeof _193.Msg;
        Query: typeof _190.Query;
        QueryClientImpl: typeof _190.QueryClientImpl;
        LCDQueryClient: typeof _187.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _15.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createStorage(value: _15.MsgCreateStorage): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateStorage(value: _15.MsgUpdateStorage): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteStorage(value: _15.MsgDeleteStorage): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _15.MsgUpdateParams): {
                    typeUrl: string;
                    value: _15.MsgUpdateParams;
                };
                createStorage(value: _15.MsgCreateStorage): {
                    typeUrl: string;
                    value: _15.MsgCreateStorage;
                };
                updateStorage(value: _15.MsgUpdateStorage): {
                    typeUrl: string;
                    value: _15.MsgUpdateStorage;
                };
                deleteStorage(value: _15.MsgDeleteStorage): {
                    typeUrl: string;
                    value: _15.MsgDeleteStorage;
                };
            };
            toJSON: {
                updateParams(value: _15.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
                createStorage(value: _15.MsgCreateStorage): {
                    typeUrl: string;
                    value: unknown;
                };
                updateStorage(value: _15.MsgUpdateStorage): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteStorage(value: _15.MsgDeleteStorage): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _15.MsgUpdateParams;
                };
                createStorage(value: any): {
                    typeUrl: string;
                    value: _15.MsgCreateStorage;
                };
                updateStorage(value: any): {
                    typeUrl: string;
                    value: _15.MsgUpdateStorage;
                };
                deleteStorage(value: any): {
                    typeUrl: string;
                    value: _15.MsgDeleteStorage;
                };
            };
            fromPartial: {
                updateParams(value: _15.MsgUpdateParams): {
                    typeUrl: string;
                    value: _15.MsgUpdateParams;
                };
                createStorage(value: _15.MsgCreateStorage): {
                    typeUrl: string;
                    value: _15.MsgCreateStorage;
                };
                updateStorage(value: _15.MsgUpdateStorage): {
                    typeUrl: string;
                    value: _15.MsgUpdateStorage;
                };
                deleteStorage(value: _15.MsgDeleteStorage): {
                    typeUrl: string;
                    value: _15.MsgDeleteStorage;
                };
            };
        };
        AminoConverter: {
            "/blit.storage.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _15.MsgUpdateParams) => _15.MsgUpdateParamsAmino;
                fromAmino: (object: _15.MsgUpdateParamsAmino) => _15.MsgUpdateParams;
            };
            "/blit.storage.MsgCreateStorage": {
                aminoType: string;
                toAmino: (message: _15.MsgCreateStorage) => _15.MsgCreateStorageAmino;
                fromAmino: (object: _15.MsgCreateStorageAmino) => _15.MsgCreateStorage;
            };
            "/blit.storage.MsgUpdateStorage": {
                aminoType: string;
                toAmino: (message: _15.MsgUpdateStorage) => _15.MsgUpdateStorageAmino;
                fromAmino: (object: _15.MsgUpdateStorageAmino) => _15.MsgUpdateStorage;
            };
            "/blit.storage.MsgDeleteStorage": {
                aminoType: string;
                toAmino: (message: _15.MsgDeleteStorage) => _15.MsgDeleteStorageAmino;
                fromAmino: (object: _15.MsgDeleteStorageAmino) => _15.MsgDeleteStorage;
            };
        };
        protobufPackage: "blit.storage";
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _15.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgUpdateParams;
            fromJSON(object: any): _15.MsgUpdateParams;
            toJSON(message: _15.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_15.MsgUpdateParams>): _15.MsgUpdateParams;
            fromAmino(object: _15.MsgUpdateParamsAmino): _15.MsgUpdateParams;
            toAmino(message: _15.MsgUpdateParams): _15.MsgUpdateParamsAmino;
            fromAminoMsg(object: _15.MsgUpdateParamsAminoMsg): _15.MsgUpdateParams;
            toAminoMsg(message: _15.MsgUpdateParams): _15.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _15.MsgUpdateParamsProtoMsg): _15.MsgUpdateParams;
            toProto(message: _15.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _15.MsgUpdateParams): _15.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _15.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgUpdateParamsResponse;
            fromJSON(_: any): _15.MsgUpdateParamsResponse;
            toJSON(_: _15.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_15.MsgUpdateParamsResponse>): _15.MsgUpdateParamsResponse;
            fromAmino(_: _15.MsgUpdateParamsResponseAmino): _15.MsgUpdateParamsResponse;
            toAmino(_: _15.MsgUpdateParamsResponse): _15.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _15.MsgUpdateParamsResponseAminoMsg): _15.MsgUpdateParamsResponse;
            fromProtoMsg(message: _15.MsgUpdateParamsResponseProtoMsg): _15.MsgUpdateParamsResponse;
            toProto(message: _15.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _15.MsgUpdateParamsResponse): _15.MsgUpdateParamsResponseProtoMsg;
        };
        MsgCreateStorage: {
            typeUrl: string;
            encode(message: _15.MsgCreateStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgCreateStorage;
            fromJSON(object: any): _15.MsgCreateStorage;
            toJSON(message: _15.MsgCreateStorage): unknown;
            fromPartial(object: Partial<_15.MsgCreateStorage>): _15.MsgCreateStorage;
            fromAmino(object: _15.MsgCreateStorageAmino): _15.MsgCreateStorage;
            toAmino(message: _15.MsgCreateStorage): _15.MsgCreateStorageAmino;
            fromAminoMsg(object: _15.MsgCreateStorageAminoMsg): _15.MsgCreateStorage;
            fromProtoMsg(message: _15.MsgCreateStorageProtoMsg): _15.MsgCreateStorage;
            toProto(message: _15.MsgCreateStorage): Uint8Array;
            toProtoMsg(message: _15.MsgCreateStorage): _15.MsgCreateStorageProtoMsg;
        };
        MsgCreateStorageResponse: {
            typeUrl: string;
            encode(_: _15.MsgCreateStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgCreateStorageResponse;
            fromJSON(_: any): _15.MsgCreateStorageResponse;
            toJSON(_: _15.MsgCreateStorageResponse): unknown;
            fromPartial(_: Partial<_15.MsgCreateStorageResponse>): _15.MsgCreateStorageResponse;
            fromAmino(_: _15.MsgCreateStorageResponseAmino): _15.MsgCreateStorageResponse;
            toAmino(_: _15.MsgCreateStorageResponse): _15.MsgCreateStorageResponseAmino;
            fromAminoMsg(object: _15.MsgCreateStorageResponseAminoMsg): _15.MsgCreateStorageResponse;
            fromProtoMsg(message: _15.MsgCreateStorageResponseProtoMsg): _15.MsgCreateStorageResponse;
            toProto(message: _15.MsgCreateStorageResponse): Uint8Array;
            toProtoMsg(message: _15.MsgCreateStorageResponse): _15.MsgCreateStorageResponseProtoMsg;
        };
        MsgUpdateStorage: {
            typeUrl: string;
            encode(message: _15.MsgUpdateStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgUpdateStorage;
            fromJSON(object: any): _15.MsgUpdateStorage;
            toJSON(message: _15.MsgUpdateStorage): unknown;
            fromPartial(object: Partial<_15.MsgUpdateStorage>): _15.MsgUpdateStorage;
            fromAmino(object: _15.MsgUpdateStorageAmino): _15.MsgUpdateStorage;
            toAmino(message: _15.MsgUpdateStorage): _15.MsgUpdateStorageAmino;
            fromAminoMsg(object: _15.MsgUpdateStorageAminoMsg): _15.MsgUpdateStorage;
            fromProtoMsg(message: _15.MsgUpdateStorageProtoMsg): _15.MsgUpdateStorage;
            toProto(message: _15.MsgUpdateStorage): Uint8Array;
            toProtoMsg(message: _15.MsgUpdateStorage): _15.MsgUpdateStorageProtoMsg;
        };
        MsgUpdateStorageResponse: {
            typeUrl: string;
            encode(_: _15.MsgUpdateStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgUpdateStorageResponse;
            fromJSON(_: any): _15.MsgUpdateStorageResponse;
            toJSON(_: _15.MsgUpdateStorageResponse): unknown;
            fromPartial(_: Partial<_15.MsgUpdateStorageResponse>): _15.MsgUpdateStorageResponse;
            fromAmino(_: _15.MsgUpdateStorageResponseAmino): _15.MsgUpdateStorageResponse;
            toAmino(_: _15.MsgUpdateStorageResponse): _15.MsgUpdateStorageResponseAmino;
            fromAminoMsg(object: _15.MsgUpdateStorageResponseAminoMsg): _15.MsgUpdateStorageResponse;
            fromProtoMsg(message: _15.MsgUpdateStorageResponseProtoMsg): _15.MsgUpdateStorageResponse;
            toProto(message: _15.MsgUpdateStorageResponse): Uint8Array;
            toProtoMsg(message: _15.MsgUpdateStorageResponse): _15.MsgUpdateStorageResponseProtoMsg;
        };
        MsgDeleteStorage: {
            typeUrl: string;
            encode(message: _15.MsgDeleteStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgDeleteStorage;
            fromJSON(object: any): _15.MsgDeleteStorage;
            toJSON(message: _15.MsgDeleteStorage): unknown;
            fromPartial(object: Partial<_15.MsgDeleteStorage>): _15.MsgDeleteStorage;
            fromAmino(object: _15.MsgDeleteStorageAmino): _15.MsgDeleteStorage;
            toAmino(message: _15.MsgDeleteStorage): _15.MsgDeleteStorageAmino;
            fromAminoMsg(object: _15.MsgDeleteStorageAminoMsg): _15.MsgDeleteStorage;
            fromProtoMsg(message: _15.MsgDeleteStorageProtoMsg): _15.MsgDeleteStorage;
            toProto(message: _15.MsgDeleteStorage): Uint8Array;
            toProtoMsg(message: _15.MsgDeleteStorage): _15.MsgDeleteStorageProtoMsg;
        };
        MsgDeleteStorageResponse: {
            typeUrl: string;
            encode(_: _15.MsgDeleteStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgDeleteStorageResponse;
            fromJSON(_: any): _15.MsgDeleteStorageResponse;
            toJSON(_: _15.MsgDeleteStorageResponse): unknown;
            fromPartial(_: Partial<_15.MsgDeleteStorageResponse>): _15.MsgDeleteStorageResponse;
            fromAmino(_: _15.MsgDeleteStorageResponseAmino): _15.MsgDeleteStorageResponse;
            toAmino(_: _15.MsgDeleteStorageResponse): _15.MsgDeleteStorageResponseAmino;
            fromAminoMsg(object: _15.MsgDeleteStorageResponseAminoMsg): _15.MsgDeleteStorageResponse;
            fromProtoMsg(message: _15.MsgDeleteStorageResponseProtoMsg): _15.MsgDeleteStorageResponse;
            toProto(message: _15.MsgDeleteStorageResponse): Uint8Array;
            toProtoMsg(message: _15.MsgDeleteStorageResponse): _15.MsgDeleteStorageResponseProtoMsg;
        };
        Storage: {
            typeUrl: string;
            encode(message: _14.Storage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.Storage;
            fromJSON(object: any): _14.Storage;
            toJSON(message: _14.Storage): unknown;
            fromPartial(object: Partial<_14.Storage>): _14.Storage;
            fromAmino(object: _14.StorageAmino): _14.Storage;
            toAmino(message: _14.Storage): _14.StorageAmino;
            fromAminoMsg(object: _14.StorageAminoMsg): _14.Storage;
            fromProtoMsg(message: _14.StorageProtoMsg): _14.Storage;
            toProto(message: _14.Storage): Uint8Array;
            toProtoMsg(message: _14.Storage): _14.StorageProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _13.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.QueryParamsRequest;
            fromJSON(_: any): _13.QueryParamsRequest;
            toJSON(_: _13.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_13.QueryParamsRequest>): _13.QueryParamsRequest;
            fromAmino(_: _13.QueryParamsRequestAmino): _13.QueryParamsRequest;
            toAmino(_: _13.QueryParamsRequest): _13.QueryParamsRequestAmino;
            fromAminoMsg(object: _13.QueryParamsRequestAminoMsg): _13.QueryParamsRequest;
            fromProtoMsg(message: _13.QueryParamsRequestProtoMsg): _13.QueryParamsRequest;
            toProto(message: _13.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _13.QueryParamsRequest): _13.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _13.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.QueryParamsResponse;
            fromJSON(object: any): _13.QueryParamsResponse;
            toJSON(message: _13.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_13.QueryParamsResponse>): _13.QueryParamsResponse;
            fromAmino(object: _13.QueryParamsResponseAmino): _13.QueryParamsResponse;
            toAmino(message: _13.QueryParamsResponse): _13.QueryParamsResponseAmino;
            fromAminoMsg(object: _13.QueryParamsResponseAminoMsg): _13.QueryParamsResponse;
            fromProtoMsg(message: _13.QueryParamsResponseProtoMsg): _13.QueryParamsResponse;
            toProto(message: _13.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseProtoMsg;
        };
        QueryStorageDetailRequest: {
            typeUrl: string;
            encode(message: _13.QueryStorageDetailRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.QueryStorageDetailRequest;
            fromJSON(object: any): _13.QueryStorageDetailRequest;
            toJSON(message: _13.QueryStorageDetailRequest): unknown;
            fromPartial(object: Partial<_13.QueryStorageDetailRequest>): _13.QueryStorageDetailRequest;
            fromAmino(object: _13.QueryStorageDetailRequestAmino): _13.QueryStorageDetailRequest;
            toAmino(message: _13.QueryStorageDetailRequest): _13.QueryStorageDetailRequestAmino;
            fromAminoMsg(object: _13.QueryStorageDetailRequestAminoMsg): _13.QueryStorageDetailRequest;
            fromProtoMsg(message: _13.QueryStorageDetailRequestProtoMsg): _13.QueryStorageDetailRequest;
            toProto(message: _13.QueryStorageDetailRequest): Uint8Array;
            toProtoMsg(message: _13.QueryStorageDetailRequest): _13.QueryStorageDetailRequestProtoMsg;
        };
        QueryStorageDetailResponse: {
            typeUrl: string;
            encode(message: _13.QueryStorageDetailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.QueryStorageDetailResponse;
            fromJSON(object: any): _13.QueryStorageDetailResponse;
            toJSON(message: _13.QueryStorageDetailResponse): unknown;
            fromPartial(object: Partial<_13.QueryStorageDetailResponse>): _13.QueryStorageDetailResponse;
            fromAmino(object: _13.QueryStorageDetailResponseAmino): _13.QueryStorageDetailResponse;
            toAmino(message: _13.QueryStorageDetailResponse): _13.QueryStorageDetailResponseAmino;
            fromAminoMsg(object: _13.QueryStorageDetailResponseAminoMsg): _13.QueryStorageDetailResponse;
            fromProtoMsg(message: _13.QueryStorageDetailResponseProtoMsg): _13.QueryStorageDetailResponse;
            toProto(message: _13.QueryStorageDetailResponse): Uint8Array;
            toProtoMsg(message: _13.QueryStorageDetailResponse): _13.QueryStorageDetailResponseProtoMsg;
        };
        QueryFilterStorageRequest: {
            typeUrl: string;
            encode(message: _13.QueryFilterStorageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.QueryFilterStorageRequest;
            fromJSON(object: any): _13.QueryFilterStorageRequest;
            toJSON(message: _13.QueryFilterStorageRequest): unknown;
            fromPartial(object: Partial<_13.QueryFilterStorageRequest>): _13.QueryFilterStorageRequest;
            fromAmino(object: _13.QueryFilterStorageRequestAmino): _13.QueryFilterStorageRequest;
            toAmino(message: _13.QueryFilterStorageRequest): _13.QueryFilterStorageRequestAmino;
            fromAminoMsg(object: _13.QueryFilterStorageRequestAminoMsg): _13.QueryFilterStorageRequest;
            fromProtoMsg(message: _13.QueryFilterStorageRequestProtoMsg): _13.QueryFilterStorageRequest;
            toProto(message: _13.QueryFilterStorageRequest): Uint8Array;
            toProtoMsg(message: _13.QueryFilterStorageRequest): _13.QueryFilterStorageRequestProtoMsg;
        };
        QueryFilterStorageResponse: {
            typeUrl: string;
            encode(message: _13.QueryFilterStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.QueryFilterStorageResponse;
            fromJSON(object: any): _13.QueryFilterStorageResponse;
            toJSON(message: _13.QueryFilterStorageResponse): unknown;
            fromPartial(object: Partial<_13.QueryFilterStorageResponse>): _13.QueryFilterStorageResponse;
            fromAmino(object: _13.QueryFilterStorageResponseAmino): _13.QueryFilterStorageResponse;
            toAmino(message: _13.QueryFilterStorageResponse): _13.QueryFilterStorageResponseAmino;
            fromAminoMsg(object: _13.QueryFilterStorageResponseAminoMsg): _13.QueryFilterStorageResponse;
            fromProtoMsg(message: _13.QueryFilterStorageResponseProtoMsg): _13.QueryFilterStorageResponse;
            toProto(message: _13.QueryFilterStorageResponse): Uint8Array;
            toProtoMsg(message: _13.QueryFilterStorageResponse): _13.QueryFilterStorageResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _12.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.Params;
            fromJSON(_: any): _12.Params;
            toJSON(_: _12.Params): unknown;
            fromPartial(_: Partial<_12.Params>): _12.Params;
            fromAmino(_: _12.ParamsAmino): _12.Params;
            toAmino(_: _12.Params): _12.ParamsAmino;
            fromAminoMsg(object: _12.ParamsAminoMsg): _12.Params;
            toAminoMsg(message: _12.Params): _12.ParamsAminoMsg;
            fromProtoMsg(message: _12.ParamsProtoMsg): _12.Params;
            toProto(message: _12.Params): Uint8Array;
            toProtoMsg(message: _12.Params): _12.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _11.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.GenesisState;
            fromJSON(object: any): _11.GenesisState;
            toJSON(message: _11.GenesisState): unknown;
            fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
            fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
            toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
            fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
            fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
            toProto(message: _11.GenesisState): Uint8Array;
            toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
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
                blit: _188.QueryClientImpl;
                script: _189.QueryClientImpl;
                storage: _190.QueryClientImpl;
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
                blit: _185.LCDQueryClient;
                script: _186.LCDQueryClient;
                storage: _187.LCDQueryClient;
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

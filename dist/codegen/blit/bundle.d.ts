import * as _5 from "./genesis";
import * as _6 from "./params";
import * as _7 from "./query";
import * as _8 from "./tx";
import * as _9 from "./script/genesis";
import * as _10 from "./script/msgrun";
import * as _11 from "./script/params";
import * as _12 from "./script/query";
import * as _13 from "./script/script";
import * as _14 from "./script/tx";
import * as _15 from "./storage/genesis";
import * as _16 from "./storage/params";
import * as _17 from "./storage/query";
import * as _18 from "./storage/storage";
import * as _19 from "./storage/tx";
import * as _174 from "./query.lcd";
import * as _175 from "./script/query.lcd";
import * as _176 from "./storage/query.lcd";
import * as _178 from "./query.rpc.Query";
import * as _179 from "./script/query.rpc.Query";
import * as _180 from "./storage/query.rpc.Query";
import * as _182 from "./script/tx.rpc.msg";
import * as _183 from "./storage/tx.rpc.msg";
import * as _184 from "./tx.rpc.msg";
export declare namespace blit {
    const blit: {
        Msg: typeof _184.Msg;
        Query: typeof _178.Query;
        QueryClientImpl: typeof _178.QueryClientImpl;
        LCDQueryClient: typeof _174.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _8.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _8.MsgUpdateParams): {
                    typeUrl: string;
                    value: _8.MsgUpdateParams;
                };
            };
            toJSON: {
                updateParams(value: _8.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _8.MsgUpdateParams;
                };
            };
            fromPartial: {
                updateParams(value: _8.MsgUpdateParams): {
                    typeUrl: string;
                    value: _8.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/blit.blit.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _8.MsgUpdateParams) => _8.MsgUpdateParamsAmino;
                fromAmino: (object: _8.MsgUpdateParamsAmino) => _8.MsgUpdateParams;
            };
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _8.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.MsgUpdateParams;
            fromJSON(object: any): _8.MsgUpdateParams;
            toJSON(message: _8.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_8.MsgUpdateParams>): _8.MsgUpdateParams;
            fromSDK(object: _8.MsgUpdateParamsSDKType): _8.MsgUpdateParams;
            toSDK(message: _8.MsgUpdateParams): _8.MsgUpdateParamsSDKType;
            fromAmino(object: _8.MsgUpdateParamsAmino): _8.MsgUpdateParams;
            toAmino(message: _8.MsgUpdateParams): _8.MsgUpdateParamsAmino;
            fromAminoMsg(object: _8.MsgUpdateParamsAminoMsg): _8.MsgUpdateParams;
            toAminoMsg(message: _8.MsgUpdateParams): _8.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _8.MsgUpdateParamsProtoMsg): _8.MsgUpdateParams;
            toProto(message: _8.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _8.MsgUpdateParams): _8.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _8.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.MsgUpdateParamsResponse;
            fromJSON(_: any): _8.MsgUpdateParamsResponse;
            toJSON(_: _8.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_8.MsgUpdateParamsResponse>): _8.MsgUpdateParamsResponse;
            fromSDK(_: _8.MsgUpdateParamsResponseSDKType): _8.MsgUpdateParamsResponse;
            toSDK(_: _8.MsgUpdateParamsResponse): _8.MsgUpdateParamsResponseSDKType;
            fromAmino(_: _8.MsgUpdateParamsResponseAmino): _8.MsgUpdateParamsResponse;
            toAmino(_: _8.MsgUpdateParamsResponse): _8.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _8.MsgUpdateParamsResponseAminoMsg): _8.MsgUpdateParamsResponse;
            fromProtoMsg(message: _8.MsgUpdateParamsResponseProtoMsg): _8.MsgUpdateParamsResponse;
            toProto(message: _8.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _8.MsgUpdateParamsResponse): _8.MsgUpdateParamsResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _7.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryParamsRequest;
            fromJSON(_: any): _7.QueryParamsRequest;
            toJSON(_: _7.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_7.QueryParamsRequest>): _7.QueryParamsRequest;
            fromSDK(_: _7.QueryParamsRequestSDKType): _7.QueryParamsRequest;
            toSDK(_: _7.QueryParamsRequest): _7.QueryParamsRequestSDKType;
            fromAmino(_: _7.QueryParamsRequestAmino): _7.QueryParamsRequest;
            toAmino(_: _7.QueryParamsRequest): _7.QueryParamsRequestAmino;
            fromAminoMsg(object: _7.QueryParamsRequestAminoMsg): _7.QueryParamsRequest;
            fromProtoMsg(message: _7.QueryParamsRequestProtoMsg): _7.QueryParamsRequest;
            toProto(message: _7.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _7.QueryParamsRequest): _7.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _7.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryParamsResponse;
            fromJSON(object: any): _7.QueryParamsResponse;
            toJSON(message: _7.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_7.QueryParamsResponse>): _7.QueryParamsResponse;
            fromSDK(object: _7.QueryParamsResponseSDKType): _7.QueryParamsResponse;
            toSDK(message: _7.QueryParamsResponse): _7.QueryParamsResponseSDKType;
            fromAmino(object: _7.QueryParamsResponseAmino): _7.QueryParamsResponse;
            toAmino(message: _7.QueryParamsResponse): _7.QueryParamsResponseAmino;
            fromAminoMsg(object: _7.QueryParamsResponseAminoMsg): _7.QueryParamsResponse;
            fromProtoMsg(message: _7.QueryParamsResponseProtoMsg): _7.QueryParamsResponse;
            toProto(message: _7.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _7.QueryParamsResponse): _7.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _6.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.Params;
            fromJSON(_: any): _6.Params;
            toJSON(_: _6.Params): unknown;
            fromPartial(_: Partial<_6.Params>): _6.Params;
            fromSDK(_: _6.ParamsSDKType): _6.Params;
            toSDK(_: _6.Params): _6.ParamsSDKType;
            fromAmino(_: _6.ParamsAmino): _6.Params;
            toAmino(_: _6.Params): _6.ParamsAmino;
            fromAminoMsg(object: _6.ParamsAminoMsg): _6.Params;
            toAminoMsg(message: _6.Params): _6.ParamsAminoMsg;
            fromProtoMsg(message: _6.ParamsProtoMsg): _6.Params;
            toProto(message: _6.Params): Uint8Array;
            toProtoMsg(message: _6.Params): _6.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _5.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.GenesisState;
            fromJSON(object: any): _5.GenesisState;
            toJSON(message: _5.GenesisState): unknown;
            fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
            fromSDK(object: _5.GenesisStateSDKType): _5.GenesisState;
            toSDK(message: _5.GenesisState): _5.GenesisStateSDKType;
            fromAmino(object: _5.GenesisStateAmino): _5.GenesisState;
            toAmino(message: _5.GenesisState): _5.GenesisStateAmino;
            fromAminoMsg(object: _5.GenesisStateAminoMsg): _5.GenesisState;
            fromProtoMsg(message: _5.GenesisStateProtoMsg): _5.GenesisState;
            toProto(message: _5.GenesisState): Uint8Array;
            toProtoMsg(message: _5.GenesisState): _5.GenesisStateProtoMsg;
        };
    };
    const script: {
        Msg: typeof _182.Msg;
        Query: typeof _179.Query;
        QueryClientImpl: typeof _179.QueryClientImpl;
        LCDQueryClient: typeof _175.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _14.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createScript(value: _14.MsgCreateScript): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateScript(value: _14.MsgUpdateScript): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                run(value: _10.MsgRun): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _14.MsgUpdateParams): {
                    typeUrl: string;
                    value: _14.MsgUpdateParams;
                };
                createScript(value: _14.MsgCreateScript): {
                    typeUrl: string;
                    value: _14.MsgCreateScript;
                };
                updateScript(value: _14.MsgUpdateScript): {
                    typeUrl: string;
                    value: _14.MsgUpdateScript;
                };
                run(value: _10.MsgRun): {
                    typeUrl: string;
                    value: _10.MsgRun;
                };
            };
            toJSON: {
                updateParams(value: _14.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
                createScript(value: _14.MsgCreateScript): {
                    typeUrl: string;
                    value: unknown;
                };
                updateScript(value: _14.MsgUpdateScript): {
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
                    value: _14.MsgUpdateParams;
                };
                createScript(value: any): {
                    typeUrl: string;
                    value: _14.MsgCreateScript;
                };
                updateScript(value: any): {
                    typeUrl: string;
                    value: _14.MsgUpdateScript;
                };
                run(value: any): {
                    typeUrl: string;
                    value: _10.MsgRun;
                };
            };
            fromPartial: {
                updateParams(value: _14.MsgUpdateParams): {
                    typeUrl: string;
                    value: _14.MsgUpdateParams;
                };
                createScript(value: _14.MsgCreateScript): {
                    typeUrl: string;
                    value: _14.MsgCreateScript;
                };
                updateScript(value: _14.MsgUpdateScript): {
                    typeUrl: string;
                    value: _14.MsgUpdateScript;
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
                toAmino: (message: _14.MsgUpdateParams) => _14.MsgUpdateParamsAmino;
                fromAmino: (object: _14.MsgUpdateParamsAmino) => _14.MsgUpdateParams;
            };
            "/blit.script.MsgCreateScript": {
                aminoType: string;
                toAmino: (message: _14.MsgCreateScript) => _14.MsgCreateScriptAmino;
                fromAmino: (object: _14.MsgCreateScriptAmino) => _14.MsgCreateScript;
            };
            "/blit.script.MsgUpdateScript": {
                aminoType: string;
                toAmino: (message: _14.MsgUpdateScript) => _14.MsgUpdateScriptAmino;
                fromAmino: (object: _14.MsgUpdateScriptAmino) => _14.MsgUpdateScript;
            };
            "/blit.script.MsgRun": {
                aminoType: string;
                toAmino: (message: _10.MsgRun) => _10.MsgRunAmino;
                fromAmino: (object: _10.MsgRunAmino) => _10.MsgRun;
            };
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _14.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.MsgUpdateParams;
            fromJSON(object: any): _14.MsgUpdateParams;
            toJSON(message: _14.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_14.MsgUpdateParams>): _14.MsgUpdateParams;
            fromSDK(object: _14.MsgUpdateParamsSDKType): _14.MsgUpdateParams;
            toSDK(message: _14.MsgUpdateParams): _14.MsgUpdateParamsSDKType;
            fromAmino(object: _14.MsgUpdateParamsAmino): _14.MsgUpdateParams;
            toAmino(message: _14.MsgUpdateParams): _14.MsgUpdateParamsAmino;
            fromAminoMsg(object: _14.MsgUpdateParamsAminoMsg): _14.MsgUpdateParams;
            toAminoMsg(message: _14.MsgUpdateParams): _14.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _14.MsgUpdateParamsProtoMsg): _14.MsgUpdateParams;
            toProto(message: _14.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _14.MsgUpdateParams): _14.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _14.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.MsgUpdateParamsResponse;
            fromJSON(_: any): _14.MsgUpdateParamsResponse;
            toJSON(_: _14.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_14.MsgUpdateParamsResponse>): _14.MsgUpdateParamsResponse;
            fromSDK(_: _14.MsgUpdateParamsResponseSDKType): _14.MsgUpdateParamsResponse;
            toSDK(_: _14.MsgUpdateParamsResponse): _14.MsgUpdateParamsResponseSDKType;
            fromAmino(_: _14.MsgUpdateParamsResponseAmino): _14.MsgUpdateParamsResponse;
            toAmino(_: _14.MsgUpdateParamsResponse): _14.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _14.MsgUpdateParamsResponseAminoMsg): _14.MsgUpdateParamsResponse;
            fromProtoMsg(message: _14.MsgUpdateParamsResponseProtoMsg): _14.MsgUpdateParamsResponse;
            toProto(message: _14.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _14.MsgUpdateParamsResponse): _14.MsgUpdateParamsResponseProtoMsg;
        };
        MsgCreateScript: {
            typeUrl: string;
            encode(message: _14.MsgCreateScript, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.MsgCreateScript;
            fromJSON(object: any): _14.MsgCreateScript;
            toJSON(message: _14.MsgCreateScript): unknown;
            fromPartial(object: Partial<_14.MsgCreateScript>): _14.MsgCreateScript;
            fromSDK(object: _14.MsgCreateScriptSDKType): _14.MsgCreateScript;
            toSDK(message: _14.MsgCreateScript): _14.MsgCreateScriptSDKType;
            fromAmino(object: _14.MsgCreateScriptAmino): _14.MsgCreateScript;
            toAmino(message: _14.MsgCreateScript): _14.MsgCreateScriptAmino;
            fromAminoMsg(object: _14.MsgCreateScriptAminoMsg): _14.MsgCreateScript;
            fromProtoMsg(message: _14.MsgCreateScriptProtoMsg): _14.MsgCreateScript;
            toProto(message: _14.MsgCreateScript): Uint8Array;
            toProtoMsg(message: _14.MsgCreateScript): _14.MsgCreateScriptProtoMsg;
        };
        MsgCreateScriptResponse: {
            typeUrl: string;
            encode(_: _14.MsgCreateScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.MsgCreateScriptResponse;
            fromJSON(_: any): _14.MsgCreateScriptResponse;
            toJSON(_: _14.MsgCreateScriptResponse): unknown;
            fromPartial(_: Partial<_14.MsgCreateScriptResponse>): _14.MsgCreateScriptResponse;
            fromSDK(_: _14.MsgCreateScriptResponseSDKType): _14.MsgCreateScriptResponse;
            toSDK(_: _14.MsgCreateScriptResponse): _14.MsgCreateScriptResponseSDKType;
            fromAmino(_: _14.MsgCreateScriptResponseAmino): _14.MsgCreateScriptResponse;
            toAmino(_: _14.MsgCreateScriptResponse): _14.MsgCreateScriptResponseAmino;
            fromAminoMsg(object: _14.MsgCreateScriptResponseAminoMsg): _14.MsgCreateScriptResponse;
            fromProtoMsg(message: _14.MsgCreateScriptResponseProtoMsg): _14.MsgCreateScriptResponse;
            toProto(message: _14.MsgCreateScriptResponse): Uint8Array;
            toProtoMsg(message: _14.MsgCreateScriptResponse): _14.MsgCreateScriptResponseProtoMsg;
        };
        MsgUpdateScript: {
            typeUrl: string;
            encode(message: _14.MsgUpdateScript, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.MsgUpdateScript;
            fromJSON(object: any): _14.MsgUpdateScript;
            toJSON(message: _14.MsgUpdateScript): unknown;
            fromPartial(object: Partial<_14.MsgUpdateScript>): _14.MsgUpdateScript;
            fromSDK(object: _14.MsgUpdateScriptSDKType): _14.MsgUpdateScript;
            toSDK(message: _14.MsgUpdateScript): _14.MsgUpdateScriptSDKType;
            fromAmino(object: _14.MsgUpdateScriptAmino): _14.MsgUpdateScript;
            toAmino(message: _14.MsgUpdateScript): _14.MsgUpdateScriptAmino;
            fromAminoMsg(object: _14.MsgUpdateScriptAminoMsg): _14.MsgUpdateScript;
            fromProtoMsg(message: _14.MsgUpdateScriptProtoMsg): _14.MsgUpdateScript;
            toProto(message: _14.MsgUpdateScript): Uint8Array;
            toProtoMsg(message: _14.MsgUpdateScript): _14.MsgUpdateScriptProtoMsg;
        };
        MsgUpdateScriptResponse: {
            typeUrl: string;
            encode(_: _14.MsgUpdateScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.MsgUpdateScriptResponse;
            fromJSON(_: any): _14.MsgUpdateScriptResponse;
            toJSON(_: _14.MsgUpdateScriptResponse): unknown;
            fromPartial(_: Partial<_14.MsgUpdateScriptResponse>): _14.MsgUpdateScriptResponse;
            fromSDK(_: _14.MsgUpdateScriptResponseSDKType): _14.MsgUpdateScriptResponse;
            toSDK(_: _14.MsgUpdateScriptResponse): _14.MsgUpdateScriptResponseSDKType;
            fromAmino(_: _14.MsgUpdateScriptResponseAmino): _14.MsgUpdateScriptResponse;
            toAmino(_: _14.MsgUpdateScriptResponse): _14.MsgUpdateScriptResponseAmino;
            fromAminoMsg(object: _14.MsgUpdateScriptResponseAminoMsg): _14.MsgUpdateScriptResponse;
            fromProtoMsg(message: _14.MsgUpdateScriptResponseProtoMsg): _14.MsgUpdateScriptResponse;
            toProto(message: _14.MsgUpdateScriptResponse): Uint8Array;
            toProtoMsg(message: _14.MsgUpdateScriptResponse): _14.MsgUpdateScriptResponseProtoMsg;
        };
        Script: {
            typeUrl: string;
            encode(message: _13.Script, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.Script;
            fromJSON(object: any): _13.Script;
            toJSON(message: _13.Script): unknown;
            fromPartial(object: Partial<_13.Script>): _13.Script;
            fromSDK(object: _13.ScriptSDKType): _13.Script;
            toSDK(message: _13.Script): _13.ScriptSDKType;
            fromAmino(object: _13.ScriptAmino): _13.Script;
            toAmino(message: _13.Script): _13.ScriptAmino;
            fromAminoMsg(object: _13.ScriptAminoMsg): _13.Script;
            fromProtoMsg(message: _13.ScriptProtoMsg): _13.Script;
            toProto(message: _13.Script): Uint8Array;
            toProtoMsg(message: _13.Script): _13.ScriptProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _12.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryParamsRequest;
            fromJSON(_: any): _12.QueryParamsRequest;
            toJSON(_: _12.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_12.QueryParamsRequest>): _12.QueryParamsRequest;
            fromSDK(_: _12.QueryParamsRequestSDKType): _12.QueryParamsRequest;
            toSDK(_: _12.QueryParamsRequest): _12.QueryParamsRequestSDKType;
            fromAmino(_: _12.QueryParamsRequestAmino): _12.QueryParamsRequest;
            toAmino(_: _12.QueryParamsRequest): _12.QueryParamsRequestAmino;
            fromAminoMsg(object: _12.QueryParamsRequestAminoMsg): _12.QueryParamsRequest;
            fromProtoMsg(message: _12.QueryParamsRequestProtoMsg): _12.QueryParamsRequest;
            toProto(message: _12.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _12.QueryParamsRequest): _12.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _12.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryParamsResponse;
            fromJSON(object: any): _12.QueryParamsResponse;
            toJSON(message: _12.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_12.QueryParamsResponse>): _12.QueryParamsResponse;
            fromSDK(object: _12.QueryParamsResponseSDKType): _12.QueryParamsResponse;
            toSDK(message: _12.QueryParamsResponse): _12.QueryParamsResponseSDKType;
            fromAmino(object: _12.QueryParamsResponseAmino): _12.QueryParamsResponse;
            toAmino(message: _12.QueryParamsResponse): _12.QueryParamsResponseAmino;
            fromAminoMsg(object: _12.QueryParamsResponseAminoMsg): _12.QueryParamsResponse;
            fromProtoMsg(message: _12.QueryParamsResponseProtoMsg): _12.QueryParamsResponse;
            toProto(message: _12.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _12.QueryParamsResponse): _12.QueryParamsResponseProtoMsg;
        };
        QueryGetScriptRequest: {
            typeUrl: string;
            encode(message: _12.QueryGetScriptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryGetScriptRequest;
            fromJSON(object: any): _12.QueryGetScriptRequest;
            toJSON(message: _12.QueryGetScriptRequest): unknown;
            fromPartial(object: Partial<_12.QueryGetScriptRequest>): _12.QueryGetScriptRequest;
            fromSDK(object: _12.QueryGetScriptRequestSDKType): _12.QueryGetScriptRequest;
            toSDK(message: _12.QueryGetScriptRequest): _12.QueryGetScriptRequestSDKType;
            fromAmino(object: _12.QueryGetScriptRequestAmino): _12.QueryGetScriptRequest;
            toAmino(message: _12.QueryGetScriptRequest): _12.QueryGetScriptRequestAmino;
            fromAminoMsg(object: _12.QueryGetScriptRequestAminoMsg): _12.QueryGetScriptRequest;
            fromProtoMsg(message: _12.QueryGetScriptRequestProtoMsg): _12.QueryGetScriptRequest;
            toProto(message: _12.QueryGetScriptRequest): Uint8Array;
            toProtoMsg(message: _12.QueryGetScriptRequest): _12.QueryGetScriptRequestProtoMsg;
        };
        QueryGetScriptResponse: {
            typeUrl: string;
            encode(message: _12.QueryGetScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryGetScriptResponse;
            fromJSON(object: any): _12.QueryGetScriptResponse;
            toJSON(message: _12.QueryGetScriptResponse): unknown;
            fromPartial(object: Partial<_12.QueryGetScriptResponse>): _12.QueryGetScriptResponse;
            fromSDK(object: _12.QueryGetScriptResponseSDKType): _12.QueryGetScriptResponse;
            toSDK(message: _12.QueryGetScriptResponse): _12.QueryGetScriptResponseSDKType;
            fromAmino(object: _12.QueryGetScriptResponseAmino): _12.QueryGetScriptResponse;
            toAmino(message: _12.QueryGetScriptResponse): _12.QueryGetScriptResponseAmino;
            fromAminoMsg(object: _12.QueryGetScriptResponseAminoMsg): _12.QueryGetScriptResponse;
            fromProtoMsg(message: _12.QueryGetScriptResponseProtoMsg): _12.QueryGetScriptResponse;
            toProto(message: _12.QueryGetScriptResponse): Uint8Array;
            toProtoMsg(message: _12.QueryGetScriptResponse): _12.QueryGetScriptResponseProtoMsg;
        };
        QueryAllScriptRequest: {
            typeUrl: string;
            encode(message: _12.QueryAllScriptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryAllScriptRequest;
            fromJSON(object: any): _12.QueryAllScriptRequest;
            toJSON(message: _12.QueryAllScriptRequest): unknown;
            fromPartial(object: Partial<_12.QueryAllScriptRequest>): _12.QueryAllScriptRequest;
            fromSDK(object: _12.QueryAllScriptRequestSDKType): _12.QueryAllScriptRequest;
            toSDK(message: _12.QueryAllScriptRequest): _12.QueryAllScriptRequestSDKType;
            fromAmino(object: _12.QueryAllScriptRequestAmino): _12.QueryAllScriptRequest;
            toAmino(message: _12.QueryAllScriptRequest): _12.QueryAllScriptRequestAmino;
            fromAminoMsg(object: _12.QueryAllScriptRequestAminoMsg): _12.QueryAllScriptRequest;
            fromProtoMsg(message: _12.QueryAllScriptRequestProtoMsg): _12.QueryAllScriptRequest;
            toProto(message: _12.QueryAllScriptRequest): Uint8Array;
            toProtoMsg(message: _12.QueryAllScriptRequest): _12.QueryAllScriptRequestProtoMsg;
        };
        QueryAllScriptResponse: {
            typeUrl: string;
            encode(message: _12.QueryAllScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryAllScriptResponse;
            fromJSON(object: any): _12.QueryAllScriptResponse;
            toJSON(message: _12.QueryAllScriptResponse): unknown;
            fromPartial(object: Partial<_12.QueryAllScriptResponse>): _12.QueryAllScriptResponse;
            fromSDK(object: _12.QueryAllScriptResponseSDKType): _12.QueryAllScriptResponse;
            toSDK(message: _12.QueryAllScriptResponse): _12.QueryAllScriptResponseSDKType;
            fromAmino(object: _12.QueryAllScriptResponseAmino): _12.QueryAllScriptResponse;
            toAmino(message: _12.QueryAllScriptResponse): _12.QueryAllScriptResponseAmino;
            fromAminoMsg(object: _12.QueryAllScriptResponseAminoMsg): _12.QueryAllScriptResponse;
            fromProtoMsg(message: _12.QueryAllScriptResponseProtoMsg): _12.QueryAllScriptResponse;
            toProto(message: _12.QueryAllScriptResponse): Uint8Array;
            toProtoMsg(message: _12.QueryAllScriptResponse): _12.QueryAllScriptResponseProtoMsg;
        };
        QueryWebRequest: {
            typeUrl: string;
            encode(message: _12.QueryWebRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryWebRequest;
            fromJSON(object: any): _12.QueryWebRequest;
            toJSON(message: _12.QueryWebRequest): unknown;
            fromPartial(object: Partial<_12.QueryWebRequest>): _12.QueryWebRequest;
            fromSDK(object: _12.QueryWebRequestSDKType): _12.QueryWebRequest;
            toSDK(message: _12.QueryWebRequest): _12.QueryWebRequestSDKType;
            fromAmino(object: _12.QueryWebRequestAmino): _12.QueryWebRequest;
            toAmino(message: _12.QueryWebRequest): _12.QueryWebRequestAmino;
            fromAminoMsg(object: _12.QueryWebRequestAminoMsg): _12.QueryWebRequest;
            fromProtoMsg(message: _12.QueryWebRequestProtoMsg): _12.QueryWebRequest;
            toProto(message: _12.QueryWebRequest): Uint8Array;
            toProtoMsg(message: _12.QueryWebRequest): _12.QueryWebRequestProtoMsg;
        };
        QueryWebResponse: {
            typeUrl: string;
            encode(message: _12.QueryWebResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryWebResponse;
            fromJSON(object: any): _12.QueryWebResponse;
            toJSON(message: _12.QueryWebResponse): unknown;
            fromPartial(object: Partial<_12.QueryWebResponse>): _12.QueryWebResponse;
            fromSDK(object: _12.QueryWebResponseSDKType): _12.QueryWebResponse;
            toSDK(message: _12.QueryWebResponse): _12.QueryWebResponseSDKType;
            fromAmino(object: _12.QueryWebResponseAmino): _12.QueryWebResponse;
            toAmino(message: _12.QueryWebResponse): _12.QueryWebResponseAmino;
            fromAminoMsg(object: _12.QueryWebResponseAminoMsg): _12.QueryWebResponse;
            fromProtoMsg(message: _12.QueryWebResponseProtoMsg): _12.QueryWebResponse;
            toProto(message: _12.QueryWebResponse): Uint8Array;
            toProtoMsg(message: _12.QueryWebResponse): _12.QueryWebResponseProtoMsg;
        };
        QueryEval: {
            typeUrl: string;
            encode(message: _12.QueryEval, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryEval;
            fromJSON(object: any): _12.QueryEval;
            toJSON(message: _12.QueryEval): unknown;
            fromPartial(object: Partial<_12.QueryEval>): _12.QueryEval;
            fromSDK(object: _12.QueryEvalSDKType): _12.QueryEval;
            toSDK(message: _12.QueryEval): _12.QueryEvalSDKType;
            fromAmino(object: _12.QueryEvalAmino): _12.QueryEval;
            toAmino(message: _12.QueryEval): _12.QueryEvalAmino;
            fromAminoMsg(object: _12.QueryEvalAminoMsg): _12.QueryEval;
            fromProtoMsg(message: _12.QueryEvalProtoMsg): _12.QueryEval;
            toProto(message: _12.QueryEval): Uint8Array;
            toProtoMsg(message: _12.QueryEval): _12.QueryEvalProtoMsg;
        };
        QueryEvalResponse: {
            typeUrl: string;
            encode(message: _12.QueryEvalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryEvalResponse;
            fromJSON(object: any): _12.QueryEvalResponse;
            toJSON(message: _12.QueryEvalResponse): unknown;
            fromPartial(object: Partial<_12.QueryEvalResponse>): _12.QueryEvalResponse;
            fromSDK(object: _12.QueryEvalResponseSDKType): _12.QueryEvalResponse;
            toSDK(message: _12.QueryEvalResponse): _12.QueryEvalResponseSDKType;
            fromAmino(object: _12.QueryEvalResponseAmino): _12.QueryEvalResponse;
            toAmino(message: _12.QueryEvalResponse): _12.QueryEvalResponseAmino;
            fromAminoMsg(object: _12.QueryEvalResponseAminoMsg): _12.QueryEvalResponse;
            fromProtoMsg(message: _12.QueryEvalResponseProtoMsg): _12.QueryEvalResponse;
            toProto(message: _12.QueryEvalResponse): Uint8Array;
            toProtoMsg(message: _12.QueryEvalResponse): _12.QueryEvalResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _11.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.Params;
            fromJSON(_: any): _11.Params;
            toJSON(_: _11.Params): unknown;
            fromPartial(_: Partial<_11.Params>): _11.Params;
            fromSDK(_: _11.ParamsSDKType): _11.Params;
            toSDK(_: _11.Params): _11.ParamsSDKType;
            fromAmino(_: _11.ParamsAmino): _11.Params;
            toAmino(_: _11.Params): _11.ParamsAmino;
            fromAminoMsg(object: _11.ParamsAminoMsg): _11.Params;
            toAminoMsg(message: _11.Params): _11.ParamsAminoMsg;
            fromProtoMsg(message: _11.ParamsProtoMsg): _11.Params;
            toProto(message: _11.Params): Uint8Array;
            toProtoMsg(message: _11.Params): _11.ParamsProtoMsg;
        };
        MsgRun: {
            typeUrl: string;
            encode(message: _10.MsgRun, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgRun;
            fromJSON(object: any): _10.MsgRun;
            toJSON(message: _10.MsgRun): unknown;
            fromPartial(object: Partial<_10.MsgRun>): _10.MsgRun;
            fromSDK(object: _10.MsgRunSDKType): _10.MsgRun;
            toSDK(message: _10.MsgRun): _10.MsgRunSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgRunResponse;
            fromJSON(object: any): _10.MsgRunResponse;
            toJSON(message: _10.MsgRunResponse): unknown;
            fromPartial(object: Partial<_10.MsgRunResponse>): _10.MsgRunResponse;
            fromSDK(object: _10.MsgRunResponseSDKType): _10.MsgRunResponse;
            toSDK(message: _10.MsgRunResponse): _10.MsgRunResponseSDKType;
            fromAmino(object: _10.MsgRunResponseAmino): _10.MsgRunResponse;
            toAmino(message: _10.MsgRunResponse): _10.MsgRunResponseAmino;
            fromAminoMsg(object: _10.MsgRunResponseAminoMsg): _10.MsgRunResponse;
            fromProtoMsg(message: _10.MsgRunResponseProtoMsg): _10.MsgRunResponse;
            toProto(message: _10.MsgRunResponse): Uint8Array;
            toProtoMsg(message: _10.MsgRunResponse): _10.MsgRunResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _9.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.GenesisState;
            fromJSON(object: any): _9.GenesisState;
            toJSON(message: _9.GenesisState): unknown;
            fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
            fromSDK(object: _9.GenesisStateSDKType): _9.GenesisState;
            toSDK(message: _9.GenesisState): _9.GenesisStateSDKType;
            fromAmino(object: _9.GenesisStateAmino): _9.GenesisState;
            toAmino(message: _9.GenesisState): _9.GenesisStateAmino;
            fromAminoMsg(object: _9.GenesisStateAminoMsg): _9.GenesisState;
            fromProtoMsg(message: _9.GenesisStateProtoMsg): _9.GenesisState;
            toProto(message: _9.GenesisState): Uint8Array;
            toProtoMsg(message: _9.GenesisState): _9.GenesisStateProtoMsg;
        };
    };
    const storage: {
        Msg: typeof _183.Msg;
        Query: typeof _180.Query;
        QueryClientImpl: typeof _180.QueryClientImpl;
        LCDQueryClient: typeof _176.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _19.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createStorage(value: _19.MsgCreateStorage): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateStorage(value: _19.MsgUpdateStorage): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteStorage(value: _19.MsgDeleteStorage): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _19.MsgUpdateParams): {
                    typeUrl: string;
                    value: _19.MsgUpdateParams;
                };
                createStorage(value: _19.MsgCreateStorage): {
                    typeUrl: string;
                    value: _19.MsgCreateStorage;
                };
                updateStorage(value: _19.MsgUpdateStorage): {
                    typeUrl: string;
                    value: _19.MsgUpdateStorage;
                };
                deleteStorage(value: _19.MsgDeleteStorage): {
                    typeUrl: string;
                    value: _19.MsgDeleteStorage;
                };
            };
            toJSON: {
                updateParams(value: _19.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
                createStorage(value: _19.MsgCreateStorage): {
                    typeUrl: string;
                    value: unknown;
                };
                updateStorage(value: _19.MsgUpdateStorage): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteStorage(value: _19.MsgDeleteStorage): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _19.MsgUpdateParams;
                };
                createStorage(value: any): {
                    typeUrl: string;
                    value: _19.MsgCreateStorage;
                };
                updateStorage(value: any): {
                    typeUrl: string;
                    value: _19.MsgUpdateStorage;
                };
                deleteStorage(value: any): {
                    typeUrl: string;
                    value: _19.MsgDeleteStorage;
                };
            };
            fromPartial: {
                updateParams(value: _19.MsgUpdateParams): {
                    typeUrl: string;
                    value: _19.MsgUpdateParams;
                };
                createStorage(value: _19.MsgCreateStorage): {
                    typeUrl: string;
                    value: _19.MsgCreateStorage;
                };
                updateStorage(value: _19.MsgUpdateStorage): {
                    typeUrl: string;
                    value: _19.MsgUpdateStorage;
                };
                deleteStorage(value: _19.MsgDeleteStorage): {
                    typeUrl: string;
                    value: _19.MsgDeleteStorage;
                };
            };
        };
        AminoConverter: {
            "/blit.storage.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _19.MsgUpdateParams) => _19.MsgUpdateParamsAmino;
                fromAmino: (object: _19.MsgUpdateParamsAmino) => _19.MsgUpdateParams;
            };
            "/blit.storage.MsgCreateStorage": {
                aminoType: string;
                toAmino: (message: _19.MsgCreateStorage) => _19.MsgCreateStorageAmino;
                fromAmino: (object: _19.MsgCreateStorageAmino) => _19.MsgCreateStorage;
            };
            "/blit.storage.MsgUpdateStorage": {
                aminoType: string;
                toAmino: (message: _19.MsgUpdateStorage) => _19.MsgUpdateStorageAmino;
                fromAmino: (object: _19.MsgUpdateStorageAmino) => _19.MsgUpdateStorage;
            };
            "/blit.storage.MsgDeleteStorage": {
                aminoType: string;
                toAmino: (message: _19.MsgDeleteStorage) => _19.MsgDeleteStorageAmino;
                fromAmino: (object: _19.MsgDeleteStorageAmino) => _19.MsgDeleteStorage;
            };
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _19.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.MsgUpdateParams;
            fromJSON(object: any): _19.MsgUpdateParams;
            toJSON(message: _19.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_19.MsgUpdateParams>): _19.MsgUpdateParams;
            fromSDK(object: _19.MsgUpdateParamsSDKType): _19.MsgUpdateParams;
            toSDK(message: _19.MsgUpdateParams): _19.MsgUpdateParamsSDKType;
            fromAmino(object: _19.MsgUpdateParamsAmino): _19.MsgUpdateParams;
            toAmino(message: _19.MsgUpdateParams): _19.MsgUpdateParamsAmino;
            fromAminoMsg(object: _19.MsgUpdateParamsAminoMsg): _19.MsgUpdateParams;
            toAminoMsg(message: _19.MsgUpdateParams): _19.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _19.MsgUpdateParamsProtoMsg): _19.MsgUpdateParams;
            toProto(message: _19.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _19.MsgUpdateParams): _19.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _19.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.MsgUpdateParamsResponse;
            fromJSON(_: any): _19.MsgUpdateParamsResponse;
            toJSON(_: _19.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_19.MsgUpdateParamsResponse>): _19.MsgUpdateParamsResponse;
            fromSDK(_: _19.MsgUpdateParamsResponseSDKType): _19.MsgUpdateParamsResponse;
            toSDK(_: _19.MsgUpdateParamsResponse): _19.MsgUpdateParamsResponseSDKType;
            fromAmino(_: _19.MsgUpdateParamsResponseAmino): _19.MsgUpdateParamsResponse;
            toAmino(_: _19.MsgUpdateParamsResponse): _19.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _19.MsgUpdateParamsResponseAminoMsg): _19.MsgUpdateParamsResponse;
            fromProtoMsg(message: _19.MsgUpdateParamsResponseProtoMsg): _19.MsgUpdateParamsResponse;
            toProto(message: _19.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _19.MsgUpdateParamsResponse): _19.MsgUpdateParamsResponseProtoMsg;
        };
        MsgCreateStorage: {
            typeUrl: string;
            encode(message: _19.MsgCreateStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.MsgCreateStorage;
            fromJSON(object: any): _19.MsgCreateStorage;
            toJSON(message: _19.MsgCreateStorage): unknown;
            fromPartial(object: Partial<_19.MsgCreateStorage>): _19.MsgCreateStorage;
            fromSDK(object: _19.MsgCreateStorageSDKType): _19.MsgCreateStorage;
            toSDK(message: _19.MsgCreateStorage): _19.MsgCreateStorageSDKType;
            fromAmino(object: _19.MsgCreateStorageAmino): _19.MsgCreateStorage;
            toAmino(message: _19.MsgCreateStorage): _19.MsgCreateStorageAmino;
            fromAminoMsg(object: _19.MsgCreateStorageAminoMsg): _19.MsgCreateStorage;
            fromProtoMsg(message: _19.MsgCreateStorageProtoMsg): _19.MsgCreateStorage;
            toProto(message: _19.MsgCreateStorage): Uint8Array;
            toProtoMsg(message: _19.MsgCreateStorage): _19.MsgCreateStorageProtoMsg;
        };
        MsgCreateStorageResponse: {
            typeUrl: string;
            encode(_: _19.MsgCreateStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.MsgCreateStorageResponse;
            fromJSON(_: any): _19.MsgCreateStorageResponse;
            toJSON(_: _19.MsgCreateStorageResponse): unknown;
            fromPartial(_: Partial<_19.MsgCreateStorageResponse>): _19.MsgCreateStorageResponse;
            fromSDK(_: _19.MsgCreateStorageResponseSDKType): _19.MsgCreateStorageResponse;
            toSDK(_: _19.MsgCreateStorageResponse): _19.MsgCreateStorageResponseSDKType;
            fromAmino(_: _19.MsgCreateStorageResponseAmino): _19.MsgCreateStorageResponse;
            toAmino(_: _19.MsgCreateStorageResponse): _19.MsgCreateStorageResponseAmino;
            fromAminoMsg(object: _19.MsgCreateStorageResponseAminoMsg): _19.MsgCreateStorageResponse;
            fromProtoMsg(message: _19.MsgCreateStorageResponseProtoMsg): _19.MsgCreateStorageResponse;
            toProto(message: _19.MsgCreateStorageResponse): Uint8Array;
            toProtoMsg(message: _19.MsgCreateStorageResponse): _19.MsgCreateStorageResponseProtoMsg;
        };
        MsgUpdateStorage: {
            typeUrl: string;
            encode(message: _19.MsgUpdateStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.MsgUpdateStorage;
            fromJSON(object: any): _19.MsgUpdateStorage;
            toJSON(message: _19.MsgUpdateStorage): unknown;
            fromPartial(object: Partial<_19.MsgUpdateStorage>): _19.MsgUpdateStorage;
            fromSDK(object: _19.MsgUpdateStorageSDKType): _19.MsgUpdateStorage;
            toSDK(message: _19.MsgUpdateStorage): _19.MsgUpdateStorageSDKType;
            fromAmino(object: _19.MsgUpdateStorageAmino): _19.MsgUpdateStorage;
            toAmino(message: _19.MsgUpdateStorage): _19.MsgUpdateStorageAmino;
            fromAminoMsg(object: _19.MsgUpdateStorageAminoMsg): _19.MsgUpdateStorage;
            fromProtoMsg(message: _19.MsgUpdateStorageProtoMsg): _19.MsgUpdateStorage;
            toProto(message: _19.MsgUpdateStorage): Uint8Array;
            toProtoMsg(message: _19.MsgUpdateStorage): _19.MsgUpdateStorageProtoMsg;
        };
        MsgUpdateStorageResponse: {
            typeUrl: string;
            encode(_: _19.MsgUpdateStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.MsgUpdateStorageResponse;
            fromJSON(_: any): _19.MsgUpdateStorageResponse;
            toJSON(_: _19.MsgUpdateStorageResponse): unknown;
            fromPartial(_: Partial<_19.MsgUpdateStorageResponse>): _19.MsgUpdateStorageResponse;
            fromSDK(_: _19.MsgUpdateStorageResponseSDKType): _19.MsgUpdateStorageResponse;
            toSDK(_: _19.MsgUpdateStorageResponse): _19.MsgUpdateStorageResponseSDKType;
            fromAmino(_: _19.MsgUpdateStorageResponseAmino): _19.MsgUpdateStorageResponse;
            toAmino(_: _19.MsgUpdateStorageResponse): _19.MsgUpdateStorageResponseAmino;
            fromAminoMsg(object: _19.MsgUpdateStorageResponseAminoMsg): _19.MsgUpdateStorageResponse;
            fromProtoMsg(message: _19.MsgUpdateStorageResponseProtoMsg): _19.MsgUpdateStorageResponse;
            toProto(message: _19.MsgUpdateStorageResponse): Uint8Array;
            toProtoMsg(message: _19.MsgUpdateStorageResponse): _19.MsgUpdateStorageResponseProtoMsg;
        };
        MsgDeleteStorage: {
            typeUrl: string;
            encode(message: _19.MsgDeleteStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.MsgDeleteStorage;
            fromJSON(object: any): _19.MsgDeleteStorage;
            toJSON(message: _19.MsgDeleteStorage): unknown;
            fromPartial(object: Partial<_19.MsgDeleteStorage>): _19.MsgDeleteStorage;
            fromSDK(object: _19.MsgDeleteStorageSDKType): _19.MsgDeleteStorage;
            toSDK(message: _19.MsgDeleteStorage): _19.MsgDeleteStorageSDKType;
            fromAmino(object: _19.MsgDeleteStorageAmino): _19.MsgDeleteStorage;
            toAmino(message: _19.MsgDeleteStorage): _19.MsgDeleteStorageAmino;
            fromAminoMsg(object: _19.MsgDeleteStorageAminoMsg): _19.MsgDeleteStorage;
            fromProtoMsg(message: _19.MsgDeleteStorageProtoMsg): _19.MsgDeleteStorage;
            toProto(message: _19.MsgDeleteStorage): Uint8Array;
            toProtoMsg(message: _19.MsgDeleteStorage): _19.MsgDeleteStorageProtoMsg;
        };
        MsgDeleteStorageResponse: {
            typeUrl: string;
            encode(_: _19.MsgDeleteStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.MsgDeleteStorageResponse;
            fromJSON(_: any): _19.MsgDeleteStorageResponse;
            toJSON(_: _19.MsgDeleteStorageResponse): unknown;
            fromPartial(_: Partial<_19.MsgDeleteStorageResponse>): _19.MsgDeleteStorageResponse;
            fromSDK(_: _19.MsgDeleteStorageResponseSDKType): _19.MsgDeleteStorageResponse;
            toSDK(_: _19.MsgDeleteStorageResponse): _19.MsgDeleteStorageResponseSDKType;
            fromAmino(_: _19.MsgDeleteStorageResponseAmino): _19.MsgDeleteStorageResponse;
            toAmino(_: _19.MsgDeleteStorageResponse): _19.MsgDeleteStorageResponseAmino;
            fromAminoMsg(object: _19.MsgDeleteStorageResponseAminoMsg): _19.MsgDeleteStorageResponse;
            fromProtoMsg(message: _19.MsgDeleteStorageResponseProtoMsg): _19.MsgDeleteStorageResponse;
            toProto(message: _19.MsgDeleteStorageResponse): Uint8Array;
            toProtoMsg(message: _19.MsgDeleteStorageResponse): _19.MsgDeleteStorageResponseProtoMsg;
        };
        Storage: {
            typeUrl: string;
            encode(message: _18.Storage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.Storage;
            fromJSON(object: any): _18.Storage;
            toJSON(message: _18.Storage): unknown;
            fromPartial(object: Partial<_18.Storage>): _18.Storage;
            fromSDK(object: _18.StorageSDKType): _18.Storage;
            toSDK(message: _18.Storage): _18.StorageSDKType;
            fromAmino(object: _18.StorageAmino): _18.Storage;
            toAmino(message: _18.Storage): _18.StorageAmino;
            fromAminoMsg(object: _18.StorageAminoMsg): _18.Storage;
            fromProtoMsg(message: _18.StorageProtoMsg): _18.Storage;
            toProto(message: _18.Storage): Uint8Array;
            toProtoMsg(message: _18.Storage): _18.StorageProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _17.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryParamsRequest;
            fromJSON(_: any): _17.QueryParamsRequest;
            toJSON(_: _17.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
            fromSDK(_: _17.QueryParamsRequestSDKType): _17.QueryParamsRequest;
            toSDK(_: _17.QueryParamsRequest): _17.QueryParamsRequestSDKType;
            fromAmino(_: _17.QueryParamsRequestAmino): _17.QueryParamsRequest;
            toAmino(_: _17.QueryParamsRequest): _17.QueryParamsRequestAmino;
            fromAminoMsg(object: _17.QueryParamsRequestAminoMsg): _17.QueryParamsRequest;
            fromProtoMsg(message: _17.QueryParamsRequestProtoMsg): _17.QueryParamsRequest;
            toProto(message: _17.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _17.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryParamsResponse;
            fromJSON(object: any): _17.QueryParamsResponse;
            toJSON(message: _17.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
            fromSDK(object: _17.QueryParamsResponseSDKType): _17.QueryParamsResponse;
            toSDK(message: _17.QueryParamsResponse): _17.QueryParamsResponseSDKType;
            fromAmino(object: _17.QueryParamsResponseAmino): _17.QueryParamsResponse;
            toAmino(message: _17.QueryParamsResponse): _17.QueryParamsResponseAmino;
            fromAminoMsg(object: _17.QueryParamsResponseAminoMsg): _17.QueryParamsResponse;
            fromProtoMsg(message: _17.QueryParamsResponseProtoMsg): _17.QueryParamsResponse;
            toProto(message: _17.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseProtoMsg;
        };
        QueryGetStorageRequest: {
            typeUrl: string;
            encode(message: _17.QueryGetStorageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryGetStorageRequest;
            fromJSON(object: any): _17.QueryGetStorageRequest;
            toJSON(message: _17.QueryGetStorageRequest): unknown;
            fromPartial(object: Partial<_17.QueryGetStorageRequest>): _17.QueryGetStorageRequest;
            fromSDK(object: _17.QueryGetStorageRequestSDKType): _17.QueryGetStorageRequest;
            toSDK(message: _17.QueryGetStorageRequest): _17.QueryGetStorageRequestSDKType;
            fromAmino(object: _17.QueryGetStorageRequestAmino): _17.QueryGetStorageRequest;
            toAmino(message: _17.QueryGetStorageRequest): _17.QueryGetStorageRequestAmino;
            fromAminoMsg(object: _17.QueryGetStorageRequestAminoMsg): _17.QueryGetStorageRequest;
            fromProtoMsg(message: _17.QueryGetStorageRequestProtoMsg): _17.QueryGetStorageRequest;
            toProto(message: _17.QueryGetStorageRequest): Uint8Array;
            toProtoMsg(message: _17.QueryGetStorageRequest): _17.QueryGetStorageRequestProtoMsg;
        };
        QueryGetStorageResponse: {
            typeUrl: string;
            encode(message: _17.QueryGetStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryGetStorageResponse;
            fromJSON(object: any): _17.QueryGetStorageResponse;
            toJSON(message: _17.QueryGetStorageResponse): unknown;
            fromPartial(object: Partial<_17.QueryGetStorageResponse>): _17.QueryGetStorageResponse;
            fromSDK(object: _17.QueryGetStorageResponseSDKType): _17.QueryGetStorageResponse;
            toSDK(message: _17.QueryGetStorageResponse): _17.QueryGetStorageResponseSDKType;
            fromAmino(object: _17.QueryGetStorageResponseAmino): _17.QueryGetStorageResponse;
            toAmino(message: _17.QueryGetStorageResponse): _17.QueryGetStorageResponseAmino;
            fromAminoMsg(object: _17.QueryGetStorageResponseAminoMsg): _17.QueryGetStorageResponse;
            fromProtoMsg(message: _17.QueryGetStorageResponseProtoMsg): _17.QueryGetStorageResponse;
            toProto(message: _17.QueryGetStorageResponse): Uint8Array;
            toProtoMsg(message: _17.QueryGetStorageResponse): _17.QueryGetStorageResponseProtoMsg;
        };
        QueryAllStorageRequest: {
            typeUrl: string;
            encode(message: _17.QueryAllStorageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryAllStorageRequest;
            fromJSON(object: any): _17.QueryAllStorageRequest;
            toJSON(message: _17.QueryAllStorageRequest): unknown;
            fromPartial(object: Partial<_17.QueryAllStorageRequest>): _17.QueryAllStorageRequest;
            fromSDK(object: _17.QueryAllStorageRequestSDKType): _17.QueryAllStorageRequest;
            toSDK(message: _17.QueryAllStorageRequest): _17.QueryAllStorageRequestSDKType;
            fromAmino(object: _17.QueryAllStorageRequestAmino): _17.QueryAllStorageRequest;
            toAmino(message: _17.QueryAllStorageRequest): _17.QueryAllStorageRequestAmino;
            fromAminoMsg(object: _17.QueryAllStorageRequestAminoMsg): _17.QueryAllStorageRequest;
            fromProtoMsg(message: _17.QueryAllStorageRequestProtoMsg): _17.QueryAllStorageRequest;
            toProto(message: _17.QueryAllStorageRequest): Uint8Array;
            toProtoMsg(message: _17.QueryAllStorageRequest): _17.QueryAllStorageRequestProtoMsg;
        };
        QueryAllStorageResponse: {
            typeUrl: string;
            encode(message: _17.QueryAllStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryAllStorageResponse;
            fromJSON(object: any): _17.QueryAllStorageResponse;
            toJSON(message: _17.QueryAllStorageResponse): unknown;
            fromPartial(object: Partial<_17.QueryAllStorageResponse>): _17.QueryAllStorageResponse;
            fromSDK(object: _17.QueryAllStorageResponseSDKType): _17.QueryAllStorageResponse;
            toSDK(message: _17.QueryAllStorageResponse): _17.QueryAllStorageResponseSDKType;
            fromAmino(object: _17.QueryAllStorageResponseAmino): _17.QueryAllStorageResponse;
            toAmino(message: _17.QueryAllStorageResponse): _17.QueryAllStorageResponseAmino;
            fromAminoMsg(object: _17.QueryAllStorageResponseAminoMsg): _17.QueryAllStorageResponse;
            fromProtoMsg(message: _17.QueryAllStorageResponseProtoMsg): _17.QueryAllStorageResponse;
            toProto(message: _17.QueryAllStorageResponse): Uint8Array;
            toProtoMsg(message: _17.QueryAllStorageResponse): _17.QueryAllStorageResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _16.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.Params;
            fromJSON(object: any): _16.Params;
            toJSON(message: _16.Params): unknown;
            fromPartial(object: Partial<_16.Params>): _16.Params;
            fromSDK(object: _16.ParamsSDKType): _16.Params;
            toSDK(message: _16.Params): _16.ParamsSDKType;
            fromAmino(object: _16.ParamsAmino): _16.Params;
            toAmino(message: _16.Params): _16.ParamsAmino;
            fromAminoMsg(object: _16.ParamsAminoMsg): _16.Params;
            toAminoMsg(message: _16.Params): _16.ParamsAminoMsg;
            fromProtoMsg(message: _16.ParamsProtoMsg): _16.Params;
            toProto(message: _16.Params): Uint8Array;
            toProtoMsg(message: _16.Params): _16.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _15.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.GenesisState;
            fromJSON(object: any): _15.GenesisState;
            toJSON(message: _15.GenesisState): unknown;
            fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
            fromSDK(object: _15.GenesisStateSDKType): _15.GenesisState;
            toSDK(message: _15.GenesisState): _15.GenesisStateSDKType;
            fromAmino(object: _15.GenesisStateAmino): _15.GenesisState;
            toAmino(message: _15.GenesisState): _15.GenesisStateAmino;
            fromAminoMsg(object: _15.GenesisStateAminoMsg): _15.GenesisState;
            fromProtoMsg(message: _15.GenesisStateProtoMsg): _15.GenesisState;
            toProto(message: _15.GenesisState): Uint8Array;
            toProtoMsg(message: _15.GenesisState): _15.GenesisStateProtoMsg;
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
                blit: _178.QueryClientImpl;
                script: _179.QueryClientImpl;
                storage: _180.QueryClientImpl;
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
                blit: _174.LCDQueryClient;
                script: _175.LCDQueryClient;
                storage: _176.LCDQueryClient;
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

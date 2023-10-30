import * as _1 from "./blit/genesis";
import * as _2 from "./blit/params";
import * as _3 from "./blit/query";
import * as _4 from "./blit/tx";
import * as _5 from "./script/genesis";
import * as _6 from "./script/msgrun";
import * as _7 from "./script/params";
import * as _8 from "./script/query";
import * as _9 from "./script/script";
import * as _10 from "./script/tx";
import * as _11 from "./storage/genesis";
import * as _12 from "./storage/params";
import * as _13 from "./storage/query";
import * as _14 from "./storage/storage";
import * as _15 from "./storage/tx";
import * as _167 from "./blit/query.lcd";
import * as _168 from "./script/query.lcd";
import * as _169 from "./storage/query.lcd";
import * as _170 from "./blit/query.rpc.Query";
import * as _171 from "./script/query.rpc.Query";
import * as _172 from "./storage/query.rpc.Query";
import * as _173 from "./blit/tx.rpc.msg";
import * as _174 from "./script/tx.rpc.msg";
import * as _175 from "./storage/tx.rpc.msg";
export declare namespace blit {
    const blit: {
        Msg: typeof _173.Msg;
        Query: typeof _170.Query;
        QueryClientImpl: typeof _170.QueryClientImpl;
        LCDQueryClient: typeof _167.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _4.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _4.MsgUpdateParams): {
                    typeUrl: string;
                    value: _4.MsgUpdateParams;
                };
            };
            toJSON: {
                updateParams(value: _4.MsgUpdateParams): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _4.MsgUpdateParams;
                };
            };
            fromPartial: {
                updateParams(value: _4.MsgUpdateParams): {
                    typeUrl: string;
                    value: _4.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/blit.blit.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _4.MsgUpdateParams) => _4.MsgUpdateParamsAmino;
                fromAmino: (object: _4.MsgUpdateParamsAmino) => _4.MsgUpdateParams;
            };
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _4.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.MsgUpdateParams;
            fromJSON(object: any): _4.MsgUpdateParams;
            toJSON(message: _4.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_4.MsgUpdateParams>): _4.MsgUpdateParams;
            fromSDK(object: _4.MsgUpdateParamsSDKType): _4.MsgUpdateParams;
            toSDK(message: _4.MsgUpdateParams): _4.MsgUpdateParamsSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.MsgUpdateParamsResponse;
            fromJSON(_: any): _4.MsgUpdateParamsResponse;
            toJSON(_: _4.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_4.MsgUpdateParamsResponse>): _4.MsgUpdateParamsResponse;
            fromSDK(_: _4.MsgUpdateParamsResponseSDKType): _4.MsgUpdateParamsResponse;
            toSDK(_: _4.MsgUpdateParamsResponse): _4.MsgUpdateParamsResponseSDKType;
            fromAmino(_: _4.MsgUpdateParamsResponseAmino): _4.MsgUpdateParamsResponse;
            toAmino(_: _4.MsgUpdateParamsResponse): _4.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _4.MsgUpdateParamsResponseAminoMsg): _4.MsgUpdateParamsResponse;
            fromProtoMsg(message: _4.MsgUpdateParamsResponseProtoMsg): _4.MsgUpdateParamsResponse;
            toProto(message: _4.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _4.MsgUpdateParamsResponse): _4.MsgUpdateParamsResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _3.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.QueryParamsRequest;
            fromJSON(_: any): _3.QueryParamsRequest;
            toJSON(_: _3.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_3.QueryParamsRequest>): _3.QueryParamsRequest;
            fromSDK(_: _3.QueryParamsRequestSDKType): _3.QueryParamsRequest;
            toSDK(_: _3.QueryParamsRequest): _3.QueryParamsRequestSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.QueryParamsResponse;
            fromJSON(object: any): _3.QueryParamsResponse;
            toJSON(message: _3.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_3.QueryParamsResponse>): _3.QueryParamsResponse;
            fromSDK(object: _3.QueryParamsResponseSDKType): _3.QueryParamsResponse;
            toSDK(message: _3.QueryParamsResponse): _3.QueryParamsResponseSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _2.Params;
            fromJSON(_: any): _2.Params;
            toJSON(_: _2.Params): unknown;
            fromPartial(_: Partial<_2.Params>): _2.Params;
            fromSDK(_: _2.ParamsSDKType): _2.Params;
            toSDK(_: _2.Params): _2.ParamsSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.GenesisState;
            fromJSON(object: any): _1.GenesisState;
            toJSON(message: _1.GenesisState): unknown;
            fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
            fromSDK(object: _1.GenesisStateSDKType): _1.GenesisState;
            toSDK(message: _1.GenesisState): _1.GenesisStateSDKType;
            fromAmino(object: _1.GenesisStateAmino): _1.GenesisState;
            toAmino(message: _1.GenesisState): _1.GenesisStateAmino;
            fromAminoMsg(object: _1.GenesisStateAminoMsg): _1.GenesisState;
            fromProtoMsg(message: _1.GenesisStateProtoMsg): _1.GenesisState;
            toProto(message: _1.GenesisState): Uint8Array;
            toProtoMsg(message: _1.GenesisState): _1.GenesisStateProtoMsg;
        };
    };
    const script: {
        Msg: typeof _174.Msg;
        Query: typeof _171.Query;
        QueryClientImpl: typeof _171.QueryClientImpl;
        LCDQueryClient: typeof _168.LCDQueryClient;
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
                run(value: _6.MsgRun): {
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
                run(value: _6.MsgRun): {
                    typeUrl: string;
                    value: _6.MsgRun;
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
                run(value: _6.MsgRun): {
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
                    value: _6.MsgRun;
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
                run(value: _6.MsgRun): {
                    typeUrl: string;
                    value: _6.MsgRun;
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
                toAmino: (message: _6.MsgRun) => _6.MsgRunAmino;
                fromAmino: (object: _6.MsgRunAmino) => _6.MsgRun;
            };
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _10.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgUpdateParams;
            fromJSON(object: any): _10.MsgUpdateParams;
            toJSON(message: _10.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_10.MsgUpdateParams>): _10.MsgUpdateParams;
            fromSDK(object: _10.MsgUpdateParamsSDKType): _10.MsgUpdateParams;
            toSDK(message: _10.MsgUpdateParams): _10.MsgUpdateParamsSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgUpdateParamsResponse;
            fromJSON(_: any): _10.MsgUpdateParamsResponse;
            toJSON(_: _10.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_10.MsgUpdateParamsResponse>): _10.MsgUpdateParamsResponse;
            fromSDK(_: _10.MsgUpdateParamsResponseSDKType): _10.MsgUpdateParamsResponse;
            toSDK(_: _10.MsgUpdateParamsResponse): _10.MsgUpdateParamsResponseSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgCreateScript;
            fromJSON(object: any): _10.MsgCreateScript;
            toJSON(message: _10.MsgCreateScript): unknown;
            fromPartial(object: Partial<_10.MsgCreateScript>): _10.MsgCreateScript;
            fromSDK(object: _10.MsgCreateScriptSDKType): _10.MsgCreateScript;
            toSDK(message: _10.MsgCreateScript): _10.MsgCreateScriptSDKType;
            fromAmino(object: _10.MsgCreateScriptAmino): _10.MsgCreateScript;
            toAmino(message: _10.MsgCreateScript): _10.MsgCreateScriptAmino;
            fromAminoMsg(object: _10.MsgCreateScriptAminoMsg): _10.MsgCreateScript;
            fromProtoMsg(message: _10.MsgCreateScriptProtoMsg): _10.MsgCreateScript;
            toProto(message: _10.MsgCreateScript): Uint8Array;
            toProtoMsg(message: _10.MsgCreateScript): _10.MsgCreateScriptProtoMsg;
        };
        MsgCreateScriptResponse: {
            typeUrl: string;
            encode(_: _10.MsgCreateScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgCreateScriptResponse;
            fromJSON(_: any): _10.MsgCreateScriptResponse;
            toJSON(_: _10.MsgCreateScriptResponse): unknown;
            fromPartial(_: Partial<_10.MsgCreateScriptResponse>): _10.MsgCreateScriptResponse;
            fromSDK(_: _10.MsgCreateScriptResponseSDKType): _10.MsgCreateScriptResponse;
            toSDK(_: _10.MsgCreateScriptResponse): _10.MsgCreateScriptResponseSDKType;
            fromAmino(_: _10.MsgCreateScriptResponseAmino): _10.MsgCreateScriptResponse;
            toAmino(_: _10.MsgCreateScriptResponse): _10.MsgCreateScriptResponseAmino;
            fromAminoMsg(object: _10.MsgCreateScriptResponseAminoMsg): _10.MsgCreateScriptResponse;
            fromProtoMsg(message: _10.MsgCreateScriptResponseProtoMsg): _10.MsgCreateScriptResponse;
            toProto(message: _10.MsgCreateScriptResponse): Uint8Array;
            toProtoMsg(message: _10.MsgCreateScriptResponse): _10.MsgCreateScriptResponseProtoMsg;
        };
        MsgUpdateScript: {
            typeUrl: string;
            encode(message: _10.MsgUpdateScript, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgUpdateScript;
            fromJSON(object: any): _10.MsgUpdateScript;
            toJSON(message: _10.MsgUpdateScript): unknown;
            fromPartial(object: Partial<_10.MsgUpdateScript>): _10.MsgUpdateScript;
            fromSDK(object: _10.MsgUpdateScriptSDKType): _10.MsgUpdateScript;
            toSDK(message: _10.MsgUpdateScript): _10.MsgUpdateScriptSDKType;
            fromAmino(object: _10.MsgUpdateScriptAmino): _10.MsgUpdateScript;
            toAmino(message: _10.MsgUpdateScript): _10.MsgUpdateScriptAmino;
            fromAminoMsg(object: _10.MsgUpdateScriptAminoMsg): _10.MsgUpdateScript;
            fromProtoMsg(message: _10.MsgUpdateScriptProtoMsg): _10.MsgUpdateScript;
            toProto(message: _10.MsgUpdateScript): Uint8Array;
            toProtoMsg(message: _10.MsgUpdateScript): _10.MsgUpdateScriptProtoMsg;
        };
        MsgUpdateScriptResponse: {
            typeUrl: string;
            encode(_: _10.MsgUpdateScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgUpdateScriptResponse;
            fromJSON(_: any): _10.MsgUpdateScriptResponse;
            toJSON(_: _10.MsgUpdateScriptResponse): unknown;
            fromPartial(_: Partial<_10.MsgUpdateScriptResponse>): _10.MsgUpdateScriptResponse;
            fromSDK(_: _10.MsgUpdateScriptResponseSDKType): _10.MsgUpdateScriptResponse;
            toSDK(_: _10.MsgUpdateScriptResponse): _10.MsgUpdateScriptResponseSDKType;
            fromAmino(_: _10.MsgUpdateScriptResponseAmino): _10.MsgUpdateScriptResponse;
            toAmino(_: _10.MsgUpdateScriptResponse): _10.MsgUpdateScriptResponseAmino;
            fromAminoMsg(object: _10.MsgUpdateScriptResponseAminoMsg): _10.MsgUpdateScriptResponse;
            fromProtoMsg(message: _10.MsgUpdateScriptResponseProtoMsg): _10.MsgUpdateScriptResponse;
            toProto(message: _10.MsgUpdateScriptResponse): Uint8Array;
            toProtoMsg(message: _10.MsgUpdateScriptResponse): _10.MsgUpdateScriptResponseProtoMsg;
        };
        Script: {
            typeUrl: string;
            encode(message: _9.Script, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.Script;
            fromJSON(object: any): _9.Script;
            toJSON(message: _9.Script): unknown;
            fromPartial(object: Partial<_9.Script>): _9.Script;
            fromSDK(object: _9.ScriptSDKType): _9.Script;
            toSDK(message: _9.Script): _9.ScriptSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.QueryParamsRequest;
            fromJSON(_: any): _8.QueryParamsRequest;
            toJSON(_: _8.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_8.QueryParamsRequest>): _8.QueryParamsRequest;
            fromSDK(_: _8.QueryParamsRequestSDKType): _8.QueryParamsRequest;
            toSDK(_: _8.QueryParamsRequest): _8.QueryParamsRequestSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.QueryParamsResponse;
            fromJSON(object: any): _8.QueryParamsResponse;
            toJSON(message: _8.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_8.QueryParamsResponse>): _8.QueryParamsResponse;
            fromSDK(object: _8.QueryParamsResponseSDKType): _8.QueryParamsResponse;
            toSDK(message: _8.QueryParamsResponse): _8.QueryParamsResponseSDKType;
            fromAmino(object: _8.QueryParamsResponseAmino): _8.QueryParamsResponse;
            toAmino(message: _8.QueryParamsResponse): _8.QueryParamsResponseAmino;
            fromAminoMsg(object: _8.QueryParamsResponseAminoMsg): _8.QueryParamsResponse;
            fromProtoMsg(message: _8.QueryParamsResponseProtoMsg): _8.QueryParamsResponse;
            toProto(message: _8.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _8.QueryParamsResponse): _8.QueryParamsResponseProtoMsg;
        };
        QueryGetScriptRequest: {
            typeUrl: string;
            encode(message: _8.QueryGetScriptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.QueryGetScriptRequest;
            fromJSON(object: any): _8.QueryGetScriptRequest;
            toJSON(message: _8.QueryGetScriptRequest): unknown;
            fromPartial(object: Partial<_8.QueryGetScriptRequest>): _8.QueryGetScriptRequest;
            fromSDK(object: _8.QueryGetScriptRequestSDKType): _8.QueryGetScriptRequest;
            toSDK(message: _8.QueryGetScriptRequest): _8.QueryGetScriptRequestSDKType;
            fromAmino(object: _8.QueryGetScriptRequestAmino): _8.QueryGetScriptRequest;
            toAmino(message: _8.QueryGetScriptRequest): _8.QueryGetScriptRequestAmino;
            fromAminoMsg(object: _8.QueryGetScriptRequestAminoMsg): _8.QueryGetScriptRequest;
            fromProtoMsg(message: _8.QueryGetScriptRequestProtoMsg): _8.QueryGetScriptRequest;
            toProto(message: _8.QueryGetScriptRequest): Uint8Array;
            toProtoMsg(message: _8.QueryGetScriptRequest): _8.QueryGetScriptRequestProtoMsg;
        };
        QueryGetScriptResponse: {
            typeUrl: string;
            encode(message: _8.QueryGetScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.QueryGetScriptResponse;
            fromJSON(object: any): _8.QueryGetScriptResponse;
            toJSON(message: _8.QueryGetScriptResponse): unknown;
            fromPartial(object: Partial<_8.QueryGetScriptResponse>): _8.QueryGetScriptResponse;
            fromSDK(object: _8.QueryGetScriptResponseSDKType): _8.QueryGetScriptResponse;
            toSDK(message: _8.QueryGetScriptResponse): _8.QueryGetScriptResponseSDKType;
            fromAmino(object: _8.QueryGetScriptResponseAmino): _8.QueryGetScriptResponse;
            toAmino(message: _8.QueryGetScriptResponse): _8.QueryGetScriptResponseAmino;
            fromAminoMsg(object: _8.QueryGetScriptResponseAminoMsg): _8.QueryGetScriptResponse;
            fromProtoMsg(message: _8.QueryGetScriptResponseProtoMsg): _8.QueryGetScriptResponse;
            toProto(message: _8.QueryGetScriptResponse): Uint8Array;
            toProtoMsg(message: _8.QueryGetScriptResponse): _8.QueryGetScriptResponseProtoMsg;
        };
        QueryAllScriptRequest: {
            typeUrl: string;
            encode(message: _8.QueryAllScriptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.QueryAllScriptRequest;
            fromJSON(object: any): _8.QueryAllScriptRequest;
            toJSON(message: _8.QueryAllScriptRequest): unknown;
            fromPartial(object: Partial<_8.QueryAllScriptRequest>): _8.QueryAllScriptRequest;
            fromSDK(object: _8.QueryAllScriptRequestSDKType): _8.QueryAllScriptRequest;
            toSDK(message: _8.QueryAllScriptRequest): _8.QueryAllScriptRequestSDKType;
            fromAmino(object: _8.QueryAllScriptRequestAmino): _8.QueryAllScriptRequest;
            toAmino(message: _8.QueryAllScriptRequest): _8.QueryAllScriptRequestAmino;
            fromAminoMsg(object: _8.QueryAllScriptRequestAminoMsg): _8.QueryAllScriptRequest;
            fromProtoMsg(message: _8.QueryAllScriptRequestProtoMsg): _8.QueryAllScriptRequest;
            toProto(message: _8.QueryAllScriptRequest): Uint8Array;
            toProtoMsg(message: _8.QueryAllScriptRequest): _8.QueryAllScriptRequestProtoMsg;
        };
        QueryAllScriptResponse: {
            typeUrl: string;
            encode(message: _8.QueryAllScriptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.QueryAllScriptResponse;
            fromJSON(object: any): _8.QueryAllScriptResponse;
            toJSON(message: _8.QueryAllScriptResponse): unknown;
            fromPartial(object: Partial<_8.QueryAllScriptResponse>): _8.QueryAllScriptResponse;
            fromSDK(object: _8.QueryAllScriptResponseSDKType): _8.QueryAllScriptResponse;
            toSDK(message: _8.QueryAllScriptResponse): _8.QueryAllScriptResponseSDKType;
            fromAmino(object: _8.QueryAllScriptResponseAmino): _8.QueryAllScriptResponse;
            toAmino(message: _8.QueryAllScriptResponse): _8.QueryAllScriptResponseAmino;
            fromAminoMsg(object: _8.QueryAllScriptResponseAminoMsg): _8.QueryAllScriptResponse;
            fromProtoMsg(message: _8.QueryAllScriptResponseProtoMsg): _8.QueryAllScriptResponse;
            toProto(message: _8.QueryAllScriptResponse): Uint8Array;
            toProtoMsg(message: _8.QueryAllScriptResponse): _8.QueryAllScriptResponseProtoMsg;
        };
        QueryWebRequest: {
            typeUrl: string;
            encode(message: _8.QueryWebRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.QueryWebRequest;
            fromJSON(object: any): _8.QueryWebRequest;
            toJSON(message: _8.QueryWebRequest): unknown;
            fromPartial(object: Partial<_8.QueryWebRequest>): _8.QueryWebRequest;
            fromSDK(object: _8.QueryWebRequestSDKType): _8.QueryWebRequest;
            toSDK(message: _8.QueryWebRequest): _8.QueryWebRequestSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.QueryWebResponse;
            fromJSON(object: any): _8.QueryWebResponse;
            toJSON(message: _8.QueryWebResponse): unknown;
            fromPartial(object: Partial<_8.QueryWebResponse>): _8.QueryWebResponse;
            fromSDK(object: _8.QueryWebResponseSDKType): _8.QueryWebResponse;
            toSDK(message: _8.QueryWebResponse): _8.QueryWebResponseSDKType;
            fromAmino(object: _8.QueryWebResponseAmino): _8.QueryWebResponse;
            toAmino(message: _8.QueryWebResponse): _8.QueryWebResponseAmino;
            fromAminoMsg(object: _8.QueryWebResponseAminoMsg): _8.QueryWebResponse;
            fromProtoMsg(message: _8.QueryWebResponseProtoMsg): _8.QueryWebResponse;
            toProto(message: _8.QueryWebResponse): Uint8Array;
            toProtoMsg(message: _8.QueryWebResponse): _8.QueryWebResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _7.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.Params;
            fromJSON(_: any): _7.Params;
            toJSON(_: _7.Params): unknown;
            fromPartial(_: Partial<_7.Params>): _7.Params;
            fromSDK(_: _7.ParamsSDKType): _7.Params;
            toSDK(_: _7.Params): _7.ParamsSDKType;
            fromAmino(_: _7.ParamsAmino): _7.Params;
            toAmino(_: _7.Params): _7.ParamsAmino;
            fromAminoMsg(object: _7.ParamsAminoMsg): _7.Params;
            toAminoMsg(message: _7.Params): _7.ParamsAminoMsg;
            fromProtoMsg(message: _7.ParamsProtoMsg): _7.Params;
            toProto(message: _7.Params): Uint8Array;
            toProtoMsg(message: _7.Params): _7.ParamsProtoMsg;
        };
        MsgRun: {
            typeUrl: string;
            encode(message: _6.MsgRun, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.MsgRun;
            fromJSON(object: any): _6.MsgRun;
            toJSON(message: _6.MsgRun): unknown;
            fromPartial(object: Partial<_6.MsgRun>): _6.MsgRun;
            fromSDK(object: _6.MsgRunSDKType): _6.MsgRun;
            toSDK(message: _6.MsgRun): _6.MsgRunSDKType;
            fromAmino(object: _6.MsgRunAmino): _6.MsgRun;
            toAmino(message: _6.MsgRun): _6.MsgRunAmino;
            fromAminoMsg(object: _6.MsgRunAminoMsg): _6.MsgRun;
            fromProtoMsg(message: _6.MsgRunProtoMsg): _6.MsgRun;
            toProto(message: _6.MsgRun): Uint8Array;
            toProtoMsg(message: _6.MsgRun): _6.MsgRunProtoMsg;
        };
        MsgRunResponse: {
            typeUrl: string;
            encode(message: _6.MsgRunResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.MsgRunResponse;
            fromJSON(object: any): _6.MsgRunResponse;
            toJSON(message: _6.MsgRunResponse): unknown;
            fromPartial(object: Partial<_6.MsgRunResponse>): _6.MsgRunResponse;
            fromSDK(object: _6.MsgRunResponseSDKType): _6.MsgRunResponse;
            toSDK(message: _6.MsgRunResponse): _6.MsgRunResponseSDKType;
            fromAmino(object: _6.MsgRunResponseAmino): _6.MsgRunResponse;
            toAmino(message: _6.MsgRunResponse): _6.MsgRunResponseAmino;
            fromAminoMsg(object: _6.MsgRunResponseAminoMsg): _6.MsgRunResponse;
            fromProtoMsg(message: _6.MsgRunResponseProtoMsg): _6.MsgRunResponse;
            toProto(message: _6.MsgRunResponse): Uint8Array;
            toProtoMsg(message: _6.MsgRunResponse): _6.MsgRunResponseProtoMsg;
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
    const storage: {
        Msg: typeof _175.Msg;
        Query: typeof _172.Query;
        QueryClientImpl: typeof _172.QueryClientImpl;
        LCDQueryClient: typeof _169.LCDQueryClient;
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
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _15.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgUpdateParams;
            fromJSON(object: any): _15.MsgUpdateParams;
            toJSON(message: _15.MsgUpdateParams): unknown;
            fromPartial(object: Partial<_15.MsgUpdateParams>): _15.MsgUpdateParams;
            fromSDK(object: _15.MsgUpdateParamsSDKType): _15.MsgUpdateParams;
            toSDK(message: _15.MsgUpdateParams): _15.MsgUpdateParamsSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgUpdateParamsResponse;
            fromJSON(_: any): _15.MsgUpdateParamsResponse;
            toJSON(_: _15.MsgUpdateParamsResponse): unknown;
            fromPartial(_: Partial<_15.MsgUpdateParamsResponse>): _15.MsgUpdateParamsResponse;
            fromSDK(_: _15.MsgUpdateParamsResponseSDKType): _15.MsgUpdateParamsResponse;
            toSDK(_: _15.MsgUpdateParamsResponse): _15.MsgUpdateParamsResponseSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgCreateStorage;
            fromJSON(object: any): _15.MsgCreateStorage;
            toJSON(message: _15.MsgCreateStorage): unknown;
            fromPartial(object: Partial<_15.MsgCreateStorage>): _15.MsgCreateStorage;
            fromSDK(object: _15.MsgCreateStorageSDKType): _15.MsgCreateStorage;
            toSDK(message: _15.MsgCreateStorage): _15.MsgCreateStorageSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgCreateStorageResponse;
            fromJSON(_: any): _15.MsgCreateStorageResponse;
            toJSON(_: _15.MsgCreateStorageResponse): unknown;
            fromPartial(_: Partial<_15.MsgCreateStorageResponse>): _15.MsgCreateStorageResponse;
            fromSDK(_: _15.MsgCreateStorageResponseSDKType): _15.MsgCreateStorageResponse;
            toSDK(_: _15.MsgCreateStorageResponse): _15.MsgCreateStorageResponseSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgUpdateStorage;
            fromJSON(object: any): _15.MsgUpdateStorage;
            toJSON(message: _15.MsgUpdateStorage): unknown;
            fromPartial(object: Partial<_15.MsgUpdateStorage>): _15.MsgUpdateStorage;
            fromSDK(object: _15.MsgUpdateStorageSDKType): _15.MsgUpdateStorage;
            toSDK(message: _15.MsgUpdateStorage): _15.MsgUpdateStorageSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgUpdateStorageResponse;
            fromJSON(_: any): _15.MsgUpdateStorageResponse;
            toJSON(_: _15.MsgUpdateStorageResponse): unknown;
            fromPartial(_: Partial<_15.MsgUpdateStorageResponse>): _15.MsgUpdateStorageResponse;
            fromSDK(_: _15.MsgUpdateStorageResponseSDKType): _15.MsgUpdateStorageResponse;
            toSDK(_: _15.MsgUpdateStorageResponse): _15.MsgUpdateStorageResponseSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgDeleteStorage;
            fromJSON(object: any): _15.MsgDeleteStorage;
            toJSON(message: _15.MsgDeleteStorage): unknown;
            fromPartial(object: Partial<_15.MsgDeleteStorage>): _15.MsgDeleteStorage;
            fromSDK(object: _15.MsgDeleteStorageSDKType): _15.MsgDeleteStorage;
            toSDK(message: _15.MsgDeleteStorage): _15.MsgDeleteStorageSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgDeleteStorageResponse;
            fromJSON(_: any): _15.MsgDeleteStorageResponse;
            toJSON(_: _15.MsgDeleteStorageResponse): unknown;
            fromPartial(_: Partial<_15.MsgDeleteStorageResponse>): _15.MsgDeleteStorageResponse;
            fromSDK(_: _15.MsgDeleteStorageResponseSDKType): _15.MsgDeleteStorageResponse;
            toSDK(_: _15.MsgDeleteStorageResponse): _15.MsgDeleteStorageResponseSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.Storage;
            fromJSON(object: any): _14.Storage;
            toJSON(message: _14.Storage): unknown;
            fromPartial(object: Partial<_14.Storage>): _14.Storage;
            fromSDK(object: _14.StorageSDKType): _14.Storage;
            toSDK(message: _14.Storage): _14.StorageSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.QueryParamsRequest;
            fromJSON(_: any): _13.QueryParamsRequest;
            toJSON(_: _13.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_13.QueryParamsRequest>): _13.QueryParamsRequest;
            fromSDK(_: _13.QueryParamsRequestSDKType): _13.QueryParamsRequest;
            toSDK(_: _13.QueryParamsRequest): _13.QueryParamsRequestSDKType;
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
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.QueryParamsResponse;
            fromJSON(object: any): _13.QueryParamsResponse;
            toJSON(message: _13.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_13.QueryParamsResponse>): _13.QueryParamsResponse;
            fromSDK(object: _13.QueryParamsResponseSDKType): _13.QueryParamsResponse;
            toSDK(message: _13.QueryParamsResponse): _13.QueryParamsResponseSDKType;
            fromAmino(object: _13.QueryParamsResponseAmino): _13.QueryParamsResponse;
            toAmino(message: _13.QueryParamsResponse): _13.QueryParamsResponseAmino;
            fromAminoMsg(object: _13.QueryParamsResponseAminoMsg): _13.QueryParamsResponse;
            fromProtoMsg(message: _13.QueryParamsResponseProtoMsg): _13.QueryParamsResponse;
            toProto(message: _13.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseProtoMsg;
        };
        QueryGetStorageRequest: {
            typeUrl: string;
            encode(message: _13.QueryGetStorageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.QueryGetStorageRequest;
            fromJSON(object: any): _13.QueryGetStorageRequest;
            toJSON(message: _13.QueryGetStorageRequest): unknown;
            fromPartial(object: Partial<_13.QueryGetStorageRequest>): _13.QueryGetStorageRequest;
            fromSDK(object: _13.QueryGetStorageRequestSDKType): _13.QueryGetStorageRequest;
            toSDK(message: _13.QueryGetStorageRequest): _13.QueryGetStorageRequestSDKType;
            fromAmino(object: _13.QueryGetStorageRequestAmino): _13.QueryGetStorageRequest;
            toAmino(message: _13.QueryGetStorageRequest): _13.QueryGetStorageRequestAmino;
            fromAminoMsg(object: _13.QueryGetStorageRequestAminoMsg): _13.QueryGetStorageRequest;
            fromProtoMsg(message: _13.QueryGetStorageRequestProtoMsg): _13.QueryGetStorageRequest;
            toProto(message: _13.QueryGetStorageRequest): Uint8Array;
            toProtoMsg(message: _13.QueryGetStorageRequest): _13.QueryGetStorageRequestProtoMsg;
        };
        QueryGetStorageResponse: {
            typeUrl: string;
            encode(message: _13.QueryGetStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.QueryGetStorageResponse;
            fromJSON(object: any): _13.QueryGetStorageResponse;
            toJSON(message: _13.QueryGetStorageResponse): unknown;
            fromPartial(object: Partial<_13.QueryGetStorageResponse>): _13.QueryGetStorageResponse;
            fromSDK(object: _13.QueryGetStorageResponseSDKType): _13.QueryGetStorageResponse;
            toSDK(message: _13.QueryGetStorageResponse): _13.QueryGetStorageResponseSDKType;
            fromAmino(object: _13.QueryGetStorageResponseAmino): _13.QueryGetStorageResponse;
            toAmino(message: _13.QueryGetStorageResponse): _13.QueryGetStorageResponseAmino;
            fromAminoMsg(object: _13.QueryGetStorageResponseAminoMsg): _13.QueryGetStorageResponse;
            fromProtoMsg(message: _13.QueryGetStorageResponseProtoMsg): _13.QueryGetStorageResponse;
            toProto(message: _13.QueryGetStorageResponse): Uint8Array;
            toProtoMsg(message: _13.QueryGetStorageResponse): _13.QueryGetStorageResponseProtoMsg;
        };
        QueryAllStorageRequest: {
            typeUrl: string;
            encode(message: _13.QueryAllStorageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.QueryAllStorageRequest;
            fromJSON(object: any): _13.QueryAllStorageRequest;
            toJSON(message: _13.QueryAllStorageRequest): unknown;
            fromPartial(object: Partial<_13.QueryAllStorageRequest>): _13.QueryAllStorageRequest;
            fromSDK(object: _13.QueryAllStorageRequestSDKType): _13.QueryAllStorageRequest;
            toSDK(message: _13.QueryAllStorageRequest): _13.QueryAllStorageRequestSDKType;
            fromAmino(object: _13.QueryAllStorageRequestAmino): _13.QueryAllStorageRequest;
            toAmino(message: _13.QueryAllStorageRequest): _13.QueryAllStorageRequestAmino;
            fromAminoMsg(object: _13.QueryAllStorageRequestAminoMsg): _13.QueryAllStorageRequest;
            fromProtoMsg(message: _13.QueryAllStorageRequestProtoMsg): _13.QueryAllStorageRequest;
            toProto(message: _13.QueryAllStorageRequest): Uint8Array;
            toProtoMsg(message: _13.QueryAllStorageRequest): _13.QueryAllStorageRequestProtoMsg;
        };
        QueryAllStorageResponse: {
            typeUrl: string;
            encode(message: _13.QueryAllStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.QueryAllStorageResponse;
            fromJSON(object: any): _13.QueryAllStorageResponse;
            toJSON(message: _13.QueryAllStorageResponse): unknown;
            fromPartial(object: Partial<_13.QueryAllStorageResponse>): _13.QueryAllStorageResponse;
            fromSDK(object: _13.QueryAllStorageResponseSDKType): _13.QueryAllStorageResponse;
            toSDK(message: _13.QueryAllStorageResponse): _13.QueryAllStorageResponseSDKType;
            fromAmino(object: _13.QueryAllStorageResponseAmino): _13.QueryAllStorageResponse;
            toAmino(message: _13.QueryAllStorageResponse): _13.QueryAllStorageResponseAmino;
            fromAminoMsg(object: _13.QueryAllStorageResponseAminoMsg): _13.QueryAllStorageResponse;
            fromProtoMsg(message: _13.QueryAllStorageResponseProtoMsg): _13.QueryAllStorageResponse;
            toProto(message: _13.QueryAllStorageResponse): Uint8Array;
            toProtoMsg(message: _13.QueryAllStorageResponse): _13.QueryAllStorageResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _12.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Params;
            fromJSON(object: any): _12.Params;
            toJSON(message: _12.Params): unknown;
            fromPartial(object: Partial<_12.Params>): _12.Params;
            fromSDK(object: _12.ParamsSDKType): _12.Params;
            toSDK(message: _12.Params): _12.ParamsSDKType;
            fromAmino(object: _12.ParamsAmino): _12.Params;
            toAmino(message: _12.Params): _12.ParamsAmino;
            fromAminoMsg(object: _12.ParamsAminoMsg): _12.Params;
            toAminoMsg(message: _12.Params): _12.ParamsAminoMsg;
            fromProtoMsg(message: _12.ParamsProtoMsg): _12.Params;
            toProto(message: _12.Params): Uint8Array;
            toProtoMsg(message: _12.Params): _12.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _11.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.GenesisState;
            fromJSON(object: any): _11.GenesisState;
            toJSON(message: _11.GenesisState): unknown;
            fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
            fromSDK(object: _11.GenesisStateSDKType): _11.GenesisState;
            toSDK(message: _11.GenesisState): _11.GenesisStateSDKType;
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
                blit: _170.QueryClientImpl;
                script: _171.QueryClientImpl;
                storage: _172.QueryClientImpl;
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
                blit: _167.LCDQueryClient;
                script: _168.LCDQueryClient;
                storage: _169.LCDQueryClient;
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

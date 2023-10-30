import * as _86 from "./downtime-detector/v1beta1/downtime_duration";
import * as _87 from "./downtime-detector/v1beta1/genesis";
import * as _88 from "./downtime-detector/v1beta1/query";
import * as _89 from "./epochs/genesis";
import * as _90 from "./epochs/query";
import * as _91 from "./gamm/pool-models/balancer/balancerPool";
import * as _92 from "./gamm/v1beta1/genesis";
import * as _93 from "./gamm/v1beta1/query";
import * as _94 from "./gamm/v1beta1/tx";
import * as _95 from "./gamm/pool-models/balancer/tx/tx";
import * as _96 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _97 from "./gamm/pool-models/stableswap/tx";
import * as _98 from "./gamm/v2/query";
import * as _99 from "./ibc-rate-limit/v1beta1/params";
import * as _100 from "./ibc-rate-limit/v1beta1/query";
import * as _101 from "./incentives/gauge";
import * as _102 from "./incentives/genesis";
import * as _103 from "./incentives/params";
import * as _104 from "./incentives/query";
import * as _105 from "./incentives/tx";
import * as _106 from "./lockup/genesis";
import * as _107 from "./lockup/lock";
import * as _108 from "./lockup/params";
import * as _109 from "./lockup/query";
import * as _110 from "./lockup/tx";
import * as _111 from "./mint/v1beta1/genesis";
import * as _112 from "./mint/v1beta1/mint";
import * as _113 from "./mint/v1beta1/query";
import * as _114 from "./pool-incentives/v1beta1/genesis";
import * as _115 from "./pool-incentives/v1beta1/gov";
import * as _116 from "./pool-incentives/v1beta1/incentives";
import * as _117 from "./pool-incentives/v1beta1/query";
import * as _118 from "./protorev/v1beta1/genesis";
import * as _119 from "./protorev/v1beta1/gov";
import * as _120 from "./protorev/v1beta1/params";
import * as _121 from "./protorev/v1beta1/protorev";
import * as _122 from "./protorev/v1beta1/query";
import * as _123 from "./protorev/v1beta1/tx";
import * as _124 from "./sumtree/v1beta1/tree";
import * as _125 from "./superfluid/genesis";
import * as _126 from "./superfluid/params";
import * as _127 from "./superfluid/query";
import * as _128 from "./superfluid/superfluid";
import * as _129 from "./superfluid/tx";
import * as _130 from "./swaprouter/v1beta1/genesis";
import * as _131 from "./swaprouter/v1beta1/module_route";
import * as _132 from "./swaprouter/v1beta1/query";
import * as _133 from "./swaprouter/v1beta1/swap_route";
import * as _134 from "./swaprouter/v1beta1/tx";
import * as _135 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _136 from "./tokenfactory/v1beta1/genesis";
import * as _137 from "./tokenfactory/v1beta1/params";
import * as _138 from "./tokenfactory/v1beta1/query";
import * as _139 from "./tokenfactory/v1beta1/tx";
import * as _140 from "./twap/v1beta1/genesis";
import * as _141 from "./twap/v1beta1/query";
import * as _142 from "./twap/v1beta1/twap_record";
import * as _143 from "./txfees/v1beta1/feetoken";
import * as _144 from "./txfees/v1beta1/genesis";
import * as _145 from "./txfees/v1beta1/gov";
import * as _146 from "./txfees/v1beta1/query";
import * as _147 from "./valset-pref/v1beta1/query";
import * as _148 from "./valset-pref/v1beta1/state";
import * as _149 from "./valset-pref/v1beta1/tx";
import * as _254 from "./downtime-detector/v1beta1/query.lcd";
import * as _255 from "./epochs/query.lcd";
import * as _256 from "./gamm/v1beta1/query.lcd";
import * as _257 from "./gamm/v2/query.lcd";
import * as _258 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _259 from "./incentives/query.lcd";
import * as _260 from "./lockup/query.lcd";
import * as _261 from "./mint/v1beta1/query.lcd";
import * as _262 from "./pool-incentives/v1beta1/query.lcd";
import * as _263 from "./protorev/v1beta1/query.lcd";
import * as _264 from "./superfluid/query.lcd";
import * as _265 from "./swaprouter/v1beta1/query.lcd";
import * as _266 from "./tokenfactory/v1beta1/query.lcd";
import * as _267 from "./twap/v1beta1/query.lcd";
import * as _268 from "./txfees/v1beta1/query.lcd";
import * as _269 from "./valset-pref/v1beta1/query.lcd";
import * as _270 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _271 from "./epochs/query.rpc.Query";
import * as _272 from "./gamm/v1beta1/query.rpc.Query";
import * as _273 from "./gamm/v2/query.rpc.Query";
import * as _274 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _275 from "./incentives/query.rpc.Query";
import * as _276 from "./lockup/query.rpc.Query";
import * as _277 from "./mint/v1beta1/query.rpc.Query";
import * as _278 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _279 from "./protorev/v1beta1/query.rpc.Query";
import * as _280 from "./superfluid/query.rpc.Query";
import * as _281 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _282 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _283 from "./twap/v1beta1/query.rpc.Query";
import * as _284 from "./txfees/v1beta1/query.rpc.Query";
import * as _285 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _286 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _287 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _288 from "./gamm/v1beta1/tx.rpc.msg";
import * as _289 from "./incentives/tx.rpc.msg";
import * as _290 from "./lockup/tx.rpc.msg";
import * as _291 from "./protorev/v1beta1/tx.rpc.msg";
import * as _292 from "./superfluid/tx.rpc.msg";
import * as _293 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _294 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _295 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace downtimedetector {
        const v1beta1: {
            Query: typeof _270.Query;
            QueryClientImpl: typeof _270.QueryClientImpl;
            LCDQueryClient: typeof _254.LCDQueryClient;
            RecoveredSinceDowntimeOfLengthRequest: {
                typeUrl: string;
                encode(message: _88.RecoveredSinceDowntimeOfLengthRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.RecoveredSinceDowntimeOfLengthRequest;
                fromJSON(object: any): _88.RecoveredSinceDowntimeOfLengthRequest;
                toJSON(message: _88.RecoveredSinceDowntimeOfLengthRequest): unknown;
                fromPartial(object: Partial<_88.RecoveredSinceDowntimeOfLengthRequest>): _88.RecoveredSinceDowntimeOfLengthRequest;
                fromSDK(object: _88.RecoveredSinceDowntimeOfLengthRequestSDKType): _88.RecoveredSinceDowntimeOfLengthRequest;
                toSDK(message: _88.RecoveredSinceDowntimeOfLengthRequest): _88.RecoveredSinceDowntimeOfLengthRequestSDKType;
                fromAmino(object: _88.RecoveredSinceDowntimeOfLengthRequestAmino): _88.RecoveredSinceDowntimeOfLengthRequest;
                toAmino(message: _88.RecoveredSinceDowntimeOfLengthRequest): _88.RecoveredSinceDowntimeOfLengthRequestAmino;
                fromAminoMsg(object: _88.RecoveredSinceDowntimeOfLengthRequestAminoMsg): _88.RecoveredSinceDowntimeOfLengthRequest;
                toAminoMsg(message: _88.RecoveredSinceDowntimeOfLengthRequest): _88.RecoveredSinceDowntimeOfLengthRequestAminoMsg;
                fromProtoMsg(message: _88.RecoveredSinceDowntimeOfLengthRequestProtoMsg): _88.RecoveredSinceDowntimeOfLengthRequest;
                toProto(message: _88.RecoveredSinceDowntimeOfLengthRequest): Uint8Array;
                toProtoMsg(message: _88.RecoveredSinceDowntimeOfLengthRequest): _88.RecoveredSinceDowntimeOfLengthRequestProtoMsg;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                typeUrl: string;
                encode(message: _88.RecoveredSinceDowntimeOfLengthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.RecoveredSinceDowntimeOfLengthResponse;
                fromJSON(object: any): _88.RecoveredSinceDowntimeOfLengthResponse;
                toJSON(message: _88.RecoveredSinceDowntimeOfLengthResponse): unknown;
                fromPartial(object: Partial<_88.RecoveredSinceDowntimeOfLengthResponse>): _88.RecoveredSinceDowntimeOfLengthResponse;
                fromSDK(object: _88.RecoveredSinceDowntimeOfLengthResponseSDKType): _88.RecoveredSinceDowntimeOfLengthResponse;
                toSDK(message: _88.RecoveredSinceDowntimeOfLengthResponse): _88.RecoveredSinceDowntimeOfLengthResponseSDKType;
                fromAmino(object: _88.RecoveredSinceDowntimeOfLengthResponseAmino): _88.RecoveredSinceDowntimeOfLengthResponse;
                toAmino(message: _88.RecoveredSinceDowntimeOfLengthResponse): _88.RecoveredSinceDowntimeOfLengthResponseAmino;
                fromAminoMsg(object: _88.RecoveredSinceDowntimeOfLengthResponseAminoMsg): _88.RecoveredSinceDowntimeOfLengthResponse;
                toAminoMsg(message: _88.RecoveredSinceDowntimeOfLengthResponse): _88.RecoveredSinceDowntimeOfLengthResponseAminoMsg;
                fromProtoMsg(message: _88.RecoveredSinceDowntimeOfLengthResponseProtoMsg): _88.RecoveredSinceDowntimeOfLengthResponse;
                toProto(message: _88.RecoveredSinceDowntimeOfLengthResponse): Uint8Array;
                toProtoMsg(message: _88.RecoveredSinceDowntimeOfLengthResponse): _88.RecoveredSinceDowntimeOfLengthResponseProtoMsg;
            };
            GenesisDowntimeEntry: {
                typeUrl: string;
                encode(message: _87.GenesisDowntimeEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.GenesisDowntimeEntry;
                fromJSON(object: any): _87.GenesisDowntimeEntry;
                toJSON(message: _87.GenesisDowntimeEntry): unknown;
                fromPartial(object: Partial<_87.GenesisDowntimeEntry>): _87.GenesisDowntimeEntry;
                fromSDK(object: _87.GenesisDowntimeEntrySDKType): _87.GenesisDowntimeEntry;
                toSDK(message: _87.GenesisDowntimeEntry): _87.GenesisDowntimeEntrySDKType;
                fromAmino(object: _87.GenesisDowntimeEntryAmino): _87.GenesisDowntimeEntry;
                toAmino(message: _87.GenesisDowntimeEntry): _87.GenesisDowntimeEntryAmino;
                fromAminoMsg(object: _87.GenesisDowntimeEntryAminoMsg): _87.GenesisDowntimeEntry;
                toAminoMsg(message: _87.GenesisDowntimeEntry): _87.GenesisDowntimeEntryAminoMsg;
                fromProtoMsg(message: _87.GenesisDowntimeEntryProtoMsg): _87.GenesisDowntimeEntry;
                toProto(message: _87.GenesisDowntimeEntry): Uint8Array;
                toProtoMsg(message: _87.GenesisDowntimeEntry): _87.GenesisDowntimeEntryProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _87.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.GenesisState;
                fromJSON(object: any): _87.GenesisState;
                toJSON(message: _87.GenesisState): unknown;
                fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
                fromSDK(object: _87.GenesisStateSDKType): _87.GenesisState;
                toSDK(message: _87.GenesisState): _87.GenesisStateSDKType;
                fromAmino(object: _87.GenesisStateAmino): _87.GenesisState;
                toAmino(message: _87.GenesisState): _87.GenesisStateAmino;
                fromAminoMsg(object: _87.GenesisStateAminoMsg): _87.GenesisState;
                toAminoMsg(message: _87.GenesisState): _87.GenesisStateAminoMsg;
                fromProtoMsg(message: _87.GenesisStateProtoMsg): _87.GenesisState;
                toProto(message: _87.GenesisState): Uint8Array;
                toProtoMsg(message: _87.GenesisState): _87.GenesisStateProtoMsg;
            };
            downtimeFromJSON(object: any): _86.Downtime;
            downtimeToJSON(object: _86.Downtime): string;
            Downtime: typeof _86.Downtime;
            DowntimeSDKType: typeof _86.Downtime;
            DowntimeAmino: typeof _86.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            Query: typeof _271.Query;
            QueryClientImpl: typeof _271.QueryClientImpl;
            LCDQueryClient: typeof _255.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _90.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryEpochsInfoRequest;
                fromJSON(_: any): _90.QueryEpochsInfoRequest;
                toJSON(_: _90.QueryEpochsInfoRequest): unknown;
                fromPartial(_: Partial<_90.QueryEpochsInfoRequest>): _90.QueryEpochsInfoRequest;
                fromSDK(_: _90.QueryEpochsInfoRequestSDKType): _90.QueryEpochsInfoRequest;
                toSDK(_: _90.QueryEpochsInfoRequest): _90.QueryEpochsInfoRequestSDKType;
                fromAmino(_: _90.QueryEpochsInfoRequestAmino): _90.QueryEpochsInfoRequest;
                toAmino(_: _90.QueryEpochsInfoRequest): _90.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _90.QueryEpochsInfoRequestAminoMsg): _90.QueryEpochsInfoRequest;
                toAminoMsg(message: _90.QueryEpochsInfoRequest): _90.QueryEpochsInfoRequestAminoMsg;
                fromProtoMsg(message: _90.QueryEpochsInfoRequestProtoMsg): _90.QueryEpochsInfoRequest;
                toProto(message: _90.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _90.QueryEpochsInfoRequest): _90.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _90.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryEpochsInfoResponse;
                fromJSON(object: any): _90.QueryEpochsInfoResponse;
                toJSON(message: _90.QueryEpochsInfoResponse): unknown;
                fromPartial(object: Partial<_90.QueryEpochsInfoResponse>): _90.QueryEpochsInfoResponse;
                fromSDK(object: _90.QueryEpochsInfoResponseSDKType): _90.QueryEpochsInfoResponse;
                toSDK(message: _90.QueryEpochsInfoResponse): _90.QueryEpochsInfoResponseSDKType;
                fromAmino(object: _90.QueryEpochsInfoResponseAmino): _90.QueryEpochsInfoResponse;
                toAmino(message: _90.QueryEpochsInfoResponse): _90.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _90.QueryEpochsInfoResponseAminoMsg): _90.QueryEpochsInfoResponse;
                toAminoMsg(message: _90.QueryEpochsInfoResponse): _90.QueryEpochsInfoResponseAminoMsg;
                fromProtoMsg(message: _90.QueryEpochsInfoResponseProtoMsg): _90.QueryEpochsInfoResponse;
                toProto(message: _90.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _90.QueryEpochsInfoResponse): _90.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _90.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryCurrentEpochRequest;
                fromJSON(object: any): _90.QueryCurrentEpochRequest;
                toJSON(message: _90.QueryCurrentEpochRequest): unknown;
                fromPartial(object: Partial<_90.QueryCurrentEpochRequest>): _90.QueryCurrentEpochRequest;
                fromSDK(object: _90.QueryCurrentEpochRequestSDKType): _90.QueryCurrentEpochRequest;
                toSDK(message: _90.QueryCurrentEpochRequest): _90.QueryCurrentEpochRequestSDKType;
                fromAmino(object: _90.QueryCurrentEpochRequestAmino): _90.QueryCurrentEpochRequest;
                toAmino(message: _90.QueryCurrentEpochRequest): _90.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _90.QueryCurrentEpochRequestAminoMsg): _90.QueryCurrentEpochRequest;
                toAminoMsg(message: _90.QueryCurrentEpochRequest): _90.QueryCurrentEpochRequestAminoMsg;
                fromProtoMsg(message: _90.QueryCurrentEpochRequestProtoMsg): _90.QueryCurrentEpochRequest;
                toProto(message: _90.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _90.QueryCurrentEpochRequest): _90.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _90.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryCurrentEpochResponse;
                fromJSON(object: any): _90.QueryCurrentEpochResponse;
                toJSON(message: _90.QueryCurrentEpochResponse): unknown;
                fromPartial(object: Partial<_90.QueryCurrentEpochResponse>): _90.QueryCurrentEpochResponse;
                fromSDK(object: _90.QueryCurrentEpochResponseSDKType): _90.QueryCurrentEpochResponse;
                toSDK(message: _90.QueryCurrentEpochResponse): _90.QueryCurrentEpochResponseSDKType;
                fromAmino(object: _90.QueryCurrentEpochResponseAmino): _90.QueryCurrentEpochResponse;
                toAmino(message: _90.QueryCurrentEpochResponse): _90.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _90.QueryCurrentEpochResponseAminoMsg): _90.QueryCurrentEpochResponse;
                toAminoMsg(message: _90.QueryCurrentEpochResponse): _90.QueryCurrentEpochResponseAminoMsg;
                fromProtoMsg(message: _90.QueryCurrentEpochResponseProtoMsg): _90.QueryCurrentEpochResponse;
                toProto(message: _90.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _90.QueryCurrentEpochResponse): _90.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _89.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.EpochInfo;
                fromJSON(object: any): _89.EpochInfo;
                toJSON(message: _89.EpochInfo): unknown;
                fromPartial(object: Partial<_89.EpochInfo>): _89.EpochInfo;
                fromSDK(object: _89.EpochInfoSDKType): _89.EpochInfo;
                toSDK(message: _89.EpochInfo): _89.EpochInfoSDKType;
                fromAmino(object: _89.EpochInfoAmino): _89.EpochInfo;
                toAmino(message: _89.EpochInfo): _89.EpochInfoAmino;
                fromAminoMsg(object: _89.EpochInfoAminoMsg): _89.EpochInfo;
                toAminoMsg(message: _89.EpochInfo): _89.EpochInfoAminoMsg;
                fromProtoMsg(message: _89.EpochInfoProtoMsg): _89.EpochInfo;
                toProto(message: _89.EpochInfo): Uint8Array;
                toProtoMsg(message: _89.EpochInfo): _89.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _89.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.GenesisState;
                fromJSON(object: any): _89.GenesisState;
                toJSON(message: _89.GenesisState): unknown;
                fromPartial(object: Partial<_89.GenesisState>): _89.GenesisState;
                fromSDK(object: _89.GenesisStateSDKType): _89.GenesisState;
                toSDK(message: _89.GenesisState): _89.GenesisStateSDKType;
                fromAmino(object: _89.GenesisStateAmino): _89.GenesisState;
                toAmino(message: _89.GenesisState): _89.GenesisStateAmino;
                fromAminoMsg(object: _89.GenesisStateAminoMsg): _89.GenesisState;
                toAminoMsg(message: _89.GenesisState): _89.GenesisStateAminoMsg;
                fromProtoMsg(message: _89.GenesisStateProtoMsg): _89.GenesisState;
                toProto(message: _89.GenesisState): Uint8Array;
                toProtoMsg(message: _89.GenesisState): _89.GenesisStateProtoMsg;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            Msg: typeof _288.Msg;
            Query: typeof _272.Query;
            QueryClientImpl: typeof _272.QueryClientImpl;
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _94.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _94.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _94.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _94.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _94.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _94.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _94.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _94.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _94.MsgJoinPool): {
                        typeUrl: string;
                        value: _94.MsgJoinPool;
                    };
                    exitPool(value: _94.MsgExitPool): {
                        typeUrl: string;
                        value: _94.MsgExitPool;
                    };
                    swapExactAmountIn(value: _94.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _94.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _94.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _94.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _94.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _94.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _94.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _94.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _94.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _94.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _94.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _94.MsgExitSwapShareAmountIn;
                    };
                };
                toJSON: {
                    joinPool(value: _94.MsgJoinPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitPool(value: _94.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _94.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _94.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _94.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _94.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _94.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _94.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _94.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _94.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _94.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _94.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _94.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _94.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _94.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _94.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _94.MsgJoinPool): {
                        typeUrl: string;
                        value: _94.MsgJoinPool;
                    };
                    exitPool(value: _94.MsgExitPool): {
                        typeUrl: string;
                        value: _94.MsgExitPool;
                    };
                    swapExactAmountIn(value: _94.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _94.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _94.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _94.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _94.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _94.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _94.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _94.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _94.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _94.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _94.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _94.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _94.MsgJoinPool) => _94.MsgJoinPoolAmino;
                    fromAmino: (object: _94.MsgJoinPoolAmino) => _94.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _94.MsgExitPool) => _94.MsgExitPoolAmino;
                    fromAmino: (object: _94.MsgExitPoolAmino) => _94.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _94.MsgSwapExactAmountIn) => _94.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _94.MsgSwapExactAmountInAmino) => _94.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _94.MsgSwapExactAmountOut) => _94.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _94.MsgSwapExactAmountOutAmino) => _94.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _94.MsgJoinSwapExternAmountIn) => _94.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _94.MsgJoinSwapExternAmountInAmino) => _94.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _94.MsgJoinSwapShareAmountOut) => _94.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _94.MsgJoinSwapShareAmountOutAmino) => _94.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _94.MsgExitSwapExternAmountOut) => _94.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _94.MsgExitSwapExternAmountOutAmino) => _94.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _94.MsgExitSwapShareAmountIn) => _94.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _94.MsgExitSwapShareAmountInAmino) => _94.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                typeUrl: string;
                encode(message: _94.MsgJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgJoinPool;
                fromJSON(object: any): _94.MsgJoinPool;
                toJSON(message: _94.MsgJoinPool): unknown;
                fromPartial(object: Partial<_94.MsgJoinPool>): _94.MsgJoinPool;
                fromSDK(object: _94.MsgJoinPoolSDKType): _94.MsgJoinPool;
                toSDK(message: _94.MsgJoinPool): _94.MsgJoinPoolSDKType;
                fromAmino(object: _94.MsgJoinPoolAmino): _94.MsgJoinPool;
                toAmino(message: _94.MsgJoinPool): _94.MsgJoinPoolAmino;
                fromAminoMsg(object: _94.MsgJoinPoolAminoMsg): _94.MsgJoinPool;
                toAminoMsg(message: _94.MsgJoinPool): _94.MsgJoinPoolAminoMsg;
                fromProtoMsg(message: _94.MsgJoinPoolProtoMsg): _94.MsgJoinPool;
                toProto(message: _94.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _94.MsgJoinPool): _94.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                typeUrl: string;
                encode(message: _94.MsgJoinPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgJoinPoolResponse;
                fromJSON(object: any): _94.MsgJoinPoolResponse;
                toJSON(message: _94.MsgJoinPoolResponse): unknown;
                fromPartial(object: Partial<_94.MsgJoinPoolResponse>): _94.MsgJoinPoolResponse;
                fromSDK(object: _94.MsgJoinPoolResponseSDKType): _94.MsgJoinPoolResponse;
                toSDK(message: _94.MsgJoinPoolResponse): _94.MsgJoinPoolResponseSDKType;
                fromAmino(object: _94.MsgJoinPoolResponseAmino): _94.MsgJoinPoolResponse;
                toAmino(message: _94.MsgJoinPoolResponse): _94.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _94.MsgJoinPoolResponseAminoMsg): _94.MsgJoinPoolResponse;
                toAminoMsg(message: _94.MsgJoinPoolResponse): _94.MsgJoinPoolResponseAminoMsg;
                fromProtoMsg(message: _94.MsgJoinPoolResponseProtoMsg): _94.MsgJoinPoolResponse;
                toProto(message: _94.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _94.MsgJoinPoolResponse): _94.MsgJoinPoolResponseProtoMsg;
            };
            MsgExitPool: {
                typeUrl: string;
                encode(message: _94.MsgExitPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgExitPool;
                fromJSON(object: any): _94.MsgExitPool;
                toJSON(message: _94.MsgExitPool): unknown;
                fromPartial(object: Partial<_94.MsgExitPool>): _94.MsgExitPool;
                fromSDK(object: _94.MsgExitPoolSDKType): _94.MsgExitPool;
                toSDK(message: _94.MsgExitPool): _94.MsgExitPoolSDKType;
                fromAmino(object: _94.MsgExitPoolAmino): _94.MsgExitPool;
                toAmino(message: _94.MsgExitPool): _94.MsgExitPoolAmino;
                fromAminoMsg(object: _94.MsgExitPoolAminoMsg): _94.MsgExitPool;
                toAminoMsg(message: _94.MsgExitPool): _94.MsgExitPoolAminoMsg;
                fromProtoMsg(message: _94.MsgExitPoolProtoMsg): _94.MsgExitPool;
                toProto(message: _94.MsgExitPool): Uint8Array;
                toProtoMsg(message: _94.MsgExitPool): _94.MsgExitPoolProtoMsg;
            };
            MsgExitPoolResponse: {
                typeUrl: string;
                encode(message: _94.MsgExitPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgExitPoolResponse;
                fromJSON(object: any): _94.MsgExitPoolResponse;
                toJSON(message: _94.MsgExitPoolResponse): unknown;
                fromPartial(object: Partial<_94.MsgExitPoolResponse>): _94.MsgExitPoolResponse;
                fromSDK(object: _94.MsgExitPoolResponseSDKType): _94.MsgExitPoolResponse;
                toSDK(message: _94.MsgExitPoolResponse): _94.MsgExitPoolResponseSDKType;
                fromAmino(object: _94.MsgExitPoolResponseAmino): _94.MsgExitPoolResponse;
                toAmino(message: _94.MsgExitPoolResponse): _94.MsgExitPoolResponseAmino;
                fromAminoMsg(object: _94.MsgExitPoolResponseAminoMsg): _94.MsgExitPoolResponse;
                toAminoMsg(message: _94.MsgExitPoolResponse): _94.MsgExitPoolResponseAminoMsg;
                fromProtoMsg(message: _94.MsgExitPoolResponseProtoMsg): _94.MsgExitPoolResponse;
                toProto(message: _94.MsgExitPoolResponse): Uint8Array;
                toProtoMsg(message: _94.MsgExitPoolResponse): _94.MsgExitPoolResponseProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _94.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.SwapAmountInRoute;
                fromJSON(object: any): _94.SwapAmountInRoute;
                toJSON(message: _94.SwapAmountInRoute): unknown;
                fromPartial(object: Partial<_94.SwapAmountInRoute>): _94.SwapAmountInRoute;
                fromSDK(object: _94.SwapAmountInRouteSDKType): _94.SwapAmountInRoute;
                toSDK(message: _94.SwapAmountInRoute): _94.SwapAmountInRouteSDKType;
                fromAmino(object: _94.SwapAmountInRouteAmino): _94.SwapAmountInRoute;
                toAmino(message: _94.SwapAmountInRoute): _94.SwapAmountInRouteAmino;
                fromAminoMsg(object: _94.SwapAmountInRouteAminoMsg): _94.SwapAmountInRoute;
                toAminoMsg(message: _94.SwapAmountInRoute): _94.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _94.SwapAmountInRouteProtoMsg): _94.SwapAmountInRoute;
                toProto(message: _94.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _94.SwapAmountInRoute): _94.SwapAmountInRouteProtoMsg;
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _94.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgSwapExactAmountIn;
                fromJSON(object: any): _94.MsgSwapExactAmountIn;
                toJSON(message: _94.MsgSwapExactAmountIn): unknown;
                fromPartial(object: Partial<_94.MsgSwapExactAmountIn>): _94.MsgSwapExactAmountIn;
                fromSDK(object: _94.MsgSwapExactAmountInSDKType): _94.MsgSwapExactAmountIn;
                toSDK(message: _94.MsgSwapExactAmountIn): _94.MsgSwapExactAmountInSDKType;
                fromAmino(object: _94.MsgSwapExactAmountInAmino): _94.MsgSwapExactAmountIn;
                toAmino(message: _94.MsgSwapExactAmountIn): _94.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _94.MsgSwapExactAmountInAminoMsg): _94.MsgSwapExactAmountIn;
                toAminoMsg(message: _94.MsgSwapExactAmountIn): _94.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _94.MsgSwapExactAmountInProtoMsg): _94.MsgSwapExactAmountIn;
                toProto(message: _94.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _94.MsgSwapExactAmountIn): _94.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _94.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _94.MsgSwapExactAmountInResponse;
                toJSON(message: _94.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_94.MsgSwapExactAmountInResponse>): _94.MsgSwapExactAmountInResponse;
                fromSDK(object: _94.MsgSwapExactAmountInResponseSDKType): _94.MsgSwapExactAmountInResponse;
                toSDK(message: _94.MsgSwapExactAmountInResponse): _94.MsgSwapExactAmountInResponseSDKType;
                fromAmino(object: _94.MsgSwapExactAmountInResponseAmino): _94.MsgSwapExactAmountInResponse;
                toAmino(message: _94.MsgSwapExactAmountInResponse): _94.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _94.MsgSwapExactAmountInResponseAminoMsg): _94.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _94.MsgSwapExactAmountInResponse): _94.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _94.MsgSwapExactAmountInResponseProtoMsg): _94.MsgSwapExactAmountInResponse;
                toProto(message: _94.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _94.MsgSwapExactAmountInResponse): _94.MsgSwapExactAmountInResponseProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _94.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.SwapAmountOutRoute;
                fromJSON(object: any): _94.SwapAmountOutRoute;
                toJSON(message: _94.SwapAmountOutRoute): unknown;
                fromPartial(object: Partial<_94.SwapAmountOutRoute>): _94.SwapAmountOutRoute;
                fromSDK(object: _94.SwapAmountOutRouteSDKType): _94.SwapAmountOutRoute;
                toSDK(message: _94.SwapAmountOutRoute): _94.SwapAmountOutRouteSDKType;
                fromAmino(object: _94.SwapAmountOutRouteAmino): _94.SwapAmountOutRoute;
                toAmino(message: _94.SwapAmountOutRoute): _94.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _94.SwapAmountOutRouteAminoMsg): _94.SwapAmountOutRoute;
                toAminoMsg(message: _94.SwapAmountOutRoute): _94.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _94.SwapAmountOutRouteProtoMsg): _94.SwapAmountOutRoute;
                toProto(message: _94.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _94.SwapAmountOutRoute): _94.SwapAmountOutRouteProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _94.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgSwapExactAmountOut;
                fromJSON(object: any): _94.MsgSwapExactAmountOut;
                toJSON(message: _94.MsgSwapExactAmountOut): unknown;
                fromPartial(object: Partial<_94.MsgSwapExactAmountOut>): _94.MsgSwapExactAmountOut;
                fromSDK(object: _94.MsgSwapExactAmountOutSDKType): _94.MsgSwapExactAmountOut;
                toSDK(message: _94.MsgSwapExactAmountOut): _94.MsgSwapExactAmountOutSDKType;
                fromAmino(object: _94.MsgSwapExactAmountOutAmino): _94.MsgSwapExactAmountOut;
                toAmino(message: _94.MsgSwapExactAmountOut): _94.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _94.MsgSwapExactAmountOutAminoMsg): _94.MsgSwapExactAmountOut;
                toAminoMsg(message: _94.MsgSwapExactAmountOut): _94.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _94.MsgSwapExactAmountOutProtoMsg): _94.MsgSwapExactAmountOut;
                toProto(message: _94.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _94.MsgSwapExactAmountOut): _94.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _94.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _94.MsgSwapExactAmountOutResponse;
                toJSON(message: _94.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_94.MsgSwapExactAmountOutResponse>): _94.MsgSwapExactAmountOutResponse;
                fromSDK(object: _94.MsgSwapExactAmountOutResponseSDKType): _94.MsgSwapExactAmountOutResponse;
                toSDK(message: _94.MsgSwapExactAmountOutResponse): _94.MsgSwapExactAmountOutResponseSDKType;
                fromAmino(object: _94.MsgSwapExactAmountOutResponseAmino): _94.MsgSwapExactAmountOutResponse;
                toAmino(message: _94.MsgSwapExactAmountOutResponse): _94.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _94.MsgSwapExactAmountOutResponseAminoMsg): _94.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _94.MsgSwapExactAmountOutResponse): _94.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _94.MsgSwapExactAmountOutResponseProtoMsg): _94.MsgSwapExactAmountOutResponse;
                toProto(message: _94.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _94.MsgSwapExactAmountOutResponse): _94.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgJoinSwapExternAmountIn: {
                typeUrl: string;
                encode(message: _94.MsgJoinSwapExternAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _94.MsgJoinSwapExternAmountIn;
                toJSON(message: _94.MsgJoinSwapExternAmountIn): unknown;
                fromPartial(object: Partial<_94.MsgJoinSwapExternAmountIn>): _94.MsgJoinSwapExternAmountIn;
                fromSDK(object: _94.MsgJoinSwapExternAmountInSDKType): _94.MsgJoinSwapExternAmountIn;
                toSDK(message: _94.MsgJoinSwapExternAmountIn): _94.MsgJoinSwapExternAmountInSDKType;
                fromAmino(object: _94.MsgJoinSwapExternAmountInAmino): _94.MsgJoinSwapExternAmountIn;
                toAmino(message: _94.MsgJoinSwapExternAmountIn): _94.MsgJoinSwapExternAmountInAmino;
                fromAminoMsg(object: _94.MsgJoinSwapExternAmountInAminoMsg): _94.MsgJoinSwapExternAmountIn;
                toAminoMsg(message: _94.MsgJoinSwapExternAmountIn): _94.MsgJoinSwapExternAmountInAminoMsg;
                fromProtoMsg(message: _94.MsgJoinSwapExternAmountInProtoMsg): _94.MsgJoinSwapExternAmountIn;
                toProto(message: _94.MsgJoinSwapExternAmountIn): Uint8Array;
                toProtoMsg(message: _94.MsgJoinSwapExternAmountIn): _94.MsgJoinSwapExternAmountInProtoMsg;
            };
            MsgJoinSwapExternAmountInResponse: {
                typeUrl: string;
                encode(message: _94.MsgJoinSwapExternAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _94.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _94.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial(object: Partial<_94.MsgJoinSwapExternAmountInResponse>): _94.MsgJoinSwapExternAmountInResponse;
                fromSDK(object: _94.MsgJoinSwapExternAmountInResponseSDKType): _94.MsgJoinSwapExternAmountInResponse;
                toSDK(message: _94.MsgJoinSwapExternAmountInResponse): _94.MsgJoinSwapExternAmountInResponseSDKType;
                fromAmino(object: _94.MsgJoinSwapExternAmountInResponseAmino): _94.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _94.MsgJoinSwapExternAmountInResponse): _94.MsgJoinSwapExternAmountInResponseAmino;
                fromAminoMsg(object: _94.MsgJoinSwapExternAmountInResponseAminoMsg): _94.MsgJoinSwapExternAmountInResponse;
                toAminoMsg(message: _94.MsgJoinSwapExternAmountInResponse): _94.MsgJoinSwapExternAmountInResponseAminoMsg;
                fromProtoMsg(message: _94.MsgJoinSwapExternAmountInResponseProtoMsg): _94.MsgJoinSwapExternAmountInResponse;
                toProto(message: _94.MsgJoinSwapExternAmountInResponse): Uint8Array;
                toProtoMsg(message: _94.MsgJoinSwapExternAmountInResponse): _94.MsgJoinSwapExternAmountInResponseProtoMsg;
            };
            MsgJoinSwapShareAmountOut: {
                typeUrl: string;
                encode(message: _94.MsgJoinSwapShareAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _94.MsgJoinSwapShareAmountOut;
                toJSON(message: _94.MsgJoinSwapShareAmountOut): unknown;
                fromPartial(object: Partial<_94.MsgJoinSwapShareAmountOut>): _94.MsgJoinSwapShareAmountOut;
                fromSDK(object: _94.MsgJoinSwapShareAmountOutSDKType): _94.MsgJoinSwapShareAmountOut;
                toSDK(message: _94.MsgJoinSwapShareAmountOut): _94.MsgJoinSwapShareAmountOutSDKType;
                fromAmino(object: _94.MsgJoinSwapShareAmountOutAmino): _94.MsgJoinSwapShareAmountOut;
                toAmino(message: _94.MsgJoinSwapShareAmountOut): _94.MsgJoinSwapShareAmountOutAmino;
                fromAminoMsg(object: _94.MsgJoinSwapShareAmountOutAminoMsg): _94.MsgJoinSwapShareAmountOut;
                toAminoMsg(message: _94.MsgJoinSwapShareAmountOut): _94.MsgJoinSwapShareAmountOutAminoMsg;
                fromProtoMsg(message: _94.MsgJoinSwapShareAmountOutProtoMsg): _94.MsgJoinSwapShareAmountOut;
                toProto(message: _94.MsgJoinSwapShareAmountOut): Uint8Array;
                toProtoMsg(message: _94.MsgJoinSwapShareAmountOut): _94.MsgJoinSwapShareAmountOutProtoMsg;
            };
            MsgJoinSwapShareAmountOutResponse: {
                typeUrl: string;
                encode(message: _94.MsgJoinSwapShareAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _94.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _94.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial(object: Partial<_94.MsgJoinSwapShareAmountOutResponse>): _94.MsgJoinSwapShareAmountOutResponse;
                fromSDK(object: _94.MsgJoinSwapShareAmountOutResponseSDKType): _94.MsgJoinSwapShareAmountOutResponse;
                toSDK(message: _94.MsgJoinSwapShareAmountOutResponse): _94.MsgJoinSwapShareAmountOutResponseSDKType;
                fromAmino(object: _94.MsgJoinSwapShareAmountOutResponseAmino): _94.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _94.MsgJoinSwapShareAmountOutResponse): _94.MsgJoinSwapShareAmountOutResponseAmino;
                fromAminoMsg(object: _94.MsgJoinSwapShareAmountOutResponseAminoMsg): _94.MsgJoinSwapShareAmountOutResponse;
                toAminoMsg(message: _94.MsgJoinSwapShareAmountOutResponse): _94.MsgJoinSwapShareAmountOutResponseAminoMsg;
                fromProtoMsg(message: _94.MsgJoinSwapShareAmountOutResponseProtoMsg): _94.MsgJoinSwapShareAmountOutResponse;
                toProto(message: _94.MsgJoinSwapShareAmountOutResponse): Uint8Array;
                toProtoMsg(message: _94.MsgJoinSwapShareAmountOutResponse): _94.MsgJoinSwapShareAmountOutResponseProtoMsg;
            };
            MsgExitSwapShareAmountIn: {
                typeUrl: string;
                encode(message: _94.MsgExitSwapShareAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _94.MsgExitSwapShareAmountIn;
                toJSON(message: _94.MsgExitSwapShareAmountIn): unknown;
                fromPartial(object: Partial<_94.MsgExitSwapShareAmountIn>): _94.MsgExitSwapShareAmountIn;
                fromSDK(object: _94.MsgExitSwapShareAmountInSDKType): _94.MsgExitSwapShareAmountIn;
                toSDK(message: _94.MsgExitSwapShareAmountIn): _94.MsgExitSwapShareAmountInSDKType;
                fromAmino(object: _94.MsgExitSwapShareAmountInAmino): _94.MsgExitSwapShareAmountIn;
                toAmino(message: _94.MsgExitSwapShareAmountIn): _94.MsgExitSwapShareAmountInAmino;
                fromAminoMsg(object: _94.MsgExitSwapShareAmountInAminoMsg): _94.MsgExitSwapShareAmountIn;
                toAminoMsg(message: _94.MsgExitSwapShareAmountIn): _94.MsgExitSwapShareAmountInAminoMsg;
                fromProtoMsg(message: _94.MsgExitSwapShareAmountInProtoMsg): _94.MsgExitSwapShareAmountIn;
                toProto(message: _94.MsgExitSwapShareAmountIn): Uint8Array;
                toProtoMsg(message: _94.MsgExitSwapShareAmountIn): _94.MsgExitSwapShareAmountInProtoMsg;
            };
            MsgExitSwapShareAmountInResponse: {
                typeUrl: string;
                encode(message: _94.MsgExitSwapShareAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _94.MsgExitSwapShareAmountInResponse;
                toJSON(message: _94.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial(object: Partial<_94.MsgExitSwapShareAmountInResponse>): _94.MsgExitSwapShareAmountInResponse;
                fromSDK(object: _94.MsgExitSwapShareAmountInResponseSDKType): _94.MsgExitSwapShareAmountInResponse;
                toSDK(message: _94.MsgExitSwapShareAmountInResponse): _94.MsgExitSwapShareAmountInResponseSDKType;
                fromAmino(object: _94.MsgExitSwapShareAmountInResponseAmino): _94.MsgExitSwapShareAmountInResponse;
                toAmino(message: _94.MsgExitSwapShareAmountInResponse): _94.MsgExitSwapShareAmountInResponseAmino;
                fromAminoMsg(object: _94.MsgExitSwapShareAmountInResponseAminoMsg): _94.MsgExitSwapShareAmountInResponse;
                toAminoMsg(message: _94.MsgExitSwapShareAmountInResponse): _94.MsgExitSwapShareAmountInResponseAminoMsg;
                fromProtoMsg(message: _94.MsgExitSwapShareAmountInResponseProtoMsg): _94.MsgExitSwapShareAmountInResponse;
                toProto(message: _94.MsgExitSwapShareAmountInResponse): Uint8Array;
                toProtoMsg(message: _94.MsgExitSwapShareAmountInResponse): _94.MsgExitSwapShareAmountInResponseProtoMsg;
            };
            MsgExitSwapExternAmountOut: {
                typeUrl: string;
                encode(message: _94.MsgExitSwapExternAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _94.MsgExitSwapExternAmountOut;
                toJSON(message: _94.MsgExitSwapExternAmountOut): unknown;
                fromPartial(object: Partial<_94.MsgExitSwapExternAmountOut>): _94.MsgExitSwapExternAmountOut;
                fromSDK(object: _94.MsgExitSwapExternAmountOutSDKType): _94.MsgExitSwapExternAmountOut;
                toSDK(message: _94.MsgExitSwapExternAmountOut): _94.MsgExitSwapExternAmountOutSDKType;
                fromAmino(object: _94.MsgExitSwapExternAmountOutAmino): _94.MsgExitSwapExternAmountOut;
                toAmino(message: _94.MsgExitSwapExternAmountOut): _94.MsgExitSwapExternAmountOutAmino;
                fromAminoMsg(object: _94.MsgExitSwapExternAmountOutAminoMsg): _94.MsgExitSwapExternAmountOut;
                toAminoMsg(message: _94.MsgExitSwapExternAmountOut): _94.MsgExitSwapExternAmountOutAminoMsg;
                fromProtoMsg(message: _94.MsgExitSwapExternAmountOutProtoMsg): _94.MsgExitSwapExternAmountOut;
                toProto(message: _94.MsgExitSwapExternAmountOut): Uint8Array;
                toProtoMsg(message: _94.MsgExitSwapExternAmountOut): _94.MsgExitSwapExternAmountOutProtoMsg;
            };
            MsgExitSwapExternAmountOutResponse: {
                typeUrl: string;
                encode(message: _94.MsgExitSwapExternAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _94.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _94.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial(object: Partial<_94.MsgExitSwapExternAmountOutResponse>): _94.MsgExitSwapExternAmountOutResponse;
                fromSDK(object: _94.MsgExitSwapExternAmountOutResponseSDKType): _94.MsgExitSwapExternAmountOutResponse;
                toSDK(message: _94.MsgExitSwapExternAmountOutResponse): _94.MsgExitSwapExternAmountOutResponseSDKType;
                fromAmino(object: _94.MsgExitSwapExternAmountOutResponseAmino): _94.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _94.MsgExitSwapExternAmountOutResponse): _94.MsgExitSwapExternAmountOutResponseAmino;
                fromAminoMsg(object: _94.MsgExitSwapExternAmountOutResponseAminoMsg): _94.MsgExitSwapExternAmountOutResponse;
                toAminoMsg(message: _94.MsgExitSwapExternAmountOutResponse): _94.MsgExitSwapExternAmountOutResponseAminoMsg;
                fromProtoMsg(message: _94.MsgExitSwapExternAmountOutResponseProtoMsg): _94.MsgExitSwapExternAmountOutResponse;
                toProto(message: _94.MsgExitSwapExternAmountOutResponse): Uint8Array;
                toProtoMsg(message: _94.MsgExitSwapExternAmountOutResponse): _94.MsgExitSwapExternAmountOutResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _93.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryPoolRequest;
                fromJSON(object: any): _93.QueryPoolRequest;
                toJSON(message: _93.QueryPoolRequest): unknown;
                fromPartial(object: Partial<_93.QueryPoolRequest>): _93.QueryPoolRequest;
                fromSDK(object: _93.QueryPoolRequestSDKType): _93.QueryPoolRequest;
                toSDK(message: _93.QueryPoolRequest): _93.QueryPoolRequestSDKType;
                fromAmino(object: _93.QueryPoolRequestAmino): _93.QueryPoolRequest;
                toAmino(message: _93.QueryPoolRequest): _93.QueryPoolRequestAmino;
                fromAminoMsg(object: _93.QueryPoolRequestAminoMsg): _93.QueryPoolRequest;
                toAminoMsg(message: _93.QueryPoolRequest): _93.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _93.QueryPoolRequestProtoMsg): _93.QueryPoolRequest;
                toProto(message: _93.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _93.QueryPoolRequest): _93.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _93.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryPoolResponse;
                fromJSON(object: any): _93.QueryPoolResponse;
                toJSON(message: _93.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_93.QueryPoolResponse>): _93.QueryPoolResponse;
                fromSDK(object: _93.QueryPoolResponseSDKType): _93.QueryPoolResponse;
                toSDK(message: _93.QueryPoolResponse): _93.QueryPoolResponseSDKType;
                fromAmino(object: _93.QueryPoolResponseAmino): _93.QueryPoolResponse;
                toAmino(message: _93.QueryPoolResponse): _93.QueryPoolResponseAmino;
                fromAminoMsg(object: _93.QueryPoolResponseAminoMsg): _93.QueryPoolResponse;
                toAminoMsg(message: _93.QueryPoolResponse): _93.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _93.QueryPoolResponseProtoMsg): _93.QueryPoolResponse;
                toProto(message: _93.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _93.QueryPoolResponse): _93.QueryPoolResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _93.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryPoolsRequest;
                fromJSON(object: any): _93.QueryPoolsRequest;
                toJSON(message: _93.QueryPoolsRequest): unknown;
                fromPartial(object: Partial<_93.QueryPoolsRequest>): _93.QueryPoolsRequest;
                fromSDK(object: _93.QueryPoolsRequestSDKType): _93.QueryPoolsRequest;
                toSDK(message: _93.QueryPoolsRequest): _93.QueryPoolsRequestSDKType;
                fromAmino(object: _93.QueryPoolsRequestAmino): _93.QueryPoolsRequest;
                toAmino(message: _93.QueryPoolsRequest): _93.QueryPoolsRequestAmino;
                fromAminoMsg(object: _93.QueryPoolsRequestAminoMsg): _93.QueryPoolsRequest;
                toAminoMsg(message: _93.QueryPoolsRequest): _93.QueryPoolsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryPoolsRequestProtoMsg): _93.QueryPoolsRequest;
                toProto(message: _93.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryPoolsRequest): _93.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _93.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryPoolsResponse;
                fromJSON(object: any): _93.QueryPoolsResponse;
                toJSON(message: _93.QueryPoolsResponse): unknown;
                fromPartial(object: Partial<_93.QueryPoolsResponse>): _93.QueryPoolsResponse;
                fromSDK(object: _93.QueryPoolsResponseSDKType): _93.QueryPoolsResponse;
                toSDK(message: _93.QueryPoolsResponse): _93.QueryPoolsResponseSDKType;
                fromAmino(object: _93.QueryPoolsResponseAmino): _93.QueryPoolsResponse;
                toAmino(message: _93.QueryPoolsResponse): _93.QueryPoolsResponseAmino;
                fromAminoMsg(object: _93.QueryPoolsResponseAminoMsg): _93.QueryPoolsResponse;
                toAminoMsg(message: _93.QueryPoolsResponse): _93.QueryPoolsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryPoolsResponseProtoMsg): _93.QueryPoolsResponse;
                toProto(message: _93.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryPoolsResponse): _93.QueryPoolsResponseProtoMsg;
            };
            QueryNumPoolsRequest: {
                typeUrl: string;
                encode(_: _93.QueryNumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryNumPoolsRequest;
                fromJSON(_: any): _93.QueryNumPoolsRequest;
                toJSON(_: _93.QueryNumPoolsRequest): unknown;
                fromPartial(_: Partial<_93.QueryNumPoolsRequest>): _93.QueryNumPoolsRequest;
                fromSDK(_: _93.QueryNumPoolsRequestSDKType): _93.QueryNumPoolsRequest;
                toSDK(_: _93.QueryNumPoolsRequest): _93.QueryNumPoolsRequestSDKType;
                fromAmino(_: _93.QueryNumPoolsRequestAmino): _93.QueryNumPoolsRequest;
                toAmino(_: _93.QueryNumPoolsRequest): _93.QueryNumPoolsRequestAmino;
                fromAminoMsg(object: _93.QueryNumPoolsRequestAminoMsg): _93.QueryNumPoolsRequest;
                toAminoMsg(message: _93.QueryNumPoolsRequest): _93.QueryNumPoolsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryNumPoolsRequestProtoMsg): _93.QueryNumPoolsRequest;
                toProto(message: _93.QueryNumPoolsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryNumPoolsRequest): _93.QueryNumPoolsRequestProtoMsg;
            };
            QueryNumPoolsResponse: {
                typeUrl: string;
                encode(message: _93.QueryNumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryNumPoolsResponse;
                fromJSON(object: any): _93.QueryNumPoolsResponse;
                toJSON(message: _93.QueryNumPoolsResponse): unknown;
                fromPartial(object: Partial<_93.QueryNumPoolsResponse>): _93.QueryNumPoolsResponse;
                fromSDK(object: _93.QueryNumPoolsResponseSDKType): _93.QueryNumPoolsResponse;
                toSDK(message: _93.QueryNumPoolsResponse): _93.QueryNumPoolsResponseSDKType;
                fromAmino(object: _93.QueryNumPoolsResponseAmino): _93.QueryNumPoolsResponse;
                toAmino(message: _93.QueryNumPoolsResponse): _93.QueryNumPoolsResponseAmino;
                fromAminoMsg(object: _93.QueryNumPoolsResponseAminoMsg): _93.QueryNumPoolsResponse;
                toAminoMsg(message: _93.QueryNumPoolsResponse): _93.QueryNumPoolsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryNumPoolsResponseProtoMsg): _93.QueryNumPoolsResponse;
                toProto(message: _93.QueryNumPoolsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryNumPoolsResponse): _93.QueryNumPoolsResponseProtoMsg;
            };
            QueryPoolTypeRequest: {
                typeUrl: string;
                encode(message: _93.QueryPoolTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryPoolTypeRequest;
                fromJSON(object: any): _93.QueryPoolTypeRequest;
                toJSON(message: _93.QueryPoolTypeRequest): unknown;
                fromPartial(object: Partial<_93.QueryPoolTypeRequest>): _93.QueryPoolTypeRequest;
                fromSDK(object: _93.QueryPoolTypeRequestSDKType): _93.QueryPoolTypeRequest;
                toSDK(message: _93.QueryPoolTypeRequest): _93.QueryPoolTypeRequestSDKType;
                fromAmino(object: _93.QueryPoolTypeRequestAmino): _93.QueryPoolTypeRequest;
                toAmino(message: _93.QueryPoolTypeRequest): _93.QueryPoolTypeRequestAmino;
                fromAminoMsg(object: _93.QueryPoolTypeRequestAminoMsg): _93.QueryPoolTypeRequest;
                toAminoMsg(message: _93.QueryPoolTypeRequest): _93.QueryPoolTypeRequestAminoMsg;
                fromProtoMsg(message: _93.QueryPoolTypeRequestProtoMsg): _93.QueryPoolTypeRequest;
                toProto(message: _93.QueryPoolTypeRequest): Uint8Array;
                toProtoMsg(message: _93.QueryPoolTypeRequest): _93.QueryPoolTypeRequestProtoMsg;
            };
            QueryPoolTypeResponse: {
                typeUrl: string;
                encode(message: _93.QueryPoolTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryPoolTypeResponse;
                fromJSON(object: any): _93.QueryPoolTypeResponse;
                toJSON(message: _93.QueryPoolTypeResponse): unknown;
                fromPartial(object: Partial<_93.QueryPoolTypeResponse>): _93.QueryPoolTypeResponse;
                fromSDK(object: _93.QueryPoolTypeResponseSDKType): _93.QueryPoolTypeResponse;
                toSDK(message: _93.QueryPoolTypeResponse): _93.QueryPoolTypeResponseSDKType;
                fromAmino(object: _93.QueryPoolTypeResponseAmino): _93.QueryPoolTypeResponse;
                toAmino(message: _93.QueryPoolTypeResponse): _93.QueryPoolTypeResponseAmino;
                fromAminoMsg(object: _93.QueryPoolTypeResponseAminoMsg): _93.QueryPoolTypeResponse;
                toAminoMsg(message: _93.QueryPoolTypeResponse): _93.QueryPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _93.QueryPoolTypeResponseProtoMsg): _93.QueryPoolTypeResponse;
                toProto(message: _93.QueryPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _93.QueryPoolTypeResponse): _93.QueryPoolTypeResponseProtoMsg;
            };
            QueryCalcJoinPoolSharesRequest: {
                typeUrl: string;
                encode(message: _93.QueryCalcJoinPoolSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryCalcJoinPoolSharesRequest;
                fromJSON(object: any): _93.QueryCalcJoinPoolSharesRequest;
                toJSON(message: _93.QueryCalcJoinPoolSharesRequest): unknown;
                fromPartial(object: Partial<_93.QueryCalcJoinPoolSharesRequest>): _93.QueryCalcJoinPoolSharesRequest;
                fromSDK(object: _93.QueryCalcJoinPoolSharesRequestSDKType): _93.QueryCalcJoinPoolSharesRequest;
                toSDK(message: _93.QueryCalcJoinPoolSharesRequest): _93.QueryCalcJoinPoolSharesRequestSDKType;
                fromAmino(object: _93.QueryCalcJoinPoolSharesRequestAmino): _93.QueryCalcJoinPoolSharesRequest;
                toAmino(message: _93.QueryCalcJoinPoolSharesRequest): _93.QueryCalcJoinPoolSharesRequestAmino;
                fromAminoMsg(object: _93.QueryCalcJoinPoolSharesRequestAminoMsg): _93.QueryCalcJoinPoolSharesRequest;
                toAminoMsg(message: _93.QueryCalcJoinPoolSharesRequest): _93.QueryCalcJoinPoolSharesRequestAminoMsg;
                fromProtoMsg(message: _93.QueryCalcJoinPoolSharesRequestProtoMsg): _93.QueryCalcJoinPoolSharesRequest;
                toProto(message: _93.QueryCalcJoinPoolSharesRequest): Uint8Array;
                toProtoMsg(message: _93.QueryCalcJoinPoolSharesRequest): _93.QueryCalcJoinPoolSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolSharesResponse: {
                typeUrl: string;
                encode(message: _93.QueryCalcJoinPoolSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryCalcJoinPoolSharesResponse;
                fromJSON(object: any): _93.QueryCalcJoinPoolSharesResponse;
                toJSON(message: _93.QueryCalcJoinPoolSharesResponse): unknown;
                fromPartial(object: Partial<_93.QueryCalcJoinPoolSharesResponse>): _93.QueryCalcJoinPoolSharesResponse;
                fromSDK(object: _93.QueryCalcJoinPoolSharesResponseSDKType): _93.QueryCalcJoinPoolSharesResponse;
                toSDK(message: _93.QueryCalcJoinPoolSharesResponse): _93.QueryCalcJoinPoolSharesResponseSDKType;
                fromAmino(object: _93.QueryCalcJoinPoolSharesResponseAmino): _93.QueryCalcJoinPoolSharesResponse;
                toAmino(message: _93.QueryCalcJoinPoolSharesResponse): _93.QueryCalcJoinPoolSharesResponseAmino;
                fromAminoMsg(object: _93.QueryCalcJoinPoolSharesResponseAminoMsg): _93.QueryCalcJoinPoolSharesResponse;
                toAminoMsg(message: _93.QueryCalcJoinPoolSharesResponse): _93.QueryCalcJoinPoolSharesResponseAminoMsg;
                fromProtoMsg(message: _93.QueryCalcJoinPoolSharesResponseProtoMsg): _93.QueryCalcJoinPoolSharesResponse;
                toProto(message: _93.QueryCalcJoinPoolSharesResponse): Uint8Array;
                toProtoMsg(message: _93.QueryCalcJoinPoolSharesResponse): _93.QueryCalcJoinPoolSharesResponseProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                typeUrl: string;
                encode(message: _93.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryCalcExitPoolCoinsFromSharesRequest;
                fromJSON(object: any): _93.QueryCalcExitPoolCoinsFromSharesRequest;
                toJSON(message: _93.QueryCalcExitPoolCoinsFromSharesRequest): unknown;
                fromPartial(object: Partial<_93.QueryCalcExitPoolCoinsFromSharesRequest>): _93.QueryCalcExitPoolCoinsFromSharesRequest;
                fromSDK(object: _93.QueryCalcExitPoolCoinsFromSharesRequestSDKType): _93.QueryCalcExitPoolCoinsFromSharesRequest;
                toSDK(message: _93.QueryCalcExitPoolCoinsFromSharesRequest): _93.QueryCalcExitPoolCoinsFromSharesRequestSDKType;
                fromAmino(object: _93.QueryCalcExitPoolCoinsFromSharesRequestAmino): _93.QueryCalcExitPoolCoinsFromSharesRequest;
                toAmino(message: _93.QueryCalcExitPoolCoinsFromSharesRequest): _93.QueryCalcExitPoolCoinsFromSharesRequestAmino;
                fromAminoMsg(object: _93.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): _93.QueryCalcExitPoolCoinsFromSharesRequest;
                toAminoMsg(message: _93.QueryCalcExitPoolCoinsFromSharesRequest): _93.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg;
                fromProtoMsg(message: _93.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): _93.QueryCalcExitPoolCoinsFromSharesRequest;
                toProto(message: _93.QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array;
                toProtoMsg(message: _93.QueryCalcExitPoolCoinsFromSharesRequest): _93.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                typeUrl: string;
                encode(message: _93.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryCalcExitPoolCoinsFromSharesResponse;
                fromJSON(object: any): _93.QueryCalcExitPoolCoinsFromSharesResponse;
                toJSON(message: _93.QueryCalcExitPoolCoinsFromSharesResponse): unknown;
                fromPartial(object: Partial<_93.QueryCalcExitPoolCoinsFromSharesResponse>): _93.QueryCalcExitPoolCoinsFromSharesResponse;
                fromSDK(object: _93.QueryCalcExitPoolCoinsFromSharesResponseSDKType): _93.QueryCalcExitPoolCoinsFromSharesResponse;
                toSDK(message: _93.QueryCalcExitPoolCoinsFromSharesResponse): _93.QueryCalcExitPoolCoinsFromSharesResponseSDKType;
                fromAmino(object: _93.QueryCalcExitPoolCoinsFromSharesResponseAmino): _93.QueryCalcExitPoolCoinsFromSharesResponse;
                toAmino(message: _93.QueryCalcExitPoolCoinsFromSharesResponse): _93.QueryCalcExitPoolCoinsFromSharesResponseAmino;
                fromAminoMsg(object: _93.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): _93.QueryCalcExitPoolCoinsFromSharesResponse;
                toAminoMsg(message: _93.QueryCalcExitPoolCoinsFromSharesResponse): _93.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg;
                fromProtoMsg(message: _93.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): _93.QueryCalcExitPoolCoinsFromSharesResponse;
                toProto(message: _93.QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array;
                toProtoMsg(message: _93.QueryCalcExitPoolCoinsFromSharesResponse): _93.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg;
            };
            QueryPoolParamsRequest: {
                typeUrl: string;
                encode(message: _93.QueryPoolParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryPoolParamsRequest;
                fromJSON(object: any): _93.QueryPoolParamsRequest;
                toJSON(message: _93.QueryPoolParamsRequest): unknown;
                fromPartial(object: Partial<_93.QueryPoolParamsRequest>): _93.QueryPoolParamsRequest;
                fromSDK(object: _93.QueryPoolParamsRequestSDKType): _93.QueryPoolParamsRequest;
                toSDK(message: _93.QueryPoolParamsRequest): _93.QueryPoolParamsRequestSDKType;
                fromAmino(object: _93.QueryPoolParamsRequestAmino): _93.QueryPoolParamsRequest;
                toAmino(message: _93.QueryPoolParamsRequest): _93.QueryPoolParamsRequestAmino;
                fromAminoMsg(object: _93.QueryPoolParamsRequestAminoMsg): _93.QueryPoolParamsRequest;
                toAminoMsg(message: _93.QueryPoolParamsRequest): _93.QueryPoolParamsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryPoolParamsRequestProtoMsg): _93.QueryPoolParamsRequest;
                toProto(message: _93.QueryPoolParamsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryPoolParamsRequest): _93.QueryPoolParamsRequestProtoMsg;
            };
            QueryPoolParamsResponse: {
                typeUrl: string;
                encode(message: _93.QueryPoolParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryPoolParamsResponse;
                fromJSON(object: any): _93.QueryPoolParamsResponse;
                toJSON(message: _93.QueryPoolParamsResponse): unknown;
                fromPartial(object: Partial<_93.QueryPoolParamsResponse>): _93.QueryPoolParamsResponse;
                fromSDK(object: _93.QueryPoolParamsResponseSDKType): _93.QueryPoolParamsResponse;
                toSDK(message: _93.QueryPoolParamsResponse): _93.QueryPoolParamsResponseSDKType;
                fromAmino(object: _93.QueryPoolParamsResponseAmino): _93.QueryPoolParamsResponse;
                toAmino(message: _93.QueryPoolParamsResponse): _93.QueryPoolParamsResponseAmino;
                fromAminoMsg(object: _93.QueryPoolParamsResponseAminoMsg): _93.QueryPoolParamsResponse;
                toAminoMsg(message: _93.QueryPoolParamsResponse): _93.QueryPoolParamsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryPoolParamsResponseProtoMsg): _93.QueryPoolParamsResponse;
                toProto(message: _93.QueryPoolParamsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryPoolParamsResponse): _93.QueryPoolParamsResponseProtoMsg;
            };
            QueryTotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _93.QueryTotalPoolLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _93.QueryTotalPoolLiquidityRequest;
                toJSON(message: _93.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial(object: Partial<_93.QueryTotalPoolLiquidityRequest>): _93.QueryTotalPoolLiquidityRequest;
                fromSDK(object: _93.QueryTotalPoolLiquidityRequestSDKType): _93.QueryTotalPoolLiquidityRequest;
                toSDK(message: _93.QueryTotalPoolLiquidityRequest): _93.QueryTotalPoolLiquidityRequestSDKType;
                fromAmino(object: _93.QueryTotalPoolLiquidityRequestAmino): _93.QueryTotalPoolLiquidityRequest;
                toAmino(message: _93.QueryTotalPoolLiquidityRequest): _93.QueryTotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _93.QueryTotalPoolLiquidityRequestAminoMsg): _93.QueryTotalPoolLiquidityRequest;
                toAminoMsg(message: _93.QueryTotalPoolLiquidityRequest): _93.QueryTotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _93.QueryTotalPoolLiquidityRequestProtoMsg): _93.QueryTotalPoolLiquidityRequest;
                toProto(message: _93.QueryTotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _93.QueryTotalPoolLiquidityRequest): _93.QueryTotalPoolLiquidityRequestProtoMsg;
            };
            QueryTotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _93.QueryTotalPoolLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _93.QueryTotalPoolLiquidityResponse;
                toJSON(message: _93.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial(object: Partial<_93.QueryTotalPoolLiquidityResponse>): _93.QueryTotalPoolLiquidityResponse;
                fromSDK(object: _93.QueryTotalPoolLiquidityResponseSDKType): _93.QueryTotalPoolLiquidityResponse;
                toSDK(message: _93.QueryTotalPoolLiquidityResponse): _93.QueryTotalPoolLiquidityResponseSDKType;
                fromAmino(object: _93.QueryTotalPoolLiquidityResponseAmino): _93.QueryTotalPoolLiquidityResponse;
                toAmino(message: _93.QueryTotalPoolLiquidityResponse): _93.QueryTotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _93.QueryTotalPoolLiquidityResponseAminoMsg): _93.QueryTotalPoolLiquidityResponse;
                toAminoMsg(message: _93.QueryTotalPoolLiquidityResponse): _93.QueryTotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _93.QueryTotalPoolLiquidityResponseProtoMsg): _93.QueryTotalPoolLiquidityResponse;
                toProto(message: _93.QueryTotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _93.QueryTotalPoolLiquidityResponse): _93.QueryTotalPoolLiquidityResponseProtoMsg;
            };
            QueryTotalSharesRequest: {
                typeUrl: string;
                encode(message: _93.QueryTotalSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryTotalSharesRequest;
                fromJSON(object: any): _93.QueryTotalSharesRequest;
                toJSON(message: _93.QueryTotalSharesRequest): unknown;
                fromPartial(object: Partial<_93.QueryTotalSharesRequest>): _93.QueryTotalSharesRequest;
                fromSDK(object: _93.QueryTotalSharesRequestSDKType): _93.QueryTotalSharesRequest;
                toSDK(message: _93.QueryTotalSharesRequest): _93.QueryTotalSharesRequestSDKType;
                fromAmino(object: _93.QueryTotalSharesRequestAmino): _93.QueryTotalSharesRequest;
                toAmino(message: _93.QueryTotalSharesRequest): _93.QueryTotalSharesRequestAmino;
                fromAminoMsg(object: _93.QueryTotalSharesRequestAminoMsg): _93.QueryTotalSharesRequest;
                toAminoMsg(message: _93.QueryTotalSharesRequest): _93.QueryTotalSharesRequestAminoMsg;
                fromProtoMsg(message: _93.QueryTotalSharesRequestProtoMsg): _93.QueryTotalSharesRequest;
                toProto(message: _93.QueryTotalSharesRequest): Uint8Array;
                toProtoMsg(message: _93.QueryTotalSharesRequest): _93.QueryTotalSharesRequestProtoMsg;
            };
            QueryTotalSharesResponse: {
                typeUrl: string;
                encode(message: _93.QueryTotalSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryTotalSharesResponse;
                fromJSON(object: any): _93.QueryTotalSharesResponse;
                toJSON(message: _93.QueryTotalSharesResponse): unknown;
                fromPartial(object: Partial<_93.QueryTotalSharesResponse>): _93.QueryTotalSharesResponse;
                fromSDK(object: _93.QueryTotalSharesResponseSDKType): _93.QueryTotalSharesResponse;
                toSDK(message: _93.QueryTotalSharesResponse): _93.QueryTotalSharesResponseSDKType;
                fromAmino(object: _93.QueryTotalSharesResponseAmino): _93.QueryTotalSharesResponse;
                toAmino(message: _93.QueryTotalSharesResponse): _93.QueryTotalSharesResponseAmino;
                fromAminoMsg(object: _93.QueryTotalSharesResponseAminoMsg): _93.QueryTotalSharesResponse;
                toAminoMsg(message: _93.QueryTotalSharesResponse): _93.QueryTotalSharesResponseAminoMsg;
                fromProtoMsg(message: _93.QueryTotalSharesResponseProtoMsg): _93.QueryTotalSharesResponse;
                toProto(message: _93.QueryTotalSharesResponse): Uint8Array;
                toProtoMsg(message: _93.QueryTotalSharesResponse): _93.QueryTotalSharesResponseProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                typeUrl: string;
                encode(message: _93.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryCalcJoinPoolNoSwapSharesRequest;
                fromJSON(object: any): _93.QueryCalcJoinPoolNoSwapSharesRequest;
                toJSON(message: _93.QueryCalcJoinPoolNoSwapSharesRequest): unknown;
                fromPartial(object: Partial<_93.QueryCalcJoinPoolNoSwapSharesRequest>): _93.QueryCalcJoinPoolNoSwapSharesRequest;
                fromSDK(object: _93.QueryCalcJoinPoolNoSwapSharesRequestSDKType): _93.QueryCalcJoinPoolNoSwapSharesRequest;
                toSDK(message: _93.QueryCalcJoinPoolNoSwapSharesRequest): _93.QueryCalcJoinPoolNoSwapSharesRequestSDKType;
                fromAmino(object: _93.QueryCalcJoinPoolNoSwapSharesRequestAmino): _93.QueryCalcJoinPoolNoSwapSharesRequest;
                toAmino(message: _93.QueryCalcJoinPoolNoSwapSharesRequest): _93.QueryCalcJoinPoolNoSwapSharesRequestAmino;
                fromAminoMsg(object: _93.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): _93.QueryCalcJoinPoolNoSwapSharesRequest;
                toAminoMsg(message: _93.QueryCalcJoinPoolNoSwapSharesRequest): _93.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg;
                fromProtoMsg(message: _93.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): _93.QueryCalcJoinPoolNoSwapSharesRequest;
                toProto(message: _93.QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array;
                toProtoMsg(message: _93.QueryCalcJoinPoolNoSwapSharesRequest): _93.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                typeUrl: string;
                encode(message: _93.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryCalcJoinPoolNoSwapSharesResponse;
                fromJSON(object: any): _93.QueryCalcJoinPoolNoSwapSharesResponse;
                toJSON(message: _93.QueryCalcJoinPoolNoSwapSharesResponse): unknown;
                fromPartial(object: Partial<_93.QueryCalcJoinPoolNoSwapSharesResponse>): _93.QueryCalcJoinPoolNoSwapSharesResponse;
                fromSDK(object: _93.QueryCalcJoinPoolNoSwapSharesResponseSDKType): _93.QueryCalcJoinPoolNoSwapSharesResponse;
                toSDK(message: _93.QueryCalcJoinPoolNoSwapSharesResponse): _93.QueryCalcJoinPoolNoSwapSharesResponseSDKType;
                fromAmino(object: _93.QueryCalcJoinPoolNoSwapSharesResponseAmino): _93.QueryCalcJoinPoolNoSwapSharesResponse;
                toAmino(message: _93.QueryCalcJoinPoolNoSwapSharesResponse): _93.QueryCalcJoinPoolNoSwapSharesResponseAmino;
                fromAminoMsg(object: _93.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): _93.QueryCalcJoinPoolNoSwapSharesResponse;
                toAminoMsg(message: _93.QueryCalcJoinPoolNoSwapSharesResponse): _93.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg;
                fromProtoMsg(message: _93.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): _93.QueryCalcJoinPoolNoSwapSharesResponse;
                toProto(message: _93.QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array;
                toProtoMsg(message: _93.QueryCalcJoinPoolNoSwapSharesResponse): _93.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg;
            };
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _93.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QuerySpotPriceRequest;
                fromJSON(object: any): _93.QuerySpotPriceRequest;
                toJSON(message: _93.QuerySpotPriceRequest): unknown;
                fromPartial(object: Partial<_93.QuerySpotPriceRequest>): _93.QuerySpotPriceRequest;
                fromSDK(object: _93.QuerySpotPriceRequestSDKType): _93.QuerySpotPriceRequest;
                toSDK(message: _93.QuerySpotPriceRequest): _93.QuerySpotPriceRequestSDKType;
                fromAmino(object: _93.QuerySpotPriceRequestAmino): _93.QuerySpotPriceRequest;
                toAmino(message: _93.QuerySpotPriceRequest): _93.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _93.QuerySpotPriceRequestAminoMsg): _93.QuerySpotPriceRequest;
                toAminoMsg(message: _93.QuerySpotPriceRequest): _93.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _93.QuerySpotPriceRequestProtoMsg): _93.QuerySpotPriceRequest;
                toProto(message: _93.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _93.QuerySpotPriceRequest): _93.QuerySpotPriceRequestProtoMsg;
            };
            QueryPoolsWithFilterRequest: {
                typeUrl: string;
                encode(message: _93.QueryPoolsWithFilterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryPoolsWithFilterRequest;
                fromJSON(object: any): _93.QueryPoolsWithFilterRequest;
                toJSON(message: _93.QueryPoolsWithFilterRequest): unknown;
                fromPartial(object: Partial<_93.QueryPoolsWithFilterRequest>): _93.QueryPoolsWithFilterRequest;
                fromSDK(object: _93.QueryPoolsWithFilterRequestSDKType): _93.QueryPoolsWithFilterRequest;
                toSDK(message: _93.QueryPoolsWithFilterRequest): _93.QueryPoolsWithFilterRequestSDKType;
                fromAmino(object: _93.QueryPoolsWithFilterRequestAmino): _93.QueryPoolsWithFilterRequest;
                toAmino(message: _93.QueryPoolsWithFilterRequest): _93.QueryPoolsWithFilterRequestAmino;
                fromAminoMsg(object: _93.QueryPoolsWithFilterRequestAminoMsg): _93.QueryPoolsWithFilterRequest;
                toAminoMsg(message: _93.QueryPoolsWithFilterRequest): _93.QueryPoolsWithFilterRequestAminoMsg;
                fromProtoMsg(message: _93.QueryPoolsWithFilterRequestProtoMsg): _93.QueryPoolsWithFilterRequest;
                toProto(message: _93.QueryPoolsWithFilterRequest): Uint8Array;
                toProtoMsg(message: _93.QueryPoolsWithFilterRequest): _93.QueryPoolsWithFilterRequestProtoMsg;
            };
            QueryPoolsWithFilterResponse: {
                typeUrl: string;
                encode(message: _93.QueryPoolsWithFilterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryPoolsWithFilterResponse;
                fromJSON(object: any): _93.QueryPoolsWithFilterResponse;
                toJSON(message: _93.QueryPoolsWithFilterResponse): unknown;
                fromPartial(object: Partial<_93.QueryPoolsWithFilterResponse>): _93.QueryPoolsWithFilterResponse;
                fromSDK(object: _93.QueryPoolsWithFilterResponseSDKType): _93.QueryPoolsWithFilterResponse;
                toSDK(message: _93.QueryPoolsWithFilterResponse): _93.QueryPoolsWithFilterResponseSDKType;
                fromAmino(object: _93.QueryPoolsWithFilterResponseAmino): _93.QueryPoolsWithFilterResponse;
                toAmino(message: _93.QueryPoolsWithFilterResponse): _93.QueryPoolsWithFilterResponseAmino;
                fromAminoMsg(object: _93.QueryPoolsWithFilterResponseAminoMsg): _93.QueryPoolsWithFilterResponse;
                toAminoMsg(message: _93.QueryPoolsWithFilterResponse): _93.QueryPoolsWithFilterResponseAminoMsg;
                fromProtoMsg(message: _93.QueryPoolsWithFilterResponseProtoMsg): _93.QueryPoolsWithFilterResponse;
                toProto(message: _93.QueryPoolsWithFilterResponse): Uint8Array;
                toProtoMsg(message: _93.QueryPoolsWithFilterResponse): _93.QueryPoolsWithFilterResponseProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _93.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QuerySpotPriceResponse;
                fromJSON(object: any): _93.QuerySpotPriceResponse;
                toJSON(message: _93.QuerySpotPriceResponse): unknown;
                fromPartial(object: Partial<_93.QuerySpotPriceResponse>): _93.QuerySpotPriceResponse;
                fromSDK(object: _93.QuerySpotPriceResponseSDKType): _93.QuerySpotPriceResponse;
                toSDK(message: _93.QuerySpotPriceResponse): _93.QuerySpotPriceResponseSDKType;
                fromAmino(object: _93.QuerySpotPriceResponseAmino): _93.QuerySpotPriceResponse;
                toAmino(message: _93.QuerySpotPriceResponse): _93.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _93.QuerySpotPriceResponseAminoMsg): _93.QuerySpotPriceResponse;
                toAminoMsg(message: _93.QuerySpotPriceResponse): _93.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _93.QuerySpotPriceResponseProtoMsg): _93.QuerySpotPriceResponse;
                toProto(message: _93.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _93.QuerySpotPriceResponse): _93.QuerySpotPriceResponseProtoMsg;
            };
            QuerySwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _93.QuerySwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _93.QuerySwapExactAmountInRequest;
                toJSON(message: _93.QuerySwapExactAmountInRequest): unknown;
                fromPartial(object: Partial<_93.QuerySwapExactAmountInRequest>): _93.QuerySwapExactAmountInRequest;
                fromSDK(object: _93.QuerySwapExactAmountInRequestSDKType): _93.QuerySwapExactAmountInRequest;
                toSDK(message: _93.QuerySwapExactAmountInRequest): _93.QuerySwapExactAmountInRequestSDKType;
                fromAmino(object: _93.QuerySwapExactAmountInRequestAmino): _93.QuerySwapExactAmountInRequest;
                toAmino(message: _93.QuerySwapExactAmountInRequest): _93.QuerySwapExactAmountInRequestAmino;
                fromAminoMsg(object: _93.QuerySwapExactAmountInRequestAminoMsg): _93.QuerySwapExactAmountInRequest;
                toAminoMsg(message: _93.QuerySwapExactAmountInRequest): _93.QuerySwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _93.QuerySwapExactAmountInRequestProtoMsg): _93.QuerySwapExactAmountInRequest;
                toProto(message: _93.QuerySwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _93.QuerySwapExactAmountInRequest): _93.QuerySwapExactAmountInRequestProtoMsg;
            };
            QuerySwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _93.QuerySwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _93.QuerySwapExactAmountInResponse;
                toJSON(message: _93.QuerySwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_93.QuerySwapExactAmountInResponse>): _93.QuerySwapExactAmountInResponse;
                fromSDK(object: _93.QuerySwapExactAmountInResponseSDKType): _93.QuerySwapExactAmountInResponse;
                toSDK(message: _93.QuerySwapExactAmountInResponse): _93.QuerySwapExactAmountInResponseSDKType;
                fromAmino(object: _93.QuerySwapExactAmountInResponseAmino): _93.QuerySwapExactAmountInResponse;
                toAmino(message: _93.QuerySwapExactAmountInResponse): _93.QuerySwapExactAmountInResponseAmino;
                fromAminoMsg(object: _93.QuerySwapExactAmountInResponseAminoMsg): _93.QuerySwapExactAmountInResponse;
                toAminoMsg(message: _93.QuerySwapExactAmountInResponse): _93.QuerySwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _93.QuerySwapExactAmountInResponseProtoMsg): _93.QuerySwapExactAmountInResponse;
                toProto(message: _93.QuerySwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _93.QuerySwapExactAmountInResponse): _93.QuerySwapExactAmountInResponseProtoMsg;
            };
            QuerySwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _93.QuerySwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _93.QuerySwapExactAmountOutRequest;
                toJSON(message: _93.QuerySwapExactAmountOutRequest): unknown;
                fromPartial(object: Partial<_93.QuerySwapExactAmountOutRequest>): _93.QuerySwapExactAmountOutRequest;
                fromSDK(object: _93.QuerySwapExactAmountOutRequestSDKType): _93.QuerySwapExactAmountOutRequest;
                toSDK(message: _93.QuerySwapExactAmountOutRequest): _93.QuerySwapExactAmountOutRequestSDKType;
                fromAmino(object: _93.QuerySwapExactAmountOutRequestAmino): _93.QuerySwapExactAmountOutRequest;
                toAmino(message: _93.QuerySwapExactAmountOutRequest): _93.QuerySwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _93.QuerySwapExactAmountOutRequestAminoMsg): _93.QuerySwapExactAmountOutRequest;
                toAminoMsg(message: _93.QuerySwapExactAmountOutRequest): _93.QuerySwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _93.QuerySwapExactAmountOutRequestProtoMsg): _93.QuerySwapExactAmountOutRequest;
                toProto(message: _93.QuerySwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _93.QuerySwapExactAmountOutRequest): _93.QuerySwapExactAmountOutRequestProtoMsg;
            };
            QuerySwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _93.QuerySwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _93.QuerySwapExactAmountOutResponse;
                toJSON(message: _93.QuerySwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_93.QuerySwapExactAmountOutResponse>): _93.QuerySwapExactAmountOutResponse;
                fromSDK(object: _93.QuerySwapExactAmountOutResponseSDKType): _93.QuerySwapExactAmountOutResponse;
                toSDK(message: _93.QuerySwapExactAmountOutResponse): _93.QuerySwapExactAmountOutResponseSDKType;
                fromAmino(object: _93.QuerySwapExactAmountOutResponseAmino): _93.QuerySwapExactAmountOutResponse;
                toAmino(message: _93.QuerySwapExactAmountOutResponse): _93.QuerySwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _93.QuerySwapExactAmountOutResponseAminoMsg): _93.QuerySwapExactAmountOutResponse;
                toAminoMsg(message: _93.QuerySwapExactAmountOutResponse): _93.QuerySwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _93.QuerySwapExactAmountOutResponseProtoMsg): _93.QuerySwapExactAmountOutResponse;
                toProto(message: _93.QuerySwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _93.QuerySwapExactAmountOutResponse): _93.QuerySwapExactAmountOutResponseProtoMsg;
            };
            QueryTotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _93.QueryTotalLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryTotalLiquidityRequest;
                fromJSON(_: any): _93.QueryTotalLiquidityRequest;
                toJSON(_: _93.QueryTotalLiquidityRequest): unknown;
                fromPartial(_: Partial<_93.QueryTotalLiquidityRequest>): _93.QueryTotalLiquidityRequest;
                fromSDK(_: _93.QueryTotalLiquidityRequestSDKType): _93.QueryTotalLiquidityRequest;
                toSDK(_: _93.QueryTotalLiquidityRequest): _93.QueryTotalLiquidityRequestSDKType;
                fromAmino(_: _93.QueryTotalLiquidityRequestAmino): _93.QueryTotalLiquidityRequest;
                toAmino(_: _93.QueryTotalLiquidityRequest): _93.QueryTotalLiquidityRequestAmino;
                fromAminoMsg(object: _93.QueryTotalLiquidityRequestAminoMsg): _93.QueryTotalLiquidityRequest;
                toAminoMsg(message: _93.QueryTotalLiquidityRequest): _93.QueryTotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _93.QueryTotalLiquidityRequestProtoMsg): _93.QueryTotalLiquidityRequest;
                toProto(message: _93.QueryTotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _93.QueryTotalLiquidityRequest): _93.QueryTotalLiquidityRequestProtoMsg;
            };
            QueryTotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _93.QueryTotalLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryTotalLiquidityResponse;
                fromJSON(object: any): _93.QueryTotalLiquidityResponse;
                toJSON(message: _93.QueryTotalLiquidityResponse): unknown;
                fromPartial(object: Partial<_93.QueryTotalLiquidityResponse>): _93.QueryTotalLiquidityResponse;
                fromSDK(object: _93.QueryTotalLiquidityResponseSDKType): _93.QueryTotalLiquidityResponse;
                toSDK(message: _93.QueryTotalLiquidityResponse): _93.QueryTotalLiquidityResponseSDKType;
                fromAmino(object: _93.QueryTotalLiquidityResponseAmino): _93.QueryTotalLiquidityResponse;
                toAmino(message: _93.QueryTotalLiquidityResponse): _93.QueryTotalLiquidityResponseAmino;
                fromAminoMsg(object: _93.QueryTotalLiquidityResponseAminoMsg): _93.QueryTotalLiquidityResponse;
                toAminoMsg(message: _93.QueryTotalLiquidityResponse): _93.QueryTotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _93.QueryTotalLiquidityResponseProtoMsg): _93.QueryTotalLiquidityResponse;
                toProto(message: _93.QueryTotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _93.QueryTotalLiquidityResponse): _93.QueryTotalLiquidityResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _91.Pool | _96.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Params: {
                typeUrl: string;
                encode(message: _92.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.Params;
                fromJSON(object: any): _92.Params;
                toJSON(message: _92.Params): unknown;
                fromPartial(object: Partial<_92.Params>): _92.Params;
                fromSDK(object: _92.ParamsSDKType): _92.Params;
                toSDK(message: _92.Params): _92.ParamsSDKType;
                fromAmino(object: _92.ParamsAmino): _92.Params;
                toAmino(message: _92.Params): _92.ParamsAmino;
                fromAminoMsg(object: _92.ParamsAminoMsg): _92.Params;
                toAminoMsg(message: _92.Params): _92.ParamsAminoMsg;
                fromProtoMsg(message: _92.ParamsProtoMsg): _92.Params;
                toProto(message: _92.Params): Uint8Array;
                toProtoMsg(message: _92.Params): _92.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _92.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.GenesisState;
                fromJSON(object: any): _92.GenesisState;
                toJSON(message: _92.GenesisState): unknown;
                fromPartial(object: Partial<_92.GenesisState>): _92.GenesisState;
                fromSDK(object: _92.GenesisStateSDKType): _92.GenesisState;
                toSDK(message: _92.GenesisState): _92.GenesisStateSDKType;
                fromAmino(object: _92.GenesisStateAmino): _92.GenesisState;
                toAmino(message: _92.GenesisState): _92.GenesisStateAmino;
                fromAminoMsg(object: _92.GenesisStateAminoMsg): _92.GenesisState;
                toAminoMsg(message: _92.GenesisState): _92.GenesisStateAminoMsg;
                fromProtoMsg(message: _92.GenesisStateProtoMsg): _92.GenesisState;
                toProto(message: _92.GenesisState): Uint8Array;
                toProtoMsg(message: _92.GenesisState): _92.GenesisStateProtoMsg;
            };
            SmoothWeightChangeParams: {
                typeUrl: string;
                encode(message: _91.SmoothWeightChangeParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.SmoothWeightChangeParams;
                fromJSON(object: any): _91.SmoothWeightChangeParams;
                toJSON(message: _91.SmoothWeightChangeParams): unknown;
                fromPartial(object: Partial<_91.SmoothWeightChangeParams>): _91.SmoothWeightChangeParams;
                fromSDK(object: _91.SmoothWeightChangeParamsSDKType): _91.SmoothWeightChangeParams;
                toSDK(message: _91.SmoothWeightChangeParams): _91.SmoothWeightChangeParamsSDKType;
                fromAmino(object: _91.SmoothWeightChangeParamsAmino): _91.SmoothWeightChangeParams;
                toAmino(message: _91.SmoothWeightChangeParams): _91.SmoothWeightChangeParamsAmino;
                fromAminoMsg(object: _91.SmoothWeightChangeParamsAminoMsg): _91.SmoothWeightChangeParams;
                toAminoMsg(message: _91.SmoothWeightChangeParams): _91.SmoothWeightChangeParamsAminoMsg;
                fromProtoMsg(message: _91.SmoothWeightChangeParamsProtoMsg): _91.SmoothWeightChangeParams;
                toProto(message: _91.SmoothWeightChangeParams): Uint8Array;
                toProtoMsg(message: _91.SmoothWeightChangeParams): _91.SmoothWeightChangeParamsProtoMsg;
            };
            PoolParams: {
                typeUrl: string;
                encode(message: _91.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.PoolParams;
                fromJSON(object: any): _91.PoolParams;
                toJSON(message: _91.PoolParams): unknown;
                fromPartial(object: Partial<_91.PoolParams>): _91.PoolParams;
                fromSDK(object: _91.PoolParamsSDKType): _91.PoolParams;
                toSDK(message: _91.PoolParams): _91.PoolParamsSDKType;
                fromAmino(object: _91.PoolParamsAmino): _91.PoolParams;
                toAmino(message: _91.PoolParams): _91.PoolParamsAmino;
                fromAminoMsg(object: _91.PoolParamsAminoMsg): _91.PoolParams;
                toAminoMsg(message: _91.PoolParams): _91.PoolParamsAminoMsg;
                fromProtoMsg(message: _91.PoolParamsProtoMsg): _91.PoolParams;
                toProto(message: _91.PoolParams): Uint8Array;
                toProtoMsg(message: _91.PoolParams): _91.PoolParamsProtoMsg;
            };
            PoolAsset: {
                typeUrl: string;
                encode(message: _91.PoolAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.PoolAsset;
                fromJSON(object: any): _91.PoolAsset;
                toJSON(message: _91.PoolAsset): unknown;
                fromPartial(object: Partial<_91.PoolAsset>): _91.PoolAsset;
                fromSDK(object: _91.PoolAssetSDKType): _91.PoolAsset;
                toSDK(message: _91.PoolAsset): _91.PoolAssetSDKType;
                fromAmino(object: _91.PoolAssetAmino): _91.PoolAsset;
                toAmino(message: _91.PoolAsset): _91.PoolAssetAmino;
                fromAminoMsg(object: _91.PoolAssetAminoMsg): _91.PoolAsset;
                toAminoMsg(message: _91.PoolAsset): _91.PoolAssetAminoMsg;
                fromProtoMsg(message: _91.PoolAssetProtoMsg): _91.PoolAsset;
                toProto(message: _91.PoolAsset): Uint8Array;
                toProtoMsg(message: _91.PoolAsset): _91.PoolAssetProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _91.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Pool;
                fromJSON(object: any): _91.Pool;
                toJSON(message: _91.Pool): unknown;
                fromPartial(object: Partial<_91.Pool>): _91.Pool;
                fromSDK(object: _91.PoolSDKType): _91.Pool;
                toSDK(message: _91.Pool): _91.PoolSDKType;
                fromAmino(object: _91.PoolAmino): _91.Pool;
                toAmino(message: _91.Pool): _91.PoolAmino;
                fromAminoMsg(object: _91.PoolAminoMsg): _91.Pool;
                toAminoMsg(message: _91.Pool): _91.PoolAminoMsg;
                fromProtoMsg(message: _91.PoolProtoMsg): _91.Pool;
                toProto(message: _91.Pool): Uint8Array;
                toProtoMsg(message: _91.Pool): _91.PoolProtoMsg;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    Msg: typeof _286.Msg;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _95.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _95.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _95.MsgCreateBalancerPool;
                            };
                        };
                        toJSON: {
                            createBalancerPool(value: _95.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _95.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _95.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _95.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _95.MsgCreateBalancerPool) => _95.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _95.MsgCreateBalancerPoolAmino) => _95.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        typeUrl: string;
                        encode(message: _95.MsgCreateBalancerPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgCreateBalancerPool;
                        fromJSON(object: any): _95.MsgCreateBalancerPool;
                        toJSON(message: _95.MsgCreateBalancerPool): unknown;
                        fromPartial(object: Partial<_95.MsgCreateBalancerPool>): _95.MsgCreateBalancerPool;
                        fromSDK(object: _95.MsgCreateBalancerPoolSDKType): _95.MsgCreateBalancerPool;
                        toSDK(message: _95.MsgCreateBalancerPool): _95.MsgCreateBalancerPoolSDKType;
                        fromAmino(object: _95.MsgCreateBalancerPoolAmino): _95.MsgCreateBalancerPool;
                        toAmino(message: _95.MsgCreateBalancerPool): _95.MsgCreateBalancerPoolAmino;
                        fromAminoMsg(object: _95.MsgCreateBalancerPoolAminoMsg): _95.MsgCreateBalancerPool;
                        toAminoMsg(message: _95.MsgCreateBalancerPool): _95.MsgCreateBalancerPoolAminoMsg;
                        fromProtoMsg(message: _95.MsgCreateBalancerPoolProtoMsg): _95.MsgCreateBalancerPool;
                        toProto(message: _95.MsgCreateBalancerPool): Uint8Array;
                        toProtoMsg(message: _95.MsgCreateBalancerPool): _95.MsgCreateBalancerPoolProtoMsg;
                    };
                    MsgCreateBalancerPoolResponse: {
                        typeUrl: string;
                        encode(message: _95.MsgCreateBalancerPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgCreateBalancerPoolResponse;
                        fromJSON(object: any): _95.MsgCreateBalancerPoolResponse;
                        toJSON(message: _95.MsgCreateBalancerPoolResponse): unknown;
                        fromPartial(object: Partial<_95.MsgCreateBalancerPoolResponse>): _95.MsgCreateBalancerPoolResponse;
                        fromSDK(object: _95.MsgCreateBalancerPoolResponseSDKType): _95.MsgCreateBalancerPoolResponse;
                        toSDK(message: _95.MsgCreateBalancerPoolResponse): _95.MsgCreateBalancerPoolResponseSDKType;
                        fromAmino(object: _95.MsgCreateBalancerPoolResponseAmino): _95.MsgCreateBalancerPoolResponse;
                        toAmino(message: _95.MsgCreateBalancerPoolResponse): _95.MsgCreateBalancerPoolResponseAmino;
                        fromAminoMsg(object: _95.MsgCreateBalancerPoolResponseAminoMsg): _95.MsgCreateBalancerPoolResponse;
                        toAminoMsg(message: _95.MsgCreateBalancerPoolResponse): _95.MsgCreateBalancerPoolResponseAminoMsg;
                        fromProtoMsg(message: _95.MsgCreateBalancerPoolResponseProtoMsg): _95.MsgCreateBalancerPoolResponse;
                        toProto(message: _95.MsgCreateBalancerPoolResponse): Uint8Array;
                        toProtoMsg(message: _95.MsgCreateBalancerPoolResponse): _95.MsgCreateBalancerPoolResponseProtoMsg;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    Msg: typeof _287.Msg;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _97.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _97.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _97.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _97.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _97.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _97.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        toJSON: {
                            createStableswapPool(value: _97.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                            stableSwapAdjustScalingFactors(value: _97.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _97.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _97.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _97.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _97.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _97.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _97.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: (message: _97.MsgCreateStableswapPool) => _97.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _97.MsgCreateStableswapPoolAmino) => _97.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _97.MsgStableSwapAdjustScalingFactors) => _97.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _97.MsgStableSwapAdjustScalingFactorsAmino) => _97.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        typeUrl: string;
                        encode(message: _97.MsgCreateStableswapPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.MsgCreateStableswapPool;
                        fromJSON(object: any): _97.MsgCreateStableswapPool;
                        toJSON(message: _97.MsgCreateStableswapPool): unknown;
                        fromPartial(object: Partial<_97.MsgCreateStableswapPool>): _97.MsgCreateStableswapPool;
                        fromSDK(object: _97.MsgCreateStableswapPoolSDKType): _97.MsgCreateStableswapPool;
                        toSDK(message: _97.MsgCreateStableswapPool): _97.MsgCreateStableswapPoolSDKType;
                        fromAmino(object: _97.MsgCreateStableswapPoolAmino): _97.MsgCreateStableswapPool;
                        toAmino(message: _97.MsgCreateStableswapPool): _97.MsgCreateStableswapPoolAmino;
                        fromAminoMsg(object: _97.MsgCreateStableswapPoolAminoMsg): _97.MsgCreateStableswapPool;
                        toAminoMsg(message: _97.MsgCreateStableswapPool): _97.MsgCreateStableswapPoolAminoMsg;
                        fromProtoMsg(message: _97.MsgCreateStableswapPoolProtoMsg): _97.MsgCreateStableswapPool;
                        toProto(message: _97.MsgCreateStableswapPool): Uint8Array;
                        toProtoMsg(message: _97.MsgCreateStableswapPool): _97.MsgCreateStableswapPoolProtoMsg;
                    };
                    MsgCreateStableswapPoolResponse: {
                        typeUrl: string;
                        encode(message: _97.MsgCreateStableswapPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.MsgCreateStableswapPoolResponse;
                        fromJSON(object: any): _97.MsgCreateStableswapPoolResponse;
                        toJSON(message: _97.MsgCreateStableswapPoolResponse): unknown;
                        fromPartial(object: Partial<_97.MsgCreateStableswapPoolResponse>): _97.MsgCreateStableswapPoolResponse;
                        fromSDK(object: _97.MsgCreateStableswapPoolResponseSDKType): _97.MsgCreateStableswapPoolResponse;
                        toSDK(message: _97.MsgCreateStableswapPoolResponse): _97.MsgCreateStableswapPoolResponseSDKType;
                        fromAmino(object: _97.MsgCreateStableswapPoolResponseAmino): _97.MsgCreateStableswapPoolResponse;
                        toAmino(message: _97.MsgCreateStableswapPoolResponse): _97.MsgCreateStableswapPoolResponseAmino;
                        fromAminoMsg(object: _97.MsgCreateStableswapPoolResponseAminoMsg): _97.MsgCreateStableswapPoolResponse;
                        toAminoMsg(message: _97.MsgCreateStableswapPoolResponse): _97.MsgCreateStableswapPoolResponseAminoMsg;
                        fromProtoMsg(message: _97.MsgCreateStableswapPoolResponseProtoMsg): _97.MsgCreateStableswapPoolResponse;
                        toProto(message: _97.MsgCreateStableswapPoolResponse): Uint8Array;
                        toProtoMsg(message: _97.MsgCreateStableswapPoolResponse): _97.MsgCreateStableswapPoolResponseProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        typeUrl: string;
                        encode(message: _97.MsgStableSwapAdjustScalingFactors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.MsgStableSwapAdjustScalingFactors;
                        fromJSON(object: any): _97.MsgStableSwapAdjustScalingFactors;
                        toJSON(message: _97.MsgStableSwapAdjustScalingFactors): unknown;
                        fromPartial(object: Partial<_97.MsgStableSwapAdjustScalingFactors>): _97.MsgStableSwapAdjustScalingFactors;
                        fromSDK(object: _97.MsgStableSwapAdjustScalingFactorsSDKType): _97.MsgStableSwapAdjustScalingFactors;
                        toSDK(message: _97.MsgStableSwapAdjustScalingFactors): _97.MsgStableSwapAdjustScalingFactorsSDKType;
                        fromAmino(object: _97.MsgStableSwapAdjustScalingFactorsAmino): _97.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _97.MsgStableSwapAdjustScalingFactors): _97.MsgStableSwapAdjustScalingFactorsAmino;
                        fromAminoMsg(object: _97.MsgStableSwapAdjustScalingFactorsAminoMsg): _97.MsgStableSwapAdjustScalingFactors;
                        toAminoMsg(message: _97.MsgStableSwapAdjustScalingFactors): _97.MsgStableSwapAdjustScalingFactorsAminoMsg;
                        fromProtoMsg(message: _97.MsgStableSwapAdjustScalingFactorsProtoMsg): _97.MsgStableSwapAdjustScalingFactors;
                        toProto(message: _97.MsgStableSwapAdjustScalingFactors): Uint8Array;
                        toProtoMsg(message: _97.MsgStableSwapAdjustScalingFactors): _97.MsgStableSwapAdjustScalingFactorsProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        typeUrl: string;
                        encode(_: _97.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.MsgStableSwapAdjustScalingFactorsResponse;
                        fromJSON(_: any): _97.MsgStableSwapAdjustScalingFactorsResponse;
                        toJSON(_: _97.MsgStableSwapAdjustScalingFactorsResponse): unknown;
                        fromPartial(_: Partial<_97.MsgStableSwapAdjustScalingFactorsResponse>): _97.MsgStableSwapAdjustScalingFactorsResponse;
                        fromSDK(_: _97.MsgStableSwapAdjustScalingFactorsResponseSDKType): _97.MsgStableSwapAdjustScalingFactorsResponse;
                        toSDK(_: _97.MsgStableSwapAdjustScalingFactorsResponse): _97.MsgStableSwapAdjustScalingFactorsResponseSDKType;
                        fromAmino(_: _97.MsgStableSwapAdjustScalingFactorsResponseAmino): _97.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _97.MsgStableSwapAdjustScalingFactorsResponse): _97.MsgStableSwapAdjustScalingFactorsResponseAmino;
                        fromAminoMsg(object: _97.MsgStableSwapAdjustScalingFactorsResponseAminoMsg): _97.MsgStableSwapAdjustScalingFactorsResponse;
                        toAminoMsg(message: _97.MsgStableSwapAdjustScalingFactorsResponse): _97.MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
                        fromProtoMsg(message: _97.MsgStableSwapAdjustScalingFactorsResponseProtoMsg): _97.MsgStableSwapAdjustScalingFactorsResponse;
                        toProto(message: _97.MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
                        toProtoMsg(message: _97.MsgStableSwapAdjustScalingFactorsResponse): _97.MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
                    };
                    PoolParams: {
                        typeUrl: string;
                        encode(message: _96.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.PoolParams;
                        fromJSON(object: any): _96.PoolParams;
                        toJSON(message: _96.PoolParams): unknown;
                        fromPartial(object: Partial<_96.PoolParams>): _96.PoolParams;
                        fromSDK(object: _96.PoolParamsSDKType): _96.PoolParams;
                        toSDK(message: _96.PoolParams): _96.PoolParamsSDKType;
                        fromAmino(object: _96.PoolParamsAmino): _96.PoolParams;
                        toAmino(message: _96.PoolParams): _96.PoolParamsAmino;
                        fromAminoMsg(object: _96.PoolParamsAminoMsg): _96.PoolParams;
                        toAminoMsg(message: _96.PoolParams): _96.PoolParamsAminoMsg;
                        fromProtoMsg(message: _96.PoolParamsProtoMsg): _96.PoolParams;
                        toProto(message: _96.PoolParams): Uint8Array;
                        toProtoMsg(message: _96.PoolParams): _96.PoolParamsProtoMsg;
                    };
                    Pool: {
                        typeUrl: string;
                        encode(message: _96.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Pool;
                        fromJSON(object: any): _96.Pool;
                        toJSON(message: _96.Pool): unknown;
                        fromPartial(object: Partial<_96.Pool>): _96.Pool;
                        fromSDK(object: _96.PoolSDKType): _96.Pool;
                        toSDK(message: _96.Pool): _96.PoolSDKType;
                        fromAmino(object: _96.PoolAmino): _96.Pool;
                        toAmino(message: _96.Pool): _96.PoolAmino;
                        fromAminoMsg(object: _96.PoolAminoMsg): _96.Pool;
                        toAminoMsg(message: _96.Pool): _96.PoolAminoMsg;
                        fromProtoMsg(message: _96.PoolProtoMsg): _96.Pool;
                        toProto(message: _96.Pool): Uint8Array;
                        toProtoMsg(message: _96.Pool): _96.PoolProtoMsg;
                    };
                };
            }
        }
        const v2: {
            Query: typeof _273.Query;
            QueryClientImpl: typeof _273.QueryClientImpl;
            LCDQueryClient: typeof _257.LCDQueryClient;
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _98.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.QuerySpotPriceRequest;
                fromJSON(object: any): _98.QuerySpotPriceRequest;
                toJSON(message: _98.QuerySpotPriceRequest): unknown;
                fromPartial(object: Partial<_98.QuerySpotPriceRequest>): _98.QuerySpotPriceRequest;
                fromSDK(object: _98.QuerySpotPriceRequestSDKType): _98.QuerySpotPriceRequest;
                toSDK(message: _98.QuerySpotPriceRequest): _98.QuerySpotPriceRequestSDKType;
                fromAmino(object: _98.QuerySpotPriceRequestAmino): _98.QuerySpotPriceRequest;
                toAmino(message: _98.QuerySpotPriceRequest): _98.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _98.QuerySpotPriceRequestAminoMsg): _98.QuerySpotPriceRequest;
                toAminoMsg(message: _98.QuerySpotPriceRequest): _98.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _98.QuerySpotPriceRequestProtoMsg): _98.QuerySpotPriceRequest;
                toProto(message: _98.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _98.QuerySpotPriceRequest): _98.QuerySpotPriceRequestProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _98.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.QuerySpotPriceResponse;
                fromJSON(object: any): _98.QuerySpotPriceResponse;
                toJSON(message: _98.QuerySpotPriceResponse): unknown;
                fromPartial(object: Partial<_98.QuerySpotPriceResponse>): _98.QuerySpotPriceResponse;
                fromSDK(object: _98.QuerySpotPriceResponseSDKType): _98.QuerySpotPriceResponse;
                toSDK(message: _98.QuerySpotPriceResponse): _98.QuerySpotPriceResponseSDKType;
                fromAmino(object: _98.QuerySpotPriceResponseAmino): _98.QuerySpotPriceResponse;
                toAmino(message: _98.QuerySpotPriceResponse): _98.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _98.QuerySpotPriceResponseAminoMsg): _98.QuerySpotPriceResponse;
                toAminoMsg(message: _98.QuerySpotPriceResponse): _98.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _98.QuerySpotPriceResponseProtoMsg): _98.QuerySpotPriceResponse;
                toProto(message: _98.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _98.QuerySpotPriceResponse): _98.QuerySpotPriceResponseProtoMsg;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            Query: typeof _274.Query;
            QueryClientImpl: typeof _274.QueryClientImpl;
            LCDQueryClient: typeof _258.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _100.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.QueryParamsRequest;
                fromJSON(_: any): _100.QueryParamsRequest;
                toJSON(_: _100.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_100.QueryParamsRequest>): _100.QueryParamsRequest;
                fromSDK(_: _100.QueryParamsRequestSDKType): _100.QueryParamsRequest;
                toSDK(_: _100.QueryParamsRequest): _100.QueryParamsRequestSDKType;
                fromAmino(_: _100.QueryParamsRequestAmino): _100.QueryParamsRequest;
                toAmino(_: _100.QueryParamsRequest): _100.QueryParamsRequestAmino;
                fromAminoMsg(object: _100.QueryParamsRequestAminoMsg): _100.QueryParamsRequest;
                toAminoMsg(message: _100.QueryParamsRequest): _100.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _100.QueryParamsRequestProtoMsg): _100.QueryParamsRequest;
                toProto(message: _100.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _100.QueryParamsRequest): _100.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _100.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.QueryParamsResponse;
                fromJSON(object: any): _100.QueryParamsResponse;
                toJSON(message: _100.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_100.QueryParamsResponse>): _100.QueryParamsResponse;
                fromSDK(object: _100.QueryParamsResponseSDKType): _100.QueryParamsResponse;
                toSDK(message: _100.QueryParamsResponse): _100.QueryParamsResponseSDKType;
                fromAmino(object: _100.QueryParamsResponseAmino): _100.QueryParamsResponse;
                toAmino(message: _100.QueryParamsResponse): _100.QueryParamsResponseAmino;
                fromAminoMsg(object: _100.QueryParamsResponseAminoMsg): _100.QueryParamsResponse;
                toAminoMsg(message: _100.QueryParamsResponse): _100.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _100.QueryParamsResponseProtoMsg): _100.QueryParamsResponse;
                toProto(message: _100.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _100.QueryParamsResponse): _100.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _99.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Params;
                fromJSON(object: any): _99.Params;
                toJSON(message: _99.Params): unknown;
                fromPartial(object: Partial<_99.Params>): _99.Params;
                fromSDK(object: _99.ParamsSDKType): _99.Params;
                toSDK(message: _99.Params): _99.ParamsSDKType;
                fromAmino(object: _99.ParamsAmino): _99.Params;
                toAmino(message: _99.Params): _99.ParamsAmino;
                fromAminoMsg(object: _99.ParamsAminoMsg): _99.Params;
                toAminoMsg(message: _99.Params): _99.ParamsAminoMsg;
                fromProtoMsg(message: _99.ParamsProtoMsg): _99.Params;
                toProto(message: _99.Params): Uint8Array;
                toProtoMsg(message: _99.Params): _99.ParamsProtoMsg;
            };
        };
    }
    const incentives: {
        Msg: typeof _289.Msg;
        Query: typeof _275.Query;
        QueryClientImpl: typeof _275.QueryClientImpl;
        LCDQueryClient: typeof _259.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _105.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _105.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _105.MsgCreateGauge): {
                    typeUrl: string;
                    value: _105.MsgCreateGauge;
                };
                addToGauge(value: _105.MsgAddToGauge): {
                    typeUrl: string;
                    value: _105.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _105.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _105.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _105.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _105.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _105.MsgCreateGauge): {
                    typeUrl: string;
                    value: _105.MsgCreateGauge;
                };
                addToGauge(value: _105.MsgAddToGauge): {
                    typeUrl: string;
                    value: _105.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _105.MsgCreateGauge) => _105.MsgCreateGaugeAmino;
                fromAmino: (object: _105.MsgCreateGaugeAmino) => _105.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _105.MsgAddToGauge) => _105.MsgAddToGaugeAmino;
                fromAmino: (object: _105.MsgAddToGaugeAmino) => _105.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            typeUrl: string;
            encode(message: _105.MsgCreateGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.MsgCreateGauge;
            fromJSON(object: any): _105.MsgCreateGauge;
            toJSON(message: _105.MsgCreateGauge): unknown;
            fromPartial(object: Partial<_105.MsgCreateGauge>): _105.MsgCreateGauge;
            fromSDK(object: _105.MsgCreateGaugeSDKType): _105.MsgCreateGauge;
            toSDK(message: _105.MsgCreateGauge): _105.MsgCreateGaugeSDKType;
            fromAmino(object: _105.MsgCreateGaugeAmino): _105.MsgCreateGauge;
            toAmino(message: _105.MsgCreateGauge): _105.MsgCreateGaugeAmino;
            fromAminoMsg(object: _105.MsgCreateGaugeAminoMsg): _105.MsgCreateGauge;
            toAminoMsg(message: _105.MsgCreateGauge): _105.MsgCreateGaugeAminoMsg;
            fromProtoMsg(message: _105.MsgCreateGaugeProtoMsg): _105.MsgCreateGauge;
            toProto(message: _105.MsgCreateGauge): Uint8Array;
            toProtoMsg(message: _105.MsgCreateGauge): _105.MsgCreateGaugeProtoMsg;
        };
        MsgCreateGaugeResponse: {
            typeUrl: string;
            encode(_: _105.MsgCreateGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.MsgCreateGaugeResponse;
            fromJSON(_: any): _105.MsgCreateGaugeResponse;
            toJSON(_: _105.MsgCreateGaugeResponse): unknown;
            fromPartial(_: Partial<_105.MsgCreateGaugeResponse>): _105.MsgCreateGaugeResponse;
            fromSDK(_: _105.MsgCreateGaugeResponseSDKType): _105.MsgCreateGaugeResponse;
            toSDK(_: _105.MsgCreateGaugeResponse): _105.MsgCreateGaugeResponseSDKType;
            fromAmino(_: _105.MsgCreateGaugeResponseAmino): _105.MsgCreateGaugeResponse;
            toAmino(_: _105.MsgCreateGaugeResponse): _105.MsgCreateGaugeResponseAmino;
            fromAminoMsg(object: _105.MsgCreateGaugeResponseAminoMsg): _105.MsgCreateGaugeResponse;
            toAminoMsg(message: _105.MsgCreateGaugeResponse): _105.MsgCreateGaugeResponseAminoMsg;
            fromProtoMsg(message: _105.MsgCreateGaugeResponseProtoMsg): _105.MsgCreateGaugeResponse;
            toProto(message: _105.MsgCreateGaugeResponse): Uint8Array;
            toProtoMsg(message: _105.MsgCreateGaugeResponse): _105.MsgCreateGaugeResponseProtoMsg;
        };
        MsgAddToGauge: {
            typeUrl: string;
            encode(message: _105.MsgAddToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.MsgAddToGauge;
            fromJSON(object: any): _105.MsgAddToGauge;
            toJSON(message: _105.MsgAddToGauge): unknown;
            fromPartial(object: Partial<_105.MsgAddToGauge>): _105.MsgAddToGauge;
            fromSDK(object: _105.MsgAddToGaugeSDKType): _105.MsgAddToGauge;
            toSDK(message: _105.MsgAddToGauge): _105.MsgAddToGaugeSDKType;
            fromAmino(object: _105.MsgAddToGaugeAmino): _105.MsgAddToGauge;
            toAmino(message: _105.MsgAddToGauge): _105.MsgAddToGaugeAmino;
            fromAminoMsg(object: _105.MsgAddToGaugeAminoMsg): _105.MsgAddToGauge;
            toAminoMsg(message: _105.MsgAddToGauge): _105.MsgAddToGaugeAminoMsg;
            fromProtoMsg(message: _105.MsgAddToGaugeProtoMsg): _105.MsgAddToGauge;
            toProto(message: _105.MsgAddToGauge): Uint8Array;
            toProtoMsg(message: _105.MsgAddToGauge): _105.MsgAddToGaugeProtoMsg;
        };
        MsgAddToGaugeResponse: {
            typeUrl: string;
            encode(_: _105.MsgAddToGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.MsgAddToGaugeResponse;
            fromJSON(_: any): _105.MsgAddToGaugeResponse;
            toJSON(_: _105.MsgAddToGaugeResponse): unknown;
            fromPartial(_: Partial<_105.MsgAddToGaugeResponse>): _105.MsgAddToGaugeResponse;
            fromSDK(_: _105.MsgAddToGaugeResponseSDKType): _105.MsgAddToGaugeResponse;
            toSDK(_: _105.MsgAddToGaugeResponse): _105.MsgAddToGaugeResponseSDKType;
            fromAmino(_: _105.MsgAddToGaugeResponseAmino): _105.MsgAddToGaugeResponse;
            toAmino(_: _105.MsgAddToGaugeResponse): _105.MsgAddToGaugeResponseAmino;
            fromAminoMsg(object: _105.MsgAddToGaugeResponseAminoMsg): _105.MsgAddToGaugeResponse;
            toAminoMsg(message: _105.MsgAddToGaugeResponse): _105.MsgAddToGaugeResponseAminoMsg;
            fromProtoMsg(message: _105.MsgAddToGaugeResponseProtoMsg): _105.MsgAddToGaugeResponse;
            toProto(message: _105.MsgAddToGaugeResponse): Uint8Array;
            toProtoMsg(message: _105.MsgAddToGaugeResponse): _105.MsgAddToGaugeResponseProtoMsg;
        };
        ModuleToDistributeCoinsRequest: {
            typeUrl: string;
            encode(_: _104.ModuleToDistributeCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _104.ModuleToDistributeCoinsRequest;
            toJSON(_: _104.ModuleToDistributeCoinsRequest): unknown;
            fromPartial(_: Partial<_104.ModuleToDistributeCoinsRequest>): _104.ModuleToDistributeCoinsRequest;
            fromSDK(_: _104.ModuleToDistributeCoinsRequestSDKType): _104.ModuleToDistributeCoinsRequest;
            toSDK(_: _104.ModuleToDistributeCoinsRequest): _104.ModuleToDistributeCoinsRequestSDKType;
            fromAmino(_: _104.ModuleToDistributeCoinsRequestAmino): _104.ModuleToDistributeCoinsRequest;
            toAmino(_: _104.ModuleToDistributeCoinsRequest): _104.ModuleToDistributeCoinsRequestAmino;
            fromAminoMsg(object: _104.ModuleToDistributeCoinsRequestAminoMsg): _104.ModuleToDistributeCoinsRequest;
            toAminoMsg(message: _104.ModuleToDistributeCoinsRequest): _104.ModuleToDistributeCoinsRequestAminoMsg;
            fromProtoMsg(message: _104.ModuleToDistributeCoinsRequestProtoMsg): _104.ModuleToDistributeCoinsRequest;
            toProto(message: _104.ModuleToDistributeCoinsRequest): Uint8Array;
            toProtoMsg(message: _104.ModuleToDistributeCoinsRequest): _104.ModuleToDistributeCoinsRequestProtoMsg;
        };
        ModuleToDistributeCoinsResponse: {
            typeUrl: string;
            encode(message: _104.ModuleToDistributeCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _104.ModuleToDistributeCoinsResponse;
            toJSON(message: _104.ModuleToDistributeCoinsResponse): unknown;
            fromPartial(object: Partial<_104.ModuleToDistributeCoinsResponse>): _104.ModuleToDistributeCoinsResponse;
            fromSDK(object: _104.ModuleToDistributeCoinsResponseSDKType): _104.ModuleToDistributeCoinsResponse;
            toSDK(message: _104.ModuleToDistributeCoinsResponse): _104.ModuleToDistributeCoinsResponseSDKType;
            fromAmino(object: _104.ModuleToDistributeCoinsResponseAmino): _104.ModuleToDistributeCoinsResponse;
            toAmino(message: _104.ModuleToDistributeCoinsResponse): _104.ModuleToDistributeCoinsResponseAmino;
            fromAminoMsg(object: _104.ModuleToDistributeCoinsResponseAminoMsg): _104.ModuleToDistributeCoinsResponse;
            toAminoMsg(message: _104.ModuleToDistributeCoinsResponse): _104.ModuleToDistributeCoinsResponseAminoMsg;
            fromProtoMsg(message: _104.ModuleToDistributeCoinsResponseProtoMsg): _104.ModuleToDistributeCoinsResponse;
            toProto(message: _104.ModuleToDistributeCoinsResponse): Uint8Array;
            toProtoMsg(message: _104.ModuleToDistributeCoinsResponse): _104.ModuleToDistributeCoinsResponseProtoMsg;
        };
        GaugeByIDRequest: {
            typeUrl: string;
            encode(message: _104.GaugeByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.GaugeByIDRequest;
            fromJSON(object: any): _104.GaugeByIDRequest;
            toJSON(message: _104.GaugeByIDRequest): unknown;
            fromPartial(object: Partial<_104.GaugeByIDRequest>): _104.GaugeByIDRequest;
            fromSDK(object: _104.GaugeByIDRequestSDKType): _104.GaugeByIDRequest;
            toSDK(message: _104.GaugeByIDRequest): _104.GaugeByIDRequestSDKType;
            fromAmino(object: _104.GaugeByIDRequestAmino): _104.GaugeByIDRequest;
            toAmino(message: _104.GaugeByIDRequest): _104.GaugeByIDRequestAmino;
            fromAminoMsg(object: _104.GaugeByIDRequestAminoMsg): _104.GaugeByIDRequest;
            toAminoMsg(message: _104.GaugeByIDRequest): _104.GaugeByIDRequestAminoMsg;
            fromProtoMsg(message: _104.GaugeByIDRequestProtoMsg): _104.GaugeByIDRequest;
            toProto(message: _104.GaugeByIDRequest): Uint8Array;
            toProtoMsg(message: _104.GaugeByIDRequest): _104.GaugeByIDRequestProtoMsg;
        };
        GaugeByIDResponse: {
            typeUrl: string;
            encode(message: _104.GaugeByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.GaugeByIDResponse;
            fromJSON(object: any): _104.GaugeByIDResponse;
            toJSON(message: _104.GaugeByIDResponse): unknown;
            fromPartial(object: Partial<_104.GaugeByIDResponse>): _104.GaugeByIDResponse;
            fromSDK(object: _104.GaugeByIDResponseSDKType): _104.GaugeByIDResponse;
            toSDK(message: _104.GaugeByIDResponse): _104.GaugeByIDResponseSDKType;
            fromAmino(object: _104.GaugeByIDResponseAmino): _104.GaugeByIDResponse;
            toAmino(message: _104.GaugeByIDResponse): _104.GaugeByIDResponseAmino;
            fromAminoMsg(object: _104.GaugeByIDResponseAminoMsg): _104.GaugeByIDResponse;
            toAminoMsg(message: _104.GaugeByIDResponse): _104.GaugeByIDResponseAminoMsg;
            fromProtoMsg(message: _104.GaugeByIDResponseProtoMsg): _104.GaugeByIDResponse;
            toProto(message: _104.GaugeByIDResponse): Uint8Array;
            toProtoMsg(message: _104.GaugeByIDResponse): _104.GaugeByIDResponseProtoMsg;
        };
        GaugesRequest: {
            typeUrl: string;
            encode(message: _104.GaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.GaugesRequest;
            fromJSON(object: any): _104.GaugesRequest;
            toJSON(message: _104.GaugesRequest): unknown;
            fromPartial(object: Partial<_104.GaugesRequest>): _104.GaugesRequest;
            fromSDK(object: _104.GaugesRequestSDKType): _104.GaugesRequest;
            toSDK(message: _104.GaugesRequest): _104.GaugesRequestSDKType;
            fromAmino(object: _104.GaugesRequestAmino): _104.GaugesRequest;
            toAmino(message: _104.GaugesRequest): _104.GaugesRequestAmino;
            fromAminoMsg(object: _104.GaugesRequestAminoMsg): _104.GaugesRequest;
            toAminoMsg(message: _104.GaugesRequest): _104.GaugesRequestAminoMsg;
            fromProtoMsg(message: _104.GaugesRequestProtoMsg): _104.GaugesRequest;
            toProto(message: _104.GaugesRequest): Uint8Array;
            toProtoMsg(message: _104.GaugesRequest): _104.GaugesRequestProtoMsg;
        };
        GaugesResponse: {
            typeUrl: string;
            encode(message: _104.GaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.GaugesResponse;
            fromJSON(object: any): _104.GaugesResponse;
            toJSON(message: _104.GaugesResponse): unknown;
            fromPartial(object: Partial<_104.GaugesResponse>): _104.GaugesResponse;
            fromSDK(object: _104.GaugesResponseSDKType): _104.GaugesResponse;
            toSDK(message: _104.GaugesResponse): _104.GaugesResponseSDKType;
            fromAmino(object: _104.GaugesResponseAmino): _104.GaugesResponse;
            toAmino(message: _104.GaugesResponse): _104.GaugesResponseAmino;
            fromAminoMsg(object: _104.GaugesResponseAminoMsg): _104.GaugesResponse;
            toAminoMsg(message: _104.GaugesResponse): _104.GaugesResponseAminoMsg;
            fromProtoMsg(message: _104.GaugesResponseProtoMsg): _104.GaugesResponse;
            toProto(message: _104.GaugesResponse): Uint8Array;
            toProtoMsg(message: _104.GaugesResponse): _104.GaugesResponseProtoMsg;
        };
        ActiveGaugesRequest: {
            typeUrl: string;
            encode(message: _104.ActiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ActiveGaugesRequest;
            fromJSON(object: any): _104.ActiveGaugesRequest;
            toJSON(message: _104.ActiveGaugesRequest): unknown;
            fromPartial(object: Partial<_104.ActiveGaugesRequest>): _104.ActiveGaugesRequest;
            fromSDK(object: _104.ActiveGaugesRequestSDKType): _104.ActiveGaugesRequest;
            toSDK(message: _104.ActiveGaugesRequest): _104.ActiveGaugesRequestSDKType;
            fromAmino(object: _104.ActiveGaugesRequestAmino): _104.ActiveGaugesRequest;
            toAmino(message: _104.ActiveGaugesRequest): _104.ActiveGaugesRequestAmino;
            fromAminoMsg(object: _104.ActiveGaugesRequestAminoMsg): _104.ActiveGaugesRequest;
            toAminoMsg(message: _104.ActiveGaugesRequest): _104.ActiveGaugesRequestAminoMsg;
            fromProtoMsg(message: _104.ActiveGaugesRequestProtoMsg): _104.ActiveGaugesRequest;
            toProto(message: _104.ActiveGaugesRequest): Uint8Array;
            toProtoMsg(message: _104.ActiveGaugesRequest): _104.ActiveGaugesRequestProtoMsg;
        };
        ActiveGaugesResponse: {
            typeUrl: string;
            encode(message: _104.ActiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ActiveGaugesResponse;
            fromJSON(object: any): _104.ActiveGaugesResponse;
            toJSON(message: _104.ActiveGaugesResponse): unknown;
            fromPartial(object: Partial<_104.ActiveGaugesResponse>): _104.ActiveGaugesResponse;
            fromSDK(object: _104.ActiveGaugesResponseSDKType): _104.ActiveGaugesResponse;
            toSDK(message: _104.ActiveGaugesResponse): _104.ActiveGaugesResponseSDKType;
            fromAmino(object: _104.ActiveGaugesResponseAmino): _104.ActiveGaugesResponse;
            toAmino(message: _104.ActiveGaugesResponse): _104.ActiveGaugesResponseAmino;
            fromAminoMsg(object: _104.ActiveGaugesResponseAminoMsg): _104.ActiveGaugesResponse;
            toAminoMsg(message: _104.ActiveGaugesResponse): _104.ActiveGaugesResponseAminoMsg;
            fromProtoMsg(message: _104.ActiveGaugesResponseProtoMsg): _104.ActiveGaugesResponse;
            toProto(message: _104.ActiveGaugesResponse): Uint8Array;
            toProtoMsg(message: _104.ActiveGaugesResponse): _104.ActiveGaugesResponseProtoMsg;
        };
        ActiveGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _104.ActiveGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _104.ActiveGaugesPerDenomRequest;
            toJSON(message: _104.ActiveGaugesPerDenomRequest): unknown;
            fromPartial(object: Partial<_104.ActiveGaugesPerDenomRequest>): _104.ActiveGaugesPerDenomRequest;
            fromSDK(object: _104.ActiveGaugesPerDenomRequestSDKType): _104.ActiveGaugesPerDenomRequest;
            toSDK(message: _104.ActiveGaugesPerDenomRequest): _104.ActiveGaugesPerDenomRequestSDKType;
            fromAmino(object: _104.ActiveGaugesPerDenomRequestAmino): _104.ActiveGaugesPerDenomRequest;
            toAmino(message: _104.ActiveGaugesPerDenomRequest): _104.ActiveGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _104.ActiveGaugesPerDenomRequestAminoMsg): _104.ActiveGaugesPerDenomRequest;
            toAminoMsg(message: _104.ActiveGaugesPerDenomRequest): _104.ActiveGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _104.ActiveGaugesPerDenomRequestProtoMsg): _104.ActiveGaugesPerDenomRequest;
            toProto(message: _104.ActiveGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _104.ActiveGaugesPerDenomRequest): _104.ActiveGaugesPerDenomRequestProtoMsg;
        };
        ActiveGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _104.ActiveGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _104.ActiveGaugesPerDenomResponse;
            toJSON(message: _104.ActiveGaugesPerDenomResponse): unknown;
            fromPartial(object: Partial<_104.ActiveGaugesPerDenomResponse>): _104.ActiveGaugesPerDenomResponse;
            fromSDK(object: _104.ActiveGaugesPerDenomResponseSDKType): _104.ActiveGaugesPerDenomResponse;
            toSDK(message: _104.ActiveGaugesPerDenomResponse): _104.ActiveGaugesPerDenomResponseSDKType;
            fromAmino(object: _104.ActiveGaugesPerDenomResponseAmino): _104.ActiveGaugesPerDenomResponse;
            toAmino(message: _104.ActiveGaugesPerDenomResponse): _104.ActiveGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _104.ActiveGaugesPerDenomResponseAminoMsg): _104.ActiveGaugesPerDenomResponse;
            toAminoMsg(message: _104.ActiveGaugesPerDenomResponse): _104.ActiveGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _104.ActiveGaugesPerDenomResponseProtoMsg): _104.ActiveGaugesPerDenomResponse;
            toProto(message: _104.ActiveGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _104.ActiveGaugesPerDenomResponse): _104.ActiveGaugesPerDenomResponseProtoMsg;
        };
        UpcomingGaugesRequest: {
            typeUrl: string;
            encode(message: _104.UpcomingGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.UpcomingGaugesRequest;
            fromJSON(object: any): _104.UpcomingGaugesRequest;
            toJSON(message: _104.UpcomingGaugesRequest): unknown;
            fromPartial(object: Partial<_104.UpcomingGaugesRequest>): _104.UpcomingGaugesRequest;
            fromSDK(object: _104.UpcomingGaugesRequestSDKType): _104.UpcomingGaugesRequest;
            toSDK(message: _104.UpcomingGaugesRequest): _104.UpcomingGaugesRequestSDKType;
            fromAmino(object: _104.UpcomingGaugesRequestAmino): _104.UpcomingGaugesRequest;
            toAmino(message: _104.UpcomingGaugesRequest): _104.UpcomingGaugesRequestAmino;
            fromAminoMsg(object: _104.UpcomingGaugesRequestAminoMsg): _104.UpcomingGaugesRequest;
            toAminoMsg(message: _104.UpcomingGaugesRequest): _104.UpcomingGaugesRequestAminoMsg;
            fromProtoMsg(message: _104.UpcomingGaugesRequestProtoMsg): _104.UpcomingGaugesRequest;
            toProto(message: _104.UpcomingGaugesRequest): Uint8Array;
            toProtoMsg(message: _104.UpcomingGaugesRequest): _104.UpcomingGaugesRequestProtoMsg;
        };
        UpcomingGaugesResponse: {
            typeUrl: string;
            encode(message: _104.UpcomingGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.UpcomingGaugesResponse;
            fromJSON(object: any): _104.UpcomingGaugesResponse;
            toJSON(message: _104.UpcomingGaugesResponse): unknown;
            fromPartial(object: Partial<_104.UpcomingGaugesResponse>): _104.UpcomingGaugesResponse;
            fromSDK(object: _104.UpcomingGaugesResponseSDKType): _104.UpcomingGaugesResponse;
            toSDK(message: _104.UpcomingGaugesResponse): _104.UpcomingGaugesResponseSDKType;
            fromAmino(object: _104.UpcomingGaugesResponseAmino): _104.UpcomingGaugesResponse;
            toAmino(message: _104.UpcomingGaugesResponse): _104.UpcomingGaugesResponseAmino;
            fromAminoMsg(object: _104.UpcomingGaugesResponseAminoMsg): _104.UpcomingGaugesResponse;
            toAminoMsg(message: _104.UpcomingGaugesResponse): _104.UpcomingGaugesResponseAminoMsg;
            fromProtoMsg(message: _104.UpcomingGaugesResponseProtoMsg): _104.UpcomingGaugesResponse;
            toProto(message: _104.UpcomingGaugesResponse): Uint8Array;
            toProtoMsg(message: _104.UpcomingGaugesResponse): _104.UpcomingGaugesResponseProtoMsg;
        };
        UpcomingGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _104.UpcomingGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.UpcomingGaugesPerDenomRequest;
            fromJSON(object: any): _104.UpcomingGaugesPerDenomRequest;
            toJSON(message: _104.UpcomingGaugesPerDenomRequest): unknown;
            fromPartial(object: Partial<_104.UpcomingGaugesPerDenomRequest>): _104.UpcomingGaugesPerDenomRequest;
            fromSDK(object: _104.UpcomingGaugesPerDenomRequestSDKType): _104.UpcomingGaugesPerDenomRequest;
            toSDK(message: _104.UpcomingGaugesPerDenomRequest): _104.UpcomingGaugesPerDenomRequestSDKType;
            fromAmino(object: _104.UpcomingGaugesPerDenomRequestAmino): _104.UpcomingGaugesPerDenomRequest;
            toAmino(message: _104.UpcomingGaugesPerDenomRequest): _104.UpcomingGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _104.UpcomingGaugesPerDenomRequestAminoMsg): _104.UpcomingGaugesPerDenomRequest;
            toAminoMsg(message: _104.UpcomingGaugesPerDenomRequest): _104.UpcomingGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _104.UpcomingGaugesPerDenomRequestProtoMsg): _104.UpcomingGaugesPerDenomRequest;
            toProto(message: _104.UpcomingGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _104.UpcomingGaugesPerDenomRequest): _104.UpcomingGaugesPerDenomRequestProtoMsg;
        };
        UpcomingGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _104.UpcomingGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.UpcomingGaugesPerDenomResponse;
            fromJSON(object: any): _104.UpcomingGaugesPerDenomResponse;
            toJSON(message: _104.UpcomingGaugesPerDenomResponse): unknown;
            fromPartial(object: Partial<_104.UpcomingGaugesPerDenomResponse>): _104.UpcomingGaugesPerDenomResponse;
            fromSDK(object: _104.UpcomingGaugesPerDenomResponseSDKType): _104.UpcomingGaugesPerDenomResponse;
            toSDK(message: _104.UpcomingGaugesPerDenomResponse): _104.UpcomingGaugesPerDenomResponseSDKType;
            fromAmino(object: _104.UpcomingGaugesPerDenomResponseAmino): _104.UpcomingGaugesPerDenomResponse;
            toAmino(message: _104.UpcomingGaugesPerDenomResponse): _104.UpcomingGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _104.UpcomingGaugesPerDenomResponseAminoMsg): _104.UpcomingGaugesPerDenomResponse;
            toAminoMsg(message: _104.UpcomingGaugesPerDenomResponse): _104.UpcomingGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _104.UpcomingGaugesPerDenomResponseProtoMsg): _104.UpcomingGaugesPerDenomResponse;
            toProto(message: _104.UpcomingGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _104.UpcomingGaugesPerDenomResponse): _104.UpcomingGaugesPerDenomResponseProtoMsg;
        };
        RewardsEstRequest: {
            typeUrl: string;
            encode(message: _104.RewardsEstRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.RewardsEstRequest;
            fromJSON(object: any): _104.RewardsEstRequest;
            toJSON(message: _104.RewardsEstRequest): unknown;
            fromPartial(object: Partial<_104.RewardsEstRequest>): _104.RewardsEstRequest;
            fromSDK(object: _104.RewardsEstRequestSDKType): _104.RewardsEstRequest;
            toSDK(message: _104.RewardsEstRequest): _104.RewardsEstRequestSDKType;
            fromAmino(object: _104.RewardsEstRequestAmino): _104.RewardsEstRequest;
            toAmino(message: _104.RewardsEstRequest): _104.RewardsEstRequestAmino;
            fromAminoMsg(object: _104.RewardsEstRequestAminoMsg): _104.RewardsEstRequest;
            toAminoMsg(message: _104.RewardsEstRequest): _104.RewardsEstRequestAminoMsg;
            fromProtoMsg(message: _104.RewardsEstRequestProtoMsg): _104.RewardsEstRequest;
            toProto(message: _104.RewardsEstRequest): Uint8Array;
            toProtoMsg(message: _104.RewardsEstRequest): _104.RewardsEstRequestProtoMsg;
        };
        RewardsEstResponse: {
            typeUrl: string;
            encode(message: _104.RewardsEstResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.RewardsEstResponse;
            fromJSON(object: any): _104.RewardsEstResponse;
            toJSON(message: _104.RewardsEstResponse): unknown;
            fromPartial(object: Partial<_104.RewardsEstResponse>): _104.RewardsEstResponse;
            fromSDK(object: _104.RewardsEstResponseSDKType): _104.RewardsEstResponse;
            toSDK(message: _104.RewardsEstResponse): _104.RewardsEstResponseSDKType;
            fromAmino(object: _104.RewardsEstResponseAmino): _104.RewardsEstResponse;
            toAmino(message: _104.RewardsEstResponse): _104.RewardsEstResponseAmino;
            fromAminoMsg(object: _104.RewardsEstResponseAminoMsg): _104.RewardsEstResponse;
            toAminoMsg(message: _104.RewardsEstResponse): _104.RewardsEstResponseAminoMsg;
            fromProtoMsg(message: _104.RewardsEstResponseProtoMsg): _104.RewardsEstResponse;
            toProto(message: _104.RewardsEstResponse): Uint8Array;
            toProtoMsg(message: _104.RewardsEstResponse): _104.RewardsEstResponseProtoMsg;
        };
        QueryLockableDurationsRequest: {
            typeUrl: string;
            encode(_: _104.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.QueryLockableDurationsRequest;
            fromJSON(_: any): _104.QueryLockableDurationsRequest;
            toJSON(_: _104.QueryLockableDurationsRequest): unknown;
            fromPartial(_: Partial<_104.QueryLockableDurationsRequest>): _104.QueryLockableDurationsRequest;
            fromSDK(_: _104.QueryLockableDurationsRequestSDKType): _104.QueryLockableDurationsRequest;
            toSDK(_: _104.QueryLockableDurationsRequest): _104.QueryLockableDurationsRequestSDKType;
            fromAmino(_: _104.QueryLockableDurationsRequestAmino): _104.QueryLockableDurationsRequest;
            toAmino(_: _104.QueryLockableDurationsRequest): _104.QueryLockableDurationsRequestAmino;
            fromAminoMsg(object: _104.QueryLockableDurationsRequestAminoMsg): _104.QueryLockableDurationsRequest;
            toAminoMsg(message: _104.QueryLockableDurationsRequest): _104.QueryLockableDurationsRequestAminoMsg;
            fromProtoMsg(message: _104.QueryLockableDurationsRequestProtoMsg): _104.QueryLockableDurationsRequest;
            toProto(message: _104.QueryLockableDurationsRequest): Uint8Array;
            toProtoMsg(message: _104.QueryLockableDurationsRequest): _104.QueryLockableDurationsRequestProtoMsg;
        };
        QueryLockableDurationsResponse: {
            typeUrl: string;
            encode(message: _104.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.QueryLockableDurationsResponse;
            fromJSON(object: any): _104.QueryLockableDurationsResponse;
            toJSON(message: _104.QueryLockableDurationsResponse): unknown;
            fromPartial(object: Partial<_104.QueryLockableDurationsResponse>): _104.QueryLockableDurationsResponse;
            fromSDK(object: _104.QueryLockableDurationsResponseSDKType): _104.QueryLockableDurationsResponse;
            toSDK(message: _104.QueryLockableDurationsResponse): _104.QueryLockableDurationsResponseSDKType;
            fromAmino(object: _104.QueryLockableDurationsResponseAmino): _104.QueryLockableDurationsResponse;
            toAmino(message: _104.QueryLockableDurationsResponse): _104.QueryLockableDurationsResponseAmino;
            fromAminoMsg(object: _104.QueryLockableDurationsResponseAminoMsg): _104.QueryLockableDurationsResponse;
            toAminoMsg(message: _104.QueryLockableDurationsResponse): _104.QueryLockableDurationsResponseAminoMsg;
            fromProtoMsg(message: _104.QueryLockableDurationsResponseProtoMsg): _104.QueryLockableDurationsResponse;
            toProto(message: _104.QueryLockableDurationsResponse): Uint8Array;
            toProtoMsg(message: _104.QueryLockableDurationsResponse): _104.QueryLockableDurationsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _103.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Params;
            fromJSON(object: any): _103.Params;
            toJSON(message: _103.Params): unknown;
            fromPartial(object: Partial<_103.Params>): _103.Params;
            fromSDK(object: _103.ParamsSDKType): _103.Params;
            toSDK(message: _103.Params): _103.ParamsSDKType;
            fromAmino(object: _103.ParamsAmino): _103.Params;
            toAmino(message: _103.Params): _103.ParamsAmino;
            fromAminoMsg(object: _103.ParamsAminoMsg): _103.Params;
            toAminoMsg(message: _103.Params): _103.ParamsAminoMsg;
            fromProtoMsg(message: _103.ParamsProtoMsg): _103.Params;
            toProto(message: _103.Params): Uint8Array;
            toProtoMsg(message: _103.Params): _103.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _102.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.GenesisState;
            fromJSON(object: any): _102.GenesisState;
            toJSON(message: _102.GenesisState): unknown;
            fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
            fromSDK(object: _102.GenesisStateSDKType): _102.GenesisState;
            toSDK(message: _102.GenesisState): _102.GenesisStateSDKType;
            fromAmino(object: _102.GenesisStateAmino): _102.GenesisState;
            toAmino(message: _102.GenesisState): _102.GenesisStateAmino;
            fromAminoMsg(object: _102.GenesisStateAminoMsg): _102.GenesisState;
            toAminoMsg(message: _102.GenesisState): _102.GenesisStateAminoMsg;
            fromProtoMsg(message: _102.GenesisStateProtoMsg): _102.GenesisState;
            toProto(message: _102.GenesisState): Uint8Array;
            toProtoMsg(message: _102.GenesisState): _102.GenesisStateProtoMsg;
        };
        Gauge: {
            typeUrl: string;
            encode(message: _101.Gauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.Gauge;
            fromJSON(object: any): _101.Gauge;
            toJSON(message: _101.Gauge): unknown;
            fromPartial(object: Partial<_101.Gauge>): _101.Gauge;
            fromSDK(object: _101.GaugeSDKType): _101.Gauge;
            toSDK(message: _101.Gauge): _101.GaugeSDKType;
            fromAmino(object: _101.GaugeAmino): _101.Gauge;
            toAmino(message: _101.Gauge): _101.GaugeAmino;
            fromAminoMsg(object: _101.GaugeAminoMsg): _101.Gauge;
            toAminoMsg(message: _101.Gauge): _101.GaugeAminoMsg;
            fromProtoMsg(message: _101.GaugeProtoMsg): _101.Gauge;
            toProto(message: _101.Gauge): Uint8Array;
            toProtoMsg(message: _101.Gauge): _101.GaugeProtoMsg;
        };
        LockableDurationsInfo: {
            typeUrl: string;
            encode(message: _101.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.LockableDurationsInfo;
            fromJSON(object: any): _101.LockableDurationsInfo;
            toJSON(message: _101.LockableDurationsInfo): unknown;
            fromPartial(object: Partial<_101.LockableDurationsInfo>): _101.LockableDurationsInfo;
            fromSDK(object: _101.LockableDurationsInfoSDKType): _101.LockableDurationsInfo;
            toSDK(message: _101.LockableDurationsInfo): _101.LockableDurationsInfoSDKType;
            fromAmino(object: _101.LockableDurationsInfoAmino): _101.LockableDurationsInfo;
            toAmino(message: _101.LockableDurationsInfo): _101.LockableDurationsInfoAmino;
            fromAminoMsg(object: _101.LockableDurationsInfoAminoMsg): _101.LockableDurationsInfo;
            toAminoMsg(message: _101.LockableDurationsInfo): _101.LockableDurationsInfoAminoMsg;
            fromProtoMsg(message: _101.LockableDurationsInfoProtoMsg): _101.LockableDurationsInfo;
            toProto(message: _101.LockableDurationsInfo): Uint8Array;
            toProtoMsg(message: _101.LockableDurationsInfo): _101.LockableDurationsInfoProtoMsg;
        };
    };
    const lockup: {
        Msg: typeof _290.Msg;
        Query: typeof _276.Query;
        QueryClientImpl: typeof _276.QueryClientImpl;
        LCDQueryClient: typeof _260.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _110.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _110.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _110.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _110.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _110.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _110.MsgLockTokens): {
                    typeUrl: string;
                    value: _110.MsgLockTokens;
                };
                beginUnlockingAll(value: _110.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _110.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _110.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _110.MsgBeginUnlocking;
                };
                extendLockup(value: _110.MsgExtendLockup): {
                    typeUrl: string;
                    value: _110.MsgExtendLockup;
                };
                forceUnlock(value: _110.MsgForceUnlock): {
                    typeUrl: string;
                    value: _110.MsgForceUnlock;
                };
            };
            toJSON: {
                lockTokens(value: _110.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _110.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _110.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
                extendLockup(value: _110.MsgExtendLockup): {
                    typeUrl: string;
                    value: unknown;
                };
                forceUnlock(value: _110.MsgForceUnlock): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _110.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _110.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _110.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _110.MsgExtendLockup;
                };
                forceUnlock(value: any): {
                    typeUrl: string;
                    value: _110.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _110.MsgLockTokens): {
                    typeUrl: string;
                    value: _110.MsgLockTokens;
                };
                beginUnlockingAll(value: _110.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _110.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _110.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _110.MsgBeginUnlocking;
                };
                extendLockup(value: _110.MsgExtendLockup): {
                    typeUrl: string;
                    value: _110.MsgExtendLockup;
                };
                forceUnlock(value: _110.MsgForceUnlock): {
                    typeUrl: string;
                    value: _110.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _110.MsgLockTokens) => _110.MsgLockTokensAmino;
                fromAmino: (object: _110.MsgLockTokensAmino) => _110.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _110.MsgBeginUnlockingAll) => _110.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _110.MsgBeginUnlockingAllAmino) => _110.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _110.MsgBeginUnlocking) => _110.MsgBeginUnlockingAmino;
                fromAmino: (object: _110.MsgBeginUnlockingAmino) => _110.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _110.MsgExtendLockup) => _110.MsgExtendLockupAmino;
                fromAmino: (object: _110.MsgExtendLockupAmino) => _110.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _110.MsgForceUnlock) => _110.MsgForceUnlockAmino;
                fromAmino: (object: _110.MsgForceUnlockAmino) => _110.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            typeUrl: string;
            encode(message: _110.MsgLockTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgLockTokens;
            fromJSON(object: any): _110.MsgLockTokens;
            toJSON(message: _110.MsgLockTokens): unknown;
            fromPartial(object: Partial<_110.MsgLockTokens>): _110.MsgLockTokens;
            fromSDK(object: _110.MsgLockTokensSDKType): _110.MsgLockTokens;
            toSDK(message: _110.MsgLockTokens): _110.MsgLockTokensSDKType;
            fromAmino(object: _110.MsgLockTokensAmino): _110.MsgLockTokens;
            toAmino(message: _110.MsgLockTokens): _110.MsgLockTokensAmino;
            fromAminoMsg(object: _110.MsgLockTokensAminoMsg): _110.MsgLockTokens;
            toAminoMsg(message: _110.MsgLockTokens): _110.MsgLockTokensAminoMsg;
            fromProtoMsg(message: _110.MsgLockTokensProtoMsg): _110.MsgLockTokens;
            toProto(message: _110.MsgLockTokens): Uint8Array;
            toProtoMsg(message: _110.MsgLockTokens): _110.MsgLockTokensProtoMsg;
        };
        MsgLockTokensResponse: {
            typeUrl: string;
            encode(message: _110.MsgLockTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgLockTokensResponse;
            fromJSON(object: any): _110.MsgLockTokensResponse;
            toJSON(message: _110.MsgLockTokensResponse): unknown;
            fromPartial(object: Partial<_110.MsgLockTokensResponse>): _110.MsgLockTokensResponse;
            fromSDK(object: _110.MsgLockTokensResponseSDKType): _110.MsgLockTokensResponse;
            toSDK(message: _110.MsgLockTokensResponse): _110.MsgLockTokensResponseSDKType;
            fromAmino(object: _110.MsgLockTokensResponseAmino): _110.MsgLockTokensResponse;
            toAmino(message: _110.MsgLockTokensResponse): _110.MsgLockTokensResponseAmino;
            fromAminoMsg(object: _110.MsgLockTokensResponseAminoMsg): _110.MsgLockTokensResponse;
            toAminoMsg(message: _110.MsgLockTokensResponse): _110.MsgLockTokensResponseAminoMsg;
            fromProtoMsg(message: _110.MsgLockTokensResponseProtoMsg): _110.MsgLockTokensResponse;
            toProto(message: _110.MsgLockTokensResponse): Uint8Array;
            toProtoMsg(message: _110.MsgLockTokensResponse): _110.MsgLockTokensResponseProtoMsg;
        };
        MsgBeginUnlockingAll: {
            typeUrl: string;
            encode(message: _110.MsgBeginUnlockingAll, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgBeginUnlockingAll;
            fromJSON(object: any): _110.MsgBeginUnlockingAll;
            toJSON(message: _110.MsgBeginUnlockingAll): unknown;
            fromPartial(object: Partial<_110.MsgBeginUnlockingAll>): _110.MsgBeginUnlockingAll;
            fromSDK(object: _110.MsgBeginUnlockingAllSDKType): _110.MsgBeginUnlockingAll;
            toSDK(message: _110.MsgBeginUnlockingAll): _110.MsgBeginUnlockingAllSDKType;
            fromAmino(object: _110.MsgBeginUnlockingAllAmino): _110.MsgBeginUnlockingAll;
            toAmino(message: _110.MsgBeginUnlockingAll): _110.MsgBeginUnlockingAllAmino;
            fromAminoMsg(object: _110.MsgBeginUnlockingAllAminoMsg): _110.MsgBeginUnlockingAll;
            toAminoMsg(message: _110.MsgBeginUnlockingAll): _110.MsgBeginUnlockingAllAminoMsg;
            fromProtoMsg(message: _110.MsgBeginUnlockingAllProtoMsg): _110.MsgBeginUnlockingAll;
            toProto(message: _110.MsgBeginUnlockingAll): Uint8Array;
            toProtoMsg(message: _110.MsgBeginUnlockingAll): _110.MsgBeginUnlockingAllProtoMsg;
        };
        MsgBeginUnlockingAllResponse: {
            typeUrl: string;
            encode(message: _110.MsgBeginUnlockingAllResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _110.MsgBeginUnlockingAllResponse;
            toJSON(message: _110.MsgBeginUnlockingAllResponse): unknown;
            fromPartial(object: Partial<_110.MsgBeginUnlockingAllResponse>): _110.MsgBeginUnlockingAllResponse;
            fromSDK(object: _110.MsgBeginUnlockingAllResponseSDKType): _110.MsgBeginUnlockingAllResponse;
            toSDK(message: _110.MsgBeginUnlockingAllResponse): _110.MsgBeginUnlockingAllResponseSDKType;
            fromAmino(object: _110.MsgBeginUnlockingAllResponseAmino): _110.MsgBeginUnlockingAllResponse;
            toAmino(message: _110.MsgBeginUnlockingAllResponse): _110.MsgBeginUnlockingAllResponseAmino;
            fromAminoMsg(object: _110.MsgBeginUnlockingAllResponseAminoMsg): _110.MsgBeginUnlockingAllResponse;
            toAminoMsg(message: _110.MsgBeginUnlockingAllResponse): _110.MsgBeginUnlockingAllResponseAminoMsg;
            fromProtoMsg(message: _110.MsgBeginUnlockingAllResponseProtoMsg): _110.MsgBeginUnlockingAllResponse;
            toProto(message: _110.MsgBeginUnlockingAllResponse): Uint8Array;
            toProtoMsg(message: _110.MsgBeginUnlockingAllResponse): _110.MsgBeginUnlockingAllResponseProtoMsg;
        };
        MsgBeginUnlocking: {
            typeUrl: string;
            encode(message: _110.MsgBeginUnlocking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgBeginUnlocking;
            fromJSON(object: any): _110.MsgBeginUnlocking;
            toJSON(message: _110.MsgBeginUnlocking): unknown;
            fromPartial(object: Partial<_110.MsgBeginUnlocking>): _110.MsgBeginUnlocking;
            fromSDK(object: _110.MsgBeginUnlockingSDKType): _110.MsgBeginUnlocking;
            toSDK(message: _110.MsgBeginUnlocking): _110.MsgBeginUnlockingSDKType;
            fromAmino(object: _110.MsgBeginUnlockingAmino): _110.MsgBeginUnlocking;
            toAmino(message: _110.MsgBeginUnlocking): _110.MsgBeginUnlockingAmino;
            fromAminoMsg(object: _110.MsgBeginUnlockingAminoMsg): _110.MsgBeginUnlocking;
            toAminoMsg(message: _110.MsgBeginUnlocking): _110.MsgBeginUnlockingAminoMsg;
            fromProtoMsg(message: _110.MsgBeginUnlockingProtoMsg): _110.MsgBeginUnlocking;
            toProto(message: _110.MsgBeginUnlocking): Uint8Array;
            toProtoMsg(message: _110.MsgBeginUnlocking): _110.MsgBeginUnlockingProtoMsg;
        };
        MsgBeginUnlockingResponse: {
            typeUrl: string;
            encode(message: _110.MsgBeginUnlockingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgBeginUnlockingResponse;
            fromJSON(object: any): _110.MsgBeginUnlockingResponse;
            toJSON(message: _110.MsgBeginUnlockingResponse): unknown;
            fromPartial(object: Partial<_110.MsgBeginUnlockingResponse>): _110.MsgBeginUnlockingResponse;
            fromSDK(object: _110.MsgBeginUnlockingResponseSDKType): _110.MsgBeginUnlockingResponse;
            toSDK(message: _110.MsgBeginUnlockingResponse): _110.MsgBeginUnlockingResponseSDKType;
            fromAmino(object: _110.MsgBeginUnlockingResponseAmino): _110.MsgBeginUnlockingResponse;
            toAmino(message: _110.MsgBeginUnlockingResponse): _110.MsgBeginUnlockingResponseAmino;
            fromAminoMsg(object: _110.MsgBeginUnlockingResponseAminoMsg): _110.MsgBeginUnlockingResponse;
            toAminoMsg(message: _110.MsgBeginUnlockingResponse): _110.MsgBeginUnlockingResponseAminoMsg;
            fromProtoMsg(message: _110.MsgBeginUnlockingResponseProtoMsg): _110.MsgBeginUnlockingResponse;
            toProto(message: _110.MsgBeginUnlockingResponse): Uint8Array;
            toProtoMsg(message: _110.MsgBeginUnlockingResponse): _110.MsgBeginUnlockingResponseProtoMsg;
        };
        MsgExtendLockup: {
            typeUrl: string;
            encode(message: _110.MsgExtendLockup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgExtendLockup;
            fromJSON(object: any): _110.MsgExtendLockup;
            toJSON(message: _110.MsgExtendLockup): unknown;
            fromPartial(object: Partial<_110.MsgExtendLockup>): _110.MsgExtendLockup;
            fromSDK(object: _110.MsgExtendLockupSDKType): _110.MsgExtendLockup;
            toSDK(message: _110.MsgExtendLockup): _110.MsgExtendLockupSDKType;
            fromAmino(object: _110.MsgExtendLockupAmino): _110.MsgExtendLockup;
            toAmino(message: _110.MsgExtendLockup): _110.MsgExtendLockupAmino;
            fromAminoMsg(object: _110.MsgExtendLockupAminoMsg): _110.MsgExtendLockup;
            toAminoMsg(message: _110.MsgExtendLockup): _110.MsgExtendLockupAminoMsg;
            fromProtoMsg(message: _110.MsgExtendLockupProtoMsg): _110.MsgExtendLockup;
            toProto(message: _110.MsgExtendLockup): Uint8Array;
            toProtoMsg(message: _110.MsgExtendLockup): _110.MsgExtendLockupProtoMsg;
        };
        MsgExtendLockupResponse: {
            typeUrl: string;
            encode(message: _110.MsgExtendLockupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgExtendLockupResponse;
            fromJSON(object: any): _110.MsgExtendLockupResponse;
            toJSON(message: _110.MsgExtendLockupResponse): unknown;
            fromPartial(object: Partial<_110.MsgExtendLockupResponse>): _110.MsgExtendLockupResponse;
            fromSDK(object: _110.MsgExtendLockupResponseSDKType): _110.MsgExtendLockupResponse;
            toSDK(message: _110.MsgExtendLockupResponse): _110.MsgExtendLockupResponseSDKType;
            fromAmino(object: _110.MsgExtendLockupResponseAmino): _110.MsgExtendLockupResponse;
            toAmino(message: _110.MsgExtendLockupResponse): _110.MsgExtendLockupResponseAmino;
            fromAminoMsg(object: _110.MsgExtendLockupResponseAminoMsg): _110.MsgExtendLockupResponse;
            toAminoMsg(message: _110.MsgExtendLockupResponse): _110.MsgExtendLockupResponseAminoMsg;
            fromProtoMsg(message: _110.MsgExtendLockupResponseProtoMsg): _110.MsgExtendLockupResponse;
            toProto(message: _110.MsgExtendLockupResponse): Uint8Array;
            toProtoMsg(message: _110.MsgExtendLockupResponse): _110.MsgExtendLockupResponseProtoMsg;
        };
        MsgForceUnlock: {
            typeUrl: string;
            encode(message: _110.MsgForceUnlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgForceUnlock;
            fromJSON(object: any): _110.MsgForceUnlock;
            toJSON(message: _110.MsgForceUnlock): unknown;
            fromPartial(object: Partial<_110.MsgForceUnlock>): _110.MsgForceUnlock;
            fromSDK(object: _110.MsgForceUnlockSDKType): _110.MsgForceUnlock;
            toSDK(message: _110.MsgForceUnlock): _110.MsgForceUnlockSDKType;
            fromAmino(object: _110.MsgForceUnlockAmino): _110.MsgForceUnlock;
            toAmino(message: _110.MsgForceUnlock): _110.MsgForceUnlockAmino;
            fromAminoMsg(object: _110.MsgForceUnlockAminoMsg): _110.MsgForceUnlock;
            toAminoMsg(message: _110.MsgForceUnlock): _110.MsgForceUnlockAminoMsg;
            fromProtoMsg(message: _110.MsgForceUnlockProtoMsg): _110.MsgForceUnlock;
            toProto(message: _110.MsgForceUnlock): Uint8Array;
            toProtoMsg(message: _110.MsgForceUnlock): _110.MsgForceUnlockProtoMsg;
        };
        MsgForceUnlockResponse: {
            typeUrl: string;
            encode(message: _110.MsgForceUnlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgForceUnlockResponse;
            fromJSON(object: any): _110.MsgForceUnlockResponse;
            toJSON(message: _110.MsgForceUnlockResponse): unknown;
            fromPartial(object: Partial<_110.MsgForceUnlockResponse>): _110.MsgForceUnlockResponse;
            fromSDK(object: _110.MsgForceUnlockResponseSDKType): _110.MsgForceUnlockResponse;
            toSDK(message: _110.MsgForceUnlockResponse): _110.MsgForceUnlockResponseSDKType;
            fromAmino(object: _110.MsgForceUnlockResponseAmino): _110.MsgForceUnlockResponse;
            toAmino(message: _110.MsgForceUnlockResponse): _110.MsgForceUnlockResponseAmino;
            fromAminoMsg(object: _110.MsgForceUnlockResponseAminoMsg): _110.MsgForceUnlockResponse;
            toAminoMsg(message: _110.MsgForceUnlockResponse): _110.MsgForceUnlockResponseAminoMsg;
            fromProtoMsg(message: _110.MsgForceUnlockResponseProtoMsg): _110.MsgForceUnlockResponse;
            toProto(message: _110.MsgForceUnlockResponse): Uint8Array;
            toProtoMsg(message: _110.MsgForceUnlockResponse): _110.MsgForceUnlockResponseProtoMsg;
        };
        ModuleBalanceRequest: {
            typeUrl: string;
            encode(_: _109.ModuleBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.ModuleBalanceRequest;
            fromJSON(_: any): _109.ModuleBalanceRequest;
            toJSON(_: _109.ModuleBalanceRequest): unknown;
            fromPartial(_: Partial<_109.ModuleBalanceRequest>): _109.ModuleBalanceRequest;
            fromSDK(_: _109.ModuleBalanceRequestSDKType): _109.ModuleBalanceRequest;
            toSDK(_: _109.ModuleBalanceRequest): _109.ModuleBalanceRequestSDKType;
            fromAmino(_: _109.ModuleBalanceRequestAmino): _109.ModuleBalanceRequest;
            toAmino(_: _109.ModuleBalanceRequest): _109.ModuleBalanceRequestAmino;
            fromAminoMsg(object: _109.ModuleBalanceRequestAminoMsg): _109.ModuleBalanceRequest;
            toAminoMsg(message: _109.ModuleBalanceRequest): _109.ModuleBalanceRequestAminoMsg;
            fromProtoMsg(message: _109.ModuleBalanceRequestProtoMsg): _109.ModuleBalanceRequest;
            toProto(message: _109.ModuleBalanceRequest): Uint8Array;
            toProtoMsg(message: _109.ModuleBalanceRequest): _109.ModuleBalanceRequestProtoMsg;
        };
        ModuleBalanceResponse: {
            typeUrl: string;
            encode(message: _109.ModuleBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.ModuleBalanceResponse;
            fromJSON(object: any): _109.ModuleBalanceResponse;
            toJSON(message: _109.ModuleBalanceResponse): unknown;
            fromPartial(object: Partial<_109.ModuleBalanceResponse>): _109.ModuleBalanceResponse;
            fromSDK(object: _109.ModuleBalanceResponseSDKType): _109.ModuleBalanceResponse;
            toSDK(message: _109.ModuleBalanceResponse): _109.ModuleBalanceResponseSDKType;
            fromAmino(object: _109.ModuleBalanceResponseAmino): _109.ModuleBalanceResponse;
            toAmino(message: _109.ModuleBalanceResponse): _109.ModuleBalanceResponseAmino;
            fromAminoMsg(object: _109.ModuleBalanceResponseAminoMsg): _109.ModuleBalanceResponse;
            toAminoMsg(message: _109.ModuleBalanceResponse): _109.ModuleBalanceResponseAminoMsg;
            fromProtoMsg(message: _109.ModuleBalanceResponseProtoMsg): _109.ModuleBalanceResponse;
            toProto(message: _109.ModuleBalanceResponse): Uint8Array;
            toProtoMsg(message: _109.ModuleBalanceResponse): _109.ModuleBalanceResponseProtoMsg;
        };
        ModuleLockedAmountRequest: {
            typeUrl: string;
            encode(_: _109.ModuleLockedAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.ModuleLockedAmountRequest;
            fromJSON(_: any): _109.ModuleLockedAmountRequest;
            toJSON(_: _109.ModuleLockedAmountRequest): unknown;
            fromPartial(_: Partial<_109.ModuleLockedAmountRequest>): _109.ModuleLockedAmountRequest;
            fromSDK(_: _109.ModuleLockedAmountRequestSDKType): _109.ModuleLockedAmountRequest;
            toSDK(_: _109.ModuleLockedAmountRequest): _109.ModuleLockedAmountRequestSDKType;
            fromAmino(_: _109.ModuleLockedAmountRequestAmino): _109.ModuleLockedAmountRequest;
            toAmino(_: _109.ModuleLockedAmountRequest): _109.ModuleLockedAmountRequestAmino;
            fromAminoMsg(object: _109.ModuleLockedAmountRequestAminoMsg): _109.ModuleLockedAmountRequest;
            toAminoMsg(message: _109.ModuleLockedAmountRequest): _109.ModuleLockedAmountRequestAminoMsg;
            fromProtoMsg(message: _109.ModuleLockedAmountRequestProtoMsg): _109.ModuleLockedAmountRequest;
            toProto(message: _109.ModuleLockedAmountRequest): Uint8Array;
            toProtoMsg(message: _109.ModuleLockedAmountRequest): _109.ModuleLockedAmountRequestProtoMsg;
        };
        ModuleLockedAmountResponse: {
            typeUrl: string;
            encode(message: _109.ModuleLockedAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.ModuleLockedAmountResponse;
            fromJSON(object: any): _109.ModuleLockedAmountResponse;
            toJSON(message: _109.ModuleLockedAmountResponse): unknown;
            fromPartial(object: Partial<_109.ModuleLockedAmountResponse>): _109.ModuleLockedAmountResponse;
            fromSDK(object: _109.ModuleLockedAmountResponseSDKType): _109.ModuleLockedAmountResponse;
            toSDK(message: _109.ModuleLockedAmountResponse): _109.ModuleLockedAmountResponseSDKType;
            fromAmino(object: _109.ModuleLockedAmountResponseAmino): _109.ModuleLockedAmountResponse;
            toAmino(message: _109.ModuleLockedAmountResponse): _109.ModuleLockedAmountResponseAmino;
            fromAminoMsg(object: _109.ModuleLockedAmountResponseAminoMsg): _109.ModuleLockedAmountResponse;
            toAminoMsg(message: _109.ModuleLockedAmountResponse): _109.ModuleLockedAmountResponseAminoMsg;
            fromProtoMsg(message: _109.ModuleLockedAmountResponseProtoMsg): _109.ModuleLockedAmountResponse;
            toProto(message: _109.ModuleLockedAmountResponse): Uint8Array;
            toProtoMsg(message: _109.ModuleLockedAmountResponse): _109.ModuleLockedAmountResponseProtoMsg;
        };
        AccountUnlockableCoinsRequest: {
            typeUrl: string;
            encode(message: _109.AccountUnlockableCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _109.AccountUnlockableCoinsRequest;
            toJSON(message: _109.AccountUnlockableCoinsRequest): unknown;
            fromPartial(object: Partial<_109.AccountUnlockableCoinsRequest>): _109.AccountUnlockableCoinsRequest;
            fromSDK(object: _109.AccountUnlockableCoinsRequestSDKType): _109.AccountUnlockableCoinsRequest;
            toSDK(message: _109.AccountUnlockableCoinsRequest): _109.AccountUnlockableCoinsRequestSDKType;
            fromAmino(object: _109.AccountUnlockableCoinsRequestAmino): _109.AccountUnlockableCoinsRequest;
            toAmino(message: _109.AccountUnlockableCoinsRequest): _109.AccountUnlockableCoinsRequestAmino;
            fromAminoMsg(object: _109.AccountUnlockableCoinsRequestAminoMsg): _109.AccountUnlockableCoinsRequest;
            toAminoMsg(message: _109.AccountUnlockableCoinsRequest): _109.AccountUnlockableCoinsRequestAminoMsg;
            fromProtoMsg(message: _109.AccountUnlockableCoinsRequestProtoMsg): _109.AccountUnlockableCoinsRequest;
            toProto(message: _109.AccountUnlockableCoinsRequest): Uint8Array;
            toProtoMsg(message: _109.AccountUnlockableCoinsRequest): _109.AccountUnlockableCoinsRequestProtoMsg;
        };
        AccountUnlockableCoinsResponse: {
            typeUrl: string;
            encode(message: _109.AccountUnlockableCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _109.AccountUnlockableCoinsResponse;
            toJSON(message: _109.AccountUnlockableCoinsResponse): unknown;
            fromPartial(object: Partial<_109.AccountUnlockableCoinsResponse>): _109.AccountUnlockableCoinsResponse;
            fromSDK(object: _109.AccountUnlockableCoinsResponseSDKType): _109.AccountUnlockableCoinsResponse;
            toSDK(message: _109.AccountUnlockableCoinsResponse): _109.AccountUnlockableCoinsResponseSDKType;
            fromAmino(object: _109.AccountUnlockableCoinsResponseAmino): _109.AccountUnlockableCoinsResponse;
            toAmino(message: _109.AccountUnlockableCoinsResponse): _109.AccountUnlockableCoinsResponseAmino;
            fromAminoMsg(object: _109.AccountUnlockableCoinsResponseAminoMsg): _109.AccountUnlockableCoinsResponse;
            toAminoMsg(message: _109.AccountUnlockableCoinsResponse): _109.AccountUnlockableCoinsResponseAminoMsg;
            fromProtoMsg(message: _109.AccountUnlockableCoinsResponseProtoMsg): _109.AccountUnlockableCoinsResponse;
            toProto(message: _109.AccountUnlockableCoinsResponse): Uint8Array;
            toProtoMsg(message: _109.AccountUnlockableCoinsResponse): _109.AccountUnlockableCoinsResponseProtoMsg;
        };
        AccountUnlockingCoinsRequest: {
            typeUrl: string;
            encode(message: _109.AccountUnlockingCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _109.AccountUnlockingCoinsRequest;
            toJSON(message: _109.AccountUnlockingCoinsRequest): unknown;
            fromPartial(object: Partial<_109.AccountUnlockingCoinsRequest>): _109.AccountUnlockingCoinsRequest;
            fromSDK(object: _109.AccountUnlockingCoinsRequestSDKType): _109.AccountUnlockingCoinsRequest;
            toSDK(message: _109.AccountUnlockingCoinsRequest): _109.AccountUnlockingCoinsRequestSDKType;
            fromAmino(object: _109.AccountUnlockingCoinsRequestAmino): _109.AccountUnlockingCoinsRequest;
            toAmino(message: _109.AccountUnlockingCoinsRequest): _109.AccountUnlockingCoinsRequestAmino;
            fromAminoMsg(object: _109.AccountUnlockingCoinsRequestAminoMsg): _109.AccountUnlockingCoinsRequest;
            toAminoMsg(message: _109.AccountUnlockingCoinsRequest): _109.AccountUnlockingCoinsRequestAminoMsg;
            fromProtoMsg(message: _109.AccountUnlockingCoinsRequestProtoMsg): _109.AccountUnlockingCoinsRequest;
            toProto(message: _109.AccountUnlockingCoinsRequest): Uint8Array;
            toProtoMsg(message: _109.AccountUnlockingCoinsRequest): _109.AccountUnlockingCoinsRequestProtoMsg;
        };
        AccountUnlockingCoinsResponse: {
            typeUrl: string;
            encode(message: _109.AccountUnlockingCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _109.AccountUnlockingCoinsResponse;
            toJSON(message: _109.AccountUnlockingCoinsResponse): unknown;
            fromPartial(object: Partial<_109.AccountUnlockingCoinsResponse>): _109.AccountUnlockingCoinsResponse;
            fromSDK(object: _109.AccountUnlockingCoinsResponseSDKType): _109.AccountUnlockingCoinsResponse;
            toSDK(message: _109.AccountUnlockingCoinsResponse): _109.AccountUnlockingCoinsResponseSDKType;
            fromAmino(object: _109.AccountUnlockingCoinsResponseAmino): _109.AccountUnlockingCoinsResponse;
            toAmino(message: _109.AccountUnlockingCoinsResponse): _109.AccountUnlockingCoinsResponseAmino;
            fromAminoMsg(object: _109.AccountUnlockingCoinsResponseAminoMsg): _109.AccountUnlockingCoinsResponse;
            toAminoMsg(message: _109.AccountUnlockingCoinsResponse): _109.AccountUnlockingCoinsResponseAminoMsg;
            fromProtoMsg(message: _109.AccountUnlockingCoinsResponseProtoMsg): _109.AccountUnlockingCoinsResponse;
            toProto(message: _109.AccountUnlockingCoinsResponse): Uint8Array;
            toProtoMsg(message: _109.AccountUnlockingCoinsResponse): _109.AccountUnlockingCoinsResponseProtoMsg;
        };
        AccountLockedCoinsRequest: {
            typeUrl: string;
            encode(message: _109.AccountLockedCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedCoinsRequest;
            fromJSON(object: any): _109.AccountLockedCoinsRequest;
            toJSON(message: _109.AccountLockedCoinsRequest): unknown;
            fromPartial(object: Partial<_109.AccountLockedCoinsRequest>): _109.AccountLockedCoinsRequest;
            fromSDK(object: _109.AccountLockedCoinsRequestSDKType): _109.AccountLockedCoinsRequest;
            toSDK(message: _109.AccountLockedCoinsRequest): _109.AccountLockedCoinsRequestSDKType;
            fromAmino(object: _109.AccountLockedCoinsRequestAmino): _109.AccountLockedCoinsRequest;
            toAmino(message: _109.AccountLockedCoinsRequest): _109.AccountLockedCoinsRequestAmino;
            fromAminoMsg(object: _109.AccountLockedCoinsRequestAminoMsg): _109.AccountLockedCoinsRequest;
            toAminoMsg(message: _109.AccountLockedCoinsRequest): _109.AccountLockedCoinsRequestAminoMsg;
            fromProtoMsg(message: _109.AccountLockedCoinsRequestProtoMsg): _109.AccountLockedCoinsRequest;
            toProto(message: _109.AccountLockedCoinsRequest): Uint8Array;
            toProtoMsg(message: _109.AccountLockedCoinsRequest): _109.AccountLockedCoinsRequestProtoMsg;
        };
        AccountLockedCoinsResponse: {
            typeUrl: string;
            encode(message: _109.AccountLockedCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedCoinsResponse;
            fromJSON(object: any): _109.AccountLockedCoinsResponse;
            toJSON(message: _109.AccountLockedCoinsResponse): unknown;
            fromPartial(object: Partial<_109.AccountLockedCoinsResponse>): _109.AccountLockedCoinsResponse;
            fromSDK(object: _109.AccountLockedCoinsResponseSDKType): _109.AccountLockedCoinsResponse;
            toSDK(message: _109.AccountLockedCoinsResponse): _109.AccountLockedCoinsResponseSDKType;
            fromAmino(object: _109.AccountLockedCoinsResponseAmino): _109.AccountLockedCoinsResponse;
            toAmino(message: _109.AccountLockedCoinsResponse): _109.AccountLockedCoinsResponseAmino;
            fromAminoMsg(object: _109.AccountLockedCoinsResponseAminoMsg): _109.AccountLockedCoinsResponse;
            toAminoMsg(message: _109.AccountLockedCoinsResponse): _109.AccountLockedCoinsResponseAminoMsg;
            fromProtoMsg(message: _109.AccountLockedCoinsResponseProtoMsg): _109.AccountLockedCoinsResponse;
            toProto(message: _109.AccountLockedCoinsResponse): Uint8Array;
            toProtoMsg(message: _109.AccountLockedCoinsResponse): _109.AccountLockedCoinsResponseProtoMsg;
        };
        AccountLockedPastTimeRequest: {
            typeUrl: string;
            encode(message: _109.AccountLockedPastTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedPastTimeRequest;
            fromJSON(object: any): _109.AccountLockedPastTimeRequest;
            toJSON(message: _109.AccountLockedPastTimeRequest): unknown;
            fromPartial(object: Partial<_109.AccountLockedPastTimeRequest>): _109.AccountLockedPastTimeRequest;
            fromSDK(object: _109.AccountLockedPastTimeRequestSDKType): _109.AccountLockedPastTimeRequest;
            toSDK(message: _109.AccountLockedPastTimeRequest): _109.AccountLockedPastTimeRequestSDKType;
            fromAmino(object: _109.AccountLockedPastTimeRequestAmino): _109.AccountLockedPastTimeRequest;
            toAmino(message: _109.AccountLockedPastTimeRequest): _109.AccountLockedPastTimeRequestAmino;
            fromAminoMsg(object: _109.AccountLockedPastTimeRequestAminoMsg): _109.AccountLockedPastTimeRequest;
            toAminoMsg(message: _109.AccountLockedPastTimeRequest): _109.AccountLockedPastTimeRequestAminoMsg;
            fromProtoMsg(message: _109.AccountLockedPastTimeRequestProtoMsg): _109.AccountLockedPastTimeRequest;
            toProto(message: _109.AccountLockedPastTimeRequest): Uint8Array;
            toProtoMsg(message: _109.AccountLockedPastTimeRequest): _109.AccountLockedPastTimeRequestProtoMsg;
        };
        AccountLockedPastTimeResponse: {
            typeUrl: string;
            encode(message: _109.AccountLockedPastTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedPastTimeResponse;
            fromJSON(object: any): _109.AccountLockedPastTimeResponse;
            toJSON(message: _109.AccountLockedPastTimeResponse): unknown;
            fromPartial(object: Partial<_109.AccountLockedPastTimeResponse>): _109.AccountLockedPastTimeResponse;
            fromSDK(object: _109.AccountLockedPastTimeResponseSDKType): _109.AccountLockedPastTimeResponse;
            toSDK(message: _109.AccountLockedPastTimeResponse): _109.AccountLockedPastTimeResponseSDKType;
            fromAmino(object: _109.AccountLockedPastTimeResponseAmino): _109.AccountLockedPastTimeResponse;
            toAmino(message: _109.AccountLockedPastTimeResponse): _109.AccountLockedPastTimeResponseAmino;
            fromAminoMsg(object: _109.AccountLockedPastTimeResponseAminoMsg): _109.AccountLockedPastTimeResponse;
            toAminoMsg(message: _109.AccountLockedPastTimeResponse): _109.AccountLockedPastTimeResponseAminoMsg;
            fromProtoMsg(message: _109.AccountLockedPastTimeResponseProtoMsg): _109.AccountLockedPastTimeResponse;
            toProto(message: _109.AccountLockedPastTimeResponse): Uint8Array;
            toProtoMsg(message: _109.AccountLockedPastTimeResponse): _109.AccountLockedPastTimeResponseProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _109.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _109.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _109.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial(object: Partial<_109.AccountLockedPastTimeNotUnlockingOnlyRequest>): _109.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromSDK(object: _109.AccountLockedPastTimeNotUnlockingOnlyRequestSDKType): _109.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toSDK(message: _109.AccountLockedPastTimeNotUnlockingOnlyRequest): _109.AccountLockedPastTimeNotUnlockingOnlyRequestSDKType;
            fromAmino(object: _109.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _109.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _109.AccountLockedPastTimeNotUnlockingOnlyRequest): _109.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _109.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): _109.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAminoMsg(message: _109.AccountLockedPastTimeNotUnlockingOnlyRequest): _109.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _109.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): _109.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toProto(message: _109.AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _109.AccountLockedPastTimeNotUnlockingOnlyRequest): _109.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _109.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _109.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _109.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial(object: Partial<_109.AccountLockedPastTimeNotUnlockingOnlyResponse>): _109.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromSDK(object: _109.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType): _109.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toSDK(message: _109.AccountLockedPastTimeNotUnlockingOnlyResponse): _109.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType;
            fromAmino(object: _109.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _109.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _109.AccountLockedPastTimeNotUnlockingOnlyResponse): _109.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _109.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): _109.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAminoMsg(message: _109.AccountLockedPastTimeNotUnlockingOnlyResponse): _109.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _109.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): _109.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toProto(message: _109.AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _109.AccountLockedPastTimeNotUnlockingOnlyResponse): _109.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
        };
        AccountUnlockedBeforeTimeRequest: {
            typeUrl: string;
            encode(message: _109.AccountUnlockedBeforeTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _109.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _109.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial(object: Partial<_109.AccountUnlockedBeforeTimeRequest>): _109.AccountUnlockedBeforeTimeRequest;
            fromSDK(object: _109.AccountUnlockedBeforeTimeRequestSDKType): _109.AccountUnlockedBeforeTimeRequest;
            toSDK(message: _109.AccountUnlockedBeforeTimeRequest): _109.AccountUnlockedBeforeTimeRequestSDKType;
            fromAmino(object: _109.AccountUnlockedBeforeTimeRequestAmino): _109.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _109.AccountUnlockedBeforeTimeRequest): _109.AccountUnlockedBeforeTimeRequestAmino;
            fromAminoMsg(object: _109.AccountUnlockedBeforeTimeRequestAminoMsg): _109.AccountUnlockedBeforeTimeRequest;
            toAminoMsg(message: _109.AccountUnlockedBeforeTimeRequest): _109.AccountUnlockedBeforeTimeRequestAminoMsg;
            fromProtoMsg(message: _109.AccountUnlockedBeforeTimeRequestProtoMsg): _109.AccountUnlockedBeforeTimeRequest;
            toProto(message: _109.AccountUnlockedBeforeTimeRequest): Uint8Array;
            toProtoMsg(message: _109.AccountUnlockedBeforeTimeRequest): _109.AccountUnlockedBeforeTimeRequestProtoMsg;
        };
        AccountUnlockedBeforeTimeResponse: {
            typeUrl: string;
            encode(message: _109.AccountUnlockedBeforeTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _109.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _109.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial(object: Partial<_109.AccountUnlockedBeforeTimeResponse>): _109.AccountUnlockedBeforeTimeResponse;
            fromSDK(object: _109.AccountUnlockedBeforeTimeResponseSDKType): _109.AccountUnlockedBeforeTimeResponse;
            toSDK(message: _109.AccountUnlockedBeforeTimeResponse): _109.AccountUnlockedBeforeTimeResponseSDKType;
            fromAmino(object: _109.AccountUnlockedBeforeTimeResponseAmino): _109.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _109.AccountUnlockedBeforeTimeResponse): _109.AccountUnlockedBeforeTimeResponseAmino;
            fromAminoMsg(object: _109.AccountUnlockedBeforeTimeResponseAminoMsg): _109.AccountUnlockedBeforeTimeResponse;
            toAminoMsg(message: _109.AccountUnlockedBeforeTimeResponse): _109.AccountUnlockedBeforeTimeResponseAminoMsg;
            fromProtoMsg(message: _109.AccountUnlockedBeforeTimeResponseProtoMsg): _109.AccountUnlockedBeforeTimeResponse;
            toProto(message: _109.AccountUnlockedBeforeTimeResponse): Uint8Array;
            toProtoMsg(message: _109.AccountUnlockedBeforeTimeResponse): _109.AccountUnlockedBeforeTimeResponseProtoMsg;
        };
        AccountLockedPastTimeDenomRequest: {
            typeUrl: string;
            encode(message: _109.AccountLockedPastTimeDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _109.AccountLockedPastTimeDenomRequest;
            toJSON(message: _109.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial(object: Partial<_109.AccountLockedPastTimeDenomRequest>): _109.AccountLockedPastTimeDenomRequest;
            fromSDK(object: _109.AccountLockedPastTimeDenomRequestSDKType): _109.AccountLockedPastTimeDenomRequest;
            toSDK(message: _109.AccountLockedPastTimeDenomRequest): _109.AccountLockedPastTimeDenomRequestSDKType;
            fromAmino(object: _109.AccountLockedPastTimeDenomRequestAmino): _109.AccountLockedPastTimeDenomRequest;
            toAmino(message: _109.AccountLockedPastTimeDenomRequest): _109.AccountLockedPastTimeDenomRequestAmino;
            fromAminoMsg(object: _109.AccountLockedPastTimeDenomRequestAminoMsg): _109.AccountLockedPastTimeDenomRequest;
            toAminoMsg(message: _109.AccountLockedPastTimeDenomRequest): _109.AccountLockedPastTimeDenomRequestAminoMsg;
            fromProtoMsg(message: _109.AccountLockedPastTimeDenomRequestProtoMsg): _109.AccountLockedPastTimeDenomRequest;
            toProto(message: _109.AccountLockedPastTimeDenomRequest): Uint8Array;
            toProtoMsg(message: _109.AccountLockedPastTimeDenomRequest): _109.AccountLockedPastTimeDenomRequestProtoMsg;
        };
        AccountLockedPastTimeDenomResponse: {
            typeUrl: string;
            encode(message: _109.AccountLockedPastTimeDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _109.AccountLockedPastTimeDenomResponse;
            toJSON(message: _109.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial(object: Partial<_109.AccountLockedPastTimeDenomResponse>): _109.AccountLockedPastTimeDenomResponse;
            fromSDK(object: _109.AccountLockedPastTimeDenomResponseSDKType): _109.AccountLockedPastTimeDenomResponse;
            toSDK(message: _109.AccountLockedPastTimeDenomResponse): _109.AccountLockedPastTimeDenomResponseSDKType;
            fromAmino(object: _109.AccountLockedPastTimeDenomResponseAmino): _109.AccountLockedPastTimeDenomResponse;
            toAmino(message: _109.AccountLockedPastTimeDenomResponse): _109.AccountLockedPastTimeDenomResponseAmino;
            fromAminoMsg(object: _109.AccountLockedPastTimeDenomResponseAminoMsg): _109.AccountLockedPastTimeDenomResponse;
            toAminoMsg(message: _109.AccountLockedPastTimeDenomResponse): _109.AccountLockedPastTimeDenomResponseAminoMsg;
            fromProtoMsg(message: _109.AccountLockedPastTimeDenomResponseProtoMsg): _109.AccountLockedPastTimeDenomResponse;
            toProto(message: _109.AccountLockedPastTimeDenomResponse): Uint8Array;
            toProtoMsg(message: _109.AccountLockedPastTimeDenomResponse): _109.AccountLockedPastTimeDenomResponseProtoMsg;
        };
        LockedDenomRequest: {
            typeUrl: string;
            encode(message: _109.LockedDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.LockedDenomRequest;
            fromJSON(object: any): _109.LockedDenomRequest;
            toJSON(message: _109.LockedDenomRequest): unknown;
            fromPartial(object: Partial<_109.LockedDenomRequest>): _109.LockedDenomRequest;
            fromSDK(object: _109.LockedDenomRequestSDKType): _109.LockedDenomRequest;
            toSDK(message: _109.LockedDenomRequest): _109.LockedDenomRequestSDKType;
            fromAmino(object: _109.LockedDenomRequestAmino): _109.LockedDenomRequest;
            toAmino(message: _109.LockedDenomRequest): _109.LockedDenomRequestAmino;
            fromAminoMsg(object: _109.LockedDenomRequestAminoMsg): _109.LockedDenomRequest;
            toAminoMsg(message: _109.LockedDenomRequest): _109.LockedDenomRequestAminoMsg;
            fromProtoMsg(message: _109.LockedDenomRequestProtoMsg): _109.LockedDenomRequest;
            toProto(message: _109.LockedDenomRequest): Uint8Array;
            toProtoMsg(message: _109.LockedDenomRequest): _109.LockedDenomRequestProtoMsg;
        };
        LockedDenomResponse: {
            typeUrl: string;
            encode(message: _109.LockedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.LockedDenomResponse;
            fromJSON(object: any): _109.LockedDenomResponse;
            toJSON(message: _109.LockedDenomResponse): unknown;
            fromPartial(object: Partial<_109.LockedDenomResponse>): _109.LockedDenomResponse;
            fromSDK(object: _109.LockedDenomResponseSDKType): _109.LockedDenomResponse;
            toSDK(message: _109.LockedDenomResponse): _109.LockedDenomResponseSDKType;
            fromAmino(object: _109.LockedDenomResponseAmino): _109.LockedDenomResponse;
            toAmino(message: _109.LockedDenomResponse): _109.LockedDenomResponseAmino;
            fromAminoMsg(object: _109.LockedDenomResponseAminoMsg): _109.LockedDenomResponse;
            toAminoMsg(message: _109.LockedDenomResponse): _109.LockedDenomResponseAminoMsg;
            fromProtoMsg(message: _109.LockedDenomResponseProtoMsg): _109.LockedDenomResponse;
            toProto(message: _109.LockedDenomResponse): Uint8Array;
            toProtoMsg(message: _109.LockedDenomResponse): _109.LockedDenomResponseProtoMsg;
        };
        LockedRequest: {
            typeUrl: string;
            encode(message: _109.LockedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.LockedRequest;
            fromJSON(object: any): _109.LockedRequest;
            toJSON(message: _109.LockedRequest): unknown;
            fromPartial(object: Partial<_109.LockedRequest>): _109.LockedRequest;
            fromSDK(object: _109.LockedRequestSDKType): _109.LockedRequest;
            toSDK(message: _109.LockedRequest): _109.LockedRequestSDKType;
            fromAmino(object: _109.LockedRequestAmino): _109.LockedRequest;
            toAmino(message: _109.LockedRequest): _109.LockedRequestAmino;
            fromAminoMsg(object: _109.LockedRequestAminoMsg): _109.LockedRequest;
            toAminoMsg(message: _109.LockedRequest): _109.LockedRequestAminoMsg;
            fromProtoMsg(message: _109.LockedRequestProtoMsg): _109.LockedRequest;
            toProto(message: _109.LockedRequest): Uint8Array;
            toProtoMsg(message: _109.LockedRequest): _109.LockedRequestProtoMsg;
        };
        LockedResponse: {
            typeUrl: string;
            encode(message: _109.LockedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.LockedResponse;
            fromJSON(object: any): _109.LockedResponse;
            toJSON(message: _109.LockedResponse): unknown;
            fromPartial(object: Partial<_109.LockedResponse>): _109.LockedResponse;
            fromSDK(object: _109.LockedResponseSDKType): _109.LockedResponse;
            toSDK(message: _109.LockedResponse): _109.LockedResponseSDKType;
            fromAmino(object: _109.LockedResponseAmino): _109.LockedResponse;
            toAmino(message: _109.LockedResponse): _109.LockedResponseAmino;
            fromAminoMsg(object: _109.LockedResponseAminoMsg): _109.LockedResponse;
            toAminoMsg(message: _109.LockedResponse): _109.LockedResponseAminoMsg;
            fromProtoMsg(message: _109.LockedResponseProtoMsg): _109.LockedResponse;
            toProto(message: _109.LockedResponse): Uint8Array;
            toProtoMsg(message: _109.LockedResponse): _109.LockedResponseProtoMsg;
        };
        SyntheticLockupsByLockupIDRequest: {
            typeUrl: string;
            encode(message: _109.SyntheticLockupsByLockupIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _109.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _109.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial(object: Partial<_109.SyntheticLockupsByLockupIDRequest>): _109.SyntheticLockupsByLockupIDRequest;
            fromSDK(object: _109.SyntheticLockupsByLockupIDRequestSDKType): _109.SyntheticLockupsByLockupIDRequest;
            toSDK(message: _109.SyntheticLockupsByLockupIDRequest): _109.SyntheticLockupsByLockupIDRequestSDKType;
            fromAmino(object: _109.SyntheticLockupsByLockupIDRequestAmino): _109.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _109.SyntheticLockupsByLockupIDRequest): _109.SyntheticLockupsByLockupIDRequestAmino;
            fromAminoMsg(object: _109.SyntheticLockupsByLockupIDRequestAminoMsg): _109.SyntheticLockupsByLockupIDRequest;
            toAminoMsg(message: _109.SyntheticLockupsByLockupIDRequest): _109.SyntheticLockupsByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _109.SyntheticLockupsByLockupIDRequestProtoMsg): _109.SyntheticLockupsByLockupIDRequest;
            toProto(message: _109.SyntheticLockupsByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _109.SyntheticLockupsByLockupIDRequest): _109.SyntheticLockupsByLockupIDRequestProtoMsg;
        };
        SyntheticLockupsByLockupIDResponse: {
            typeUrl: string;
            encode(message: _109.SyntheticLockupsByLockupIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _109.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _109.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial(object: Partial<_109.SyntheticLockupsByLockupIDResponse>): _109.SyntheticLockupsByLockupIDResponse;
            fromSDK(object: _109.SyntheticLockupsByLockupIDResponseSDKType): _109.SyntheticLockupsByLockupIDResponse;
            toSDK(message: _109.SyntheticLockupsByLockupIDResponse): _109.SyntheticLockupsByLockupIDResponseSDKType;
            fromAmino(object: _109.SyntheticLockupsByLockupIDResponseAmino): _109.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _109.SyntheticLockupsByLockupIDResponse): _109.SyntheticLockupsByLockupIDResponseAmino;
            fromAminoMsg(object: _109.SyntheticLockupsByLockupIDResponseAminoMsg): _109.SyntheticLockupsByLockupIDResponse;
            toAminoMsg(message: _109.SyntheticLockupsByLockupIDResponse): _109.SyntheticLockupsByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _109.SyntheticLockupsByLockupIDResponseProtoMsg): _109.SyntheticLockupsByLockupIDResponse;
            toProto(message: _109.SyntheticLockupsByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _109.SyntheticLockupsByLockupIDResponse): _109.SyntheticLockupsByLockupIDResponseProtoMsg;
        };
        AccountLockedLongerDurationRequest: {
            typeUrl: string;
            encode(message: _109.AccountLockedLongerDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _109.AccountLockedLongerDurationRequest;
            toJSON(message: _109.AccountLockedLongerDurationRequest): unknown;
            fromPartial(object: Partial<_109.AccountLockedLongerDurationRequest>): _109.AccountLockedLongerDurationRequest;
            fromSDK(object: _109.AccountLockedLongerDurationRequestSDKType): _109.AccountLockedLongerDurationRequest;
            toSDK(message: _109.AccountLockedLongerDurationRequest): _109.AccountLockedLongerDurationRequestSDKType;
            fromAmino(object: _109.AccountLockedLongerDurationRequestAmino): _109.AccountLockedLongerDurationRequest;
            toAmino(message: _109.AccountLockedLongerDurationRequest): _109.AccountLockedLongerDurationRequestAmino;
            fromAminoMsg(object: _109.AccountLockedLongerDurationRequestAminoMsg): _109.AccountLockedLongerDurationRequest;
            toAminoMsg(message: _109.AccountLockedLongerDurationRequest): _109.AccountLockedLongerDurationRequestAminoMsg;
            fromProtoMsg(message: _109.AccountLockedLongerDurationRequestProtoMsg): _109.AccountLockedLongerDurationRequest;
            toProto(message: _109.AccountLockedLongerDurationRequest): Uint8Array;
            toProtoMsg(message: _109.AccountLockedLongerDurationRequest): _109.AccountLockedLongerDurationRequestProtoMsg;
        };
        AccountLockedLongerDurationResponse: {
            typeUrl: string;
            encode(message: _109.AccountLockedLongerDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _109.AccountLockedLongerDurationResponse;
            toJSON(message: _109.AccountLockedLongerDurationResponse): unknown;
            fromPartial(object: Partial<_109.AccountLockedLongerDurationResponse>): _109.AccountLockedLongerDurationResponse;
            fromSDK(object: _109.AccountLockedLongerDurationResponseSDKType): _109.AccountLockedLongerDurationResponse;
            toSDK(message: _109.AccountLockedLongerDurationResponse): _109.AccountLockedLongerDurationResponseSDKType;
            fromAmino(object: _109.AccountLockedLongerDurationResponseAmino): _109.AccountLockedLongerDurationResponse;
            toAmino(message: _109.AccountLockedLongerDurationResponse): _109.AccountLockedLongerDurationResponseAmino;
            fromAminoMsg(object: _109.AccountLockedLongerDurationResponseAminoMsg): _109.AccountLockedLongerDurationResponse;
            toAminoMsg(message: _109.AccountLockedLongerDurationResponse): _109.AccountLockedLongerDurationResponseAminoMsg;
            fromProtoMsg(message: _109.AccountLockedLongerDurationResponseProtoMsg): _109.AccountLockedLongerDurationResponse;
            toProto(message: _109.AccountLockedLongerDurationResponse): Uint8Array;
            toProtoMsg(message: _109.AccountLockedLongerDurationResponse): _109.AccountLockedLongerDurationResponseProtoMsg;
        };
        AccountLockedDurationRequest: {
            typeUrl: string;
            encode(message: _109.AccountLockedDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedDurationRequest;
            fromJSON(object: any): _109.AccountLockedDurationRequest;
            toJSON(message: _109.AccountLockedDurationRequest): unknown;
            fromPartial(object: Partial<_109.AccountLockedDurationRequest>): _109.AccountLockedDurationRequest;
            fromSDK(object: _109.AccountLockedDurationRequestSDKType): _109.AccountLockedDurationRequest;
            toSDK(message: _109.AccountLockedDurationRequest): _109.AccountLockedDurationRequestSDKType;
            fromAmino(object: _109.AccountLockedDurationRequestAmino): _109.AccountLockedDurationRequest;
            toAmino(message: _109.AccountLockedDurationRequest): _109.AccountLockedDurationRequestAmino;
            fromAminoMsg(object: _109.AccountLockedDurationRequestAminoMsg): _109.AccountLockedDurationRequest;
            toAminoMsg(message: _109.AccountLockedDurationRequest): _109.AccountLockedDurationRequestAminoMsg;
            fromProtoMsg(message: _109.AccountLockedDurationRequestProtoMsg): _109.AccountLockedDurationRequest;
            toProto(message: _109.AccountLockedDurationRequest): Uint8Array;
            toProtoMsg(message: _109.AccountLockedDurationRequest): _109.AccountLockedDurationRequestProtoMsg;
        };
        AccountLockedDurationResponse: {
            typeUrl: string;
            encode(message: _109.AccountLockedDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedDurationResponse;
            fromJSON(object: any): _109.AccountLockedDurationResponse;
            toJSON(message: _109.AccountLockedDurationResponse): unknown;
            fromPartial(object: Partial<_109.AccountLockedDurationResponse>): _109.AccountLockedDurationResponse;
            fromSDK(object: _109.AccountLockedDurationResponseSDKType): _109.AccountLockedDurationResponse;
            toSDK(message: _109.AccountLockedDurationResponse): _109.AccountLockedDurationResponseSDKType;
            fromAmino(object: _109.AccountLockedDurationResponseAmino): _109.AccountLockedDurationResponse;
            toAmino(message: _109.AccountLockedDurationResponse): _109.AccountLockedDurationResponseAmino;
            fromAminoMsg(object: _109.AccountLockedDurationResponseAminoMsg): _109.AccountLockedDurationResponse;
            toAminoMsg(message: _109.AccountLockedDurationResponse): _109.AccountLockedDurationResponseAminoMsg;
            fromProtoMsg(message: _109.AccountLockedDurationResponseProtoMsg): _109.AccountLockedDurationResponse;
            toProto(message: _109.AccountLockedDurationResponse): Uint8Array;
            toProtoMsg(message: _109.AccountLockedDurationResponse): _109.AccountLockedDurationResponseProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _109.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _109.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _109.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial(object: Partial<_109.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _109.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromSDK(object: _109.AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType): _109.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toSDK(message: _109.AccountLockedLongerDurationNotUnlockingOnlyRequest): _109.AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType;
            fromAmino(object: _109.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _109.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _109.AccountLockedLongerDurationNotUnlockingOnlyRequest): _109.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _109.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): _109.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAminoMsg(message: _109.AccountLockedLongerDurationNotUnlockingOnlyRequest): _109.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _109.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): _109.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toProto(message: _109.AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _109.AccountLockedLongerDurationNotUnlockingOnlyRequest): _109.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _109.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _109.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _109.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial(object: Partial<_109.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _109.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromSDK(object: _109.AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType): _109.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toSDK(message: _109.AccountLockedLongerDurationNotUnlockingOnlyResponse): _109.AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType;
            fromAmino(object: _109.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _109.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _109.AccountLockedLongerDurationNotUnlockingOnlyResponse): _109.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _109.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): _109.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAminoMsg(message: _109.AccountLockedLongerDurationNotUnlockingOnlyResponse): _109.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _109.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): _109.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toProto(message: _109.AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _109.AccountLockedLongerDurationNotUnlockingOnlyResponse): _109.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
        };
        AccountLockedLongerDurationDenomRequest: {
            typeUrl: string;
            encode(message: _109.AccountLockedLongerDurationDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _109.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _109.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial(object: Partial<_109.AccountLockedLongerDurationDenomRequest>): _109.AccountLockedLongerDurationDenomRequest;
            fromSDK(object: _109.AccountLockedLongerDurationDenomRequestSDKType): _109.AccountLockedLongerDurationDenomRequest;
            toSDK(message: _109.AccountLockedLongerDurationDenomRequest): _109.AccountLockedLongerDurationDenomRequestSDKType;
            fromAmino(object: _109.AccountLockedLongerDurationDenomRequestAmino): _109.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _109.AccountLockedLongerDurationDenomRequest): _109.AccountLockedLongerDurationDenomRequestAmino;
            fromAminoMsg(object: _109.AccountLockedLongerDurationDenomRequestAminoMsg): _109.AccountLockedLongerDurationDenomRequest;
            toAminoMsg(message: _109.AccountLockedLongerDurationDenomRequest): _109.AccountLockedLongerDurationDenomRequestAminoMsg;
            fromProtoMsg(message: _109.AccountLockedLongerDurationDenomRequestProtoMsg): _109.AccountLockedLongerDurationDenomRequest;
            toProto(message: _109.AccountLockedLongerDurationDenomRequest): Uint8Array;
            toProtoMsg(message: _109.AccountLockedLongerDurationDenomRequest): _109.AccountLockedLongerDurationDenomRequestProtoMsg;
        };
        AccountLockedLongerDurationDenomResponse: {
            typeUrl: string;
            encode(message: _109.AccountLockedLongerDurationDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _109.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _109.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial(object: Partial<_109.AccountLockedLongerDurationDenomResponse>): _109.AccountLockedLongerDurationDenomResponse;
            fromSDK(object: _109.AccountLockedLongerDurationDenomResponseSDKType): _109.AccountLockedLongerDurationDenomResponse;
            toSDK(message: _109.AccountLockedLongerDurationDenomResponse): _109.AccountLockedLongerDurationDenomResponseSDKType;
            fromAmino(object: _109.AccountLockedLongerDurationDenomResponseAmino): _109.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _109.AccountLockedLongerDurationDenomResponse): _109.AccountLockedLongerDurationDenomResponseAmino;
            fromAminoMsg(object: _109.AccountLockedLongerDurationDenomResponseAminoMsg): _109.AccountLockedLongerDurationDenomResponse;
            toAminoMsg(message: _109.AccountLockedLongerDurationDenomResponse): _109.AccountLockedLongerDurationDenomResponseAminoMsg;
            fromProtoMsg(message: _109.AccountLockedLongerDurationDenomResponseProtoMsg): _109.AccountLockedLongerDurationDenomResponse;
            toProto(message: _109.AccountLockedLongerDurationDenomResponse): Uint8Array;
            toProtoMsg(message: _109.AccountLockedLongerDurationDenomResponse): _109.AccountLockedLongerDurationDenomResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _109.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.QueryParamsRequest;
            fromJSON(_: any): _109.QueryParamsRequest;
            toJSON(_: _109.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_109.QueryParamsRequest>): _109.QueryParamsRequest;
            fromSDK(_: _109.QueryParamsRequestSDKType): _109.QueryParamsRequest;
            toSDK(_: _109.QueryParamsRequest): _109.QueryParamsRequestSDKType;
            fromAmino(_: _109.QueryParamsRequestAmino): _109.QueryParamsRequest;
            toAmino(_: _109.QueryParamsRequest): _109.QueryParamsRequestAmino;
            fromAminoMsg(object: _109.QueryParamsRequestAminoMsg): _109.QueryParamsRequest;
            toAminoMsg(message: _109.QueryParamsRequest): _109.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _109.QueryParamsRequestProtoMsg): _109.QueryParamsRequest;
            toProto(message: _109.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _109.QueryParamsRequest): _109.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _109.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.QueryParamsResponse;
            fromJSON(object: any): _109.QueryParamsResponse;
            toJSON(message: _109.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_109.QueryParamsResponse>): _109.QueryParamsResponse;
            fromSDK(object: _109.QueryParamsResponseSDKType): _109.QueryParamsResponse;
            toSDK(message: _109.QueryParamsResponse): _109.QueryParamsResponseSDKType;
            fromAmino(object: _109.QueryParamsResponseAmino): _109.QueryParamsResponse;
            toAmino(message: _109.QueryParamsResponse): _109.QueryParamsResponseAmino;
            fromAminoMsg(object: _109.QueryParamsResponseAminoMsg): _109.QueryParamsResponse;
            toAminoMsg(message: _109.QueryParamsResponse): _109.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _109.QueryParamsResponseProtoMsg): _109.QueryParamsResponse;
            toProto(message: _109.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _109.QueryParamsResponse): _109.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _108.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.Params;
            fromJSON(object: any): _108.Params;
            toJSON(message: _108.Params): unknown;
            fromPartial(object: Partial<_108.Params>): _108.Params;
            fromSDK(object: _108.ParamsSDKType): _108.Params;
            toSDK(message: _108.Params): _108.ParamsSDKType;
            fromAmino(object: _108.ParamsAmino): _108.Params;
            toAmino(message: _108.Params): _108.ParamsAmino;
            fromAminoMsg(object: _108.ParamsAminoMsg): _108.Params;
            toAminoMsg(message: _108.Params): _108.ParamsAminoMsg;
            fromProtoMsg(message: _108.ParamsProtoMsg): _108.Params;
            toProto(message: _108.Params): Uint8Array;
            toProtoMsg(message: _108.Params): _108.ParamsProtoMsg;
        };
        lockQueryTypeFromJSON(object: any): _107.LockQueryType;
        lockQueryTypeToJSON(object: _107.LockQueryType): string;
        LockQueryType: typeof _107.LockQueryType;
        LockQueryTypeSDKType: typeof _107.LockQueryType;
        LockQueryTypeAmino: typeof _107.LockQueryType;
        PeriodLock: {
            typeUrl: string;
            encode(message: _107.PeriodLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.PeriodLock;
            fromJSON(object: any): _107.PeriodLock;
            toJSON(message: _107.PeriodLock): unknown;
            fromPartial(object: Partial<_107.PeriodLock>): _107.PeriodLock;
            fromSDK(object: _107.PeriodLockSDKType): _107.PeriodLock;
            toSDK(message: _107.PeriodLock): _107.PeriodLockSDKType;
            fromAmino(object: _107.PeriodLockAmino): _107.PeriodLock;
            toAmino(message: _107.PeriodLock): _107.PeriodLockAmino;
            fromAminoMsg(object: _107.PeriodLockAminoMsg): _107.PeriodLock;
            toAminoMsg(message: _107.PeriodLock): _107.PeriodLockAminoMsg;
            fromProtoMsg(message: _107.PeriodLockProtoMsg): _107.PeriodLock;
            toProto(message: _107.PeriodLock): Uint8Array;
            toProtoMsg(message: _107.PeriodLock): _107.PeriodLockProtoMsg;
        };
        QueryCondition: {
            typeUrl: string;
            encode(message: _107.QueryCondition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryCondition;
            fromJSON(object: any): _107.QueryCondition;
            toJSON(message: _107.QueryCondition): unknown;
            fromPartial(object: Partial<_107.QueryCondition>): _107.QueryCondition;
            fromSDK(object: _107.QueryConditionSDKType): _107.QueryCondition;
            toSDK(message: _107.QueryCondition): _107.QueryConditionSDKType;
            fromAmino(object: _107.QueryConditionAmino): _107.QueryCondition;
            toAmino(message: _107.QueryCondition): _107.QueryConditionAmino;
            fromAminoMsg(object: _107.QueryConditionAminoMsg): _107.QueryCondition;
            toAminoMsg(message: _107.QueryCondition): _107.QueryConditionAminoMsg;
            fromProtoMsg(message: _107.QueryConditionProtoMsg): _107.QueryCondition;
            toProto(message: _107.QueryCondition): Uint8Array;
            toProtoMsg(message: _107.QueryCondition): _107.QueryConditionProtoMsg;
        };
        SyntheticLock: {
            typeUrl: string;
            encode(message: _107.SyntheticLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.SyntheticLock;
            fromJSON(object: any): _107.SyntheticLock;
            toJSON(message: _107.SyntheticLock): unknown;
            fromPartial(object: Partial<_107.SyntheticLock>): _107.SyntheticLock;
            fromSDK(object: _107.SyntheticLockSDKType): _107.SyntheticLock;
            toSDK(message: _107.SyntheticLock): _107.SyntheticLockSDKType;
            fromAmino(object: _107.SyntheticLockAmino): _107.SyntheticLock;
            toAmino(message: _107.SyntheticLock): _107.SyntheticLockAmino;
            fromAminoMsg(object: _107.SyntheticLockAminoMsg): _107.SyntheticLock;
            toAminoMsg(message: _107.SyntheticLock): _107.SyntheticLockAminoMsg;
            fromProtoMsg(message: _107.SyntheticLockProtoMsg): _107.SyntheticLock;
            toProto(message: _107.SyntheticLock): Uint8Array;
            toProtoMsg(message: _107.SyntheticLock): _107.SyntheticLockProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _106.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.GenesisState;
            fromJSON(object: any): _106.GenesisState;
            toJSON(message: _106.GenesisState): unknown;
            fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
            fromSDK(object: _106.GenesisStateSDKType): _106.GenesisState;
            toSDK(message: _106.GenesisState): _106.GenesisStateSDKType;
            fromAmino(object: _106.GenesisStateAmino): _106.GenesisState;
            toAmino(message: _106.GenesisState): _106.GenesisStateAmino;
            fromAminoMsg(object: _106.GenesisStateAminoMsg): _106.GenesisState;
            toAminoMsg(message: _106.GenesisState): _106.GenesisStateAminoMsg;
            fromProtoMsg(message: _106.GenesisStateProtoMsg): _106.GenesisState;
            toProto(message: _106.GenesisState): Uint8Array;
            toProtoMsg(message: _106.GenesisState): _106.GenesisStateProtoMsg;
        };
    };
    namespace mint {
        const v1beta1: {
            Query: typeof _277.Query;
            QueryClientImpl: typeof _277.QueryClientImpl;
            LCDQueryClient: typeof _261.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _113.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.QueryParamsRequest;
                fromJSON(_: any): _113.QueryParamsRequest;
                toJSON(_: _113.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_113.QueryParamsRequest>): _113.QueryParamsRequest;
                fromSDK(_: _113.QueryParamsRequestSDKType): _113.QueryParamsRequest;
                toSDK(_: _113.QueryParamsRequest): _113.QueryParamsRequestSDKType;
                fromAmino(_: _113.QueryParamsRequestAmino): _113.QueryParamsRequest;
                toAmino(_: _113.QueryParamsRequest): _113.QueryParamsRequestAmino;
                fromAminoMsg(object: _113.QueryParamsRequestAminoMsg): _113.QueryParamsRequest;
                toAminoMsg(message: _113.QueryParamsRequest): _113.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryParamsRequestProtoMsg): _113.QueryParamsRequest;
                toProto(message: _113.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryParamsRequest): _113.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _113.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.QueryParamsResponse;
                fromJSON(object: any): _113.QueryParamsResponse;
                toJSON(message: _113.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_113.QueryParamsResponse>): _113.QueryParamsResponse;
                fromSDK(object: _113.QueryParamsResponseSDKType): _113.QueryParamsResponse;
                toSDK(message: _113.QueryParamsResponse): _113.QueryParamsResponseSDKType;
                fromAmino(object: _113.QueryParamsResponseAmino): _113.QueryParamsResponse;
                toAmino(message: _113.QueryParamsResponse): _113.QueryParamsResponseAmino;
                fromAminoMsg(object: _113.QueryParamsResponseAminoMsg): _113.QueryParamsResponse;
                toAminoMsg(message: _113.QueryParamsResponse): _113.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryParamsResponseProtoMsg): _113.QueryParamsResponse;
                toProto(message: _113.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryParamsResponse): _113.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _113.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.QueryEpochProvisionsRequest;
                fromJSON(_: any): _113.QueryEpochProvisionsRequest;
                toJSON(_: _113.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: Partial<_113.QueryEpochProvisionsRequest>): _113.QueryEpochProvisionsRequest;
                fromSDK(_: _113.QueryEpochProvisionsRequestSDKType): _113.QueryEpochProvisionsRequest;
                toSDK(_: _113.QueryEpochProvisionsRequest): _113.QueryEpochProvisionsRequestSDKType;
                fromAmino(_: _113.QueryEpochProvisionsRequestAmino): _113.QueryEpochProvisionsRequest;
                toAmino(_: _113.QueryEpochProvisionsRequest): _113.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _113.QueryEpochProvisionsRequestAminoMsg): _113.QueryEpochProvisionsRequest;
                toAminoMsg(message: _113.QueryEpochProvisionsRequest): _113.QueryEpochProvisionsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryEpochProvisionsRequestProtoMsg): _113.QueryEpochProvisionsRequest;
                toProto(message: _113.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryEpochProvisionsRequest): _113.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _113.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.QueryEpochProvisionsResponse;
                fromJSON(object: any): _113.QueryEpochProvisionsResponse;
                toJSON(message: _113.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: Partial<_113.QueryEpochProvisionsResponse>): _113.QueryEpochProvisionsResponse;
                fromSDK(object: _113.QueryEpochProvisionsResponseSDKType): _113.QueryEpochProvisionsResponse;
                toSDK(message: _113.QueryEpochProvisionsResponse): _113.QueryEpochProvisionsResponseSDKType;
                fromAmino(object: _113.QueryEpochProvisionsResponseAmino): _113.QueryEpochProvisionsResponse;
                toAmino(message: _113.QueryEpochProvisionsResponse): _113.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _113.QueryEpochProvisionsResponseAminoMsg): _113.QueryEpochProvisionsResponse;
                toAminoMsg(message: _113.QueryEpochProvisionsResponse): _113.QueryEpochProvisionsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryEpochProvisionsResponseProtoMsg): _113.QueryEpochProvisionsResponse;
                toProto(message: _113.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryEpochProvisionsResponse): _113.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _112.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Minter;
                fromJSON(object: any): _112.Minter;
                toJSON(message: _112.Minter): unknown;
                fromPartial(object: Partial<_112.Minter>): _112.Minter;
                fromSDK(object: _112.MinterSDKType): _112.Minter;
                toSDK(message: _112.Minter): _112.MinterSDKType;
                fromAmino(object: _112.MinterAmino): _112.Minter;
                toAmino(message: _112.Minter): _112.MinterAmino;
                fromAminoMsg(object: _112.MinterAminoMsg): _112.Minter;
                toAminoMsg(message: _112.Minter): _112.MinterAminoMsg;
                fromProtoMsg(message: _112.MinterProtoMsg): _112.Minter;
                toProto(message: _112.Minter): Uint8Array;
                toProtoMsg(message: _112.Minter): _112.MinterProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _112.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.WeightedAddress;
                fromJSON(object: any): _112.WeightedAddress;
                toJSON(message: _112.WeightedAddress): unknown;
                fromPartial(object: Partial<_112.WeightedAddress>): _112.WeightedAddress;
                fromSDK(object: _112.WeightedAddressSDKType): _112.WeightedAddress;
                toSDK(message: _112.WeightedAddress): _112.WeightedAddressSDKType;
                fromAmino(object: _112.WeightedAddressAmino): _112.WeightedAddress;
                toAmino(message: _112.WeightedAddress): _112.WeightedAddressAmino;
                fromAminoMsg(object: _112.WeightedAddressAminoMsg): _112.WeightedAddress;
                toAminoMsg(message: _112.WeightedAddress): _112.WeightedAddressAminoMsg;
                fromProtoMsg(message: _112.WeightedAddressProtoMsg): _112.WeightedAddress;
                toProto(message: _112.WeightedAddress): Uint8Array;
                toProtoMsg(message: _112.WeightedAddress): _112.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _112.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.DistributionProportions;
                fromJSON(object: any): _112.DistributionProportions;
                toJSON(message: _112.DistributionProportions): unknown;
                fromPartial(object: Partial<_112.DistributionProportions>): _112.DistributionProportions;
                fromSDK(object: _112.DistributionProportionsSDKType): _112.DistributionProportions;
                toSDK(message: _112.DistributionProportions): _112.DistributionProportionsSDKType;
                fromAmino(object: _112.DistributionProportionsAmino): _112.DistributionProportions;
                toAmino(message: _112.DistributionProportions): _112.DistributionProportionsAmino;
                fromAminoMsg(object: _112.DistributionProportionsAminoMsg): _112.DistributionProportions;
                toAminoMsg(message: _112.DistributionProportions): _112.DistributionProportionsAminoMsg;
                fromProtoMsg(message: _112.DistributionProportionsProtoMsg): _112.DistributionProportions;
                toProto(message: _112.DistributionProportions): Uint8Array;
                toProtoMsg(message: _112.DistributionProportions): _112.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _112.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Params;
                fromJSON(object: any): _112.Params;
                toJSON(message: _112.Params): unknown;
                fromPartial(object: Partial<_112.Params>): _112.Params;
                fromSDK(object: _112.ParamsSDKType): _112.Params;
                toSDK(message: _112.Params): _112.ParamsSDKType;
                fromAmino(object: _112.ParamsAmino): _112.Params;
                toAmino(message: _112.Params): _112.ParamsAmino;
                fromAminoMsg(object: _112.ParamsAminoMsg): _112.Params;
                toAminoMsg(message: _112.Params): _112.ParamsAminoMsg;
                fromProtoMsg(message: _112.ParamsProtoMsg): _112.Params;
                toProto(message: _112.Params): Uint8Array;
                toProtoMsg(message: _112.Params): _112.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _111.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.GenesisState;
                fromJSON(object: any): _111.GenesisState;
                toJSON(message: _111.GenesisState): unknown;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                fromSDK(object: _111.GenesisStateSDKType): _111.GenesisState;
                toSDK(message: _111.GenesisState): _111.GenesisStateSDKType;
                fromAmino(object: _111.GenesisStateAmino): _111.GenesisState;
                toAmino(message: _111.GenesisState): _111.GenesisStateAmino;
                fromAminoMsg(object: _111.GenesisStateAminoMsg): _111.GenesisState;
                toAminoMsg(message: _111.GenesisState): _111.GenesisStateAminoMsg;
                fromProtoMsg(message: _111.GenesisStateProtoMsg): _111.GenesisState;
                toProto(message: _111.GenesisState): Uint8Array;
                toProtoMsg(message: _111.GenesisState): _111.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            Query: typeof _278.Query;
            QueryClientImpl: typeof _278.QueryClientImpl;
            LCDQueryClient: typeof _262.LCDQueryClient;
            QueryGaugeIdsRequest: {
                typeUrl: string;
                encode(message: _117.QueryGaugeIdsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryGaugeIdsRequest;
                fromJSON(object: any): _117.QueryGaugeIdsRequest;
                toJSON(message: _117.QueryGaugeIdsRequest): unknown;
                fromPartial(object: Partial<_117.QueryGaugeIdsRequest>): _117.QueryGaugeIdsRequest;
                fromSDK(object: _117.QueryGaugeIdsRequestSDKType): _117.QueryGaugeIdsRequest;
                toSDK(message: _117.QueryGaugeIdsRequest): _117.QueryGaugeIdsRequestSDKType;
                fromAmino(object: _117.QueryGaugeIdsRequestAmino): _117.QueryGaugeIdsRequest;
                toAmino(message: _117.QueryGaugeIdsRequest): _117.QueryGaugeIdsRequestAmino;
                fromAminoMsg(object: _117.QueryGaugeIdsRequestAminoMsg): _117.QueryGaugeIdsRequest;
                toAminoMsg(message: _117.QueryGaugeIdsRequest): _117.QueryGaugeIdsRequestAminoMsg;
                fromProtoMsg(message: _117.QueryGaugeIdsRequestProtoMsg): _117.QueryGaugeIdsRequest;
                toProto(message: _117.QueryGaugeIdsRequest): Uint8Array;
                toProtoMsg(message: _117.QueryGaugeIdsRequest): _117.QueryGaugeIdsRequestProtoMsg;
            };
            QueryGaugeIdsResponse: {
                typeUrl: string;
                encode(message: _117.QueryGaugeIdsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryGaugeIdsResponse;
                fromJSON(object: any): _117.QueryGaugeIdsResponse;
                toJSON(message: _117.QueryGaugeIdsResponse): unknown;
                fromPartial(object: Partial<_117.QueryGaugeIdsResponse>): _117.QueryGaugeIdsResponse;
                fromSDK(object: _117.QueryGaugeIdsResponseSDKType): _117.QueryGaugeIdsResponse;
                toSDK(message: _117.QueryGaugeIdsResponse): _117.QueryGaugeIdsResponseSDKType;
                fromAmino(object: _117.QueryGaugeIdsResponseAmino): _117.QueryGaugeIdsResponse;
                toAmino(message: _117.QueryGaugeIdsResponse): _117.QueryGaugeIdsResponseAmino;
                fromAminoMsg(object: _117.QueryGaugeIdsResponseAminoMsg): _117.QueryGaugeIdsResponse;
                toAminoMsg(message: _117.QueryGaugeIdsResponse): _117.QueryGaugeIdsResponseAminoMsg;
                fromProtoMsg(message: _117.QueryGaugeIdsResponseProtoMsg): _117.QueryGaugeIdsResponse;
                toProto(message: _117.QueryGaugeIdsResponse): Uint8Array;
                toProtoMsg(message: _117.QueryGaugeIdsResponse): _117.QueryGaugeIdsResponseProtoMsg;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                typeUrl: string;
                encode(message: _117.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _117.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _117.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial(object: Partial<_117.QueryGaugeIdsResponse_GaugeIdWithDuration>): _117.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromSDK(object: _117.QueryGaugeIdsResponse_GaugeIdWithDurationSDKType): _117.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toSDK(message: _117.QueryGaugeIdsResponse_GaugeIdWithDuration): _117.QueryGaugeIdsResponse_GaugeIdWithDurationSDKType;
                fromAmino(object: _117.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _117.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _117.QueryGaugeIdsResponse_GaugeIdWithDuration): _117.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                fromAminoMsg(object: _117.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): _117.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAminoMsg(message: _117.QueryGaugeIdsResponse_GaugeIdWithDuration): _117.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
                fromProtoMsg(message: _117.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): _117.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toProto(message: _117.QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
                toProtoMsg(message: _117.QueryGaugeIdsResponse_GaugeIdWithDuration): _117.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
            };
            QueryDistrInfoRequest: {
                typeUrl: string;
                encode(_: _117.QueryDistrInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryDistrInfoRequest;
                fromJSON(_: any): _117.QueryDistrInfoRequest;
                toJSON(_: _117.QueryDistrInfoRequest): unknown;
                fromPartial(_: Partial<_117.QueryDistrInfoRequest>): _117.QueryDistrInfoRequest;
                fromSDK(_: _117.QueryDistrInfoRequestSDKType): _117.QueryDistrInfoRequest;
                toSDK(_: _117.QueryDistrInfoRequest): _117.QueryDistrInfoRequestSDKType;
                fromAmino(_: _117.QueryDistrInfoRequestAmino): _117.QueryDistrInfoRequest;
                toAmino(_: _117.QueryDistrInfoRequest): _117.QueryDistrInfoRequestAmino;
                fromAminoMsg(object: _117.QueryDistrInfoRequestAminoMsg): _117.QueryDistrInfoRequest;
                toAminoMsg(message: _117.QueryDistrInfoRequest): _117.QueryDistrInfoRequestAminoMsg;
                fromProtoMsg(message: _117.QueryDistrInfoRequestProtoMsg): _117.QueryDistrInfoRequest;
                toProto(message: _117.QueryDistrInfoRequest): Uint8Array;
                toProtoMsg(message: _117.QueryDistrInfoRequest): _117.QueryDistrInfoRequestProtoMsg;
            };
            QueryDistrInfoResponse: {
                typeUrl: string;
                encode(message: _117.QueryDistrInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryDistrInfoResponse;
                fromJSON(object: any): _117.QueryDistrInfoResponse;
                toJSON(message: _117.QueryDistrInfoResponse): unknown;
                fromPartial(object: Partial<_117.QueryDistrInfoResponse>): _117.QueryDistrInfoResponse;
                fromSDK(object: _117.QueryDistrInfoResponseSDKType): _117.QueryDistrInfoResponse;
                toSDK(message: _117.QueryDistrInfoResponse): _117.QueryDistrInfoResponseSDKType;
                fromAmino(object: _117.QueryDistrInfoResponseAmino): _117.QueryDistrInfoResponse;
                toAmino(message: _117.QueryDistrInfoResponse): _117.QueryDistrInfoResponseAmino;
                fromAminoMsg(object: _117.QueryDistrInfoResponseAminoMsg): _117.QueryDistrInfoResponse;
                toAminoMsg(message: _117.QueryDistrInfoResponse): _117.QueryDistrInfoResponseAminoMsg;
                fromProtoMsg(message: _117.QueryDistrInfoResponseProtoMsg): _117.QueryDistrInfoResponse;
                toProto(message: _117.QueryDistrInfoResponse): Uint8Array;
                toProtoMsg(message: _117.QueryDistrInfoResponse): _117.QueryDistrInfoResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _117.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryParamsRequest;
                fromJSON(_: any): _117.QueryParamsRequest;
                toJSON(_: _117.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_117.QueryParamsRequest>): _117.QueryParamsRequest;
                fromSDK(_: _117.QueryParamsRequestSDKType): _117.QueryParamsRequest;
                toSDK(_: _117.QueryParamsRequest): _117.QueryParamsRequestSDKType;
                fromAmino(_: _117.QueryParamsRequestAmino): _117.QueryParamsRequest;
                toAmino(_: _117.QueryParamsRequest): _117.QueryParamsRequestAmino;
                fromAminoMsg(object: _117.QueryParamsRequestAminoMsg): _117.QueryParamsRequest;
                toAminoMsg(message: _117.QueryParamsRequest): _117.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _117.QueryParamsRequestProtoMsg): _117.QueryParamsRequest;
                toProto(message: _117.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _117.QueryParamsRequest): _117.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _117.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryParamsResponse;
                fromJSON(object: any): _117.QueryParamsResponse;
                toJSON(message: _117.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_117.QueryParamsResponse>): _117.QueryParamsResponse;
                fromSDK(object: _117.QueryParamsResponseSDKType): _117.QueryParamsResponse;
                toSDK(message: _117.QueryParamsResponse): _117.QueryParamsResponseSDKType;
                fromAmino(object: _117.QueryParamsResponseAmino): _117.QueryParamsResponse;
                toAmino(message: _117.QueryParamsResponse): _117.QueryParamsResponseAmino;
                fromAminoMsg(object: _117.QueryParamsResponseAminoMsg): _117.QueryParamsResponse;
                toAminoMsg(message: _117.QueryParamsResponse): _117.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _117.QueryParamsResponseProtoMsg): _117.QueryParamsResponse;
                toProto(message: _117.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _117.QueryParamsResponse): _117.QueryParamsResponseProtoMsg;
            };
            QueryLockableDurationsRequest: {
                typeUrl: string;
                encode(_: _117.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryLockableDurationsRequest;
                fromJSON(_: any): _117.QueryLockableDurationsRequest;
                toJSON(_: _117.QueryLockableDurationsRequest): unknown;
                fromPartial(_: Partial<_117.QueryLockableDurationsRequest>): _117.QueryLockableDurationsRequest;
                fromSDK(_: _117.QueryLockableDurationsRequestSDKType): _117.QueryLockableDurationsRequest;
                toSDK(_: _117.QueryLockableDurationsRequest): _117.QueryLockableDurationsRequestSDKType;
                fromAmino(_: _117.QueryLockableDurationsRequestAmino): _117.QueryLockableDurationsRequest;
                toAmino(_: _117.QueryLockableDurationsRequest): _117.QueryLockableDurationsRequestAmino;
                fromAminoMsg(object: _117.QueryLockableDurationsRequestAminoMsg): _117.QueryLockableDurationsRequest;
                toAminoMsg(message: _117.QueryLockableDurationsRequest): _117.QueryLockableDurationsRequestAminoMsg;
                fromProtoMsg(message: _117.QueryLockableDurationsRequestProtoMsg): _117.QueryLockableDurationsRequest;
                toProto(message: _117.QueryLockableDurationsRequest): Uint8Array;
                toProtoMsg(message: _117.QueryLockableDurationsRequest): _117.QueryLockableDurationsRequestProtoMsg;
            };
            QueryLockableDurationsResponse: {
                typeUrl: string;
                encode(message: _117.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryLockableDurationsResponse;
                fromJSON(object: any): _117.QueryLockableDurationsResponse;
                toJSON(message: _117.QueryLockableDurationsResponse): unknown;
                fromPartial(object: Partial<_117.QueryLockableDurationsResponse>): _117.QueryLockableDurationsResponse;
                fromSDK(object: _117.QueryLockableDurationsResponseSDKType): _117.QueryLockableDurationsResponse;
                toSDK(message: _117.QueryLockableDurationsResponse): _117.QueryLockableDurationsResponseSDKType;
                fromAmino(object: _117.QueryLockableDurationsResponseAmino): _117.QueryLockableDurationsResponse;
                toAmino(message: _117.QueryLockableDurationsResponse): _117.QueryLockableDurationsResponseAmino;
                fromAminoMsg(object: _117.QueryLockableDurationsResponseAminoMsg): _117.QueryLockableDurationsResponse;
                toAminoMsg(message: _117.QueryLockableDurationsResponse): _117.QueryLockableDurationsResponseAminoMsg;
                fromProtoMsg(message: _117.QueryLockableDurationsResponseProtoMsg): _117.QueryLockableDurationsResponse;
                toProto(message: _117.QueryLockableDurationsResponse): Uint8Array;
                toProtoMsg(message: _117.QueryLockableDurationsResponse): _117.QueryLockableDurationsResponseProtoMsg;
            };
            QueryIncentivizedPoolsRequest: {
                typeUrl: string;
                encode(_: _117.QueryIncentivizedPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _117.QueryIncentivizedPoolsRequest;
                toJSON(_: _117.QueryIncentivizedPoolsRequest): unknown;
                fromPartial(_: Partial<_117.QueryIncentivizedPoolsRequest>): _117.QueryIncentivizedPoolsRequest;
                fromSDK(_: _117.QueryIncentivizedPoolsRequestSDKType): _117.QueryIncentivizedPoolsRequest;
                toSDK(_: _117.QueryIncentivizedPoolsRequest): _117.QueryIncentivizedPoolsRequestSDKType;
                fromAmino(_: _117.QueryIncentivizedPoolsRequestAmino): _117.QueryIncentivizedPoolsRequest;
                toAmino(_: _117.QueryIncentivizedPoolsRequest): _117.QueryIncentivizedPoolsRequestAmino;
                fromAminoMsg(object: _117.QueryIncentivizedPoolsRequestAminoMsg): _117.QueryIncentivizedPoolsRequest;
                toAminoMsg(message: _117.QueryIncentivizedPoolsRequest): _117.QueryIncentivizedPoolsRequestAminoMsg;
                fromProtoMsg(message: _117.QueryIncentivizedPoolsRequestProtoMsg): _117.QueryIncentivizedPoolsRequest;
                toProto(message: _117.QueryIncentivizedPoolsRequest): Uint8Array;
                toProtoMsg(message: _117.QueryIncentivizedPoolsRequest): _117.QueryIncentivizedPoolsRequestProtoMsg;
            };
            IncentivizedPool: {
                typeUrl: string;
                encode(message: _117.IncentivizedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.IncentivizedPool;
                fromJSON(object: any): _117.IncentivizedPool;
                toJSON(message: _117.IncentivizedPool): unknown;
                fromPartial(object: Partial<_117.IncentivizedPool>): _117.IncentivizedPool;
                fromSDK(object: _117.IncentivizedPoolSDKType): _117.IncentivizedPool;
                toSDK(message: _117.IncentivizedPool): _117.IncentivizedPoolSDKType;
                fromAmino(object: _117.IncentivizedPoolAmino): _117.IncentivizedPool;
                toAmino(message: _117.IncentivizedPool): _117.IncentivizedPoolAmino;
                fromAminoMsg(object: _117.IncentivizedPoolAminoMsg): _117.IncentivizedPool;
                toAminoMsg(message: _117.IncentivizedPool): _117.IncentivizedPoolAminoMsg;
                fromProtoMsg(message: _117.IncentivizedPoolProtoMsg): _117.IncentivizedPool;
                toProto(message: _117.IncentivizedPool): Uint8Array;
                toProtoMsg(message: _117.IncentivizedPool): _117.IncentivizedPoolProtoMsg;
            };
            QueryIncentivizedPoolsResponse: {
                typeUrl: string;
                encode(message: _117.QueryIncentivizedPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _117.QueryIncentivizedPoolsResponse;
                toJSON(message: _117.QueryIncentivizedPoolsResponse): unknown;
                fromPartial(object: Partial<_117.QueryIncentivizedPoolsResponse>): _117.QueryIncentivizedPoolsResponse;
                fromSDK(object: _117.QueryIncentivizedPoolsResponseSDKType): _117.QueryIncentivizedPoolsResponse;
                toSDK(message: _117.QueryIncentivizedPoolsResponse): _117.QueryIncentivizedPoolsResponseSDKType;
                fromAmino(object: _117.QueryIncentivizedPoolsResponseAmino): _117.QueryIncentivizedPoolsResponse;
                toAmino(message: _117.QueryIncentivizedPoolsResponse): _117.QueryIncentivizedPoolsResponseAmino;
                fromAminoMsg(object: _117.QueryIncentivizedPoolsResponseAminoMsg): _117.QueryIncentivizedPoolsResponse;
                toAminoMsg(message: _117.QueryIncentivizedPoolsResponse): _117.QueryIncentivizedPoolsResponseAminoMsg;
                fromProtoMsg(message: _117.QueryIncentivizedPoolsResponseProtoMsg): _117.QueryIncentivizedPoolsResponse;
                toProto(message: _117.QueryIncentivizedPoolsResponse): Uint8Array;
                toProtoMsg(message: _117.QueryIncentivizedPoolsResponse): _117.QueryIncentivizedPoolsResponseProtoMsg;
            };
            QueryExternalIncentiveGaugesRequest: {
                typeUrl: string;
                encode(_: _117.QueryExternalIncentiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _117.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _117.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial(_: Partial<_117.QueryExternalIncentiveGaugesRequest>): _117.QueryExternalIncentiveGaugesRequest;
                fromSDK(_: _117.QueryExternalIncentiveGaugesRequestSDKType): _117.QueryExternalIncentiveGaugesRequest;
                toSDK(_: _117.QueryExternalIncentiveGaugesRequest): _117.QueryExternalIncentiveGaugesRequestSDKType;
                fromAmino(_: _117.QueryExternalIncentiveGaugesRequestAmino): _117.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _117.QueryExternalIncentiveGaugesRequest): _117.QueryExternalIncentiveGaugesRequestAmino;
                fromAminoMsg(object: _117.QueryExternalIncentiveGaugesRequestAminoMsg): _117.QueryExternalIncentiveGaugesRequest;
                toAminoMsg(message: _117.QueryExternalIncentiveGaugesRequest): _117.QueryExternalIncentiveGaugesRequestAminoMsg;
                fromProtoMsg(message: _117.QueryExternalIncentiveGaugesRequestProtoMsg): _117.QueryExternalIncentiveGaugesRequest;
                toProto(message: _117.QueryExternalIncentiveGaugesRequest): Uint8Array;
                toProtoMsg(message: _117.QueryExternalIncentiveGaugesRequest): _117.QueryExternalIncentiveGaugesRequestProtoMsg;
            };
            QueryExternalIncentiveGaugesResponse: {
                typeUrl: string;
                encode(message: _117.QueryExternalIncentiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _117.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _117.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial(object: Partial<_117.QueryExternalIncentiveGaugesResponse>): _117.QueryExternalIncentiveGaugesResponse;
                fromSDK(object: _117.QueryExternalIncentiveGaugesResponseSDKType): _117.QueryExternalIncentiveGaugesResponse;
                toSDK(message: _117.QueryExternalIncentiveGaugesResponse): _117.QueryExternalIncentiveGaugesResponseSDKType;
                fromAmino(object: _117.QueryExternalIncentiveGaugesResponseAmino): _117.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _117.QueryExternalIncentiveGaugesResponse): _117.QueryExternalIncentiveGaugesResponseAmino;
                fromAminoMsg(object: _117.QueryExternalIncentiveGaugesResponseAminoMsg): _117.QueryExternalIncentiveGaugesResponse;
                toAminoMsg(message: _117.QueryExternalIncentiveGaugesResponse): _117.QueryExternalIncentiveGaugesResponseAminoMsg;
                fromProtoMsg(message: _117.QueryExternalIncentiveGaugesResponseProtoMsg): _117.QueryExternalIncentiveGaugesResponse;
                toProto(message: _117.QueryExternalIncentiveGaugesResponse): Uint8Array;
                toProtoMsg(message: _117.QueryExternalIncentiveGaugesResponse): _117.QueryExternalIncentiveGaugesResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _116.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Params;
                fromJSON(object: any): _116.Params;
                toJSON(message: _116.Params): unknown;
                fromPartial(object: Partial<_116.Params>): _116.Params;
                fromSDK(object: _116.ParamsSDKType): _116.Params;
                toSDK(message: _116.Params): _116.ParamsSDKType;
                fromAmino(object: _116.ParamsAmino): _116.Params;
                toAmino(message: _116.Params): _116.ParamsAmino;
                fromAminoMsg(object: _116.ParamsAminoMsg): _116.Params;
                toAminoMsg(message: _116.Params): _116.ParamsAminoMsg;
                fromProtoMsg(message: _116.ParamsProtoMsg): _116.Params;
                toProto(message: _116.Params): Uint8Array;
                toProtoMsg(message: _116.Params): _116.ParamsProtoMsg;
            };
            LockableDurationsInfo: {
                typeUrl: string;
                encode(message: _116.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.LockableDurationsInfo;
                fromJSON(object: any): _116.LockableDurationsInfo;
                toJSON(message: _116.LockableDurationsInfo): unknown;
                fromPartial(object: Partial<_116.LockableDurationsInfo>): _116.LockableDurationsInfo;
                fromSDK(object: _116.LockableDurationsInfoSDKType): _116.LockableDurationsInfo;
                toSDK(message: _116.LockableDurationsInfo): _116.LockableDurationsInfoSDKType;
                fromAmino(object: _116.LockableDurationsInfoAmino): _116.LockableDurationsInfo;
                toAmino(message: _116.LockableDurationsInfo): _116.LockableDurationsInfoAmino;
                fromAminoMsg(object: _116.LockableDurationsInfoAminoMsg): _116.LockableDurationsInfo;
                toAminoMsg(message: _116.LockableDurationsInfo): _116.LockableDurationsInfoAminoMsg;
                fromProtoMsg(message: _116.LockableDurationsInfoProtoMsg): _116.LockableDurationsInfo;
                toProto(message: _116.LockableDurationsInfo): Uint8Array;
                toProtoMsg(message: _116.LockableDurationsInfo): _116.LockableDurationsInfoProtoMsg;
            };
            DistrInfo: {
                typeUrl: string;
                encode(message: _116.DistrInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.DistrInfo;
                fromJSON(object: any): _116.DistrInfo;
                toJSON(message: _116.DistrInfo): unknown;
                fromPartial(object: Partial<_116.DistrInfo>): _116.DistrInfo;
                fromSDK(object: _116.DistrInfoSDKType): _116.DistrInfo;
                toSDK(message: _116.DistrInfo): _116.DistrInfoSDKType;
                fromAmino(object: _116.DistrInfoAmino): _116.DistrInfo;
                toAmino(message: _116.DistrInfo): _116.DistrInfoAmino;
                fromAminoMsg(object: _116.DistrInfoAminoMsg): _116.DistrInfo;
                toAminoMsg(message: _116.DistrInfo): _116.DistrInfoAminoMsg;
                fromProtoMsg(message: _116.DistrInfoProtoMsg): _116.DistrInfo;
                toProto(message: _116.DistrInfo): Uint8Array;
                toProtoMsg(message: _116.DistrInfo): _116.DistrInfoProtoMsg;
            };
            DistrRecord: {
                typeUrl: string;
                encode(message: _116.DistrRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.DistrRecord;
                fromJSON(object: any): _116.DistrRecord;
                toJSON(message: _116.DistrRecord): unknown;
                fromPartial(object: Partial<_116.DistrRecord>): _116.DistrRecord;
                fromSDK(object: _116.DistrRecordSDKType): _116.DistrRecord;
                toSDK(message: _116.DistrRecord): _116.DistrRecordSDKType;
                fromAmino(object: _116.DistrRecordAmino): _116.DistrRecord;
                toAmino(message: _116.DistrRecord): _116.DistrRecordAmino;
                fromAminoMsg(object: _116.DistrRecordAminoMsg): _116.DistrRecord;
                toAminoMsg(message: _116.DistrRecord): _116.DistrRecordAminoMsg;
                fromProtoMsg(message: _116.DistrRecordProtoMsg): _116.DistrRecord;
                toProto(message: _116.DistrRecord): Uint8Array;
                toProtoMsg(message: _116.DistrRecord): _116.DistrRecordProtoMsg;
            };
            PoolToGauge: {
                typeUrl: string;
                encode(message: _116.PoolToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.PoolToGauge;
                fromJSON(object: any): _116.PoolToGauge;
                toJSON(message: _116.PoolToGauge): unknown;
                fromPartial(object: Partial<_116.PoolToGauge>): _116.PoolToGauge;
                fromSDK(object: _116.PoolToGaugeSDKType): _116.PoolToGauge;
                toSDK(message: _116.PoolToGauge): _116.PoolToGaugeSDKType;
                fromAmino(object: _116.PoolToGaugeAmino): _116.PoolToGauge;
                toAmino(message: _116.PoolToGauge): _116.PoolToGaugeAmino;
                fromAminoMsg(object: _116.PoolToGaugeAminoMsg): _116.PoolToGauge;
                toAminoMsg(message: _116.PoolToGauge): _116.PoolToGaugeAminoMsg;
                fromProtoMsg(message: _116.PoolToGaugeProtoMsg): _116.PoolToGauge;
                toProto(message: _116.PoolToGauge): Uint8Array;
                toProtoMsg(message: _116.PoolToGauge): _116.PoolToGaugeProtoMsg;
            };
            PoolToGauges: {
                typeUrl: string;
                encode(message: _116.PoolToGauges, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.PoolToGauges;
                fromJSON(object: any): _116.PoolToGauges;
                toJSON(message: _116.PoolToGauges): unknown;
                fromPartial(object: Partial<_116.PoolToGauges>): _116.PoolToGauges;
                fromSDK(object: _116.PoolToGaugesSDKType): _116.PoolToGauges;
                toSDK(message: _116.PoolToGauges): _116.PoolToGaugesSDKType;
                fromAmino(object: _116.PoolToGaugesAmino): _116.PoolToGauges;
                toAmino(message: _116.PoolToGauges): _116.PoolToGaugesAmino;
                fromAminoMsg(object: _116.PoolToGaugesAminoMsg): _116.PoolToGauges;
                toAminoMsg(message: _116.PoolToGauges): _116.PoolToGaugesAminoMsg;
                fromProtoMsg(message: _116.PoolToGaugesProtoMsg): _116.PoolToGauges;
                toProto(message: _116.PoolToGauges): Uint8Array;
                toProtoMsg(message: _116.PoolToGauges): _116.PoolToGaugesProtoMsg;
            };
            ReplacePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _115.ReplacePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _115.ReplacePoolIncentivesProposal;
                toJSON(message: _115.ReplacePoolIncentivesProposal): unknown;
                fromPartial(object: Partial<_115.ReplacePoolIncentivesProposal>): _115.ReplacePoolIncentivesProposal;
                fromSDK(object: _115.ReplacePoolIncentivesProposalSDKType): _115.ReplacePoolIncentivesProposal;
                toSDK(message: _115.ReplacePoolIncentivesProposal): _115.ReplacePoolIncentivesProposalSDKType;
                fromAmino(object: _115.ReplacePoolIncentivesProposalAmino): _115.ReplacePoolIncentivesProposal;
                toAmino(message: _115.ReplacePoolIncentivesProposal): _115.ReplacePoolIncentivesProposalAmino;
                fromAminoMsg(object: _115.ReplacePoolIncentivesProposalAminoMsg): _115.ReplacePoolIncentivesProposal;
                toAminoMsg(message: _115.ReplacePoolIncentivesProposal): _115.ReplacePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _115.ReplacePoolIncentivesProposalProtoMsg): _115.ReplacePoolIncentivesProposal;
                toProto(message: _115.ReplacePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _115.ReplacePoolIncentivesProposal): _115.ReplacePoolIncentivesProposalProtoMsg;
            };
            UpdatePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _115.UpdatePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _115.UpdatePoolIncentivesProposal;
                toJSON(message: _115.UpdatePoolIncentivesProposal): unknown;
                fromPartial(object: Partial<_115.UpdatePoolIncentivesProposal>): _115.UpdatePoolIncentivesProposal;
                fromSDK(object: _115.UpdatePoolIncentivesProposalSDKType): _115.UpdatePoolIncentivesProposal;
                toSDK(message: _115.UpdatePoolIncentivesProposal): _115.UpdatePoolIncentivesProposalSDKType;
                fromAmino(object: _115.UpdatePoolIncentivesProposalAmino): _115.UpdatePoolIncentivesProposal;
                toAmino(message: _115.UpdatePoolIncentivesProposal): _115.UpdatePoolIncentivesProposalAmino;
                fromAminoMsg(object: _115.UpdatePoolIncentivesProposalAminoMsg): _115.UpdatePoolIncentivesProposal;
                toAminoMsg(message: _115.UpdatePoolIncentivesProposal): _115.UpdatePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _115.UpdatePoolIncentivesProposalProtoMsg): _115.UpdatePoolIncentivesProposal;
                toProto(message: _115.UpdatePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _115.UpdatePoolIncentivesProposal): _115.UpdatePoolIncentivesProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _114.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.GenesisState;
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
        };
    }
    namespace protorev {
        const v1beta1: {
            Msg: typeof _291.Msg;
            Query: typeof _279.Query;
            QueryClientImpl: typeof _279.QueryClientImpl;
            LCDQueryClient: typeof _263.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _123.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _123.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _123.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _123.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _123.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _123.MsgSetDeveloperAccount;
                    };
                };
                toJSON: {
                    setHotRoutes(value: _123.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDeveloperAccount(value: _123.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setHotRoutes(value: any): {
                        typeUrl: string;
                        value: _123.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: any): {
                        typeUrl: string;
                        value: _123.MsgSetDeveloperAccount;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _123.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _123.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _123.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _123.MsgSetDeveloperAccount;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: (message: _123.MsgSetHotRoutes) => _123.MsgSetHotRoutesAmino;
                    fromAmino: (object: _123.MsgSetHotRoutesAmino) => _123.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: (message: _123.MsgSetDeveloperAccount) => _123.MsgSetDeveloperAccountAmino;
                    fromAmino: (object: _123.MsgSetDeveloperAccountAmino) => _123.MsgSetDeveloperAccount;
                };
            };
            MsgSetHotRoutes: {
                typeUrl: string;
                encode(message: _123.MsgSetHotRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.MsgSetHotRoutes;
                fromJSON(object: any): _123.MsgSetHotRoutes;
                toJSON(message: _123.MsgSetHotRoutes): unknown;
                fromPartial(object: Partial<_123.MsgSetHotRoutes>): _123.MsgSetHotRoutes;
                fromSDK(object: _123.MsgSetHotRoutesSDKType): _123.MsgSetHotRoutes;
                toSDK(message: _123.MsgSetHotRoutes): _123.MsgSetHotRoutesSDKType;
                fromAmino(object: _123.MsgSetHotRoutesAmino): _123.MsgSetHotRoutes;
                toAmino(message: _123.MsgSetHotRoutes): _123.MsgSetHotRoutesAmino;
                fromAminoMsg(object: _123.MsgSetHotRoutesAminoMsg): _123.MsgSetHotRoutes;
                toAminoMsg(message: _123.MsgSetHotRoutes): _123.MsgSetHotRoutesAminoMsg;
                fromProtoMsg(message: _123.MsgSetHotRoutesProtoMsg): _123.MsgSetHotRoutes;
                toProto(message: _123.MsgSetHotRoutes): Uint8Array;
                toProtoMsg(message: _123.MsgSetHotRoutes): _123.MsgSetHotRoutesProtoMsg;
            };
            MsgSetHotRoutesResponse: {
                typeUrl: string;
                encode(_: _123.MsgSetHotRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.MsgSetHotRoutesResponse;
                fromJSON(_: any): _123.MsgSetHotRoutesResponse;
                toJSON(_: _123.MsgSetHotRoutesResponse): unknown;
                fromPartial(_: Partial<_123.MsgSetHotRoutesResponse>): _123.MsgSetHotRoutesResponse;
                fromSDK(_: _123.MsgSetHotRoutesResponseSDKType): _123.MsgSetHotRoutesResponse;
                toSDK(_: _123.MsgSetHotRoutesResponse): _123.MsgSetHotRoutesResponseSDKType;
                fromAmino(_: _123.MsgSetHotRoutesResponseAmino): _123.MsgSetHotRoutesResponse;
                toAmino(_: _123.MsgSetHotRoutesResponse): _123.MsgSetHotRoutesResponseAmino;
                fromAminoMsg(object: _123.MsgSetHotRoutesResponseAminoMsg): _123.MsgSetHotRoutesResponse;
                toAminoMsg(message: _123.MsgSetHotRoutesResponse): _123.MsgSetHotRoutesResponseAminoMsg;
                fromProtoMsg(message: _123.MsgSetHotRoutesResponseProtoMsg): _123.MsgSetHotRoutesResponse;
                toProto(message: _123.MsgSetHotRoutesResponse): Uint8Array;
                toProtoMsg(message: _123.MsgSetHotRoutesResponse): _123.MsgSetHotRoutesResponseProtoMsg;
            };
            MsgSetDeveloperAccount: {
                typeUrl: string;
                encode(message: _123.MsgSetDeveloperAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.MsgSetDeveloperAccount;
                fromJSON(object: any): _123.MsgSetDeveloperAccount;
                toJSON(message: _123.MsgSetDeveloperAccount): unknown;
                fromPartial(object: Partial<_123.MsgSetDeveloperAccount>): _123.MsgSetDeveloperAccount;
                fromSDK(object: _123.MsgSetDeveloperAccountSDKType): _123.MsgSetDeveloperAccount;
                toSDK(message: _123.MsgSetDeveloperAccount): _123.MsgSetDeveloperAccountSDKType;
                fromAmino(object: _123.MsgSetDeveloperAccountAmino): _123.MsgSetDeveloperAccount;
                toAmino(message: _123.MsgSetDeveloperAccount): _123.MsgSetDeveloperAccountAmino;
                fromAminoMsg(object: _123.MsgSetDeveloperAccountAminoMsg): _123.MsgSetDeveloperAccount;
                toAminoMsg(message: _123.MsgSetDeveloperAccount): _123.MsgSetDeveloperAccountAminoMsg;
                fromProtoMsg(message: _123.MsgSetDeveloperAccountProtoMsg): _123.MsgSetDeveloperAccount;
                toProto(message: _123.MsgSetDeveloperAccount): Uint8Array;
                toProtoMsg(message: _123.MsgSetDeveloperAccount): _123.MsgSetDeveloperAccountProtoMsg;
            };
            MsgSetDeveloperAccountResponse: {
                typeUrl: string;
                encode(_: _123.MsgSetDeveloperAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.MsgSetDeveloperAccountResponse;
                fromJSON(_: any): _123.MsgSetDeveloperAccountResponse;
                toJSON(_: _123.MsgSetDeveloperAccountResponse): unknown;
                fromPartial(_: Partial<_123.MsgSetDeveloperAccountResponse>): _123.MsgSetDeveloperAccountResponse;
                fromSDK(_: _123.MsgSetDeveloperAccountResponseSDKType): _123.MsgSetDeveloperAccountResponse;
                toSDK(_: _123.MsgSetDeveloperAccountResponse): _123.MsgSetDeveloperAccountResponseSDKType;
                fromAmino(_: _123.MsgSetDeveloperAccountResponseAmino): _123.MsgSetDeveloperAccountResponse;
                toAmino(_: _123.MsgSetDeveloperAccountResponse): _123.MsgSetDeveloperAccountResponseAmino;
                fromAminoMsg(object: _123.MsgSetDeveloperAccountResponseAminoMsg): _123.MsgSetDeveloperAccountResponse;
                toAminoMsg(message: _123.MsgSetDeveloperAccountResponse): _123.MsgSetDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _123.MsgSetDeveloperAccountResponseProtoMsg): _123.MsgSetDeveloperAccountResponse;
                toProto(message: _123.MsgSetDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _123.MsgSetDeveloperAccountResponse): _123.MsgSetDeveloperAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _122.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryParamsRequest;
                fromJSON(_: any): _122.QueryParamsRequest;
                toJSON(_: _122.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_122.QueryParamsRequest>): _122.QueryParamsRequest;
                fromSDK(_: _122.QueryParamsRequestSDKType): _122.QueryParamsRequest;
                toSDK(_: _122.QueryParamsRequest): _122.QueryParamsRequestSDKType;
                fromAmino(_: _122.QueryParamsRequestAmino): _122.QueryParamsRequest;
                toAmino(_: _122.QueryParamsRequest): _122.QueryParamsRequestAmino;
                fromAminoMsg(object: _122.QueryParamsRequestAminoMsg): _122.QueryParamsRequest;
                toAminoMsg(message: _122.QueryParamsRequest): _122.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryParamsRequestProtoMsg): _122.QueryParamsRequest;
                toProto(message: _122.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryParamsRequest): _122.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _122.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryParamsResponse;
                fromJSON(object: any): _122.QueryParamsResponse;
                toJSON(message: _122.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_122.QueryParamsResponse>): _122.QueryParamsResponse;
                fromSDK(object: _122.QueryParamsResponseSDKType): _122.QueryParamsResponse;
                toSDK(message: _122.QueryParamsResponse): _122.QueryParamsResponseSDKType;
                fromAmino(object: _122.QueryParamsResponseAmino): _122.QueryParamsResponse;
                toAmino(message: _122.QueryParamsResponse): _122.QueryParamsResponseAmino;
                fromAminoMsg(object: _122.QueryParamsResponseAminoMsg): _122.QueryParamsResponse;
                toAminoMsg(message: _122.QueryParamsResponse): _122.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryParamsResponseProtoMsg): _122.QueryParamsResponse;
                toProto(message: _122.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryParamsResponse): _122.QueryParamsResponseProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                typeUrl: string;
                encode(_: _122.QueryGetProtoRevNumberOfTradesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryGetProtoRevNumberOfTradesRequest;
                fromJSON(_: any): _122.QueryGetProtoRevNumberOfTradesRequest;
                toJSON(_: _122.QueryGetProtoRevNumberOfTradesRequest): unknown;
                fromPartial(_: Partial<_122.QueryGetProtoRevNumberOfTradesRequest>): _122.QueryGetProtoRevNumberOfTradesRequest;
                fromSDK(_: _122.QueryGetProtoRevNumberOfTradesRequestSDKType): _122.QueryGetProtoRevNumberOfTradesRequest;
                toSDK(_: _122.QueryGetProtoRevNumberOfTradesRequest): _122.QueryGetProtoRevNumberOfTradesRequestSDKType;
                fromAmino(_: _122.QueryGetProtoRevNumberOfTradesRequestAmino): _122.QueryGetProtoRevNumberOfTradesRequest;
                toAmino(_: _122.QueryGetProtoRevNumberOfTradesRequest): _122.QueryGetProtoRevNumberOfTradesRequestAmino;
                fromAminoMsg(object: _122.QueryGetProtoRevNumberOfTradesRequestAminoMsg): _122.QueryGetProtoRevNumberOfTradesRequest;
                toAminoMsg(message: _122.QueryGetProtoRevNumberOfTradesRequest): _122.QueryGetProtoRevNumberOfTradesRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGetProtoRevNumberOfTradesRequestProtoMsg): _122.QueryGetProtoRevNumberOfTradesRequest;
                toProto(message: _122.QueryGetProtoRevNumberOfTradesRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGetProtoRevNumberOfTradesRequest): _122.QueryGetProtoRevNumberOfTradesRequestProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                typeUrl: string;
                encode(message: _122.QueryGetProtoRevNumberOfTradesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryGetProtoRevNumberOfTradesResponse;
                fromJSON(object: any): _122.QueryGetProtoRevNumberOfTradesResponse;
                toJSON(message: _122.QueryGetProtoRevNumberOfTradesResponse): unknown;
                fromPartial(object: Partial<_122.QueryGetProtoRevNumberOfTradesResponse>): _122.QueryGetProtoRevNumberOfTradesResponse;
                fromSDK(object: _122.QueryGetProtoRevNumberOfTradesResponseSDKType): _122.QueryGetProtoRevNumberOfTradesResponse;
                toSDK(message: _122.QueryGetProtoRevNumberOfTradesResponse): _122.QueryGetProtoRevNumberOfTradesResponseSDKType;
                fromAmino(object: _122.QueryGetProtoRevNumberOfTradesResponseAmino): _122.QueryGetProtoRevNumberOfTradesResponse;
                toAmino(message: _122.QueryGetProtoRevNumberOfTradesResponse): _122.QueryGetProtoRevNumberOfTradesResponseAmino;
                fromAminoMsg(object: _122.QueryGetProtoRevNumberOfTradesResponseAminoMsg): _122.QueryGetProtoRevNumberOfTradesResponse;
                toAminoMsg(message: _122.QueryGetProtoRevNumberOfTradesResponse): _122.QueryGetProtoRevNumberOfTradesResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGetProtoRevNumberOfTradesResponseProtoMsg): _122.QueryGetProtoRevNumberOfTradesResponse;
                toProto(message: _122.QueryGetProtoRevNumberOfTradesResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGetProtoRevNumberOfTradesResponse): _122.QueryGetProtoRevNumberOfTradesResponseProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                typeUrl: string;
                encode(message: _122.QueryGetProtoRevProfitsByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryGetProtoRevProfitsByDenomRequest;
                fromJSON(object: any): _122.QueryGetProtoRevProfitsByDenomRequest;
                toJSON(message: _122.QueryGetProtoRevProfitsByDenomRequest): unknown;
                fromPartial(object: Partial<_122.QueryGetProtoRevProfitsByDenomRequest>): _122.QueryGetProtoRevProfitsByDenomRequest;
                fromSDK(object: _122.QueryGetProtoRevProfitsByDenomRequestSDKType): _122.QueryGetProtoRevProfitsByDenomRequest;
                toSDK(message: _122.QueryGetProtoRevProfitsByDenomRequest): _122.QueryGetProtoRevProfitsByDenomRequestSDKType;
                fromAmino(object: _122.QueryGetProtoRevProfitsByDenomRequestAmino): _122.QueryGetProtoRevProfitsByDenomRequest;
                toAmino(message: _122.QueryGetProtoRevProfitsByDenomRequest): _122.QueryGetProtoRevProfitsByDenomRequestAmino;
                fromAminoMsg(object: _122.QueryGetProtoRevProfitsByDenomRequestAminoMsg): _122.QueryGetProtoRevProfitsByDenomRequest;
                toAminoMsg(message: _122.QueryGetProtoRevProfitsByDenomRequest): _122.QueryGetProtoRevProfitsByDenomRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGetProtoRevProfitsByDenomRequestProtoMsg): _122.QueryGetProtoRevProfitsByDenomRequest;
                toProto(message: _122.QueryGetProtoRevProfitsByDenomRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGetProtoRevProfitsByDenomRequest): _122.QueryGetProtoRevProfitsByDenomRequestProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                typeUrl: string;
                encode(message: _122.QueryGetProtoRevProfitsByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryGetProtoRevProfitsByDenomResponse;
                fromJSON(object: any): _122.QueryGetProtoRevProfitsByDenomResponse;
                toJSON(message: _122.QueryGetProtoRevProfitsByDenomResponse): unknown;
                fromPartial(object: Partial<_122.QueryGetProtoRevProfitsByDenomResponse>): _122.QueryGetProtoRevProfitsByDenomResponse;
                fromSDK(object: _122.QueryGetProtoRevProfitsByDenomResponseSDKType): _122.QueryGetProtoRevProfitsByDenomResponse;
                toSDK(message: _122.QueryGetProtoRevProfitsByDenomResponse): _122.QueryGetProtoRevProfitsByDenomResponseSDKType;
                fromAmino(object: _122.QueryGetProtoRevProfitsByDenomResponseAmino): _122.QueryGetProtoRevProfitsByDenomResponse;
                toAmino(message: _122.QueryGetProtoRevProfitsByDenomResponse): _122.QueryGetProtoRevProfitsByDenomResponseAmino;
                fromAminoMsg(object: _122.QueryGetProtoRevProfitsByDenomResponseAminoMsg): _122.QueryGetProtoRevProfitsByDenomResponse;
                toAminoMsg(message: _122.QueryGetProtoRevProfitsByDenomResponse): _122.QueryGetProtoRevProfitsByDenomResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGetProtoRevProfitsByDenomResponseProtoMsg): _122.QueryGetProtoRevProfitsByDenomResponse;
                toProto(message: _122.QueryGetProtoRevProfitsByDenomResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGetProtoRevProfitsByDenomResponse): _122.QueryGetProtoRevProfitsByDenomResponseProtoMsg;
            };
            QueryGetProtoRevAllProfitsRequest: {
                typeUrl: string;
                encode(_: _122.QueryGetProtoRevAllProfitsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryGetProtoRevAllProfitsRequest;
                fromJSON(_: any): _122.QueryGetProtoRevAllProfitsRequest;
                toJSON(_: _122.QueryGetProtoRevAllProfitsRequest): unknown;
                fromPartial(_: Partial<_122.QueryGetProtoRevAllProfitsRequest>): _122.QueryGetProtoRevAllProfitsRequest;
                fromSDK(_: _122.QueryGetProtoRevAllProfitsRequestSDKType): _122.QueryGetProtoRevAllProfitsRequest;
                toSDK(_: _122.QueryGetProtoRevAllProfitsRequest): _122.QueryGetProtoRevAllProfitsRequestSDKType;
                fromAmino(_: _122.QueryGetProtoRevAllProfitsRequestAmino): _122.QueryGetProtoRevAllProfitsRequest;
                toAmino(_: _122.QueryGetProtoRevAllProfitsRequest): _122.QueryGetProtoRevAllProfitsRequestAmino;
                fromAminoMsg(object: _122.QueryGetProtoRevAllProfitsRequestAminoMsg): _122.QueryGetProtoRevAllProfitsRequest;
                toAminoMsg(message: _122.QueryGetProtoRevAllProfitsRequest): _122.QueryGetProtoRevAllProfitsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGetProtoRevAllProfitsRequestProtoMsg): _122.QueryGetProtoRevAllProfitsRequest;
                toProto(message: _122.QueryGetProtoRevAllProfitsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGetProtoRevAllProfitsRequest): _122.QueryGetProtoRevAllProfitsRequestProtoMsg;
            };
            QueryGetProtoRevAllProfitsResponse: {
                typeUrl: string;
                encode(message: _122.QueryGetProtoRevAllProfitsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryGetProtoRevAllProfitsResponse;
                fromJSON(object: any): _122.QueryGetProtoRevAllProfitsResponse;
                toJSON(message: _122.QueryGetProtoRevAllProfitsResponse): unknown;
                fromPartial(object: Partial<_122.QueryGetProtoRevAllProfitsResponse>): _122.QueryGetProtoRevAllProfitsResponse;
                fromSDK(object: _122.QueryGetProtoRevAllProfitsResponseSDKType): _122.QueryGetProtoRevAllProfitsResponse;
                toSDK(message: _122.QueryGetProtoRevAllProfitsResponse): _122.QueryGetProtoRevAllProfitsResponseSDKType;
                fromAmino(object: _122.QueryGetProtoRevAllProfitsResponseAmino): _122.QueryGetProtoRevAllProfitsResponse;
                toAmino(message: _122.QueryGetProtoRevAllProfitsResponse): _122.QueryGetProtoRevAllProfitsResponseAmino;
                fromAminoMsg(object: _122.QueryGetProtoRevAllProfitsResponseAminoMsg): _122.QueryGetProtoRevAllProfitsResponse;
                toAminoMsg(message: _122.QueryGetProtoRevAllProfitsResponse): _122.QueryGetProtoRevAllProfitsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGetProtoRevAllProfitsResponseProtoMsg): _122.QueryGetProtoRevAllProfitsResponse;
                toProto(message: _122.QueryGetProtoRevAllProfitsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGetProtoRevAllProfitsResponse): _122.QueryGetProtoRevAllProfitsResponseProtoMsg;
            };
            QueryGetProtoRevStatisticsByPoolRequest: {
                typeUrl: string;
                encode(message: _122.QueryGetProtoRevStatisticsByPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryGetProtoRevStatisticsByPoolRequest;
                fromJSON(object: any): _122.QueryGetProtoRevStatisticsByPoolRequest;
                toJSON(message: _122.QueryGetProtoRevStatisticsByPoolRequest): unknown;
                fromPartial(object: Partial<_122.QueryGetProtoRevStatisticsByPoolRequest>): _122.QueryGetProtoRevStatisticsByPoolRequest;
                fromSDK(object: _122.QueryGetProtoRevStatisticsByPoolRequestSDKType): _122.QueryGetProtoRevStatisticsByPoolRequest;
                toSDK(message: _122.QueryGetProtoRevStatisticsByPoolRequest): _122.QueryGetProtoRevStatisticsByPoolRequestSDKType;
                fromAmino(object: _122.QueryGetProtoRevStatisticsByPoolRequestAmino): _122.QueryGetProtoRevStatisticsByPoolRequest;
                toAmino(message: _122.QueryGetProtoRevStatisticsByPoolRequest): _122.QueryGetProtoRevStatisticsByPoolRequestAmino;
                fromAminoMsg(object: _122.QueryGetProtoRevStatisticsByPoolRequestAminoMsg): _122.QueryGetProtoRevStatisticsByPoolRequest;
                toAminoMsg(message: _122.QueryGetProtoRevStatisticsByPoolRequest): _122.QueryGetProtoRevStatisticsByPoolRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGetProtoRevStatisticsByPoolRequestProtoMsg): _122.QueryGetProtoRevStatisticsByPoolRequest;
                toProto(message: _122.QueryGetProtoRevStatisticsByPoolRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGetProtoRevStatisticsByPoolRequest): _122.QueryGetProtoRevStatisticsByPoolRequestProtoMsg;
            };
            QueryGetProtoRevStatisticsByPoolResponse: {
                typeUrl: string;
                encode(message: _122.QueryGetProtoRevStatisticsByPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryGetProtoRevStatisticsByPoolResponse;
                fromJSON(object: any): _122.QueryGetProtoRevStatisticsByPoolResponse;
                toJSON(message: _122.QueryGetProtoRevStatisticsByPoolResponse): unknown;
                fromPartial(object: Partial<_122.QueryGetProtoRevStatisticsByPoolResponse>): _122.QueryGetProtoRevStatisticsByPoolResponse;
                fromSDK(object: _122.QueryGetProtoRevStatisticsByPoolResponseSDKType): _122.QueryGetProtoRevStatisticsByPoolResponse;
                toSDK(message: _122.QueryGetProtoRevStatisticsByPoolResponse): _122.QueryGetProtoRevStatisticsByPoolResponseSDKType;
                fromAmino(object: _122.QueryGetProtoRevStatisticsByPoolResponseAmino): _122.QueryGetProtoRevStatisticsByPoolResponse;
                toAmino(message: _122.QueryGetProtoRevStatisticsByPoolResponse): _122.QueryGetProtoRevStatisticsByPoolResponseAmino;
                fromAminoMsg(object: _122.QueryGetProtoRevStatisticsByPoolResponseAminoMsg): _122.QueryGetProtoRevStatisticsByPoolResponse;
                toAminoMsg(message: _122.QueryGetProtoRevStatisticsByPoolResponse): _122.QueryGetProtoRevStatisticsByPoolResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGetProtoRevStatisticsByPoolResponseProtoMsg): _122.QueryGetProtoRevStatisticsByPoolResponse;
                toProto(message: _122.QueryGetProtoRevStatisticsByPoolResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGetProtoRevStatisticsByPoolResponse): _122.QueryGetProtoRevStatisticsByPoolResponseProtoMsg;
            };
            QueryGetProtoRevAllStatisticsRequest: {
                typeUrl: string;
                encode(_: _122.QueryGetProtoRevAllStatisticsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryGetProtoRevAllStatisticsRequest;
                fromJSON(_: any): _122.QueryGetProtoRevAllStatisticsRequest;
                toJSON(_: _122.QueryGetProtoRevAllStatisticsRequest): unknown;
                fromPartial(_: Partial<_122.QueryGetProtoRevAllStatisticsRequest>): _122.QueryGetProtoRevAllStatisticsRequest;
                fromSDK(_: _122.QueryGetProtoRevAllStatisticsRequestSDKType): _122.QueryGetProtoRevAllStatisticsRequest;
                toSDK(_: _122.QueryGetProtoRevAllStatisticsRequest): _122.QueryGetProtoRevAllStatisticsRequestSDKType;
                fromAmino(_: _122.QueryGetProtoRevAllStatisticsRequestAmino): _122.QueryGetProtoRevAllStatisticsRequest;
                toAmino(_: _122.QueryGetProtoRevAllStatisticsRequest): _122.QueryGetProtoRevAllStatisticsRequestAmino;
                fromAminoMsg(object: _122.QueryGetProtoRevAllStatisticsRequestAminoMsg): _122.QueryGetProtoRevAllStatisticsRequest;
                toAminoMsg(message: _122.QueryGetProtoRevAllStatisticsRequest): _122.QueryGetProtoRevAllStatisticsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGetProtoRevAllStatisticsRequestProtoMsg): _122.QueryGetProtoRevAllStatisticsRequest;
                toProto(message: _122.QueryGetProtoRevAllStatisticsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGetProtoRevAllStatisticsRequest): _122.QueryGetProtoRevAllStatisticsRequestProtoMsg;
            };
            QueryGetProtoRevAllStatisticsResponse: {
                typeUrl: string;
                encode(message: _122.QueryGetProtoRevAllStatisticsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryGetProtoRevAllStatisticsResponse;
                fromJSON(object: any): _122.QueryGetProtoRevAllStatisticsResponse;
                toJSON(message: _122.QueryGetProtoRevAllStatisticsResponse): unknown;
                fromPartial(object: Partial<_122.QueryGetProtoRevAllStatisticsResponse>): _122.QueryGetProtoRevAllStatisticsResponse;
                fromSDK(object: _122.QueryGetProtoRevAllStatisticsResponseSDKType): _122.QueryGetProtoRevAllStatisticsResponse;
                toSDK(message: _122.QueryGetProtoRevAllStatisticsResponse): _122.QueryGetProtoRevAllStatisticsResponseSDKType;
                fromAmino(object: _122.QueryGetProtoRevAllStatisticsResponseAmino): _122.QueryGetProtoRevAllStatisticsResponse;
                toAmino(message: _122.QueryGetProtoRevAllStatisticsResponse): _122.QueryGetProtoRevAllStatisticsResponseAmino;
                fromAminoMsg(object: _122.QueryGetProtoRevAllStatisticsResponseAminoMsg): _122.QueryGetProtoRevAllStatisticsResponse;
                toAminoMsg(message: _122.QueryGetProtoRevAllStatisticsResponse): _122.QueryGetProtoRevAllStatisticsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGetProtoRevAllStatisticsResponseProtoMsg): _122.QueryGetProtoRevAllStatisticsResponse;
                toProto(message: _122.QueryGetProtoRevAllStatisticsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGetProtoRevAllStatisticsResponse): _122.QueryGetProtoRevAllStatisticsResponseProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                typeUrl: string;
                encode(_: _122.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromJSON(_: any): _122.QueryGetProtoRevTokenPairArbRoutesRequest;
                toJSON(_: _122.QueryGetProtoRevTokenPairArbRoutesRequest): unknown;
                fromPartial(_: Partial<_122.QueryGetProtoRevTokenPairArbRoutesRequest>): _122.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromSDK(_: _122.QueryGetProtoRevTokenPairArbRoutesRequestSDKType): _122.QueryGetProtoRevTokenPairArbRoutesRequest;
                toSDK(_: _122.QueryGetProtoRevTokenPairArbRoutesRequest): _122.QueryGetProtoRevTokenPairArbRoutesRequestSDKType;
                fromAmino(_: _122.QueryGetProtoRevTokenPairArbRoutesRequestAmino): _122.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAmino(_: _122.QueryGetProtoRevTokenPairArbRoutesRequest): _122.QueryGetProtoRevTokenPairArbRoutesRequestAmino;
                fromAminoMsg(object: _122.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): _122.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAminoMsg(message: _122.QueryGetProtoRevTokenPairArbRoutesRequest): _122.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): _122.QueryGetProtoRevTokenPairArbRoutesRequest;
                toProto(message: _122.QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGetProtoRevTokenPairArbRoutesRequest): _122.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                typeUrl: string;
                encode(message: _122.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromJSON(object: any): _122.QueryGetProtoRevTokenPairArbRoutesResponse;
                toJSON(message: _122.QueryGetProtoRevTokenPairArbRoutesResponse): unknown;
                fromPartial(object: Partial<_122.QueryGetProtoRevTokenPairArbRoutesResponse>): _122.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromSDK(object: _122.QueryGetProtoRevTokenPairArbRoutesResponseSDKType): _122.QueryGetProtoRevTokenPairArbRoutesResponse;
                toSDK(message: _122.QueryGetProtoRevTokenPairArbRoutesResponse): _122.QueryGetProtoRevTokenPairArbRoutesResponseSDKType;
                fromAmino(object: _122.QueryGetProtoRevTokenPairArbRoutesResponseAmino): _122.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAmino(message: _122.QueryGetProtoRevTokenPairArbRoutesResponse): _122.QueryGetProtoRevTokenPairArbRoutesResponseAmino;
                fromAminoMsg(object: _122.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): _122.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAminoMsg(message: _122.QueryGetProtoRevTokenPairArbRoutesResponse): _122.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): _122.QueryGetProtoRevTokenPairArbRoutesResponse;
                toProto(message: _122.QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGetProtoRevTokenPairArbRoutesResponse): _122.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg;
            };
            TokenPairArbRoutes: {
                typeUrl: string;
                encode(message: _121.TokenPairArbRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.TokenPairArbRoutes;
                fromJSON(object: any): _121.TokenPairArbRoutes;
                toJSON(message: _121.TokenPairArbRoutes): unknown;
                fromPartial(object: Partial<_121.TokenPairArbRoutes>): _121.TokenPairArbRoutes;
                fromSDK(object: _121.TokenPairArbRoutesSDKType): _121.TokenPairArbRoutes;
                toSDK(message: _121.TokenPairArbRoutes): _121.TokenPairArbRoutesSDKType;
                fromAmino(object: _121.TokenPairArbRoutesAmino): _121.TokenPairArbRoutes;
                toAmino(message: _121.TokenPairArbRoutes): _121.TokenPairArbRoutesAmino;
                fromAminoMsg(object: _121.TokenPairArbRoutesAminoMsg): _121.TokenPairArbRoutes;
                toAminoMsg(message: _121.TokenPairArbRoutes): _121.TokenPairArbRoutesAminoMsg;
                fromProtoMsg(message: _121.TokenPairArbRoutesProtoMsg): _121.TokenPairArbRoutes;
                toProto(message: _121.TokenPairArbRoutes): Uint8Array;
                toProtoMsg(message: _121.TokenPairArbRoutes): _121.TokenPairArbRoutesProtoMsg;
            };
            Route: {
                typeUrl: string;
                encode(message: _121.Route, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.Route;
                fromJSON(object: any): _121.Route;
                toJSON(message: _121.Route): unknown;
                fromPartial(object: Partial<_121.Route>): _121.Route;
                fromSDK(object: _121.RouteSDKType): _121.Route;
                toSDK(message: _121.Route): _121.RouteSDKType;
                fromAmino(object: _121.RouteAmino): _121.Route;
                toAmino(message: _121.Route): _121.RouteAmino;
                fromAminoMsg(object: _121.RouteAminoMsg): _121.Route;
                toAminoMsg(message: _121.Route): _121.RouteAminoMsg;
                fromProtoMsg(message: _121.RouteProtoMsg): _121.Route;
                toProto(message: _121.Route): Uint8Array;
                toProtoMsg(message: _121.Route): _121.RouteProtoMsg;
            };
            Trade: {
                typeUrl: string;
                encode(message: _121.Trade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.Trade;
                fromJSON(object: any): _121.Trade;
                toJSON(message: _121.Trade): unknown;
                fromPartial(object: Partial<_121.Trade>): _121.Trade;
                fromSDK(object: _121.TradeSDKType): _121.Trade;
                toSDK(message: _121.Trade): _121.TradeSDKType;
                fromAmino(object: _121.TradeAmino): _121.Trade;
                toAmino(message: _121.Trade): _121.TradeAmino;
                fromAminoMsg(object: _121.TradeAminoMsg): _121.Trade;
                toAminoMsg(message: _121.Trade): _121.TradeAminoMsg;
                fromProtoMsg(message: _121.TradeProtoMsg): _121.Trade;
                toProto(message: _121.Trade): Uint8Array;
                toProtoMsg(message: _121.Trade): _121.TradeProtoMsg;
            };
            PoolStatistics: {
                typeUrl: string;
                encode(message: _121.PoolStatistics, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.PoolStatistics;
                fromJSON(object: any): _121.PoolStatistics;
                toJSON(message: _121.PoolStatistics): unknown;
                fromPartial(object: Partial<_121.PoolStatistics>): _121.PoolStatistics;
                fromSDK(object: _121.PoolStatisticsSDKType): _121.PoolStatistics;
                toSDK(message: _121.PoolStatistics): _121.PoolStatisticsSDKType;
                fromAmino(object: _121.PoolStatisticsAmino): _121.PoolStatistics;
                toAmino(message: _121.PoolStatistics): _121.PoolStatisticsAmino;
                fromAminoMsg(object: _121.PoolStatisticsAminoMsg): _121.PoolStatistics;
                toAminoMsg(message: _121.PoolStatistics): _121.PoolStatisticsAminoMsg;
                fromProtoMsg(message: _121.PoolStatisticsProtoMsg): _121.PoolStatistics;
                toProto(message: _121.PoolStatistics): Uint8Array;
                toProtoMsg(message: _121.PoolStatistics): _121.PoolStatisticsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _120.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.Params;
                fromJSON(object: any): _120.Params;
                toJSON(message: _120.Params): unknown;
                fromPartial(object: Partial<_120.Params>): _120.Params;
                fromSDK(object: _120.ParamsSDKType): _120.Params;
                toSDK(message: _120.Params): _120.ParamsSDKType;
                fromAmino(object: _120.ParamsAmino): _120.Params;
                toAmino(message: _120.Params): _120.ParamsAmino;
                fromAminoMsg(object: _120.ParamsAminoMsg): _120.Params;
                toAminoMsg(message: _120.Params): _120.ParamsAminoMsg;
                fromProtoMsg(message: _120.ParamsProtoMsg): _120.Params;
                toProto(message: _120.Params): Uint8Array;
                toProtoMsg(message: _120.Params): _120.ParamsProtoMsg;
            };
            SetProtoRevEnabledProposal: {
                typeUrl: string;
                encode(message: _119.SetProtoRevEnabledProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.SetProtoRevEnabledProposal;
                fromJSON(object: any): _119.SetProtoRevEnabledProposal;
                toJSON(message: _119.SetProtoRevEnabledProposal): unknown;
                fromPartial(object: Partial<_119.SetProtoRevEnabledProposal>): _119.SetProtoRevEnabledProposal;
                fromSDK(object: _119.SetProtoRevEnabledProposalSDKType): _119.SetProtoRevEnabledProposal;
                toSDK(message: _119.SetProtoRevEnabledProposal): _119.SetProtoRevEnabledProposalSDKType;
                fromAmino(object: _119.SetProtoRevEnabledProposalAmino): _119.SetProtoRevEnabledProposal;
                toAmino(message: _119.SetProtoRevEnabledProposal): _119.SetProtoRevEnabledProposalAmino;
                fromAminoMsg(object: _119.SetProtoRevEnabledProposalAminoMsg): _119.SetProtoRevEnabledProposal;
                toAminoMsg(message: _119.SetProtoRevEnabledProposal): _119.SetProtoRevEnabledProposalAminoMsg;
                fromProtoMsg(message: _119.SetProtoRevEnabledProposalProtoMsg): _119.SetProtoRevEnabledProposal;
                toProto(message: _119.SetProtoRevEnabledProposal): Uint8Array;
                toProtoMsg(message: _119.SetProtoRevEnabledProposal): _119.SetProtoRevEnabledProposalProtoMsg;
            };
            SetProtoRevAdminAccountProposal: {
                typeUrl: string;
                encode(message: _119.SetProtoRevAdminAccountProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.SetProtoRevAdminAccountProposal;
                fromJSON(object: any): _119.SetProtoRevAdminAccountProposal;
                toJSON(message: _119.SetProtoRevAdminAccountProposal): unknown;
                fromPartial(object: Partial<_119.SetProtoRevAdminAccountProposal>): _119.SetProtoRevAdminAccountProposal;
                fromSDK(object: _119.SetProtoRevAdminAccountProposalSDKType): _119.SetProtoRevAdminAccountProposal;
                toSDK(message: _119.SetProtoRevAdminAccountProposal): _119.SetProtoRevAdminAccountProposalSDKType;
                fromAmino(object: _119.SetProtoRevAdminAccountProposalAmino): _119.SetProtoRevAdminAccountProposal;
                toAmino(message: _119.SetProtoRevAdminAccountProposal): _119.SetProtoRevAdminAccountProposalAmino;
                fromAminoMsg(object: _119.SetProtoRevAdminAccountProposalAminoMsg): _119.SetProtoRevAdminAccountProposal;
                toAminoMsg(message: _119.SetProtoRevAdminAccountProposal): _119.SetProtoRevAdminAccountProposalAminoMsg;
                fromProtoMsg(message: _119.SetProtoRevAdminAccountProposalProtoMsg): _119.SetProtoRevAdminAccountProposal;
                toProto(message: _119.SetProtoRevAdminAccountProposal): Uint8Array;
                toProtoMsg(message: _119.SetProtoRevAdminAccountProposal): _119.SetProtoRevAdminAccountProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _118.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.GenesisState;
                fromJSON(object: any): _118.GenesisState;
                toJSON(message: _118.GenesisState): unknown;
                fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
                fromSDK(object: _118.GenesisStateSDKType): _118.GenesisState;
                toSDK(message: _118.GenesisState): _118.GenesisStateSDKType;
                fromAmino(object: _118.GenesisStateAmino): _118.GenesisState;
                toAmino(message: _118.GenesisState): _118.GenesisStateAmino;
                fromAminoMsg(object: _118.GenesisStateAminoMsg): _118.GenesisState;
                toAminoMsg(message: _118.GenesisState): _118.GenesisStateAminoMsg;
                fromProtoMsg(message: _118.GenesisStateProtoMsg): _118.GenesisState;
                toProto(message: _118.GenesisState): Uint8Array;
                toProtoMsg(message: _118.GenesisState): _118.GenesisStateProtoMsg;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                typeUrl: string;
                encode(message: _124.Node, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Node;
                fromJSON(object: any): _124.Node;
                toJSON(message: _124.Node): unknown;
                fromPartial(object: Partial<_124.Node>): _124.Node;
                fromSDK(object: _124.NodeSDKType): _124.Node;
                toSDK(message: _124.Node): _124.NodeSDKType;
                fromAmino(object: _124.NodeAmino): _124.Node;
                toAmino(message: _124.Node): _124.NodeAmino;
                fromAminoMsg(object: _124.NodeAminoMsg): _124.Node;
                toAminoMsg(message: _124.Node): _124.NodeAminoMsg;
                fromProtoMsg(message: _124.NodeProtoMsg): _124.Node;
                toProto(message: _124.Node): Uint8Array;
                toProtoMsg(message: _124.Node): _124.NodeProtoMsg;
            };
            Child: {
                typeUrl: string;
                encode(message: _124.Child, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Child;
                fromJSON(object: any): _124.Child;
                toJSON(message: _124.Child): unknown;
                fromPartial(object: Partial<_124.Child>): _124.Child;
                fromSDK(object: _124.ChildSDKType): _124.Child;
                toSDK(message: _124.Child): _124.ChildSDKType;
                fromAmino(object: _124.ChildAmino): _124.Child;
                toAmino(message: _124.Child): _124.ChildAmino;
                fromAminoMsg(object: _124.ChildAminoMsg): _124.Child;
                toAminoMsg(message: _124.Child): _124.ChildAminoMsg;
                fromProtoMsg(message: _124.ChildProtoMsg): _124.Child;
                toProto(message: _124.Child): Uint8Array;
                toProtoMsg(message: _124.Child): _124.ChildProtoMsg;
            };
            Leaf: {
                typeUrl: string;
                encode(message: _124.Leaf, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Leaf;
                fromJSON(object: any): _124.Leaf;
                toJSON(message: _124.Leaf): unknown;
                fromPartial(object: Partial<_124.Leaf>): _124.Leaf;
                fromSDK(object: _124.LeafSDKType): _124.Leaf;
                toSDK(message: _124.Leaf): _124.LeafSDKType;
                fromAmino(object: _124.LeafAmino): _124.Leaf;
                toAmino(message: _124.Leaf): _124.LeafAmino;
                fromAminoMsg(object: _124.LeafAminoMsg): _124.Leaf;
                toAminoMsg(message: _124.Leaf): _124.LeafAminoMsg;
                fromProtoMsg(message: _124.LeafProtoMsg): _124.Leaf;
                toProto(message: _124.Leaf): Uint8Array;
                toProtoMsg(message: _124.Leaf): _124.LeafProtoMsg;
            };
        };
    }
    const superfluid: {
        Msg: typeof _292.Msg;
        Query: typeof _280.Query;
        QueryClientImpl: typeof _280.QueryClientImpl;
        LCDQueryClient: typeof _264.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _129.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _129.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _129.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _129.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _129.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _129.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _129.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _129.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _129.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _129.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _129.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _129.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _129.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _129.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _129.MsgUnPoolWhitelistedPool;
                };
            };
            toJSON: {
                superfluidDelegate(value: _129.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _129.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _129.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _129.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                unPoolWhitelistedPool(value: _129.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _129.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _129.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _129.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _129.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _129.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _129.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _129.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _129.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _129.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _129.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _129.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _129.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _129.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _129.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _129.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _129.MsgSuperfluidDelegate) => _129.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _129.MsgSuperfluidDelegateAmino) => _129.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _129.MsgSuperfluidUndelegate) => _129.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _129.MsgSuperfluidUndelegateAmino) => _129.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _129.MsgSuperfluidUnbondLock) => _129.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _129.MsgSuperfluidUnbondLockAmino) => _129.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _129.MsgLockAndSuperfluidDelegate) => _129.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _129.MsgLockAndSuperfluidDelegateAmino) => _129.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _129.MsgUnPoolWhitelistedPool) => _129.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _129.MsgUnPoolWhitelistedPoolAmino) => _129.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _129.MsgSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MsgSuperfluidDelegate;
            fromJSON(object: any): _129.MsgSuperfluidDelegate;
            toJSON(message: _129.MsgSuperfluidDelegate): unknown;
            fromPartial(object: Partial<_129.MsgSuperfluidDelegate>): _129.MsgSuperfluidDelegate;
            fromSDK(object: _129.MsgSuperfluidDelegateSDKType): _129.MsgSuperfluidDelegate;
            toSDK(message: _129.MsgSuperfluidDelegate): _129.MsgSuperfluidDelegateSDKType;
            fromAmino(object: _129.MsgSuperfluidDelegateAmino): _129.MsgSuperfluidDelegate;
            toAmino(message: _129.MsgSuperfluidDelegate): _129.MsgSuperfluidDelegateAmino;
            fromAminoMsg(object: _129.MsgSuperfluidDelegateAminoMsg): _129.MsgSuperfluidDelegate;
            toAminoMsg(message: _129.MsgSuperfluidDelegate): _129.MsgSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _129.MsgSuperfluidDelegateProtoMsg): _129.MsgSuperfluidDelegate;
            toProto(message: _129.MsgSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _129.MsgSuperfluidDelegate): _129.MsgSuperfluidDelegateProtoMsg;
        };
        MsgSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(_: _129.MsgSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _129.MsgSuperfluidDelegateResponse;
            toJSON(_: _129.MsgSuperfluidDelegateResponse): unknown;
            fromPartial(_: Partial<_129.MsgSuperfluidDelegateResponse>): _129.MsgSuperfluidDelegateResponse;
            fromSDK(_: _129.MsgSuperfluidDelegateResponseSDKType): _129.MsgSuperfluidDelegateResponse;
            toSDK(_: _129.MsgSuperfluidDelegateResponse): _129.MsgSuperfluidDelegateResponseSDKType;
            fromAmino(_: _129.MsgSuperfluidDelegateResponseAmino): _129.MsgSuperfluidDelegateResponse;
            toAmino(_: _129.MsgSuperfluidDelegateResponse): _129.MsgSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _129.MsgSuperfluidDelegateResponseAminoMsg): _129.MsgSuperfluidDelegateResponse;
            toAminoMsg(message: _129.MsgSuperfluidDelegateResponse): _129.MsgSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _129.MsgSuperfluidDelegateResponseProtoMsg): _129.MsgSuperfluidDelegateResponse;
            toProto(message: _129.MsgSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _129.MsgSuperfluidDelegateResponse): _129.MsgSuperfluidDelegateResponseProtoMsg;
        };
        MsgSuperfluidUndelegate: {
            typeUrl: string;
            encode(message: _129.MsgSuperfluidUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MsgSuperfluidUndelegate;
            fromJSON(object: any): _129.MsgSuperfluidUndelegate;
            toJSON(message: _129.MsgSuperfluidUndelegate): unknown;
            fromPartial(object: Partial<_129.MsgSuperfluidUndelegate>): _129.MsgSuperfluidUndelegate;
            fromSDK(object: _129.MsgSuperfluidUndelegateSDKType): _129.MsgSuperfluidUndelegate;
            toSDK(message: _129.MsgSuperfluidUndelegate): _129.MsgSuperfluidUndelegateSDKType;
            fromAmino(object: _129.MsgSuperfluidUndelegateAmino): _129.MsgSuperfluidUndelegate;
            toAmino(message: _129.MsgSuperfluidUndelegate): _129.MsgSuperfluidUndelegateAmino;
            fromAminoMsg(object: _129.MsgSuperfluidUndelegateAminoMsg): _129.MsgSuperfluidUndelegate;
            toAminoMsg(message: _129.MsgSuperfluidUndelegate): _129.MsgSuperfluidUndelegateAminoMsg;
            fromProtoMsg(message: _129.MsgSuperfluidUndelegateProtoMsg): _129.MsgSuperfluidUndelegate;
            toProto(message: _129.MsgSuperfluidUndelegate): Uint8Array;
            toProtoMsg(message: _129.MsgSuperfluidUndelegate): _129.MsgSuperfluidUndelegateProtoMsg;
        };
        MsgSuperfluidUndelegateResponse: {
            typeUrl: string;
            encode(_: _129.MsgSuperfluidUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _129.MsgSuperfluidUndelegateResponse;
            toJSON(_: _129.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial(_: Partial<_129.MsgSuperfluidUndelegateResponse>): _129.MsgSuperfluidUndelegateResponse;
            fromSDK(_: _129.MsgSuperfluidUndelegateResponseSDKType): _129.MsgSuperfluidUndelegateResponse;
            toSDK(_: _129.MsgSuperfluidUndelegateResponse): _129.MsgSuperfluidUndelegateResponseSDKType;
            fromAmino(_: _129.MsgSuperfluidUndelegateResponseAmino): _129.MsgSuperfluidUndelegateResponse;
            toAmino(_: _129.MsgSuperfluidUndelegateResponse): _129.MsgSuperfluidUndelegateResponseAmino;
            fromAminoMsg(object: _129.MsgSuperfluidUndelegateResponseAminoMsg): _129.MsgSuperfluidUndelegateResponse;
            toAminoMsg(message: _129.MsgSuperfluidUndelegateResponse): _129.MsgSuperfluidUndelegateResponseAminoMsg;
            fromProtoMsg(message: _129.MsgSuperfluidUndelegateResponseProtoMsg): _129.MsgSuperfluidUndelegateResponse;
            toProto(message: _129.MsgSuperfluidUndelegateResponse): Uint8Array;
            toProtoMsg(message: _129.MsgSuperfluidUndelegateResponse): _129.MsgSuperfluidUndelegateResponseProtoMsg;
        };
        MsgSuperfluidUnbondLock: {
            typeUrl: string;
            encode(message: _129.MsgSuperfluidUnbondLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _129.MsgSuperfluidUnbondLock;
            toJSON(message: _129.MsgSuperfluidUnbondLock): unknown;
            fromPartial(object: Partial<_129.MsgSuperfluidUnbondLock>): _129.MsgSuperfluidUnbondLock;
            fromSDK(object: _129.MsgSuperfluidUnbondLockSDKType): _129.MsgSuperfluidUnbondLock;
            toSDK(message: _129.MsgSuperfluidUnbondLock): _129.MsgSuperfluidUnbondLockSDKType;
            fromAmino(object: _129.MsgSuperfluidUnbondLockAmino): _129.MsgSuperfluidUnbondLock;
            toAmino(message: _129.MsgSuperfluidUnbondLock): _129.MsgSuperfluidUnbondLockAmino;
            fromAminoMsg(object: _129.MsgSuperfluidUnbondLockAminoMsg): _129.MsgSuperfluidUnbondLock;
            toAminoMsg(message: _129.MsgSuperfluidUnbondLock): _129.MsgSuperfluidUnbondLockAminoMsg;
            fromProtoMsg(message: _129.MsgSuperfluidUnbondLockProtoMsg): _129.MsgSuperfluidUnbondLock;
            toProto(message: _129.MsgSuperfluidUnbondLock): Uint8Array;
            toProtoMsg(message: _129.MsgSuperfluidUnbondLock): _129.MsgSuperfluidUnbondLockProtoMsg;
        };
        MsgSuperfluidUnbondLockResponse: {
            typeUrl: string;
            encode(_: _129.MsgSuperfluidUnbondLockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _129.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _129.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial(_: Partial<_129.MsgSuperfluidUnbondLockResponse>): _129.MsgSuperfluidUnbondLockResponse;
            fromSDK(_: _129.MsgSuperfluidUnbondLockResponseSDKType): _129.MsgSuperfluidUnbondLockResponse;
            toSDK(_: _129.MsgSuperfluidUnbondLockResponse): _129.MsgSuperfluidUnbondLockResponseSDKType;
            fromAmino(_: _129.MsgSuperfluidUnbondLockResponseAmino): _129.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _129.MsgSuperfluidUnbondLockResponse): _129.MsgSuperfluidUnbondLockResponseAmino;
            fromAminoMsg(object: _129.MsgSuperfluidUnbondLockResponseAminoMsg): _129.MsgSuperfluidUnbondLockResponse;
            toAminoMsg(message: _129.MsgSuperfluidUnbondLockResponse): _129.MsgSuperfluidUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _129.MsgSuperfluidUnbondLockResponseProtoMsg): _129.MsgSuperfluidUnbondLockResponse;
            toProto(message: _129.MsgSuperfluidUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _129.MsgSuperfluidUnbondLockResponse): _129.MsgSuperfluidUnbondLockResponseProtoMsg;
        };
        MsgLockAndSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _129.MsgLockAndSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _129.MsgLockAndSuperfluidDelegate;
            toJSON(message: _129.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial(object: Partial<_129.MsgLockAndSuperfluidDelegate>): _129.MsgLockAndSuperfluidDelegate;
            fromSDK(object: _129.MsgLockAndSuperfluidDelegateSDKType): _129.MsgLockAndSuperfluidDelegate;
            toSDK(message: _129.MsgLockAndSuperfluidDelegate): _129.MsgLockAndSuperfluidDelegateSDKType;
            fromAmino(object: _129.MsgLockAndSuperfluidDelegateAmino): _129.MsgLockAndSuperfluidDelegate;
            toAmino(message: _129.MsgLockAndSuperfluidDelegate): _129.MsgLockAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _129.MsgLockAndSuperfluidDelegateAminoMsg): _129.MsgLockAndSuperfluidDelegate;
            toAminoMsg(message: _129.MsgLockAndSuperfluidDelegate): _129.MsgLockAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _129.MsgLockAndSuperfluidDelegateProtoMsg): _129.MsgLockAndSuperfluidDelegate;
            toProto(message: _129.MsgLockAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _129.MsgLockAndSuperfluidDelegate): _129.MsgLockAndSuperfluidDelegateProtoMsg;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(message: _129.MsgLockAndSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _129.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _129.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial(object: Partial<_129.MsgLockAndSuperfluidDelegateResponse>): _129.MsgLockAndSuperfluidDelegateResponse;
            fromSDK(object: _129.MsgLockAndSuperfluidDelegateResponseSDKType): _129.MsgLockAndSuperfluidDelegateResponse;
            toSDK(message: _129.MsgLockAndSuperfluidDelegateResponse): _129.MsgLockAndSuperfluidDelegateResponseSDKType;
            fromAmino(object: _129.MsgLockAndSuperfluidDelegateResponseAmino): _129.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _129.MsgLockAndSuperfluidDelegateResponse): _129.MsgLockAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _129.MsgLockAndSuperfluidDelegateResponseAminoMsg): _129.MsgLockAndSuperfluidDelegateResponse;
            toAminoMsg(message: _129.MsgLockAndSuperfluidDelegateResponse): _129.MsgLockAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _129.MsgLockAndSuperfluidDelegateResponseProtoMsg): _129.MsgLockAndSuperfluidDelegateResponse;
            toProto(message: _129.MsgLockAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _129.MsgLockAndSuperfluidDelegateResponse): _129.MsgLockAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgUnPoolWhitelistedPool: {
            typeUrl: string;
            encode(message: _129.MsgUnPoolWhitelistedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MsgUnPoolWhitelistedPool;
            fromJSON(object: any): _129.MsgUnPoolWhitelistedPool;
            toJSON(message: _129.MsgUnPoolWhitelistedPool): unknown;
            fromPartial(object: Partial<_129.MsgUnPoolWhitelistedPool>): _129.MsgUnPoolWhitelistedPool;
            fromSDK(object: _129.MsgUnPoolWhitelistedPoolSDKType): _129.MsgUnPoolWhitelistedPool;
            toSDK(message: _129.MsgUnPoolWhitelistedPool): _129.MsgUnPoolWhitelistedPoolSDKType;
            fromAmino(object: _129.MsgUnPoolWhitelistedPoolAmino): _129.MsgUnPoolWhitelistedPool;
            toAmino(message: _129.MsgUnPoolWhitelistedPool): _129.MsgUnPoolWhitelistedPoolAmino;
            fromAminoMsg(object: _129.MsgUnPoolWhitelistedPoolAminoMsg): _129.MsgUnPoolWhitelistedPool;
            toAminoMsg(message: _129.MsgUnPoolWhitelistedPool): _129.MsgUnPoolWhitelistedPoolAminoMsg;
            fromProtoMsg(message: _129.MsgUnPoolWhitelistedPoolProtoMsg): _129.MsgUnPoolWhitelistedPool;
            toProto(message: _129.MsgUnPoolWhitelistedPool): Uint8Array;
            toProtoMsg(message: _129.MsgUnPoolWhitelistedPool): _129.MsgUnPoolWhitelistedPoolProtoMsg;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            typeUrl: string;
            encode(message: _129.MsgUnPoolWhitelistedPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MsgUnPoolWhitelistedPoolResponse;
            fromJSON(object: any): _129.MsgUnPoolWhitelistedPoolResponse;
            toJSON(message: _129.MsgUnPoolWhitelistedPoolResponse): unknown;
            fromPartial(object: Partial<_129.MsgUnPoolWhitelistedPoolResponse>): _129.MsgUnPoolWhitelistedPoolResponse;
            fromSDK(object: _129.MsgUnPoolWhitelistedPoolResponseSDKType): _129.MsgUnPoolWhitelistedPoolResponse;
            toSDK(message: _129.MsgUnPoolWhitelistedPoolResponse): _129.MsgUnPoolWhitelistedPoolResponseSDKType;
            fromAmino(object: _129.MsgUnPoolWhitelistedPoolResponseAmino): _129.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _129.MsgUnPoolWhitelistedPoolResponse): _129.MsgUnPoolWhitelistedPoolResponseAmino;
            fromAminoMsg(object: _129.MsgUnPoolWhitelistedPoolResponseAminoMsg): _129.MsgUnPoolWhitelistedPoolResponse;
            toAminoMsg(message: _129.MsgUnPoolWhitelistedPoolResponse): _129.MsgUnPoolWhitelistedPoolResponseAminoMsg;
            fromProtoMsg(message: _129.MsgUnPoolWhitelistedPoolResponseProtoMsg): _129.MsgUnPoolWhitelistedPoolResponse;
            toProto(message: _129.MsgUnPoolWhitelistedPoolResponse): Uint8Array;
            toProtoMsg(message: _129.MsgUnPoolWhitelistedPoolResponse): _129.MsgUnPoolWhitelistedPoolResponseProtoMsg;
        };
        superfluidAssetTypeFromJSON(object: any): _128.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _128.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _128.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _128.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _128.SuperfluidAssetType;
        SuperfluidAsset: {
            typeUrl: string;
            encode(message: _128.SuperfluidAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.SuperfluidAsset;
            fromJSON(object: any): _128.SuperfluidAsset;
            toJSON(message: _128.SuperfluidAsset): unknown;
            fromPartial(object: Partial<_128.SuperfluidAsset>): _128.SuperfluidAsset;
            fromSDK(object: _128.SuperfluidAssetSDKType): _128.SuperfluidAsset;
            toSDK(message: _128.SuperfluidAsset): _128.SuperfluidAssetSDKType;
            fromAmino(object: _128.SuperfluidAssetAmino): _128.SuperfluidAsset;
            toAmino(message: _128.SuperfluidAsset): _128.SuperfluidAssetAmino;
            fromAminoMsg(object: _128.SuperfluidAssetAminoMsg): _128.SuperfluidAsset;
            toAminoMsg(message: _128.SuperfluidAsset): _128.SuperfluidAssetAminoMsg;
            fromProtoMsg(message: _128.SuperfluidAssetProtoMsg): _128.SuperfluidAsset;
            toProto(message: _128.SuperfluidAsset): Uint8Array;
            toProtoMsg(message: _128.SuperfluidAsset): _128.SuperfluidAssetProtoMsg;
        };
        SuperfluidIntermediaryAccount: {
            typeUrl: string;
            encode(message: _128.SuperfluidIntermediaryAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _128.SuperfluidIntermediaryAccount;
            toJSON(message: _128.SuperfluidIntermediaryAccount): unknown;
            fromPartial(object: Partial<_128.SuperfluidIntermediaryAccount>): _128.SuperfluidIntermediaryAccount;
            fromSDK(object: _128.SuperfluidIntermediaryAccountSDKType): _128.SuperfluidIntermediaryAccount;
            toSDK(message: _128.SuperfluidIntermediaryAccount): _128.SuperfluidIntermediaryAccountSDKType;
            fromAmino(object: _128.SuperfluidIntermediaryAccountAmino): _128.SuperfluidIntermediaryAccount;
            toAmino(message: _128.SuperfluidIntermediaryAccount): _128.SuperfluidIntermediaryAccountAmino;
            fromAminoMsg(object: _128.SuperfluidIntermediaryAccountAminoMsg): _128.SuperfluidIntermediaryAccount;
            toAminoMsg(message: _128.SuperfluidIntermediaryAccount): _128.SuperfluidIntermediaryAccountAminoMsg;
            fromProtoMsg(message: _128.SuperfluidIntermediaryAccountProtoMsg): _128.SuperfluidIntermediaryAccount;
            toProto(message: _128.SuperfluidIntermediaryAccount): Uint8Array;
            toProtoMsg(message: _128.SuperfluidIntermediaryAccount): _128.SuperfluidIntermediaryAccountProtoMsg;
        };
        OsmoEquivalentMultiplierRecord: {
            typeUrl: string;
            encode(message: _128.OsmoEquivalentMultiplierRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _128.OsmoEquivalentMultiplierRecord;
            toJSON(message: _128.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial(object: Partial<_128.OsmoEquivalentMultiplierRecord>): _128.OsmoEquivalentMultiplierRecord;
            fromSDK(object: _128.OsmoEquivalentMultiplierRecordSDKType): _128.OsmoEquivalentMultiplierRecord;
            toSDK(message: _128.OsmoEquivalentMultiplierRecord): _128.OsmoEquivalentMultiplierRecordSDKType;
            fromAmino(object: _128.OsmoEquivalentMultiplierRecordAmino): _128.OsmoEquivalentMultiplierRecord;
            toAmino(message: _128.OsmoEquivalentMultiplierRecord): _128.OsmoEquivalentMultiplierRecordAmino;
            fromAminoMsg(object: _128.OsmoEquivalentMultiplierRecordAminoMsg): _128.OsmoEquivalentMultiplierRecord;
            toAminoMsg(message: _128.OsmoEquivalentMultiplierRecord): _128.OsmoEquivalentMultiplierRecordAminoMsg;
            fromProtoMsg(message: _128.OsmoEquivalentMultiplierRecordProtoMsg): _128.OsmoEquivalentMultiplierRecord;
            toProto(message: _128.OsmoEquivalentMultiplierRecord): Uint8Array;
            toProtoMsg(message: _128.OsmoEquivalentMultiplierRecord): _128.OsmoEquivalentMultiplierRecordProtoMsg;
        };
        SuperfluidDelegationRecord: {
            typeUrl: string;
            encode(message: _128.SuperfluidDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.SuperfluidDelegationRecord;
            fromJSON(object: any): _128.SuperfluidDelegationRecord;
            toJSON(message: _128.SuperfluidDelegationRecord): unknown;
            fromPartial(object: Partial<_128.SuperfluidDelegationRecord>): _128.SuperfluidDelegationRecord;
            fromSDK(object: _128.SuperfluidDelegationRecordSDKType): _128.SuperfluidDelegationRecord;
            toSDK(message: _128.SuperfluidDelegationRecord): _128.SuperfluidDelegationRecordSDKType;
            fromAmino(object: _128.SuperfluidDelegationRecordAmino): _128.SuperfluidDelegationRecord;
            toAmino(message: _128.SuperfluidDelegationRecord): _128.SuperfluidDelegationRecordAmino;
            fromAminoMsg(object: _128.SuperfluidDelegationRecordAminoMsg): _128.SuperfluidDelegationRecord;
            toAminoMsg(message: _128.SuperfluidDelegationRecord): _128.SuperfluidDelegationRecordAminoMsg;
            fromProtoMsg(message: _128.SuperfluidDelegationRecordProtoMsg): _128.SuperfluidDelegationRecord;
            toProto(message: _128.SuperfluidDelegationRecord): Uint8Array;
            toProtoMsg(message: _128.SuperfluidDelegationRecord): _128.SuperfluidDelegationRecordProtoMsg;
        };
        LockIdIntermediaryAccountConnection: {
            typeUrl: string;
            encode(message: _128.LockIdIntermediaryAccountConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _128.LockIdIntermediaryAccountConnection;
            toJSON(message: _128.LockIdIntermediaryAccountConnection): unknown;
            fromPartial(object: Partial<_128.LockIdIntermediaryAccountConnection>): _128.LockIdIntermediaryAccountConnection;
            fromSDK(object: _128.LockIdIntermediaryAccountConnectionSDKType): _128.LockIdIntermediaryAccountConnection;
            toSDK(message: _128.LockIdIntermediaryAccountConnection): _128.LockIdIntermediaryAccountConnectionSDKType;
            fromAmino(object: _128.LockIdIntermediaryAccountConnectionAmino): _128.LockIdIntermediaryAccountConnection;
            toAmino(message: _128.LockIdIntermediaryAccountConnection): _128.LockIdIntermediaryAccountConnectionAmino;
            fromAminoMsg(object: _128.LockIdIntermediaryAccountConnectionAminoMsg): _128.LockIdIntermediaryAccountConnection;
            toAminoMsg(message: _128.LockIdIntermediaryAccountConnection): _128.LockIdIntermediaryAccountConnectionAminoMsg;
            fromProtoMsg(message: _128.LockIdIntermediaryAccountConnectionProtoMsg): _128.LockIdIntermediaryAccountConnection;
            toProto(message: _128.LockIdIntermediaryAccountConnection): Uint8Array;
            toProtoMsg(message: _128.LockIdIntermediaryAccountConnection): _128.LockIdIntermediaryAccountConnectionProtoMsg;
        };
        UnpoolWhitelistedPools: {
            typeUrl: string;
            encode(message: _128.UnpoolWhitelistedPools, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.UnpoolWhitelistedPools;
            fromJSON(object: any): _128.UnpoolWhitelistedPools;
            toJSON(message: _128.UnpoolWhitelistedPools): unknown;
            fromPartial(object: Partial<_128.UnpoolWhitelistedPools>): _128.UnpoolWhitelistedPools;
            fromSDK(object: _128.UnpoolWhitelistedPoolsSDKType): _128.UnpoolWhitelistedPools;
            toSDK(message: _128.UnpoolWhitelistedPools): _128.UnpoolWhitelistedPoolsSDKType;
            fromAmino(object: _128.UnpoolWhitelistedPoolsAmino): _128.UnpoolWhitelistedPools;
            toAmino(message: _128.UnpoolWhitelistedPools): _128.UnpoolWhitelistedPoolsAmino;
            fromAminoMsg(object: _128.UnpoolWhitelistedPoolsAminoMsg): _128.UnpoolWhitelistedPools;
            toAminoMsg(message: _128.UnpoolWhitelistedPools): _128.UnpoolWhitelistedPoolsAminoMsg;
            fromProtoMsg(message: _128.UnpoolWhitelistedPoolsProtoMsg): _128.UnpoolWhitelistedPools;
            toProto(message: _128.UnpoolWhitelistedPools): Uint8Array;
            toProtoMsg(message: _128.UnpoolWhitelistedPools): _128.UnpoolWhitelistedPoolsProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _127.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryParamsRequest;
            fromJSON(_: any): _127.QueryParamsRequest;
            toJSON(_: _127.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_127.QueryParamsRequest>): _127.QueryParamsRequest;
            fromSDK(_: _127.QueryParamsRequestSDKType): _127.QueryParamsRequest;
            toSDK(_: _127.QueryParamsRequest): _127.QueryParamsRequestSDKType;
            fromAmino(_: _127.QueryParamsRequestAmino): _127.QueryParamsRequest;
            toAmino(_: _127.QueryParamsRequest): _127.QueryParamsRequestAmino;
            fromAminoMsg(object: _127.QueryParamsRequestAminoMsg): _127.QueryParamsRequest;
            toAminoMsg(message: _127.QueryParamsRequest): _127.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _127.QueryParamsRequestProtoMsg): _127.QueryParamsRequest;
            toProto(message: _127.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _127.QueryParamsRequest): _127.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _127.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryParamsResponse;
            fromJSON(object: any): _127.QueryParamsResponse;
            toJSON(message: _127.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_127.QueryParamsResponse>): _127.QueryParamsResponse;
            fromSDK(object: _127.QueryParamsResponseSDKType): _127.QueryParamsResponse;
            toSDK(message: _127.QueryParamsResponse): _127.QueryParamsResponseSDKType;
            fromAmino(object: _127.QueryParamsResponseAmino): _127.QueryParamsResponse;
            toAmino(message: _127.QueryParamsResponse): _127.QueryParamsResponseAmino;
            fromAminoMsg(object: _127.QueryParamsResponseAminoMsg): _127.QueryParamsResponse;
            toAminoMsg(message: _127.QueryParamsResponse): _127.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _127.QueryParamsResponseProtoMsg): _127.QueryParamsResponse;
            toProto(message: _127.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _127.QueryParamsResponse): _127.QueryParamsResponseProtoMsg;
        };
        AssetTypeRequest: {
            typeUrl: string;
            encode(message: _127.AssetTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.AssetTypeRequest;
            fromJSON(object: any): _127.AssetTypeRequest;
            toJSON(message: _127.AssetTypeRequest): unknown;
            fromPartial(object: Partial<_127.AssetTypeRequest>): _127.AssetTypeRequest;
            fromSDK(object: _127.AssetTypeRequestSDKType): _127.AssetTypeRequest;
            toSDK(message: _127.AssetTypeRequest): _127.AssetTypeRequestSDKType;
            fromAmino(object: _127.AssetTypeRequestAmino): _127.AssetTypeRequest;
            toAmino(message: _127.AssetTypeRequest): _127.AssetTypeRequestAmino;
            fromAminoMsg(object: _127.AssetTypeRequestAminoMsg): _127.AssetTypeRequest;
            toAminoMsg(message: _127.AssetTypeRequest): _127.AssetTypeRequestAminoMsg;
            fromProtoMsg(message: _127.AssetTypeRequestProtoMsg): _127.AssetTypeRequest;
            toProto(message: _127.AssetTypeRequest): Uint8Array;
            toProtoMsg(message: _127.AssetTypeRequest): _127.AssetTypeRequestProtoMsg;
        };
        AssetTypeResponse: {
            typeUrl: string;
            encode(message: _127.AssetTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.AssetTypeResponse;
            fromJSON(object: any): _127.AssetTypeResponse;
            toJSON(message: _127.AssetTypeResponse): unknown;
            fromPartial(object: Partial<_127.AssetTypeResponse>): _127.AssetTypeResponse;
            fromSDK(object: _127.AssetTypeResponseSDKType): _127.AssetTypeResponse;
            toSDK(message: _127.AssetTypeResponse): _127.AssetTypeResponseSDKType;
            fromAmino(object: _127.AssetTypeResponseAmino): _127.AssetTypeResponse;
            toAmino(message: _127.AssetTypeResponse): _127.AssetTypeResponseAmino;
            fromAminoMsg(object: _127.AssetTypeResponseAminoMsg): _127.AssetTypeResponse;
            toAminoMsg(message: _127.AssetTypeResponse): _127.AssetTypeResponseAminoMsg;
            fromProtoMsg(message: _127.AssetTypeResponseProtoMsg): _127.AssetTypeResponse;
            toProto(message: _127.AssetTypeResponse): Uint8Array;
            toProtoMsg(message: _127.AssetTypeResponse): _127.AssetTypeResponseProtoMsg;
        };
        AllAssetsRequest: {
            typeUrl: string;
            encode(_: _127.AllAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.AllAssetsRequest;
            fromJSON(_: any): _127.AllAssetsRequest;
            toJSON(_: _127.AllAssetsRequest): unknown;
            fromPartial(_: Partial<_127.AllAssetsRequest>): _127.AllAssetsRequest;
            fromSDK(_: _127.AllAssetsRequestSDKType): _127.AllAssetsRequest;
            toSDK(_: _127.AllAssetsRequest): _127.AllAssetsRequestSDKType;
            fromAmino(_: _127.AllAssetsRequestAmino): _127.AllAssetsRequest;
            toAmino(_: _127.AllAssetsRequest): _127.AllAssetsRequestAmino;
            fromAminoMsg(object: _127.AllAssetsRequestAminoMsg): _127.AllAssetsRequest;
            toAminoMsg(message: _127.AllAssetsRequest): _127.AllAssetsRequestAminoMsg;
            fromProtoMsg(message: _127.AllAssetsRequestProtoMsg): _127.AllAssetsRequest;
            toProto(message: _127.AllAssetsRequest): Uint8Array;
            toProtoMsg(message: _127.AllAssetsRequest): _127.AllAssetsRequestProtoMsg;
        };
        AllAssetsResponse: {
            typeUrl: string;
            encode(message: _127.AllAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.AllAssetsResponse;
            fromJSON(object: any): _127.AllAssetsResponse;
            toJSON(message: _127.AllAssetsResponse): unknown;
            fromPartial(object: Partial<_127.AllAssetsResponse>): _127.AllAssetsResponse;
            fromSDK(object: _127.AllAssetsResponseSDKType): _127.AllAssetsResponse;
            toSDK(message: _127.AllAssetsResponse): _127.AllAssetsResponseSDKType;
            fromAmino(object: _127.AllAssetsResponseAmino): _127.AllAssetsResponse;
            toAmino(message: _127.AllAssetsResponse): _127.AllAssetsResponseAmino;
            fromAminoMsg(object: _127.AllAssetsResponseAminoMsg): _127.AllAssetsResponse;
            toAminoMsg(message: _127.AllAssetsResponse): _127.AllAssetsResponseAminoMsg;
            fromProtoMsg(message: _127.AllAssetsResponseProtoMsg): _127.AllAssetsResponse;
            toProto(message: _127.AllAssetsResponse): Uint8Array;
            toProtoMsg(message: _127.AllAssetsResponse): _127.AllAssetsResponseProtoMsg;
        };
        AssetMultiplierRequest: {
            typeUrl: string;
            encode(message: _127.AssetMultiplierRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.AssetMultiplierRequest;
            fromJSON(object: any): _127.AssetMultiplierRequest;
            toJSON(message: _127.AssetMultiplierRequest): unknown;
            fromPartial(object: Partial<_127.AssetMultiplierRequest>): _127.AssetMultiplierRequest;
            fromSDK(object: _127.AssetMultiplierRequestSDKType): _127.AssetMultiplierRequest;
            toSDK(message: _127.AssetMultiplierRequest): _127.AssetMultiplierRequestSDKType;
            fromAmino(object: _127.AssetMultiplierRequestAmino): _127.AssetMultiplierRequest;
            toAmino(message: _127.AssetMultiplierRequest): _127.AssetMultiplierRequestAmino;
            fromAminoMsg(object: _127.AssetMultiplierRequestAminoMsg): _127.AssetMultiplierRequest;
            toAminoMsg(message: _127.AssetMultiplierRequest): _127.AssetMultiplierRequestAminoMsg;
            fromProtoMsg(message: _127.AssetMultiplierRequestProtoMsg): _127.AssetMultiplierRequest;
            toProto(message: _127.AssetMultiplierRequest): Uint8Array;
            toProtoMsg(message: _127.AssetMultiplierRequest): _127.AssetMultiplierRequestProtoMsg;
        };
        AssetMultiplierResponse: {
            typeUrl: string;
            encode(message: _127.AssetMultiplierResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.AssetMultiplierResponse;
            fromJSON(object: any): _127.AssetMultiplierResponse;
            toJSON(message: _127.AssetMultiplierResponse): unknown;
            fromPartial(object: Partial<_127.AssetMultiplierResponse>): _127.AssetMultiplierResponse;
            fromSDK(object: _127.AssetMultiplierResponseSDKType): _127.AssetMultiplierResponse;
            toSDK(message: _127.AssetMultiplierResponse): _127.AssetMultiplierResponseSDKType;
            fromAmino(object: _127.AssetMultiplierResponseAmino): _127.AssetMultiplierResponse;
            toAmino(message: _127.AssetMultiplierResponse): _127.AssetMultiplierResponseAmino;
            fromAminoMsg(object: _127.AssetMultiplierResponseAminoMsg): _127.AssetMultiplierResponse;
            toAminoMsg(message: _127.AssetMultiplierResponse): _127.AssetMultiplierResponseAminoMsg;
            fromProtoMsg(message: _127.AssetMultiplierResponseProtoMsg): _127.AssetMultiplierResponse;
            toProto(message: _127.AssetMultiplierResponse): Uint8Array;
            toProtoMsg(message: _127.AssetMultiplierResponse): _127.AssetMultiplierResponseProtoMsg;
        };
        SuperfluidIntermediaryAccountInfo: {
            typeUrl: string;
            encode(message: _127.SuperfluidIntermediaryAccountInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _127.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _127.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial(object: Partial<_127.SuperfluidIntermediaryAccountInfo>): _127.SuperfluidIntermediaryAccountInfo;
            fromSDK(object: _127.SuperfluidIntermediaryAccountInfoSDKType): _127.SuperfluidIntermediaryAccountInfo;
            toSDK(message: _127.SuperfluidIntermediaryAccountInfo): _127.SuperfluidIntermediaryAccountInfoSDKType;
            fromAmino(object: _127.SuperfluidIntermediaryAccountInfoAmino): _127.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _127.SuperfluidIntermediaryAccountInfo): _127.SuperfluidIntermediaryAccountInfoAmino;
            fromAminoMsg(object: _127.SuperfluidIntermediaryAccountInfoAminoMsg): _127.SuperfluidIntermediaryAccountInfo;
            toAminoMsg(message: _127.SuperfluidIntermediaryAccountInfo): _127.SuperfluidIntermediaryAccountInfoAminoMsg;
            fromProtoMsg(message: _127.SuperfluidIntermediaryAccountInfoProtoMsg): _127.SuperfluidIntermediaryAccountInfo;
            toProto(message: _127.SuperfluidIntermediaryAccountInfo): Uint8Array;
            toProtoMsg(message: _127.SuperfluidIntermediaryAccountInfo): _127.SuperfluidIntermediaryAccountInfoProtoMsg;
        };
        AllIntermediaryAccountsRequest: {
            typeUrl: string;
            encode(message: _127.AllIntermediaryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _127.AllIntermediaryAccountsRequest;
            toJSON(message: _127.AllIntermediaryAccountsRequest): unknown;
            fromPartial(object: Partial<_127.AllIntermediaryAccountsRequest>): _127.AllIntermediaryAccountsRequest;
            fromSDK(object: _127.AllIntermediaryAccountsRequestSDKType): _127.AllIntermediaryAccountsRequest;
            toSDK(message: _127.AllIntermediaryAccountsRequest): _127.AllIntermediaryAccountsRequestSDKType;
            fromAmino(object: _127.AllIntermediaryAccountsRequestAmino): _127.AllIntermediaryAccountsRequest;
            toAmino(message: _127.AllIntermediaryAccountsRequest): _127.AllIntermediaryAccountsRequestAmino;
            fromAminoMsg(object: _127.AllIntermediaryAccountsRequestAminoMsg): _127.AllIntermediaryAccountsRequest;
            toAminoMsg(message: _127.AllIntermediaryAccountsRequest): _127.AllIntermediaryAccountsRequestAminoMsg;
            fromProtoMsg(message: _127.AllIntermediaryAccountsRequestProtoMsg): _127.AllIntermediaryAccountsRequest;
            toProto(message: _127.AllIntermediaryAccountsRequest): Uint8Array;
            toProtoMsg(message: _127.AllIntermediaryAccountsRequest): _127.AllIntermediaryAccountsRequestProtoMsg;
        };
        AllIntermediaryAccountsResponse: {
            typeUrl: string;
            encode(message: _127.AllIntermediaryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _127.AllIntermediaryAccountsResponse;
            toJSON(message: _127.AllIntermediaryAccountsResponse): unknown;
            fromPartial(object: Partial<_127.AllIntermediaryAccountsResponse>): _127.AllIntermediaryAccountsResponse;
            fromSDK(object: _127.AllIntermediaryAccountsResponseSDKType): _127.AllIntermediaryAccountsResponse;
            toSDK(message: _127.AllIntermediaryAccountsResponse): _127.AllIntermediaryAccountsResponseSDKType;
            fromAmino(object: _127.AllIntermediaryAccountsResponseAmino): _127.AllIntermediaryAccountsResponse;
            toAmino(message: _127.AllIntermediaryAccountsResponse): _127.AllIntermediaryAccountsResponseAmino;
            fromAminoMsg(object: _127.AllIntermediaryAccountsResponseAminoMsg): _127.AllIntermediaryAccountsResponse;
            toAminoMsg(message: _127.AllIntermediaryAccountsResponse): _127.AllIntermediaryAccountsResponseAminoMsg;
            fromProtoMsg(message: _127.AllIntermediaryAccountsResponseProtoMsg): _127.AllIntermediaryAccountsResponse;
            toProto(message: _127.AllIntermediaryAccountsResponse): Uint8Array;
            toProtoMsg(message: _127.AllIntermediaryAccountsResponse): _127.AllIntermediaryAccountsResponseProtoMsg;
        };
        ConnectedIntermediaryAccountRequest: {
            typeUrl: string;
            encode(message: _127.ConnectedIntermediaryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _127.ConnectedIntermediaryAccountRequest;
            toJSON(message: _127.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial(object: Partial<_127.ConnectedIntermediaryAccountRequest>): _127.ConnectedIntermediaryAccountRequest;
            fromSDK(object: _127.ConnectedIntermediaryAccountRequestSDKType): _127.ConnectedIntermediaryAccountRequest;
            toSDK(message: _127.ConnectedIntermediaryAccountRequest): _127.ConnectedIntermediaryAccountRequestSDKType;
            fromAmino(object: _127.ConnectedIntermediaryAccountRequestAmino): _127.ConnectedIntermediaryAccountRequest;
            toAmino(message: _127.ConnectedIntermediaryAccountRequest): _127.ConnectedIntermediaryAccountRequestAmino;
            fromAminoMsg(object: _127.ConnectedIntermediaryAccountRequestAminoMsg): _127.ConnectedIntermediaryAccountRequest;
            toAminoMsg(message: _127.ConnectedIntermediaryAccountRequest): _127.ConnectedIntermediaryAccountRequestAminoMsg;
            fromProtoMsg(message: _127.ConnectedIntermediaryAccountRequestProtoMsg): _127.ConnectedIntermediaryAccountRequest;
            toProto(message: _127.ConnectedIntermediaryAccountRequest): Uint8Array;
            toProtoMsg(message: _127.ConnectedIntermediaryAccountRequest): _127.ConnectedIntermediaryAccountRequestProtoMsg;
        };
        ConnectedIntermediaryAccountResponse: {
            typeUrl: string;
            encode(message: _127.ConnectedIntermediaryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _127.ConnectedIntermediaryAccountResponse;
            toJSON(message: _127.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial(object: Partial<_127.ConnectedIntermediaryAccountResponse>): _127.ConnectedIntermediaryAccountResponse;
            fromSDK(object: _127.ConnectedIntermediaryAccountResponseSDKType): _127.ConnectedIntermediaryAccountResponse;
            toSDK(message: _127.ConnectedIntermediaryAccountResponse): _127.ConnectedIntermediaryAccountResponseSDKType;
            fromAmino(object: _127.ConnectedIntermediaryAccountResponseAmino): _127.ConnectedIntermediaryAccountResponse;
            toAmino(message: _127.ConnectedIntermediaryAccountResponse): _127.ConnectedIntermediaryAccountResponseAmino;
            fromAminoMsg(object: _127.ConnectedIntermediaryAccountResponseAminoMsg): _127.ConnectedIntermediaryAccountResponse;
            toAminoMsg(message: _127.ConnectedIntermediaryAccountResponse): _127.ConnectedIntermediaryAccountResponseAminoMsg;
            fromProtoMsg(message: _127.ConnectedIntermediaryAccountResponseProtoMsg): _127.ConnectedIntermediaryAccountResponse;
            toProto(message: _127.ConnectedIntermediaryAccountResponse): Uint8Array;
            toProtoMsg(message: _127.ConnectedIntermediaryAccountResponse): _127.ConnectedIntermediaryAccountResponseProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            typeUrl: string;
            encode(message: _127.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryTotalDelegationByValidatorForDenomRequest;
            fromJSON(object: any): _127.QueryTotalDelegationByValidatorForDenomRequest;
            toJSON(message: _127.QueryTotalDelegationByValidatorForDenomRequest): unknown;
            fromPartial(object: Partial<_127.QueryTotalDelegationByValidatorForDenomRequest>): _127.QueryTotalDelegationByValidatorForDenomRequest;
            fromSDK(object: _127.QueryTotalDelegationByValidatorForDenomRequestSDKType): _127.QueryTotalDelegationByValidatorForDenomRequest;
            toSDK(message: _127.QueryTotalDelegationByValidatorForDenomRequest): _127.QueryTotalDelegationByValidatorForDenomRequestSDKType;
            fromAmino(object: _127.QueryTotalDelegationByValidatorForDenomRequestAmino): _127.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _127.QueryTotalDelegationByValidatorForDenomRequest): _127.QueryTotalDelegationByValidatorForDenomRequestAmino;
            fromAminoMsg(object: _127.QueryTotalDelegationByValidatorForDenomRequestAminoMsg): _127.QueryTotalDelegationByValidatorForDenomRequest;
            toAminoMsg(message: _127.QueryTotalDelegationByValidatorForDenomRequest): _127.QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
            fromProtoMsg(message: _127.QueryTotalDelegationByValidatorForDenomRequestProtoMsg): _127.QueryTotalDelegationByValidatorForDenomRequest;
            toProto(message: _127.QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
            toProtoMsg(message: _127.QueryTotalDelegationByValidatorForDenomRequest): _127.QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            typeUrl: string;
            encode(message: _127.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryTotalDelegationByValidatorForDenomResponse;
            fromJSON(object: any): _127.QueryTotalDelegationByValidatorForDenomResponse;
            toJSON(message: _127.QueryTotalDelegationByValidatorForDenomResponse): unknown;
            fromPartial(object: Partial<_127.QueryTotalDelegationByValidatorForDenomResponse>): _127.QueryTotalDelegationByValidatorForDenomResponse;
            fromSDK(object: _127.QueryTotalDelegationByValidatorForDenomResponseSDKType): _127.QueryTotalDelegationByValidatorForDenomResponse;
            toSDK(message: _127.QueryTotalDelegationByValidatorForDenomResponse): _127.QueryTotalDelegationByValidatorForDenomResponseSDKType;
            fromAmino(object: _127.QueryTotalDelegationByValidatorForDenomResponseAmino): _127.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _127.QueryTotalDelegationByValidatorForDenomResponse): _127.QueryTotalDelegationByValidatorForDenomResponseAmino;
            fromAminoMsg(object: _127.QueryTotalDelegationByValidatorForDenomResponseAminoMsg): _127.QueryTotalDelegationByValidatorForDenomResponse;
            toAminoMsg(message: _127.QueryTotalDelegationByValidatorForDenomResponse): _127.QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
            fromProtoMsg(message: _127.QueryTotalDelegationByValidatorForDenomResponseProtoMsg): _127.QueryTotalDelegationByValidatorForDenomResponse;
            toProto(message: _127.QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
            toProtoMsg(message: _127.QueryTotalDelegationByValidatorForDenomResponse): _127.QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
        };
        Delegations: {
            typeUrl: string;
            encode(message: _127.Delegations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.Delegations;
            fromJSON(object: any): _127.Delegations;
            toJSON(message: _127.Delegations): unknown;
            fromPartial(object: Partial<_127.Delegations>): _127.Delegations;
            fromSDK(object: _127.DelegationsSDKType): _127.Delegations;
            toSDK(message: _127.Delegations): _127.DelegationsSDKType;
            fromAmino(object: _127.DelegationsAmino): _127.Delegations;
            toAmino(message: _127.Delegations): _127.DelegationsAmino;
            fromAminoMsg(object: _127.DelegationsAminoMsg): _127.Delegations;
            toAminoMsg(message: _127.Delegations): _127.DelegationsAminoMsg;
            fromProtoMsg(message: _127.DelegationsProtoMsg): _127.Delegations;
            toProto(message: _127.Delegations): Uint8Array;
            toProtoMsg(message: _127.Delegations): _127.DelegationsProtoMsg;
        };
        TotalSuperfluidDelegationsRequest: {
            typeUrl: string;
            encode(_: _127.TotalSuperfluidDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _127.TotalSuperfluidDelegationsRequest;
            toJSON(_: _127.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial(_: Partial<_127.TotalSuperfluidDelegationsRequest>): _127.TotalSuperfluidDelegationsRequest;
            fromSDK(_: _127.TotalSuperfluidDelegationsRequestSDKType): _127.TotalSuperfluidDelegationsRequest;
            toSDK(_: _127.TotalSuperfluidDelegationsRequest): _127.TotalSuperfluidDelegationsRequestSDKType;
            fromAmino(_: _127.TotalSuperfluidDelegationsRequestAmino): _127.TotalSuperfluidDelegationsRequest;
            toAmino(_: _127.TotalSuperfluidDelegationsRequest): _127.TotalSuperfluidDelegationsRequestAmino;
            fromAminoMsg(object: _127.TotalSuperfluidDelegationsRequestAminoMsg): _127.TotalSuperfluidDelegationsRequest;
            toAminoMsg(message: _127.TotalSuperfluidDelegationsRequest): _127.TotalSuperfluidDelegationsRequestAminoMsg;
            fromProtoMsg(message: _127.TotalSuperfluidDelegationsRequestProtoMsg): _127.TotalSuperfluidDelegationsRequest;
            toProto(message: _127.TotalSuperfluidDelegationsRequest): Uint8Array;
            toProtoMsg(message: _127.TotalSuperfluidDelegationsRequest): _127.TotalSuperfluidDelegationsRequestProtoMsg;
        };
        TotalSuperfluidDelegationsResponse: {
            typeUrl: string;
            encode(message: _127.TotalSuperfluidDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _127.TotalSuperfluidDelegationsResponse;
            toJSON(message: _127.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial(object: Partial<_127.TotalSuperfluidDelegationsResponse>): _127.TotalSuperfluidDelegationsResponse;
            fromSDK(object: _127.TotalSuperfluidDelegationsResponseSDKType): _127.TotalSuperfluidDelegationsResponse;
            toSDK(message: _127.TotalSuperfluidDelegationsResponse): _127.TotalSuperfluidDelegationsResponseSDKType;
            fromAmino(object: _127.TotalSuperfluidDelegationsResponseAmino): _127.TotalSuperfluidDelegationsResponse;
            toAmino(message: _127.TotalSuperfluidDelegationsResponse): _127.TotalSuperfluidDelegationsResponseAmino;
            fromAminoMsg(object: _127.TotalSuperfluidDelegationsResponseAminoMsg): _127.TotalSuperfluidDelegationsResponse;
            toAminoMsg(message: _127.TotalSuperfluidDelegationsResponse): _127.TotalSuperfluidDelegationsResponseAminoMsg;
            fromProtoMsg(message: _127.TotalSuperfluidDelegationsResponseProtoMsg): _127.TotalSuperfluidDelegationsResponse;
            toProto(message: _127.TotalSuperfluidDelegationsResponse): Uint8Array;
            toProtoMsg(message: _127.TotalSuperfluidDelegationsResponse): _127.TotalSuperfluidDelegationsResponseProtoMsg;
        };
        SuperfluidDelegationAmountRequest: {
            typeUrl: string;
            encode(message: _127.SuperfluidDelegationAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _127.SuperfluidDelegationAmountRequest;
            toJSON(message: _127.SuperfluidDelegationAmountRequest): unknown;
            fromPartial(object: Partial<_127.SuperfluidDelegationAmountRequest>): _127.SuperfluidDelegationAmountRequest;
            fromSDK(object: _127.SuperfluidDelegationAmountRequestSDKType): _127.SuperfluidDelegationAmountRequest;
            toSDK(message: _127.SuperfluidDelegationAmountRequest): _127.SuperfluidDelegationAmountRequestSDKType;
            fromAmino(object: _127.SuperfluidDelegationAmountRequestAmino): _127.SuperfluidDelegationAmountRequest;
            toAmino(message: _127.SuperfluidDelegationAmountRequest): _127.SuperfluidDelegationAmountRequestAmino;
            fromAminoMsg(object: _127.SuperfluidDelegationAmountRequestAminoMsg): _127.SuperfluidDelegationAmountRequest;
            toAminoMsg(message: _127.SuperfluidDelegationAmountRequest): _127.SuperfluidDelegationAmountRequestAminoMsg;
            fromProtoMsg(message: _127.SuperfluidDelegationAmountRequestProtoMsg): _127.SuperfluidDelegationAmountRequest;
            toProto(message: _127.SuperfluidDelegationAmountRequest): Uint8Array;
            toProtoMsg(message: _127.SuperfluidDelegationAmountRequest): _127.SuperfluidDelegationAmountRequestProtoMsg;
        };
        SuperfluidDelegationAmountResponse: {
            typeUrl: string;
            encode(message: _127.SuperfluidDelegationAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _127.SuperfluidDelegationAmountResponse;
            toJSON(message: _127.SuperfluidDelegationAmountResponse): unknown;
            fromPartial(object: Partial<_127.SuperfluidDelegationAmountResponse>): _127.SuperfluidDelegationAmountResponse;
            fromSDK(object: _127.SuperfluidDelegationAmountResponseSDKType): _127.SuperfluidDelegationAmountResponse;
            toSDK(message: _127.SuperfluidDelegationAmountResponse): _127.SuperfluidDelegationAmountResponseSDKType;
            fromAmino(object: _127.SuperfluidDelegationAmountResponseAmino): _127.SuperfluidDelegationAmountResponse;
            toAmino(message: _127.SuperfluidDelegationAmountResponse): _127.SuperfluidDelegationAmountResponseAmino;
            fromAminoMsg(object: _127.SuperfluidDelegationAmountResponseAminoMsg): _127.SuperfluidDelegationAmountResponse;
            toAminoMsg(message: _127.SuperfluidDelegationAmountResponse): _127.SuperfluidDelegationAmountResponseAminoMsg;
            fromProtoMsg(message: _127.SuperfluidDelegationAmountResponseProtoMsg): _127.SuperfluidDelegationAmountResponse;
            toProto(message: _127.SuperfluidDelegationAmountResponse): Uint8Array;
            toProtoMsg(message: _127.SuperfluidDelegationAmountResponse): _127.SuperfluidDelegationAmountResponseProtoMsg;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _127.SuperfluidDelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _127.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _127.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial(object: Partial<_127.SuperfluidDelegationsByDelegatorRequest>): _127.SuperfluidDelegationsByDelegatorRequest;
            fromSDK(object: _127.SuperfluidDelegationsByDelegatorRequestSDKType): _127.SuperfluidDelegationsByDelegatorRequest;
            toSDK(message: _127.SuperfluidDelegationsByDelegatorRequest): _127.SuperfluidDelegationsByDelegatorRequestSDKType;
            fromAmino(object: _127.SuperfluidDelegationsByDelegatorRequestAmino): _127.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _127.SuperfluidDelegationsByDelegatorRequest): _127.SuperfluidDelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _127.SuperfluidDelegationsByDelegatorRequestAminoMsg): _127.SuperfluidDelegationsByDelegatorRequest;
            toAminoMsg(message: _127.SuperfluidDelegationsByDelegatorRequest): _127.SuperfluidDelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _127.SuperfluidDelegationsByDelegatorRequestProtoMsg): _127.SuperfluidDelegationsByDelegatorRequest;
            toProto(message: _127.SuperfluidDelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _127.SuperfluidDelegationsByDelegatorRequest): _127.SuperfluidDelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _127.SuperfluidDelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _127.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _127.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial(object: Partial<_127.SuperfluidDelegationsByDelegatorResponse>): _127.SuperfluidDelegationsByDelegatorResponse;
            fromSDK(object: _127.SuperfluidDelegationsByDelegatorResponseSDKType): _127.SuperfluidDelegationsByDelegatorResponse;
            toSDK(message: _127.SuperfluidDelegationsByDelegatorResponse): _127.SuperfluidDelegationsByDelegatorResponseSDKType;
            fromAmino(object: _127.SuperfluidDelegationsByDelegatorResponseAmino): _127.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _127.SuperfluidDelegationsByDelegatorResponse): _127.SuperfluidDelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _127.SuperfluidDelegationsByDelegatorResponseAminoMsg): _127.SuperfluidDelegationsByDelegatorResponse;
            toAminoMsg(message: _127.SuperfluidDelegationsByDelegatorResponse): _127.SuperfluidDelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _127.SuperfluidDelegationsByDelegatorResponseProtoMsg): _127.SuperfluidDelegationsByDelegatorResponse;
            toProto(message: _127.SuperfluidDelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _127.SuperfluidDelegationsByDelegatorResponse): _127.SuperfluidDelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _127.SuperfluidUndelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _127.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _127.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial(object: Partial<_127.SuperfluidUndelegationsByDelegatorRequest>): _127.SuperfluidUndelegationsByDelegatorRequest;
            fromSDK(object: _127.SuperfluidUndelegationsByDelegatorRequestSDKType): _127.SuperfluidUndelegationsByDelegatorRequest;
            toSDK(message: _127.SuperfluidUndelegationsByDelegatorRequest): _127.SuperfluidUndelegationsByDelegatorRequestSDKType;
            fromAmino(object: _127.SuperfluidUndelegationsByDelegatorRequestAmino): _127.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _127.SuperfluidUndelegationsByDelegatorRequest): _127.SuperfluidUndelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _127.SuperfluidUndelegationsByDelegatorRequestAminoMsg): _127.SuperfluidUndelegationsByDelegatorRequest;
            toAminoMsg(message: _127.SuperfluidUndelegationsByDelegatorRequest): _127.SuperfluidUndelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _127.SuperfluidUndelegationsByDelegatorRequestProtoMsg): _127.SuperfluidUndelegationsByDelegatorRequest;
            toProto(message: _127.SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _127.SuperfluidUndelegationsByDelegatorRequest): _127.SuperfluidUndelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _127.SuperfluidUndelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _127.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _127.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial(object: Partial<_127.SuperfluidUndelegationsByDelegatorResponse>): _127.SuperfluidUndelegationsByDelegatorResponse;
            fromSDK(object: _127.SuperfluidUndelegationsByDelegatorResponseSDKType): _127.SuperfluidUndelegationsByDelegatorResponse;
            toSDK(message: _127.SuperfluidUndelegationsByDelegatorResponse): _127.SuperfluidUndelegationsByDelegatorResponseSDKType;
            fromAmino(object: _127.SuperfluidUndelegationsByDelegatorResponseAmino): _127.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _127.SuperfluidUndelegationsByDelegatorResponse): _127.SuperfluidUndelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _127.SuperfluidUndelegationsByDelegatorResponseAminoMsg): _127.SuperfluidUndelegationsByDelegatorResponse;
            toAminoMsg(message: _127.SuperfluidUndelegationsByDelegatorResponse): _127.SuperfluidUndelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _127.SuperfluidUndelegationsByDelegatorResponseProtoMsg): _127.SuperfluidUndelegationsByDelegatorResponse;
            toProto(message: _127.SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _127.SuperfluidUndelegationsByDelegatorResponse): _127.SuperfluidUndelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _127.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _127.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _127.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial(object: Partial<_127.SuperfluidDelegationsByValidatorDenomRequest>): _127.SuperfluidDelegationsByValidatorDenomRequest;
            fromSDK(object: _127.SuperfluidDelegationsByValidatorDenomRequestSDKType): _127.SuperfluidDelegationsByValidatorDenomRequest;
            toSDK(message: _127.SuperfluidDelegationsByValidatorDenomRequest): _127.SuperfluidDelegationsByValidatorDenomRequestSDKType;
            fromAmino(object: _127.SuperfluidDelegationsByValidatorDenomRequestAmino): _127.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _127.SuperfluidDelegationsByValidatorDenomRequest): _127.SuperfluidDelegationsByValidatorDenomRequestAmino;
            fromAminoMsg(object: _127.SuperfluidDelegationsByValidatorDenomRequestAminoMsg): _127.SuperfluidDelegationsByValidatorDenomRequest;
            toAminoMsg(message: _127.SuperfluidDelegationsByValidatorDenomRequest): _127.SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _127.SuperfluidDelegationsByValidatorDenomRequestProtoMsg): _127.SuperfluidDelegationsByValidatorDenomRequest;
            toProto(message: _127.SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _127.SuperfluidDelegationsByValidatorDenomRequest): _127.SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _127.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _127.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _127.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial(object: Partial<_127.SuperfluidDelegationsByValidatorDenomResponse>): _127.SuperfluidDelegationsByValidatorDenomResponse;
            fromSDK(object: _127.SuperfluidDelegationsByValidatorDenomResponseSDKType): _127.SuperfluidDelegationsByValidatorDenomResponse;
            toSDK(message: _127.SuperfluidDelegationsByValidatorDenomResponse): _127.SuperfluidDelegationsByValidatorDenomResponseSDKType;
            fromAmino(object: _127.SuperfluidDelegationsByValidatorDenomResponseAmino): _127.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _127.SuperfluidDelegationsByValidatorDenomResponse): _127.SuperfluidDelegationsByValidatorDenomResponseAmino;
            fromAminoMsg(object: _127.SuperfluidDelegationsByValidatorDenomResponseAminoMsg): _127.SuperfluidDelegationsByValidatorDenomResponse;
            toAminoMsg(message: _127.SuperfluidDelegationsByValidatorDenomResponse): _127.SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _127.SuperfluidDelegationsByValidatorDenomResponseProtoMsg): _127.SuperfluidDelegationsByValidatorDenomResponse;
            toProto(message: _127.SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _127.SuperfluidDelegationsByValidatorDenomResponse): _127.SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial(object: Partial<_127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromSDK(object: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toSDK(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType;
            fromAmino(object: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
            fromAminoMsg(object: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAminoMsg(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toProto(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial(object: Partial<_127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromSDK(object: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toSDK(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType;
            fromAmino(object: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
            fromAminoMsg(object: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAminoMsg(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toProto(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _127.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
        };
        QueryTotalDelegationByDelegatorRequest: {
            typeUrl: string;
            encode(message: _127.QueryTotalDelegationByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryTotalDelegationByDelegatorRequest;
            fromJSON(object: any): _127.QueryTotalDelegationByDelegatorRequest;
            toJSON(message: _127.QueryTotalDelegationByDelegatorRequest): unknown;
            fromPartial(object: Partial<_127.QueryTotalDelegationByDelegatorRequest>): _127.QueryTotalDelegationByDelegatorRequest;
            fromSDK(object: _127.QueryTotalDelegationByDelegatorRequestSDKType): _127.QueryTotalDelegationByDelegatorRequest;
            toSDK(message: _127.QueryTotalDelegationByDelegatorRequest): _127.QueryTotalDelegationByDelegatorRequestSDKType;
            fromAmino(object: _127.QueryTotalDelegationByDelegatorRequestAmino): _127.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _127.QueryTotalDelegationByDelegatorRequest): _127.QueryTotalDelegationByDelegatorRequestAmino;
            fromAminoMsg(object: _127.QueryTotalDelegationByDelegatorRequestAminoMsg): _127.QueryTotalDelegationByDelegatorRequest;
            toAminoMsg(message: _127.QueryTotalDelegationByDelegatorRequest): _127.QueryTotalDelegationByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _127.QueryTotalDelegationByDelegatorRequestProtoMsg): _127.QueryTotalDelegationByDelegatorRequest;
            toProto(message: _127.QueryTotalDelegationByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _127.QueryTotalDelegationByDelegatorRequest): _127.QueryTotalDelegationByDelegatorRequestProtoMsg;
        };
        QueryTotalDelegationByDelegatorResponse: {
            typeUrl: string;
            encode(message: _127.QueryTotalDelegationByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryTotalDelegationByDelegatorResponse;
            fromJSON(object: any): _127.QueryTotalDelegationByDelegatorResponse;
            toJSON(message: _127.QueryTotalDelegationByDelegatorResponse): unknown;
            fromPartial(object: Partial<_127.QueryTotalDelegationByDelegatorResponse>): _127.QueryTotalDelegationByDelegatorResponse;
            fromSDK(object: _127.QueryTotalDelegationByDelegatorResponseSDKType): _127.QueryTotalDelegationByDelegatorResponse;
            toSDK(message: _127.QueryTotalDelegationByDelegatorResponse): _127.QueryTotalDelegationByDelegatorResponseSDKType;
            fromAmino(object: _127.QueryTotalDelegationByDelegatorResponseAmino): _127.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _127.QueryTotalDelegationByDelegatorResponse): _127.QueryTotalDelegationByDelegatorResponseAmino;
            fromAminoMsg(object: _127.QueryTotalDelegationByDelegatorResponseAminoMsg): _127.QueryTotalDelegationByDelegatorResponse;
            toAminoMsg(message: _127.QueryTotalDelegationByDelegatorResponse): _127.QueryTotalDelegationByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _127.QueryTotalDelegationByDelegatorResponseProtoMsg): _127.QueryTotalDelegationByDelegatorResponse;
            toProto(message: _127.QueryTotalDelegationByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _127.QueryTotalDelegationByDelegatorResponse): _127.QueryTotalDelegationByDelegatorResponseProtoMsg;
        };
        QueryUnpoolWhitelistRequest: {
            typeUrl: string;
            encode(_: _127.QueryUnpoolWhitelistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryUnpoolWhitelistRequest;
            fromJSON(_: any): _127.QueryUnpoolWhitelistRequest;
            toJSON(_: _127.QueryUnpoolWhitelistRequest): unknown;
            fromPartial(_: Partial<_127.QueryUnpoolWhitelistRequest>): _127.QueryUnpoolWhitelistRequest;
            fromSDK(_: _127.QueryUnpoolWhitelistRequestSDKType): _127.QueryUnpoolWhitelistRequest;
            toSDK(_: _127.QueryUnpoolWhitelistRequest): _127.QueryUnpoolWhitelistRequestSDKType;
            fromAmino(_: _127.QueryUnpoolWhitelistRequestAmino): _127.QueryUnpoolWhitelistRequest;
            toAmino(_: _127.QueryUnpoolWhitelistRequest): _127.QueryUnpoolWhitelistRequestAmino;
            fromAminoMsg(object: _127.QueryUnpoolWhitelistRequestAminoMsg): _127.QueryUnpoolWhitelistRequest;
            toAminoMsg(message: _127.QueryUnpoolWhitelistRequest): _127.QueryUnpoolWhitelistRequestAminoMsg;
            fromProtoMsg(message: _127.QueryUnpoolWhitelistRequestProtoMsg): _127.QueryUnpoolWhitelistRequest;
            toProto(message: _127.QueryUnpoolWhitelistRequest): Uint8Array;
            toProtoMsg(message: _127.QueryUnpoolWhitelistRequest): _127.QueryUnpoolWhitelistRequestProtoMsg;
        };
        QueryUnpoolWhitelistResponse: {
            typeUrl: string;
            encode(message: _127.QueryUnpoolWhitelistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryUnpoolWhitelistResponse;
            fromJSON(object: any): _127.QueryUnpoolWhitelistResponse;
            toJSON(message: _127.QueryUnpoolWhitelistResponse): unknown;
            fromPartial(object: Partial<_127.QueryUnpoolWhitelistResponse>): _127.QueryUnpoolWhitelistResponse;
            fromSDK(object: _127.QueryUnpoolWhitelistResponseSDKType): _127.QueryUnpoolWhitelistResponse;
            toSDK(message: _127.QueryUnpoolWhitelistResponse): _127.QueryUnpoolWhitelistResponseSDKType;
            fromAmino(object: _127.QueryUnpoolWhitelistResponseAmino): _127.QueryUnpoolWhitelistResponse;
            toAmino(message: _127.QueryUnpoolWhitelistResponse): _127.QueryUnpoolWhitelistResponseAmino;
            fromAminoMsg(object: _127.QueryUnpoolWhitelistResponseAminoMsg): _127.QueryUnpoolWhitelistResponse;
            toAminoMsg(message: _127.QueryUnpoolWhitelistResponse): _127.QueryUnpoolWhitelistResponseAminoMsg;
            fromProtoMsg(message: _127.QueryUnpoolWhitelistResponseProtoMsg): _127.QueryUnpoolWhitelistResponse;
            toProto(message: _127.QueryUnpoolWhitelistResponse): Uint8Array;
            toProtoMsg(message: _127.QueryUnpoolWhitelistResponse): _127.QueryUnpoolWhitelistResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _126.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.Params;
            fromJSON(object: any): _126.Params;
            toJSON(message: _126.Params): unknown;
            fromPartial(object: Partial<_126.Params>): _126.Params;
            fromSDK(object: _126.ParamsSDKType): _126.Params;
            toSDK(message: _126.Params): _126.ParamsSDKType;
            fromAmino(object: _126.ParamsAmino): _126.Params;
            toAmino(message: _126.Params): _126.ParamsAmino;
            fromAminoMsg(object: _126.ParamsAminoMsg): _126.Params;
            toAminoMsg(message: _126.Params): _126.ParamsAminoMsg;
            fromProtoMsg(message: _126.ParamsProtoMsg): _126.Params;
            toProto(message: _126.Params): Uint8Array;
            toProtoMsg(message: _126.Params): _126.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _125.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.GenesisState;
            fromJSON(object: any): _125.GenesisState;
            toJSON(message: _125.GenesisState): unknown;
            fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
            fromSDK(object: _125.GenesisStateSDKType): _125.GenesisState;
            toSDK(message: _125.GenesisState): _125.GenesisStateSDKType;
            fromAmino(object: _125.GenesisStateAmino): _125.GenesisState;
            toAmino(message: _125.GenesisState): _125.GenesisStateAmino;
            fromAminoMsg(object: _125.GenesisStateAminoMsg): _125.GenesisState;
            toAminoMsg(message: _125.GenesisState): _125.GenesisStateAminoMsg;
            fromProtoMsg(message: _125.GenesisStateProtoMsg): _125.GenesisState;
            toProto(message: _125.GenesisState): Uint8Array;
            toProtoMsg(message: _125.GenesisState): _125.GenesisStateProtoMsg;
        };
    };
    namespace swaprouter {
        const v1beta1: {
            Msg: typeof _293.Msg;
            Query: typeof _281.Query;
            QueryClientImpl: typeof _281.QueryClientImpl;
            LCDQueryClient: typeof _265.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _134.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _134.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _134.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _134.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _134.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _134.MsgSwapExactAmountOut;
                    };
                };
                toJSON: {
                    swapExactAmountIn(value: _134.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _134.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _134.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _134.MsgSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _134.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _134.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _134.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _134.MsgSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _134.MsgSwapExactAmountIn) => _134.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _134.MsgSwapExactAmountInAmino) => _134.MsgSwapExactAmountIn;
                };
                "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _134.MsgSwapExactAmountOut) => _134.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _134.MsgSwapExactAmountOutAmino) => _134.MsgSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _134.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgSwapExactAmountIn;
                fromJSON(object: any): _134.MsgSwapExactAmountIn;
                toJSON(message: _134.MsgSwapExactAmountIn): unknown;
                fromPartial(object: Partial<_134.MsgSwapExactAmountIn>): _134.MsgSwapExactAmountIn;
                fromSDK(object: _134.MsgSwapExactAmountInSDKType): _134.MsgSwapExactAmountIn;
                toSDK(message: _134.MsgSwapExactAmountIn): _134.MsgSwapExactAmountInSDKType;
                fromAmino(object: _134.MsgSwapExactAmountInAmino): _134.MsgSwapExactAmountIn;
                toAmino(message: _134.MsgSwapExactAmountIn): _134.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _134.MsgSwapExactAmountInAminoMsg): _134.MsgSwapExactAmountIn;
                toAminoMsg(message: _134.MsgSwapExactAmountIn): _134.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _134.MsgSwapExactAmountInProtoMsg): _134.MsgSwapExactAmountIn;
                toProto(message: _134.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _134.MsgSwapExactAmountIn): _134.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _134.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _134.MsgSwapExactAmountInResponse;
                toJSON(message: _134.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_134.MsgSwapExactAmountInResponse>): _134.MsgSwapExactAmountInResponse;
                fromSDK(object: _134.MsgSwapExactAmountInResponseSDKType): _134.MsgSwapExactAmountInResponse;
                toSDK(message: _134.MsgSwapExactAmountInResponse): _134.MsgSwapExactAmountInResponseSDKType;
                fromAmino(object: _134.MsgSwapExactAmountInResponseAmino): _134.MsgSwapExactAmountInResponse;
                toAmino(message: _134.MsgSwapExactAmountInResponse): _134.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _134.MsgSwapExactAmountInResponseAminoMsg): _134.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _134.MsgSwapExactAmountInResponse): _134.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _134.MsgSwapExactAmountInResponseProtoMsg): _134.MsgSwapExactAmountInResponse;
                toProto(message: _134.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _134.MsgSwapExactAmountInResponse): _134.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _134.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgSwapExactAmountOut;
                fromJSON(object: any): _134.MsgSwapExactAmountOut;
                toJSON(message: _134.MsgSwapExactAmountOut): unknown;
                fromPartial(object: Partial<_134.MsgSwapExactAmountOut>): _134.MsgSwapExactAmountOut;
                fromSDK(object: _134.MsgSwapExactAmountOutSDKType): _134.MsgSwapExactAmountOut;
                toSDK(message: _134.MsgSwapExactAmountOut): _134.MsgSwapExactAmountOutSDKType;
                fromAmino(object: _134.MsgSwapExactAmountOutAmino): _134.MsgSwapExactAmountOut;
                toAmino(message: _134.MsgSwapExactAmountOut): _134.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _134.MsgSwapExactAmountOutAminoMsg): _134.MsgSwapExactAmountOut;
                toAminoMsg(message: _134.MsgSwapExactAmountOut): _134.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _134.MsgSwapExactAmountOutProtoMsg): _134.MsgSwapExactAmountOut;
                toProto(message: _134.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _134.MsgSwapExactAmountOut): _134.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _134.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _134.MsgSwapExactAmountOutResponse;
                toJSON(message: _134.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_134.MsgSwapExactAmountOutResponse>): _134.MsgSwapExactAmountOutResponse;
                fromSDK(object: _134.MsgSwapExactAmountOutResponseSDKType): _134.MsgSwapExactAmountOutResponse;
                toSDK(message: _134.MsgSwapExactAmountOutResponse): _134.MsgSwapExactAmountOutResponseSDKType;
                fromAmino(object: _134.MsgSwapExactAmountOutResponseAmino): _134.MsgSwapExactAmountOutResponse;
                toAmino(message: _134.MsgSwapExactAmountOutResponse): _134.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _134.MsgSwapExactAmountOutResponseAminoMsg): _134.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _134.MsgSwapExactAmountOutResponse): _134.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _134.MsgSwapExactAmountOutResponseProtoMsg): _134.MsgSwapExactAmountOutResponse;
                toProto(message: _134.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _134.MsgSwapExactAmountOutResponse): _134.MsgSwapExactAmountOutResponseProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _133.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.SwapAmountInRoute;
                fromJSON(object: any): _133.SwapAmountInRoute;
                toJSON(message: _133.SwapAmountInRoute): unknown;
                fromPartial(object: Partial<_133.SwapAmountInRoute>): _133.SwapAmountInRoute;
                fromSDK(object: _133.SwapAmountInRouteSDKType): _133.SwapAmountInRoute;
                toSDK(message: _133.SwapAmountInRoute): _133.SwapAmountInRouteSDKType;
                fromAmino(object: _133.SwapAmountInRouteAmino): _133.SwapAmountInRoute;
                toAmino(message: _133.SwapAmountInRoute): _133.SwapAmountInRouteAmino;
                fromAminoMsg(object: _133.SwapAmountInRouteAminoMsg): _133.SwapAmountInRoute;
                toAminoMsg(message: _133.SwapAmountInRoute): _133.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _133.SwapAmountInRouteProtoMsg): _133.SwapAmountInRoute;
                toProto(message: _133.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _133.SwapAmountInRoute): _133.SwapAmountInRouteProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _133.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.SwapAmountOutRoute;
                fromJSON(object: any): _133.SwapAmountOutRoute;
                toJSON(message: _133.SwapAmountOutRoute): unknown;
                fromPartial(object: Partial<_133.SwapAmountOutRoute>): _133.SwapAmountOutRoute;
                fromSDK(object: _133.SwapAmountOutRouteSDKType): _133.SwapAmountOutRoute;
                toSDK(message: _133.SwapAmountOutRoute): _133.SwapAmountOutRouteSDKType;
                fromAmino(object: _133.SwapAmountOutRouteAmino): _133.SwapAmountOutRoute;
                toAmino(message: _133.SwapAmountOutRoute): _133.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _133.SwapAmountOutRouteAminoMsg): _133.SwapAmountOutRoute;
                toAminoMsg(message: _133.SwapAmountOutRoute): _133.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _133.SwapAmountOutRouteProtoMsg): _133.SwapAmountOutRoute;
                toProto(message: _133.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _133.SwapAmountOutRoute): _133.SwapAmountOutRouteProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _132.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.ParamsRequest;
                fromJSON(_: any): _132.ParamsRequest;
                toJSON(_: _132.ParamsRequest): unknown;
                fromPartial(_: Partial<_132.ParamsRequest>): _132.ParamsRequest;
                fromSDK(_: _132.ParamsRequestSDKType): _132.ParamsRequest;
                toSDK(_: _132.ParamsRequest): _132.ParamsRequestSDKType;
                fromAmino(_: _132.ParamsRequestAmino): _132.ParamsRequest;
                toAmino(_: _132.ParamsRequest): _132.ParamsRequestAmino;
                fromAminoMsg(object: _132.ParamsRequestAminoMsg): _132.ParamsRequest;
                toAminoMsg(message: _132.ParamsRequest): _132.ParamsRequestAminoMsg;
                fromProtoMsg(message: _132.ParamsRequestProtoMsg): _132.ParamsRequest;
                toProto(message: _132.ParamsRequest): Uint8Array;
                toProtoMsg(message: _132.ParamsRequest): _132.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _132.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.ParamsResponse;
                fromJSON(object: any): _132.ParamsResponse;
                toJSON(message: _132.ParamsResponse): unknown;
                fromPartial(object: Partial<_132.ParamsResponse>): _132.ParamsResponse;
                fromSDK(object: _132.ParamsResponseSDKType): _132.ParamsResponse;
                toSDK(message: _132.ParamsResponse): _132.ParamsResponseSDKType;
                fromAmino(object: _132.ParamsResponseAmino): _132.ParamsResponse;
                toAmino(message: _132.ParamsResponse): _132.ParamsResponseAmino;
                fromAminoMsg(object: _132.ParamsResponseAminoMsg): _132.ParamsResponse;
                toAminoMsg(message: _132.ParamsResponse): _132.ParamsResponseAminoMsg;
                fromProtoMsg(message: _132.ParamsResponseProtoMsg): _132.ParamsResponse;
                toProto(message: _132.ParamsResponse): Uint8Array;
                toProtoMsg(message: _132.ParamsResponse): _132.ParamsResponseProtoMsg;
            };
            EstimateSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _132.EstimateSwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.EstimateSwapExactAmountInRequest;
                fromJSON(object: any): _132.EstimateSwapExactAmountInRequest;
                toJSON(message: _132.EstimateSwapExactAmountInRequest): unknown;
                fromPartial(object: Partial<_132.EstimateSwapExactAmountInRequest>): _132.EstimateSwapExactAmountInRequest;
                fromSDK(object: _132.EstimateSwapExactAmountInRequestSDKType): _132.EstimateSwapExactAmountInRequest;
                toSDK(message: _132.EstimateSwapExactAmountInRequest): _132.EstimateSwapExactAmountInRequestSDKType;
                fromAmino(object: _132.EstimateSwapExactAmountInRequestAmino): _132.EstimateSwapExactAmountInRequest;
                toAmino(message: _132.EstimateSwapExactAmountInRequest): _132.EstimateSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _132.EstimateSwapExactAmountInRequestAminoMsg): _132.EstimateSwapExactAmountInRequest;
                toAminoMsg(message: _132.EstimateSwapExactAmountInRequest): _132.EstimateSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _132.EstimateSwapExactAmountInRequestProtoMsg): _132.EstimateSwapExactAmountInRequest;
                toProto(message: _132.EstimateSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _132.EstimateSwapExactAmountInRequest): _132.EstimateSwapExactAmountInRequestProtoMsg;
            };
            EstimateSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _132.EstimateSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.EstimateSwapExactAmountInResponse;
                fromJSON(object: any): _132.EstimateSwapExactAmountInResponse;
                toJSON(message: _132.EstimateSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_132.EstimateSwapExactAmountInResponse>): _132.EstimateSwapExactAmountInResponse;
                fromSDK(object: _132.EstimateSwapExactAmountInResponseSDKType): _132.EstimateSwapExactAmountInResponse;
                toSDK(message: _132.EstimateSwapExactAmountInResponse): _132.EstimateSwapExactAmountInResponseSDKType;
                fromAmino(object: _132.EstimateSwapExactAmountInResponseAmino): _132.EstimateSwapExactAmountInResponse;
                toAmino(message: _132.EstimateSwapExactAmountInResponse): _132.EstimateSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _132.EstimateSwapExactAmountInResponseAminoMsg): _132.EstimateSwapExactAmountInResponse;
                toAminoMsg(message: _132.EstimateSwapExactAmountInResponse): _132.EstimateSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _132.EstimateSwapExactAmountInResponseProtoMsg): _132.EstimateSwapExactAmountInResponse;
                toProto(message: _132.EstimateSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _132.EstimateSwapExactAmountInResponse): _132.EstimateSwapExactAmountInResponseProtoMsg;
            };
            EstimateSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _132.EstimateSwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.EstimateSwapExactAmountOutRequest;
                fromJSON(object: any): _132.EstimateSwapExactAmountOutRequest;
                toJSON(message: _132.EstimateSwapExactAmountOutRequest): unknown;
                fromPartial(object: Partial<_132.EstimateSwapExactAmountOutRequest>): _132.EstimateSwapExactAmountOutRequest;
                fromSDK(object: _132.EstimateSwapExactAmountOutRequestSDKType): _132.EstimateSwapExactAmountOutRequest;
                toSDK(message: _132.EstimateSwapExactAmountOutRequest): _132.EstimateSwapExactAmountOutRequestSDKType;
                fromAmino(object: _132.EstimateSwapExactAmountOutRequestAmino): _132.EstimateSwapExactAmountOutRequest;
                toAmino(message: _132.EstimateSwapExactAmountOutRequest): _132.EstimateSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _132.EstimateSwapExactAmountOutRequestAminoMsg): _132.EstimateSwapExactAmountOutRequest;
                toAminoMsg(message: _132.EstimateSwapExactAmountOutRequest): _132.EstimateSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _132.EstimateSwapExactAmountOutRequestProtoMsg): _132.EstimateSwapExactAmountOutRequest;
                toProto(message: _132.EstimateSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _132.EstimateSwapExactAmountOutRequest): _132.EstimateSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _132.EstimateSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.EstimateSwapExactAmountOutResponse;
                fromJSON(object: any): _132.EstimateSwapExactAmountOutResponse;
                toJSON(message: _132.EstimateSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_132.EstimateSwapExactAmountOutResponse>): _132.EstimateSwapExactAmountOutResponse;
                fromSDK(object: _132.EstimateSwapExactAmountOutResponseSDKType): _132.EstimateSwapExactAmountOutResponse;
                toSDK(message: _132.EstimateSwapExactAmountOutResponse): _132.EstimateSwapExactAmountOutResponseSDKType;
                fromAmino(object: _132.EstimateSwapExactAmountOutResponseAmino): _132.EstimateSwapExactAmountOutResponse;
                toAmino(message: _132.EstimateSwapExactAmountOutResponse): _132.EstimateSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _132.EstimateSwapExactAmountOutResponseAminoMsg): _132.EstimateSwapExactAmountOutResponse;
                toAminoMsg(message: _132.EstimateSwapExactAmountOutResponse): _132.EstimateSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _132.EstimateSwapExactAmountOutResponseProtoMsg): _132.EstimateSwapExactAmountOutResponse;
                toProto(message: _132.EstimateSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _132.EstimateSwapExactAmountOutResponse): _132.EstimateSwapExactAmountOutResponseProtoMsg;
            };
            NumPoolsRequest: {
                typeUrl: string;
                encode(_: _132.NumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.NumPoolsRequest;
                fromJSON(_: any): _132.NumPoolsRequest;
                toJSON(_: _132.NumPoolsRequest): unknown;
                fromPartial(_: Partial<_132.NumPoolsRequest>): _132.NumPoolsRequest;
                fromSDK(_: _132.NumPoolsRequestSDKType): _132.NumPoolsRequest;
                toSDK(_: _132.NumPoolsRequest): _132.NumPoolsRequestSDKType;
                fromAmino(_: _132.NumPoolsRequestAmino): _132.NumPoolsRequest;
                toAmino(_: _132.NumPoolsRequest): _132.NumPoolsRequestAmino;
                fromAminoMsg(object: _132.NumPoolsRequestAminoMsg): _132.NumPoolsRequest;
                toAminoMsg(message: _132.NumPoolsRequest): _132.NumPoolsRequestAminoMsg;
                fromProtoMsg(message: _132.NumPoolsRequestProtoMsg): _132.NumPoolsRequest;
                toProto(message: _132.NumPoolsRequest): Uint8Array;
                toProtoMsg(message: _132.NumPoolsRequest): _132.NumPoolsRequestProtoMsg;
            };
            NumPoolsResponse: {
                typeUrl: string;
                encode(message: _132.NumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.NumPoolsResponse;
                fromJSON(object: any): _132.NumPoolsResponse;
                toJSON(message: _132.NumPoolsResponse): unknown;
                fromPartial(object: Partial<_132.NumPoolsResponse>): _132.NumPoolsResponse;
                fromSDK(object: _132.NumPoolsResponseSDKType): _132.NumPoolsResponse;
                toSDK(message: _132.NumPoolsResponse): _132.NumPoolsResponseSDKType;
                fromAmino(object: _132.NumPoolsResponseAmino): _132.NumPoolsResponse;
                toAmino(message: _132.NumPoolsResponse): _132.NumPoolsResponseAmino;
                fromAminoMsg(object: _132.NumPoolsResponseAminoMsg): _132.NumPoolsResponse;
                toAminoMsg(message: _132.NumPoolsResponse): _132.NumPoolsResponseAminoMsg;
                fromProtoMsg(message: _132.NumPoolsResponseProtoMsg): _132.NumPoolsResponse;
                toProto(message: _132.NumPoolsResponse): Uint8Array;
                toProtoMsg(message: _132.NumPoolsResponse): _132.NumPoolsResponseProtoMsg;
            };
            poolTypeFromJSON(object: any): _131.PoolType;
            poolTypeToJSON(object: _131.PoolType): string;
            PoolType: typeof _131.PoolType;
            PoolTypeSDKType: typeof _131.PoolType;
            PoolTypeAmino: typeof _131.PoolType;
            ModuleRoute: {
                typeUrl: string;
                encode(message: _131.ModuleRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.ModuleRoute;
                fromJSON(object: any): _131.ModuleRoute;
                toJSON(message: _131.ModuleRoute): unknown;
                fromPartial(object: Partial<_131.ModuleRoute>): _131.ModuleRoute;
                fromSDK(object: _131.ModuleRouteSDKType): _131.ModuleRoute;
                toSDK(message: _131.ModuleRoute): _131.ModuleRouteSDKType;
                fromAmino(object: _131.ModuleRouteAmino): _131.ModuleRoute;
                toAmino(message: _131.ModuleRoute): _131.ModuleRouteAmino;
                fromAminoMsg(object: _131.ModuleRouteAminoMsg): _131.ModuleRoute;
                toAminoMsg(message: _131.ModuleRoute): _131.ModuleRouteAminoMsg;
                fromProtoMsg(message: _131.ModuleRouteProtoMsg): _131.ModuleRoute;
                toProto(message: _131.ModuleRoute): Uint8Array;
                toProtoMsg(message: _131.ModuleRoute): _131.ModuleRouteProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _130.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Params;
                fromJSON(object: any): _130.Params;
                toJSON(message: _130.Params): unknown;
                fromPartial(object: Partial<_130.Params>): _130.Params;
                fromSDK(object: _130.ParamsSDKType): _130.Params;
                toSDK(message: _130.Params): _130.ParamsSDKType;
                fromAmino(object: _130.ParamsAmino): _130.Params;
                toAmino(message: _130.Params): _130.ParamsAmino;
                fromAminoMsg(object: _130.ParamsAminoMsg): _130.Params;
                toAminoMsg(message: _130.Params): _130.ParamsAminoMsg;
                fromProtoMsg(message: _130.ParamsProtoMsg): _130.Params;
                toProto(message: _130.Params): Uint8Array;
                toProtoMsg(message: _130.Params): _130.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _130.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.GenesisState;
                fromJSON(object: any): _130.GenesisState;
                toJSON(message: _130.GenesisState): unknown;
                fromPartial(object: Partial<_130.GenesisState>): _130.GenesisState;
                fromSDK(object: _130.GenesisStateSDKType): _130.GenesisState;
                toSDK(message: _130.GenesisState): _130.GenesisStateSDKType;
                fromAmino(object: _130.GenesisStateAmino): _130.GenesisState;
                toAmino(message: _130.GenesisState): _130.GenesisStateAmino;
                fromAminoMsg(object: _130.GenesisStateAminoMsg): _130.GenesisState;
                toAminoMsg(message: _130.GenesisState): _130.GenesisStateAminoMsg;
                fromProtoMsg(message: _130.GenesisStateProtoMsg): _130.GenesisState;
                toProto(message: _130.GenesisState): Uint8Array;
                toProtoMsg(message: _130.GenesisState): _130.GenesisStateProtoMsg;
            };
        };
    }
    namespace tokenfactory {
        const v1beta1: {
            Msg: typeof _294.Msg;
            Query: typeof _282.Query;
            QueryClientImpl: typeof _282.QueryClientImpl;
            LCDQueryClient: typeof _266.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _139.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _139.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _139.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _139.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _139.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _139.MsgCreateDenom): {
                        typeUrl: string;
                        value: _139.MsgCreateDenom;
                    };
                    mint(value: _139.MsgMint): {
                        typeUrl: string;
                        value: _139.MsgMint;
                    };
                    burn(value: _139.MsgBurn): {
                        typeUrl: string;
                        value: _139.MsgBurn;
                    };
                    changeAdmin(value: _139.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _139.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _139.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _139.MsgSetDenomMetadata;
                    };
                };
                toJSON: {
                    createDenom(value: _139.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _139.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _139.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _139.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDenomMetadata(value: _139.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _139.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _139.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _139.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _139.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _139.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _139.MsgCreateDenom): {
                        typeUrl: string;
                        value: _139.MsgCreateDenom;
                    };
                    mint(value: _139.MsgMint): {
                        typeUrl: string;
                        value: _139.MsgMint;
                    };
                    burn(value: _139.MsgBurn): {
                        typeUrl: string;
                        value: _139.MsgBurn;
                    };
                    changeAdmin(value: _139.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _139.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _139.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _139.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _139.MsgCreateDenom) => _139.MsgCreateDenomAmino;
                    fromAmino: (object: _139.MsgCreateDenomAmino) => _139.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _139.MsgMint) => _139.MsgMintAmino;
                    fromAmino: (object: _139.MsgMintAmino) => _139.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _139.MsgBurn) => _139.MsgBurnAmino;
                    fromAmino: (object: _139.MsgBurnAmino) => _139.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _139.MsgChangeAdmin) => _139.MsgChangeAdminAmino;
                    fromAmino: (object: _139.MsgChangeAdminAmino) => _139.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _139.MsgSetDenomMetadata) => _139.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _139.MsgSetDenomMetadataAmino) => _139.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _139.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgCreateDenom;
                fromJSON(object: any): _139.MsgCreateDenom;
                toJSON(message: _139.MsgCreateDenom): unknown;
                fromPartial(object: Partial<_139.MsgCreateDenom>): _139.MsgCreateDenom;
                fromSDK(object: _139.MsgCreateDenomSDKType): _139.MsgCreateDenom;
                toSDK(message: _139.MsgCreateDenom): _139.MsgCreateDenomSDKType;
                fromAmino(object: _139.MsgCreateDenomAmino): _139.MsgCreateDenom;
                toAmino(message: _139.MsgCreateDenom): _139.MsgCreateDenomAmino;
                fromAminoMsg(object: _139.MsgCreateDenomAminoMsg): _139.MsgCreateDenom;
                toAminoMsg(message: _139.MsgCreateDenom): _139.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _139.MsgCreateDenomProtoMsg): _139.MsgCreateDenom;
                toProto(message: _139.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _139.MsgCreateDenom): _139.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _139.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgCreateDenomResponse;
                fromJSON(object: any): _139.MsgCreateDenomResponse;
                toJSON(message: _139.MsgCreateDenomResponse): unknown;
                fromPartial(object: Partial<_139.MsgCreateDenomResponse>): _139.MsgCreateDenomResponse;
                fromSDK(object: _139.MsgCreateDenomResponseSDKType): _139.MsgCreateDenomResponse;
                toSDK(message: _139.MsgCreateDenomResponse): _139.MsgCreateDenomResponseSDKType;
                fromAmino(object: _139.MsgCreateDenomResponseAmino): _139.MsgCreateDenomResponse;
                toAmino(message: _139.MsgCreateDenomResponse): _139.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _139.MsgCreateDenomResponseAminoMsg): _139.MsgCreateDenomResponse;
                toAminoMsg(message: _139.MsgCreateDenomResponse): _139.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _139.MsgCreateDenomResponseProtoMsg): _139.MsgCreateDenomResponse;
                toProto(message: _139.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _139.MsgCreateDenomResponse): _139.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _139.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgMint;
                fromJSON(object: any): _139.MsgMint;
                toJSON(message: _139.MsgMint): unknown;
                fromPartial(object: Partial<_139.MsgMint>): _139.MsgMint;
                fromSDK(object: _139.MsgMintSDKType): _139.MsgMint;
                toSDK(message: _139.MsgMint): _139.MsgMintSDKType;
                fromAmino(object: _139.MsgMintAmino): _139.MsgMint;
                toAmino(message: _139.MsgMint): _139.MsgMintAmino;
                fromAminoMsg(object: _139.MsgMintAminoMsg): _139.MsgMint;
                toAminoMsg(message: _139.MsgMint): _139.MsgMintAminoMsg;
                fromProtoMsg(message: _139.MsgMintProtoMsg): _139.MsgMint;
                toProto(message: _139.MsgMint): Uint8Array;
                toProtoMsg(message: _139.MsgMint): _139.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _139.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgMintResponse;
                fromJSON(_: any): _139.MsgMintResponse;
                toJSON(_: _139.MsgMintResponse): unknown;
                fromPartial(_: Partial<_139.MsgMintResponse>): _139.MsgMintResponse;
                fromSDK(_: _139.MsgMintResponseSDKType): _139.MsgMintResponse;
                toSDK(_: _139.MsgMintResponse): _139.MsgMintResponseSDKType;
                fromAmino(_: _139.MsgMintResponseAmino): _139.MsgMintResponse;
                toAmino(_: _139.MsgMintResponse): _139.MsgMintResponseAmino;
                fromAminoMsg(object: _139.MsgMintResponseAminoMsg): _139.MsgMintResponse;
                toAminoMsg(message: _139.MsgMintResponse): _139.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _139.MsgMintResponseProtoMsg): _139.MsgMintResponse;
                toProto(message: _139.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _139.MsgMintResponse): _139.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _139.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgBurn;
                fromJSON(object: any): _139.MsgBurn;
                toJSON(message: _139.MsgBurn): unknown;
                fromPartial(object: Partial<_139.MsgBurn>): _139.MsgBurn;
                fromSDK(object: _139.MsgBurnSDKType): _139.MsgBurn;
                toSDK(message: _139.MsgBurn): _139.MsgBurnSDKType;
                fromAmino(object: _139.MsgBurnAmino): _139.MsgBurn;
                toAmino(message: _139.MsgBurn): _139.MsgBurnAmino;
                fromAminoMsg(object: _139.MsgBurnAminoMsg): _139.MsgBurn;
                toAminoMsg(message: _139.MsgBurn): _139.MsgBurnAminoMsg;
                fromProtoMsg(message: _139.MsgBurnProtoMsg): _139.MsgBurn;
                toProto(message: _139.MsgBurn): Uint8Array;
                toProtoMsg(message: _139.MsgBurn): _139.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _139.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgBurnResponse;
                fromJSON(_: any): _139.MsgBurnResponse;
                toJSON(_: _139.MsgBurnResponse): unknown;
                fromPartial(_: Partial<_139.MsgBurnResponse>): _139.MsgBurnResponse;
                fromSDK(_: _139.MsgBurnResponseSDKType): _139.MsgBurnResponse;
                toSDK(_: _139.MsgBurnResponse): _139.MsgBurnResponseSDKType;
                fromAmino(_: _139.MsgBurnResponseAmino): _139.MsgBurnResponse;
                toAmino(_: _139.MsgBurnResponse): _139.MsgBurnResponseAmino;
                fromAminoMsg(object: _139.MsgBurnResponseAminoMsg): _139.MsgBurnResponse;
                toAminoMsg(message: _139.MsgBurnResponse): _139.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _139.MsgBurnResponseProtoMsg): _139.MsgBurnResponse;
                toProto(message: _139.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _139.MsgBurnResponse): _139.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _139.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgChangeAdmin;
                fromJSON(object: any): _139.MsgChangeAdmin;
                toJSON(message: _139.MsgChangeAdmin): unknown;
                fromPartial(object: Partial<_139.MsgChangeAdmin>): _139.MsgChangeAdmin;
                fromSDK(object: _139.MsgChangeAdminSDKType): _139.MsgChangeAdmin;
                toSDK(message: _139.MsgChangeAdmin): _139.MsgChangeAdminSDKType;
                fromAmino(object: _139.MsgChangeAdminAmino): _139.MsgChangeAdmin;
                toAmino(message: _139.MsgChangeAdmin): _139.MsgChangeAdminAmino;
                fromAminoMsg(object: _139.MsgChangeAdminAminoMsg): _139.MsgChangeAdmin;
                toAminoMsg(message: _139.MsgChangeAdmin): _139.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _139.MsgChangeAdminProtoMsg): _139.MsgChangeAdmin;
                toProto(message: _139.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _139.MsgChangeAdmin): _139.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _139.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgChangeAdminResponse;
                fromJSON(_: any): _139.MsgChangeAdminResponse;
                toJSON(_: _139.MsgChangeAdminResponse): unknown;
                fromPartial(_: Partial<_139.MsgChangeAdminResponse>): _139.MsgChangeAdminResponse;
                fromSDK(_: _139.MsgChangeAdminResponseSDKType): _139.MsgChangeAdminResponse;
                toSDK(_: _139.MsgChangeAdminResponse): _139.MsgChangeAdminResponseSDKType;
                fromAmino(_: _139.MsgChangeAdminResponseAmino): _139.MsgChangeAdminResponse;
                toAmino(_: _139.MsgChangeAdminResponse): _139.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _139.MsgChangeAdminResponseAminoMsg): _139.MsgChangeAdminResponse;
                toAminoMsg(message: _139.MsgChangeAdminResponse): _139.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _139.MsgChangeAdminResponseProtoMsg): _139.MsgChangeAdminResponse;
                toProto(message: _139.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _139.MsgChangeAdminResponse): _139.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _139.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgSetDenomMetadata;
                fromJSON(object: any): _139.MsgSetDenomMetadata;
                toJSON(message: _139.MsgSetDenomMetadata): unknown;
                fromPartial(object: Partial<_139.MsgSetDenomMetadata>): _139.MsgSetDenomMetadata;
                fromSDK(object: _139.MsgSetDenomMetadataSDKType): _139.MsgSetDenomMetadata;
                toSDK(message: _139.MsgSetDenomMetadata): _139.MsgSetDenomMetadataSDKType;
                fromAmino(object: _139.MsgSetDenomMetadataAmino): _139.MsgSetDenomMetadata;
                toAmino(message: _139.MsgSetDenomMetadata): _139.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _139.MsgSetDenomMetadataAminoMsg): _139.MsgSetDenomMetadata;
                toAminoMsg(message: _139.MsgSetDenomMetadata): _139.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _139.MsgSetDenomMetadataProtoMsg): _139.MsgSetDenomMetadata;
                toProto(message: _139.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _139.MsgSetDenomMetadata): _139.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _139.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.MsgSetDenomMetadataResponse;
                fromJSON(_: any): _139.MsgSetDenomMetadataResponse;
                toJSON(_: _139.MsgSetDenomMetadataResponse): unknown;
                fromPartial(_: Partial<_139.MsgSetDenomMetadataResponse>): _139.MsgSetDenomMetadataResponse;
                fromSDK(_: _139.MsgSetDenomMetadataResponseSDKType): _139.MsgSetDenomMetadataResponse;
                toSDK(_: _139.MsgSetDenomMetadataResponse): _139.MsgSetDenomMetadataResponseSDKType;
                fromAmino(_: _139.MsgSetDenomMetadataResponseAmino): _139.MsgSetDenomMetadataResponse;
                toAmino(_: _139.MsgSetDenomMetadataResponse): _139.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _139.MsgSetDenomMetadataResponseAminoMsg): _139.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _139.MsgSetDenomMetadataResponse): _139.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _139.MsgSetDenomMetadataResponseProtoMsg): _139.MsgSetDenomMetadataResponse;
                toProto(message: _139.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _139.MsgSetDenomMetadataResponse): _139.MsgSetDenomMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _138.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryParamsRequest;
                fromJSON(_: any): _138.QueryParamsRequest;
                toJSON(_: _138.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_138.QueryParamsRequest>): _138.QueryParamsRequest;
                fromSDK(_: _138.QueryParamsRequestSDKType): _138.QueryParamsRequest;
                toSDK(_: _138.QueryParamsRequest): _138.QueryParamsRequestSDKType;
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
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryParamsResponse;
                fromJSON(object: any): _138.QueryParamsResponse;
                toJSON(message: _138.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_138.QueryParamsResponse>): _138.QueryParamsResponse;
                fromSDK(object: _138.QueryParamsResponseSDKType): _138.QueryParamsResponse;
                toSDK(message: _138.QueryParamsResponse): _138.QueryParamsResponseSDKType;
                fromAmino(object: _138.QueryParamsResponseAmino): _138.QueryParamsResponse;
                toAmino(message: _138.QueryParamsResponse): _138.QueryParamsResponseAmino;
                fromAminoMsg(object: _138.QueryParamsResponseAminoMsg): _138.QueryParamsResponse;
                toAminoMsg(message: _138.QueryParamsResponse): _138.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _138.QueryParamsResponseProtoMsg): _138.QueryParamsResponse;
                toProto(message: _138.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _138.QueryParamsResponse): _138.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _138.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _138.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _138.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: Partial<_138.QueryDenomAuthorityMetadataRequest>): _138.QueryDenomAuthorityMetadataRequest;
                fromSDK(object: _138.QueryDenomAuthorityMetadataRequestSDKType): _138.QueryDenomAuthorityMetadataRequest;
                toSDK(message: _138.QueryDenomAuthorityMetadataRequest): _138.QueryDenomAuthorityMetadataRequestSDKType;
                fromAmino(object: _138.QueryDenomAuthorityMetadataRequestAmino): _138.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _138.QueryDenomAuthorityMetadataRequest): _138.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _138.QueryDenomAuthorityMetadataRequestAminoMsg): _138.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _138.QueryDenomAuthorityMetadataRequest): _138.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _138.QueryDenomAuthorityMetadataRequestProtoMsg): _138.QueryDenomAuthorityMetadataRequest;
                toProto(message: _138.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _138.QueryDenomAuthorityMetadataRequest): _138.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _138.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _138.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _138.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: Partial<_138.QueryDenomAuthorityMetadataResponse>): _138.QueryDenomAuthorityMetadataResponse;
                fromSDK(object: _138.QueryDenomAuthorityMetadataResponseSDKType): _138.QueryDenomAuthorityMetadataResponse;
                toSDK(message: _138.QueryDenomAuthorityMetadataResponse): _138.QueryDenomAuthorityMetadataResponseSDKType;
                fromAmino(object: _138.QueryDenomAuthorityMetadataResponseAmino): _138.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _138.QueryDenomAuthorityMetadataResponse): _138.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _138.QueryDenomAuthorityMetadataResponseAminoMsg): _138.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _138.QueryDenomAuthorityMetadataResponse): _138.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _138.QueryDenomAuthorityMetadataResponseProtoMsg): _138.QueryDenomAuthorityMetadataResponse;
                toProto(message: _138.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _138.QueryDenomAuthorityMetadataResponse): _138.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _138.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _138.QueryDenomsFromCreatorRequest;
                toJSON(message: _138.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: Partial<_138.QueryDenomsFromCreatorRequest>): _138.QueryDenomsFromCreatorRequest;
                fromSDK(object: _138.QueryDenomsFromCreatorRequestSDKType): _138.QueryDenomsFromCreatorRequest;
                toSDK(message: _138.QueryDenomsFromCreatorRequest): _138.QueryDenomsFromCreatorRequestSDKType;
                fromAmino(object: _138.QueryDenomsFromCreatorRequestAmino): _138.QueryDenomsFromCreatorRequest;
                toAmino(message: _138.QueryDenomsFromCreatorRequest): _138.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _138.QueryDenomsFromCreatorRequestAminoMsg): _138.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _138.QueryDenomsFromCreatorRequest): _138.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _138.QueryDenomsFromCreatorRequestProtoMsg): _138.QueryDenomsFromCreatorRequest;
                toProto(message: _138.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _138.QueryDenomsFromCreatorRequest): _138.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _138.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _138.QueryDenomsFromCreatorResponse;
                toJSON(message: _138.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: Partial<_138.QueryDenomsFromCreatorResponse>): _138.QueryDenomsFromCreatorResponse;
                fromSDK(object: _138.QueryDenomsFromCreatorResponseSDKType): _138.QueryDenomsFromCreatorResponse;
                toSDK(message: _138.QueryDenomsFromCreatorResponse): _138.QueryDenomsFromCreatorResponseSDKType;
                fromAmino(object: _138.QueryDenomsFromCreatorResponseAmino): _138.QueryDenomsFromCreatorResponse;
                toAmino(message: _138.QueryDenomsFromCreatorResponse): _138.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _138.QueryDenomsFromCreatorResponseAminoMsg): _138.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _138.QueryDenomsFromCreatorResponse): _138.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _138.QueryDenomsFromCreatorResponseProtoMsg): _138.QueryDenomsFromCreatorResponse;
                toProto(message: _138.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _138.QueryDenomsFromCreatorResponse): _138.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _137.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.Params;
                fromJSON(object: any): _137.Params;
                toJSON(message: _137.Params): unknown;
                fromPartial(object: Partial<_137.Params>): _137.Params;
                fromSDK(object: _137.ParamsSDKType): _137.Params;
                toSDK(message: _137.Params): _137.ParamsSDKType;
                fromAmino(object: _137.ParamsAmino): _137.Params;
                toAmino(message: _137.Params): _137.ParamsAmino;
                fromAminoMsg(object: _137.ParamsAminoMsg): _137.Params;
                toAminoMsg(message: _137.Params): _137.ParamsAminoMsg;
                fromProtoMsg(message: _137.ParamsProtoMsg): _137.Params;
                toProto(message: _137.Params): Uint8Array;
                toProtoMsg(message: _137.Params): _137.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _136.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.GenesisState;
                fromJSON(object: any): _136.GenesisState;
                toJSON(message: _136.GenesisState): unknown;
                fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
                fromSDK(object: _136.GenesisStateSDKType): _136.GenesisState;
                toSDK(message: _136.GenesisState): _136.GenesisStateSDKType;
                fromAmino(object: _136.GenesisStateAmino): _136.GenesisState;
                toAmino(message: _136.GenesisState): _136.GenesisStateAmino;
                fromAminoMsg(object: _136.GenesisStateAminoMsg): _136.GenesisState;
                toAminoMsg(message: _136.GenesisState): _136.GenesisStateAminoMsg;
                fromProtoMsg(message: _136.GenesisStateProtoMsg): _136.GenesisState;
                toProto(message: _136.GenesisState): Uint8Array;
                toProtoMsg(message: _136.GenesisState): _136.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _136.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.GenesisDenom;
                fromJSON(object: any): _136.GenesisDenom;
                toJSON(message: _136.GenesisDenom): unknown;
                fromPartial(object: Partial<_136.GenesisDenom>): _136.GenesisDenom;
                fromSDK(object: _136.GenesisDenomSDKType): _136.GenesisDenom;
                toSDK(message: _136.GenesisDenom): _136.GenesisDenomSDKType;
                fromAmino(object: _136.GenesisDenomAmino): _136.GenesisDenom;
                toAmino(message: _136.GenesisDenom): _136.GenesisDenomAmino;
                fromAminoMsg(object: _136.GenesisDenomAminoMsg): _136.GenesisDenom;
                toAminoMsg(message: _136.GenesisDenom): _136.GenesisDenomAminoMsg;
                fromProtoMsg(message: _136.GenesisDenomProtoMsg): _136.GenesisDenom;
                toProto(message: _136.GenesisDenom): Uint8Array;
                toProtoMsg(message: _136.GenesisDenom): _136.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _135.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.DenomAuthorityMetadata;
                fromJSON(object: any): _135.DenomAuthorityMetadata;
                toJSON(message: _135.DenomAuthorityMetadata): unknown;
                fromPartial(object: Partial<_135.DenomAuthorityMetadata>): _135.DenomAuthorityMetadata;
                fromSDK(object: _135.DenomAuthorityMetadataSDKType): _135.DenomAuthorityMetadata;
                toSDK(message: _135.DenomAuthorityMetadata): _135.DenomAuthorityMetadataSDKType;
                fromAmino(object: _135.DenomAuthorityMetadataAmino): _135.DenomAuthorityMetadata;
                toAmino(message: _135.DenomAuthorityMetadata): _135.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _135.DenomAuthorityMetadataAminoMsg): _135.DenomAuthorityMetadata;
                toAminoMsg(message: _135.DenomAuthorityMetadata): _135.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _135.DenomAuthorityMetadataProtoMsg): _135.DenomAuthorityMetadata;
                toProto(message: _135.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _135.DenomAuthorityMetadata): _135.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            Query: typeof _283.Query;
            QueryClientImpl: typeof _283.QueryClientImpl;
            LCDQueryClient: typeof _267.LCDQueryClient;
            TwapRecord: {
                typeUrl: string;
                encode(message: _142.TwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.TwapRecord;
                fromJSON(object: any): _142.TwapRecord;
                toJSON(message: _142.TwapRecord): unknown;
                fromPartial(object: Partial<_142.TwapRecord>): _142.TwapRecord;
                fromSDK(object: _142.TwapRecordSDKType): _142.TwapRecord;
                toSDK(message: _142.TwapRecord): _142.TwapRecordSDKType;
                fromAmino(object: _142.TwapRecordAmino): _142.TwapRecord;
                toAmino(message: _142.TwapRecord): _142.TwapRecordAmino;
                fromAminoMsg(object: _142.TwapRecordAminoMsg): _142.TwapRecord;
                toAminoMsg(message: _142.TwapRecord): _142.TwapRecordAminoMsg;
                fromProtoMsg(message: _142.TwapRecordProtoMsg): _142.TwapRecord;
                toProto(message: _142.TwapRecord): Uint8Array;
                toProtoMsg(message: _142.TwapRecord): _142.TwapRecordProtoMsg;
            };
            ArithmeticTwapRequest: {
                typeUrl: string;
                encode(message: _141.ArithmeticTwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.ArithmeticTwapRequest;
                fromJSON(object: any): _141.ArithmeticTwapRequest;
                toJSON(message: _141.ArithmeticTwapRequest): unknown;
                fromPartial(object: Partial<_141.ArithmeticTwapRequest>): _141.ArithmeticTwapRequest;
                fromSDK(object: _141.ArithmeticTwapRequestSDKType): _141.ArithmeticTwapRequest;
                toSDK(message: _141.ArithmeticTwapRequest): _141.ArithmeticTwapRequestSDKType;
                fromAmino(object: _141.ArithmeticTwapRequestAmino): _141.ArithmeticTwapRequest;
                toAmino(message: _141.ArithmeticTwapRequest): _141.ArithmeticTwapRequestAmino;
                fromAminoMsg(object: _141.ArithmeticTwapRequestAminoMsg): _141.ArithmeticTwapRequest;
                toAminoMsg(message: _141.ArithmeticTwapRequest): _141.ArithmeticTwapRequestAminoMsg;
                fromProtoMsg(message: _141.ArithmeticTwapRequestProtoMsg): _141.ArithmeticTwapRequest;
                toProto(message: _141.ArithmeticTwapRequest): Uint8Array;
                toProtoMsg(message: _141.ArithmeticTwapRequest): _141.ArithmeticTwapRequestProtoMsg;
            };
            ArithmeticTwapResponse: {
                typeUrl: string;
                encode(message: _141.ArithmeticTwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.ArithmeticTwapResponse;
                fromJSON(object: any): _141.ArithmeticTwapResponse;
                toJSON(message: _141.ArithmeticTwapResponse): unknown;
                fromPartial(object: Partial<_141.ArithmeticTwapResponse>): _141.ArithmeticTwapResponse;
                fromSDK(object: _141.ArithmeticTwapResponseSDKType): _141.ArithmeticTwapResponse;
                toSDK(message: _141.ArithmeticTwapResponse): _141.ArithmeticTwapResponseSDKType;
                fromAmino(object: _141.ArithmeticTwapResponseAmino): _141.ArithmeticTwapResponse;
                toAmino(message: _141.ArithmeticTwapResponse): _141.ArithmeticTwapResponseAmino;
                fromAminoMsg(object: _141.ArithmeticTwapResponseAminoMsg): _141.ArithmeticTwapResponse;
                toAminoMsg(message: _141.ArithmeticTwapResponse): _141.ArithmeticTwapResponseAminoMsg;
                fromProtoMsg(message: _141.ArithmeticTwapResponseProtoMsg): _141.ArithmeticTwapResponse;
                toProto(message: _141.ArithmeticTwapResponse): Uint8Array;
                toProtoMsg(message: _141.ArithmeticTwapResponse): _141.ArithmeticTwapResponseProtoMsg;
            };
            ArithmeticTwapToNowRequest: {
                typeUrl: string;
                encode(message: _141.ArithmeticTwapToNowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.ArithmeticTwapToNowRequest;
                fromJSON(object: any): _141.ArithmeticTwapToNowRequest;
                toJSON(message: _141.ArithmeticTwapToNowRequest): unknown;
                fromPartial(object: Partial<_141.ArithmeticTwapToNowRequest>): _141.ArithmeticTwapToNowRequest;
                fromSDK(object: _141.ArithmeticTwapToNowRequestSDKType): _141.ArithmeticTwapToNowRequest;
                toSDK(message: _141.ArithmeticTwapToNowRequest): _141.ArithmeticTwapToNowRequestSDKType;
                fromAmino(object: _141.ArithmeticTwapToNowRequestAmino): _141.ArithmeticTwapToNowRequest;
                toAmino(message: _141.ArithmeticTwapToNowRequest): _141.ArithmeticTwapToNowRequestAmino;
                fromAminoMsg(object: _141.ArithmeticTwapToNowRequestAminoMsg): _141.ArithmeticTwapToNowRequest;
                toAminoMsg(message: _141.ArithmeticTwapToNowRequest): _141.ArithmeticTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _141.ArithmeticTwapToNowRequestProtoMsg): _141.ArithmeticTwapToNowRequest;
                toProto(message: _141.ArithmeticTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _141.ArithmeticTwapToNowRequest): _141.ArithmeticTwapToNowRequestProtoMsg;
            };
            ArithmeticTwapToNowResponse: {
                typeUrl: string;
                encode(message: _141.ArithmeticTwapToNowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.ArithmeticTwapToNowResponse;
                fromJSON(object: any): _141.ArithmeticTwapToNowResponse;
                toJSON(message: _141.ArithmeticTwapToNowResponse): unknown;
                fromPartial(object: Partial<_141.ArithmeticTwapToNowResponse>): _141.ArithmeticTwapToNowResponse;
                fromSDK(object: _141.ArithmeticTwapToNowResponseSDKType): _141.ArithmeticTwapToNowResponse;
                toSDK(message: _141.ArithmeticTwapToNowResponse): _141.ArithmeticTwapToNowResponseSDKType;
                fromAmino(object: _141.ArithmeticTwapToNowResponseAmino): _141.ArithmeticTwapToNowResponse;
                toAmino(message: _141.ArithmeticTwapToNowResponse): _141.ArithmeticTwapToNowResponseAmino;
                fromAminoMsg(object: _141.ArithmeticTwapToNowResponseAminoMsg): _141.ArithmeticTwapToNowResponse;
                toAminoMsg(message: _141.ArithmeticTwapToNowResponse): _141.ArithmeticTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _141.ArithmeticTwapToNowResponseProtoMsg): _141.ArithmeticTwapToNowResponse;
                toProto(message: _141.ArithmeticTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _141.ArithmeticTwapToNowResponse): _141.ArithmeticTwapToNowResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _141.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.ParamsRequest;
                fromJSON(_: any): _141.ParamsRequest;
                toJSON(_: _141.ParamsRequest): unknown;
                fromPartial(_: Partial<_141.ParamsRequest>): _141.ParamsRequest;
                fromSDK(_: _141.ParamsRequestSDKType): _141.ParamsRequest;
                toSDK(_: _141.ParamsRequest): _141.ParamsRequestSDKType;
                fromAmino(_: _141.ParamsRequestAmino): _141.ParamsRequest;
                toAmino(_: _141.ParamsRequest): _141.ParamsRequestAmino;
                fromAminoMsg(object: _141.ParamsRequestAminoMsg): _141.ParamsRequest;
                toAminoMsg(message: _141.ParamsRequest): _141.ParamsRequestAminoMsg;
                fromProtoMsg(message: _141.ParamsRequestProtoMsg): _141.ParamsRequest;
                toProto(message: _141.ParamsRequest): Uint8Array;
                toProtoMsg(message: _141.ParamsRequest): _141.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _141.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.ParamsResponse;
                fromJSON(object: any): _141.ParamsResponse;
                toJSON(message: _141.ParamsResponse): unknown;
                fromPartial(object: Partial<_141.ParamsResponse>): _141.ParamsResponse;
                fromSDK(object: _141.ParamsResponseSDKType): _141.ParamsResponse;
                toSDK(message: _141.ParamsResponse): _141.ParamsResponseSDKType;
                fromAmino(object: _141.ParamsResponseAmino): _141.ParamsResponse;
                toAmino(message: _141.ParamsResponse): _141.ParamsResponseAmino;
                fromAminoMsg(object: _141.ParamsResponseAminoMsg): _141.ParamsResponse;
                toAminoMsg(message: _141.ParamsResponse): _141.ParamsResponseAminoMsg;
                fromProtoMsg(message: _141.ParamsResponseProtoMsg): _141.ParamsResponse;
                toProto(message: _141.ParamsResponse): Uint8Array;
                toProtoMsg(message: _141.ParamsResponse): _141.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _140.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Params;
                fromJSON(object: any): _140.Params;
                toJSON(message: _140.Params): unknown;
                fromPartial(object: Partial<_140.Params>): _140.Params;
                fromSDK(object: _140.ParamsSDKType): _140.Params;
                toSDK(message: _140.Params): _140.ParamsSDKType;
                fromAmino(object: _140.ParamsAmino): _140.Params;
                toAmino(message: _140.Params): _140.ParamsAmino;
                fromAminoMsg(object: _140.ParamsAminoMsg): _140.Params;
                toAminoMsg(message: _140.Params): _140.ParamsAminoMsg;
                fromProtoMsg(message: _140.ParamsProtoMsg): _140.Params;
                toProto(message: _140.Params): Uint8Array;
                toProtoMsg(message: _140.Params): _140.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _140.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.GenesisState;
                fromJSON(object: any): _140.GenesisState;
                toJSON(message: _140.GenesisState): unknown;
                fromPartial(object: Partial<_140.GenesisState>): _140.GenesisState;
                fromSDK(object: _140.GenesisStateSDKType): _140.GenesisState;
                toSDK(message: _140.GenesisState): _140.GenesisStateSDKType;
                fromAmino(object: _140.GenesisStateAmino): _140.GenesisState;
                toAmino(message: _140.GenesisState): _140.GenesisStateAmino;
                fromAminoMsg(object: _140.GenesisStateAminoMsg): _140.GenesisState;
                toAminoMsg(message: _140.GenesisState): _140.GenesisStateAminoMsg;
                fromProtoMsg(message: _140.GenesisStateProtoMsg): _140.GenesisState;
                toProto(message: _140.GenesisState): Uint8Array;
                toProtoMsg(message: _140.GenesisState): _140.GenesisStateProtoMsg;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            Query: typeof _284.Query;
            QueryClientImpl: typeof _284.QueryClientImpl;
            LCDQueryClient: typeof _268.LCDQueryClient;
            QueryFeeTokensRequest: {
                typeUrl: string;
                encode(_: _146.QueryFeeTokensRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.QueryFeeTokensRequest;
                fromJSON(_: any): _146.QueryFeeTokensRequest;
                toJSON(_: _146.QueryFeeTokensRequest): unknown;
                fromPartial(_: Partial<_146.QueryFeeTokensRequest>): _146.QueryFeeTokensRequest;
                fromSDK(_: _146.QueryFeeTokensRequestSDKType): _146.QueryFeeTokensRequest;
                toSDK(_: _146.QueryFeeTokensRequest): _146.QueryFeeTokensRequestSDKType;
                fromAmino(_: _146.QueryFeeTokensRequestAmino): _146.QueryFeeTokensRequest;
                toAmino(_: _146.QueryFeeTokensRequest): _146.QueryFeeTokensRequestAmino;
                fromAminoMsg(object: _146.QueryFeeTokensRequestAminoMsg): _146.QueryFeeTokensRequest;
                toAminoMsg(message: _146.QueryFeeTokensRequest): _146.QueryFeeTokensRequestAminoMsg;
                fromProtoMsg(message: _146.QueryFeeTokensRequestProtoMsg): _146.QueryFeeTokensRequest;
                toProto(message: _146.QueryFeeTokensRequest): Uint8Array;
                toProtoMsg(message: _146.QueryFeeTokensRequest): _146.QueryFeeTokensRequestProtoMsg;
            };
            QueryFeeTokensResponse: {
                typeUrl: string;
                encode(message: _146.QueryFeeTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.QueryFeeTokensResponse;
                fromJSON(object: any): _146.QueryFeeTokensResponse;
                toJSON(message: _146.QueryFeeTokensResponse): unknown;
                fromPartial(object: Partial<_146.QueryFeeTokensResponse>): _146.QueryFeeTokensResponse;
                fromSDK(object: _146.QueryFeeTokensResponseSDKType): _146.QueryFeeTokensResponse;
                toSDK(message: _146.QueryFeeTokensResponse): _146.QueryFeeTokensResponseSDKType;
                fromAmino(object: _146.QueryFeeTokensResponseAmino): _146.QueryFeeTokensResponse;
                toAmino(message: _146.QueryFeeTokensResponse): _146.QueryFeeTokensResponseAmino;
                fromAminoMsg(object: _146.QueryFeeTokensResponseAminoMsg): _146.QueryFeeTokensResponse;
                toAminoMsg(message: _146.QueryFeeTokensResponse): _146.QueryFeeTokensResponseAminoMsg;
                fromProtoMsg(message: _146.QueryFeeTokensResponseProtoMsg): _146.QueryFeeTokensResponse;
                toProto(message: _146.QueryFeeTokensResponse): Uint8Array;
                toProtoMsg(message: _146.QueryFeeTokensResponse): _146.QueryFeeTokensResponseProtoMsg;
            };
            QueryDenomSpotPriceRequest: {
                typeUrl: string;
                encode(message: _146.QueryDenomSpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.QueryDenomSpotPriceRequest;
                fromJSON(object: any): _146.QueryDenomSpotPriceRequest;
                toJSON(message: _146.QueryDenomSpotPriceRequest): unknown;
                fromPartial(object: Partial<_146.QueryDenomSpotPriceRequest>): _146.QueryDenomSpotPriceRequest;
                fromSDK(object: _146.QueryDenomSpotPriceRequestSDKType): _146.QueryDenomSpotPriceRequest;
                toSDK(message: _146.QueryDenomSpotPriceRequest): _146.QueryDenomSpotPriceRequestSDKType;
                fromAmino(object: _146.QueryDenomSpotPriceRequestAmino): _146.QueryDenomSpotPriceRequest;
                toAmino(message: _146.QueryDenomSpotPriceRequest): _146.QueryDenomSpotPriceRequestAmino;
                fromAminoMsg(object: _146.QueryDenomSpotPriceRequestAminoMsg): _146.QueryDenomSpotPriceRequest;
                toAminoMsg(message: _146.QueryDenomSpotPriceRequest): _146.QueryDenomSpotPriceRequestAminoMsg;
                fromProtoMsg(message: _146.QueryDenomSpotPriceRequestProtoMsg): _146.QueryDenomSpotPriceRequest;
                toProto(message: _146.QueryDenomSpotPriceRequest): Uint8Array;
                toProtoMsg(message: _146.QueryDenomSpotPriceRequest): _146.QueryDenomSpotPriceRequestProtoMsg;
            };
            QueryDenomSpotPriceResponse: {
                typeUrl: string;
                encode(message: _146.QueryDenomSpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.QueryDenomSpotPriceResponse;
                fromJSON(object: any): _146.QueryDenomSpotPriceResponse;
                toJSON(message: _146.QueryDenomSpotPriceResponse): unknown;
                fromPartial(object: Partial<_146.QueryDenomSpotPriceResponse>): _146.QueryDenomSpotPriceResponse;
                fromSDK(object: _146.QueryDenomSpotPriceResponseSDKType): _146.QueryDenomSpotPriceResponse;
                toSDK(message: _146.QueryDenomSpotPriceResponse): _146.QueryDenomSpotPriceResponseSDKType;
                fromAmino(object: _146.QueryDenomSpotPriceResponseAmino): _146.QueryDenomSpotPriceResponse;
                toAmino(message: _146.QueryDenomSpotPriceResponse): _146.QueryDenomSpotPriceResponseAmino;
                fromAminoMsg(object: _146.QueryDenomSpotPriceResponseAminoMsg): _146.QueryDenomSpotPriceResponse;
                toAminoMsg(message: _146.QueryDenomSpotPriceResponse): _146.QueryDenomSpotPriceResponseAminoMsg;
                fromProtoMsg(message: _146.QueryDenomSpotPriceResponseProtoMsg): _146.QueryDenomSpotPriceResponse;
                toProto(message: _146.QueryDenomSpotPriceResponse): Uint8Array;
                toProtoMsg(message: _146.QueryDenomSpotPriceResponse): _146.QueryDenomSpotPriceResponseProtoMsg;
            };
            QueryDenomPoolIdRequest: {
                typeUrl: string;
                encode(message: _146.QueryDenomPoolIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.QueryDenomPoolIdRequest;
                fromJSON(object: any): _146.QueryDenomPoolIdRequest;
                toJSON(message: _146.QueryDenomPoolIdRequest): unknown;
                fromPartial(object: Partial<_146.QueryDenomPoolIdRequest>): _146.QueryDenomPoolIdRequest;
                fromSDK(object: _146.QueryDenomPoolIdRequestSDKType): _146.QueryDenomPoolIdRequest;
                toSDK(message: _146.QueryDenomPoolIdRequest): _146.QueryDenomPoolIdRequestSDKType;
                fromAmino(object: _146.QueryDenomPoolIdRequestAmino): _146.QueryDenomPoolIdRequest;
                toAmino(message: _146.QueryDenomPoolIdRequest): _146.QueryDenomPoolIdRequestAmino;
                fromAminoMsg(object: _146.QueryDenomPoolIdRequestAminoMsg): _146.QueryDenomPoolIdRequest;
                toAminoMsg(message: _146.QueryDenomPoolIdRequest): _146.QueryDenomPoolIdRequestAminoMsg;
                fromProtoMsg(message: _146.QueryDenomPoolIdRequestProtoMsg): _146.QueryDenomPoolIdRequest;
                toProto(message: _146.QueryDenomPoolIdRequest): Uint8Array;
                toProtoMsg(message: _146.QueryDenomPoolIdRequest): _146.QueryDenomPoolIdRequestProtoMsg;
            };
            QueryDenomPoolIdResponse: {
                typeUrl: string;
                encode(message: _146.QueryDenomPoolIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.QueryDenomPoolIdResponse;
                fromJSON(object: any): _146.QueryDenomPoolIdResponse;
                toJSON(message: _146.QueryDenomPoolIdResponse): unknown;
                fromPartial(object: Partial<_146.QueryDenomPoolIdResponse>): _146.QueryDenomPoolIdResponse;
                fromSDK(object: _146.QueryDenomPoolIdResponseSDKType): _146.QueryDenomPoolIdResponse;
                toSDK(message: _146.QueryDenomPoolIdResponse): _146.QueryDenomPoolIdResponseSDKType;
                fromAmino(object: _146.QueryDenomPoolIdResponseAmino): _146.QueryDenomPoolIdResponse;
                toAmino(message: _146.QueryDenomPoolIdResponse): _146.QueryDenomPoolIdResponseAmino;
                fromAminoMsg(object: _146.QueryDenomPoolIdResponseAminoMsg): _146.QueryDenomPoolIdResponse;
                toAminoMsg(message: _146.QueryDenomPoolIdResponse): _146.QueryDenomPoolIdResponseAminoMsg;
                fromProtoMsg(message: _146.QueryDenomPoolIdResponseProtoMsg): _146.QueryDenomPoolIdResponse;
                toProto(message: _146.QueryDenomPoolIdResponse): Uint8Array;
                toProtoMsg(message: _146.QueryDenomPoolIdResponse): _146.QueryDenomPoolIdResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                encode(_: _146.QueryBaseDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.QueryBaseDenomRequest;
                fromJSON(_: any): _146.QueryBaseDenomRequest;
                toJSON(_: _146.QueryBaseDenomRequest): unknown;
                fromPartial(_: Partial<_146.QueryBaseDenomRequest>): _146.QueryBaseDenomRequest;
                fromSDK(_: _146.QueryBaseDenomRequestSDKType): _146.QueryBaseDenomRequest;
                toSDK(_: _146.QueryBaseDenomRequest): _146.QueryBaseDenomRequestSDKType;
                fromAmino(_: _146.QueryBaseDenomRequestAmino): _146.QueryBaseDenomRequest;
                toAmino(_: _146.QueryBaseDenomRequest): _146.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _146.QueryBaseDenomRequestAminoMsg): _146.QueryBaseDenomRequest;
                toAminoMsg(message: _146.QueryBaseDenomRequest): _146.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _146.QueryBaseDenomRequestProtoMsg): _146.QueryBaseDenomRequest;
                toProto(message: _146.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _146.QueryBaseDenomRequest): _146.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                encode(message: _146.QueryBaseDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.QueryBaseDenomResponse;
                fromJSON(object: any): _146.QueryBaseDenomResponse;
                toJSON(message: _146.QueryBaseDenomResponse): unknown;
                fromPartial(object: Partial<_146.QueryBaseDenomResponse>): _146.QueryBaseDenomResponse;
                fromSDK(object: _146.QueryBaseDenomResponseSDKType): _146.QueryBaseDenomResponse;
                toSDK(message: _146.QueryBaseDenomResponse): _146.QueryBaseDenomResponseSDKType;
                fromAmino(object: _146.QueryBaseDenomResponseAmino): _146.QueryBaseDenomResponse;
                toAmino(message: _146.QueryBaseDenomResponse): _146.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _146.QueryBaseDenomResponseAminoMsg): _146.QueryBaseDenomResponse;
                toAminoMsg(message: _146.QueryBaseDenomResponse): _146.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _146.QueryBaseDenomResponseProtoMsg): _146.QueryBaseDenomResponse;
                toProto(message: _146.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _146.QueryBaseDenomResponse): _146.QueryBaseDenomResponseProtoMsg;
            };
            UpdateFeeTokenProposal: {
                typeUrl: string;
                encode(message: _145.UpdateFeeTokenProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.UpdateFeeTokenProposal;
                fromJSON(object: any): _145.UpdateFeeTokenProposal;
                toJSON(message: _145.UpdateFeeTokenProposal): unknown;
                fromPartial(object: Partial<_145.UpdateFeeTokenProposal>): _145.UpdateFeeTokenProposal;
                fromSDK(object: _145.UpdateFeeTokenProposalSDKType): _145.UpdateFeeTokenProposal;
                toSDK(message: _145.UpdateFeeTokenProposal): _145.UpdateFeeTokenProposalSDKType;
                fromAmino(object: _145.UpdateFeeTokenProposalAmino): _145.UpdateFeeTokenProposal;
                toAmino(message: _145.UpdateFeeTokenProposal): _145.UpdateFeeTokenProposalAmino;
                fromAminoMsg(object: _145.UpdateFeeTokenProposalAminoMsg): _145.UpdateFeeTokenProposal;
                toAminoMsg(message: _145.UpdateFeeTokenProposal): _145.UpdateFeeTokenProposalAminoMsg;
                fromProtoMsg(message: _145.UpdateFeeTokenProposalProtoMsg): _145.UpdateFeeTokenProposal;
                toProto(message: _145.UpdateFeeTokenProposal): Uint8Array;
                toProtoMsg(message: _145.UpdateFeeTokenProposal): _145.UpdateFeeTokenProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _144.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.GenesisState;
                fromJSON(object: any): _144.GenesisState;
                toJSON(message: _144.GenesisState): unknown;
                fromPartial(object: Partial<_144.GenesisState>): _144.GenesisState;
                fromSDK(object: _144.GenesisStateSDKType): _144.GenesisState;
                toSDK(message: _144.GenesisState): _144.GenesisStateSDKType;
                fromAmino(object: _144.GenesisStateAmino): _144.GenesisState;
                toAmino(message: _144.GenesisState): _144.GenesisStateAmino;
                fromAminoMsg(object: _144.GenesisStateAminoMsg): _144.GenesisState;
                toAminoMsg(message: _144.GenesisState): _144.GenesisStateAminoMsg;
                fromProtoMsg(message: _144.GenesisStateProtoMsg): _144.GenesisState;
                toProto(message: _144.GenesisState): Uint8Array;
                toProtoMsg(message: _144.GenesisState): _144.GenesisStateProtoMsg;
            };
            FeeToken: {
                typeUrl: string;
                encode(message: _143.FeeToken, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.FeeToken;
                fromJSON(object: any): _143.FeeToken;
                toJSON(message: _143.FeeToken): unknown;
                fromPartial(object: Partial<_143.FeeToken>): _143.FeeToken;
                fromSDK(object: _143.FeeTokenSDKType): _143.FeeToken;
                toSDK(message: _143.FeeToken): _143.FeeTokenSDKType;
                fromAmino(object: _143.FeeTokenAmino): _143.FeeToken;
                toAmino(message: _143.FeeToken): _143.FeeTokenAmino;
                fromAminoMsg(object: _143.FeeTokenAminoMsg): _143.FeeToken;
                toAminoMsg(message: _143.FeeToken): _143.FeeTokenAminoMsg;
                fromProtoMsg(message: _143.FeeTokenProtoMsg): _143.FeeToken;
                toProto(message: _143.FeeToken): Uint8Array;
                toProtoMsg(message: _143.FeeToken): _143.FeeTokenProtoMsg;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            Msg: typeof _295.Msg;
            Query: typeof _285.Query;
            QueryClientImpl: typeof _285.QueryClientImpl;
            LCDQueryClient: typeof _269.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _149.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _149.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _149.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _149.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _149.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _149.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _149.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _149.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _149.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _149.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _149.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _149.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _149.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _149.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _149.MsgWithdrawDelegationRewards;
                    };
                };
                toJSON: {
                    setValidatorSetPreference(value: _149.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegateToValidatorSet(value: _149.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegateFromValidatorSet(value: _149.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    redelegateValidatorSet(value: _149.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegationRewards(value: _149.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setValidatorSetPreference(value: any): {
                        typeUrl: string;
                        value: _149.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: any): {
                        typeUrl: string;
                        value: _149.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: any): {
                        typeUrl: string;
                        value: _149.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: any): {
                        typeUrl: string;
                        value: _149.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: any): {
                        typeUrl: string;
                        value: _149.MsgWithdrawDelegationRewards;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _149.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _149.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _149.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _149.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _149.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _149.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _149.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _149.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _149.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _149.MsgWithdrawDelegationRewards;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: (message: _149.MsgSetValidatorSetPreference) => _149.MsgSetValidatorSetPreferenceAmino;
                    fromAmino: (object: _149.MsgSetValidatorSetPreferenceAmino) => _149.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _149.MsgDelegateToValidatorSet) => _149.MsgDelegateToValidatorSetAmino;
                    fromAmino: (object: _149.MsgDelegateToValidatorSetAmino) => _149.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUndelegateFromValidatorSet) => _149.MsgUndelegateFromValidatorSetAmino;
                    fromAmino: (object: _149.MsgUndelegateFromValidatorSetAmino) => _149.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _149.MsgRedelegateValidatorSet) => _149.MsgRedelegateValidatorSetAmino;
                    fromAmino: (object: _149.MsgRedelegateValidatorSetAmino) => _149.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: (message: _149.MsgWithdrawDelegationRewards) => _149.MsgWithdrawDelegationRewardsAmino;
                    fromAmino: (object: _149.MsgWithdrawDelegationRewardsAmino) => _149.MsgWithdrawDelegationRewards;
                };
            };
            MsgSetValidatorSetPreference: {
                typeUrl: string;
                encode(message: _149.MsgSetValidatorSetPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetValidatorSetPreference;
                fromJSON(object: any): _149.MsgSetValidatorSetPreference;
                toJSON(message: _149.MsgSetValidatorSetPreference): unknown;
                fromPartial(object: Partial<_149.MsgSetValidatorSetPreference>): _149.MsgSetValidatorSetPreference;
                fromSDK(object: _149.MsgSetValidatorSetPreferenceSDKType): _149.MsgSetValidatorSetPreference;
                toSDK(message: _149.MsgSetValidatorSetPreference): _149.MsgSetValidatorSetPreferenceSDKType;
                fromAmino(object: _149.MsgSetValidatorSetPreferenceAmino): _149.MsgSetValidatorSetPreference;
                toAmino(message: _149.MsgSetValidatorSetPreference): _149.MsgSetValidatorSetPreferenceAmino;
                fromAminoMsg(object: _149.MsgSetValidatorSetPreferenceAminoMsg): _149.MsgSetValidatorSetPreference;
                toAminoMsg(message: _149.MsgSetValidatorSetPreference): _149.MsgSetValidatorSetPreferenceAminoMsg;
                fromProtoMsg(message: _149.MsgSetValidatorSetPreferenceProtoMsg): _149.MsgSetValidatorSetPreference;
                toProto(message: _149.MsgSetValidatorSetPreference): Uint8Array;
                toProtoMsg(message: _149.MsgSetValidatorSetPreference): _149.MsgSetValidatorSetPreferenceProtoMsg;
            };
            MsgSetValidatorSetPreferenceResponse: {
                typeUrl: string;
                encode(_: _149.MsgSetValidatorSetPreferenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetValidatorSetPreferenceResponse;
                fromJSON(_: any): _149.MsgSetValidatorSetPreferenceResponse;
                toJSON(_: _149.MsgSetValidatorSetPreferenceResponse): unknown;
                fromPartial(_: Partial<_149.MsgSetValidatorSetPreferenceResponse>): _149.MsgSetValidatorSetPreferenceResponse;
                fromSDK(_: _149.MsgSetValidatorSetPreferenceResponseSDKType): _149.MsgSetValidatorSetPreferenceResponse;
                toSDK(_: _149.MsgSetValidatorSetPreferenceResponse): _149.MsgSetValidatorSetPreferenceResponseSDKType;
                fromAmino(_: _149.MsgSetValidatorSetPreferenceResponseAmino): _149.MsgSetValidatorSetPreferenceResponse;
                toAmino(_: _149.MsgSetValidatorSetPreferenceResponse): _149.MsgSetValidatorSetPreferenceResponseAmino;
                fromAminoMsg(object: _149.MsgSetValidatorSetPreferenceResponseAminoMsg): _149.MsgSetValidatorSetPreferenceResponse;
                toAminoMsg(message: _149.MsgSetValidatorSetPreferenceResponse): _149.MsgSetValidatorSetPreferenceResponseAminoMsg;
                fromProtoMsg(message: _149.MsgSetValidatorSetPreferenceResponseProtoMsg): _149.MsgSetValidatorSetPreferenceResponse;
                toProto(message: _149.MsgSetValidatorSetPreferenceResponse): Uint8Array;
                toProtoMsg(message: _149.MsgSetValidatorSetPreferenceResponse): _149.MsgSetValidatorSetPreferenceResponseProtoMsg;
            };
            MsgDelegateToValidatorSet: {
                typeUrl: string;
                encode(message: _149.MsgDelegateToValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgDelegateToValidatorSet;
                fromJSON(object: any): _149.MsgDelegateToValidatorSet;
                toJSON(message: _149.MsgDelegateToValidatorSet): unknown;
                fromPartial(object: Partial<_149.MsgDelegateToValidatorSet>): _149.MsgDelegateToValidatorSet;
                fromSDK(object: _149.MsgDelegateToValidatorSetSDKType): _149.MsgDelegateToValidatorSet;
                toSDK(message: _149.MsgDelegateToValidatorSet): _149.MsgDelegateToValidatorSetSDKType;
                fromAmino(object: _149.MsgDelegateToValidatorSetAmino): _149.MsgDelegateToValidatorSet;
                toAmino(message: _149.MsgDelegateToValidatorSet): _149.MsgDelegateToValidatorSetAmino;
                fromAminoMsg(object: _149.MsgDelegateToValidatorSetAminoMsg): _149.MsgDelegateToValidatorSet;
                toAminoMsg(message: _149.MsgDelegateToValidatorSet): _149.MsgDelegateToValidatorSetAminoMsg;
                fromProtoMsg(message: _149.MsgDelegateToValidatorSetProtoMsg): _149.MsgDelegateToValidatorSet;
                toProto(message: _149.MsgDelegateToValidatorSet): Uint8Array;
                toProtoMsg(message: _149.MsgDelegateToValidatorSet): _149.MsgDelegateToValidatorSetProtoMsg;
            };
            MsgDelegateToValidatorSetResponse: {
                typeUrl: string;
                encode(_: _149.MsgDelegateToValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgDelegateToValidatorSetResponse;
                fromJSON(_: any): _149.MsgDelegateToValidatorSetResponse;
                toJSON(_: _149.MsgDelegateToValidatorSetResponse): unknown;
                fromPartial(_: Partial<_149.MsgDelegateToValidatorSetResponse>): _149.MsgDelegateToValidatorSetResponse;
                fromSDK(_: _149.MsgDelegateToValidatorSetResponseSDKType): _149.MsgDelegateToValidatorSetResponse;
                toSDK(_: _149.MsgDelegateToValidatorSetResponse): _149.MsgDelegateToValidatorSetResponseSDKType;
                fromAmino(_: _149.MsgDelegateToValidatorSetResponseAmino): _149.MsgDelegateToValidatorSetResponse;
                toAmino(_: _149.MsgDelegateToValidatorSetResponse): _149.MsgDelegateToValidatorSetResponseAmino;
                fromAminoMsg(object: _149.MsgDelegateToValidatorSetResponseAminoMsg): _149.MsgDelegateToValidatorSetResponse;
                toAminoMsg(message: _149.MsgDelegateToValidatorSetResponse): _149.MsgDelegateToValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _149.MsgDelegateToValidatorSetResponseProtoMsg): _149.MsgDelegateToValidatorSetResponse;
                toProto(message: _149.MsgDelegateToValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _149.MsgDelegateToValidatorSetResponse): _149.MsgDelegateToValidatorSetResponseProtoMsg;
            };
            MsgUndelegateFromValidatorSet: {
                typeUrl: string;
                encode(message: _149.MsgUndelegateFromValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgUndelegateFromValidatorSet;
                fromJSON(object: any): _149.MsgUndelegateFromValidatorSet;
                toJSON(message: _149.MsgUndelegateFromValidatorSet): unknown;
                fromPartial(object: Partial<_149.MsgUndelegateFromValidatorSet>): _149.MsgUndelegateFromValidatorSet;
                fromSDK(object: _149.MsgUndelegateFromValidatorSetSDKType): _149.MsgUndelegateFromValidatorSet;
                toSDK(message: _149.MsgUndelegateFromValidatorSet): _149.MsgUndelegateFromValidatorSetSDKType;
                fromAmino(object: _149.MsgUndelegateFromValidatorSetAmino): _149.MsgUndelegateFromValidatorSet;
                toAmino(message: _149.MsgUndelegateFromValidatorSet): _149.MsgUndelegateFromValidatorSetAmino;
                fromAminoMsg(object: _149.MsgUndelegateFromValidatorSetAminoMsg): _149.MsgUndelegateFromValidatorSet;
                toAminoMsg(message: _149.MsgUndelegateFromValidatorSet): _149.MsgUndelegateFromValidatorSetAminoMsg;
                fromProtoMsg(message: _149.MsgUndelegateFromValidatorSetProtoMsg): _149.MsgUndelegateFromValidatorSet;
                toProto(message: _149.MsgUndelegateFromValidatorSet): Uint8Array;
                toProtoMsg(message: _149.MsgUndelegateFromValidatorSet): _149.MsgUndelegateFromValidatorSetProtoMsg;
            };
            MsgUndelegateFromValidatorSetResponse: {
                typeUrl: string;
                encode(_: _149.MsgUndelegateFromValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgUndelegateFromValidatorSetResponse;
                fromJSON(_: any): _149.MsgUndelegateFromValidatorSetResponse;
                toJSON(_: _149.MsgUndelegateFromValidatorSetResponse): unknown;
                fromPartial(_: Partial<_149.MsgUndelegateFromValidatorSetResponse>): _149.MsgUndelegateFromValidatorSetResponse;
                fromSDK(_: _149.MsgUndelegateFromValidatorSetResponseSDKType): _149.MsgUndelegateFromValidatorSetResponse;
                toSDK(_: _149.MsgUndelegateFromValidatorSetResponse): _149.MsgUndelegateFromValidatorSetResponseSDKType;
                fromAmino(_: _149.MsgUndelegateFromValidatorSetResponseAmino): _149.MsgUndelegateFromValidatorSetResponse;
                toAmino(_: _149.MsgUndelegateFromValidatorSetResponse): _149.MsgUndelegateFromValidatorSetResponseAmino;
                fromAminoMsg(object: _149.MsgUndelegateFromValidatorSetResponseAminoMsg): _149.MsgUndelegateFromValidatorSetResponse;
                toAminoMsg(message: _149.MsgUndelegateFromValidatorSetResponse): _149.MsgUndelegateFromValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUndelegateFromValidatorSetResponseProtoMsg): _149.MsgUndelegateFromValidatorSetResponse;
                toProto(message: _149.MsgUndelegateFromValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUndelegateFromValidatorSetResponse): _149.MsgUndelegateFromValidatorSetResponseProtoMsg;
            };
            MsgRedelegateValidatorSet: {
                typeUrl: string;
                encode(message: _149.MsgRedelegateValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgRedelegateValidatorSet;
                fromJSON(object: any): _149.MsgRedelegateValidatorSet;
                toJSON(message: _149.MsgRedelegateValidatorSet): unknown;
                fromPartial(object: Partial<_149.MsgRedelegateValidatorSet>): _149.MsgRedelegateValidatorSet;
                fromSDK(object: _149.MsgRedelegateValidatorSetSDKType): _149.MsgRedelegateValidatorSet;
                toSDK(message: _149.MsgRedelegateValidatorSet): _149.MsgRedelegateValidatorSetSDKType;
                fromAmino(object: _149.MsgRedelegateValidatorSetAmino): _149.MsgRedelegateValidatorSet;
                toAmino(message: _149.MsgRedelegateValidatorSet): _149.MsgRedelegateValidatorSetAmino;
                fromAminoMsg(object: _149.MsgRedelegateValidatorSetAminoMsg): _149.MsgRedelegateValidatorSet;
                toAminoMsg(message: _149.MsgRedelegateValidatorSet): _149.MsgRedelegateValidatorSetAminoMsg;
                fromProtoMsg(message: _149.MsgRedelegateValidatorSetProtoMsg): _149.MsgRedelegateValidatorSet;
                toProto(message: _149.MsgRedelegateValidatorSet): Uint8Array;
                toProtoMsg(message: _149.MsgRedelegateValidatorSet): _149.MsgRedelegateValidatorSetProtoMsg;
            };
            MsgRedelegateValidatorSetResponse: {
                typeUrl: string;
                encode(_: _149.MsgRedelegateValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgRedelegateValidatorSetResponse;
                fromJSON(_: any): _149.MsgRedelegateValidatorSetResponse;
                toJSON(_: _149.MsgRedelegateValidatorSetResponse): unknown;
                fromPartial(_: Partial<_149.MsgRedelegateValidatorSetResponse>): _149.MsgRedelegateValidatorSetResponse;
                fromSDK(_: _149.MsgRedelegateValidatorSetResponseSDKType): _149.MsgRedelegateValidatorSetResponse;
                toSDK(_: _149.MsgRedelegateValidatorSetResponse): _149.MsgRedelegateValidatorSetResponseSDKType;
                fromAmino(_: _149.MsgRedelegateValidatorSetResponseAmino): _149.MsgRedelegateValidatorSetResponse;
                toAmino(_: _149.MsgRedelegateValidatorSetResponse): _149.MsgRedelegateValidatorSetResponseAmino;
                fromAminoMsg(object: _149.MsgRedelegateValidatorSetResponseAminoMsg): _149.MsgRedelegateValidatorSetResponse;
                toAminoMsg(message: _149.MsgRedelegateValidatorSetResponse): _149.MsgRedelegateValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _149.MsgRedelegateValidatorSetResponseProtoMsg): _149.MsgRedelegateValidatorSetResponse;
                toProto(message: _149.MsgRedelegateValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _149.MsgRedelegateValidatorSetResponse): _149.MsgRedelegateValidatorSetResponseProtoMsg;
            };
            MsgWithdrawDelegationRewards: {
                typeUrl: string;
                encode(message: _149.MsgWithdrawDelegationRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgWithdrawDelegationRewards;
                fromJSON(object: any): _149.MsgWithdrawDelegationRewards;
                toJSON(message: _149.MsgWithdrawDelegationRewards): unknown;
                fromPartial(object: Partial<_149.MsgWithdrawDelegationRewards>): _149.MsgWithdrawDelegationRewards;
                fromSDK(object: _149.MsgWithdrawDelegationRewardsSDKType): _149.MsgWithdrawDelegationRewards;
                toSDK(message: _149.MsgWithdrawDelegationRewards): _149.MsgWithdrawDelegationRewardsSDKType;
                fromAmino(object: _149.MsgWithdrawDelegationRewardsAmino): _149.MsgWithdrawDelegationRewards;
                toAmino(message: _149.MsgWithdrawDelegationRewards): _149.MsgWithdrawDelegationRewardsAmino;
                fromAminoMsg(object: _149.MsgWithdrawDelegationRewardsAminoMsg): _149.MsgWithdrawDelegationRewards;
                toAminoMsg(message: _149.MsgWithdrawDelegationRewards): _149.MsgWithdrawDelegationRewardsAminoMsg;
                fromProtoMsg(message: _149.MsgWithdrawDelegationRewardsProtoMsg): _149.MsgWithdrawDelegationRewards;
                toProto(message: _149.MsgWithdrawDelegationRewards): Uint8Array;
                toProtoMsg(message: _149.MsgWithdrawDelegationRewards): _149.MsgWithdrawDelegationRewardsProtoMsg;
            };
            MsgWithdrawDelegationRewardsResponse: {
                typeUrl: string;
                encode(_: _149.MsgWithdrawDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgWithdrawDelegationRewardsResponse;
                fromJSON(_: any): _149.MsgWithdrawDelegationRewardsResponse;
                toJSON(_: _149.MsgWithdrawDelegationRewardsResponse): unknown;
                fromPartial(_: Partial<_149.MsgWithdrawDelegationRewardsResponse>): _149.MsgWithdrawDelegationRewardsResponse;
                fromSDK(_: _149.MsgWithdrawDelegationRewardsResponseSDKType): _149.MsgWithdrawDelegationRewardsResponse;
                toSDK(_: _149.MsgWithdrawDelegationRewardsResponse): _149.MsgWithdrawDelegationRewardsResponseSDKType;
                fromAmino(_: _149.MsgWithdrawDelegationRewardsResponseAmino): _149.MsgWithdrawDelegationRewardsResponse;
                toAmino(_: _149.MsgWithdrawDelegationRewardsResponse): _149.MsgWithdrawDelegationRewardsResponseAmino;
                fromAminoMsg(object: _149.MsgWithdrawDelegationRewardsResponseAminoMsg): _149.MsgWithdrawDelegationRewardsResponse;
                toAminoMsg(message: _149.MsgWithdrawDelegationRewardsResponse): _149.MsgWithdrawDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _149.MsgWithdrawDelegationRewardsResponseProtoMsg): _149.MsgWithdrawDelegationRewardsResponse;
                toProto(message: _149.MsgWithdrawDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _149.MsgWithdrawDelegationRewardsResponse): _149.MsgWithdrawDelegationRewardsResponseProtoMsg;
            };
            ValidatorPreference: {
                typeUrl: string;
                encode(message: _148.ValidatorPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.ValidatorPreference;
                fromJSON(object: any): _148.ValidatorPreference;
                toJSON(message: _148.ValidatorPreference): unknown;
                fromPartial(object: Partial<_148.ValidatorPreference>): _148.ValidatorPreference;
                fromSDK(object: _148.ValidatorPreferenceSDKType): _148.ValidatorPreference;
                toSDK(message: _148.ValidatorPreference): _148.ValidatorPreferenceSDKType;
                fromAmino(object: _148.ValidatorPreferenceAmino): _148.ValidatorPreference;
                toAmino(message: _148.ValidatorPreference): _148.ValidatorPreferenceAmino;
                fromAminoMsg(object: _148.ValidatorPreferenceAminoMsg): _148.ValidatorPreference;
                toAminoMsg(message: _148.ValidatorPreference): _148.ValidatorPreferenceAminoMsg;
                fromProtoMsg(message: _148.ValidatorPreferenceProtoMsg): _148.ValidatorPreference;
                toProto(message: _148.ValidatorPreference): Uint8Array;
                toProtoMsg(message: _148.ValidatorPreference): _148.ValidatorPreferenceProtoMsg;
            };
            ValidatorSetPreferences: {
                typeUrl: string;
                encode(message: _148.ValidatorSetPreferences, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.ValidatorSetPreferences;
                fromJSON(object: any): _148.ValidatorSetPreferences;
                toJSON(message: _148.ValidatorSetPreferences): unknown;
                fromPartial(object: Partial<_148.ValidatorSetPreferences>): _148.ValidatorSetPreferences;
                fromSDK(object: _148.ValidatorSetPreferencesSDKType): _148.ValidatorSetPreferences;
                toSDK(message: _148.ValidatorSetPreferences): _148.ValidatorSetPreferencesSDKType;
                fromAmino(object: _148.ValidatorSetPreferencesAmino): _148.ValidatorSetPreferences;
                toAmino(message: _148.ValidatorSetPreferences): _148.ValidatorSetPreferencesAmino;
                fromAminoMsg(object: _148.ValidatorSetPreferencesAminoMsg): _148.ValidatorSetPreferences;
                toAminoMsg(message: _148.ValidatorSetPreferences): _148.ValidatorSetPreferencesAminoMsg;
                fromProtoMsg(message: _148.ValidatorSetPreferencesProtoMsg): _148.ValidatorSetPreferences;
                toProto(message: _148.ValidatorSetPreferences): Uint8Array;
                toProtoMsg(message: _148.ValidatorSetPreferences): _148.ValidatorSetPreferencesProtoMsg;
            };
            UserValidatorPreferencesRequest: {
                typeUrl: string;
                encode(message: _147.UserValidatorPreferencesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.UserValidatorPreferencesRequest;
                fromJSON(object: any): _147.UserValidatorPreferencesRequest;
                toJSON(message: _147.UserValidatorPreferencesRequest): unknown;
                fromPartial(object: Partial<_147.UserValidatorPreferencesRequest>): _147.UserValidatorPreferencesRequest;
                fromSDK(object: _147.UserValidatorPreferencesRequestSDKType): _147.UserValidatorPreferencesRequest;
                toSDK(message: _147.UserValidatorPreferencesRequest): _147.UserValidatorPreferencesRequestSDKType;
                fromAmino(object: _147.UserValidatorPreferencesRequestAmino): _147.UserValidatorPreferencesRequest;
                toAmino(message: _147.UserValidatorPreferencesRequest): _147.UserValidatorPreferencesRequestAmino;
                fromAminoMsg(object: _147.UserValidatorPreferencesRequestAminoMsg): _147.UserValidatorPreferencesRequest;
                toAminoMsg(message: _147.UserValidatorPreferencesRequest): _147.UserValidatorPreferencesRequestAminoMsg;
                fromProtoMsg(message: _147.UserValidatorPreferencesRequestProtoMsg): _147.UserValidatorPreferencesRequest;
                toProto(message: _147.UserValidatorPreferencesRequest): Uint8Array;
                toProtoMsg(message: _147.UserValidatorPreferencesRequest): _147.UserValidatorPreferencesRequestProtoMsg;
            };
            UserValidatorPreferencesResponse: {
                typeUrl: string;
                encode(message: _147.UserValidatorPreferencesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.UserValidatorPreferencesResponse;
                fromJSON(object: any): _147.UserValidatorPreferencesResponse;
                toJSON(message: _147.UserValidatorPreferencesResponse): unknown;
                fromPartial(object: Partial<_147.UserValidatorPreferencesResponse>): _147.UserValidatorPreferencesResponse;
                fromSDK(object: _147.UserValidatorPreferencesResponseSDKType): _147.UserValidatorPreferencesResponse;
                toSDK(message: _147.UserValidatorPreferencesResponse): _147.UserValidatorPreferencesResponseSDKType;
                fromAmino(object: _147.UserValidatorPreferencesResponseAmino): _147.UserValidatorPreferencesResponse;
                toAmino(message: _147.UserValidatorPreferencesResponse): _147.UserValidatorPreferencesResponseAmino;
                fromAminoMsg(object: _147.UserValidatorPreferencesResponseAminoMsg): _147.UserValidatorPreferencesResponse;
                toAminoMsg(message: _147.UserValidatorPreferencesResponse): _147.UserValidatorPreferencesResponseAminoMsg;
                fromProtoMsg(message: _147.UserValidatorPreferencesResponseProtoMsg): _147.UserValidatorPreferencesResponse;
                toProto(message: _147.UserValidatorPreferencesResponse): Uint8Array;
                toProtoMsg(message: _147.UserValidatorPreferencesResponse): _147.UserValidatorPreferencesResponseProtoMsg;
            };
        };
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
            osmosis: {
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: any;
                        };
                        stableswap: {
                            v1beta1: any;
                        };
                    };
                    v1beta1: any;
                };
                incentives: any;
                lockup: any;
                protorev: {
                    v1beta1: any;
                };
                superfluid: any;
                swaprouter: {
                    v1beta1: any;
                };
                tokenfactory: {
                    v1beta1: any;
                };
                valsetpref: {
                    v1beta1: any;
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
            osmosis: {
                downtimedetector: {
                    v1beta1: _270.QueryClientImpl;
                };
                epochs: {
                    v1beta1: _271.QueryClientImpl;
                };
                gamm: {
                    v1beta1: _272.QueryClientImpl;
                    v2: _273.QueryClientImpl;
                };
                ibcratelimit: {
                    v1beta1: _274.QueryClientImpl;
                };
                incentives: _275.QueryClientImpl;
                lockup: _276.QueryClientImpl;
                mint: {
                    v1beta1: _277.QueryClientImpl;
                };
                poolincentives: {
                    v1beta1: _278.QueryClientImpl;
                };
                protorev: {
                    v1beta1: _279.QueryClientImpl;
                };
                superfluid: _280.QueryClientImpl;
                swaprouter: {
                    v1beta1: _281.QueryClientImpl;
                };
                tokenfactory: {
                    v1beta1: _282.QueryClientImpl;
                };
                twap: {
                    v1beta1: _283.QueryClientImpl;
                };
                txfees: {
                    v1beta1: _284.QueryClientImpl;
                };
                valsetpref: {
                    v1beta1: _285.QueryClientImpl;
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
            osmosis: {
                downtimedetector: {
                    v1beta1: _254.LCDQueryClient;
                };
                epochs: {
                    v1beta1: _255.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _256.LCDQueryClient;
                    v2: _257.LCDQueryClient;
                };
                ibcratelimit: {
                    v1beta1: _258.LCDQueryClient;
                };
                incentives: _259.LCDQueryClient;
                lockup: _260.LCDQueryClient;
                mint: {
                    v1beta1: _261.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _262.LCDQueryClient;
                };
                protorev: {
                    v1beta1: _263.LCDQueryClient;
                };
                superfluid: _264.LCDQueryClient;
                swaprouter: {
                    v1beta1: _265.LCDQueryClient;
                };
                tokenfactory: {
                    v1beta1: _266.LCDQueryClient;
                };
                twap: {
                    v1beta1: _267.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _268.LCDQueryClient;
                };
                valsetpref: {
                    v1beta1: _269.LCDQueryClient;
                };
            };
        }>;
    };
}

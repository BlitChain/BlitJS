import * as _90 from "./downtime-detector/v1beta1/downtime_duration";
import * as _91 from "./downtime-detector/v1beta1/genesis";
import * as _92 from "./downtime-detector/v1beta1/query";
import * as _93 from "./epochs/genesis";
import * as _94 from "./epochs/query";
import * as _95 from "./gamm/pool-models/balancer/balancerPool";
import * as _96 from "./gamm/v1beta1/genesis";
import * as _97 from "./gamm/v1beta1/query";
import * as _98 from "./gamm/v1beta1/tx";
import * as _99 from "./gamm/pool-models/balancer/tx/tx";
import * as _100 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _101 from "./gamm/pool-models/stableswap/tx";
import * as _102 from "./gamm/v2/query";
import * as _103 from "./ibc-rate-limit/v1beta1/params";
import * as _104 from "./ibc-rate-limit/v1beta1/query";
import * as _105 from "./incentives/gauge";
import * as _106 from "./incentives/genesis";
import * as _107 from "./incentives/params";
import * as _108 from "./incentives/query";
import * as _109 from "./incentives/tx";
import * as _110 from "./lockup/genesis";
import * as _111 from "./lockup/lock";
import * as _112 from "./lockup/params";
import * as _113 from "./lockup/query";
import * as _114 from "./lockup/tx";
import * as _115 from "./mint/v1beta1/genesis";
import * as _116 from "./mint/v1beta1/mint";
import * as _117 from "./mint/v1beta1/query";
import * as _118 from "./pool-incentives/v1beta1/genesis";
import * as _119 from "./pool-incentives/v1beta1/gov";
import * as _120 from "./pool-incentives/v1beta1/incentives";
import * as _121 from "./pool-incentives/v1beta1/query";
import * as _122 from "./protorev/v1beta1/genesis";
import * as _123 from "./protorev/v1beta1/gov";
import * as _124 from "./protorev/v1beta1/params";
import * as _125 from "./protorev/v1beta1/protorev";
import * as _126 from "./protorev/v1beta1/query";
import * as _127 from "./protorev/v1beta1/tx";
import * as _128 from "./sumtree/v1beta1/tree";
import * as _129 from "./superfluid/genesis";
import * as _130 from "./superfluid/params";
import * as _131 from "./superfluid/query";
import * as _132 from "./superfluid/superfluid";
import * as _133 from "./superfluid/tx";
import * as _134 from "./swaprouter/v1beta1/genesis";
import * as _135 from "./swaprouter/v1beta1/module_route";
import * as _136 from "./swaprouter/v1beta1/query";
import * as _137 from "./swaprouter/v1beta1/swap_route";
import * as _138 from "./swaprouter/v1beta1/tx";
import * as _139 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _140 from "./tokenfactory/v1beta1/genesis";
import * as _141 from "./tokenfactory/v1beta1/params";
import * as _142 from "./tokenfactory/v1beta1/query";
import * as _143 from "./tokenfactory/v1beta1/tx";
import * as _144 from "./twap/v1beta1/genesis";
import * as _145 from "./twap/v1beta1/query";
import * as _146 from "./twap/v1beta1/twap_record";
import * as _147 from "./txfees/v1beta1/feetoken";
import * as _148 from "./txfees/v1beta1/genesis";
import * as _149 from "./txfees/v1beta1/gov";
import * as _150 from "./txfees/v1beta1/query";
import * as _151 from "./valset-pref/v1beta1/query";
import * as _152 from "./valset-pref/v1beta1/state";
import * as _153 from "./valset-pref/v1beta1/tx";
import * as _263 from "./downtime-detector/v1beta1/query.lcd";
import * as _264 from "./epochs/query.lcd";
import * as _265 from "./gamm/v1beta1/query.lcd";
import * as _266 from "./gamm/v2/query.lcd";
import * as _267 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _268 from "./incentives/query.lcd";
import * as _269 from "./lockup/query.lcd";
import * as _270 from "./mint/v1beta1/query.lcd";
import * as _271 from "./pool-incentives/v1beta1/query.lcd";
import * as _272 from "./protorev/v1beta1/query.lcd";
import * as _273 from "./superfluid/query.lcd";
import * as _274 from "./swaprouter/v1beta1/query.lcd";
import * as _275 from "./tokenfactory/v1beta1/query.lcd";
import * as _276 from "./twap/v1beta1/query.lcd";
import * as _277 from "./txfees/v1beta1/query.lcd";
import * as _278 from "./valset-pref/v1beta1/query.lcd";
import * as _279 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _280 from "./epochs/query.rpc.Query";
import * as _281 from "./gamm/v1beta1/query.rpc.Query";
import * as _282 from "./gamm/v2/query.rpc.Query";
import * as _283 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _284 from "./incentives/query.rpc.Query";
import * as _285 from "./lockup/query.rpc.Query";
import * as _286 from "./mint/v1beta1/query.rpc.Query";
import * as _287 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _288 from "./protorev/v1beta1/query.rpc.Query";
import * as _289 from "./superfluid/query.rpc.Query";
import * as _290 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _291 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _292 from "./twap/v1beta1/query.rpc.Query";
import * as _293 from "./txfees/v1beta1/query.rpc.Query";
import * as _294 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _295 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _296 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _297 from "./gamm/v1beta1/tx.rpc.msg";
import * as _298 from "./incentives/tx.rpc.msg";
import * as _299 from "./lockup/tx.rpc.msg";
import * as _300 from "./protorev/v1beta1/tx.rpc.msg";
import * as _301 from "./superfluid/tx.rpc.msg";
import * as _302 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _303 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _304 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace downtimedetector {
        const v1beta1: {
            Query: typeof _279.Query;
            QueryClientImpl: typeof _279.QueryClientImpl;
            LCDQueryClient: typeof _263.LCDQueryClient;
            RecoveredSinceDowntimeOfLengthRequest: {
                typeUrl: string;
                encode(message: _92.RecoveredSinceDowntimeOfLengthRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.RecoveredSinceDowntimeOfLengthRequest;
                fromJSON(object: any): _92.RecoveredSinceDowntimeOfLengthRequest;
                toJSON(message: _92.RecoveredSinceDowntimeOfLengthRequest): unknown;
                fromPartial(object: Partial<_92.RecoveredSinceDowntimeOfLengthRequest>): _92.RecoveredSinceDowntimeOfLengthRequest;
                fromSDK(object: _92.RecoveredSinceDowntimeOfLengthRequestSDKType): _92.RecoveredSinceDowntimeOfLengthRequest;
                toSDK(message: _92.RecoveredSinceDowntimeOfLengthRequest): _92.RecoveredSinceDowntimeOfLengthRequestSDKType;
                fromAmino(object: _92.RecoveredSinceDowntimeOfLengthRequestAmino): _92.RecoveredSinceDowntimeOfLengthRequest;
                toAmino(message: _92.RecoveredSinceDowntimeOfLengthRequest): _92.RecoveredSinceDowntimeOfLengthRequestAmino;
                fromAminoMsg(object: _92.RecoveredSinceDowntimeOfLengthRequestAminoMsg): _92.RecoveredSinceDowntimeOfLengthRequest;
                toAminoMsg(message: _92.RecoveredSinceDowntimeOfLengthRequest): _92.RecoveredSinceDowntimeOfLengthRequestAminoMsg;
                fromProtoMsg(message: _92.RecoveredSinceDowntimeOfLengthRequestProtoMsg): _92.RecoveredSinceDowntimeOfLengthRequest;
                toProto(message: _92.RecoveredSinceDowntimeOfLengthRequest): Uint8Array;
                toProtoMsg(message: _92.RecoveredSinceDowntimeOfLengthRequest): _92.RecoveredSinceDowntimeOfLengthRequestProtoMsg;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                typeUrl: string;
                encode(message: _92.RecoveredSinceDowntimeOfLengthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.RecoveredSinceDowntimeOfLengthResponse;
                fromJSON(object: any): _92.RecoveredSinceDowntimeOfLengthResponse;
                toJSON(message: _92.RecoveredSinceDowntimeOfLengthResponse): unknown;
                fromPartial(object: Partial<_92.RecoveredSinceDowntimeOfLengthResponse>): _92.RecoveredSinceDowntimeOfLengthResponse;
                fromSDK(object: _92.RecoveredSinceDowntimeOfLengthResponseSDKType): _92.RecoveredSinceDowntimeOfLengthResponse;
                toSDK(message: _92.RecoveredSinceDowntimeOfLengthResponse): _92.RecoveredSinceDowntimeOfLengthResponseSDKType;
                fromAmino(object: _92.RecoveredSinceDowntimeOfLengthResponseAmino): _92.RecoveredSinceDowntimeOfLengthResponse;
                toAmino(message: _92.RecoveredSinceDowntimeOfLengthResponse): _92.RecoveredSinceDowntimeOfLengthResponseAmino;
                fromAminoMsg(object: _92.RecoveredSinceDowntimeOfLengthResponseAminoMsg): _92.RecoveredSinceDowntimeOfLengthResponse;
                toAminoMsg(message: _92.RecoveredSinceDowntimeOfLengthResponse): _92.RecoveredSinceDowntimeOfLengthResponseAminoMsg;
                fromProtoMsg(message: _92.RecoveredSinceDowntimeOfLengthResponseProtoMsg): _92.RecoveredSinceDowntimeOfLengthResponse;
                toProto(message: _92.RecoveredSinceDowntimeOfLengthResponse): Uint8Array;
                toProtoMsg(message: _92.RecoveredSinceDowntimeOfLengthResponse): _92.RecoveredSinceDowntimeOfLengthResponseProtoMsg;
            };
            GenesisDowntimeEntry: {
                typeUrl: string;
                encode(message: _91.GenesisDowntimeEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.GenesisDowntimeEntry;
                fromJSON(object: any): _91.GenesisDowntimeEntry;
                toJSON(message: _91.GenesisDowntimeEntry): unknown;
                fromPartial(object: Partial<_91.GenesisDowntimeEntry>): _91.GenesisDowntimeEntry;
                fromSDK(object: _91.GenesisDowntimeEntrySDKType): _91.GenesisDowntimeEntry;
                toSDK(message: _91.GenesisDowntimeEntry): _91.GenesisDowntimeEntrySDKType;
                fromAmino(object: _91.GenesisDowntimeEntryAmino): _91.GenesisDowntimeEntry;
                toAmino(message: _91.GenesisDowntimeEntry): _91.GenesisDowntimeEntryAmino;
                fromAminoMsg(object: _91.GenesisDowntimeEntryAminoMsg): _91.GenesisDowntimeEntry;
                toAminoMsg(message: _91.GenesisDowntimeEntry): _91.GenesisDowntimeEntryAminoMsg;
                fromProtoMsg(message: _91.GenesisDowntimeEntryProtoMsg): _91.GenesisDowntimeEntry;
                toProto(message: _91.GenesisDowntimeEntry): Uint8Array;
                toProtoMsg(message: _91.GenesisDowntimeEntry): _91.GenesisDowntimeEntryProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _91.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.GenesisState;
                fromJSON(object: any): _91.GenesisState;
                toJSON(message: _91.GenesisState): unknown;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
                fromSDK(object: _91.GenesisStateSDKType): _91.GenesisState;
                toSDK(message: _91.GenesisState): _91.GenesisStateSDKType;
                fromAmino(object: _91.GenesisStateAmino): _91.GenesisState;
                toAmino(message: _91.GenesisState): _91.GenesisStateAmino;
                fromAminoMsg(object: _91.GenesisStateAminoMsg): _91.GenesisState;
                toAminoMsg(message: _91.GenesisState): _91.GenesisStateAminoMsg;
                fromProtoMsg(message: _91.GenesisStateProtoMsg): _91.GenesisState;
                toProto(message: _91.GenesisState): Uint8Array;
                toProtoMsg(message: _91.GenesisState): _91.GenesisStateProtoMsg;
            };
            downtimeFromJSON(object: any): _90.Downtime;
            downtimeToJSON(object: _90.Downtime): string;
            Downtime: typeof _90.Downtime;
            DowntimeSDKType: typeof _90.Downtime;
            DowntimeAmino: typeof _90.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            Query: typeof _280.Query;
            QueryClientImpl: typeof _280.QueryClientImpl;
            LCDQueryClient: typeof _264.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _94.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryEpochsInfoRequest;
                fromJSON(_: any): _94.QueryEpochsInfoRequest;
                toJSON(_: _94.QueryEpochsInfoRequest): unknown;
                fromPartial(_: Partial<_94.QueryEpochsInfoRequest>): _94.QueryEpochsInfoRequest;
                fromSDK(_: _94.QueryEpochsInfoRequestSDKType): _94.QueryEpochsInfoRequest;
                toSDK(_: _94.QueryEpochsInfoRequest): _94.QueryEpochsInfoRequestSDKType;
                fromAmino(_: _94.QueryEpochsInfoRequestAmino): _94.QueryEpochsInfoRequest;
                toAmino(_: _94.QueryEpochsInfoRequest): _94.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _94.QueryEpochsInfoRequestAminoMsg): _94.QueryEpochsInfoRequest;
                toAminoMsg(message: _94.QueryEpochsInfoRequest): _94.QueryEpochsInfoRequestAminoMsg;
                fromProtoMsg(message: _94.QueryEpochsInfoRequestProtoMsg): _94.QueryEpochsInfoRequest;
                toProto(message: _94.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _94.QueryEpochsInfoRequest): _94.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _94.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryEpochsInfoResponse;
                fromJSON(object: any): _94.QueryEpochsInfoResponse;
                toJSON(message: _94.QueryEpochsInfoResponse): unknown;
                fromPartial(object: Partial<_94.QueryEpochsInfoResponse>): _94.QueryEpochsInfoResponse;
                fromSDK(object: _94.QueryEpochsInfoResponseSDKType): _94.QueryEpochsInfoResponse;
                toSDK(message: _94.QueryEpochsInfoResponse): _94.QueryEpochsInfoResponseSDKType;
                fromAmino(object: _94.QueryEpochsInfoResponseAmino): _94.QueryEpochsInfoResponse;
                toAmino(message: _94.QueryEpochsInfoResponse): _94.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _94.QueryEpochsInfoResponseAminoMsg): _94.QueryEpochsInfoResponse;
                toAminoMsg(message: _94.QueryEpochsInfoResponse): _94.QueryEpochsInfoResponseAminoMsg;
                fromProtoMsg(message: _94.QueryEpochsInfoResponseProtoMsg): _94.QueryEpochsInfoResponse;
                toProto(message: _94.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _94.QueryEpochsInfoResponse): _94.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _94.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryCurrentEpochRequest;
                fromJSON(object: any): _94.QueryCurrentEpochRequest;
                toJSON(message: _94.QueryCurrentEpochRequest): unknown;
                fromPartial(object: Partial<_94.QueryCurrentEpochRequest>): _94.QueryCurrentEpochRequest;
                fromSDK(object: _94.QueryCurrentEpochRequestSDKType): _94.QueryCurrentEpochRequest;
                toSDK(message: _94.QueryCurrentEpochRequest): _94.QueryCurrentEpochRequestSDKType;
                fromAmino(object: _94.QueryCurrentEpochRequestAmino): _94.QueryCurrentEpochRequest;
                toAmino(message: _94.QueryCurrentEpochRequest): _94.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _94.QueryCurrentEpochRequestAminoMsg): _94.QueryCurrentEpochRequest;
                toAminoMsg(message: _94.QueryCurrentEpochRequest): _94.QueryCurrentEpochRequestAminoMsg;
                fromProtoMsg(message: _94.QueryCurrentEpochRequestProtoMsg): _94.QueryCurrentEpochRequest;
                toProto(message: _94.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _94.QueryCurrentEpochRequest): _94.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _94.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryCurrentEpochResponse;
                fromJSON(object: any): _94.QueryCurrentEpochResponse;
                toJSON(message: _94.QueryCurrentEpochResponse): unknown;
                fromPartial(object: Partial<_94.QueryCurrentEpochResponse>): _94.QueryCurrentEpochResponse;
                fromSDK(object: _94.QueryCurrentEpochResponseSDKType): _94.QueryCurrentEpochResponse;
                toSDK(message: _94.QueryCurrentEpochResponse): _94.QueryCurrentEpochResponseSDKType;
                fromAmino(object: _94.QueryCurrentEpochResponseAmino): _94.QueryCurrentEpochResponse;
                toAmino(message: _94.QueryCurrentEpochResponse): _94.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _94.QueryCurrentEpochResponseAminoMsg): _94.QueryCurrentEpochResponse;
                toAminoMsg(message: _94.QueryCurrentEpochResponse): _94.QueryCurrentEpochResponseAminoMsg;
                fromProtoMsg(message: _94.QueryCurrentEpochResponseProtoMsg): _94.QueryCurrentEpochResponse;
                toProto(message: _94.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _94.QueryCurrentEpochResponse): _94.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _93.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.EpochInfo;
                fromJSON(object: any): _93.EpochInfo;
                toJSON(message: _93.EpochInfo): unknown;
                fromPartial(object: Partial<_93.EpochInfo>): _93.EpochInfo;
                fromSDK(object: _93.EpochInfoSDKType): _93.EpochInfo;
                toSDK(message: _93.EpochInfo): _93.EpochInfoSDKType;
                fromAmino(object: _93.EpochInfoAmino): _93.EpochInfo;
                toAmino(message: _93.EpochInfo): _93.EpochInfoAmino;
                fromAminoMsg(object: _93.EpochInfoAminoMsg): _93.EpochInfo;
                toAminoMsg(message: _93.EpochInfo): _93.EpochInfoAminoMsg;
                fromProtoMsg(message: _93.EpochInfoProtoMsg): _93.EpochInfo;
                toProto(message: _93.EpochInfo): Uint8Array;
                toProtoMsg(message: _93.EpochInfo): _93.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _93.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.GenesisState;
                fromJSON(object: any): _93.GenesisState;
                toJSON(message: _93.GenesisState): unknown;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
                fromSDK(object: _93.GenesisStateSDKType): _93.GenesisState;
                toSDK(message: _93.GenesisState): _93.GenesisStateSDKType;
                fromAmino(object: _93.GenesisStateAmino): _93.GenesisState;
                toAmino(message: _93.GenesisState): _93.GenesisStateAmino;
                fromAminoMsg(object: _93.GenesisStateAminoMsg): _93.GenesisState;
                toAminoMsg(message: _93.GenesisState): _93.GenesisStateAminoMsg;
                fromProtoMsg(message: _93.GenesisStateProtoMsg): _93.GenesisState;
                toProto(message: _93.GenesisState): Uint8Array;
                toProtoMsg(message: _93.GenesisState): _93.GenesisStateProtoMsg;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            Msg: typeof _297.Msg;
            Query: typeof _281.Query;
            QueryClientImpl: typeof _281.QueryClientImpl;
            LCDQueryClient: typeof _265.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _98.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _98.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _98.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _98.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _98.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _98.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _98.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _98.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _98.MsgJoinPool): {
                        typeUrl: string;
                        value: _98.MsgJoinPool;
                    };
                    exitPool(value: _98.MsgExitPool): {
                        typeUrl: string;
                        value: _98.MsgExitPool;
                    };
                    swapExactAmountIn(value: _98.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _98.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _98.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _98.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _98.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _98.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _98.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _98.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _98.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _98.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _98.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _98.MsgExitSwapShareAmountIn;
                    };
                };
                toJSON: {
                    joinPool(value: _98.MsgJoinPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitPool(value: _98.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _98.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _98.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _98.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _98.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _98.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _98.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _98.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _98.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _98.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _98.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _98.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _98.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _98.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _98.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _98.MsgJoinPool): {
                        typeUrl: string;
                        value: _98.MsgJoinPool;
                    };
                    exitPool(value: _98.MsgExitPool): {
                        typeUrl: string;
                        value: _98.MsgExitPool;
                    };
                    swapExactAmountIn(value: _98.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _98.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _98.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _98.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _98.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _98.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _98.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _98.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _98.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _98.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _98.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _98.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _98.MsgJoinPool) => _98.MsgJoinPoolAmino;
                    fromAmino: (object: _98.MsgJoinPoolAmino) => _98.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _98.MsgExitPool) => _98.MsgExitPoolAmino;
                    fromAmino: (object: _98.MsgExitPoolAmino) => _98.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _98.MsgSwapExactAmountIn) => _98.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _98.MsgSwapExactAmountInAmino) => _98.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _98.MsgSwapExactAmountOut) => _98.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _98.MsgSwapExactAmountOutAmino) => _98.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _98.MsgJoinSwapExternAmountIn) => _98.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _98.MsgJoinSwapExternAmountInAmino) => _98.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _98.MsgJoinSwapShareAmountOut) => _98.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _98.MsgJoinSwapShareAmountOutAmino) => _98.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _98.MsgExitSwapExternAmountOut) => _98.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _98.MsgExitSwapExternAmountOutAmino) => _98.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _98.MsgExitSwapShareAmountIn) => _98.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _98.MsgExitSwapShareAmountInAmino) => _98.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                typeUrl: string;
                encode(message: _98.MsgJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgJoinPool;
                fromJSON(object: any): _98.MsgJoinPool;
                toJSON(message: _98.MsgJoinPool): unknown;
                fromPartial(object: Partial<_98.MsgJoinPool>): _98.MsgJoinPool;
                fromSDK(object: _98.MsgJoinPoolSDKType): _98.MsgJoinPool;
                toSDK(message: _98.MsgJoinPool): _98.MsgJoinPoolSDKType;
                fromAmino(object: _98.MsgJoinPoolAmino): _98.MsgJoinPool;
                toAmino(message: _98.MsgJoinPool): _98.MsgJoinPoolAmino;
                fromAminoMsg(object: _98.MsgJoinPoolAminoMsg): _98.MsgJoinPool;
                toAminoMsg(message: _98.MsgJoinPool): _98.MsgJoinPoolAminoMsg;
                fromProtoMsg(message: _98.MsgJoinPoolProtoMsg): _98.MsgJoinPool;
                toProto(message: _98.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _98.MsgJoinPool): _98.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                typeUrl: string;
                encode(message: _98.MsgJoinPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgJoinPoolResponse;
                fromJSON(object: any): _98.MsgJoinPoolResponse;
                toJSON(message: _98.MsgJoinPoolResponse): unknown;
                fromPartial(object: Partial<_98.MsgJoinPoolResponse>): _98.MsgJoinPoolResponse;
                fromSDK(object: _98.MsgJoinPoolResponseSDKType): _98.MsgJoinPoolResponse;
                toSDK(message: _98.MsgJoinPoolResponse): _98.MsgJoinPoolResponseSDKType;
                fromAmino(object: _98.MsgJoinPoolResponseAmino): _98.MsgJoinPoolResponse;
                toAmino(message: _98.MsgJoinPoolResponse): _98.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _98.MsgJoinPoolResponseAminoMsg): _98.MsgJoinPoolResponse;
                toAminoMsg(message: _98.MsgJoinPoolResponse): _98.MsgJoinPoolResponseAminoMsg;
                fromProtoMsg(message: _98.MsgJoinPoolResponseProtoMsg): _98.MsgJoinPoolResponse;
                toProto(message: _98.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _98.MsgJoinPoolResponse): _98.MsgJoinPoolResponseProtoMsg;
            };
            MsgExitPool: {
                typeUrl: string;
                encode(message: _98.MsgExitPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgExitPool;
                fromJSON(object: any): _98.MsgExitPool;
                toJSON(message: _98.MsgExitPool): unknown;
                fromPartial(object: Partial<_98.MsgExitPool>): _98.MsgExitPool;
                fromSDK(object: _98.MsgExitPoolSDKType): _98.MsgExitPool;
                toSDK(message: _98.MsgExitPool): _98.MsgExitPoolSDKType;
                fromAmino(object: _98.MsgExitPoolAmino): _98.MsgExitPool;
                toAmino(message: _98.MsgExitPool): _98.MsgExitPoolAmino;
                fromAminoMsg(object: _98.MsgExitPoolAminoMsg): _98.MsgExitPool;
                toAminoMsg(message: _98.MsgExitPool): _98.MsgExitPoolAminoMsg;
                fromProtoMsg(message: _98.MsgExitPoolProtoMsg): _98.MsgExitPool;
                toProto(message: _98.MsgExitPool): Uint8Array;
                toProtoMsg(message: _98.MsgExitPool): _98.MsgExitPoolProtoMsg;
            };
            MsgExitPoolResponse: {
                typeUrl: string;
                encode(message: _98.MsgExitPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgExitPoolResponse;
                fromJSON(object: any): _98.MsgExitPoolResponse;
                toJSON(message: _98.MsgExitPoolResponse): unknown;
                fromPartial(object: Partial<_98.MsgExitPoolResponse>): _98.MsgExitPoolResponse;
                fromSDK(object: _98.MsgExitPoolResponseSDKType): _98.MsgExitPoolResponse;
                toSDK(message: _98.MsgExitPoolResponse): _98.MsgExitPoolResponseSDKType;
                fromAmino(object: _98.MsgExitPoolResponseAmino): _98.MsgExitPoolResponse;
                toAmino(message: _98.MsgExitPoolResponse): _98.MsgExitPoolResponseAmino;
                fromAminoMsg(object: _98.MsgExitPoolResponseAminoMsg): _98.MsgExitPoolResponse;
                toAminoMsg(message: _98.MsgExitPoolResponse): _98.MsgExitPoolResponseAminoMsg;
                fromProtoMsg(message: _98.MsgExitPoolResponseProtoMsg): _98.MsgExitPoolResponse;
                toProto(message: _98.MsgExitPoolResponse): Uint8Array;
                toProtoMsg(message: _98.MsgExitPoolResponse): _98.MsgExitPoolResponseProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _98.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.SwapAmountInRoute;
                fromJSON(object: any): _98.SwapAmountInRoute;
                toJSON(message: _98.SwapAmountInRoute): unknown;
                fromPartial(object: Partial<_98.SwapAmountInRoute>): _98.SwapAmountInRoute;
                fromSDK(object: _98.SwapAmountInRouteSDKType): _98.SwapAmountInRoute;
                toSDK(message: _98.SwapAmountInRoute): _98.SwapAmountInRouteSDKType;
                fromAmino(object: _98.SwapAmountInRouteAmino): _98.SwapAmountInRoute;
                toAmino(message: _98.SwapAmountInRoute): _98.SwapAmountInRouteAmino;
                fromAminoMsg(object: _98.SwapAmountInRouteAminoMsg): _98.SwapAmountInRoute;
                toAminoMsg(message: _98.SwapAmountInRoute): _98.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _98.SwapAmountInRouteProtoMsg): _98.SwapAmountInRoute;
                toProto(message: _98.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _98.SwapAmountInRoute): _98.SwapAmountInRouteProtoMsg;
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _98.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgSwapExactAmountIn;
                fromJSON(object: any): _98.MsgSwapExactAmountIn;
                toJSON(message: _98.MsgSwapExactAmountIn): unknown;
                fromPartial(object: Partial<_98.MsgSwapExactAmountIn>): _98.MsgSwapExactAmountIn;
                fromSDK(object: _98.MsgSwapExactAmountInSDKType): _98.MsgSwapExactAmountIn;
                toSDK(message: _98.MsgSwapExactAmountIn): _98.MsgSwapExactAmountInSDKType;
                fromAmino(object: _98.MsgSwapExactAmountInAmino): _98.MsgSwapExactAmountIn;
                toAmino(message: _98.MsgSwapExactAmountIn): _98.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _98.MsgSwapExactAmountInAminoMsg): _98.MsgSwapExactAmountIn;
                toAminoMsg(message: _98.MsgSwapExactAmountIn): _98.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _98.MsgSwapExactAmountInProtoMsg): _98.MsgSwapExactAmountIn;
                toProto(message: _98.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _98.MsgSwapExactAmountIn): _98.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _98.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _98.MsgSwapExactAmountInResponse;
                toJSON(message: _98.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_98.MsgSwapExactAmountInResponse>): _98.MsgSwapExactAmountInResponse;
                fromSDK(object: _98.MsgSwapExactAmountInResponseSDKType): _98.MsgSwapExactAmountInResponse;
                toSDK(message: _98.MsgSwapExactAmountInResponse): _98.MsgSwapExactAmountInResponseSDKType;
                fromAmino(object: _98.MsgSwapExactAmountInResponseAmino): _98.MsgSwapExactAmountInResponse;
                toAmino(message: _98.MsgSwapExactAmountInResponse): _98.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _98.MsgSwapExactAmountInResponseAminoMsg): _98.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _98.MsgSwapExactAmountInResponse): _98.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _98.MsgSwapExactAmountInResponseProtoMsg): _98.MsgSwapExactAmountInResponse;
                toProto(message: _98.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _98.MsgSwapExactAmountInResponse): _98.MsgSwapExactAmountInResponseProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _98.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.SwapAmountOutRoute;
                fromJSON(object: any): _98.SwapAmountOutRoute;
                toJSON(message: _98.SwapAmountOutRoute): unknown;
                fromPartial(object: Partial<_98.SwapAmountOutRoute>): _98.SwapAmountOutRoute;
                fromSDK(object: _98.SwapAmountOutRouteSDKType): _98.SwapAmountOutRoute;
                toSDK(message: _98.SwapAmountOutRoute): _98.SwapAmountOutRouteSDKType;
                fromAmino(object: _98.SwapAmountOutRouteAmino): _98.SwapAmountOutRoute;
                toAmino(message: _98.SwapAmountOutRoute): _98.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _98.SwapAmountOutRouteAminoMsg): _98.SwapAmountOutRoute;
                toAminoMsg(message: _98.SwapAmountOutRoute): _98.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _98.SwapAmountOutRouteProtoMsg): _98.SwapAmountOutRoute;
                toProto(message: _98.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _98.SwapAmountOutRoute): _98.SwapAmountOutRouteProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _98.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgSwapExactAmountOut;
                fromJSON(object: any): _98.MsgSwapExactAmountOut;
                toJSON(message: _98.MsgSwapExactAmountOut): unknown;
                fromPartial(object: Partial<_98.MsgSwapExactAmountOut>): _98.MsgSwapExactAmountOut;
                fromSDK(object: _98.MsgSwapExactAmountOutSDKType): _98.MsgSwapExactAmountOut;
                toSDK(message: _98.MsgSwapExactAmountOut): _98.MsgSwapExactAmountOutSDKType;
                fromAmino(object: _98.MsgSwapExactAmountOutAmino): _98.MsgSwapExactAmountOut;
                toAmino(message: _98.MsgSwapExactAmountOut): _98.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _98.MsgSwapExactAmountOutAminoMsg): _98.MsgSwapExactAmountOut;
                toAminoMsg(message: _98.MsgSwapExactAmountOut): _98.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _98.MsgSwapExactAmountOutProtoMsg): _98.MsgSwapExactAmountOut;
                toProto(message: _98.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _98.MsgSwapExactAmountOut): _98.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _98.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _98.MsgSwapExactAmountOutResponse;
                toJSON(message: _98.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_98.MsgSwapExactAmountOutResponse>): _98.MsgSwapExactAmountOutResponse;
                fromSDK(object: _98.MsgSwapExactAmountOutResponseSDKType): _98.MsgSwapExactAmountOutResponse;
                toSDK(message: _98.MsgSwapExactAmountOutResponse): _98.MsgSwapExactAmountOutResponseSDKType;
                fromAmino(object: _98.MsgSwapExactAmountOutResponseAmino): _98.MsgSwapExactAmountOutResponse;
                toAmino(message: _98.MsgSwapExactAmountOutResponse): _98.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _98.MsgSwapExactAmountOutResponseAminoMsg): _98.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _98.MsgSwapExactAmountOutResponse): _98.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _98.MsgSwapExactAmountOutResponseProtoMsg): _98.MsgSwapExactAmountOutResponse;
                toProto(message: _98.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _98.MsgSwapExactAmountOutResponse): _98.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgJoinSwapExternAmountIn: {
                typeUrl: string;
                encode(message: _98.MsgJoinSwapExternAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _98.MsgJoinSwapExternAmountIn;
                toJSON(message: _98.MsgJoinSwapExternAmountIn): unknown;
                fromPartial(object: Partial<_98.MsgJoinSwapExternAmountIn>): _98.MsgJoinSwapExternAmountIn;
                fromSDK(object: _98.MsgJoinSwapExternAmountInSDKType): _98.MsgJoinSwapExternAmountIn;
                toSDK(message: _98.MsgJoinSwapExternAmountIn): _98.MsgJoinSwapExternAmountInSDKType;
                fromAmino(object: _98.MsgJoinSwapExternAmountInAmino): _98.MsgJoinSwapExternAmountIn;
                toAmino(message: _98.MsgJoinSwapExternAmountIn): _98.MsgJoinSwapExternAmountInAmino;
                fromAminoMsg(object: _98.MsgJoinSwapExternAmountInAminoMsg): _98.MsgJoinSwapExternAmountIn;
                toAminoMsg(message: _98.MsgJoinSwapExternAmountIn): _98.MsgJoinSwapExternAmountInAminoMsg;
                fromProtoMsg(message: _98.MsgJoinSwapExternAmountInProtoMsg): _98.MsgJoinSwapExternAmountIn;
                toProto(message: _98.MsgJoinSwapExternAmountIn): Uint8Array;
                toProtoMsg(message: _98.MsgJoinSwapExternAmountIn): _98.MsgJoinSwapExternAmountInProtoMsg;
            };
            MsgJoinSwapExternAmountInResponse: {
                typeUrl: string;
                encode(message: _98.MsgJoinSwapExternAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _98.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _98.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial(object: Partial<_98.MsgJoinSwapExternAmountInResponse>): _98.MsgJoinSwapExternAmountInResponse;
                fromSDK(object: _98.MsgJoinSwapExternAmountInResponseSDKType): _98.MsgJoinSwapExternAmountInResponse;
                toSDK(message: _98.MsgJoinSwapExternAmountInResponse): _98.MsgJoinSwapExternAmountInResponseSDKType;
                fromAmino(object: _98.MsgJoinSwapExternAmountInResponseAmino): _98.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _98.MsgJoinSwapExternAmountInResponse): _98.MsgJoinSwapExternAmountInResponseAmino;
                fromAminoMsg(object: _98.MsgJoinSwapExternAmountInResponseAminoMsg): _98.MsgJoinSwapExternAmountInResponse;
                toAminoMsg(message: _98.MsgJoinSwapExternAmountInResponse): _98.MsgJoinSwapExternAmountInResponseAminoMsg;
                fromProtoMsg(message: _98.MsgJoinSwapExternAmountInResponseProtoMsg): _98.MsgJoinSwapExternAmountInResponse;
                toProto(message: _98.MsgJoinSwapExternAmountInResponse): Uint8Array;
                toProtoMsg(message: _98.MsgJoinSwapExternAmountInResponse): _98.MsgJoinSwapExternAmountInResponseProtoMsg;
            };
            MsgJoinSwapShareAmountOut: {
                typeUrl: string;
                encode(message: _98.MsgJoinSwapShareAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _98.MsgJoinSwapShareAmountOut;
                toJSON(message: _98.MsgJoinSwapShareAmountOut): unknown;
                fromPartial(object: Partial<_98.MsgJoinSwapShareAmountOut>): _98.MsgJoinSwapShareAmountOut;
                fromSDK(object: _98.MsgJoinSwapShareAmountOutSDKType): _98.MsgJoinSwapShareAmountOut;
                toSDK(message: _98.MsgJoinSwapShareAmountOut): _98.MsgJoinSwapShareAmountOutSDKType;
                fromAmino(object: _98.MsgJoinSwapShareAmountOutAmino): _98.MsgJoinSwapShareAmountOut;
                toAmino(message: _98.MsgJoinSwapShareAmountOut): _98.MsgJoinSwapShareAmountOutAmino;
                fromAminoMsg(object: _98.MsgJoinSwapShareAmountOutAminoMsg): _98.MsgJoinSwapShareAmountOut;
                toAminoMsg(message: _98.MsgJoinSwapShareAmountOut): _98.MsgJoinSwapShareAmountOutAminoMsg;
                fromProtoMsg(message: _98.MsgJoinSwapShareAmountOutProtoMsg): _98.MsgJoinSwapShareAmountOut;
                toProto(message: _98.MsgJoinSwapShareAmountOut): Uint8Array;
                toProtoMsg(message: _98.MsgJoinSwapShareAmountOut): _98.MsgJoinSwapShareAmountOutProtoMsg;
            };
            MsgJoinSwapShareAmountOutResponse: {
                typeUrl: string;
                encode(message: _98.MsgJoinSwapShareAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _98.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _98.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial(object: Partial<_98.MsgJoinSwapShareAmountOutResponse>): _98.MsgJoinSwapShareAmountOutResponse;
                fromSDK(object: _98.MsgJoinSwapShareAmountOutResponseSDKType): _98.MsgJoinSwapShareAmountOutResponse;
                toSDK(message: _98.MsgJoinSwapShareAmountOutResponse): _98.MsgJoinSwapShareAmountOutResponseSDKType;
                fromAmino(object: _98.MsgJoinSwapShareAmountOutResponseAmino): _98.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _98.MsgJoinSwapShareAmountOutResponse): _98.MsgJoinSwapShareAmountOutResponseAmino;
                fromAminoMsg(object: _98.MsgJoinSwapShareAmountOutResponseAminoMsg): _98.MsgJoinSwapShareAmountOutResponse;
                toAminoMsg(message: _98.MsgJoinSwapShareAmountOutResponse): _98.MsgJoinSwapShareAmountOutResponseAminoMsg;
                fromProtoMsg(message: _98.MsgJoinSwapShareAmountOutResponseProtoMsg): _98.MsgJoinSwapShareAmountOutResponse;
                toProto(message: _98.MsgJoinSwapShareAmountOutResponse): Uint8Array;
                toProtoMsg(message: _98.MsgJoinSwapShareAmountOutResponse): _98.MsgJoinSwapShareAmountOutResponseProtoMsg;
            };
            MsgExitSwapShareAmountIn: {
                typeUrl: string;
                encode(message: _98.MsgExitSwapShareAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _98.MsgExitSwapShareAmountIn;
                toJSON(message: _98.MsgExitSwapShareAmountIn): unknown;
                fromPartial(object: Partial<_98.MsgExitSwapShareAmountIn>): _98.MsgExitSwapShareAmountIn;
                fromSDK(object: _98.MsgExitSwapShareAmountInSDKType): _98.MsgExitSwapShareAmountIn;
                toSDK(message: _98.MsgExitSwapShareAmountIn): _98.MsgExitSwapShareAmountInSDKType;
                fromAmino(object: _98.MsgExitSwapShareAmountInAmino): _98.MsgExitSwapShareAmountIn;
                toAmino(message: _98.MsgExitSwapShareAmountIn): _98.MsgExitSwapShareAmountInAmino;
                fromAminoMsg(object: _98.MsgExitSwapShareAmountInAminoMsg): _98.MsgExitSwapShareAmountIn;
                toAminoMsg(message: _98.MsgExitSwapShareAmountIn): _98.MsgExitSwapShareAmountInAminoMsg;
                fromProtoMsg(message: _98.MsgExitSwapShareAmountInProtoMsg): _98.MsgExitSwapShareAmountIn;
                toProto(message: _98.MsgExitSwapShareAmountIn): Uint8Array;
                toProtoMsg(message: _98.MsgExitSwapShareAmountIn): _98.MsgExitSwapShareAmountInProtoMsg;
            };
            MsgExitSwapShareAmountInResponse: {
                typeUrl: string;
                encode(message: _98.MsgExitSwapShareAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _98.MsgExitSwapShareAmountInResponse;
                toJSON(message: _98.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial(object: Partial<_98.MsgExitSwapShareAmountInResponse>): _98.MsgExitSwapShareAmountInResponse;
                fromSDK(object: _98.MsgExitSwapShareAmountInResponseSDKType): _98.MsgExitSwapShareAmountInResponse;
                toSDK(message: _98.MsgExitSwapShareAmountInResponse): _98.MsgExitSwapShareAmountInResponseSDKType;
                fromAmino(object: _98.MsgExitSwapShareAmountInResponseAmino): _98.MsgExitSwapShareAmountInResponse;
                toAmino(message: _98.MsgExitSwapShareAmountInResponse): _98.MsgExitSwapShareAmountInResponseAmino;
                fromAminoMsg(object: _98.MsgExitSwapShareAmountInResponseAminoMsg): _98.MsgExitSwapShareAmountInResponse;
                toAminoMsg(message: _98.MsgExitSwapShareAmountInResponse): _98.MsgExitSwapShareAmountInResponseAminoMsg;
                fromProtoMsg(message: _98.MsgExitSwapShareAmountInResponseProtoMsg): _98.MsgExitSwapShareAmountInResponse;
                toProto(message: _98.MsgExitSwapShareAmountInResponse): Uint8Array;
                toProtoMsg(message: _98.MsgExitSwapShareAmountInResponse): _98.MsgExitSwapShareAmountInResponseProtoMsg;
            };
            MsgExitSwapExternAmountOut: {
                typeUrl: string;
                encode(message: _98.MsgExitSwapExternAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _98.MsgExitSwapExternAmountOut;
                toJSON(message: _98.MsgExitSwapExternAmountOut): unknown;
                fromPartial(object: Partial<_98.MsgExitSwapExternAmountOut>): _98.MsgExitSwapExternAmountOut;
                fromSDK(object: _98.MsgExitSwapExternAmountOutSDKType): _98.MsgExitSwapExternAmountOut;
                toSDK(message: _98.MsgExitSwapExternAmountOut): _98.MsgExitSwapExternAmountOutSDKType;
                fromAmino(object: _98.MsgExitSwapExternAmountOutAmino): _98.MsgExitSwapExternAmountOut;
                toAmino(message: _98.MsgExitSwapExternAmountOut): _98.MsgExitSwapExternAmountOutAmino;
                fromAminoMsg(object: _98.MsgExitSwapExternAmountOutAminoMsg): _98.MsgExitSwapExternAmountOut;
                toAminoMsg(message: _98.MsgExitSwapExternAmountOut): _98.MsgExitSwapExternAmountOutAminoMsg;
                fromProtoMsg(message: _98.MsgExitSwapExternAmountOutProtoMsg): _98.MsgExitSwapExternAmountOut;
                toProto(message: _98.MsgExitSwapExternAmountOut): Uint8Array;
                toProtoMsg(message: _98.MsgExitSwapExternAmountOut): _98.MsgExitSwapExternAmountOutProtoMsg;
            };
            MsgExitSwapExternAmountOutResponse: {
                typeUrl: string;
                encode(message: _98.MsgExitSwapExternAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _98.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _98.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial(object: Partial<_98.MsgExitSwapExternAmountOutResponse>): _98.MsgExitSwapExternAmountOutResponse;
                fromSDK(object: _98.MsgExitSwapExternAmountOutResponseSDKType): _98.MsgExitSwapExternAmountOutResponse;
                toSDK(message: _98.MsgExitSwapExternAmountOutResponse): _98.MsgExitSwapExternAmountOutResponseSDKType;
                fromAmino(object: _98.MsgExitSwapExternAmountOutResponseAmino): _98.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _98.MsgExitSwapExternAmountOutResponse): _98.MsgExitSwapExternAmountOutResponseAmino;
                fromAminoMsg(object: _98.MsgExitSwapExternAmountOutResponseAminoMsg): _98.MsgExitSwapExternAmountOutResponse;
                toAminoMsg(message: _98.MsgExitSwapExternAmountOutResponse): _98.MsgExitSwapExternAmountOutResponseAminoMsg;
                fromProtoMsg(message: _98.MsgExitSwapExternAmountOutResponseProtoMsg): _98.MsgExitSwapExternAmountOutResponse;
                toProto(message: _98.MsgExitSwapExternAmountOutResponse): Uint8Array;
                toProtoMsg(message: _98.MsgExitSwapExternAmountOutResponse): _98.MsgExitSwapExternAmountOutResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _97.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryPoolRequest;
                fromJSON(object: any): _97.QueryPoolRequest;
                toJSON(message: _97.QueryPoolRequest): unknown;
                fromPartial(object: Partial<_97.QueryPoolRequest>): _97.QueryPoolRequest;
                fromSDK(object: _97.QueryPoolRequestSDKType): _97.QueryPoolRequest;
                toSDK(message: _97.QueryPoolRequest): _97.QueryPoolRequestSDKType;
                fromAmino(object: _97.QueryPoolRequestAmino): _97.QueryPoolRequest;
                toAmino(message: _97.QueryPoolRequest): _97.QueryPoolRequestAmino;
                fromAminoMsg(object: _97.QueryPoolRequestAminoMsg): _97.QueryPoolRequest;
                toAminoMsg(message: _97.QueryPoolRequest): _97.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _97.QueryPoolRequestProtoMsg): _97.QueryPoolRequest;
                toProto(message: _97.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _97.QueryPoolRequest): _97.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _97.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryPoolResponse;
                fromJSON(object: any): _97.QueryPoolResponse;
                toJSON(message: _97.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_97.QueryPoolResponse>): _97.QueryPoolResponse;
                fromSDK(object: _97.QueryPoolResponseSDKType): _97.QueryPoolResponse;
                toSDK(message: _97.QueryPoolResponse): _97.QueryPoolResponseSDKType;
                fromAmino(object: _97.QueryPoolResponseAmino): _97.QueryPoolResponse;
                toAmino(message: _97.QueryPoolResponse): _97.QueryPoolResponseAmino;
                fromAminoMsg(object: _97.QueryPoolResponseAminoMsg): _97.QueryPoolResponse;
                toAminoMsg(message: _97.QueryPoolResponse): _97.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _97.QueryPoolResponseProtoMsg): _97.QueryPoolResponse;
                toProto(message: _97.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _97.QueryPoolResponse): _97.QueryPoolResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _97.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryPoolsRequest;
                fromJSON(object: any): _97.QueryPoolsRequest;
                toJSON(message: _97.QueryPoolsRequest): unknown;
                fromPartial(object: Partial<_97.QueryPoolsRequest>): _97.QueryPoolsRequest;
                fromSDK(object: _97.QueryPoolsRequestSDKType): _97.QueryPoolsRequest;
                toSDK(message: _97.QueryPoolsRequest): _97.QueryPoolsRequestSDKType;
                fromAmino(object: _97.QueryPoolsRequestAmino): _97.QueryPoolsRequest;
                toAmino(message: _97.QueryPoolsRequest): _97.QueryPoolsRequestAmino;
                fromAminoMsg(object: _97.QueryPoolsRequestAminoMsg): _97.QueryPoolsRequest;
                toAminoMsg(message: _97.QueryPoolsRequest): _97.QueryPoolsRequestAminoMsg;
                fromProtoMsg(message: _97.QueryPoolsRequestProtoMsg): _97.QueryPoolsRequest;
                toProto(message: _97.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _97.QueryPoolsRequest): _97.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _97.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryPoolsResponse;
                fromJSON(object: any): _97.QueryPoolsResponse;
                toJSON(message: _97.QueryPoolsResponse): unknown;
                fromPartial(object: Partial<_97.QueryPoolsResponse>): _97.QueryPoolsResponse;
                fromSDK(object: _97.QueryPoolsResponseSDKType): _97.QueryPoolsResponse;
                toSDK(message: _97.QueryPoolsResponse): _97.QueryPoolsResponseSDKType;
                fromAmino(object: _97.QueryPoolsResponseAmino): _97.QueryPoolsResponse;
                toAmino(message: _97.QueryPoolsResponse): _97.QueryPoolsResponseAmino;
                fromAminoMsg(object: _97.QueryPoolsResponseAminoMsg): _97.QueryPoolsResponse;
                toAminoMsg(message: _97.QueryPoolsResponse): _97.QueryPoolsResponseAminoMsg;
                fromProtoMsg(message: _97.QueryPoolsResponseProtoMsg): _97.QueryPoolsResponse;
                toProto(message: _97.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _97.QueryPoolsResponse): _97.QueryPoolsResponseProtoMsg;
            };
            QueryNumPoolsRequest: {
                typeUrl: string;
                encode(_: _97.QueryNumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryNumPoolsRequest;
                fromJSON(_: any): _97.QueryNumPoolsRequest;
                toJSON(_: _97.QueryNumPoolsRequest): unknown;
                fromPartial(_: Partial<_97.QueryNumPoolsRequest>): _97.QueryNumPoolsRequest;
                fromSDK(_: _97.QueryNumPoolsRequestSDKType): _97.QueryNumPoolsRequest;
                toSDK(_: _97.QueryNumPoolsRequest): _97.QueryNumPoolsRequestSDKType;
                fromAmino(_: _97.QueryNumPoolsRequestAmino): _97.QueryNumPoolsRequest;
                toAmino(_: _97.QueryNumPoolsRequest): _97.QueryNumPoolsRequestAmino;
                fromAminoMsg(object: _97.QueryNumPoolsRequestAminoMsg): _97.QueryNumPoolsRequest;
                toAminoMsg(message: _97.QueryNumPoolsRequest): _97.QueryNumPoolsRequestAminoMsg;
                fromProtoMsg(message: _97.QueryNumPoolsRequestProtoMsg): _97.QueryNumPoolsRequest;
                toProto(message: _97.QueryNumPoolsRequest): Uint8Array;
                toProtoMsg(message: _97.QueryNumPoolsRequest): _97.QueryNumPoolsRequestProtoMsg;
            };
            QueryNumPoolsResponse: {
                typeUrl: string;
                encode(message: _97.QueryNumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryNumPoolsResponse;
                fromJSON(object: any): _97.QueryNumPoolsResponse;
                toJSON(message: _97.QueryNumPoolsResponse): unknown;
                fromPartial(object: Partial<_97.QueryNumPoolsResponse>): _97.QueryNumPoolsResponse;
                fromSDK(object: _97.QueryNumPoolsResponseSDKType): _97.QueryNumPoolsResponse;
                toSDK(message: _97.QueryNumPoolsResponse): _97.QueryNumPoolsResponseSDKType;
                fromAmino(object: _97.QueryNumPoolsResponseAmino): _97.QueryNumPoolsResponse;
                toAmino(message: _97.QueryNumPoolsResponse): _97.QueryNumPoolsResponseAmino;
                fromAminoMsg(object: _97.QueryNumPoolsResponseAminoMsg): _97.QueryNumPoolsResponse;
                toAminoMsg(message: _97.QueryNumPoolsResponse): _97.QueryNumPoolsResponseAminoMsg;
                fromProtoMsg(message: _97.QueryNumPoolsResponseProtoMsg): _97.QueryNumPoolsResponse;
                toProto(message: _97.QueryNumPoolsResponse): Uint8Array;
                toProtoMsg(message: _97.QueryNumPoolsResponse): _97.QueryNumPoolsResponseProtoMsg;
            };
            QueryPoolTypeRequest: {
                typeUrl: string;
                encode(message: _97.QueryPoolTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryPoolTypeRequest;
                fromJSON(object: any): _97.QueryPoolTypeRequest;
                toJSON(message: _97.QueryPoolTypeRequest): unknown;
                fromPartial(object: Partial<_97.QueryPoolTypeRequest>): _97.QueryPoolTypeRequest;
                fromSDK(object: _97.QueryPoolTypeRequestSDKType): _97.QueryPoolTypeRequest;
                toSDK(message: _97.QueryPoolTypeRequest): _97.QueryPoolTypeRequestSDKType;
                fromAmino(object: _97.QueryPoolTypeRequestAmino): _97.QueryPoolTypeRequest;
                toAmino(message: _97.QueryPoolTypeRequest): _97.QueryPoolTypeRequestAmino;
                fromAminoMsg(object: _97.QueryPoolTypeRequestAminoMsg): _97.QueryPoolTypeRequest;
                toAminoMsg(message: _97.QueryPoolTypeRequest): _97.QueryPoolTypeRequestAminoMsg;
                fromProtoMsg(message: _97.QueryPoolTypeRequestProtoMsg): _97.QueryPoolTypeRequest;
                toProto(message: _97.QueryPoolTypeRequest): Uint8Array;
                toProtoMsg(message: _97.QueryPoolTypeRequest): _97.QueryPoolTypeRequestProtoMsg;
            };
            QueryPoolTypeResponse: {
                typeUrl: string;
                encode(message: _97.QueryPoolTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryPoolTypeResponse;
                fromJSON(object: any): _97.QueryPoolTypeResponse;
                toJSON(message: _97.QueryPoolTypeResponse): unknown;
                fromPartial(object: Partial<_97.QueryPoolTypeResponse>): _97.QueryPoolTypeResponse;
                fromSDK(object: _97.QueryPoolTypeResponseSDKType): _97.QueryPoolTypeResponse;
                toSDK(message: _97.QueryPoolTypeResponse): _97.QueryPoolTypeResponseSDKType;
                fromAmino(object: _97.QueryPoolTypeResponseAmino): _97.QueryPoolTypeResponse;
                toAmino(message: _97.QueryPoolTypeResponse): _97.QueryPoolTypeResponseAmino;
                fromAminoMsg(object: _97.QueryPoolTypeResponseAminoMsg): _97.QueryPoolTypeResponse;
                toAminoMsg(message: _97.QueryPoolTypeResponse): _97.QueryPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _97.QueryPoolTypeResponseProtoMsg): _97.QueryPoolTypeResponse;
                toProto(message: _97.QueryPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _97.QueryPoolTypeResponse): _97.QueryPoolTypeResponseProtoMsg;
            };
            QueryCalcJoinPoolSharesRequest: {
                typeUrl: string;
                encode(message: _97.QueryCalcJoinPoolSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryCalcJoinPoolSharesRequest;
                fromJSON(object: any): _97.QueryCalcJoinPoolSharesRequest;
                toJSON(message: _97.QueryCalcJoinPoolSharesRequest): unknown;
                fromPartial(object: Partial<_97.QueryCalcJoinPoolSharesRequest>): _97.QueryCalcJoinPoolSharesRequest;
                fromSDK(object: _97.QueryCalcJoinPoolSharesRequestSDKType): _97.QueryCalcJoinPoolSharesRequest;
                toSDK(message: _97.QueryCalcJoinPoolSharesRequest): _97.QueryCalcJoinPoolSharesRequestSDKType;
                fromAmino(object: _97.QueryCalcJoinPoolSharesRequestAmino): _97.QueryCalcJoinPoolSharesRequest;
                toAmino(message: _97.QueryCalcJoinPoolSharesRequest): _97.QueryCalcJoinPoolSharesRequestAmino;
                fromAminoMsg(object: _97.QueryCalcJoinPoolSharesRequestAminoMsg): _97.QueryCalcJoinPoolSharesRequest;
                toAminoMsg(message: _97.QueryCalcJoinPoolSharesRequest): _97.QueryCalcJoinPoolSharesRequestAminoMsg;
                fromProtoMsg(message: _97.QueryCalcJoinPoolSharesRequestProtoMsg): _97.QueryCalcJoinPoolSharesRequest;
                toProto(message: _97.QueryCalcJoinPoolSharesRequest): Uint8Array;
                toProtoMsg(message: _97.QueryCalcJoinPoolSharesRequest): _97.QueryCalcJoinPoolSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolSharesResponse: {
                typeUrl: string;
                encode(message: _97.QueryCalcJoinPoolSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryCalcJoinPoolSharesResponse;
                fromJSON(object: any): _97.QueryCalcJoinPoolSharesResponse;
                toJSON(message: _97.QueryCalcJoinPoolSharesResponse): unknown;
                fromPartial(object: Partial<_97.QueryCalcJoinPoolSharesResponse>): _97.QueryCalcJoinPoolSharesResponse;
                fromSDK(object: _97.QueryCalcJoinPoolSharesResponseSDKType): _97.QueryCalcJoinPoolSharesResponse;
                toSDK(message: _97.QueryCalcJoinPoolSharesResponse): _97.QueryCalcJoinPoolSharesResponseSDKType;
                fromAmino(object: _97.QueryCalcJoinPoolSharesResponseAmino): _97.QueryCalcJoinPoolSharesResponse;
                toAmino(message: _97.QueryCalcJoinPoolSharesResponse): _97.QueryCalcJoinPoolSharesResponseAmino;
                fromAminoMsg(object: _97.QueryCalcJoinPoolSharesResponseAminoMsg): _97.QueryCalcJoinPoolSharesResponse;
                toAminoMsg(message: _97.QueryCalcJoinPoolSharesResponse): _97.QueryCalcJoinPoolSharesResponseAminoMsg;
                fromProtoMsg(message: _97.QueryCalcJoinPoolSharesResponseProtoMsg): _97.QueryCalcJoinPoolSharesResponse;
                toProto(message: _97.QueryCalcJoinPoolSharesResponse): Uint8Array;
                toProtoMsg(message: _97.QueryCalcJoinPoolSharesResponse): _97.QueryCalcJoinPoolSharesResponseProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                typeUrl: string;
                encode(message: _97.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryCalcExitPoolCoinsFromSharesRequest;
                fromJSON(object: any): _97.QueryCalcExitPoolCoinsFromSharesRequest;
                toJSON(message: _97.QueryCalcExitPoolCoinsFromSharesRequest): unknown;
                fromPartial(object: Partial<_97.QueryCalcExitPoolCoinsFromSharesRequest>): _97.QueryCalcExitPoolCoinsFromSharesRequest;
                fromSDK(object: _97.QueryCalcExitPoolCoinsFromSharesRequestSDKType): _97.QueryCalcExitPoolCoinsFromSharesRequest;
                toSDK(message: _97.QueryCalcExitPoolCoinsFromSharesRequest): _97.QueryCalcExitPoolCoinsFromSharesRequestSDKType;
                fromAmino(object: _97.QueryCalcExitPoolCoinsFromSharesRequestAmino): _97.QueryCalcExitPoolCoinsFromSharesRequest;
                toAmino(message: _97.QueryCalcExitPoolCoinsFromSharesRequest): _97.QueryCalcExitPoolCoinsFromSharesRequestAmino;
                fromAminoMsg(object: _97.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): _97.QueryCalcExitPoolCoinsFromSharesRequest;
                toAminoMsg(message: _97.QueryCalcExitPoolCoinsFromSharesRequest): _97.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg;
                fromProtoMsg(message: _97.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): _97.QueryCalcExitPoolCoinsFromSharesRequest;
                toProto(message: _97.QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array;
                toProtoMsg(message: _97.QueryCalcExitPoolCoinsFromSharesRequest): _97.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                typeUrl: string;
                encode(message: _97.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryCalcExitPoolCoinsFromSharesResponse;
                fromJSON(object: any): _97.QueryCalcExitPoolCoinsFromSharesResponse;
                toJSON(message: _97.QueryCalcExitPoolCoinsFromSharesResponse): unknown;
                fromPartial(object: Partial<_97.QueryCalcExitPoolCoinsFromSharesResponse>): _97.QueryCalcExitPoolCoinsFromSharesResponse;
                fromSDK(object: _97.QueryCalcExitPoolCoinsFromSharesResponseSDKType): _97.QueryCalcExitPoolCoinsFromSharesResponse;
                toSDK(message: _97.QueryCalcExitPoolCoinsFromSharesResponse): _97.QueryCalcExitPoolCoinsFromSharesResponseSDKType;
                fromAmino(object: _97.QueryCalcExitPoolCoinsFromSharesResponseAmino): _97.QueryCalcExitPoolCoinsFromSharesResponse;
                toAmino(message: _97.QueryCalcExitPoolCoinsFromSharesResponse): _97.QueryCalcExitPoolCoinsFromSharesResponseAmino;
                fromAminoMsg(object: _97.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): _97.QueryCalcExitPoolCoinsFromSharesResponse;
                toAminoMsg(message: _97.QueryCalcExitPoolCoinsFromSharesResponse): _97.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg;
                fromProtoMsg(message: _97.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): _97.QueryCalcExitPoolCoinsFromSharesResponse;
                toProto(message: _97.QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array;
                toProtoMsg(message: _97.QueryCalcExitPoolCoinsFromSharesResponse): _97.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg;
            };
            QueryPoolParamsRequest: {
                typeUrl: string;
                encode(message: _97.QueryPoolParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryPoolParamsRequest;
                fromJSON(object: any): _97.QueryPoolParamsRequest;
                toJSON(message: _97.QueryPoolParamsRequest): unknown;
                fromPartial(object: Partial<_97.QueryPoolParamsRequest>): _97.QueryPoolParamsRequest;
                fromSDK(object: _97.QueryPoolParamsRequestSDKType): _97.QueryPoolParamsRequest;
                toSDK(message: _97.QueryPoolParamsRequest): _97.QueryPoolParamsRequestSDKType;
                fromAmino(object: _97.QueryPoolParamsRequestAmino): _97.QueryPoolParamsRequest;
                toAmino(message: _97.QueryPoolParamsRequest): _97.QueryPoolParamsRequestAmino;
                fromAminoMsg(object: _97.QueryPoolParamsRequestAminoMsg): _97.QueryPoolParamsRequest;
                toAminoMsg(message: _97.QueryPoolParamsRequest): _97.QueryPoolParamsRequestAminoMsg;
                fromProtoMsg(message: _97.QueryPoolParamsRequestProtoMsg): _97.QueryPoolParamsRequest;
                toProto(message: _97.QueryPoolParamsRequest): Uint8Array;
                toProtoMsg(message: _97.QueryPoolParamsRequest): _97.QueryPoolParamsRequestProtoMsg;
            };
            QueryPoolParamsResponse: {
                typeUrl: string;
                encode(message: _97.QueryPoolParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryPoolParamsResponse;
                fromJSON(object: any): _97.QueryPoolParamsResponse;
                toJSON(message: _97.QueryPoolParamsResponse): unknown;
                fromPartial(object: Partial<_97.QueryPoolParamsResponse>): _97.QueryPoolParamsResponse;
                fromSDK(object: _97.QueryPoolParamsResponseSDKType): _97.QueryPoolParamsResponse;
                toSDK(message: _97.QueryPoolParamsResponse): _97.QueryPoolParamsResponseSDKType;
                fromAmino(object: _97.QueryPoolParamsResponseAmino): _97.QueryPoolParamsResponse;
                toAmino(message: _97.QueryPoolParamsResponse): _97.QueryPoolParamsResponseAmino;
                fromAminoMsg(object: _97.QueryPoolParamsResponseAminoMsg): _97.QueryPoolParamsResponse;
                toAminoMsg(message: _97.QueryPoolParamsResponse): _97.QueryPoolParamsResponseAminoMsg;
                fromProtoMsg(message: _97.QueryPoolParamsResponseProtoMsg): _97.QueryPoolParamsResponse;
                toProto(message: _97.QueryPoolParamsResponse): Uint8Array;
                toProtoMsg(message: _97.QueryPoolParamsResponse): _97.QueryPoolParamsResponseProtoMsg;
            };
            QueryTotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _97.QueryTotalPoolLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _97.QueryTotalPoolLiquidityRequest;
                toJSON(message: _97.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial(object: Partial<_97.QueryTotalPoolLiquidityRequest>): _97.QueryTotalPoolLiquidityRequest;
                fromSDK(object: _97.QueryTotalPoolLiquidityRequestSDKType): _97.QueryTotalPoolLiquidityRequest;
                toSDK(message: _97.QueryTotalPoolLiquidityRequest): _97.QueryTotalPoolLiquidityRequestSDKType;
                fromAmino(object: _97.QueryTotalPoolLiquidityRequestAmino): _97.QueryTotalPoolLiquidityRequest;
                toAmino(message: _97.QueryTotalPoolLiquidityRequest): _97.QueryTotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _97.QueryTotalPoolLiquidityRequestAminoMsg): _97.QueryTotalPoolLiquidityRequest;
                toAminoMsg(message: _97.QueryTotalPoolLiquidityRequest): _97.QueryTotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _97.QueryTotalPoolLiquidityRequestProtoMsg): _97.QueryTotalPoolLiquidityRequest;
                toProto(message: _97.QueryTotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _97.QueryTotalPoolLiquidityRequest): _97.QueryTotalPoolLiquidityRequestProtoMsg;
            };
            QueryTotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _97.QueryTotalPoolLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _97.QueryTotalPoolLiquidityResponse;
                toJSON(message: _97.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial(object: Partial<_97.QueryTotalPoolLiquidityResponse>): _97.QueryTotalPoolLiquidityResponse;
                fromSDK(object: _97.QueryTotalPoolLiquidityResponseSDKType): _97.QueryTotalPoolLiquidityResponse;
                toSDK(message: _97.QueryTotalPoolLiquidityResponse): _97.QueryTotalPoolLiquidityResponseSDKType;
                fromAmino(object: _97.QueryTotalPoolLiquidityResponseAmino): _97.QueryTotalPoolLiquidityResponse;
                toAmino(message: _97.QueryTotalPoolLiquidityResponse): _97.QueryTotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _97.QueryTotalPoolLiquidityResponseAminoMsg): _97.QueryTotalPoolLiquidityResponse;
                toAminoMsg(message: _97.QueryTotalPoolLiquidityResponse): _97.QueryTotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _97.QueryTotalPoolLiquidityResponseProtoMsg): _97.QueryTotalPoolLiquidityResponse;
                toProto(message: _97.QueryTotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _97.QueryTotalPoolLiquidityResponse): _97.QueryTotalPoolLiquidityResponseProtoMsg;
            };
            QueryTotalSharesRequest: {
                typeUrl: string;
                encode(message: _97.QueryTotalSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryTotalSharesRequest;
                fromJSON(object: any): _97.QueryTotalSharesRequest;
                toJSON(message: _97.QueryTotalSharesRequest): unknown;
                fromPartial(object: Partial<_97.QueryTotalSharesRequest>): _97.QueryTotalSharesRequest;
                fromSDK(object: _97.QueryTotalSharesRequestSDKType): _97.QueryTotalSharesRequest;
                toSDK(message: _97.QueryTotalSharesRequest): _97.QueryTotalSharesRequestSDKType;
                fromAmino(object: _97.QueryTotalSharesRequestAmino): _97.QueryTotalSharesRequest;
                toAmino(message: _97.QueryTotalSharesRequest): _97.QueryTotalSharesRequestAmino;
                fromAminoMsg(object: _97.QueryTotalSharesRequestAminoMsg): _97.QueryTotalSharesRequest;
                toAminoMsg(message: _97.QueryTotalSharesRequest): _97.QueryTotalSharesRequestAminoMsg;
                fromProtoMsg(message: _97.QueryTotalSharesRequestProtoMsg): _97.QueryTotalSharesRequest;
                toProto(message: _97.QueryTotalSharesRequest): Uint8Array;
                toProtoMsg(message: _97.QueryTotalSharesRequest): _97.QueryTotalSharesRequestProtoMsg;
            };
            QueryTotalSharesResponse: {
                typeUrl: string;
                encode(message: _97.QueryTotalSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryTotalSharesResponse;
                fromJSON(object: any): _97.QueryTotalSharesResponse;
                toJSON(message: _97.QueryTotalSharesResponse): unknown;
                fromPartial(object: Partial<_97.QueryTotalSharesResponse>): _97.QueryTotalSharesResponse;
                fromSDK(object: _97.QueryTotalSharesResponseSDKType): _97.QueryTotalSharesResponse;
                toSDK(message: _97.QueryTotalSharesResponse): _97.QueryTotalSharesResponseSDKType;
                fromAmino(object: _97.QueryTotalSharesResponseAmino): _97.QueryTotalSharesResponse;
                toAmino(message: _97.QueryTotalSharesResponse): _97.QueryTotalSharesResponseAmino;
                fromAminoMsg(object: _97.QueryTotalSharesResponseAminoMsg): _97.QueryTotalSharesResponse;
                toAminoMsg(message: _97.QueryTotalSharesResponse): _97.QueryTotalSharesResponseAminoMsg;
                fromProtoMsg(message: _97.QueryTotalSharesResponseProtoMsg): _97.QueryTotalSharesResponse;
                toProto(message: _97.QueryTotalSharesResponse): Uint8Array;
                toProtoMsg(message: _97.QueryTotalSharesResponse): _97.QueryTotalSharesResponseProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                typeUrl: string;
                encode(message: _97.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryCalcJoinPoolNoSwapSharesRequest;
                fromJSON(object: any): _97.QueryCalcJoinPoolNoSwapSharesRequest;
                toJSON(message: _97.QueryCalcJoinPoolNoSwapSharesRequest): unknown;
                fromPartial(object: Partial<_97.QueryCalcJoinPoolNoSwapSharesRequest>): _97.QueryCalcJoinPoolNoSwapSharesRequest;
                fromSDK(object: _97.QueryCalcJoinPoolNoSwapSharesRequestSDKType): _97.QueryCalcJoinPoolNoSwapSharesRequest;
                toSDK(message: _97.QueryCalcJoinPoolNoSwapSharesRequest): _97.QueryCalcJoinPoolNoSwapSharesRequestSDKType;
                fromAmino(object: _97.QueryCalcJoinPoolNoSwapSharesRequestAmino): _97.QueryCalcJoinPoolNoSwapSharesRequest;
                toAmino(message: _97.QueryCalcJoinPoolNoSwapSharesRequest): _97.QueryCalcJoinPoolNoSwapSharesRequestAmino;
                fromAminoMsg(object: _97.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): _97.QueryCalcJoinPoolNoSwapSharesRequest;
                toAminoMsg(message: _97.QueryCalcJoinPoolNoSwapSharesRequest): _97.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg;
                fromProtoMsg(message: _97.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): _97.QueryCalcJoinPoolNoSwapSharesRequest;
                toProto(message: _97.QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array;
                toProtoMsg(message: _97.QueryCalcJoinPoolNoSwapSharesRequest): _97.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                typeUrl: string;
                encode(message: _97.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryCalcJoinPoolNoSwapSharesResponse;
                fromJSON(object: any): _97.QueryCalcJoinPoolNoSwapSharesResponse;
                toJSON(message: _97.QueryCalcJoinPoolNoSwapSharesResponse): unknown;
                fromPartial(object: Partial<_97.QueryCalcJoinPoolNoSwapSharesResponse>): _97.QueryCalcJoinPoolNoSwapSharesResponse;
                fromSDK(object: _97.QueryCalcJoinPoolNoSwapSharesResponseSDKType): _97.QueryCalcJoinPoolNoSwapSharesResponse;
                toSDK(message: _97.QueryCalcJoinPoolNoSwapSharesResponse): _97.QueryCalcJoinPoolNoSwapSharesResponseSDKType;
                fromAmino(object: _97.QueryCalcJoinPoolNoSwapSharesResponseAmino): _97.QueryCalcJoinPoolNoSwapSharesResponse;
                toAmino(message: _97.QueryCalcJoinPoolNoSwapSharesResponse): _97.QueryCalcJoinPoolNoSwapSharesResponseAmino;
                fromAminoMsg(object: _97.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): _97.QueryCalcJoinPoolNoSwapSharesResponse;
                toAminoMsg(message: _97.QueryCalcJoinPoolNoSwapSharesResponse): _97.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg;
                fromProtoMsg(message: _97.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): _97.QueryCalcJoinPoolNoSwapSharesResponse;
                toProto(message: _97.QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array;
                toProtoMsg(message: _97.QueryCalcJoinPoolNoSwapSharesResponse): _97.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg;
            };
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _97.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QuerySpotPriceRequest;
                fromJSON(object: any): _97.QuerySpotPriceRequest;
                toJSON(message: _97.QuerySpotPriceRequest): unknown;
                fromPartial(object: Partial<_97.QuerySpotPriceRequest>): _97.QuerySpotPriceRequest;
                fromSDK(object: _97.QuerySpotPriceRequestSDKType): _97.QuerySpotPriceRequest;
                toSDK(message: _97.QuerySpotPriceRequest): _97.QuerySpotPriceRequestSDKType;
                fromAmino(object: _97.QuerySpotPriceRequestAmino): _97.QuerySpotPriceRequest;
                toAmino(message: _97.QuerySpotPriceRequest): _97.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _97.QuerySpotPriceRequestAminoMsg): _97.QuerySpotPriceRequest;
                toAminoMsg(message: _97.QuerySpotPriceRequest): _97.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _97.QuerySpotPriceRequestProtoMsg): _97.QuerySpotPriceRequest;
                toProto(message: _97.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _97.QuerySpotPriceRequest): _97.QuerySpotPriceRequestProtoMsg;
            };
            QueryPoolsWithFilterRequest: {
                typeUrl: string;
                encode(message: _97.QueryPoolsWithFilterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryPoolsWithFilterRequest;
                fromJSON(object: any): _97.QueryPoolsWithFilterRequest;
                toJSON(message: _97.QueryPoolsWithFilterRequest): unknown;
                fromPartial(object: Partial<_97.QueryPoolsWithFilterRequest>): _97.QueryPoolsWithFilterRequest;
                fromSDK(object: _97.QueryPoolsWithFilterRequestSDKType): _97.QueryPoolsWithFilterRequest;
                toSDK(message: _97.QueryPoolsWithFilterRequest): _97.QueryPoolsWithFilterRequestSDKType;
                fromAmino(object: _97.QueryPoolsWithFilterRequestAmino): _97.QueryPoolsWithFilterRequest;
                toAmino(message: _97.QueryPoolsWithFilterRequest): _97.QueryPoolsWithFilterRequestAmino;
                fromAminoMsg(object: _97.QueryPoolsWithFilterRequestAminoMsg): _97.QueryPoolsWithFilterRequest;
                toAminoMsg(message: _97.QueryPoolsWithFilterRequest): _97.QueryPoolsWithFilterRequestAminoMsg;
                fromProtoMsg(message: _97.QueryPoolsWithFilterRequestProtoMsg): _97.QueryPoolsWithFilterRequest;
                toProto(message: _97.QueryPoolsWithFilterRequest): Uint8Array;
                toProtoMsg(message: _97.QueryPoolsWithFilterRequest): _97.QueryPoolsWithFilterRequestProtoMsg;
            };
            QueryPoolsWithFilterResponse: {
                typeUrl: string;
                encode(message: _97.QueryPoolsWithFilterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryPoolsWithFilterResponse;
                fromJSON(object: any): _97.QueryPoolsWithFilterResponse;
                toJSON(message: _97.QueryPoolsWithFilterResponse): unknown;
                fromPartial(object: Partial<_97.QueryPoolsWithFilterResponse>): _97.QueryPoolsWithFilterResponse;
                fromSDK(object: _97.QueryPoolsWithFilterResponseSDKType): _97.QueryPoolsWithFilterResponse;
                toSDK(message: _97.QueryPoolsWithFilterResponse): _97.QueryPoolsWithFilterResponseSDKType;
                fromAmino(object: _97.QueryPoolsWithFilterResponseAmino): _97.QueryPoolsWithFilterResponse;
                toAmino(message: _97.QueryPoolsWithFilterResponse): _97.QueryPoolsWithFilterResponseAmino;
                fromAminoMsg(object: _97.QueryPoolsWithFilterResponseAminoMsg): _97.QueryPoolsWithFilterResponse;
                toAminoMsg(message: _97.QueryPoolsWithFilterResponse): _97.QueryPoolsWithFilterResponseAminoMsg;
                fromProtoMsg(message: _97.QueryPoolsWithFilterResponseProtoMsg): _97.QueryPoolsWithFilterResponse;
                toProto(message: _97.QueryPoolsWithFilterResponse): Uint8Array;
                toProtoMsg(message: _97.QueryPoolsWithFilterResponse): _97.QueryPoolsWithFilterResponseProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _97.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QuerySpotPriceResponse;
                fromJSON(object: any): _97.QuerySpotPriceResponse;
                toJSON(message: _97.QuerySpotPriceResponse): unknown;
                fromPartial(object: Partial<_97.QuerySpotPriceResponse>): _97.QuerySpotPriceResponse;
                fromSDK(object: _97.QuerySpotPriceResponseSDKType): _97.QuerySpotPriceResponse;
                toSDK(message: _97.QuerySpotPriceResponse): _97.QuerySpotPriceResponseSDKType;
                fromAmino(object: _97.QuerySpotPriceResponseAmino): _97.QuerySpotPriceResponse;
                toAmino(message: _97.QuerySpotPriceResponse): _97.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _97.QuerySpotPriceResponseAminoMsg): _97.QuerySpotPriceResponse;
                toAminoMsg(message: _97.QuerySpotPriceResponse): _97.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _97.QuerySpotPriceResponseProtoMsg): _97.QuerySpotPriceResponse;
                toProto(message: _97.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _97.QuerySpotPriceResponse): _97.QuerySpotPriceResponseProtoMsg;
            };
            QuerySwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _97.QuerySwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _97.QuerySwapExactAmountInRequest;
                toJSON(message: _97.QuerySwapExactAmountInRequest): unknown;
                fromPartial(object: Partial<_97.QuerySwapExactAmountInRequest>): _97.QuerySwapExactAmountInRequest;
                fromSDK(object: _97.QuerySwapExactAmountInRequestSDKType): _97.QuerySwapExactAmountInRequest;
                toSDK(message: _97.QuerySwapExactAmountInRequest): _97.QuerySwapExactAmountInRequestSDKType;
                fromAmino(object: _97.QuerySwapExactAmountInRequestAmino): _97.QuerySwapExactAmountInRequest;
                toAmino(message: _97.QuerySwapExactAmountInRequest): _97.QuerySwapExactAmountInRequestAmino;
                fromAminoMsg(object: _97.QuerySwapExactAmountInRequestAminoMsg): _97.QuerySwapExactAmountInRequest;
                toAminoMsg(message: _97.QuerySwapExactAmountInRequest): _97.QuerySwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _97.QuerySwapExactAmountInRequestProtoMsg): _97.QuerySwapExactAmountInRequest;
                toProto(message: _97.QuerySwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _97.QuerySwapExactAmountInRequest): _97.QuerySwapExactAmountInRequestProtoMsg;
            };
            QuerySwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _97.QuerySwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _97.QuerySwapExactAmountInResponse;
                toJSON(message: _97.QuerySwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_97.QuerySwapExactAmountInResponse>): _97.QuerySwapExactAmountInResponse;
                fromSDK(object: _97.QuerySwapExactAmountInResponseSDKType): _97.QuerySwapExactAmountInResponse;
                toSDK(message: _97.QuerySwapExactAmountInResponse): _97.QuerySwapExactAmountInResponseSDKType;
                fromAmino(object: _97.QuerySwapExactAmountInResponseAmino): _97.QuerySwapExactAmountInResponse;
                toAmino(message: _97.QuerySwapExactAmountInResponse): _97.QuerySwapExactAmountInResponseAmino;
                fromAminoMsg(object: _97.QuerySwapExactAmountInResponseAminoMsg): _97.QuerySwapExactAmountInResponse;
                toAminoMsg(message: _97.QuerySwapExactAmountInResponse): _97.QuerySwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _97.QuerySwapExactAmountInResponseProtoMsg): _97.QuerySwapExactAmountInResponse;
                toProto(message: _97.QuerySwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _97.QuerySwapExactAmountInResponse): _97.QuerySwapExactAmountInResponseProtoMsg;
            };
            QuerySwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _97.QuerySwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _97.QuerySwapExactAmountOutRequest;
                toJSON(message: _97.QuerySwapExactAmountOutRequest): unknown;
                fromPartial(object: Partial<_97.QuerySwapExactAmountOutRequest>): _97.QuerySwapExactAmountOutRequest;
                fromSDK(object: _97.QuerySwapExactAmountOutRequestSDKType): _97.QuerySwapExactAmountOutRequest;
                toSDK(message: _97.QuerySwapExactAmountOutRequest): _97.QuerySwapExactAmountOutRequestSDKType;
                fromAmino(object: _97.QuerySwapExactAmountOutRequestAmino): _97.QuerySwapExactAmountOutRequest;
                toAmino(message: _97.QuerySwapExactAmountOutRequest): _97.QuerySwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _97.QuerySwapExactAmountOutRequestAminoMsg): _97.QuerySwapExactAmountOutRequest;
                toAminoMsg(message: _97.QuerySwapExactAmountOutRequest): _97.QuerySwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _97.QuerySwapExactAmountOutRequestProtoMsg): _97.QuerySwapExactAmountOutRequest;
                toProto(message: _97.QuerySwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _97.QuerySwapExactAmountOutRequest): _97.QuerySwapExactAmountOutRequestProtoMsg;
            };
            QuerySwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _97.QuerySwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _97.QuerySwapExactAmountOutResponse;
                toJSON(message: _97.QuerySwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_97.QuerySwapExactAmountOutResponse>): _97.QuerySwapExactAmountOutResponse;
                fromSDK(object: _97.QuerySwapExactAmountOutResponseSDKType): _97.QuerySwapExactAmountOutResponse;
                toSDK(message: _97.QuerySwapExactAmountOutResponse): _97.QuerySwapExactAmountOutResponseSDKType;
                fromAmino(object: _97.QuerySwapExactAmountOutResponseAmino): _97.QuerySwapExactAmountOutResponse;
                toAmino(message: _97.QuerySwapExactAmountOutResponse): _97.QuerySwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _97.QuerySwapExactAmountOutResponseAminoMsg): _97.QuerySwapExactAmountOutResponse;
                toAminoMsg(message: _97.QuerySwapExactAmountOutResponse): _97.QuerySwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _97.QuerySwapExactAmountOutResponseProtoMsg): _97.QuerySwapExactAmountOutResponse;
                toProto(message: _97.QuerySwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _97.QuerySwapExactAmountOutResponse): _97.QuerySwapExactAmountOutResponseProtoMsg;
            };
            QueryTotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _97.QueryTotalLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryTotalLiquidityRequest;
                fromJSON(_: any): _97.QueryTotalLiquidityRequest;
                toJSON(_: _97.QueryTotalLiquidityRequest): unknown;
                fromPartial(_: Partial<_97.QueryTotalLiquidityRequest>): _97.QueryTotalLiquidityRequest;
                fromSDK(_: _97.QueryTotalLiquidityRequestSDKType): _97.QueryTotalLiquidityRequest;
                toSDK(_: _97.QueryTotalLiquidityRequest): _97.QueryTotalLiquidityRequestSDKType;
                fromAmino(_: _97.QueryTotalLiquidityRequestAmino): _97.QueryTotalLiquidityRequest;
                toAmino(_: _97.QueryTotalLiquidityRequest): _97.QueryTotalLiquidityRequestAmino;
                fromAminoMsg(object: _97.QueryTotalLiquidityRequestAminoMsg): _97.QueryTotalLiquidityRequest;
                toAminoMsg(message: _97.QueryTotalLiquidityRequest): _97.QueryTotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _97.QueryTotalLiquidityRequestProtoMsg): _97.QueryTotalLiquidityRequest;
                toProto(message: _97.QueryTotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _97.QueryTotalLiquidityRequest): _97.QueryTotalLiquidityRequestProtoMsg;
            };
            QueryTotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _97.QueryTotalLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryTotalLiquidityResponse;
                fromJSON(object: any): _97.QueryTotalLiquidityResponse;
                toJSON(message: _97.QueryTotalLiquidityResponse): unknown;
                fromPartial(object: Partial<_97.QueryTotalLiquidityResponse>): _97.QueryTotalLiquidityResponse;
                fromSDK(object: _97.QueryTotalLiquidityResponseSDKType): _97.QueryTotalLiquidityResponse;
                toSDK(message: _97.QueryTotalLiquidityResponse): _97.QueryTotalLiquidityResponseSDKType;
                fromAmino(object: _97.QueryTotalLiquidityResponseAmino): _97.QueryTotalLiquidityResponse;
                toAmino(message: _97.QueryTotalLiquidityResponse): _97.QueryTotalLiquidityResponseAmino;
                fromAminoMsg(object: _97.QueryTotalLiquidityResponseAminoMsg): _97.QueryTotalLiquidityResponse;
                toAminoMsg(message: _97.QueryTotalLiquidityResponse): _97.QueryTotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _97.QueryTotalLiquidityResponseProtoMsg): _97.QueryTotalLiquidityResponse;
                toProto(message: _97.QueryTotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _97.QueryTotalLiquidityResponse): _97.QueryTotalLiquidityResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _95.Pool | _100.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Params: {
                typeUrl: string;
                encode(message: _96.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Params;
                fromJSON(object: any): _96.Params;
                toJSON(message: _96.Params): unknown;
                fromPartial(object: Partial<_96.Params>): _96.Params;
                fromSDK(object: _96.ParamsSDKType): _96.Params;
                toSDK(message: _96.Params): _96.ParamsSDKType;
                fromAmino(object: _96.ParamsAmino): _96.Params;
                toAmino(message: _96.Params): _96.ParamsAmino;
                fromAminoMsg(object: _96.ParamsAminoMsg): _96.Params;
                toAminoMsg(message: _96.Params): _96.ParamsAminoMsg;
                fromProtoMsg(message: _96.ParamsProtoMsg): _96.Params;
                toProto(message: _96.Params): Uint8Array;
                toProtoMsg(message: _96.Params): _96.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _96.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.GenesisState;
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
            SmoothWeightChangeParams: {
                typeUrl: string;
                encode(message: _95.SmoothWeightChangeParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.SmoothWeightChangeParams;
                fromJSON(object: any): _95.SmoothWeightChangeParams;
                toJSON(message: _95.SmoothWeightChangeParams): unknown;
                fromPartial(object: Partial<_95.SmoothWeightChangeParams>): _95.SmoothWeightChangeParams;
                fromSDK(object: _95.SmoothWeightChangeParamsSDKType): _95.SmoothWeightChangeParams;
                toSDK(message: _95.SmoothWeightChangeParams): _95.SmoothWeightChangeParamsSDKType;
                fromAmino(object: _95.SmoothWeightChangeParamsAmino): _95.SmoothWeightChangeParams;
                toAmino(message: _95.SmoothWeightChangeParams): _95.SmoothWeightChangeParamsAmino;
                fromAminoMsg(object: _95.SmoothWeightChangeParamsAminoMsg): _95.SmoothWeightChangeParams;
                toAminoMsg(message: _95.SmoothWeightChangeParams): _95.SmoothWeightChangeParamsAminoMsg;
                fromProtoMsg(message: _95.SmoothWeightChangeParamsProtoMsg): _95.SmoothWeightChangeParams;
                toProto(message: _95.SmoothWeightChangeParams): Uint8Array;
                toProtoMsg(message: _95.SmoothWeightChangeParams): _95.SmoothWeightChangeParamsProtoMsg;
            };
            PoolParams: {
                typeUrl: string;
                encode(message: _95.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.PoolParams;
                fromJSON(object: any): _95.PoolParams;
                toJSON(message: _95.PoolParams): unknown;
                fromPartial(object: Partial<_95.PoolParams>): _95.PoolParams;
                fromSDK(object: _95.PoolParamsSDKType): _95.PoolParams;
                toSDK(message: _95.PoolParams): _95.PoolParamsSDKType;
                fromAmino(object: _95.PoolParamsAmino): _95.PoolParams;
                toAmino(message: _95.PoolParams): _95.PoolParamsAmino;
                fromAminoMsg(object: _95.PoolParamsAminoMsg): _95.PoolParams;
                toAminoMsg(message: _95.PoolParams): _95.PoolParamsAminoMsg;
                fromProtoMsg(message: _95.PoolParamsProtoMsg): _95.PoolParams;
                toProto(message: _95.PoolParams): Uint8Array;
                toProtoMsg(message: _95.PoolParams): _95.PoolParamsProtoMsg;
            };
            PoolAsset: {
                typeUrl: string;
                encode(message: _95.PoolAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.PoolAsset;
                fromJSON(object: any): _95.PoolAsset;
                toJSON(message: _95.PoolAsset): unknown;
                fromPartial(object: Partial<_95.PoolAsset>): _95.PoolAsset;
                fromSDK(object: _95.PoolAssetSDKType): _95.PoolAsset;
                toSDK(message: _95.PoolAsset): _95.PoolAssetSDKType;
                fromAmino(object: _95.PoolAssetAmino): _95.PoolAsset;
                toAmino(message: _95.PoolAsset): _95.PoolAssetAmino;
                fromAminoMsg(object: _95.PoolAssetAminoMsg): _95.PoolAsset;
                toAminoMsg(message: _95.PoolAsset): _95.PoolAssetAminoMsg;
                fromProtoMsg(message: _95.PoolAssetProtoMsg): _95.PoolAsset;
                toProto(message: _95.PoolAsset): Uint8Array;
                toProtoMsg(message: _95.PoolAsset): _95.PoolAssetProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _95.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.Pool;
                fromJSON(object: any): _95.Pool;
                toJSON(message: _95.Pool): unknown;
                fromPartial(object: Partial<_95.Pool>): _95.Pool;
                fromSDK(object: _95.PoolSDKType): _95.Pool;
                toSDK(message: _95.Pool): _95.PoolSDKType;
                fromAmino(object: _95.PoolAmino): _95.Pool;
                toAmino(message: _95.Pool): _95.PoolAmino;
                fromAminoMsg(object: _95.PoolAminoMsg): _95.Pool;
                toAminoMsg(message: _95.Pool): _95.PoolAminoMsg;
                fromProtoMsg(message: _95.PoolProtoMsg): _95.Pool;
                toProto(message: _95.Pool): Uint8Array;
                toProtoMsg(message: _95.Pool): _95.PoolProtoMsg;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    Msg: typeof _295.Msg;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _99.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _99.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _99.MsgCreateBalancerPool;
                            };
                        };
                        toJSON: {
                            createBalancerPool(value: _99.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _99.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _99.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _99.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _99.MsgCreateBalancerPool) => _99.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _99.MsgCreateBalancerPoolAmino) => _99.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        typeUrl: string;
                        encode(message: _99.MsgCreateBalancerPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.MsgCreateBalancerPool;
                        fromJSON(object: any): _99.MsgCreateBalancerPool;
                        toJSON(message: _99.MsgCreateBalancerPool): unknown;
                        fromPartial(object: Partial<_99.MsgCreateBalancerPool>): _99.MsgCreateBalancerPool;
                        fromSDK(object: _99.MsgCreateBalancerPoolSDKType): _99.MsgCreateBalancerPool;
                        toSDK(message: _99.MsgCreateBalancerPool): _99.MsgCreateBalancerPoolSDKType;
                        fromAmino(object: _99.MsgCreateBalancerPoolAmino): _99.MsgCreateBalancerPool;
                        toAmino(message: _99.MsgCreateBalancerPool): _99.MsgCreateBalancerPoolAmino;
                        fromAminoMsg(object: _99.MsgCreateBalancerPoolAminoMsg): _99.MsgCreateBalancerPool;
                        toAminoMsg(message: _99.MsgCreateBalancerPool): _99.MsgCreateBalancerPoolAminoMsg;
                        fromProtoMsg(message: _99.MsgCreateBalancerPoolProtoMsg): _99.MsgCreateBalancerPool;
                        toProto(message: _99.MsgCreateBalancerPool): Uint8Array;
                        toProtoMsg(message: _99.MsgCreateBalancerPool): _99.MsgCreateBalancerPoolProtoMsg;
                    };
                    MsgCreateBalancerPoolResponse: {
                        typeUrl: string;
                        encode(message: _99.MsgCreateBalancerPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.MsgCreateBalancerPoolResponse;
                        fromJSON(object: any): _99.MsgCreateBalancerPoolResponse;
                        toJSON(message: _99.MsgCreateBalancerPoolResponse): unknown;
                        fromPartial(object: Partial<_99.MsgCreateBalancerPoolResponse>): _99.MsgCreateBalancerPoolResponse;
                        fromSDK(object: _99.MsgCreateBalancerPoolResponseSDKType): _99.MsgCreateBalancerPoolResponse;
                        toSDK(message: _99.MsgCreateBalancerPoolResponse): _99.MsgCreateBalancerPoolResponseSDKType;
                        fromAmino(object: _99.MsgCreateBalancerPoolResponseAmino): _99.MsgCreateBalancerPoolResponse;
                        toAmino(message: _99.MsgCreateBalancerPoolResponse): _99.MsgCreateBalancerPoolResponseAmino;
                        fromAminoMsg(object: _99.MsgCreateBalancerPoolResponseAminoMsg): _99.MsgCreateBalancerPoolResponse;
                        toAminoMsg(message: _99.MsgCreateBalancerPoolResponse): _99.MsgCreateBalancerPoolResponseAminoMsg;
                        fromProtoMsg(message: _99.MsgCreateBalancerPoolResponseProtoMsg): _99.MsgCreateBalancerPoolResponse;
                        toProto(message: _99.MsgCreateBalancerPoolResponse): Uint8Array;
                        toProtoMsg(message: _99.MsgCreateBalancerPoolResponse): _99.MsgCreateBalancerPoolResponseProtoMsg;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    Msg: typeof _296.Msg;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _101.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _101.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _101.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _101.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _101.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _101.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        toJSON: {
                            createStableswapPool(value: _101.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                            stableSwapAdjustScalingFactors(value: _101.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _101.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _101.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _101.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _101.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _101.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _101.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: (message: _101.MsgCreateStableswapPool) => _101.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _101.MsgCreateStableswapPoolAmino) => _101.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _101.MsgStableSwapAdjustScalingFactors) => _101.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _101.MsgStableSwapAdjustScalingFactorsAmino) => _101.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        typeUrl: string;
                        encode(message: _101.MsgCreateStableswapPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.MsgCreateStableswapPool;
                        fromJSON(object: any): _101.MsgCreateStableswapPool;
                        toJSON(message: _101.MsgCreateStableswapPool): unknown;
                        fromPartial(object: Partial<_101.MsgCreateStableswapPool>): _101.MsgCreateStableswapPool;
                        fromSDK(object: _101.MsgCreateStableswapPoolSDKType): _101.MsgCreateStableswapPool;
                        toSDK(message: _101.MsgCreateStableswapPool): _101.MsgCreateStableswapPoolSDKType;
                        fromAmino(object: _101.MsgCreateStableswapPoolAmino): _101.MsgCreateStableswapPool;
                        toAmino(message: _101.MsgCreateStableswapPool): _101.MsgCreateStableswapPoolAmino;
                        fromAminoMsg(object: _101.MsgCreateStableswapPoolAminoMsg): _101.MsgCreateStableswapPool;
                        toAminoMsg(message: _101.MsgCreateStableswapPool): _101.MsgCreateStableswapPoolAminoMsg;
                        fromProtoMsg(message: _101.MsgCreateStableswapPoolProtoMsg): _101.MsgCreateStableswapPool;
                        toProto(message: _101.MsgCreateStableswapPool): Uint8Array;
                        toProtoMsg(message: _101.MsgCreateStableswapPool): _101.MsgCreateStableswapPoolProtoMsg;
                    };
                    MsgCreateStableswapPoolResponse: {
                        typeUrl: string;
                        encode(message: _101.MsgCreateStableswapPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.MsgCreateStableswapPoolResponse;
                        fromJSON(object: any): _101.MsgCreateStableswapPoolResponse;
                        toJSON(message: _101.MsgCreateStableswapPoolResponse): unknown;
                        fromPartial(object: Partial<_101.MsgCreateStableswapPoolResponse>): _101.MsgCreateStableswapPoolResponse;
                        fromSDK(object: _101.MsgCreateStableswapPoolResponseSDKType): _101.MsgCreateStableswapPoolResponse;
                        toSDK(message: _101.MsgCreateStableswapPoolResponse): _101.MsgCreateStableswapPoolResponseSDKType;
                        fromAmino(object: _101.MsgCreateStableswapPoolResponseAmino): _101.MsgCreateStableswapPoolResponse;
                        toAmino(message: _101.MsgCreateStableswapPoolResponse): _101.MsgCreateStableswapPoolResponseAmino;
                        fromAminoMsg(object: _101.MsgCreateStableswapPoolResponseAminoMsg): _101.MsgCreateStableswapPoolResponse;
                        toAminoMsg(message: _101.MsgCreateStableswapPoolResponse): _101.MsgCreateStableswapPoolResponseAminoMsg;
                        fromProtoMsg(message: _101.MsgCreateStableswapPoolResponseProtoMsg): _101.MsgCreateStableswapPoolResponse;
                        toProto(message: _101.MsgCreateStableswapPoolResponse): Uint8Array;
                        toProtoMsg(message: _101.MsgCreateStableswapPoolResponse): _101.MsgCreateStableswapPoolResponseProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        typeUrl: string;
                        encode(message: _101.MsgStableSwapAdjustScalingFactors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.MsgStableSwapAdjustScalingFactors;
                        fromJSON(object: any): _101.MsgStableSwapAdjustScalingFactors;
                        toJSON(message: _101.MsgStableSwapAdjustScalingFactors): unknown;
                        fromPartial(object: Partial<_101.MsgStableSwapAdjustScalingFactors>): _101.MsgStableSwapAdjustScalingFactors;
                        fromSDK(object: _101.MsgStableSwapAdjustScalingFactorsSDKType): _101.MsgStableSwapAdjustScalingFactors;
                        toSDK(message: _101.MsgStableSwapAdjustScalingFactors): _101.MsgStableSwapAdjustScalingFactorsSDKType;
                        fromAmino(object: _101.MsgStableSwapAdjustScalingFactorsAmino): _101.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _101.MsgStableSwapAdjustScalingFactors): _101.MsgStableSwapAdjustScalingFactorsAmino;
                        fromAminoMsg(object: _101.MsgStableSwapAdjustScalingFactorsAminoMsg): _101.MsgStableSwapAdjustScalingFactors;
                        toAminoMsg(message: _101.MsgStableSwapAdjustScalingFactors): _101.MsgStableSwapAdjustScalingFactorsAminoMsg;
                        fromProtoMsg(message: _101.MsgStableSwapAdjustScalingFactorsProtoMsg): _101.MsgStableSwapAdjustScalingFactors;
                        toProto(message: _101.MsgStableSwapAdjustScalingFactors): Uint8Array;
                        toProtoMsg(message: _101.MsgStableSwapAdjustScalingFactors): _101.MsgStableSwapAdjustScalingFactorsProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        typeUrl: string;
                        encode(_: _101.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.MsgStableSwapAdjustScalingFactorsResponse;
                        fromJSON(_: any): _101.MsgStableSwapAdjustScalingFactorsResponse;
                        toJSON(_: _101.MsgStableSwapAdjustScalingFactorsResponse): unknown;
                        fromPartial(_: Partial<_101.MsgStableSwapAdjustScalingFactorsResponse>): _101.MsgStableSwapAdjustScalingFactorsResponse;
                        fromSDK(_: _101.MsgStableSwapAdjustScalingFactorsResponseSDKType): _101.MsgStableSwapAdjustScalingFactorsResponse;
                        toSDK(_: _101.MsgStableSwapAdjustScalingFactorsResponse): _101.MsgStableSwapAdjustScalingFactorsResponseSDKType;
                        fromAmino(_: _101.MsgStableSwapAdjustScalingFactorsResponseAmino): _101.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _101.MsgStableSwapAdjustScalingFactorsResponse): _101.MsgStableSwapAdjustScalingFactorsResponseAmino;
                        fromAminoMsg(object: _101.MsgStableSwapAdjustScalingFactorsResponseAminoMsg): _101.MsgStableSwapAdjustScalingFactorsResponse;
                        toAminoMsg(message: _101.MsgStableSwapAdjustScalingFactorsResponse): _101.MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
                        fromProtoMsg(message: _101.MsgStableSwapAdjustScalingFactorsResponseProtoMsg): _101.MsgStableSwapAdjustScalingFactorsResponse;
                        toProto(message: _101.MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
                        toProtoMsg(message: _101.MsgStableSwapAdjustScalingFactorsResponse): _101.MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
                    };
                    PoolParams: {
                        typeUrl: string;
                        encode(message: _100.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.PoolParams;
                        fromJSON(object: any): _100.PoolParams;
                        toJSON(message: _100.PoolParams): unknown;
                        fromPartial(object: Partial<_100.PoolParams>): _100.PoolParams;
                        fromSDK(object: _100.PoolParamsSDKType): _100.PoolParams;
                        toSDK(message: _100.PoolParams): _100.PoolParamsSDKType;
                        fromAmino(object: _100.PoolParamsAmino): _100.PoolParams;
                        toAmino(message: _100.PoolParams): _100.PoolParamsAmino;
                        fromAminoMsg(object: _100.PoolParamsAminoMsg): _100.PoolParams;
                        toAminoMsg(message: _100.PoolParams): _100.PoolParamsAminoMsg;
                        fromProtoMsg(message: _100.PoolParamsProtoMsg): _100.PoolParams;
                        toProto(message: _100.PoolParams): Uint8Array;
                        toProtoMsg(message: _100.PoolParams): _100.PoolParamsProtoMsg;
                    };
                    Pool: {
                        typeUrl: string;
                        encode(message: _100.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Pool;
                        fromJSON(object: any): _100.Pool;
                        toJSON(message: _100.Pool): unknown;
                        fromPartial(object: Partial<_100.Pool>): _100.Pool;
                        fromSDK(object: _100.PoolSDKType): _100.Pool;
                        toSDK(message: _100.Pool): _100.PoolSDKType;
                        fromAmino(object: _100.PoolAmino): _100.Pool;
                        toAmino(message: _100.Pool): _100.PoolAmino;
                        fromAminoMsg(object: _100.PoolAminoMsg): _100.Pool;
                        toAminoMsg(message: _100.Pool): _100.PoolAminoMsg;
                        fromProtoMsg(message: _100.PoolProtoMsg): _100.Pool;
                        toProto(message: _100.Pool): Uint8Array;
                        toProtoMsg(message: _100.Pool): _100.PoolProtoMsg;
                    };
                };
            }
        }
        const v2: {
            Query: typeof _282.Query;
            QueryClientImpl: typeof _282.QueryClientImpl;
            LCDQueryClient: typeof _266.LCDQueryClient;
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _102.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.QuerySpotPriceRequest;
                fromJSON(object: any): _102.QuerySpotPriceRequest;
                toJSON(message: _102.QuerySpotPriceRequest): unknown;
                fromPartial(object: Partial<_102.QuerySpotPriceRequest>): _102.QuerySpotPriceRequest;
                fromSDK(object: _102.QuerySpotPriceRequestSDKType): _102.QuerySpotPriceRequest;
                toSDK(message: _102.QuerySpotPriceRequest): _102.QuerySpotPriceRequestSDKType;
                fromAmino(object: _102.QuerySpotPriceRequestAmino): _102.QuerySpotPriceRequest;
                toAmino(message: _102.QuerySpotPriceRequest): _102.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _102.QuerySpotPriceRequestAminoMsg): _102.QuerySpotPriceRequest;
                toAminoMsg(message: _102.QuerySpotPriceRequest): _102.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _102.QuerySpotPriceRequestProtoMsg): _102.QuerySpotPriceRequest;
                toProto(message: _102.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _102.QuerySpotPriceRequest): _102.QuerySpotPriceRequestProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _102.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.QuerySpotPriceResponse;
                fromJSON(object: any): _102.QuerySpotPriceResponse;
                toJSON(message: _102.QuerySpotPriceResponse): unknown;
                fromPartial(object: Partial<_102.QuerySpotPriceResponse>): _102.QuerySpotPriceResponse;
                fromSDK(object: _102.QuerySpotPriceResponseSDKType): _102.QuerySpotPriceResponse;
                toSDK(message: _102.QuerySpotPriceResponse): _102.QuerySpotPriceResponseSDKType;
                fromAmino(object: _102.QuerySpotPriceResponseAmino): _102.QuerySpotPriceResponse;
                toAmino(message: _102.QuerySpotPriceResponse): _102.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _102.QuerySpotPriceResponseAminoMsg): _102.QuerySpotPriceResponse;
                toAminoMsg(message: _102.QuerySpotPriceResponse): _102.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _102.QuerySpotPriceResponseProtoMsg): _102.QuerySpotPriceResponse;
                toProto(message: _102.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _102.QuerySpotPriceResponse): _102.QuerySpotPriceResponseProtoMsg;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            Query: typeof _283.Query;
            QueryClientImpl: typeof _283.QueryClientImpl;
            LCDQueryClient: typeof _267.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _104.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.QueryParamsRequest;
                fromJSON(_: any): _104.QueryParamsRequest;
                toJSON(_: _104.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_104.QueryParamsRequest>): _104.QueryParamsRequest;
                fromSDK(_: _104.QueryParamsRequestSDKType): _104.QueryParamsRequest;
                toSDK(_: _104.QueryParamsRequest): _104.QueryParamsRequestSDKType;
                fromAmino(_: _104.QueryParamsRequestAmino): _104.QueryParamsRequest;
                toAmino(_: _104.QueryParamsRequest): _104.QueryParamsRequestAmino;
                fromAminoMsg(object: _104.QueryParamsRequestAminoMsg): _104.QueryParamsRequest;
                toAminoMsg(message: _104.QueryParamsRequest): _104.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryParamsRequestProtoMsg): _104.QueryParamsRequest;
                toProto(message: _104.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryParamsRequest): _104.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _104.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.QueryParamsResponse;
                fromJSON(object: any): _104.QueryParamsResponse;
                toJSON(message: _104.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_104.QueryParamsResponse>): _104.QueryParamsResponse;
                fromSDK(object: _104.QueryParamsResponseSDKType): _104.QueryParamsResponse;
                toSDK(message: _104.QueryParamsResponse): _104.QueryParamsResponseSDKType;
                fromAmino(object: _104.QueryParamsResponseAmino): _104.QueryParamsResponse;
                toAmino(message: _104.QueryParamsResponse): _104.QueryParamsResponseAmino;
                fromAminoMsg(object: _104.QueryParamsResponseAminoMsg): _104.QueryParamsResponse;
                toAminoMsg(message: _104.QueryParamsResponse): _104.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryParamsResponseProtoMsg): _104.QueryParamsResponse;
                toProto(message: _104.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryParamsResponse): _104.QueryParamsResponseProtoMsg;
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
        };
    }
    const incentives: {
        Msg: typeof _298.Msg;
        Query: typeof _284.Query;
        QueryClientImpl: typeof _284.QueryClientImpl;
        LCDQueryClient: typeof _268.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _109.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _109.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _109.MsgCreateGauge): {
                    typeUrl: string;
                    value: _109.MsgCreateGauge;
                };
                addToGauge(value: _109.MsgAddToGauge): {
                    typeUrl: string;
                    value: _109.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _109.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _109.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _109.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _109.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _109.MsgCreateGauge): {
                    typeUrl: string;
                    value: _109.MsgCreateGauge;
                };
                addToGauge(value: _109.MsgAddToGauge): {
                    typeUrl: string;
                    value: _109.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _109.MsgCreateGauge) => _109.MsgCreateGaugeAmino;
                fromAmino: (object: _109.MsgCreateGaugeAmino) => _109.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _109.MsgAddToGauge) => _109.MsgAddToGaugeAmino;
                fromAmino: (object: _109.MsgAddToGaugeAmino) => _109.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            typeUrl: string;
            encode(message: _109.MsgCreateGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.MsgCreateGauge;
            fromJSON(object: any): _109.MsgCreateGauge;
            toJSON(message: _109.MsgCreateGauge): unknown;
            fromPartial(object: Partial<_109.MsgCreateGauge>): _109.MsgCreateGauge;
            fromSDK(object: _109.MsgCreateGaugeSDKType): _109.MsgCreateGauge;
            toSDK(message: _109.MsgCreateGauge): _109.MsgCreateGaugeSDKType;
            fromAmino(object: _109.MsgCreateGaugeAmino): _109.MsgCreateGauge;
            toAmino(message: _109.MsgCreateGauge): _109.MsgCreateGaugeAmino;
            fromAminoMsg(object: _109.MsgCreateGaugeAminoMsg): _109.MsgCreateGauge;
            toAminoMsg(message: _109.MsgCreateGauge): _109.MsgCreateGaugeAminoMsg;
            fromProtoMsg(message: _109.MsgCreateGaugeProtoMsg): _109.MsgCreateGauge;
            toProto(message: _109.MsgCreateGauge): Uint8Array;
            toProtoMsg(message: _109.MsgCreateGauge): _109.MsgCreateGaugeProtoMsg;
        };
        MsgCreateGaugeResponse: {
            typeUrl: string;
            encode(_: _109.MsgCreateGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.MsgCreateGaugeResponse;
            fromJSON(_: any): _109.MsgCreateGaugeResponse;
            toJSON(_: _109.MsgCreateGaugeResponse): unknown;
            fromPartial(_: Partial<_109.MsgCreateGaugeResponse>): _109.MsgCreateGaugeResponse;
            fromSDK(_: _109.MsgCreateGaugeResponseSDKType): _109.MsgCreateGaugeResponse;
            toSDK(_: _109.MsgCreateGaugeResponse): _109.MsgCreateGaugeResponseSDKType;
            fromAmino(_: _109.MsgCreateGaugeResponseAmino): _109.MsgCreateGaugeResponse;
            toAmino(_: _109.MsgCreateGaugeResponse): _109.MsgCreateGaugeResponseAmino;
            fromAminoMsg(object: _109.MsgCreateGaugeResponseAminoMsg): _109.MsgCreateGaugeResponse;
            toAminoMsg(message: _109.MsgCreateGaugeResponse): _109.MsgCreateGaugeResponseAminoMsg;
            fromProtoMsg(message: _109.MsgCreateGaugeResponseProtoMsg): _109.MsgCreateGaugeResponse;
            toProto(message: _109.MsgCreateGaugeResponse): Uint8Array;
            toProtoMsg(message: _109.MsgCreateGaugeResponse): _109.MsgCreateGaugeResponseProtoMsg;
        };
        MsgAddToGauge: {
            typeUrl: string;
            encode(message: _109.MsgAddToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.MsgAddToGauge;
            fromJSON(object: any): _109.MsgAddToGauge;
            toJSON(message: _109.MsgAddToGauge): unknown;
            fromPartial(object: Partial<_109.MsgAddToGauge>): _109.MsgAddToGauge;
            fromSDK(object: _109.MsgAddToGaugeSDKType): _109.MsgAddToGauge;
            toSDK(message: _109.MsgAddToGauge): _109.MsgAddToGaugeSDKType;
            fromAmino(object: _109.MsgAddToGaugeAmino): _109.MsgAddToGauge;
            toAmino(message: _109.MsgAddToGauge): _109.MsgAddToGaugeAmino;
            fromAminoMsg(object: _109.MsgAddToGaugeAminoMsg): _109.MsgAddToGauge;
            toAminoMsg(message: _109.MsgAddToGauge): _109.MsgAddToGaugeAminoMsg;
            fromProtoMsg(message: _109.MsgAddToGaugeProtoMsg): _109.MsgAddToGauge;
            toProto(message: _109.MsgAddToGauge): Uint8Array;
            toProtoMsg(message: _109.MsgAddToGauge): _109.MsgAddToGaugeProtoMsg;
        };
        MsgAddToGaugeResponse: {
            typeUrl: string;
            encode(_: _109.MsgAddToGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.MsgAddToGaugeResponse;
            fromJSON(_: any): _109.MsgAddToGaugeResponse;
            toJSON(_: _109.MsgAddToGaugeResponse): unknown;
            fromPartial(_: Partial<_109.MsgAddToGaugeResponse>): _109.MsgAddToGaugeResponse;
            fromSDK(_: _109.MsgAddToGaugeResponseSDKType): _109.MsgAddToGaugeResponse;
            toSDK(_: _109.MsgAddToGaugeResponse): _109.MsgAddToGaugeResponseSDKType;
            fromAmino(_: _109.MsgAddToGaugeResponseAmino): _109.MsgAddToGaugeResponse;
            toAmino(_: _109.MsgAddToGaugeResponse): _109.MsgAddToGaugeResponseAmino;
            fromAminoMsg(object: _109.MsgAddToGaugeResponseAminoMsg): _109.MsgAddToGaugeResponse;
            toAminoMsg(message: _109.MsgAddToGaugeResponse): _109.MsgAddToGaugeResponseAminoMsg;
            fromProtoMsg(message: _109.MsgAddToGaugeResponseProtoMsg): _109.MsgAddToGaugeResponse;
            toProto(message: _109.MsgAddToGaugeResponse): Uint8Array;
            toProtoMsg(message: _109.MsgAddToGaugeResponse): _109.MsgAddToGaugeResponseProtoMsg;
        };
        ModuleToDistributeCoinsRequest: {
            typeUrl: string;
            encode(_: _108.ModuleToDistributeCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _108.ModuleToDistributeCoinsRequest;
            toJSON(_: _108.ModuleToDistributeCoinsRequest): unknown;
            fromPartial(_: Partial<_108.ModuleToDistributeCoinsRequest>): _108.ModuleToDistributeCoinsRequest;
            fromSDK(_: _108.ModuleToDistributeCoinsRequestSDKType): _108.ModuleToDistributeCoinsRequest;
            toSDK(_: _108.ModuleToDistributeCoinsRequest): _108.ModuleToDistributeCoinsRequestSDKType;
            fromAmino(_: _108.ModuleToDistributeCoinsRequestAmino): _108.ModuleToDistributeCoinsRequest;
            toAmino(_: _108.ModuleToDistributeCoinsRequest): _108.ModuleToDistributeCoinsRequestAmino;
            fromAminoMsg(object: _108.ModuleToDistributeCoinsRequestAminoMsg): _108.ModuleToDistributeCoinsRequest;
            toAminoMsg(message: _108.ModuleToDistributeCoinsRequest): _108.ModuleToDistributeCoinsRequestAminoMsg;
            fromProtoMsg(message: _108.ModuleToDistributeCoinsRequestProtoMsg): _108.ModuleToDistributeCoinsRequest;
            toProto(message: _108.ModuleToDistributeCoinsRequest): Uint8Array;
            toProtoMsg(message: _108.ModuleToDistributeCoinsRequest): _108.ModuleToDistributeCoinsRequestProtoMsg;
        };
        ModuleToDistributeCoinsResponse: {
            typeUrl: string;
            encode(message: _108.ModuleToDistributeCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _108.ModuleToDistributeCoinsResponse;
            toJSON(message: _108.ModuleToDistributeCoinsResponse): unknown;
            fromPartial(object: Partial<_108.ModuleToDistributeCoinsResponse>): _108.ModuleToDistributeCoinsResponse;
            fromSDK(object: _108.ModuleToDistributeCoinsResponseSDKType): _108.ModuleToDistributeCoinsResponse;
            toSDK(message: _108.ModuleToDistributeCoinsResponse): _108.ModuleToDistributeCoinsResponseSDKType;
            fromAmino(object: _108.ModuleToDistributeCoinsResponseAmino): _108.ModuleToDistributeCoinsResponse;
            toAmino(message: _108.ModuleToDistributeCoinsResponse): _108.ModuleToDistributeCoinsResponseAmino;
            fromAminoMsg(object: _108.ModuleToDistributeCoinsResponseAminoMsg): _108.ModuleToDistributeCoinsResponse;
            toAminoMsg(message: _108.ModuleToDistributeCoinsResponse): _108.ModuleToDistributeCoinsResponseAminoMsg;
            fromProtoMsg(message: _108.ModuleToDistributeCoinsResponseProtoMsg): _108.ModuleToDistributeCoinsResponse;
            toProto(message: _108.ModuleToDistributeCoinsResponse): Uint8Array;
            toProtoMsg(message: _108.ModuleToDistributeCoinsResponse): _108.ModuleToDistributeCoinsResponseProtoMsg;
        };
        GaugeByIDRequest: {
            typeUrl: string;
            encode(message: _108.GaugeByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.GaugeByIDRequest;
            fromJSON(object: any): _108.GaugeByIDRequest;
            toJSON(message: _108.GaugeByIDRequest): unknown;
            fromPartial(object: Partial<_108.GaugeByIDRequest>): _108.GaugeByIDRequest;
            fromSDK(object: _108.GaugeByIDRequestSDKType): _108.GaugeByIDRequest;
            toSDK(message: _108.GaugeByIDRequest): _108.GaugeByIDRequestSDKType;
            fromAmino(object: _108.GaugeByIDRequestAmino): _108.GaugeByIDRequest;
            toAmino(message: _108.GaugeByIDRequest): _108.GaugeByIDRequestAmino;
            fromAminoMsg(object: _108.GaugeByIDRequestAminoMsg): _108.GaugeByIDRequest;
            toAminoMsg(message: _108.GaugeByIDRequest): _108.GaugeByIDRequestAminoMsg;
            fromProtoMsg(message: _108.GaugeByIDRequestProtoMsg): _108.GaugeByIDRequest;
            toProto(message: _108.GaugeByIDRequest): Uint8Array;
            toProtoMsg(message: _108.GaugeByIDRequest): _108.GaugeByIDRequestProtoMsg;
        };
        GaugeByIDResponse: {
            typeUrl: string;
            encode(message: _108.GaugeByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.GaugeByIDResponse;
            fromJSON(object: any): _108.GaugeByIDResponse;
            toJSON(message: _108.GaugeByIDResponse): unknown;
            fromPartial(object: Partial<_108.GaugeByIDResponse>): _108.GaugeByIDResponse;
            fromSDK(object: _108.GaugeByIDResponseSDKType): _108.GaugeByIDResponse;
            toSDK(message: _108.GaugeByIDResponse): _108.GaugeByIDResponseSDKType;
            fromAmino(object: _108.GaugeByIDResponseAmino): _108.GaugeByIDResponse;
            toAmino(message: _108.GaugeByIDResponse): _108.GaugeByIDResponseAmino;
            fromAminoMsg(object: _108.GaugeByIDResponseAminoMsg): _108.GaugeByIDResponse;
            toAminoMsg(message: _108.GaugeByIDResponse): _108.GaugeByIDResponseAminoMsg;
            fromProtoMsg(message: _108.GaugeByIDResponseProtoMsg): _108.GaugeByIDResponse;
            toProto(message: _108.GaugeByIDResponse): Uint8Array;
            toProtoMsg(message: _108.GaugeByIDResponse): _108.GaugeByIDResponseProtoMsg;
        };
        GaugesRequest: {
            typeUrl: string;
            encode(message: _108.GaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.GaugesRequest;
            fromJSON(object: any): _108.GaugesRequest;
            toJSON(message: _108.GaugesRequest): unknown;
            fromPartial(object: Partial<_108.GaugesRequest>): _108.GaugesRequest;
            fromSDK(object: _108.GaugesRequestSDKType): _108.GaugesRequest;
            toSDK(message: _108.GaugesRequest): _108.GaugesRequestSDKType;
            fromAmino(object: _108.GaugesRequestAmino): _108.GaugesRequest;
            toAmino(message: _108.GaugesRequest): _108.GaugesRequestAmino;
            fromAminoMsg(object: _108.GaugesRequestAminoMsg): _108.GaugesRequest;
            toAminoMsg(message: _108.GaugesRequest): _108.GaugesRequestAminoMsg;
            fromProtoMsg(message: _108.GaugesRequestProtoMsg): _108.GaugesRequest;
            toProto(message: _108.GaugesRequest): Uint8Array;
            toProtoMsg(message: _108.GaugesRequest): _108.GaugesRequestProtoMsg;
        };
        GaugesResponse: {
            typeUrl: string;
            encode(message: _108.GaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.GaugesResponse;
            fromJSON(object: any): _108.GaugesResponse;
            toJSON(message: _108.GaugesResponse): unknown;
            fromPartial(object: Partial<_108.GaugesResponse>): _108.GaugesResponse;
            fromSDK(object: _108.GaugesResponseSDKType): _108.GaugesResponse;
            toSDK(message: _108.GaugesResponse): _108.GaugesResponseSDKType;
            fromAmino(object: _108.GaugesResponseAmino): _108.GaugesResponse;
            toAmino(message: _108.GaugesResponse): _108.GaugesResponseAmino;
            fromAminoMsg(object: _108.GaugesResponseAminoMsg): _108.GaugesResponse;
            toAminoMsg(message: _108.GaugesResponse): _108.GaugesResponseAminoMsg;
            fromProtoMsg(message: _108.GaugesResponseProtoMsg): _108.GaugesResponse;
            toProto(message: _108.GaugesResponse): Uint8Array;
            toProtoMsg(message: _108.GaugesResponse): _108.GaugesResponseProtoMsg;
        };
        ActiveGaugesRequest: {
            typeUrl: string;
            encode(message: _108.ActiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.ActiveGaugesRequest;
            fromJSON(object: any): _108.ActiveGaugesRequest;
            toJSON(message: _108.ActiveGaugesRequest): unknown;
            fromPartial(object: Partial<_108.ActiveGaugesRequest>): _108.ActiveGaugesRequest;
            fromSDK(object: _108.ActiveGaugesRequestSDKType): _108.ActiveGaugesRequest;
            toSDK(message: _108.ActiveGaugesRequest): _108.ActiveGaugesRequestSDKType;
            fromAmino(object: _108.ActiveGaugesRequestAmino): _108.ActiveGaugesRequest;
            toAmino(message: _108.ActiveGaugesRequest): _108.ActiveGaugesRequestAmino;
            fromAminoMsg(object: _108.ActiveGaugesRequestAminoMsg): _108.ActiveGaugesRequest;
            toAminoMsg(message: _108.ActiveGaugesRequest): _108.ActiveGaugesRequestAminoMsg;
            fromProtoMsg(message: _108.ActiveGaugesRequestProtoMsg): _108.ActiveGaugesRequest;
            toProto(message: _108.ActiveGaugesRequest): Uint8Array;
            toProtoMsg(message: _108.ActiveGaugesRequest): _108.ActiveGaugesRequestProtoMsg;
        };
        ActiveGaugesResponse: {
            typeUrl: string;
            encode(message: _108.ActiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.ActiveGaugesResponse;
            fromJSON(object: any): _108.ActiveGaugesResponse;
            toJSON(message: _108.ActiveGaugesResponse): unknown;
            fromPartial(object: Partial<_108.ActiveGaugesResponse>): _108.ActiveGaugesResponse;
            fromSDK(object: _108.ActiveGaugesResponseSDKType): _108.ActiveGaugesResponse;
            toSDK(message: _108.ActiveGaugesResponse): _108.ActiveGaugesResponseSDKType;
            fromAmino(object: _108.ActiveGaugesResponseAmino): _108.ActiveGaugesResponse;
            toAmino(message: _108.ActiveGaugesResponse): _108.ActiveGaugesResponseAmino;
            fromAminoMsg(object: _108.ActiveGaugesResponseAminoMsg): _108.ActiveGaugesResponse;
            toAminoMsg(message: _108.ActiveGaugesResponse): _108.ActiveGaugesResponseAminoMsg;
            fromProtoMsg(message: _108.ActiveGaugesResponseProtoMsg): _108.ActiveGaugesResponse;
            toProto(message: _108.ActiveGaugesResponse): Uint8Array;
            toProtoMsg(message: _108.ActiveGaugesResponse): _108.ActiveGaugesResponseProtoMsg;
        };
        ActiveGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _108.ActiveGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _108.ActiveGaugesPerDenomRequest;
            toJSON(message: _108.ActiveGaugesPerDenomRequest): unknown;
            fromPartial(object: Partial<_108.ActiveGaugesPerDenomRequest>): _108.ActiveGaugesPerDenomRequest;
            fromSDK(object: _108.ActiveGaugesPerDenomRequestSDKType): _108.ActiveGaugesPerDenomRequest;
            toSDK(message: _108.ActiveGaugesPerDenomRequest): _108.ActiveGaugesPerDenomRequestSDKType;
            fromAmino(object: _108.ActiveGaugesPerDenomRequestAmino): _108.ActiveGaugesPerDenomRequest;
            toAmino(message: _108.ActiveGaugesPerDenomRequest): _108.ActiveGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _108.ActiveGaugesPerDenomRequestAminoMsg): _108.ActiveGaugesPerDenomRequest;
            toAminoMsg(message: _108.ActiveGaugesPerDenomRequest): _108.ActiveGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _108.ActiveGaugesPerDenomRequestProtoMsg): _108.ActiveGaugesPerDenomRequest;
            toProto(message: _108.ActiveGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _108.ActiveGaugesPerDenomRequest): _108.ActiveGaugesPerDenomRequestProtoMsg;
        };
        ActiveGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _108.ActiveGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _108.ActiveGaugesPerDenomResponse;
            toJSON(message: _108.ActiveGaugesPerDenomResponse): unknown;
            fromPartial(object: Partial<_108.ActiveGaugesPerDenomResponse>): _108.ActiveGaugesPerDenomResponse;
            fromSDK(object: _108.ActiveGaugesPerDenomResponseSDKType): _108.ActiveGaugesPerDenomResponse;
            toSDK(message: _108.ActiveGaugesPerDenomResponse): _108.ActiveGaugesPerDenomResponseSDKType;
            fromAmino(object: _108.ActiveGaugesPerDenomResponseAmino): _108.ActiveGaugesPerDenomResponse;
            toAmino(message: _108.ActiveGaugesPerDenomResponse): _108.ActiveGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _108.ActiveGaugesPerDenomResponseAminoMsg): _108.ActiveGaugesPerDenomResponse;
            toAminoMsg(message: _108.ActiveGaugesPerDenomResponse): _108.ActiveGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _108.ActiveGaugesPerDenomResponseProtoMsg): _108.ActiveGaugesPerDenomResponse;
            toProto(message: _108.ActiveGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _108.ActiveGaugesPerDenomResponse): _108.ActiveGaugesPerDenomResponseProtoMsg;
        };
        UpcomingGaugesRequest: {
            typeUrl: string;
            encode(message: _108.UpcomingGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.UpcomingGaugesRequest;
            fromJSON(object: any): _108.UpcomingGaugesRequest;
            toJSON(message: _108.UpcomingGaugesRequest): unknown;
            fromPartial(object: Partial<_108.UpcomingGaugesRequest>): _108.UpcomingGaugesRequest;
            fromSDK(object: _108.UpcomingGaugesRequestSDKType): _108.UpcomingGaugesRequest;
            toSDK(message: _108.UpcomingGaugesRequest): _108.UpcomingGaugesRequestSDKType;
            fromAmino(object: _108.UpcomingGaugesRequestAmino): _108.UpcomingGaugesRequest;
            toAmino(message: _108.UpcomingGaugesRequest): _108.UpcomingGaugesRequestAmino;
            fromAminoMsg(object: _108.UpcomingGaugesRequestAminoMsg): _108.UpcomingGaugesRequest;
            toAminoMsg(message: _108.UpcomingGaugesRequest): _108.UpcomingGaugesRequestAminoMsg;
            fromProtoMsg(message: _108.UpcomingGaugesRequestProtoMsg): _108.UpcomingGaugesRequest;
            toProto(message: _108.UpcomingGaugesRequest): Uint8Array;
            toProtoMsg(message: _108.UpcomingGaugesRequest): _108.UpcomingGaugesRequestProtoMsg;
        };
        UpcomingGaugesResponse: {
            typeUrl: string;
            encode(message: _108.UpcomingGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.UpcomingGaugesResponse;
            fromJSON(object: any): _108.UpcomingGaugesResponse;
            toJSON(message: _108.UpcomingGaugesResponse): unknown;
            fromPartial(object: Partial<_108.UpcomingGaugesResponse>): _108.UpcomingGaugesResponse;
            fromSDK(object: _108.UpcomingGaugesResponseSDKType): _108.UpcomingGaugesResponse;
            toSDK(message: _108.UpcomingGaugesResponse): _108.UpcomingGaugesResponseSDKType;
            fromAmino(object: _108.UpcomingGaugesResponseAmino): _108.UpcomingGaugesResponse;
            toAmino(message: _108.UpcomingGaugesResponse): _108.UpcomingGaugesResponseAmino;
            fromAminoMsg(object: _108.UpcomingGaugesResponseAminoMsg): _108.UpcomingGaugesResponse;
            toAminoMsg(message: _108.UpcomingGaugesResponse): _108.UpcomingGaugesResponseAminoMsg;
            fromProtoMsg(message: _108.UpcomingGaugesResponseProtoMsg): _108.UpcomingGaugesResponse;
            toProto(message: _108.UpcomingGaugesResponse): Uint8Array;
            toProtoMsg(message: _108.UpcomingGaugesResponse): _108.UpcomingGaugesResponseProtoMsg;
        };
        UpcomingGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _108.UpcomingGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.UpcomingGaugesPerDenomRequest;
            fromJSON(object: any): _108.UpcomingGaugesPerDenomRequest;
            toJSON(message: _108.UpcomingGaugesPerDenomRequest): unknown;
            fromPartial(object: Partial<_108.UpcomingGaugesPerDenomRequest>): _108.UpcomingGaugesPerDenomRequest;
            fromSDK(object: _108.UpcomingGaugesPerDenomRequestSDKType): _108.UpcomingGaugesPerDenomRequest;
            toSDK(message: _108.UpcomingGaugesPerDenomRequest): _108.UpcomingGaugesPerDenomRequestSDKType;
            fromAmino(object: _108.UpcomingGaugesPerDenomRequestAmino): _108.UpcomingGaugesPerDenomRequest;
            toAmino(message: _108.UpcomingGaugesPerDenomRequest): _108.UpcomingGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _108.UpcomingGaugesPerDenomRequestAminoMsg): _108.UpcomingGaugesPerDenomRequest;
            toAminoMsg(message: _108.UpcomingGaugesPerDenomRequest): _108.UpcomingGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _108.UpcomingGaugesPerDenomRequestProtoMsg): _108.UpcomingGaugesPerDenomRequest;
            toProto(message: _108.UpcomingGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _108.UpcomingGaugesPerDenomRequest): _108.UpcomingGaugesPerDenomRequestProtoMsg;
        };
        UpcomingGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _108.UpcomingGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.UpcomingGaugesPerDenomResponse;
            fromJSON(object: any): _108.UpcomingGaugesPerDenomResponse;
            toJSON(message: _108.UpcomingGaugesPerDenomResponse): unknown;
            fromPartial(object: Partial<_108.UpcomingGaugesPerDenomResponse>): _108.UpcomingGaugesPerDenomResponse;
            fromSDK(object: _108.UpcomingGaugesPerDenomResponseSDKType): _108.UpcomingGaugesPerDenomResponse;
            toSDK(message: _108.UpcomingGaugesPerDenomResponse): _108.UpcomingGaugesPerDenomResponseSDKType;
            fromAmino(object: _108.UpcomingGaugesPerDenomResponseAmino): _108.UpcomingGaugesPerDenomResponse;
            toAmino(message: _108.UpcomingGaugesPerDenomResponse): _108.UpcomingGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _108.UpcomingGaugesPerDenomResponseAminoMsg): _108.UpcomingGaugesPerDenomResponse;
            toAminoMsg(message: _108.UpcomingGaugesPerDenomResponse): _108.UpcomingGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _108.UpcomingGaugesPerDenomResponseProtoMsg): _108.UpcomingGaugesPerDenomResponse;
            toProto(message: _108.UpcomingGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _108.UpcomingGaugesPerDenomResponse): _108.UpcomingGaugesPerDenomResponseProtoMsg;
        };
        RewardsEstRequest: {
            typeUrl: string;
            encode(message: _108.RewardsEstRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.RewardsEstRequest;
            fromJSON(object: any): _108.RewardsEstRequest;
            toJSON(message: _108.RewardsEstRequest): unknown;
            fromPartial(object: Partial<_108.RewardsEstRequest>): _108.RewardsEstRequest;
            fromSDK(object: _108.RewardsEstRequestSDKType): _108.RewardsEstRequest;
            toSDK(message: _108.RewardsEstRequest): _108.RewardsEstRequestSDKType;
            fromAmino(object: _108.RewardsEstRequestAmino): _108.RewardsEstRequest;
            toAmino(message: _108.RewardsEstRequest): _108.RewardsEstRequestAmino;
            fromAminoMsg(object: _108.RewardsEstRequestAminoMsg): _108.RewardsEstRequest;
            toAminoMsg(message: _108.RewardsEstRequest): _108.RewardsEstRequestAminoMsg;
            fromProtoMsg(message: _108.RewardsEstRequestProtoMsg): _108.RewardsEstRequest;
            toProto(message: _108.RewardsEstRequest): Uint8Array;
            toProtoMsg(message: _108.RewardsEstRequest): _108.RewardsEstRequestProtoMsg;
        };
        RewardsEstResponse: {
            typeUrl: string;
            encode(message: _108.RewardsEstResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.RewardsEstResponse;
            fromJSON(object: any): _108.RewardsEstResponse;
            toJSON(message: _108.RewardsEstResponse): unknown;
            fromPartial(object: Partial<_108.RewardsEstResponse>): _108.RewardsEstResponse;
            fromSDK(object: _108.RewardsEstResponseSDKType): _108.RewardsEstResponse;
            toSDK(message: _108.RewardsEstResponse): _108.RewardsEstResponseSDKType;
            fromAmino(object: _108.RewardsEstResponseAmino): _108.RewardsEstResponse;
            toAmino(message: _108.RewardsEstResponse): _108.RewardsEstResponseAmino;
            fromAminoMsg(object: _108.RewardsEstResponseAminoMsg): _108.RewardsEstResponse;
            toAminoMsg(message: _108.RewardsEstResponse): _108.RewardsEstResponseAminoMsg;
            fromProtoMsg(message: _108.RewardsEstResponseProtoMsg): _108.RewardsEstResponse;
            toProto(message: _108.RewardsEstResponse): Uint8Array;
            toProtoMsg(message: _108.RewardsEstResponse): _108.RewardsEstResponseProtoMsg;
        };
        QueryLockableDurationsRequest: {
            typeUrl: string;
            encode(_: _108.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QueryLockableDurationsRequest;
            fromJSON(_: any): _108.QueryLockableDurationsRequest;
            toJSON(_: _108.QueryLockableDurationsRequest): unknown;
            fromPartial(_: Partial<_108.QueryLockableDurationsRequest>): _108.QueryLockableDurationsRequest;
            fromSDK(_: _108.QueryLockableDurationsRequestSDKType): _108.QueryLockableDurationsRequest;
            toSDK(_: _108.QueryLockableDurationsRequest): _108.QueryLockableDurationsRequestSDKType;
            fromAmino(_: _108.QueryLockableDurationsRequestAmino): _108.QueryLockableDurationsRequest;
            toAmino(_: _108.QueryLockableDurationsRequest): _108.QueryLockableDurationsRequestAmino;
            fromAminoMsg(object: _108.QueryLockableDurationsRequestAminoMsg): _108.QueryLockableDurationsRequest;
            toAminoMsg(message: _108.QueryLockableDurationsRequest): _108.QueryLockableDurationsRequestAminoMsg;
            fromProtoMsg(message: _108.QueryLockableDurationsRequestProtoMsg): _108.QueryLockableDurationsRequest;
            toProto(message: _108.QueryLockableDurationsRequest): Uint8Array;
            toProtoMsg(message: _108.QueryLockableDurationsRequest): _108.QueryLockableDurationsRequestProtoMsg;
        };
        QueryLockableDurationsResponse: {
            typeUrl: string;
            encode(message: _108.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QueryLockableDurationsResponse;
            fromJSON(object: any): _108.QueryLockableDurationsResponse;
            toJSON(message: _108.QueryLockableDurationsResponse): unknown;
            fromPartial(object: Partial<_108.QueryLockableDurationsResponse>): _108.QueryLockableDurationsResponse;
            fromSDK(object: _108.QueryLockableDurationsResponseSDKType): _108.QueryLockableDurationsResponse;
            toSDK(message: _108.QueryLockableDurationsResponse): _108.QueryLockableDurationsResponseSDKType;
            fromAmino(object: _108.QueryLockableDurationsResponseAmino): _108.QueryLockableDurationsResponse;
            toAmino(message: _108.QueryLockableDurationsResponse): _108.QueryLockableDurationsResponseAmino;
            fromAminoMsg(object: _108.QueryLockableDurationsResponseAminoMsg): _108.QueryLockableDurationsResponse;
            toAminoMsg(message: _108.QueryLockableDurationsResponse): _108.QueryLockableDurationsResponseAminoMsg;
            fromProtoMsg(message: _108.QueryLockableDurationsResponseProtoMsg): _108.QueryLockableDurationsResponse;
            toProto(message: _108.QueryLockableDurationsResponse): Uint8Array;
            toProtoMsg(message: _108.QueryLockableDurationsResponse): _108.QueryLockableDurationsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _107.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Params;
            fromJSON(object: any): _107.Params;
            toJSON(message: _107.Params): unknown;
            fromPartial(object: Partial<_107.Params>): _107.Params;
            fromSDK(object: _107.ParamsSDKType): _107.Params;
            toSDK(message: _107.Params): _107.ParamsSDKType;
            fromAmino(object: _107.ParamsAmino): _107.Params;
            toAmino(message: _107.Params): _107.ParamsAmino;
            fromAminoMsg(object: _107.ParamsAminoMsg): _107.Params;
            toAminoMsg(message: _107.Params): _107.ParamsAminoMsg;
            fromProtoMsg(message: _107.ParamsProtoMsg): _107.Params;
            toProto(message: _107.Params): Uint8Array;
            toProtoMsg(message: _107.Params): _107.ParamsProtoMsg;
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
        Gauge: {
            typeUrl: string;
            encode(message: _105.Gauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Gauge;
            fromJSON(object: any): _105.Gauge;
            toJSON(message: _105.Gauge): unknown;
            fromPartial(object: Partial<_105.Gauge>): _105.Gauge;
            fromSDK(object: _105.GaugeSDKType): _105.Gauge;
            toSDK(message: _105.Gauge): _105.GaugeSDKType;
            fromAmino(object: _105.GaugeAmino): _105.Gauge;
            toAmino(message: _105.Gauge): _105.GaugeAmino;
            fromAminoMsg(object: _105.GaugeAminoMsg): _105.Gauge;
            toAminoMsg(message: _105.Gauge): _105.GaugeAminoMsg;
            fromProtoMsg(message: _105.GaugeProtoMsg): _105.Gauge;
            toProto(message: _105.Gauge): Uint8Array;
            toProtoMsg(message: _105.Gauge): _105.GaugeProtoMsg;
        };
        LockableDurationsInfo: {
            typeUrl: string;
            encode(message: _105.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.LockableDurationsInfo;
            fromJSON(object: any): _105.LockableDurationsInfo;
            toJSON(message: _105.LockableDurationsInfo): unknown;
            fromPartial(object: Partial<_105.LockableDurationsInfo>): _105.LockableDurationsInfo;
            fromSDK(object: _105.LockableDurationsInfoSDKType): _105.LockableDurationsInfo;
            toSDK(message: _105.LockableDurationsInfo): _105.LockableDurationsInfoSDKType;
            fromAmino(object: _105.LockableDurationsInfoAmino): _105.LockableDurationsInfo;
            toAmino(message: _105.LockableDurationsInfo): _105.LockableDurationsInfoAmino;
            fromAminoMsg(object: _105.LockableDurationsInfoAminoMsg): _105.LockableDurationsInfo;
            toAminoMsg(message: _105.LockableDurationsInfo): _105.LockableDurationsInfoAminoMsg;
            fromProtoMsg(message: _105.LockableDurationsInfoProtoMsg): _105.LockableDurationsInfo;
            toProto(message: _105.LockableDurationsInfo): Uint8Array;
            toProtoMsg(message: _105.LockableDurationsInfo): _105.LockableDurationsInfoProtoMsg;
        };
    };
    const lockup: {
        Msg: typeof _299.Msg;
        Query: typeof _285.Query;
        QueryClientImpl: typeof _285.QueryClientImpl;
        LCDQueryClient: typeof _269.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _114.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _114.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _114.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _114.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _114.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _114.MsgLockTokens): {
                    typeUrl: string;
                    value: _114.MsgLockTokens;
                };
                beginUnlockingAll(value: _114.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _114.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _114.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _114.MsgBeginUnlocking;
                };
                extendLockup(value: _114.MsgExtendLockup): {
                    typeUrl: string;
                    value: _114.MsgExtendLockup;
                };
                forceUnlock(value: _114.MsgForceUnlock): {
                    typeUrl: string;
                    value: _114.MsgForceUnlock;
                };
            };
            toJSON: {
                lockTokens(value: _114.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _114.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _114.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
                extendLockup(value: _114.MsgExtendLockup): {
                    typeUrl: string;
                    value: unknown;
                };
                forceUnlock(value: _114.MsgForceUnlock): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _114.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _114.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _114.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _114.MsgExtendLockup;
                };
                forceUnlock(value: any): {
                    typeUrl: string;
                    value: _114.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _114.MsgLockTokens): {
                    typeUrl: string;
                    value: _114.MsgLockTokens;
                };
                beginUnlockingAll(value: _114.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _114.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _114.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _114.MsgBeginUnlocking;
                };
                extendLockup(value: _114.MsgExtendLockup): {
                    typeUrl: string;
                    value: _114.MsgExtendLockup;
                };
                forceUnlock(value: _114.MsgForceUnlock): {
                    typeUrl: string;
                    value: _114.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _114.MsgLockTokens) => _114.MsgLockTokensAmino;
                fromAmino: (object: _114.MsgLockTokensAmino) => _114.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _114.MsgBeginUnlockingAll) => _114.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _114.MsgBeginUnlockingAllAmino) => _114.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _114.MsgBeginUnlocking) => _114.MsgBeginUnlockingAmino;
                fromAmino: (object: _114.MsgBeginUnlockingAmino) => _114.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _114.MsgExtendLockup) => _114.MsgExtendLockupAmino;
                fromAmino: (object: _114.MsgExtendLockupAmino) => _114.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _114.MsgForceUnlock) => _114.MsgForceUnlockAmino;
                fromAmino: (object: _114.MsgForceUnlockAmino) => _114.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            typeUrl: string;
            encode(message: _114.MsgLockTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MsgLockTokens;
            fromJSON(object: any): _114.MsgLockTokens;
            toJSON(message: _114.MsgLockTokens): unknown;
            fromPartial(object: Partial<_114.MsgLockTokens>): _114.MsgLockTokens;
            fromSDK(object: _114.MsgLockTokensSDKType): _114.MsgLockTokens;
            toSDK(message: _114.MsgLockTokens): _114.MsgLockTokensSDKType;
            fromAmino(object: _114.MsgLockTokensAmino): _114.MsgLockTokens;
            toAmino(message: _114.MsgLockTokens): _114.MsgLockTokensAmino;
            fromAminoMsg(object: _114.MsgLockTokensAminoMsg): _114.MsgLockTokens;
            toAminoMsg(message: _114.MsgLockTokens): _114.MsgLockTokensAminoMsg;
            fromProtoMsg(message: _114.MsgLockTokensProtoMsg): _114.MsgLockTokens;
            toProto(message: _114.MsgLockTokens): Uint8Array;
            toProtoMsg(message: _114.MsgLockTokens): _114.MsgLockTokensProtoMsg;
        };
        MsgLockTokensResponse: {
            typeUrl: string;
            encode(message: _114.MsgLockTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MsgLockTokensResponse;
            fromJSON(object: any): _114.MsgLockTokensResponse;
            toJSON(message: _114.MsgLockTokensResponse): unknown;
            fromPartial(object: Partial<_114.MsgLockTokensResponse>): _114.MsgLockTokensResponse;
            fromSDK(object: _114.MsgLockTokensResponseSDKType): _114.MsgLockTokensResponse;
            toSDK(message: _114.MsgLockTokensResponse): _114.MsgLockTokensResponseSDKType;
            fromAmino(object: _114.MsgLockTokensResponseAmino): _114.MsgLockTokensResponse;
            toAmino(message: _114.MsgLockTokensResponse): _114.MsgLockTokensResponseAmino;
            fromAminoMsg(object: _114.MsgLockTokensResponseAminoMsg): _114.MsgLockTokensResponse;
            toAminoMsg(message: _114.MsgLockTokensResponse): _114.MsgLockTokensResponseAminoMsg;
            fromProtoMsg(message: _114.MsgLockTokensResponseProtoMsg): _114.MsgLockTokensResponse;
            toProto(message: _114.MsgLockTokensResponse): Uint8Array;
            toProtoMsg(message: _114.MsgLockTokensResponse): _114.MsgLockTokensResponseProtoMsg;
        };
        MsgBeginUnlockingAll: {
            typeUrl: string;
            encode(message: _114.MsgBeginUnlockingAll, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MsgBeginUnlockingAll;
            fromJSON(object: any): _114.MsgBeginUnlockingAll;
            toJSON(message: _114.MsgBeginUnlockingAll): unknown;
            fromPartial(object: Partial<_114.MsgBeginUnlockingAll>): _114.MsgBeginUnlockingAll;
            fromSDK(object: _114.MsgBeginUnlockingAllSDKType): _114.MsgBeginUnlockingAll;
            toSDK(message: _114.MsgBeginUnlockingAll): _114.MsgBeginUnlockingAllSDKType;
            fromAmino(object: _114.MsgBeginUnlockingAllAmino): _114.MsgBeginUnlockingAll;
            toAmino(message: _114.MsgBeginUnlockingAll): _114.MsgBeginUnlockingAllAmino;
            fromAminoMsg(object: _114.MsgBeginUnlockingAllAminoMsg): _114.MsgBeginUnlockingAll;
            toAminoMsg(message: _114.MsgBeginUnlockingAll): _114.MsgBeginUnlockingAllAminoMsg;
            fromProtoMsg(message: _114.MsgBeginUnlockingAllProtoMsg): _114.MsgBeginUnlockingAll;
            toProto(message: _114.MsgBeginUnlockingAll): Uint8Array;
            toProtoMsg(message: _114.MsgBeginUnlockingAll): _114.MsgBeginUnlockingAllProtoMsg;
        };
        MsgBeginUnlockingAllResponse: {
            typeUrl: string;
            encode(message: _114.MsgBeginUnlockingAllResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _114.MsgBeginUnlockingAllResponse;
            toJSON(message: _114.MsgBeginUnlockingAllResponse): unknown;
            fromPartial(object: Partial<_114.MsgBeginUnlockingAllResponse>): _114.MsgBeginUnlockingAllResponse;
            fromSDK(object: _114.MsgBeginUnlockingAllResponseSDKType): _114.MsgBeginUnlockingAllResponse;
            toSDK(message: _114.MsgBeginUnlockingAllResponse): _114.MsgBeginUnlockingAllResponseSDKType;
            fromAmino(object: _114.MsgBeginUnlockingAllResponseAmino): _114.MsgBeginUnlockingAllResponse;
            toAmino(message: _114.MsgBeginUnlockingAllResponse): _114.MsgBeginUnlockingAllResponseAmino;
            fromAminoMsg(object: _114.MsgBeginUnlockingAllResponseAminoMsg): _114.MsgBeginUnlockingAllResponse;
            toAminoMsg(message: _114.MsgBeginUnlockingAllResponse): _114.MsgBeginUnlockingAllResponseAminoMsg;
            fromProtoMsg(message: _114.MsgBeginUnlockingAllResponseProtoMsg): _114.MsgBeginUnlockingAllResponse;
            toProto(message: _114.MsgBeginUnlockingAllResponse): Uint8Array;
            toProtoMsg(message: _114.MsgBeginUnlockingAllResponse): _114.MsgBeginUnlockingAllResponseProtoMsg;
        };
        MsgBeginUnlocking: {
            typeUrl: string;
            encode(message: _114.MsgBeginUnlocking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MsgBeginUnlocking;
            fromJSON(object: any): _114.MsgBeginUnlocking;
            toJSON(message: _114.MsgBeginUnlocking): unknown;
            fromPartial(object: Partial<_114.MsgBeginUnlocking>): _114.MsgBeginUnlocking;
            fromSDK(object: _114.MsgBeginUnlockingSDKType): _114.MsgBeginUnlocking;
            toSDK(message: _114.MsgBeginUnlocking): _114.MsgBeginUnlockingSDKType;
            fromAmino(object: _114.MsgBeginUnlockingAmino): _114.MsgBeginUnlocking;
            toAmino(message: _114.MsgBeginUnlocking): _114.MsgBeginUnlockingAmino;
            fromAminoMsg(object: _114.MsgBeginUnlockingAminoMsg): _114.MsgBeginUnlocking;
            toAminoMsg(message: _114.MsgBeginUnlocking): _114.MsgBeginUnlockingAminoMsg;
            fromProtoMsg(message: _114.MsgBeginUnlockingProtoMsg): _114.MsgBeginUnlocking;
            toProto(message: _114.MsgBeginUnlocking): Uint8Array;
            toProtoMsg(message: _114.MsgBeginUnlocking): _114.MsgBeginUnlockingProtoMsg;
        };
        MsgBeginUnlockingResponse: {
            typeUrl: string;
            encode(message: _114.MsgBeginUnlockingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MsgBeginUnlockingResponse;
            fromJSON(object: any): _114.MsgBeginUnlockingResponse;
            toJSON(message: _114.MsgBeginUnlockingResponse): unknown;
            fromPartial(object: Partial<_114.MsgBeginUnlockingResponse>): _114.MsgBeginUnlockingResponse;
            fromSDK(object: _114.MsgBeginUnlockingResponseSDKType): _114.MsgBeginUnlockingResponse;
            toSDK(message: _114.MsgBeginUnlockingResponse): _114.MsgBeginUnlockingResponseSDKType;
            fromAmino(object: _114.MsgBeginUnlockingResponseAmino): _114.MsgBeginUnlockingResponse;
            toAmino(message: _114.MsgBeginUnlockingResponse): _114.MsgBeginUnlockingResponseAmino;
            fromAminoMsg(object: _114.MsgBeginUnlockingResponseAminoMsg): _114.MsgBeginUnlockingResponse;
            toAminoMsg(message: _114.MsgBeginUnlockingResponse): _114.MsgBeginUnlockingResponseAminoMsg;
            fromProtoMsg(message: _114.MsgBeginUnlockingResponseProtoMsg): _114.MsgBeginUnlockingResponse;
            toProto(message: _114.MsgBeginUnlockingResponse): Uint8Array;
            toProtoMsg(message: _114.MsgBeginUnlockingResponse): _114.MsgBeginUnlockingResponseProtoMsg;
        };
        MsgExtendLockup: {
            typeUrl: string;
            encode(message: _114.MsgExtendLockup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MsgExtendLockup;
            fromJSON(object: any): _114.MsgExtendLockup;
            toJSON(message: _114.MsgExtendLockup): unknown;
            fromPartial(object: Partial<_114.MsgExtendLockup>): _114.MsgExtendLockup;
            fromSDK(object: _114.MsgExtendLockupSDKType): _114.MsgExtendLockup;
            toSDK(message: _114.MsgExtendLockup): _114.MsgExtendLockupSDKType;
            fromAmino(object: _114.MsgExtendLockupAmino): _114.MsgExtendLockup;
            toAmino(message: _114.MsgExtendLockup): _114.MsgExtendLockupAmino;
            fromAminoMsg(object: _114.MsgExtendLockupAminoMsg): _114.MsgExtendLockup;
            toAminoMsg(message: _114.MsgExtendLockup): _114.MsgExtendLockupAminoMsg;
            fromProtoMsg(message: _114.MsgExtendLockupProtoMsg): _114.MsgExtendLockup;
            toProto(message: _114.MsgExtendLockup): Uint8Array;
            toProtoMsg(message: _114.MsgExtendLockup): _114.MsgExtendLockupProtoMsg;
        };
        MsgExtendLockupResponse: {
            typeUrl: string;
            encode(message: _114.MsgExtendLockupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MsgExtendLockupResponse;
            fromJSON(object: any): _114.MsgExtendLockupResponse;
            toJSON(message: _114.MsgExtendLockupResponse): unknown;
            fromPartial(object: Partial<_114.MsgExtendLockupResponse>): _114.MsgExtendLockupResponse;
            fromSDK(object: _114.MsgExtendLockupResponseSDKType): _114.MsgExtendLockupResponse;
            toSDK(message: _114.MsgExtendLockupResponse): _114.MsgExtendLockupResponseSDKType;
            fromAmino(object: _114.MsgExtendLockupResponseAmino): _114.MsgExtendLockupResponse;
            toAmino(message: _114.MsgExtendLockupResponse): _114.MsgExtendLockupResponseAmino;
            fromAminoMsg(object: _114.MsgExtendLockupResponseAminoMsg): _114.MsgExtendLockupResponse;
            toAminoMsg(message: _114.MsgExtendLockupResponse): _114.MsgExtendLockupResponseAminoMsg;
            fromProtoMsg(message: _114.MsgExtendLockupResponseProtoMsg): _114.MsgExtendLockupResponse;
            toProto(message: _114.MsgExtendLockupResponse): Uint8Array;
            toProtoMsg(message: _114.MsgExtendLockupResponse): _114.MsgExtendLockupResponseProtoMsg;
        };
        MsgForceUnlock: {
            typeUrl: string;
            encode(message: _114.MsgForceUnlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MsgForceUnlock;
            fromJSON(object: any): _114.MsgForceUnlock;
            toJSON(message: _114.MsgForceUnlock): unknown;
            fromPartial(object: Partial<_114.MsgForceUnlock>): _114.MsgForceUnlock;
            fromSDK(object: _114.MsgForceUnlockSDKType): _114.MsgForceUnlock;
            toSDK(message: _114.MsgForceUnlock): _114.MsgForceUnlockSDKType;
            fromAmino(object: _114.MsgForceUnlockAmino): _114.MsgForceUnlock;
            toAmino(message: _114.MsgForceUnlock): _114.MsgForceUnlockAmino;
            fromAminoMsg(object: _114.MsgForceUnlockAminoMsg): _114.MsgForceUnlock;
            toAminoMsg(message: _114.MsgForceUnlock): _114.MsgForceUnlockAminoMsg;
            fromProtoMsg(message: _114.MsgForceUnlockProtoMsg): _114.MsgForceUnlock;
            toProto(message: _114.MsgForceUnlock): Uint8Array;
            toProtoMsg(message: _114.MsgForceUnlock): _114.MsgForceUnlockProtoMsg;
        };
        MsgForceUnlockResponse: {
            typeUrl: string;
            encode(message: _114.MsgForceUnlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MsgForceUnlockResponse;
            fromJSON(object: any): _114.MsgForceUnlockResponse;
            toJSON(message: _114.MsgForceUnlockResponse): unknown;
            fromPartial(object: Partial<_114.MsgForceUnlockResponse>): _114.MsgForceUnlockResponse;
            fromSDK(object: _114.MsgForceUnlockResponseSDKType): _114.MsgForceUnlockResponse;
            toSDK(message: _114.MsgForceUnlockResponse): _114.MsgForceUnlockResponseSDKType;
            fromAmino(object: _114.MsgForceUnlockResponseAmino): _114.MsgForceUnlockResponse;
            toAmino(message: _114.MsgForceUnlockResponse): _114.MsgForceUnlockResponseAmino;
            fromAminoMsg(object: _114.MsgForceUnlockResponseAminoMsg): _114.MsgForceUnlockResponse;
            toAminoMsg(message: _114.MsgForceUnlockResponse): _114.MsgForceUnlockResponseAminoMsg;
            fromProtoMsg(message: _114.MsgForceUnlockResponseProtoMsg): _114.MsgForceUnlockResponse;
            toProto(message: _114.MsgForceUnlockResponse): Uint8Array;
            toProtoMsg(message: _114.MsgForceUnlockResponse): _114.MsgForceUnlockResponseProtoMsg;
        };
        ModuleBalanceRequest: {
            typeUrl: string;
            encode(_: _113.ModuleBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.ModuleBalanceRequest;
            fromJSON(_: any): _113.ModuleBalanceRequest;
            toJSON(_: _113.ModuleBalanceRequest): unknown;
            fromPartial(_: Partial<_113.ModuleBalanceRequest>): _113.ModuleBalanceRequest;
            fromSDK(_: _113.ModuleBalanceRequestSDKType): _113.ModuleBalanceRequest;
            toSDK(_: _113.ModuleBalanceRequest): _113.ModuleBalanceRequestSDKType;
            fromAmino(_: _113.ModuleBalanceRequestAmino): _113.ModuleBalanceRequest;
            toAmino(_: _113.ModuleBalanceRequest): _113.ModuleBalanceRequestAmino;
            fromAminoMsg(object: _113.ModuleBalanceRequestAminoMsg): _113.ModuleBalanceRequest;
            toAminoMsg(message: _113.ModuleBalanceRequest): _113.ModuleBalanceRequestAminoMsg;
            fromProtoMsg(message: _113.ModuleBalanceRequestProtoMsg): _113.ModuleBalanceRequest;
            toProto(message: _113.ModuleBalanceRequest): Uint8Array;
            toProtoMsg(message: _113.ModuleBalanceRequest): _113.ModuleBalanceRequestProtoMsg;
        };
        ModuleBalanceResponse: {
            typeUrl: string;
            encode(message: _113.ModuleBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.ModuleBalanceResponse;
            fromJSON(object: any): _113.ModuleBalanceResponse;
            toJSON(message: _113.ModuleBalanceResponse): unknown;
            fromPartial(object: Partial<_113.ModuleBalanceResponse>): _113.ModuleBalanceResponse;
            fromSDK(object: _113.ModuleBalanceResponseSDKType): _113.ModuleBalanceResponse;
            toSDK(message: _113.ModuleBalanceResponse): _113.ModuleBalanceResponseSDKType;
            fromAmino(object: _113.ModuleBalanceResponseAmino): _113.ModuleBalanceResponse;
            toAmino(message: _113.ModuleBalanceResponse): _113.ModuleBalanceResponseAmino;
            fromAminoMsg(object: _113.ModuleBalanceResponseAminoMsg): _113.ModuleBalanceResponse;
            toAminoMsg(message: _113.ModuleBalanceResponse): _113.ModuleBalanceResponseAminoMsg;
            fromProtoMsg(message: _113.ModuleBalanceResponseProtoMsg): _113.ModuleBalanceResponse;
            toProto(message: _113.ModuleBalanceResponse): Uint8Array;
            toProtoMsg(message: _113.ModuleBalanceResponse): _113.ModuleBalanceResponseProtoMsg;
        };
        ModuleLockedAmountRequest: {
            typeUrl: string;
            encode(_: _113.ModuleLockedAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.ModuleLockedAmountRequest;
            fromJSON(_: any): _113.ModuleLockedAmountRequest;
            toJSON(_: _113.ModuleLockedAmountRequest): unknown;
            fromPartial(_: Partial<_113.ModuleLockedAmountRequest>): _113.ModuleLockedAmountRequest;
            fromSDK(_: _113.ModuleLockedAmountRequestSDKType): _113.ModuleLockedAmountRequest;
            toSDK(_: _113.ModuleLockedAmountRequest): _113.ModuleLockedAmountRequestSDKType;
            fromAmino(_: _113.ModuleLockedAmountRequestAmino): _113.ModuleLockedAmountRequest;
            toAmino(_: _113.ModuleLockedAmountRequest): _113.ModuleLockedAmountRequestAmino;
            fromAminoMsg(object: _113.ModuleLockedAmountRequestAminoMsg): _113.ModuleLockedAmountRequest;
            toAminoMsg(message: _113.ModuleLockedAmountRequest): _113.ModuleLockedAmountRequestAminoMsg;
            fromProtoMsg(message: _113.ModuleLockedAmountRequestProtoMsg): _113.ModuleLockedAmountRequest;
            toProto(message: _113.ModuleLockedAmountRequest): Uint8Array;
            toProtoMsg(message: _113.ModuleLockedAmountRequest): _113.ModuleLockedAmountRequestProtoMsg;
        };
        ModuleLockedAmountResponse: {
            typeUrl: string;
            encode(message: _113.ModuleLockedAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.ModuleLockedAmountResponse;
            fromJSON(object: any): _113.ModuleLockedAmountResponse;
            toJSON(message: _113.ModuleLockedAmountResponse): unknown;
            fromPartial(object: Partial<_113.ModuleLockedAmountResponse>): _113.ModuleLockedAmountResponse;
            fromSDK(object: _113.ModuleLockedAmountResponseSDKType): _113.ModuleLockedAmountResponse;
            toSDK(message: _113.ModuleLockedAmountResponse): _113.ModuleLockedAmountResponseSDKType;
            fromAmino(object: _113.ModuleLockedAmountResponseAmino): _113.ModuleLockedAmountResponse;
            toAmino(message: _113.ModuleLockedAmountResponse): _113.ModuleLockedAmountResponseAmino;
            fromAminoMsg(object: _113.ModuleLockedAmountResponseAminoMsg): _113.ModuleLockedAmountResponse;
            toAminoMsg(message: _113.ModuleLockedAmountResponse): _113.ModuleLockedAmountResponseAminoMsg;
            fromProtoMsg(message: _113.ModuleLockedAmountResponseProtoMsg): _113.ModuleLockedAmountResponse;
            toProto(message: _113.ModuleLockedAmountResponse): Uint8Array;
            toProtoMsg(message: _113.ModuleLockedAmountResponse): _113.ModuleLockedAmountResponseProtoMsg;
        };
        AccountUnlockableCoinsRequest: {
            typeUrl: string;
            encode(message: _113.AccountUnlockableCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _113.AccountUnlockableCoinsRequest;
            toJSON(message: _113.AccountUnlockableCoinsRequest): unknown;
            fromPartial(object: Partial<_113.AccountUnlockableCoinsRequest>): _113.AccountUnlockableCoinsRequest;
            fromSDK(object: _113.AccountUnlockableCoinsRequestSDKType): _113.AccountUnlockableCoinsRequest;
            toSDK(message: _113.AccountUnlockableCoinsRequest): _113.AccountUnlockableCoinsRequestSDKType;
            fromAmino(object: _113.AccountUnlockableCoinsRequestAmino): _113.AccountUnlockableCoinsRequest;
            toAmino(message: _113.AccountUnlockableCoinsRequest): _113.AccountUnlockableCoinsRequestAmino;
            fromAminoMsg(object: _113.AccountUnlockableCoinsRequestAminoMsg): _113.AccountUnlockableCoinsRequest;
            toAminoMsg(message: _113.AccountUnlockableCoinsRequest): _113.AccountUnlockableCoinsRequestAminoMsg;
            fromProtoMsg(message: _113.AccountUnlockableCoinsRequestProtoMsg): _113.AccountUnlockableCoinsRequest;
            toProto(message: _113.AccountUnlockableCoinsRequest): Uint8Array;
            toProtoMsg(message: _113.AccountUnlockableCoinsRequest): _113.AccountUnlockableCoinsRequestProtoMsg;
        };
        AccountUnlockableCoinsResponse: {
            typeUrl: string;
            encode(message: _113.AccountUnlockableCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _113.AccountUnlockableCoinsResponse;
            toJSON(message: _113.AccountUnlockableCoinsResponse): unknown;
            fromPartial(object: Partial<_113.AccountUnlockableCoinsResponse>): _113.AccountUnlockableCoinsResponse;
            fromSDK(object: _113.AccountUnlockableCoinsResponseSDKType): _113.AccountUnlockableCoinsResponse;
            toSDK(message: _113.AccountUnlockableCoinsResponse): _113.AccountUnlockableCoinsResponseSDKType;
            fromAmino(object: _113.AccountUnlockableCoinsResponseAmino): _113.AccountUnlockableCoinsResponse;
            toAmino(message: _113.AccountUnlockableCoinsResponse): _113.AccountUnlockableCoinsResponseAmino;
            fromAminoMsg(object: _113.AccountUnlockableCoinsResponseAminoMsg): _113.AccountUnlockableCoinsResponse;
            toAminoMsg(message: _113.AccountUnlockableCoinsResponse): _113.AccountUnlockableCoinsResponseAminoMsg;
            fromProtoMsg(message: _113.AccountUnlockableCoinsResponseProtoMsg): _113.AccountUnlockableCoinsResponse;
            toProto(message: _113.AccountUnlockableCoinsResponse): Uint8Array;
            toProtoMsg(message: _113.AccountUnlockableCoinsResponse): _113.AccountUnlockableCoinsResponseProtoMsg;
        };
        AccountUnlockingCoinsRequest: {
            typeUrl: string;
            encode(message: _113.AccountUnlockingCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _113.AccountUnlockingCoinsRequest;
            toJSON(message: _113.AccountUnlockingCoinsRequest): unknown;
            fromPartial(object: Partial<_113.AccountUnlockingCoinsRequest>): _113.AccountUnlockingCoinsRequest;
            fromSDK(object: _113.AccountUnlockingCoinsRequestSDKType): _113.AccountUnlockingCoinsRequest;
            toSDK(message: _113.AccountUnlockingCoinsRequest): _113.AccountUnlockingCoinsRequestSDKType;
            fromAmino(object: _113.AccountUnlockingCoinsRequestAmino): _113.AccountUnlockingCoinsRequest;
            toAmino(message: _113.AccountUnlockingCoinsRequest): _113.AccountUnlockingCoinsRequestAmino;
            fromAminoMsg(object: _113.AccountUnlockingCoinsRequestAminoMsg): _113.AccountUnlockingCoinsRequest;
            toAminoMsg(message: _113.AccountUnlockingCoinsRequest): _113.AccountUnlockingCoinsRequestAminoMsg;
            fromProtoMsg(message: _113.AccountUnlockingCoinsRequestProtoMsg): _113.AccountUnlockingCoinsRequest;
            toProto(message: _113.AccountUnlockingCoinsRequest): Uint8Array;
            toProtoMsg(message: _113.AccountUnlockingCoinsRequest): _113.AccountUnlockingCoinsRequestProtoMsg;
        };
        AccountUnlockingCoinsResponse: {
            typeUrl: string;
            encode(message: _113.AccountUnlockingCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _113.AccountUnlockingCoinsResponse;
            toJSON(message: _113.AccountUnlockingCoinsResponse): unknown;
            fromPartial(object: Partial<_113.AccountUnlockingCoinsResponse>): _113.AccountUnlockingCoinsResponse;
            fromSDK(object: _113.AccountUnlockingCoinsResponseSDKType): _113.AccountUnlockingCoinsResponse;
            toSDK(message: _113.AccountUnlockingCoinsResponse): _113.AccountUnlockingCoinsResponseSDKType;
            fromAmino(object: _113.AccountUnlockingCoinsResponseAmino): _113.AccountUnlockingCoinsResponse;
            toAmino(message: _113.AccountUnlockingCoinsResponse): _113.AccountUnlockingCoinsResponseAmino;
            fromAminoMsg(object: _113.AccountUnlockingCoinsResponseAminoMsg): _113.AccountUnlockingCoinsResponse;
            toAminoMsg(message: _113.AccountUnlockingCoinsResponse): _113.AccountUnlockingCoinsResponseAminoMsg;
            fromProtoMsg(message: _113.AccountUnlockingCoinsResponseProtoMsg): _113.AccountUnlockingCoinsResponse;
            toProto(message: _113.AccountUnlockingCoinsResponse): Uint8Array;
            toProtoMsg(message: _113.AccountUnlockingCoinsResponse): _113.AccountUnlockingCoinsResponseProtoMsg;
        };
        AccountLockedCoinsRequest: {
            typeUrl: string;
            encode(message: _113.AccountLockedCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedCoinsRequest;
            fromJSON(object: any): _113.AccountLockedCoinsRequest;
            toJSON(message: _113.AccountLockedCoinsRequest): unknown;
            fromPartial(object: Partial<_113.AccountLockedCoinsRequest>): _113.AccountLockedCoinsRequest;
            fromSDK(object: _113.AccountLockedCoinsRequestSDKType): _113.AccountLockedCoinsRequest;
            toSDK(message: _113.AccountLockedCoinsRequest): _113.AccountLockedCoinsRequestSDKType;
            fromAmino(object: _113.AccountLockedCoinsRequestAmino): _113.AccountLockedCoinsRequest;
            toAmino(message: _113.AccountLockedCoinsRequest): _113.AccountLockedCoinsRequestAmino;
            fromAminoMsg(object: _113.AccountLockedCoinsRequestAminoMsg): _113.AccountLockedCoinsRequest;
            toAminoMsg(message: _113.AccountLockedCoinsRequest): _113.AccountLockedCoinsRequestAminoMsg;
            fromProtoMsg(message: _113.AccountLockedCoinsRequestProtoMsg): _113.AccountLockedCoinsRequest;
            toProto(message: _113.AccountLockedCoinsRequest): Uint8Array;
            toProtoMsg(message: _113.AccountLockedCoinsRequest): _113.AccountLockedCoinsRequestProtoMsg;
        };
        AccountLockedCoinsResponse: {
            typeUrl: string;
            encode(message: _113.AccountLockedCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedCoinsResponse;
            fromJSON(object: any): _113.AccountLockedCoinsResponse;
            toJSON(message: _113.AccountLockedCoinsResponse): unknown;
            fromPartial(object: Partial<_113.AccountLockedCoinsResponse>): _113.AccountLockedCoinsResponse;
            fromSDK(object: _113.AccountLockedCoinsResponseSDKType): _113.AccountLockedCoinsResponse;
            toSDK(message: _113.AccountLockedCoinsResponse): _113.AccountLockedCoinsResponseSDKType;
            fromAmino(object: _113.AccountLockedCoinsResponseAmino): _113.AccountLockedCoinsResponse;
            toAmino(message: _113.AccountLockedCoinsResponse): _113.AccountLockedCoinsResponseAmino;
            fromAminoMsg(object: _113.AccountLockedCoinsResponseAminoMsg): _113.AccountLockedCoinsResponse;
            toAminoMsg(message: _113.AccountLockedCoinsResponse): _113.AccountLockedCoinsResponseAminoMsg;
            fromProtoMsg(message: _113.AccountLockedCoinsResponseProtoMsg): _113.AccountLockedCoinsResponse;
            toProto(message: _113.AccountLockedCoinsResponse): Uint8Array;
            toProtoMsg(message: _113.AccountLockedCoinsResponse): _113.AccountLockedCoinsResponseProtoMsg;
        };
        AccountLockedPastTimeRequest: {
            typeUrl: string;
            encode(message: _113.AccountLockedPastTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedPastTimeRequest;
            fromJSON(object: any): _113.AccountLockedPastTimeRequest;
            toJSON(message: _113.AccountLockedPastTimeRequest): unknown;
            fromPartial(object: Partial<_113.AccountLockedPastTimeRequest>): _113.AccountLockedPastTimeRequest;
            fromSDK(object: _113.AccountLockedPastTimeRequestSDKType): _113.AccountLockedPastTimeRequest;
            toSDK(message: _113.AccountLockedPastTimeRequest): _113.AccountLockedPastTimeRequestSDKType;
            fromAmino(object: _113.AccountLockedPastTimeRequestAmino): _113.AccountLockedPastTimeRequest;
            toAmino(message: _113.AccountLockedPastTimeRequest): _113.AccountLockedPastTimeRequestAmino;
            fromAminoMsg(object: _113.AccountLockedPastTimeRequestAminoMsg): _113.AccountLockedPastTimeRequest;
            toAminoMsg(message: _113.AccountLockedPastTimeRequest): _113.AccountLockedPastTimeRequestAminoMsg;
            fromProtoMsg(message: _113.AccountLockedPastTimeRequestProtoMsg): _113.AccountLockedPastTimeRequest;
            toProto(message: _113.AccountLockedPastTimeRequest): Uint8Array;
            toProtoMsg(message: _113.AccountLockedPastTimeRequest): _113.AccountLockedPastTimeRequestProtoMsg;
        };
        AccountLockedPastTimeResponse: {
            typeUrl: string;
            encode(message: _113.AccountLockedPastTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedPastTimeResponse;
            fromJSON(object: any): _113.AccountLockedPastTimeResponse;
            toJSON(message: _113.AccountLockedPastTimeResponse): unknown;
            fromPartial(object: Partial<_113.AccountLockedPastTimeResponse>): _113.AccountLockedPastTimeResponse;
            fromSDK(object: _113.AccountLockedPastTimeResponseSDKType): _113.AccountLockedPastTimeResponse;
            toSDK(message: _113.AccountLockedPastTimeResponse): _113.AccountLockedPastTimeResponseSDKType;
            fromAmino(object: _113.AccountLockedPastTimeResponseAmino): _113.AccountLockedPastTimeResponse;
            toAmino(message: _113.AccountLockedPastTimeResponse): _113.AccountLockedPastTimeResponseAmino;
            fromAminoMsg(object: _113.AccountLockedPastTimeResponseAminoMsg): _113.AccountLockedPastTimeResponse;
            toAminoMsg(message: _113.AccountLockedPastTimeResponse): _113.AccountLockedPastTimeResponseAminoMsg;
            fromProtoMsg(message: _113.AccountLockedPastTimeResponseProtoMsg): _113.AccountLockedPastTimeResponse;
            toProto(message: _113.AccountLockedPastTimeResponse): Uint8Array;
            toProtoMsg(message: _113.AccountLockedPastTimeResponse): _113.AccountLockedPastTimeResponseProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _113.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _113.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _113.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial(object: Partial<_113.AccountLockedPastTimeNotUnlockingOnlyRequest>): _113.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromSDK(object: _113.AccountLockedPastTimeNotUnlockingOnlyRequestSDKType): _113.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toSDK(message: _113.AccountLockedPastTimeNotUnlockingOnlyRequest): _113.AccountLockedPastTimeNotUnlockingOnlyRequestSDKType;
            fromAmino(object: _113.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _113.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _113.AccountLockedPastTimeNotUnlockingOnlyRequest): _113.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _113.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): _113.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAminoMsg(message: _113.AccountLockedPastTimeNotUnlockingOnlyRequest): _113.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _113.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): _113.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toProto(message: _113.AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _113.AccountLockedPastTimeNotUnlockingOnlyRequest): _113.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _113.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _113.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _113.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial(object: Partial<_113.AccountLockedPastTimeNotUnlockingOnlyResponse>): _113.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromSDK(object: _113.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType): _113.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toSDK(message: _113.AccountLockedPastTimeNotUnlockingOnlyResponse): _113.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType;
            fromAmino(object: _113.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _113.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _113.AccountLockedPastTimeNotUnlockingOnlyResponse): _113.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _113.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): _113.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAminoMsg(message: _113.AccountLockedPastTimeNotUnlockingOnlyResponse): _113.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _113.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): _113.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toProto(message: _113.AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _113.AccountLockedPastTimeNotUnlockingOnlyResponse): _113.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
        };
        AccountUnlockedBeforeTimeRequest: {
            typeUrl: string;
            encode(message: _113.AccountUnlockedBeforeTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _113.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _113.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial(object: Partial<_113.AccountUnlockedBeforeTimeRequest>): _113.AccountUnlockedBeforeTimeRequest;
            fromSDK(object: _113.AccountUnlockedBeforeTimeRequestSDKType): _113.AccountUnlockedBeforeTimeRequest;
            toSDK(message: _113.AccountUnlockedBeforeTimeRequest): _113.AccountUnlockedBeforeTimeRequestSDKType;
            fromAmino(object: _113.AccountUnlockedBeforeTimeRequestAmino): _113.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _113.AccountUnlockedBeforeTimeRequest): _113.AccountUnlockedBeforeTimeRequestAmino;
            fromAminoMsg(object: _113.AccountUnlockedBeforeTimeRequestAminoMsg): _113.AccountUnlockedBeforeTimeRequest;
            toAminoMsg(message: _113.AccountUnlockedBeforeTimeRequest): _113.AccountUnlockedBeforeTimeRequestAminoMsg;
            fromProtoMsg(message: _113.AccountUnlockedBeforeTimeRequestProtoMsg): _113.AccountUnlockedBeforeTimeRequest;
            toProto(message: _113.AccountUnlockedBeforeTimeRequest): Uint8Array;
            toProtoMsg(message: _113.AccountUnlockedBeforeTimeRequest): _113.AccountUnlockedBeforeTimeRequestProtoMsg;
        };
        AccountUnlockedBeforeTimeResponse: {
            typeUrl: string;
            encode(message: _113.AccountUnlockedBeforeTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _113.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _113.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial(object: Partial<_113.AccountUnlockedBeforeTimeResponse>): _113.AccountUnlockedBeforeTimeResponse;
            fromSDK(object: _113.AccountUnlockedBeforeTimeResponseSDKType): _113.AccountUnlockedBeforeTimeResponse;
            toSDK(message: _113.AccountUnlockedBeforeTimeResponse): _113.AccountUnlockedBeforeTimeResponseSDKType;
            fromAmino(object: _113.AccountUnlockedBeforeTimeResponseAmino): _113.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _113.AccountUnlockedBeforeTimeResponse): _113.AccountUnlockedBeforeTimeResponseAmino;
            fromAminoMsg(object: _113.AccountUnlockedBeforeTimeResponseAminoMsg): _113.AccountUnlockedBeforeTimeResponse;
            toAminoMsg(message: _113.AccountUnlockedBeforeTimeResponse): _113.AccountUnlockedBeforeTimeResponseAminoMsg;
            fromProtoMsg(message: _113.AccountUnlockedBeforeTimeResponseProtoMsg): _113.AccountUnlockedBeforeTimeResponse;
            toProto(message: _113.AccountUnlockedBeforeTimeResponse): Uint8Array;
            toProtoMsg(message: _113.AccountUnlockedBeforeTimeResponse): _113.AccountUnlockedBeforeTimeResponseProtoMsg;
        };
        AccountLockedPastTimeDenomRequest: {
            typeUrl: string;
            encode(message: _113.AccountLockedPastTimeDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _113.AccountLockedPastTimeDenomRequest;
            toJSON(message: _113.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial(object: Partial<_113.AccountLockedPastTimeDenomRequest>): _113.AccountLockedPastTimeDenomRequest;
            fromSDK(object: _113.AccountLockedPastTimeDenomRequestSDKType): _113.AccountLockedPastTimeDenomRequest;
            toSDK(message: _113.AccountLockedPastTimeDenomRequest): _113.AccountLockedPastTimeDenomRequestSDKType;
            fromAmino(object: _113.AccountLockedPastTimeDenomRequestAmino): _113.AccountLockedPastTimeDenomRequest;
            toAmino(message: _113.AccountLockedPastTimeDenomRequest): _113.AccountLockedPastTimeDenomRequestAmino;
            fromAminoMsg(object: _113.AccountLockedPastTimeDenomRequestAminoMsg): _113.AccountLockedPastTimeDenomRequest;
            toAminoMsg(message: _113.AccountLockedPastTimeDenomRequest): _113.AccountLockedPastTimeDenomRequestAminoMsg;
            fromProtoMsg(message: _113.AccountLockedPastTimeDenomRequestProtoMsg): _113.AccountLockedPastTimeDenomRequest;
            toProto(message: _113.AccountLockedPastTimeDenomRequest): Uint8Array;
            toProtoMsg(message: _113.AccountLockedPastTimeDenomRequest): _113.AccountLockedPastTimeDenomRequestProtoMsg;
        };
        AccountLockedPastTimeDenomResponse: {
            typeUrl: string;
            encode(message: _113.AccountLockedPastTimeDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _113.AccountLockedPastTimeDenomResponse;
            toJSON(message: _113.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial(object: Partial<_113.AccountLockedPastTimeDenomResponse>): _113.AccountLockedPastTimeDenomResponse;
            fromSDK(object: _113.AccountLockedPastTimeDenomResponseSDKType): _113.AccountLockedPastTimeDenomResponse;
            toSDK(message: _113.AccountLockedPastTimeDenomResponse): _113.AccountLockedPastTimeDenomResponseSDKType;
            fromAmino(object: _113.AccountLockedPastTimeDenomResponseAmino): _113.AccountLockedPastTimeDenomResponse;
            toAmino(message: _113.AccountLockedPastTimeDenomResponse): _113.AccountLockedPastTimeDenomResponseAmino;
            fromAminoMsg(object: _113.AccountLockedPastTimeDenomResponseAminoMsg): _113.AccountLockedPastTimeDenomResponse;
            toAminoMsg(message: _113.AccountLockedPastTimeDenomResponse): _113.AccountLockedPastTimeDenomResponseAminoMsg;
            fromProtoMsg(message: _113.AccountLockedPastTimeDenomResponseProtoMsg): _113.AccountLockedPastTimeDenomResponse;
            toProto(message: _113.AccountLockedPastTimeDenomResponse): Uint8Array;
            toProtoMsg(message: _113.AccountLockedPastTimeDenomResponse): _113.AccountLockedPastTimeDenomResponseProtoMsg;
        };
        LockedDenomRequest: {
            typeUrl: string;
            encode(message: _113.LockedDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.LockedDenomRequest;
            fromJSON(object: any): _113.LockedDenomRequest;
            toJSON(message: _113.LockedDenomRequest): unknown;
            fromPartial(object: Partial<_113.LockedDenomRequest>): _113.LockedDenomRequest;
            fromSDK(object: _113.LockedDenomRequestSDKType): _113.LockedDenomRequest;
            toSDK(message: _113.LockedDenomRequest): _113.LockedDenomRequestSDKType;
            fromAmino(object: _113.LockedDenomRequestAmino): _113.LockedDenomRequest;
            toAmino(message: _113.LockedDenomRequest): _113.LockedDenomRequestAmino;
            fromAminoMsg(object: _113.LockedDenomRequestAminoMsg): _113.LockedDenomRequest;
            toAminoMsg(message: _113.LockedDenomRequest): _113.LockedDenomRequestAminoMsg;
            fromProtoMsg(message: _113.LockedDenomRequestProtoMsg): _113.LockedDenomRequest;
            toProto(message: _113.LockedDenomRequest): Uint8Array;
            toProtoMsg(message: _113.LockedDenomRequest): _113.LockedDenomRequestProtoMsg;
        };
        LockedDenomResponse: {
            typeUrl: string;
            encode(message: _113.LockedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.LockedDenomResponse;
            fromJSON(object: any): _113.LockedDenomResponse;
            toJSON(message: _113.LockedDenomResponse): unknown;
            fromPartial(object: Partial<_113.LockedDenomResponse>): _113.LockedDenomResponse;
            fromSDK(object: _113.LockedDenomResponseSDKType): _113.LockedDenomResponse;
            toSDK(message: _113.LockedDenomResponse): _113.LockedDenomResponseSDKType;
            fromAmino(object: _113.LockedDenomResponseAmino): _113.LockedDenomResponse;
            toAmino(message: _113.LockedDenomResponse): _113.LockedDenomResponseAmino;
            fromAminoMsg(object: _113.LockedDenomResponseAminoMsg): _113.LockedDenomResponse;
            toAminoMsg(message: _113.LockedDenomResponse): _113.LockedDenomResponseAminoMsg;
            fromProtoMsg(message: _113.LockedDenomResponseProtoMsg): _113.LockedDenomResponse;
            toProto(message: _113.LockedDenomResponse): Uint8Array;
            toProtoMsg(message: _113.LockedDenomResponse): _113.LockedDenomResponseProtoMsg;
        };
        LockedRequest: {
            typeUrl: string;
            encode(message: _113.LockedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.LockedRequest;
            fromJSON(object: any): _113.LockedRequest;
            toJSON(message: _113.LockedRequest): unknown;
            fromPartial(object: Partial<_113.LockedRequest>): _113.LockedRequest;
            fromSDK(object: _113.LockedRequestSDKType): _113.LockedRequest;
            toSDK(message: _113.LockedRequest): _113.LockedRequestSDKType;
            fromAmino(object: _113.LockedRequestAmino): _113.LockedRequest;
            toAmino(message: _113.LockedRequest): _113.LockedRequestAmino;
            fromAminoMsg(object: _113.LockedRequestAminoMsg): _113.LockedRequest;
            toAminoMsg(message: _113.LockedRequest): _113.LockedRequestAminoMsg;
            fromProtoMsg(message: _113.LockedRequestProtoMsg): _113.LockedRequest;
            toProto(message: _113.LockedRequest): Uint8Array;
            toProtoMsg(message: _113.LockedRequest): _113.LockedRequestProtoMsg;
        };
        LockedResponse: {
            typeUrl: string;
            encode(message: _113.LockedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.LockedResponse;
            fromJSON(object: any): _113.LockedResponse;
            toJSON(message: _113.LockedResponse): unknown;
            fromPartial(object: Partial<_113.LockedResponse>): _113.LockedResponse;
            fromSDK(object: _113.LockedResponseSDKType): _113.LockedResponse;
            toSDK(message: _113.LockedResponse): _113.LockedResponseSDKType;
            fromAmino(object: _113.LockedResponseAmino): _113.LockedResponse;
            toAmino(message: _113.LockedResponse): _113.LockedResponseAmino;
            fromAminoMsg(object: _113.LockedResponseAminoMsg): _113.LockedResponse;
            toAminoMsg(message: _113.LockedResponse): _113.LockedResponseAminoMsg;
            fromProtoMsg(message: _113.LockedResponseProtoMsg): _113.LockedResponse;
            toProto(message: _113.LockedResponse): Uint8Array;
            toProtoMsg(message: _113.LockedResponse): _113.LockedResponseProtoMsg;
        };
        SyntheticLockupsByLockupIDRequest: {
            typeUrl: string;
            encode(message: _113.SyntheticLockupsByLockupIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _113.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _113.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial(object: Partial<_113.SyntheticLockupsByLockupIDRequest>): _113.SyntheticLockupsByLockupIDRequest;
            fromSDK(object: _113.SyntheticLockupsByLockupIDRequestSDKType): _113.SyntheticLockupsByLockupIDRequest;
            toSDK(message: _113.SyntheticLockupsByLockupIDRequest): _113.SyntheticLockupsByLockupIDRequestSDKType;
            fromAmino(object: _113.SyntheticLockupsByLockupIDRequestAmino): _113.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _113.SyntheticLockupsByLockupIDRequest): _113.SyntheticLockupsByLockupIDRequestAmino;
            fromAminoMsg(object: _113.SyntheticLockupsByLockupIDRequestAminoMsg): _113.SyntheticLockupsByLockupIDRequest;
            toAminoMsg(message: _113.SyntheticLockupsByLockupIDRequest): _113.SyntheticLockupsByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _113.SyntheticLockupsByLockupIDRequestProtoMsg): _113.SyntheticLockupsByLockupIDRequest;
            toProto(message: _113.SyntheticLockupsByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _113.SyntheticLockupsByLockupIDRequest): _113.SyntheticLockupsByLockupIDRequestProtoMsg;
        };
        SyntheticLockupsByLockupIDResponse: {
            typeUrl: string;
            encode(message: _113.SyntheticLockupsByLockupIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _113.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _113.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial(object: Partial<_113.SyntheticLockupsByLockupIDResponse>): _113.SyntheticLockupsByLockupIDResponse;
            fromSDK(object: _113.SyntheticLockupsByLockupIDResponseSDKType): _113.SyntheticLockupsByLockupIDResponse;
            toSDK(message: _113.SyntheticLockupsByLockupIDResponse): _113.SyntheticLockupsByLockupIDResponseSDKType;
            fromAmino(object: _113.SyntheticLockupsByLockupIDResponseAmino): _113.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _113.SyntheticLockupsByLockupIDResponse): _113.SyntheticLockupsByLockupIDResponseAmino;
            fromAminoMsg(object: _113.SyntheticLockupsByLockupIDResponseAminoMsg): _113.SyntheticLockupsByLockupIDResponse;
            toAminoMsg(message: _113.SyntheticLockupsByLockupIDResponse): _113.SyntheticLockupsByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _113.SyntheticLockupsByLockupIDResponseProtoMsg): _113.SyntheticLockupsByLockupIDResponse;
            toProto(message: _113.SyntheticLockupsByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _113.SyntheticLockupsByLockupIDResponse): _113.SyntheticLockupsByLockupIDResponseProtoMsg;
        };
        AccountLockedLongerDurationRequest: {
            typeUrl: string;
            encode(message: _113.AccountLockedLongerDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _113.AccountLockedLongerDurationRequest;
            toJSON(message: _113.AccountLockedLongerDurationRequest): unknown;
            fromPartial(object: Partial<_113.AccountLockedLongerDurationRequest>): _113.AccountLockedLongerDurationRequest;
            fromSDK(object: _113.AccountLockedLongerDurationRequestSDKType): _113.AccountLockedLongerDurationRequest;
            toSDK(message: _113.AccountLockedLongerDurationRequest): _113.AccountLockedLongerDurationRequestSDKType;
            fromAmino(object: _113.AccountLockedLongerDurationRequestAmino): _113.AccountLockedLongerDurationRequest;
            toAmino(message: _113.AccountLockedLongerDurationRequest): _113.AccountLockedLongerDurationRequestAmino;
            fromAminoMsg(object: _113.AccountLockedLongerDurationRequestAminoMsg): _113.AccountLockedLongerDurationRequest;
            toAminoMsg(message: _113.AccountLockedLongerDurationRequest): _113.AccountLockedLongerDurationRequestAminoMsg;
            fromProtoMsg(message: _113.AccountLockedLongerDurationRequestProtoMsg): _113.AccountLockedLongerDurationRequest;
            toProto(message: _113.AccountLockedLongerDurationRequest): Uint8Array;
            toProtoMsg(message: _113.AccountLockedLongerDurationRequest): _113.AccountLockedLongerDurationRequestProtoMsg;
        };
        AccountLockedLongerDurationResponse: {
            typeUrl: string;
            encode(message: _113.AccountLockedLongerDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _113.AccountLockedLongerDurationResponse;
            toJSON(message: _113.AccountLockedLongerDurationResponse): unknown;
            fromPartial(object: Partial<_113.AccountLockedLongerDurationResponse>): _113.AccountLockedLongerDurationResponse;
            fromSDK(object: _113.AccountLockedLongerDurationResponseSDKType): _113.AccountLockedLongerDurationResponse;
            toSDK(message: _113.AccountLockedLongerDurationResponse): _113.AccountLockedLongerDurationResponseSDKType;
            fromAmino(object: _113.AccountLockedLongerDurationResponseAmino): _113.AccountLockedLongerDurationResponse;
            toAmino(message: _113.AccountLockedLongerDurationResponse): _113.AccountLockedLongerDurationResponseAmino;
            fromAminoMsg(object: _113.AccountLockedLongerDurationResponseAminoMsg): _113.AccountLockedLongerDurationResponse;
            toAminoMsg(message: _113.AccountLockedLongerDurationResponse): _113.AccountLockedLongerDurationResponseAminoMsg;
            fromProtoMsg(message: _113.AccountLockedLongerDurationResponseProtoMsg): _113.AccountLockedLongerDurationResponse;
            toProto(message: _113.AccountLockedLongerDurationResponse): Uint8Array;
            toProtoMsg(message: _113.AccountLockedLongerDurationResponse): _113.AccountLockedLongerDurationResponseProtoMsg;
        };
        AccountLockedDurationRequest: {
            typeUrl: string;
            encode(message: _113.AccountLockedDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedDurationRequest;
            fromJSON(object: any): _113.AccountLockedDurationRequest;
            toJSON(message: _113.AccountLockedDurationRequest): unknown;
            fromPartial(object: Partial<_113.AccountLockedDurationRequest>): _113.AccountLockedDurationRequest;
            fromSDK(object: _113.AccountLockedDurationRequestSDKType): _113.AccountLockedDurationRequest;
            toSDK(message: _113.AccountLockedDurationRequest): _113.AccountLockedDurationRequestSDKType;
            fromAmino(object: _113.AccountLockedDurationRequestAmino): _113.AccountLockedDurationRequest;
            toAmino(message: _113.AccountLockedDurationRequest): _113.AccountLockedDurationRequestAmino;
            fromAminoMsg(object: _113.AccountLockedDurationRequestAminoMsg): _113.AccountLockedDurationRequest;
            toAminoMsg(message: _113.AccountLockedDurationRequest): _113.AccountLockedDurationRequestAminoMsg;
            fromProtoMsg(message: _113.AccountLockedDurationRequestProtoMsg): _113.AccountLockedDurationRequest;
            toProto(message: _113.AccountLockedDurationRequest): Uint8Array;
            toProtoMsg(message: _113.AccountLockedDurationRequest): _113.AccountLockedDurationRequestProtoMsg;
        };
        AccountLockedDurationResponse: {
            typeUrl: string;
            encode(message: _113.AccountLockedDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedDurationResponse;
            fromJSON(object: any): _113.AccountLockedDurationResponse;
            toJSON(message: _113.AccountLockedDurationResponse): unknown;
            fromPartial(object: Partial<_113.AccountLockedDurationResponse>): _113.AccountLockedDurationResponse;
            fromSDK(object: _113.AccountLockedDurationResponseSDKType): _113.AccountLockedDurationResponse;
            toSDK(message: _113.AccountLockedDurationResponse): _113.AccountLockedDurationResponseSDKType;
            fromAmino(object: _113.AccountLockedDurationResponseAmino): _113.AccountLockedDurationResponse;
            toAmino(message: _113.AccountLockedDurationResponse): _113.AccountLockedDurationResponseAmino;
            fromAminoMsg(object: _113.AccountLockedDurationResponseAminoMsg): _113.AccountLockedDurationResponse;
            toAminoMsg(message: _113.AccountLockedDurationResponse): _113.AccountLockedDurationResponseAminoMsg;
            fromProtoMsg(message: _113.AccountLockedDurationResponseProtoMsg): _113.AccountLockedDurationResponse;
            toProto(message: _113.AccountLockedDurationResponse): Uint8Array;
            toProtoMsg(message: _113.AccountLockedDurationResponse): _113.AccountLockedDurationResponseProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _113.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _113.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _113.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial(object: Partial<_113.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _113.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromSDK(object: _113.AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType): _113.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toSDK(message: _113.AccountLockedLongerDurationNotUnlockingOnlyRequest): _113.AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType;
            fromAmino(object: _113.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _113.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _113.AccountLockedLongerDurationNotUnlockingOnlyRequest): _113.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _113.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): _113.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAminoMsg(message: _113.AccountLockedLongerDurationNotUnlockingOnlyRequest): _113.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _113.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): _113.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toProto(message: _113.AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _113.AccountLockedLongerDurationNotUnlockingOnlyRequest): _113.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _113.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _113.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _113.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial(object: Partial<_113.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _113.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromSDK(object: _113.AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType): _113.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toSDK(message: _113.AccountLockedLongerDurationNotUnlockingOnlyResponse): _113.AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType;
            fromAmino(object: _113.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _113.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _113.AccountLockedLongerDurationNotUnlockingOnlyResponse): _113.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _113.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): _113.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAminoMsg(message: _113.AccountLockedLongerDurationNotUnlockingOnlyResponse): _113.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _113.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): _113.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toProto(message: _113.AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _113.AccountLockedLongerDurationNotUnlockingOnlyResponse): _113.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
        };
        AccountLockedLongerDurationDenomRequest: {
            typeUrl: string;
            encode(message: _113.AccountLockedLongerDurationDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _113.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _113.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial(object: Partial<_113.AccountLockedLongerDurationDenomRequest>): _113.AccountLockedLongerDurationDenomRequest;
            fromSDK(object: _113.AccountLockedLongerDurationDenomRequestSDKType): _113.AccountLockedLongerDurationDenomRequest;
            toSDK(message: _113.AccountLockedLongerDurationDenomRequest): _113.AccountLockedLongerDurationDenomRequestSDKType;
            fromAmino(object: _113.AccountLockedLongerDurationDenomRequestAmino): _113.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _113.AccountLockedLongerDurationDenomRequest): _113.AccountLockedLongerDurationDenomRequestAmino;
            fromAminoMsg(object: _113.AccountLockedLongerDurationDenomRequestAminoMsg): _113.AccountLockedLongerDurationDenomRequest;
            toAminoMsg(message: _113.AccountLockedLongerDurationDenomRequest): _113.AccountLockedLongerDurationDenomRequestAminoMsg;
            fromProtoMsg(message: _113.AccountLockedLongerDurationDenomRequestProtoMsg): _113.AccountLockedLongerDurationDenomRequest;
            toProto(message: _113.AccountLockedLongerDurationDenomRequest): Uint8Array;
            toProtoMsg(message: _113.AccountLockedLongerDurationDenomRequest): _113.AccountLockedLongerDurationDenomRequestProtoMsg;
        };
        AccountLockedLongerDurationDenomResponse: {
            typeUrl: string;
            encode(message: _113.AccountLockedLongerDurationDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _113.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _113.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial(object: Partial<_113.AccountLockedLongerDurationDenomResponse>): _113.AccountLockedLongerDurationDenomResponse;
            fromSDK(object: _113.AccountLockedLongerDurationDenomResponseSDKType): _113.AccountLockedLongerDurationDenomResponse;
            toSDK(message: _113.AccountLockedLongerDurationDenomResponse): _113.AccountLockedLongerDurationDenomResponseSDKType;
            fromAmino(object: _113.AccountLockedLongerDurationDenomResponseAmino): _113.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _113.AccountLockedLongerDurationDenomResponse): _113.AccountLockedLongerDurationDenomResponseAmino;
            fromAminoMsg(object: _113.AccountLockedLongerDurationDenomResponseAminoMsg): _113.AccountLockedLongerDurationDenomResponse;
            toAminoMsg(message: _113.AccountLockedLongerDurationDenomResponse): _113.AccountLockedLongerDurationDenomResponseAminoMsg;
            fromProtoMsg(message: _113.AccountLockedLongerDurationDenomResponseProtoMsg): _113.AccountLockedLongerDurationDenomResponse;
            toProto(message: _113.AccountLockedLongerDurationDenomResponse): Uint8Array;
            toProtoMsg(message: _113.AccountLockedLongerDurationDenomResponse): _113.AccountLockedLongerDurationDenomResponseProtoMsg;
        };
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
        lockQueryTypeFromJSON(object: any): _111.LockQueryType;
        lockQueryTypeToJSON(object: _111.LockQueryType): string;
        LockQueryType: typeof _111.LockQueryType;
        LockQueryTypeSDKType: typeof _111.LockQueryType;
        LockQueryTypeAmino: typeof _111.LockQueryType;
        PeriodLock: {
            typeUrl: string;
            encode(message: _111.PeriodLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.PeriodLock;
            fromJSON(object: any): _111.PeriodLock;
            toJSON(message: _111.PeriodLock): unknown;
            fromPartial(object: Partial<_111.PeriodLock>): _111.PeriodLock;
            fromSDK(object: _111.PeriodLockSDKType): _111.PeriodLock;
            toSDK(message: _111.PeriodLock): _111.PeriodLockSDKType;
            fromAmino(object: _111.PeriodLockAmino): _111.PeriodLock;
            toAmino(message: _111.PeriodLock): _111.PeriodLockAmino;
            fromAminoMsg(object: _111.PeriodLockAminoMsg): _111.PeriodLock;
            toAminoMsg(message: _111.PeriodLock): _111.PeriodLockAminoMsg;
            fromProtoMsg(message: _111.PeriodLockProtoMsg): _111.PeriodLock;
            toProto(message: _111.PeriodLock): Uint8Array;
            toProtoMsg(message: _111.PeriodLock): _111.PeriodLockProtoMsg;
        };
        QueryCondition: {
            typeUrl: string;
            encode(message: _111.QueryCondition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryCondition;
            fromJSON(object: any): _111.QueryCondition;
            toJSON(message: _111.QueryCondition): unknown;
            fromPartial(object: Partial<_111.QueryCondition>): _111.QueryCondition;
            fromSDK(object: _111.QueryConditionSDKType): _111.QueryCondition;
            toSDK(message: _111.QueryCondition): _111.QueryConditionSDKType;
            fromAmino(object: _111.QueryConditionAmino): _111.QueryCondition;
            toAmino(message: _111.QueryCondition): _111.QueryConditionAmino;
            fromAminoMsg(object: _111.QueryConditionAminoMsg): _111.QueryCondition;
            toAminoMsg(message: _111.QueryCondition): _111.QueryConditionAminoMsg;
            fromProtoMsg(message: _111.QueryConditionProtoMsg): _111.QueryCondition;
            toProto(message: _111.QueryCondition): Uint8Array;
            toProtoMsg(message: _111.QueryCondition): _111.QueryConditionProtoMsg;
        };
        SyntheticLock: {
            typeUrl: string;
            encode(message: _111.SyntheticLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.SyntheticLock;
            fromJSON(object: any): _111.SyntheticLock;
            toJSON(message: _111.SyntheticLock): unknown;
            fromPartial(object: Partial<_111.SyntheticLock>): _111.SyntheticLock;
            fromSDK(object: _111.SyntheticLockSDKType): _111.SyntheticLock;
            toSDK(message: _111.SyntheticLock): _111.SyntheticLockSDKType;
            fromAmino(object: _111.SyntheticLockAmino): _111.SyntheticLock;
            toAmino(message: _111.SyntheticLock): _111.SyntheticLockAmino;
            fromAminoMsg(object: _111.SyntheticLockAminoMsg): _111.SyntheticLock;
            toAminoMsg(message: _111.SyntheticLock): _111.SyntheticLockAminoMsg;
            fromProtoMsg(message: _111.SyntheticLockProtoMsg): _111.SyntheticLock;
            toProto(message: _111.SyntheticLock): Uint8Array;
            toProtoMsg(message: _111.SyntheticLock): _111.SyntheticLockProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _110.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.GenesisState;
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
    };
    namespace mint {
        const v1beta1: {
            Query: typeof _286.Query;
            QueryClientImpl: typeof _286.QueryClientImpl;
            LCDQueryClient: typeof _270.LCDQueryClient;
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
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _117.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryEpochProvisionsRequest;
                fromJSON(_: any): _117.QueryEpochProvisionsRequest;
                toJSON(_: _117.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: Partial<_117.QueryEpochProvisionsRequest>): _117.QueryEpochProvisionsRequest;
                fromSDK(_: _117.QueryEpochProvisionsRequestSDKType): _117.QueryEpochProvisionsRequest;
                toSDK(_: _117.QueryEpochProvisionsRequest): _117.QueryEpochProvisionsRequestSDKType;
                fromAmino(_: _117.QueryEpochProvisionsRequestAmino): _117.QueryEpochProvisionsRequest;
                toAmino(_: _117.QueryEpochProvisionsRequest): _117.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _117.QueryEpochProvisionsRequestAminoMsg): _117.QueryEpochProvisionsRequest;
                toAminoMsg(message: _117.QueryEpochProvisionsRequest): _117.QueryEpochProvisionsRequestAminoMsg;
                fromProtoMsg(message: _117.QueryEpochProvisionsRequestProtoMsg): _117.QueryEpochProvisionsRequest;
                toProto(message: _117.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _117.QueryEpochProvisionsRequest): _117.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _117.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QueryEpochProvisionsResponse;
                fromJSON(object: any): _117.QueryEpochProvisionsResponse;
                toJSON(message: _117.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: Partial<_117.QueryEpochProvisionsResponse>): _117.QueryEpochProvisionsResponse;
                fromSDK(object: _117.QueryEpochProvisionsResponseSDKType): _117.QueryEpochProvisionsResponse;
                toSDK(message: _117.QueryEpochProvisionsResponse): _117.QueryEpochProvisionsResponseSDKType;
                fromAmino(object: _117.QueryEpochProvisionsResponseAmino): _117.QueryEpochProvisionsResponse;
                toAmino(message: _117.QueryEpochProvisionsResponse): _117.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _117.QueryEpochProvisionsResponseAminoMsg): _117.QueryEpochProvisionsResponse;
                toAminoMsg(message: _117.QueryEpochProvisionsResponse): _117.QueryEpochProvisionsResponseAminoMsg;
                fromProtoMsg(message: _117.QueryEpochProvisionsResponseProtoMsg): _117.QueryEpochProvisionsResponse;
                toProto(message: _117.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _117.QueryEpochProvisionsResponse): _117.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _116.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Minter;
                fromJSON(object: any): _116.Minter;
                toJSON(message: _116.Minter): unknown;
                fromPartial(object: Partial<_116.Minter>): _116.Minter;
                fromSDK(object: _116.MinterSDKType): _116.Minter;
                toSDK(message: _116.Minter): _116.MinterSDKType;
                fromAmino(object: _116.MinterAmino): _116.Minter;
                toAmino(message: _116.Minter): _116.MinterAmino;
                fromAminoMsg(object: _116.MinterAminoMsg): _116.Minter;
                toAminoMsg(message: _116.Minter): _116.MinterAminoMsg;
                fromProtoMsg(message: _116.MinterProtoMsg): _116.Minter;
                toProto(message: _116.Minter): Uint8Array;
                toProtoMsg(message: _116.Minter): _116.MinterProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _116.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.WeightedAddress;
                fromJSON(object: any): _116.WeightedAddress;
                toJSON(message: _116.WeightedAddress): unknown;
                fromPartial(object: Partial<_116.WeightedAddress>): _116.WeightedAddress;
                fromSDK(object: _116.WeightedAddressSDKType): _116.WeightedAddress;
                toSDK(message: _116.WeightedAddress): _116.WeightedAddressSDKType;
                fromAmino(object: _116.WeightedAddressAmino): _116.WeightedAddress;
                toAmino(message: _116.WeightedAddress): _116.WeightedAddressAmino;
                fromAminoMsg(object: _116.WeightedAddressAminoMsg): _116.WeightedAddress;
                toAminoMsg(message: _116.WeightedAddress): _116.WeightedAddressAminoMsg;
                fromProtoMsg(message: _116.WeightedAddressProtoMsg): _116.WeightedAddress;
                toProto(message: _116.WeightedAddress): Uint8Array;
                toProtoMsg(message: _116.WeightedAddress): _116.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _116.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.DistributionProportions;
                fromJSON(object: any): _116.DistributionProportions;
                toJSON(message: _116.DistributionProportions): unknown;
                fromPartial(object: Partial<_116.DistributionProportions>): _116.DistributionProportions;
                fromSDK(object: _116.DistributionProportionsSDKType): _116.DistributionProportions;
                toSDK(message: _116.DistributionProportions): _116.DistributionProportionsSDKType;
                fromAmino(object: _116.DistributionProportionsAmino): _116.DistributionProportions;
                toAmino(message: _116.DistributionProportions): _116.DistributionProportionsAmino;
                fromAminoMsg(object: _116.DistributionProportionsAminoMsg): _116.DistributionProportions;
                toAminoMsg(message: _116.DistributionProportions): _116.DistributionProportionsAminoMsg;
                fromProtoMsg(message: _116.DistributionProportionsProtoMsg): _116.DistributionProportions;
                toProto(message: _116.DistributionProportions): Uint8Array;
                toProtoMsg(message: _116.DistributionProportions): _116.DistributionProportionsProtoMsg;
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
            GenesisState: {
                typeUrl: string;
                encode(message: _115.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.GenesisState;
                fromJSON(object: any): _115.GenesisState;
                toJSON(message: _115.GenesisState): unknown;
                fromPartial(object: Partial<_115.GenesisState>): _115.GenesisState;
                fromSDK(object: _115.GenesisStateSDKType): _115.GenesisState;
                toSDK(message: _115.GenesisState): _115.GenesisStateSDKType;
                fromAmino(object: _115.GenesisStateAmino): _115.GenesisState;
                toAmino(message: _115.GenesisState): _115.GenesisStateAmino;
                fromAminoMsg(object: _115.GenesisStateAminoMsg): _115.GenesisState;
                toAminoMsg(message: _115.GenesisState): _115.GenesisStateAminoMsg;
                fromProtoMsg(message: _115.GenesisStateProtoMsg): _115.GenesisState;
                toProto(message: _115.GenesisState): Uint8Array;
                toProtoMsg(message: _115.GenesisState): _115.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            Query: typeof _287.Query;
            QueryClientImpl: typeof _287.QueryClientImpl;
            LCDQueryClient: typeof _271.LCDQueryClient;
            QueryGaugeIdsRequest: {
                typeUrl: string;
                encode(message: _121.QueryGaugeIdsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryGaugeIdsRequest;
                fromJSON(object: any): _121.QueryGaugeIdsRequest;
                toJSON(message: _121.QueryGaugeIdsRequest): unknown;
                fromPartial(object: Partial<_121.QueryGaugeIdsRequest>): _121.QueryGaugeIdsRequest;
                fromSDK(object: _121.QueryGaugeIdsRequestSDKType): _121.QueryGaugeIdsRequest;
                toSDK(message: _121.QueryGaugeIdsRequest): _121.QueryGaugeIdsRequestSDKType;
                fromAmino(object: _121.QueryGaugeIdsRequestAmino): _121.QueryGaugeIdsRequest;
                toAmino(message: _121.QueryGaugeIdsRequest): _121.QueryGaugeIdsRequestAmino;
                fromAminoMsg(object: _121.QueryGaugeIdsRequestAminoMsg): _121.QueryGaugeIdsRequest;
                toAminoMsg(message: _121.QueryGaugeIdsRequest): _121.QueryGaugeIdsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryGaugeIdsRequestProtoMsg): _121.QueryGaugeIdsRequest;
                toProto(message: _121.QueryGaugeIdsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryGaugeIdsRequest): _121.QueryGaugeIdsRequestProtoMsg;
            };
            QueryGaugeIdsResponse: {
                typeUrl: string;
                encode(message: _121.QueryGaugeIdsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryGaugeIdsResponse;
                fromJSON(object: any): _121.QueryGaugeIdsResponse;
                toJSON(message: _121.QueryGaugeIdsResponse): unknown;
                fromPartial(object: Partial<_121.QueryGaugeIdsResponse>): _121.QueryGaugeIdsResponse;
                fromSDK(object: _121.QueryGaugeIdsResponseSDKType): _121.QueryGaugeIdsResponse;
                toSDK(message: _121.QueryGaugeIdsResponse): _121.QueryGaugeIdsResponseSDKType;
                fromAmino(object: _121.QueryGaugeIdsResponseAmino): _121.QueryGaugeIdsResponse;
                toAmino(message: _121.QueryGaugeIdsResponse): _121.QueryGaugeIdsResponseAmino;
                fromAminoMsg(object: _121.QueryGaugeIdsResponseAminoMsg): _121.QueryGaugeIdsResponse;
                toAminoMsg(message: _121.QueryGaugeIdsResponse): _121.QueryGaugeIdsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryGaugeIdsResponseProtoMsg): _121.QueryGaugeIdsResponse;
                toProto(message: _121.QueryGaugeIdsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryGaugeIdsResponse): _121.QueryGaugeIdsResponseProtoMsg;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                typeUrl: string;
                encode(message: _121.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _121.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _121.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial(object: Partial<_121.QueryGaugeIdsResponse_GaugeIdWithDuration>): _121.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromSDK(object: _121.QueryGaugeIdsResponse_GaugeIdWithDurationSDKType): _121.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toSDK(message: _121.QueryGaugeIdsResponse_GaugeIdWithDuration): _121.QueryGaugeIdsResponse_GaugeIdWithDurationSDKType;
                fromAmino(object: _121.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _121.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _121.QueryGaugeIdsResponse_GaugeIdWithDuration): _121.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                fromAminoMsg(object: _121.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): _121.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAminoMsg(message: _121.QueryGaugeIdsResponse_GaugeIdWithDuration): _121.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
                fromProtoMsg(message: _121.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): _121.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toProto(message: _121.QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
                toProtoMsg(message: _121.QueryGaugeIdsResponse_GaugeIdWithDuration): _121.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
            };
            QueryDistrInfoRequest: {
                typeUrl: string;
                encode(_: _121.QueryDistrInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryDistrInfoRequest;
                fromJSON(_: any): _121.QueryDistrInfoRequest;
                toJSON(_: _121.QueryDistrInfoRequest): unknown;
                fromPartial(_: Partial<_121.QueryDistrInfoRequest>): _121.QueryDistrInfoRequest;
                fromSDK(_: _121.QueryDistrInfoRequestSDKType): _121.QueryDistrInfoRequest;
                toSDK(_: _121.QueryDistrInfoRequest): _121.QueryDistrInfoRequestSDKType;
                fromAmino(_: _121.QueryDistrInfoRequestAmino): _121.QueryDistrInfoRequest;
                toAmino(_: _121.QueryDistrInfoRequest): _121.QueryDistrInfoRequestAmino;
                fromAminoMsg(object: _121.QueryDistrInfoRequestAminoMsg): _121.QueryDistrInfoRequest;
                toAminoMsg(message: _121.QueryDistrInfoRequest): _121.QueryDistrInfoRequestAminoMsg;
                fromProtoMsg(message: _121.QueryDistrInfoRequestProtoMsg): _121.QueryDistrInfoRequest;
                toProto(message: _121.QueryDistrInfoRequest): Uint8Array;
                toProtoMsg(message: _121.QueryDistrInfoRequest): _121.QueryDistrInfoRequestProtoMsg;
            };
            QueryDistrInfoResponse: {
                typeUrl: string;
                encode(message: _121.QueryDistrInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryDistrInfoResponse;
                fromJSON(object: any): _121.QueryDistrInfoResponse;
                toJSON(message: _121.QueryDistrInfoResponse): unknown;
                fromPartial(object: Partial<_121.QueryDistrInfoResponse>): _121.QueryDistrInfoResponse;
                fromSDK(object: _121.QueryDistrInfoResponseSDKType): _121.QueryDistrInfoResponse;
                toSDK(message: _121.QueryDistrInfoResponse): _121.QueryDistrInfoResponseSDKType;
                fromAmino(object: _121.QueryDistrInfoResponseAmino): _121.QueryDistrInfoResponse;
                toAmino(message: _121.QueryDistrInfoResponse): _121.QueryDistrInfoResponseAmino;
                fromAminoMsg(object: _121.QueryDistrInfoResponseAminoMsg): _121.QueryDistrInfoResponse;
                toAminoMsg(message: _121.QueryDistrInfoResponse): _121.QueryDistrInfoResponseAminoMsg;
                fromProtoMsg(message: _121.QueryDistrInfoResponseProtoMsg): _121.QueryDistrInfoResponse;
                toProto(message: _121.QueryDistrInfoResponse): Uint8Array;
                toProtoMsg(message: _121.QueryDistrInfoResponse): _121.QueryDistrInfoResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _121.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryParamsRequest;
                fromJSON(_: any): _121.QueryParamsRequest;
                toJSON(_: _121.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_121.QueryParamsRequest>): _121.QueryParamsRequest;
                fromSDK(_: _121.QueryParamsRequestSDKType): _121.QueryParamsRequest;
                toSDK(_: _121.QueryParamsRequest): _121.QueryParamsRequestSDKType;
                fromAmino(_: _121.QueryParamsRequestAmino): _121.QueryParamsRequest;
                toAmino(_: _121.QueryParamsRequest): _121.QueryParamsRequestAmino;
                fromAminoMsg(object: _121.QueryParamsRequestAminoMsg): _121.QueryParamsRequest;
                toAminoMsg(message: _121.QueryParamsRequest): _121.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryParamsRequestProtoMsg): _121.QueryParamsRequest;
                toProto(message: _121.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryParamsRequest): _121.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _121.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryParamsResponse;
                fromJSON(object: any): _121.QueryParamsResponse;
                toJSON(message: _121.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_121.QueryParamsResponse>): _121.QueryParamsResponse;
                fromSDK(object: _121.QueryParamsResponseSDKType): _121.QueryParamsResponse;
                toSDK(message: _121.QueryParamsResponse): _121.QueryParamsResponseSDKType;
                fromAmino(object: _121.QueryParamsResponseAmino): _121.QueryParamsResponse;
                toAmino(message: _121.QueryParamsResponse): _121.QueryParamsResponseAmino;
                fromAminoMsg(object: _121.QueryParamsResponseAminoMsg): _121.QueryParamsResponse;
                toAminoMsg(message: _121.QueryParamsResponse): _121.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryParamsResponseProtoMsg): _121.QueryParamsResponse;
                toProto(message: _121.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryParamsResponse): _121.QueryParamsResponseProtoMsg;
            };
            QueryLockableDurationsRequest: {
                typeUrl: string;
                encode(_: _121.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryLockableDurationsRequest;
                fromJSON(_: any): _121.QueryLockableDurationsRequest;
                toJSON(_: _121.QueryLockableDurationsRequest): unknown;
                fromPartial(_: Partial<_121.QueryLockableDurationsRequest>): _121.QueryLockableDurationsRequest;
                fromSDK(_: _121.QueryLockableDurationsRequestSDKType): _121.QueryLockableDurationsRequest;
                toSDK(_: _121.QueryLockableDurationsRequest): _121.QueryLockableDurationsRequestSDKType;
                fromAmino(_: _121.QueryLockableDurationsRequestAmino): _121.QueryLockableDurationsRequest;
                toAmino(_: _121.QueryLockableDurationsRequest): _121.QueryLockableDurationsRequestAmino;
                fromAminoMsg(object: _121.QueryLockableDurationsRequestAminoMsg): _121.QueryLockableDurationsRequest;
                toAminoMsg(message: _121.QueryLockableDurationsRequest): _121.QueryLockableDurationsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryLockableDurationsRequestProtoMsg): _121.QueryLockableDurationsRequest;
                toProto(message: _121.QueryLockableDurationsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryLockableDurationsRequest): _121.QueryLockableDurationsRequestProtoMsg;
            };
            QueryLockableDurationsResponse: {
                typeUrl: string;
                encode(message: _121.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryLockableDurationsResponse;
                fromJSON(object: any): _121.QueryLockableDurationsResponse;
                toJSON(message: _121.QueryLockableDurationsResponse): unknown;
                fromPartial(object: Partial<_121.QueryLockableDurationsResponse>): _121.QueryLockableDurationsResponse;
                fromSDK(object: _121.QueryLockableDurationsResponseSDKType): _121.QueryLockableDurationsResponse;
                toSDK(message: _121.QueryLockableDurationsResponse): _121.QueryLockableDurationsResponseSDKType;
                fromAmino(object: _121.QueryLockableDurationsResponseAmino): _121.QueryLockableDurationsResponse;
                toAmino(message: _121.QueryLockableDurationsResponse): _121.QueryLockableDurationsResponseAmino;
                fromAminoMsg(object: _121.QueryLockableDurationsResponseAminoMsg): _121.QueryLockableDurationsResponse;
                toAminoMsg(message: _121.QueryLockableDurationsResponse): _121.QueryLockableDurationsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryLockableDurationsResponseProtoMsg): _121.QueryLockableDurationsResponse;
                toProto(message: _121.QueryLockableDurationsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryLockableDurationsResponse): _121.QueryLockableDurationsResponseProtoMsg;
            };
            QueryIncentivizedPoolsRequest: {
                typeUrl: string;
                encode(_: _121.QueryIncentivizedPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _121.QueryIncentivizedPoolsRequest;
                toJSON(_: _121.QueryIncentivizedPoolsRequest): unknown;
                fromPartial(_: Partial<_121.QueryIncentivizedPoolsRequest>): _121.QueryIncentivizedPoolsRequest;
                fromSDK(_: _121.QueryIncentivizedPoolsRequestSDKType): _121.QueryIncentivizedPoolsRequest;
                toSDK(_: _121.QueryIncentivizedPoolsRequest): _121.QueryIncentivizedPoolsRequestSDKType;
                fromAmino(_: _121.QueryIncentivizedPoolsRequestAmino): _121.QueryIncentivizedPoolsRequest;
                toAmino(_: _121.QueryIncentivizedPoolsRequest): _121.QueryIncentivizedPoolsRequestAmino;
                fromAminoMsg(object: _121.QueryIncentivizedPoolsRequestAminoMsg): _121.QueryIncentivizedPoolsRequest;
                toAminoMsg(message: _121.QueryIncentivizedPoolsRequest): _121.QueryIncentivizedPoolsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryIncentivizedPoolsRequestProtoMsg): _121.QueryIncentivizedPoolsRequest;
                toProto(message: _121.QueryIncentivizedPoolsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryIncentivizedPoolsRequest): _121.QueryIncentivizedPoolsRequestProtoMsg;
            };
            IncentivizedPool: {
                typeUrl: string;
                encode(message: _121.IncentivizedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.IncentivizedPool;
                fromJSON(object: any): _121.IncentivizedPool;
                toJSON(message: _121.IncentivizedPool): unknown;
                fromPartial(object: Partial<_121.IncentivizedPool>): _121.IncentivizedPool;
                fromSDK(object: _121.IncentivizedPoolSDKType): _121.IncentivizedPool;
                toSDK(message: _121.IncentivizedPool): _121.IncentivizedPoolSDKType;
                fromAmino(object: _121.IncentivizedPoolAmino): _121.IncentivizedPool;
                toAmino(message: _121.IncentivizedPool): _121.IncentivizedPoolAmino;
                fromAminoMsg(object: _121.IncentivizedPoolAminoMsg): _121.IncentivizedPool;
                toAminoMsg(message: _121.IncentivizedPool): _121.IncentivizedPoolAminoMsg;
                fromProtoMsg(message: _121.IncentivizedPoolProtoMsg): _121.IncentivizedPool;
                toProto(message: _121.IncentivizedPool): Uint8Array;
                toProtoMsg(message: _121.IncentivizedPool): _121.IncentivizedPoolProtoMsg;
            };
            QueryIncentivizedPoolsResponse: {
                typeUrl: string;
                encode(message: _121.QueryIncentivizedPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _121.QueryIncentivizedPoolsResponse;
                toJSON(message: _121.QueryIncentivizedPoolsResponse): unknown;
                fromPartial(object: Partial<_121.QueryIncentivizedPoolsResponse>): _121.QueryIncentivizedPoolsResponse;
                fromSDK(object: _121.QueryIncentivizedPoolsResponseSDKType): _121.QueryIncentivizedPoolsResponse;
                toSDK(message: _121.QueryIncentivizedPoolsResponse): _121.QueryIncentivizedPoolsResponseSDKType;
                fromAmino(object: _121.QueryIncentivizedPoolsResponseAmino): _121.QueryIncentivizedPoolsResponse;
                toAmino(message: _121.QueryIncentivizedPoolsResponse): _121.QueryIncentivizedPoolsResponseAmino;
                fromAminoMsg(object: _121.QueryIncentivizedPoolsResponseAminoMsg): _121.QueryIncentivizedPoolsResponse;
                toAminoMsg(message: _121.QueryIncentivizedPoolsResponse): _121.QueryIncentivizedPoolsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryIncentivizedPoolsResponseProtoMsg): _121.QueryIncentivizedPoolsResponse;
                toProto(message: _121.QueryIncentivizedPoolsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryIncentivizedPoolsResponse): _121.QueryIncentivizedPoolsResponseProtoMsg;
            };
            QueryExternalIncentiveGaugesRequest: {
                typeUrl: string;
                encode(_: _121.QueryExternalIncentiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _121.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _121.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial(_: Partial<_121.QueryExternalIncentiveGaugesRequest>): _121.QueryExternalIncentiveGaugesRequest;
                fromSDK(_: _121.QueryExternalIncentiveGaugesRequestSDKType): _121.QueryExternalIncentiveGaugesRequest;
                toSDK(_: _121.QueryExternalIncentiveGaugesRequest): _121.QueryExternalIncentiveGaugesRequestSDKType;
                fromAmino(_: _121.QueryExternalIncentiveGaugesRequestAmino): _121.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _121.QueryExternalIncentiveGaugesRequest): _121.QueryExternalIncentiveGaugesRequestAmino;
                fromAminoMsg(object: _121.QueryExternalIncentiveGaugesRequestAminoMsg): _121.QueryExternalIncentiveGaugesRequest;
                toAminoMsg(message: _121.QueryExternalIncentiveGaugesRequest): _121.QueryExternalIncentiveGaugesRequestAminoMsg;
                fromProtoMsg(message: _121.QueryExternalIncentiveGaugesRequestProtoMsg): _121.QueryExternalIncentiveGaugesRequest;
                toProto(message: _121.QueryExternalIncentiveGaugesRequest): Uint8Array;
                toProtoMsg(message: _121.QueryExternalIncentiveGaugesRequest): _121.QueryExternalIncentiveGaugesRequestProtoMsg;
            };
            QueryExternalIncentiveGaugesResponse: {
                typeUrl: string;
                encode(message: _121.QueryExternalIncentiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _121.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _121.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial(object: Partial<_121.QueryExternalIncentiveGaugesResponse>): _121.QueryExternalIncentiveGaugesResponse;
                fromSDK(object: _121.QueryExternalIncentiveGaugesResponseSDKType): _121.QueryExternalIncentiveGaugesResponse;
                toSDK(message: _121.QueryExternalIncentiveGaugesResponse): _121.QueryExternalIncentiveGaugesResponseSDKType;
                fromAmino(object: _121.QueryExternalIncentiveGaugesResponseAmino): _121.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _121.QueryExternalIncentiveGaugesResponse): _121.QueryExternalIncentiveGaugesResponseAmino;
                fromAminoMsg(object: _121.QueryExternalIncentiveGaugesResponseAminoMsg): _121.QueryExternalIncentiveGaugesResponse;
                toAminoMsg(message: _121.QueryExternalIncentiveGaugesResponse): _121.QueryExternalIncentiveGaugesResponseAminoMsg;
                fromProtoMsg(message: _121.QueryExternalIncentiveGaugesResponseProtoMsg): _121.QueryExternalIncentiveGaugesResponse;
                toProto(message: _121.QueryExternalIncentiveGaugesResponse): Uint8Array;
                toProtoMsg(message: _121.QueryExternalIncentiveGaugesResponse): _121.QueryExternalIncentiveGaugesResponseProtoMsg;
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
            LockableDurationsInfo: {
                typeUrl: string;
                encode(message: _120.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.LockableDurationsInfo;
                fromJSON(object: any): _120.LockableDurationsInfo;
                toJSON(message: _120.LockableDurationsInfo): unknown;
                fromPartial(object: Partial<_120.LockableDurationsInfo>): _120.LockableDurationsInfo;
                fromSDK(object: _120.LockableDurationsInfoSDKType): _120.LockableDurationsInfo;
                toSDK(message: _120.LockableDurationsInfo): _120.LockableDurationsInfoSDKType;
                fromAmino(object: _120.LockableDurationsInfoAmino): _120.LockableDurationsInfo;
                toAmino(message: _120.LockableDurationsInfo): _120.LockableDurationsInfoAmino;
                fromAminoMsg(object: _120.LockableDurationsInfoAminoMsg): _120.LockableDurationsInfo;
                toAminoMsg(message: _120.LockableDurationsInfo): _120.LockableDurationsInfoAminoMsg;
                fromProtoMsg(message: _120.LockableDurationsInfoProtoMsg): _120.LockableDurationsInfo;
                toProto(message: _120.LockableDurationsInfo): Uint8Array;
                toProtoMsg(message: _120.LockableDurationsInfo): _120.LockableDurationsInfoProtoMsg;
            };
            DistrInfo: {
                typeUrl: string;
                encode(message: _120.DistrInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.DistrInfo;
                fromJSON(object: any): _120.DistrInfo;
                toJSON(message: _120.DistrInfo): unknown;
                fromPartial(object: Partial<_120.DistrInfo>): _120.DistrInfo;
                fromSDK(object: _120.DistrInfoSDKType): _120.DistrInfo;
                toSDK(message: _120.DistrInfo): _120.DistrInfoSDKType;
                fromAmino(object: _120.DistrInfoAmino): _120.DistrInfo;
                toAmino(message: _120.DistrInfo): _120.DistrInfoAmino;
                fromAminoMsg(object: _120.DistrInfoAminoMsg): _120.DistrInfo;
                toAminoMsg(message: _120.DistrInfo): _120.DistrInfoAminoMsg;
                fromProtoMsg(message: _120.DistrInfoProtoMsg): _120.DistrInfo;
                toProto(message: _120.DistrInfo): Uint8Array;
                toProtoMsg(message: _120.DistrInfo): _120.DistrInfoProtoMsg;
            };
            DistrRecord: {
                typeUrl: string;
                encode(message: _120.DistrRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.DistrRecord;
                fromJSON(object: any): _120.DistrRecord;
                toJSON(message: _120.DistrRecord): unknown;
                fromPartial(object: Partial<_120.DistrRecord>): _120.DistrRecord;
                fromSDK(object: _120.DistrRecordSDKType): _120.DistrRecord;
                toSDK(message: _120.DistrRecord): _120.DistrRecordSDKType;
                fromAmino(object: _120.DistrRecordAmino): _120.DistrRecord;
                toAmino(message: _120.DistrRecord): _120.DistrRecordAmino;
                fromAminoMsg(object: _120.DistrRecordAminoMsg): _120.DistrRecord;
                toAminoMsg(message: _120.DistrRecord): _120.DistrRecordAminoMsg;
                fromProtoMsg(message: _120.DistrRecordProtoMsg): _120.DistrRecord;
                toProto(message: _120.DistrRecord): Uint8Array;
                toProtoMsg(message: _120.DistrRecord): _120.DistrRecordProtoMsg;
            };
            PoolToGauge: {
                typeUrl: string;
                encode(message: _120.PoolToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.PoolToGauge;
                fromJSON(object: any): _120.PoolToGauge;
                toJSON(message: _120.PoolToGauge): unknown;
                fromPartial(object: Partial<_120.PoolToGauge>): _120.PoolToGauge;
                fromSDK(object: _120.PoolToGaugeSDKType): _120.PoolToGauge;
                toSDK(message: _120.PoolToGauge): _120.PoolToGaugeSDKType;
                fromAmino(object: _120.PoolToGaugeAmino): _120.PoolToGauge;
                toAmino(message: _120.PoolToGauge): _120.PoolToGaugeAmino;
                fromAminoMsg(object: _120.PoolToGaugeAminoMsg): _120.PoolToGauge;
                toAminoMsg(message: _120.PoolToGauge): _120.PoolToGaugeAminoMsg;
                fromProtoMsg(message: _120.PoolToGaugeProtoMsg): _120.PoolToGauge;
                toProto(message: _120.PoolToGauge): Uint8Array;
                toProtoMsg(message: _120.PoolToGauge): _120.PoolToGaugeProtoMsg;
            };
            PoolToGauges: {
                typeUrl: string;
                encode(message: _120.PoolToGauges, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.PoolToGauges;
                fromJSON(object: any): _120.PoolToGauges;
                toJSON(message: _120.PoolToGauges): unknown;
                fromPartial(object: Partial<_120.PoolToGauges>): _120.PoolToGauges;
                fromSDK(object: _120.PoolToGaugesSDKType): _120.PoolToGauges;
                toSDK(message: _120.PoolToGauges): _120.PoolToGaugesSDKType;
                fromAmino(object: _120.PoolToGaugesAmino): _120.PoolToGauges;
                toAmino(message: _120.PoolToGauges): _120.PoolToGaugesAmino;
                fromAminoMsg(object: _120.PoolToGaugesAminoMsg): _120.PoolToGauges;
                toAminoMsg(message: _120.PoolToGauges): _120.PoolToGaugesAminoMsg;
                fromProtoMsg(message: _120.PoolToGaugesProtoMsg): _120.PoolToGauges;
                toProto(message: _120.PoolToGauges): Uint8Array;
                toProtoMsg(message: _120.PoolToGauges): _120.PoolToGaugesProtoMsg;
            };
            ReplacePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _119.ReplacePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _119.ReplacePoolIncentivesProposal;
                toJSON(message: _119.ReplacePoolIncentivesProposal): unknown;
                fromPartial(object: Partial<_119.ReplacePoolIncentivesProposal>): _119.ReplacePoolIncentivesProposal;
                fromSDK(object: _119.ReplacePoolIncentivesProposalSDKType): _119.ReplacePoolIncentivesProposal;
                toSDK(message: _119.ReplacePoolIncentivesProposal): _119.ReplacePoolIncentivesProposalSDKType;
                fromAmino(object: _119.ReplacePoolIncentivesProposalAmino): _119.ReplacePoolIncentivesProposal;
                toAmino(message: _119.ReplacePoolIncentivesProposal): _119.ReplacePoolIncentivesProposalAmino;
                fromAminoMsg(object: _119.ReplacePoolIncentivesProposalAminoMsg): _119.ReplacePoolIncentivesProposal;
                toAminoMsg(message: _119.ReplacePoolIncentivesProposal): _119.ReplacePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _119.ReplacePoolIncentivesProposalProtoMsg): _119.ReplacePoolIncentivesProposal;
                toProto(message: _119.ReplacePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _119.ReplacePoolIncentivesProposal): _119.ReplacePoolIncentivesProposalProtoMsg;
            };
            UpdatePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _119.UpdatePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _119.UpdatePoolIncentivesProposal;
                toJSON(message: _119.UpdatePoolIncentivesProposal): unknown;
                fromPartial(object: Partial<_119.UpdatePoolIncentivesProposal>): _119.UpdatePoolIncentivesProposal;
                fromSDK(object: _119.UpdatePoolIncentivesProposalSDKType): _119.UpdatePoolIncentivesProposal;
                toSDK(message: _119.UpdatePoolIncentivesProposal): _119.UpdatePoolIncentivesProposalSDKType;
                fromAmino(object: _119.UpdatePoolIncentivesProposalAmino): _119.UpdatePoolIncentivesProposal;
                toAmino(message: _119.UpdatePoolIncentivesProposal): _119.UpdatePoolIncentivesProposalAmino;
                fromAminoMsg(object: _119.UpdatePoolIncentivesProposalAminoMsg): _119.UpdatePoolIncentivesProposal;
                toAminoMsg(message: _119.UpdatePoolIncentivesProposal): _119.UpdatePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _119.UpdatePoolIncentivesProposalProtoMsg): _119.UpdatePoolIncentivesProposal;
                toProto(message: _119.UpdatePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _119.UpdatePoolIncentivesProposal): _119.UpdatePoolIncentivesProposalProtoMsg;
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
    namespace protorev {
        const v1beta1: {
            Msg: typeof _300.Msg;
            Query: typeof _288.Query;
            QueryClientImpl: typeof _288.QueryClientImpl;
            LCDQueryClient: typeof _272.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _127.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _127.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _127.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _127.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _127.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _127.MsgSetDeveloperAccount;
                    };
                };
                toJSON: {
                    setHotRoutes(value: _127.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDeveloperAccount(value: _127.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setHotRoutes(value: any): {
                        typeUrl: string;
                        value: _127.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: any): {
                        typeUrl: string;
                        value: _127.MsgSetDeveloperAccount;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _127.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _127.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _127.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _127.MsgSetDeveloperAccount;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: (message: _127.MsgSetHotRoutes) => _127.MsgSetHotRoutesAmino;
                    fromAmino: (object: _127.MsgSetHotRoutesAmino) => _127.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: (message: _127.MsgSetDeveloperAccount) => _127.MsgSetDeveloperAccountAmino;
                    fromAmino: (object: _127.MsgSetDeveloperAccountAmino) => _127.MsgSetDeveloperAccount;
                };
            };
            MsgSetHotRoutes: {
                typeUrl: string;
                encode(message: _127.MsgSetHotRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgSetHotRoutes;
                fromJSON(object: any): _127.MsgSetHotRoutes;
                toJSON(message: _127.MsgSetHotRoutes): unknown;
                fromPartial(object: Partial<_127.MsgSetHotRoutes>): _127.MsgSetHotRoutes;
                fromSDK(object: _127.MsgSetHotRoutesSDKType): _127.MsgSetHotRoutes;
                toSDK(message: _127.MsgSetHotRoutes): _127.MsgSetHotRoutesSDKType;
                fromAmino(object: _127.MsgSetHotRoutesAmino): _127.MsgSetHotRoutes;
                toAmino(message: _127.MsgSetHotRoutes): _127.MsgSetHotRoutesAmino;
                fromAminoMsg(object: _127.MsgSetHotRoutesAminoMsg): _127.MsgSetHotRoutes;
                toAminoMsg(message: _127.MsgSetHotRoutes): _127.MsgSetHotRoutesAminoMsg;
                fromProtoMsg(message: _127.MsgSetHotRoutesProtoMsg): _127.MsgSetHotRoutes;
                toProto(message: _127.MsgSetHotRoutes): Uint8Array;
                toProtoMsg(message: _127.MsgSetHotRoutes): _127.MsgSetHotRoutesProtoMsg;
            };
            MsgSetHotRoutesResponse: {
                typeUrl: string;
                encode(_: _127.MsgSetHotRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgSetHotRoutesResponse;
                fromJSON(_: any): _127.MsgSetHotRoutesResponse;
                toJSON(_: _127.MsgSetHotRoutesResponse): unknown;
                fromPartial(_: Partial<_127.MsgSetHotRoutesResponse>): _127.MsgSetHotRoutesResponse;
                fromSDK(_: _127.MsgSetHotRoutesResponseSDKType): _127.MsgSetHotRoutesResponse;
                toSDK(_: _127.MsgSetHotRoutesResponse): _127.MsgSetHotRoutesResponseSDKType;
                fromAmino(_: _127.MsgSetHotRoutesResponseAmino): _127.MsgSetHotRoutesResponse;
                toAmino(_: _127.MsgSetHotRoutesResponse): _127.MsgSetHotRoutesResponseAmino;
                fromAminoMsg(object: _127.MsgSetHotRoutesResponseAminoMsg): _127.MsgSetHotRoutesResponse;
                toAminoMsg(message: _127.MsgSetHotRoutesResponse): _127.MsgSetHotRoutesResponseAminoMsg;
                fromProtoMsg(message: _127.MsgSetHotRoutesResponseProtoMsg): _127.MsgSetHotRoutesResponse;
                toProto(message: _127.MsgSetHotRoutesResponse): Uint8Array;
                toProtoMsg(message: _127.MsgSetHotRoutesResponse): _127.MsgSetHotRoutesResponseProtoMsg;
            };
            MsgSetDeveloperAccount: {
                typeUrl: string;
                encode(message: _127.MsgSetDeveloperAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgSetDeveloperAccount;
                fromJSON(object: any): _127.MsgSetDeveloperAccount;
                toJSON(message: _127.MsgSetDeveloperAccount): unknown;
                fromPartial(object: Partial<_127.MsgSetDeveloperAccount>): _127.MsgSetDeveloperAccount;
                fromSDK(object: _127.MsgSetDeveloperAccountSDKType): _127.MsgSetDeveloperAccount;
                toSDK(message: _127.MsgSetDeveloperAccount): _127.MsgSetDeveloperAccountSDKType;
                fromAmino(object: _127.MsgSetDeveloperAccountAmino): _127.MsgSetDeveloperAccount;
                toAmino(message: _127.MsgSetDeveloperAccount): _127.MsgSetDeveloperAccountAmino;
                fromAminoMsg(object: _127.MsgSetDeveloperAccountAminoMsg): _127.MsgSetDeveloperAccount;
                toAminoMsg(message: _127.MsgSetDeveloperAccount): _127.MsgSetDeveloperAccountAminoMsg;
                fromProtoMsg(message: _127.MsgSetDeveloperAccountProtoMsg): _127.MsgSetDeveloperAccount;
                toProto(message: _127.MsgSetDeveloperAccount): Uint8Array;
                toProtoMsg(message: _127.MsgSetDeveloperAccount): _127.MsgSetDeveloperAccountProtoMsg;
            };
            MsgSetDeveloperAccountResponse: {
                typeUrl: string;
                encode(_: _127.MsgSetDeveloperAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgSetDeveloperAccountResponse;
                fromJSON(_: any): _127.MsgSetDeveloperAccountResponse;
                toJSON(_: _127.MsgSetDeveloperAccountResponse): unknown;
                fromPartial(_: Partial<_127.MsgSetDeveloperAccountResponse>): _127.MsgSetDeveloperAccountResponse;
                fromSDK(_: _127.MsgSetDeveloperAccountResponseSDKType): _127.MsgSetDeveloperAccountResponse;
                toSDK(_: _127.MsgSetDeveloperAccountResponse): _127.MsgSetDeveloperAccountResponseSDKType;
                fromAmino(_: _127.MsgSetDeveloperAccountResponseAmino): _127.MsgSetDeveloperAccountResponse;
                toAmino(_: _127.MsgSetDeveloperAccountResponse): _127.MsgSetDeveloperAccountResponseAmino;
                fromAminoMsg(object: _127.MsgSetDeveloperAccountResponseAminoMsg): _127.MsgSetDeveloperAccountResponse;
                toAminoMsg(message: _127.MsgSetDeveloperAccountResponse): _127.MsgSetDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _127.MsgSetDeveloperAccountResponseProtoMsg): _127.MsgSetDeveloperAccountResponse;
                toProto(message: _127.MsgSetDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _127.MsgSetDeveloperAccountResponse): _127.MsgSetDeveloperAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _126.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryParamsRequest;
                fromJSON(_: any): _126.QueryParamsRequest;
                toJSON(_: _126.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_126.QueryParamsRequest>): _126.QueryParamsRequest;
                fromSDK(_: _126.QueryParamsRequestSDKType): _126.QueryParamsRequest;
                toSDK(_: _126.QueryParamsRequest): _126.QueryParamsRequestSDKType;
                fromAmino(_: _126.QueryParamsRequestAmino): _126.QueryParamsRequest;
                toAmino(_: _126.QueryParamsRequest): _126.QueryParamsRequestAmino;
                fromAminoMsg(object: _126.QueryParamsRequestAminoMsg): _126.QueryParamsRequest;
                toAminoMsg(message: _126.QueryParamsRequest): _126.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryParamsRequestProtoMsg): _126.QueryParamsRequest;
                toProto(message: _126.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryParamsRequest): _126.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _126.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryParamsResponse;
                fromJSON(object: any): _126.QueryParamsResponse;
                toJSON(message: _126.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_126.QueryParamsResponse>): _126.QueryParamsResponse;
                fromSDK(object: _126.QueryParamsResponseSDKType): _126.QueryParamsResponse;
                toSDK(message: _126.QueryParamsResponse): _126.QueryParamsResponseSDKType;
                fromAmino(object: _126.QueryParamsResponseAmino): _126.QueryParamsResponse;
                toAmino(message: _126.QueryParamsResponse): _126.QueryParamsResponseAmino;
                fromAminoMsg(object: _126.QueryParamsResponseAminoMsg): _126.QueryParamsResponse;
                toAminoMsg(message: _126.QueryParamsResponse): _126.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryParamsResponseProtoMsg): _126.QueryParamsResponse;
                toProto(message: _126.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryParamsResponse): _126.QueryParamsResponseProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                typeUrl: string;
                encode(_: _126.QueryGetProtoRevNumberOfTradesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryGetProtoRevNumberOfTradesRequest;
                fromJSON(_: any): _126.QueryGetProtoRevNumberOfTradesRequest;
                toJSON(_: _126.QueryGetProtoRevNumberOfTradesRequest): unknown;
                fromPartial(_: Partial<_126.QueryGetProtoRevNumberOfTradesRequest>): _126.QueryGetProtoRevNumberOfTradesRequest;
                fromSDK(_: _126.QueryGetProtoRevNumberOfTradesRequestSDKType): _126.QueryGetProtoRevNumberOfTradesRequest;
                toSDK(_: _126.QueryGetProtoRevNumberOfTradesRequest): _126.QueryGetProtoRevNumberOfTradesRequestSDKType;
                fromAmino(_: _126.QueryGetProtoRevNumberOfTradesRequestAmino): _126.QueryGetProtoRevNumberOfTradesRequest;
                toAmino(_: _126.QueryGetProtoRevNumberOfTradesRequest): _126.QueryGetProtoRevNumberOfTradesRequestAmino;
                fromAminoMsg(object: _126.QueryGetProtoRevNumberOfTradesRequestAminoMsg): _126.QueryGetProtoRevNumberOfTradesRequest;
                toAminoMsg(message: _126.QueryGetProtoRevNumberOfTradesRequest): _126.QueryGetProtoRevNumberOfTradesRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGetProtoRevNumberOfTradesRequestProtoMsg): _126.QueryGetProtoRevNumberOfTradesRequest;
                toProto(message: _126.QueryGetProtoRevNumberOfTradesRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGetProtoRevNumberOfTradesRequest): _126.QueryGetProtoRevNumberOfTradesRequestProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                typeUrl: string;
                encode(message: _126.QueryGetProtoRevNumberOfTradesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryGetProtoRevNumberOfTradesResponse;
                fromJSON(object: any): _126.QueryGetProtoRevNumberOfTradesResponse;
                toJSON(message: _126.QueryGetProtoRevNumberOfTradesResponse): unknown;
                fromPartial(object: Partial<_126.QueryGetProtoRevNumberOfTradesResponse>): _126.QueryGetProtoRevNumberOfTradesResponse;
                fromSDK(object: _126.QueryGetProtoRevNumberOfTradesResponseSDKType): _126.QueryGetProtoRevNumberOfTradesResponse;
                toSDK(message: _126.QueryGetProtoRevNumberOfTradesResponse): _126.QueryGetProtoRevNumberOfTradesResponseSDKType;
                fromAmino(object: _126.QueryGetProtoRevNumberOfTradesResponseAmino): _126.QueryGetProtoRevNumberOfTradesResponse;
                toAmino(message: _126.QueryGetProtoRevNumberOfTradesResponse): _126.QueryGetProtoRevNumberOfTradesResponseAmino;
                fromAminoMsg(object: _126.QueryGetProtoRevNumberOfTradesResponseAminoMsg): _126.QueryGetProtoRevNumberOfTradesResponse;
                toAminoMsg(message: _126.QueryGetProtoRevNumberOfTradesResponse): _126.QueryGetProtoRevNumberOfTradesResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGetProtoRevNumberOfTradesResponseProtoMsg): _126.QueryGetProtoRevNumberOfTradesResponse;
                toProto(message: _126.QueryGetProtoRevNumberOfTradesResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGetProtoRevNumberOfTradesResponse): _126.QueryGetProtoRevNumberOfTradesResponseProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                typeUrl: string;
                encode(message: _126.QueryGetProtoRevProfitsByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryGetProtoRevProfitsByDenomRequest;
                fromJSON(object: any): _126.QueryGetProtoRevProfitsByDenomRequest;
                toJSON(message: _126.QueryGetProtoRevProfitsByDenomRequest): unknown;
                fromPartial(object: Partial<_126.QueryGetProtoRevProfitsByDenomRequest>): _126.QueryGetProtoRevProfitsByDenomRequest;
                fromSDK(object: _126.QueryGetProtoRevProfitsByDenomRequestSDKType): _126.QueryGetProtoRevProfitsByDenomRequest;
                toSDK(message: _126.QueryGetProtoRevProfitsByDenomRequest): _126.QueryGetProtoRevProfitsByDenomRequestSDKType;
                fromAmino(object: _126.QueryGetProtoRevProfitsByDenomRequestAmino): _126.QueryGetProtoRevProfitsByDenomRequest;
                toAmino(message: _126.QueryGetProtoRevProfitsByDenomRequest): _126.QueryGetProtoRevProfitsByDenomRequestAmino;
                fromAminoMsg(object: _126.QueryGetProtoRevProfitsByDenomRequestAminoMsg): _126.QueryGetProtoRevProfitsByDenomRequest;
                toAminoMsg(message: _126.QueryGetProtoRevProfitsByDenomRequest): _126.QueryGetProtoRevProfitsByDenomRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGetProtoRevProfitsByDenomRequestProtoMsg): _126.QueryGetProtoRevProfitsByDenomRequest;
                toProto(message: _126.QueryGetProtoRevProfitsByDenomRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGetProtoRevProfitsByDenomRequest): _126.QueryGetProtoRevProfitsByDenomRequestProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                typeUrl: string;
                encode(message: _126.QueryGetProtoRevProfitsByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryGetProtoRevProfitsByDenomResponse;
                fromJSON(object: any): _126.QueryGetProtoRevProfitsByDenomResponse;
                toJSON(message: _126.QueryGetProtoRevProfitsByDenomResponse): unknown;
                fromPartial(object: Partial<_126.QueryGetProtoRevProfitsByDenomResponse>): _126.QueryGetProtoRevProfitsByDenomResponse;
                fromSDK(object: _126.QueryGetProtoRevProfitsByDenomResponseSDKType): _126.QueryGetProtoRevProfitsByDenomResponse;
                toSDK(message: _126.QueryGetProtoRevProfitsByDenomResponse): _126.QueryGetProtoRevProfitsByDenomResponseSDKType;
                fromAmino(object: _126.QueryGetProtoRevProfitsByDenomResponseAmino): _126.QueryGetProtoRevProfitsByDenomResponse;
                toAmino(message: _126.QueryGetProtoRevProfitsByDenomResponse): _126.QueryGetProtoRevProfitsByDenomResponseAmino;
                fromAminoMsg(object: _126.QueryGetProtoRevProfitsByDenomResponseAminoMsg): _126.QueryGetProtoRevProfitsByDenomResponse;
                toAminoMsg(message: _126.QueryGetProtoRevProfitsByDenomResponse): _126.QueryGetProtoRevProfitsByDenomResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGetProtoRevProfitsByDenomResponseProtoMsg): _126.QueryGetProtoRevProfitsByDenomResponse;
                toProto(message: _126.QueryGetProtoRevProfitsByDenomResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGetProtoRevProfitsByDenomResponse): _126.QueryGetProtoRevProfitsByDenomResponseProtoMsg;
            };
            QueryGetProtoRevAllProfitsRequest: {
                typeUrl: string;
                encode(_: _126.QueryGetProtoRevAllProfitsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryGetProtoRevAllProfitsRequest;
                fromJSON(_: any): _126.QueryGetProtoRevAllProfitsRequest;
                toJSON(_: _126.QueryGetProtoRevAllProfitsRequest): unknown;
                fromPartial(_: Partial<_126.QueryGetProtoRevAllProfitsRequest>): _126.QueryGetProtoRevAllProfitsRequest;
                fromSDK(_: _126.QueryGetProtoRevAllProfitsRequestSDKType): _126.QueryGetProtoRevAllProfitsRequest;
                toSDK(_: _126.QueryGetProtoRevAllProfitsRequest): _126.QueryGetProtoRevAllProfitsRequestSDKType;
                fromAmino(_: _126.QueryGetProtoRevAllProfitsRequestAmino): _126.QueryGetProtoRevAllProfitsRequest;
                toAmino(_: _126.QueryGetProtoRevAllProfitsRequest): _126.QueryGetProtoRevAllProfitsRequestAmino;
                fromAminoMsg(object: _126.QueryGetProtoRevAllProfitsRequestAminoMsg): _126.QueryGetProtoRevAllProfitsRequest;
                toAminoMsg(message: _126.QueryGetProtoRevAllProfitsRequest): _126.QueryGetProtoRevAllProfitsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGetProtoRevAllProfitsRequestProtoMsg): _126.QueryGetProtoRevAllProfitsRequest;
                toProto(message: _126.QueryGetProtoRevAllProfitsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGetProtoRevAllProfitsRequest): _126.QueryGetProtoRevAllProfitsRequestProtoMsg;
            };
            QueryGetProtoRevAllProfitsResponse: {
                typeUrl: string;
                encode(message: _126.QueryGetProtoRevAllProfitsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryGetProtoRevAllProfitsResponse;
                fromJSON(object: any): _126.QueryGetProtoRevAllProfitsResponse;
                toJSON(message: _126.QueryGetProtoRevAllProfitsResponse): unknown;
                fromPartial(object: Partial<_126.QueryGetProtoRevAllProfitsResponse>): _126.QueryGetProtoRevAllProfitsResponse;
                fromSDK(object: _126.QueryGetProtoRevAllProfitsResponseSDKType): _126.QueryGetProtoRevAllProfitsResponse;
                toSDK(message: _126.QueryGetProtoRevAllProfitsResponse): _126.QueryGetProtoRevAllProfitsResponseSDKType;
                fromAmino(object: _126.QueryGetProtoRevAllProfitsResponseAmino): _126.QueryGetProtoRevAllProfitsResponse;
                toAmino(message: _126.QueryGetProtoRevAllProfitsResponse): _126.QueryGetProtoRevAllProfitsResponseAmino;
                fromAminoMsg(object: _126.QueryGetProtoRevAllProfitsResponseAminoMsg): _126.QueryGetProtoRevAllProfitsResponse;
                toAminoMsg(message: _126.QueryGetProtoRevAllProfitsResponse): _126.QueryGetProtoRevAllProfitsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGetProtoRevAllProfitsResponseProtoMsg): _126.QueryGetProtoRevAllProfitsResponse;
                toProto(message: _126.QueryGetProtoRevAllProfitsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGetProtoRevAllProfitsResponse): _126.QueryGetProtoRevAllProfitsResponseProtoMsg;
            };
            QueryGetProtoRevStatisticsByPoolRequest: {
                typeUrl: string;
                encode(message: _126.QueryGetProtoRevStatisticsByPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryGetProtoRevStatisticsByPoolRequest;
                fromJSON(object: any): _126.QueryGetProtoRevStatisticsByPoolRequest;
                toJSON(message: _126.QueryGetProtoRevStatisticsByPoolRequest): unknown;
                fromPartial(object: Partial<_126.QueryGetProtoRevStatisticsByPoolRequest>): _126.QueryGetProtoRevStatisticsByPoolRequest;
                fromSDK(object: _126.QueryGetProtoRevStatisticsByPoolRequestSDKType): _126.QueryGetProtoRevStatisticsByPoolRequest;
                toSDK(message: _126.QueryGetProtoRevStatisticsByPoolRequest): _126.QueryGetProtoRevStatisticsByPoolRequestSDKType;
                fromAmino(object: _126.QueryGetProtoRevStatisticsByPoolRequestAmino): _126.QueryGetProtoRevStatisticsByPoolRequest;
                toAmino(message: _126.QueryGetProtoRevStatisticsByPoolRequest): _126.QueryGetProtoRevStatisticsByPoolRequestAmino;
                fromAminoMsg(object: _126.QueryGetProtoRevStatisticsByPoolRequestAminoMsg): _126.QueryGetProtoRevStatisticsByPoolRequest;
                toAminoMsg(message: _126.QueryGetProtoRevStatisticsByPoolRequest): _126.QueryGetProtoRevStatisticsByPoolRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGetProtoRevStatisticsByPoolRequestProtoMsg): _126.QueryGetProtoRevStatisticsByPoolRequest;
                toProto(message: _126.QueryGetProtoRevStatisticsByPoolRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGetProtoRevStatisticsByPoolRequest): _126.QueryGetProtoRevStatisticsByPoolRequestProtoMsg;
            };
            QueryGetProtoRevStatisticsByPoolResponse: {
                typeUrl: string;
                encode(message: _126.QueryGetProtoRevStatisticsByPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryGetProtoRevStatisticsByPoolResponse;
                fromJSON(object: any): _126.QueryGetProtoRevStatisticsByPoolResponse;
                toJSON(message: _126.QueryGetProtoRevStatisticsByPoolResponse): unknown;
                fromPartial(object: Partial<_126.QueryGetProtoRevStatisticsByPoolResponse>): _126.QueryGetProtoRevStatisticsByPoolResponse;
                fromSDK(object: _126.QueryGetProtoRevStatisticsByPoolResponseSDKType): _126.QueryGetProtoRevStatisticsByPoolResponse;
                toSDK(message: _126.QueryGetProtoRevStatisticsByPoolResponse): _126.QueryGetProtoRevStatisticsByPoolResponseSDKType;
                fromAmino(object: _126.QueryGetProtoRevStatisticsByPoolResponseAmino): _126.QueryGetProtoRevStatisticsByPoolResponse;
                toAmino(message: _126.QueryGetProtoRevStatisticsByPoolResponse): _126.QueryGetProtoRevStatisticsByPoolResponseAmino;
                fromAminoMsg(object: _126.QueryGetProtoRevStatisticsByPoolResponseAminoMsg): _126.QueryGetProtoRevStatisticsByPoolResponse;
                toAminoMsg(message: _126.QueryGetProtoRevStatisticsByPoolResponse): _126.QueryGetProtoRevStatisticsByPoolResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGetProtoRevStatisticsByPoolResponseProtoMsg): _126.QueryGetProtoRevStatisticsByPoolResponse;
                toProto(message: _126.QueryGetProtoRevStatisticsByPoolResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGetProtoRevStatisticsByPoolResponse): _126.QueryGetProtoRevStatisticsByPoolResponseProtoMsg;
            };
            QueryGetProtoRevAllStatisticsRequest: {
                typeUrl: string;
                encode(_: _126.QueryGetProtoRevAllStatisticsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryGetProtoRevAllStatisticsRequest;
                fromJSON(_: any): _126.QueryGetProtoRevAllStatisticsRequest;
                toJSON(_: _126.QueryGetProtoRevAllStatisticsRequest): unknown;
                fromPartial(_: Partial<_126.QueryGetProtoRevAllStatisticsRequest>): _126.QueryGetProtoRevAllStatisticsRequest;
                fromSDK(_: _126.QueryGetProtoRevAllStatisticsRequestSDKType): _126.QueryGetProtoRevAllStatisticsRequest;
                toSDK(_: _126.QueryGetProtoRevAllStatisticsRequest): _126.QueryGetProtoRevAllStatisticsRequestSDKType;
                fromAmino(_: _126.QueryGetProtoRevAllStatisticsRequestAmino): _126.QueryGetProtoRevAllStatisticsRequest;
                toAmino(_: _126.QueryGetProtoRevAllStatisticsRequest): _126.QueryGetProtoRevAllStatisticsRequestAmino;
                fromAminoMsg(object: _126.QueryGetProtoRevAllStatisticsRequestAminoMsg): _126.QueryGetProtoRevAllStatisticsRequest;
                toAminoMsg(message: _126.QueryGetProtoRevAllStatisticsRequest): _126.QueryGetProtoRevAllStatisticsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGetProtoRevAllStatisticsRequestProtoMsg): _126.QueryGetProtoRevAllStatisticsRequest;
                toProto(message: _126.QueryGetProtoRevAllStatisticsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGetProtoRevAllStatisticsRequest): _126.QueryGetProtoRevAllStatisticsRequestProtoMsg;
            };
            QueryGetProtoRevAllStatisticsResponse: {
                typeUrl: string;
                encode(message: _126.QueryGetProtoRevAllStatisticsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryGetProtoRevAllStatisticsResponse;
                fromJSON(object: any): _126.QueryGetProtoRevAllStatisticsResponse;
                toJSON(message: _126.QueryGetProtoRevAllStatisticsResponse): unknown;
                fromPartial(object: Partial<_126.QueryGetProtoRevAllStatisticsResponse>): _126.QueryGetProtoRevAllStatisticsResponse;
                fromSDK(object: _126.QueryGetProtoRevAllStatisticsResponseSDKType): _126.QueryGetProtoRevAllStatisticsResponse;
                toSDK(message: _126.QueryGetProtoRevAllStatisticsResponse): _126.QueryGetProtoRevAllStatisticsResponseSDKType;
                fromAmino(object: _126.QueryGetProtoRevAllStatisticsResponseAmino): _126.QueryGetProtoRevAllStatisticsResponse;
                toAmino(message: _126.QueryGetProtoRevAllStatisticsResponse): _126.QueryGetProtoRevAllStatisticsResponseAmino;
                fromAminoMsg(object: _126.QueryGetProtoRevAllStatisticsResponseAminoMsg): _126.QueryGetProtoRevAllStatisticsResponse;
                toAminoMsg(message: _126.QueryGetProtoRevAllStatisticsResponse): _126.QueryGetProtoRevAllStatisticsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGetProtoRevAllStatisticsResponseProtoMsg): _126.QueryGetProtoRevAllStatisticsResponse;
                toProto(message: _126.QueryGetProtoRevAllStatisticsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGetProtoRevAllStatisticsResponse): _126.QueryGetProtoRevAllStatisticsResponseProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                typeUrl: string;
                encode(_: _126.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromJSON(_: any): _126.QueryGetProtoRevTokenPairArbRoutesRequest;
                toJSON(_: _126.QueryGetProtoRevTokenPairArbRoutesRequest): unknown;
                fromPartial(_: Partial<_126.QueryGetProtoRevTokenPairArbRoutesRequest>): _126.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromSDK(_: _126.QueryGetProtoRevTokenPairArbRoutesRequestSDKType): _126.QueryGetProtoRevTokenPairArbRoutesRequest;
                toSDK(_: _126.QueryGetProtoRevTokenPairArbRoutesRequest): _126.QueryGetProtoRevTokenPairArbRoutesRequestSDKType;
                fromAmino(_: _126.QueryGetProtoRevTokenPairArbRoutesRequestAmino): _126.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAmino(_: _126.QueryGetProtoRevTokenPairArbRoutesRequest): _126.QueryGetProtoRevTokenPairArbRoutesRequestAmino;
                fromAminoMsg(object: _126.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): _126.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAminoMsg(message: _126.QueryGetProtoRevTokenPairArbRoutesRequest): _126.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): _126.QueryGetProtoRevTokenPairArbRoutesRequest;
                toProto(message: _126.QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGetProtoRevTokenPairArbRoutesRequest): _126.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                typeUrl: string;
                encode(message: _126.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromJSON(object: any): _126.QueryGetProtoRevTokenPairArbRoutesResponse;
                toJSON(message: _126.QueryGetProtoRevTokenPairArbRoutesResponse): unknown;
                fromPartial(object: Partial<_126.QueryGetProtoRevTokenPairArbRoutesResponse>): _126.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromSDK(object: _126.QueryGetProtoRevTokenPairArbRoutesResponseSDKType): _126.QueryGetProtoRevTokenPairArbRoutesResponse;
                toSDK(message: _126.QueryGetProtoRevTokenPairArbRoutesResponse): _126.QueryGetProtoRevTokenPairArbRoutesResponseSDKType;
                fromAmino(object: _126.QueryGetProtoRevTokenPairArbRoutesResponseAmino): _126.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAmino(message: _126.QueryGetProtoRevTokenPairArbRoutesResponse): _126.QueryGetProtoRevTokenPairArbRoutesResponseAmino;
                fromAminoMsg(object: _126.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): _126.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAminoMsg(message: _126.QueryGetProtoRevTokenPairArbRoutesResponse): _126.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): _126.QueryGetProtoRevTokenPairArbRoutesResponse;
                toProto(message: _126.QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGetProtoRevTokenPairArbRoutesResponse): _126.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg;
            };
            TokenPairArbRoutes: {
                typeUrl: string;
                encode(message: _125.TokenPairArbRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.TokenPairArbRoutes;
                fromJSON(object: any): _125.TokenPairArbRoutes;
                toJSON(message: _125.TokenPairArbRoutes): unknown;
                fromPartial(object: Partial<_125.TokenPairArbRoutes>): _125.TokenPairArbRoutes;
                fromSDK(object: _125.TokenPairArbRoutesSDKType): _125.TokenPairArbRoutes;
                toSDK(message: _125.TokenPairArbRoutes): _125.TokenPairArbRoutesSDKType;
                fromAmino(object: _125.TokenPairArbRoutesAmino): _125.TokenPairArbRoutes;
                toAmino(message: _125.TokenPairArbRoutes): _125.TokenPairArbRoutesAmino;
                fromAminoMsg(object: _125.TokenPairArbRoutesAminoMsg): _125.TokenPairArbRoutes;
                toAminoMsg(message: _125.TokenPairArbRoutes): _125.TokenPairArbRoutesAminoMsg;
                fromProtoMsg(message: _125.TokenPairArbRoutesProtoMsg): _125.TokenPairArbRoutes;
                toProto(message: _125.TokenPairArbRoutes): Uint8Array;
                toProtoMsg(message: _125.TokenPairArbRoutes): _125.TokenPairArbRoutesProtoMsg;
            };
            Route: {
                typeUrl: string;
                encode(message: _125.Route, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.Route;
                fromJSON(object: any): _125.Route;
                toJSON(message: _125.Route): unknown;
                fromPartial(object: Partial<_125.Route>): _125.Route;
                fromSDK(object: _125.RouteSDKType): _125.Route;
                toSDK(message: _125.Route): _125.RouteSDKType;
                fromAmino(object: _125.RouteAmino): _125.Route;
                toAmino(message: _125.Route): _125.RouteAmino;
                fromAminoMsg(object: _125.RouteAminoMsg): _125.Route;
                toAminoMsg(message: _125.Route): _125.RouteAminoMsg;
                fromProtoMsg(message: _125.RouteProtoMsg): _125.Route;
                toProto(message: _125.Route): Uint8Array;
                toProtoMsg(message: _125.Route): _125.RouteProtoMsg;
            };
            Trade: {
                typeUrl: string;
                encode(message: _125.Trade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.Trade;
                fromJSON(object: any): _125.Trade;
                toJSON(message: _125.Trade): unknown;
                fromPartial(object: Partial<_125.Trade>): _125.Trade;
                fromSDK(object: _125.TradeSDKType): _125.Trade;
                toSDK(message: _125.Trade): _125.TradeSDKType;
                fromAmino(object: _125.TradeAmino): _125.Trade;
                toAmino(message: _125.Trade): _125.TradeAmino;
                fromAminoMsg(object: _125.TradeAminoMsg): _125.Trade;
                toAminoMsg(message: _125.Trade): _125.TradeAminoMsg;
                fromProtoMsg(message: _125.TradeProtoMsg): _125.Trade;
                toProto(message: _125.Trade): Uint8Array;
                toProtoMsg(message: _125.Trade): _125.TradeProtoMsg;
            };
            PoolStatistics: {
                typeUrl: string;
                encode(message: _125.PoolStatistics, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.PoolStatistics;
                fromJSON(object: any): _125.PoolStatistics;
                toJSON(message: _125.PoolStatistics): unknown;
                fromPartial(object: Partial<_125.PoolStatistics>): _125.PoolStatistics;
                fromSDK(object: _125.PoolStatisticsSDKType): _125.PoolStatistics;
                toSDK(message: _125.PoolStatistics): _125.PoolStatisticsSDKType;
                fromAmino(object: _125.PoolStatisticsAmino): _125.PoolStatistics;
                toAmino(message: _125.PoolStatistics): _125.PoolStatisticsAmino;
                fromAminoMsg(object: _125.PoolStatisticsAminoMsg): _125.PoolStatistics;
                toAminoMsg(message: _125.PoolStatistics): _125.PoolStatisticsAminoMsg;
                fromProtoMsg(message: _125.PoolStatisticsProtoMsg): _125.PoolStatistics;
                toProto(message: _125.PoolStatistics): Uint8Array;
                toProtoMsg(message: _125.PoolStatistics): _125.PoolStatisticsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _124.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Params;
                fromJSON(object: any): _124.Params;
                toJSON(message: _124.Params): unknown;
                fromPartial(object: Partial<_124.Params>): _124.Params;
                fromSDK(object: _124.ParamsSDKType): _124.Params;
                toSDK(message: _124.Params): _124.ParamsSDKType;
                fromAmino(object: _124.ParamsAmino): _124.Params;
                toAmino(message: _124.Params): _124.ParamsAmino;
                fromAminoMsg(object: _124.ParamsAminoMsg): _124.Params;
                toAminoMsg(message: _124.Params): _124.ParamsAminoMsg;
                fromProtoMsg(message: _124.ParamsProtoMsg): _124.Params;
                toProto(message: _124.Params): Uint8Array;
                toProtoMsg(message: _124.Params): _124.ParamsProtoMsg;
            };
            SetProtoRevEnabledProposal: {
                typeUrl: string;
                encode(message: _123.SetProtoRevEnabledProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.SetProtoRevEnabledProposal;
                fromJSON(object: any): _123.SetProtoRevEnabledProposal;
                toJSON(message: _123.SetProtoRevEnabledProposal): unknown;
                fromPartial(object: Partial<_123.SetProtoRevEnabledProposal>): _123.SetProtoRevEnabledProposal;
                fromSDK(object: _123.SetProtoRevEnabledProposalSDKType): _123.SetProtoRevEnabledProposal;
                toSDK(message: _123.SetProtoRevEnabledProposal): _123.SetProtoRevEnabledProposalSDKType;
                fromAmino(object: _123.SetProtoRevEnabledProposalAmino): _123.SetProtoRevEnabledProposal;
                toAmino(message: _123.SetProtoRevEnabledProposal): _123.SetProtoRevEnabledProposalAmino;
                fromAminoMsg(object: _123.SetProtoRevEnabledProposalAminoMsg): _123.SetProtoRevEnabledProposal;
                toAminoMsg(message: _123.SetProtoRevEnabledProposal): _123.SetProtoRevEnabledProposalAminoMsg;
                fromProtoMsg(message: _123.SetProtoRevEnabledProposalProtoMsg): _123.SetProtoRevEnabledProposal;
                toProto(message: _123.SetProtoRevEnabledProposal): Uint8Array;
                toProtoMsg(message: _123.SetProtoRevEnabledProposal): _123.SetProtoRevEnabledProposalProtoMsg;
            };
            SetProtoRevAdminAccountProposal: {
                typeUrl: string;
                encode(message: _123.SetProtoRevAdminAccountProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.SetProtoRevAdminAccountProposal;
                fromJSON(object: any): _123.SetProtoRevAdminAccountProposal;
                toJSON(message: _123.SetProtoRevAdminAccountProposal): unknown;
                fromPartial(object: Partial<_123.SetProtoRevAdminAccountProposal>): _123.SetProtoRevAdminAccountProposal;
                fromSDK(object: _123.SetProtoRevAdminAccountProposalSDKType): _123.SetProtoRevAdminAccountProposal;
                toSDK(message: _123.SetProtoRevAdminAccountProposal): _123.SetProtoRevAdminAccountProposalSDKType;
                fromAmino(object: _123.SetProtoRevAdminAccountProposalAmino): _123.SetProtoRevAdminAccountProposal;
                toAmino(message: _123.SetProtoRevAdminAccountProposal): _123.SetProtoRevAdminAccountProposalAmino;
                fromAminoMsg(object: _123.SetProtoRevAdminAccountProposalAminoMsg): _123.SetProtoRevAdminAccountProposal;
                toAminoMsg(message: _123.SetProtoRevAdminAccountProposal): _123.SetProtoRevAdminAccountProposalAminoMsg;
                fromProtoMsg(message: _123.SetProtoRevAdminAccountProposalProtoMsg): _123.SetProtoRevAdminAccountProposal;
                toProto(message: _123.SetProtoRevAdminAccountProposal): Uint8Array;
                toProtoMsg(message: _123.SetProtoRevAdminAccountProposal): _123.SetProtoRevAdminAccountProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _122.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.GenesisState;
                fromJSON(object: any): _122.GenesisState;
                toJSON(message: _122.GenesisState): unknown;
                fromPartial(object: Partial<_122.GenesisState>): _122.GenesisState;
                fromSDK(object: _122.GenesisStateSDKType): _122.GenesisState;
                toSDK(message: _122.GenesisState): _122.GenesisStateSDKType;
                fromAmino(object: _122.GenesisStateAmino): _122.GenesisState;
                toAmino(message: _122.GenesisState): _122.GenesisStateAmino;
                fromAminoMsg(object: _122.GenesisStateAminoMsg): _122.GenesisState;
                toAminoMsg(message: _122.GenesisState): _122.GenesisStateAminoMsg;
                fromProtoMsg(message: _122.GenesisStateProtoMsg): _122.GenesisState;
                toProto(message: _122.GenesisState): Uint8Array;
                toProtoMsg(message: _122.GenesisState): _122.GenesisStateProtoMsg;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                typeUrl: string;
                encode(message: _128.Node, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.Node;
                fromJSON(object: any): _128.Node;
                toJSON(message: _128.Node): unknown;
                fromPartial(object: Partial<_128.Node>): _128.Node;
                fromSDK(object: _128.NodeSDKType): _128.Node;
                toSDK(message: _128.Node): _128.NodeSDKType;
                fromAmino(object: _128.NodeAmino): _128.Node;
                toAmino(message: _128.Node): _128.NodeAmino;
                fromAminoMsg(object: _128.NodeAminoMsg): _128.Node;
                toAminoMsg(message: _128.Node): _128.NodeAminoMsg;
                fromProtoMsg(message: _128.NodeProtoMsg): _128.Node;
                toProto(message: _128.Node): Uint8Array;
                toProtoMsg(message: _128.Node): _128.NodeProtoMsg;
            };
            Child: {
                typeUrl: string;
                encode(message: _128.Child, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.Child;
                fromJSON(object: any): _128.Child;
                toJSON(message: _128.Child): unknown;
                fromPartial(object: Partial<_128.Child>): _128.Child;
                fromSDK(object: _128.ChildSDKType): _128.Child;
                toSDK(message: _128.Child): _128.ChildSDKType;
                fromAmino(object: _128.ChildAmino): _128.Child;
                toAmino(message: _128.Child): _128.ChildAmino;
                fromAminoMsg(object: _128.ChildAminoMsg): _128.Child;
                toAminoMsg(message: _128.Child): _128.ChildAminoMsg;
                fromProtoMsg(message: _128.ChildProtoMsg): _128.Child;
                toProto(message: _128.Child): Uint8Array;
                toProtoMsg(message: _128.Child): _128.ChildProtoMsg;
            };
            Leaf: {
                typeUrl: string;
                encode(message: _128.Leaf, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.Leaf;
                fromJSON(object: any): _128.Leaf;
                toJSON(message: _128.Leaf): unknown;
                fromPartial(object: Partial<_128.Leaf>): _128.Leaf;
                fromSDK(object: _128.LeafSDKType): _128.Leaf;
                toSDK(message: _128.Leaf): _128.LeafSDKType;
                fromAmino(object: _128.LeafAmino): _128.Leaf;
                toAmino(message: _128.Leaf): _128.LeafAmino;
                fromAminoMsg(object: _128.LeafAminoMsg): _128.Leaf;
                toAminoMsg(message: _128.Leaf): _128.LeafAminoMsg;
                fromProtoMsg(message: _128.LeafProtoMsg): _128.Leaf;
                toProto(message: _128.Leaf): Uint8Array;
                toProtoMsg(message: _128.Leaf): _128.LeafProtoMsg;
            };
        };
    }
    const superfluid: {
        Msg: typeof _301.Msg;
        Query: typeof _289.Query;
        QueryClientImpl: typeof _289.QueryClientImpl;
        LCDQueryClient: typeof _273.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _133.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _133.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _133.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _133.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _133.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _133.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _133.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _133.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _133.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _133.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _133.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _133.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _133.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _133.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _133.MsgUnPoolWhitelistedPool;
                };
            };
            toJSON: {
                superfluidDelegate(value: _133.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _133.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _133.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _133.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                unPoolWhitelistedPool(value: _133.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _133.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _133.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _133.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _133.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _133.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _133.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _133.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _133.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _133.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _133.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _133.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _133.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _133.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _133.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _133.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _133.MsgSuperfluidDelegate) => _133.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _133.MsgSuperfluidDelegateAmino) => _133.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _133.MsgSuperfluidUndelegate) => _133.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _133.MsgSuperfluidUndelegateAmino) => _133.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _133.MsgSuperfluidUnbondLock) => _133.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _133.MsgSuperfluidUnbondLockAmino) => _133.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _133.MsgLockAndSuperfluidDelegate) => _133.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _133.MsgLockAndSuperfluidDelegateAmino) => _133.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _133.MsgUnPoolWhitelistedPool) => _133.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _133.MsgUnPoolWhitelistedPoolAmino) => _133.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _133.MsgSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgSuperfluidDelegate;
            fromJSON(object: any): _133.MsgSuperfluidDelegate;
            toJSON(message: _133.MsgSuperfluidDelegate): unknown;
            fromPartial(object: Partial<_133.MsgSuperfluidDelegate>): _133.MsgSuperfluidDelegate;
            fromSDK(object: _133.MsgSuperfluidDelegateSDKType): _133.MsgSuperfluidDelegate;
            toSDK(message: _133.MsgSuperfluidDelegate): _133.MsgSuperfluidDelegateSDKType;
            fromAmino(object: _133.MsgSuperfluidDelegateAmino): _133.MsgSuperfluidDelegate;
            toAmino(message: _133.MsgSuperfluidDelegate): _133.MsgSuperfluidDelegateAmino;
            fromAminoMsg(object: _133.MsgSuperfluidDelegateAminoMsg): _133.MsgSuperfluidDelegate;
            toAminoMsg(message: _133.MsgSuperfluidDelegate): _133.MsgSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _133.MsgSuperfluidDelegateProtoMsg): _133.MsgSuperfluidDelegate;
            toProto(message: _133.MsgSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _133.MsgSuperfluidDelegate): _133.MsgSuperfluidDelegateProtoMsg;
        };
        MsgSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(_: _133.MsgSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _133.MsgSuperfluidDelegateResponse;
            toJSON(_: _133.MsgSuperfluidDelegateResponse): unknown;
            fromPartial(_: Partial<_133.MsgSuperfluidDelegateResponse>): _133.MsgSuperfluidDelegateResponse;
            fromSDK(_: _133.MsgSuperfluidDelegateResponseSDKType): _133.MsgSuperfluidDelegateResponse;
            toSDK(_: _133.MsgSuperfluidDelegateResponse): _133.MsgSuperfluidDelegateResponseSDKType;
            fromAmino(_: _133.MsgSuperfluidDelegateResponseAmino): _133.MsgSuperfluidDelegateResponse;
            toAmino(_: _133.MsgSuperfluidDelegateResponse): _133.MsgSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _133.MsgSuperfluidDelegateResponseAminoMsg): _133.MsgSuperfluidDelegateResponse;
            toAminoMsg(message: _133.MsgSuperfluidDelegateResponse): _133.MsgSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _133.MsgSuperfluidDelegateResponseProtoMsg): _133.MsgSuperfluidDelegateResponse;
            toProto(message: _133.MsgSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _133.MsgSuperfluidDelegateResponse): _133.MsgSuperfluidDelegateResponseProtoMsg;
        };
        MsgSuperfluidUndelegate: {
            typeUrl: string;
            encode(message: _133.MsgSuperfluidUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgSuperfluidUndelegate;
            fromJSON(object: any): _133.MsgSuperfluidUndelegate;
            toJSON(message: _133.MsgSuperfluidUndelegate): unknown;
            fromPartial(object: Partial<_133.MsgSuperfluidUndelegate>): _133.MsgSuperfluidUndelegate;
            fromSDK(object: _133.MsgSuperfluidUndelegateSDKType): _133.MsgSuperfluidUndelegate;
            toSDK(message: _133.MsgSuperfluidUndelegate): _133.MsgSuperfluidUndelegateSDKType;
            fromAmino(object: _133.MsgSuperfluidUndelegateAmino): _133.MsgSuperfluidUndelegate;
            toAmino(message: _133.MsgSuperfluidUndelegate): _133.MsgSuperfluidUndelegateAmino;
            fromAminoMsg(object: _133.MsgSuperfluidUndelegateAminoMsg): _133.MsgSuperfluidUndelegate;
            toAminoMsg(message: _133.MsgSuperfluidUndelegate): _133.MsgSuperfluidUndelegateAminoMsg;
            fromProtoMsg(message: _133.MsgSuperfluidUndelegateProtoMsg): _133.MsgSuperfluidUndelegate;
            toProto(message: _133.MsgSuperfluidUndelegate): Uint8Array;
            toProtoMsg(message: _133.MsgSuperfluidUndelegate): _133.MsgSuperfluidUndelegateProtoMsg;
        };
        MsgSuperfluidUndelegateResponse: {
            typeUrl: string;
            encode(_: _133.MsgSuperfluidUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _133.MsgSuperfluidUndelegateResponse;
            toJSON(_: _133.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial(_: Partial<_133.MsgSuperfluidUndelegateResponse>): _133.MsgSuperfluidUndelegateResponse;
            fromSDK(_: _133.MsgSuperfluidUndelegateResponseSDKType): _133.MsgSuperfluidUndelegateResponse;
            toSDK(_: _133.MsgSuperfluidUndelegateResponse): _133.MsgSuperfluidUndelegateResponseSDKType;
            fromAmino(_: _133.MsgSuperfluidUndelegateResponseAmino): _133.MsgSuperfluidUndelegateResponse;
            toAmino(_: _133.MsgSuperfluidUndelegateResponse): _133.MsgSuperfluidUndelegateResponseAmino;
            fromAminoMsg(object: _133.MsgSuperfluidUndelegateResponseAminoMsg): _133.MsgSuperfluidUndelegateResponse;
            toAminoMsg(message: _133.MsgSuperfluidUndelegateResponse): _133.MsgSuperfluidUndelegateResponseAminoMsg;
            fromProtoMsg(message: _133.MsgSuperfluidUndelegateResponseProtoMsg): _133.MsgSuperfluidUndelegateResponse;
            toProto(message: _133.MsgSuperfluidUndelegateResponse): Uint8Array;
            toProtoMsg(message: _133.MsgSuperfluidUndelegateResponse): _133.MsgSuperfluidUndelegateResponseProtoMsg;
        };
        MsgSuperfluidUnbondLock: {
            typeUrl: string;
            encode(message: _133.MsgSuperfluidUnbondLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _133.MsgSuperfluidUnbondLock;
            toJSON(message: _133.MsgSuperfluidUnbondLock): unknown;
            fromPartial(object: Partial<_133.MsgSuperfluidUnbondLock>): _133.MsgSuperfluidUnbondLock;
            fromSDK(object: _133.MsgSuperfluidUnbondLockSDKType): _133.MsgSuperfluidUnbondLock;
            toSDK(message: _133.MsgSuperfluidUnbondLock): _133.MsgSuperfluidUnbondLockSDKType;
            fromAmino(object: _133.MsgSuperfluidUnbondLockAmino): _133.MsgSuperfluidUnbondLock;
            toAmino(message: _133.MsgSuperfluidUnbondLock): _133.MsgSuperfluidUnbondLockAmino;
            fromAminoMsg(object: _133.MsgSuperfluidUnbondLockAminoMsg): _133.MsgSuperfluidUnbondLock;
            toAminoMsg(message: _133.MsgSuperfluidUnbondLock): _133.MsgSuperfluidUnbondLockAminoMsg;
            fromProtoMsg(message: _133.MsgSuperfluidUnbondLockProtoMsg): _133.MsgSuperfluidUnbondLock;
            toProto(message: _133.MsgSuperfluidUnbondLock): Uint8Array;
            toProtoMsg(message: _133.MsgSuperfluidUnbondLock): _133.MsgSuperfluidUnbondLockProtoMsg;
        };
        MsgSuperfluidUnbondLockResponse: {
            typeUrl: string;
            encode(_: _133.MsgSuperfluidUnbondLockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _133.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _133.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial(_: Partial<_133.MsgSuperfluidUnbondLockResponse>): _133.MsgSuperfluidUnbondLockResponse;
            fromSDK(_: _133.MsgSuperfluidUnbondLockResponseSDKType): _133.MsgSuperfluidUnbondLockResponse;
            toSDK(_: _133.MsgSuperfluidUnbondLockResponse): _133.MsgSuperfluidUnbondLockResponseSDKType;
            fromAmino(_: _133.MsgSuperfluidUnbondLockResponseAmino): _133.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _133.MsgSuperfluidUnbondLockResponse): _133.MsgSuperfluidUnbondLockResponseAmino;
            fromAminoMsg(object: _133.MsgSuperfluidUnbondLockResponseAminoMsg): _133.MsgSuperfluidUnbondLockResponse;
            toAminoMsg(message: _133.MsgSuperfluidUnbondLockResponse): _133.MsgSuperfluidUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _133.MsgSuperfluidUnbondLockResponseProtoMsg): _133.MsgSuperfluidUnbondLockResponse;
            toProto(message: _133.MsgSuperfluidUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _133.MsgSuperfluidUnbondLockResponse): _133.MsgSuperfluidUnbondLockResponseProtoMsg;
        };
        MsgLockAndSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _133.MsgLockAndSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _133.MsgLockAndSuperfluidDelegate;
            toJSON(message: _133.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial(object: Partial<_133.MsgLockAndSuperfluidDelegate>): _133.MsgLockAndSuperfluidDelegate;
            fromSDK(object: _133.MsgLockAndSuperfluidDelegateSDKType): _133.MsgLockAndSuperfluidDelegate;
            toSDK(message: _133.MsgLockAndSuperfluidDelegate): _133.MsgLockAndSuperfluidDelegateSDKType;
            fromAmino(object: _133.MsgLockAndSuperfluidDelegateAmino): _133.MsgLockAndSuperfluidDelegate;
            toAmino(message: _133.MsgLockAndSuperfluidDelegate): _133.MsgLockAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _133.MsgLockAndSuperfluidDelegateAminoMsg): _133.MsgLockAndSuperfluidDelegate;
            toAminoMsg(message: _133.MsgLockAndSuperfluidDelegate): _133.MsgLockAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _133.MsgLockAndSuperfluidDelegateProtoMsg): _133.MsgLockAndSuperfluidDelegate;
            toProto(message: _133.MsgLockAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _133.MsgLockAndSuperfluidDelegate): _133.MsgLockAndSuperfluidDelegateProtoMsg;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(message: _133.MsgLockAndSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _133.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _133.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial(object: Partial<_133.MsgLockAndSuperfluidDelegateResponse>): _133.MsgLockAndSuperfluidDelegateResponse;
            fromSDK(object: _133.MsgLockAndSuperfluidDelegateResponseSDKType): _133.MsgLockAndSuperfluidDelegateResponse;
            toSDK(message: _133.MsgLockAndSuperfluidDelegateResponse): _133.MsgLockAndSuperfluidDelegateResponseSDKType;
            fromAmino(object: _133.MsgLockAndSuperfluidDelegateResponseAmino): _133.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _133.MsgLockAndSuperfluidDelegateResponse): _133.MsgLockAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _133.MsgLockAndSuperfluidDelegateResponseAminoMsg): _133.MsgLockAndSuperfluidDelegateResponse;
            toAminoMsg(message: _133.MsgLockAndSuperfluidDelegateResponse): _133.MsgLockAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _133.MsgLockAndSuperfluidDelegateResponseProtoMsg): _133.MsgLockAndSuperfluidDelegateResponse;
            toProto(message: _133.MsgLockAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _133.MsgLockAndSuperfluidDelegateResponse): _133.MsgLockAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgUnPoolWhitelistedPool: {
            typeUrl: string;
            encode(message: _133.MsgUnPoolWhitelistedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgUnPoolWhitelistedPool;
            fromJSON(object: any): _133.MsgUnPoolWhitelistedPool;
            toJSON(message: _133.MsgUnPoolWhitelistedPool): unknown;
            fromPartial(object: Partial<_133.MsgUnPoolWhitelistedPool>): _133.MsgUnPoolWhitelistedPool;
            fromSDK(object: _133.MsgUnPoolWhitelistedPoolSDKType): _133.MsgUnPoolWhitelistedPool;
            toSDK(message: _133.MsgUnPoolWhitelistedPool): _133.MsgUnPoolWhitelistedPoolSDKType;
            fromAmino(object: _133.MsgUnPoolWhitelistedPoolAmino): _133.MsgUnPoolWhitelistedPool;
            toAmino(message: _133.MsgUnPoolWhitelistedPool): _133.MsgUnPoolWhitelistedPoolAmino;
            fromAminoMsg(object: _133.MsgUnPoolWhitelistedPoolAminoMsg): _133.MsgUnPoolWhitelistedPool;
            toAminoMsg(message: _133.MsgUnPoolWhitelistedPool): _133.MsgUnPoolWhitelistedPoolAminoMsg;
            fromProtoMsg(message: _133.MsgUnPoolWhitelistedPoolProtoMsg): _133.MsgUnPoolWhitelistedPool;
            toProto(message: _133.MsgUnPoolWhitelistedPool): Uint8Array;
            toProtoMsg(message: _133.MsgUnPoolWhitelistedPool): _133.MsgUnPoolWhitelistedPoolProtoMsg;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            typeUrl: string;
            encode(message: _133.MsgUnPoolWhitelistedPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgUnPoolWhitelistedPoolResponse;
            fromJSON(object: any): _133.MsgUnPoolWhitelistedPoolResponse;
            toJSON(message: _133.MsgUnPoolWhitelistedPoolResponse): unknown;
            fromPartial(object: Partial<_133.MsgUnPoolWhitelistedPoolResponse>): _133.MsgUnPoolWhitelistedPoolResponse;
            fromSDK(object: _133.MsgUnPoolWhitelistedPoolResponseSDKType): _133.MsgUnPoolWhitelistedPoolResponse;
            toSDK(message: _133.MsgUnPoolWhitelistedPoolResponse): _133.MsgUnPoolWhitelistedPoolResponseSDKType;
            fromAmino(object: _133.MsgUnPoolWhitelistedPoolResponseAmino): _133.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _133.MsgUnPoolWhitelistedPoolResponse): _133.MsgUnPoolWhitelistedPoolResponseAmino;
            fromAminoMsg(object: _133.MsgUnPoolWhitelistedPoolResponseAminoMsg): _133.MsgUnPoolWhitelistedPoolResponse;
            toAminoMsg(message: _133.MsgUnPoolWhitelistedPoolResponse): _133.MsgUnPoolWhitelistedPoolResponseAminoMsg;
            fromProtoMsg(message: _133.MsgUnPoolWhitelistedPoolResponseProtoMsg): _133.MsgUnPoolWhitelistedPoolResponse;
            toProto(message: _133.MsgUnPoolWhitelistedPoolResponse): Uint8Array;
            toProtoMsg(message: _133.MsgUnPoolWhitelistedPoolResponse): _133.MsgUnPoolWhitelistedPoolResponseProtoMsg;
        };
        superfluidAssetTypeFromJSON(object: any): _132.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _132.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _132.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _132.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _132.SuperfluidAssetType;
        SuperfluidAsset: {
            typeUrl: string;
            encode(message: _132.SuperfluidAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.SuperfluidAsset;
            fromJSON(object: any): _132.SuperfluidAsset;
            toJSON(message: _132.SuperfluidAsset): unknown;
            fromPartial(object: Partial<_132.SuperfluidAsset>): _132.SuperfluidAsset;
            fromSDK(object: _132.SuperfluidAssetSDKType): _132.SuperfluidAsset;
            toSDK(message: _132.SuperfluidAsset): _132.SuperfluidAssetSDKType;
            fromAmino(object: _132.SuperfluidAssetAmino): _132.SuperfluidAsset;
            toAmino(message: _132.SuperfluidAsset): _132.SuperfluidAssetAmino;
            fromAminoMsg(object: _132.SuperfluidAssetAminoMsg): _132.SuperfluidAsset;
            toAminoMsg(message: _132.SuperfluidAsset): _132.SuperfluidAssetAminoMsg;
            fromProtoMsg(message: _132.SuperfluidAssetProtoMsg): _132.SuperfluidAsset;
            toProto(message: _132.SuperfluidAsset): Uint8Array;
            toProtoMsg(message: _132.SuperfluidAsset): _132.SuperfluidAssetProtoMsg;
        };
        SuperfluidIntermediaryAccount: {
            typeUrl: string;
            encode(message: _132.SuperfluidIntermediaryAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _132.SuperfluidIntermediaryAccount;
            toJSON(message: _132.SuperfluidIntermediaryAccount): unknown;
            fromPartial(object: Partial<_132.SuperfluidIntermediaryAccount>): _132.SuperfluidIntermediaryAccount;
            fromSDK(object: _132.SuperfluidIntermediaryAccountSDKType): _132.SuperfluidIntermediaryAccount;
            toSDK(message: _132.SuperfluidIntermediaryAccount): _132.SuperfluidIntermediaryAccountSDKType;
            fromAmino(object: _132.SuperfluidIntermediaryAccountAmino): _132.SuperfluidIntermediaryAccount;
            toAmino(message: _132.SuperfluidIntermediaryAccount): _132.SuperfluidIntermediaryAccountAmino;
            fromAminoMsg(object: _132.SuperfluidIntermediaryAccountAminoMsg): _132.SuperfluidIntermediaryAccount;
            toAminoMsg(message: _132.SuperfluidIntermediaryAccount): _132.SuperfluidIntermediaryAccountAminoMsg;
            fromProtoMsg(message: _132.SuperfluidIntermediaryAccountProtoMsg): _132.SuperfluidIntermediaryAccount;
            toProto(message: _132.SuperfluidIntermediaryAccount): Uint8Array;
            toProtoMsg(message: _132.SuperfluidIntermediaryAccount): _132.SuperfluidIntermediaryAccountProtoMsg;
        };
        OsmoEquivalentMultiplierRecord: {
            typeUrl: string;
            encode(message: _132.OsmoEquivalentMultiplierRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _132.OsmoEquivalentMultiplierRecord;
            toJSON(message: _132.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial(object: Partial<_132.OsmoEquivalentMultiplierRecord>): _132.OsmoEquivalentMultiplierRecord;
            fromSDK(object: _132.OsmoEquivalentMultiplierRecordSDKType): _132.OsmoEquivalentMultiplierRecord;
            toSDK(message: _132.OsmoEquivalentMultiplierRecord): _132.OsmoEquivalentMultiplierRecordSDKType;
            fromAmino(object: _132.OsmoEquivalentMultiplierRecordAmino): _132.OsmoEquivalentMultiplierRecord;
            toAmino(message: _132.OsmoEquivalentMultiplierRecord): _132.OsmoEquivalentMultiplierRecordAmino;
            fromAminoMsg(object: _132.OsmoEquivalentMultiplierRecordAminoMsg): _132.OsmoEquivalentMultiplierRecord;
            toAminoMsg(message: _132.OsmoEquivalentMultiplierRecord): _132.OsmoEquivalentMultiplierRecordAminoMsg;
            fromProtoMsg(message: _132.OsmoEquivalentMultiplierRecordProtoMsg): _132.OsmoEquivalentMultiplierRecord;
            toProto(message: _132.OsmoEquivalentMultiplierRecord): Uint8Array;
            toProtoMsg(message: _132.OsmoEquivalentMultiplierRecord): _132.OsmoEquivalentMultiplierRecordProtoMsg;
        };
        SuperfluidDelegationRecord: {
            typeUrl: string;
            encode(message: _132.SuperfluidDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.SuperfluidDelegationRecord;
            fromJSON(object: any): _132.SuperfluidDelegationRecord;
            toJSON(message: _132.SuperfluidDelegationRecord): unknown;
            fromPartial(object: Partial<_132.SuperfluidDelegationRecord>): _132.SuperfluidDelegationRecord;
            fromSDK(object: _132.SuperfluidDelegationRecordSDKType): _132.SuperfluidDelegationRecord;
            toSDK(message: _132.SuperfluidDelegationRecord): _132.SuperfluidDelegationRecordSDKType;
            fromAmino(object: _132.SuperfluidDelegationRecordAmino): _132.SuperfluidDelegationRecord;
            toAmino(message: _132.SuperfluidDelegationRecord): _132.SuperfluidDelegationRecordAmino;
            fromAminoMsg(object: _132.SuperfluidDelegationRecordAminoMsg): _132.SuperfluidDelegationRecord;
            toAminoMsg(message: _132.SuperfluidDelegationRecord): _132.SuperfluidDelegationRecordAminoMsg;
            fromProtoMsg(message: _132.SuperfluidDelegationRecordProtoMsg): _132.SuperfluidDelegationRecord;
            toProto(message: _132.SuperfluidDelegationRecord): Uint8Array;
            toProtoMsg(message: _132.SuperfluidDelegationRecord): _132.SuperfluidDelegationRecordProtoMsg;
        };
        LockIdIntermediaryAccountConnection: {
            typeUrl: string;
            encode(message: _132.LockIdIntermediaryAccountConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _132.LockIdIntermediaryAccountConnection;
            toJSON(message: _132.LockIdIntermediaryAccountConnection): unknown;
            fromPartial(object: Partial<_132.LockIdIntermediaryAccountConnection>): _132.LockIdIntermediaryAccountConnection;
            fromSDK(object: _132.LockIdIntermediaryAccountConnectionSDKType): _132.LockIdIntermediaryAccountConnection;
            toSDK(message: _132.LockIdIntermediaryAccountConnection): _132.LockIdIntermediaryAccountConnectionSDKType;
            fromAmino(object: _132.LockIdIntermediaryAccountConnectionAmino): _132.LockIdIntermediaryAccountConnection;
            toAmino(message: _132.LockIdIntermediaryAccountConnection): _132.LockIdIntermediaryAccountConnectionAmino;
            fromAminoMsg(object: _132.LockIdIntermediaryAccountConnectionAminoMsg): _132.LockIdIntermediaryAccountConnection;
            toAminoMsg(message: _132.LockIdIntermediaryAccountConnection): _132.LockIdIntermediaryAccountConnectionAminoMsg;
            fromProtoMsg(message: _132.LockIdIntermediaryAccountConnectionProtoMsg): _132.LockIdIntermediaryAccountConnection;
            toProto(message: _132.LockIdIntermediaryAccountConnection): Uint8Array;
            toProtoMsg(message: _132.LockIdIntermediaryAccountConnection): _132.LockIdIntermediaryAccountConnectionProtoMsg;
        };
        UnpoolWhitelistedPools: {
            typeUrl: string;
            encode(message: _132.UnpoolWhitelistedPools, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.UnpoolWhitelistedPools;
            fromJSON(object: any): _132.UnpoolWhitelistedPools;
            toJSON(message: _132.UnpoolWhitelistedPools): unknown;
            fromPartial(object: Partial<_132.UnpoolWhitelistedPools>): _132.UnpoolWhitelistedPools;
            fromSDK(object: _132.UnpoolWhitelistedPoolsSDKType): _132.UnpoolWhitelistedPools;
            toSDK(message: _132.UnpoolWhitelistedPools): _132.UnpoolWhitelistedPoolsSDKType;
            fromAmino(object: _132.UnpoolWhitelistedPoolsAmino): _132.UnpoolWhitelistedPools;
            toAmino(message: _132.UnpoolWhitelistedPools): _132.UnpoolWhitelistedPoolsAmino;
            fromAminoMsg(object: _132.UnpoolWhitelistedPoolsAminoMsg): _132.UnpoolWhitelistedPools;
            toAminoMsg(message: _132.UnpoolWhitelistedPools): _132.UnpoolWhitelistedPoolsAminoMsg;
            fromProtoMsg(message: _132.UnpoolWhitelistedPoolsProtoMsg): _132.UnpoolWhitelistedPools;
            toProto(message: _132.UnpoolWhitelistedPools): Uint8Array;
            toProtoMsg(message: _132.UnpoolWhitelistedPools): _132.UnpoolWhitelistedPoolsProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _131.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.QueryParamsRequest;
            fromJSON(_: any): _131.QueryParamsRequest;
            toJSON(_: _131.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_131.QueryParamsRequest>): _131.QueryParamsRequest;
            fromSDK(_: _131.QueryParamsRequestSDKType): _131.QueryParamsRequest;
            toSDK(_: _131.QueryParamsRequest): _131.QueryParamsRequestSDKType;
            fromAmino(_: _131.QueryParamsRequestAmino): _131.QueryParamsRequest;
            toAmino(_: _131.QueryParamsRequest): _131.QueryParamsRequestAmino;
            fromAminoMsg(object: _131.QueryParamsRequestAminoMsg): _131.QueryParamsRequest;
            toAminoMsg(message: _131.QueryParamsRequest): _131.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _131.QueryParamsRequestProtoMsg): _131.QueryParamsRequest;
            toProto(message: _131.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _131.QueryParamsRequest): _131.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _131.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.QueryParamsResponse;
            fromJSON(object: any): _131.QueryParamsResponse;
            toJSON(message: _131.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_131.QueryParamsResponse>): _131.QueryParamsResponse;
            fromSDK(object: _131.QueryParamsResponseSDKType): _131.QueryParamsResponse;
            toSDK(message: _131.QueryParamsResponse): _131.QueryParamsResponseSDKType;
            fromAmino(object: _131.QueryParamsResponseAmino): _131.QueryParamsResponse;
            toAmino(message: _131.QueryParamsResponse): _131.QueryParamsResponseAmino;
            fromAminoMsg(object: _131.QueryParamsResponseAminoMsg): _131.QueryParamsResponse;
            toAminoMsg(message: _131.QueryParamsResponse): _131.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _131.QueryParamsResponseProtoMsg): _131.QueryParamsResponse;
            toProto(message: _131.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _131.QueryParamsResponse): _131.QueryParamsResponseProtoMsg;
        };
        AssetTypeRequest: {
            typeUrl: string;
            encode(message: _131.AssetTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.AssetTypeRequest;
            fromJSON(object: any): _131.AssetTypeRequest;
            toJSON(message: _131.AssetTypeRequest): unknown;
            fromPartial(object: Partial<_131.AssetTypeRequest>): _131.AssetTypeRequest;
            fromSDK(object: _131.AssetTypeRequestSDKType): _131.AssetTypeRequest;
            toSDK(message: _131.AssetTypeRequest): _131.AssetTypeRequestSDKType;
            fromAmino(object: _131.AssetTypeRequestAmino): _131.AssetTypeRequest;
            toAmino(message: _131.AssetTypeRequest): _131.AssetTypeRequestAmino;
            fromAminoMsg(object: _131.AssetTypeRequestAminoMsg): _131.AssetTypeRequest;
            toAminoMsg(message: _131.AssetTypeRequest): _131.AssetTypeRequestAminoMsg;
            fromProtoMsg(message: _131.AssetTypeRequestProtoMsg): _131.AssetTypeRequest;
            toProto(message: _131.AssetTypeRequest): Uint8Array;
            toProtoMsg(message: _131.AssetTypeRequest): _131.AssetTypeRequestProtoMsg;
        };
        AssetTypeResponse: {
            typeUrl: string;
            encode(message: _131.AssetTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.AssetTypeResponse;
            fromJSON(object: any): _131.AssetTypeResponse;
            toJSON(message: _131.AssetTypeResponse): unknown;
            fromPartial(object: Partial<_131.AssetTypeResponse>): _131.AssetTypeResponse;
            fromSDK(object: _131.AssetTypeResponseSDKType): _131.AssetTypeResponse;
            toSDK(message: _131.AssetTypeResponse): _131.AssetTypeResponseSDKType;
            fromAmino(object: _131.AssetTypeResponseAmino): _131.AssetTypeResponse;
            toAmino(message: _131.AssetTypeResponse): _131.AssetTypeResponseAmino;
            fromAminoMsg(object: _131.AssetTypeResponseAminoMsg): _131.AssetTypeResponse;
            toAminoMsg(message: _131.AssetTypeResponse): _131.AssetTypeResponseAminoMsg;
            fromProtoMsg(message: _131.AssetTypeResponseProtoMsg): _131.AssetTypeResponse;
            toProto(message: _131.AssetTypeResponse): Uint8Array;
            toProtoMsg(message: _131.AssetTypeResponse): _131.AssetTypeResponseProtoMsg;
        };
        AllAssetsRequest: {
            typeUrl: string;
            encode(_: _131.AllAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.AllAssetsRequest;
            fromJSON(_: any): _131.AllAssetsRequest;
            toJSON(_: _131.AllAssetsRequest): unknown;
            fromPartial(_: Partial<_131.AllAssetsRequest>): _131.AllAssetsRequest;
            fromSDK(_: _131.AllAssetsRequestSDKType): _131.AllAssetsRequest;
            toSDK(_: _131.AllAssetsRequest): _131.AllAssetsRequestSDKType;
            fromAmino(_: _131.AllAssetsRequestAmino): _131.AllAssetsRequest;
            toAmino(_: _131.AllAssetsRequest): _131.AllAssetsRequestAmino;
            fromAminoMsg(object: _131.AllAssetsRequestAminoMsg): _131.AllAssetsRequest;
            toAminoMsg(message: _131.AllAssetsRequest): _131.AllAssetsRequestAminoMsg;
            fromProtoMsg(message: _131.AllAssetsRequestProtoMsg): _131.AllAssetsRequest;
            toProto(message: _131.AllAssetsRequest): Uint8Array;
            toProtoMsg(message: _131.AllAssetsRequest): _131.AllAssetsRequestProtoMsg;
        };
        AllAssetsResponse: {
            typeUrl: string;
            encode(message: _131.AllAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.AllAssetsResponse;
            fromJSON(object: any): _131.AllAssetsResponse;
            toJSON(message: _131.AllAssetsResponse): unknown;
            fromPartial(object: Partial<_131.AllAssetsResponse>): _131.AllAssetsResponse;
            fromSDK(object: _131.AllAssetsResponseSDKType): _131.AllAssetsResponse;
            toSDK(message: _131.AllAssetsResponse): _131.AllAssetsResponseSDKType;
            fromAmino(object: _131.AllAssetsResponseAmino): _131.AllAssetsResponse;
            toAmino(message: _131.AllAssetsResponse): _131.AllAssetsResponseAmino;
            fromAminoMsg(object: _131.AllAssetsResponseAminoMsg): _131.AllAssetsResponse;
            toAminoMsg(message: _131.AllAssetsResponse): _131.AllAssetsResponseAminoMsg;
            fromProtoMsg(message: _131.AllAssetsResponseProtoMsg): _131.AllAssetsResponse;
            toProto(message: _131.AllAssetsResponse): Uint8Array;
            toProtoMsg(message: _131.AllAssetsResponse): _131.AllAssetsResponseProtoMsg;
        };
        AssetMultiplierRequest: {
            typeUrl: string;
            encode(message: _131.AssetMultiplierRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.AssetMultiplierRequest;
            fromJSON(object: any): _131.AssetMultiplierRequest;
            toJSON(message: _131.AssetMultiplierRequest): unknown;
            fromPartial(object: Partial<_131.AssetMultiplierRequest>): _131.AssetMultiplierRequest;
            fromSDK(object: _131.AssetMultiplierRequestSDKType): _131.AssetMultiplierRequest;
            toSDK(message: _131.AssetMultiplierRequest): _131.AssetMultiplierRequestSDKType;
            fromAmino(object: _131.AssetMultiplierRequestAmino): _131.AssetMultiplierRequest;
            toAmino(message: _131.AssetMultiplierRequest): _131.AssetMultiplierRequestAmino;
            fromAminoMsg(object: _131.AssetMultiplierRequestAminoMsg): _131.AssetMultiplierRequest;
            toAminoMsg(message: _131.AssetMultiplierRequest): _131.AssetMultiplierRequestAminoMsg;
            fromProtoMsg(message: _131.AssetMultiplierRequestProtoMsg): _131.AssetMultiplierRequest;
            toProto(message: _131.AssetMultiplierRequest): Uint8Array;
            toProtoMsg(message: _131.AssetMultiplierRequest): _131.AssetMultiplierRequestProtoMsg;
        };
        AssetMultiplierResponse: {
            typeUrl: string;
            encode(message: _131.AssetMultiplierResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.AssetMultiplierResponse;
            fromJSON(object: any): _131.AssetMultiplierResponse;
            toJSON(message: _131.AssetMultiplierResponse): unknown;
            fromPartial(object: Partial<_131.AssetMultiplierResponse>): _131.AssetMultiplierResponse;
            fromSDK(object: _131.AssetMultiplierResponseSDKType): _131.AssetMultiplierResponse;
            toSDK(message: _131.AssetMultiplierResponse): _131.AssetMultiplierResponseSDKType;
            fromAmino(object: _131.AssetMultiplierResponseAmino): _131.AssetMultiplierResponse;
            toAmino(message: _131.AssetMultiplierResponse): _131.AssetMultiplierResponseAmino;
            fromAminoMsg(object: _131.AssetMultiplierResponseAminoMsg): _131.AssetMultiplierResponse;
            toAminoMsg(message: _131.AssetMultiplierResponse): _131.AssetMultiplierResponseAminoMsg;
            fromProtoMsg(message: _131.AssetMultiplierResponseProtoMsg): _131.AssetMultiplierResponse;
            toProto(message: _131.AssetMultiplierResponse): Uint8Array;
            toProtoMsg(message: _131.AssetMultiplierResponse): _131.AssetMultiplierResponseProtoMsg;
        };
        SuperfluidIntermediaryAccountInfo: {
            typeUrl: string;
            encode(message: _131.SuperfluidIntermediaryAccountInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _131.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _131.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial(object: Partial<_131.SuperfluidIntermediaryAccountInfo>): _131.SuperfluidIntermediaryAccountInfo;
            fromSDK(object: _131.SuperfluidIntermediaryAccountInfoSDKType): _131.SuperfluidIntermediaryAccountInfo;
            toSDK(message: _131.SuperfluidIntermediaryAccountInfo): _131.SuperfluidIntermediaryAccountInfoSDKType;
            fromAmino(object: _131.SuperfluidIntermediaryAccountInfoAmino): _131.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _131.SuperfluidIntermediaryAccountInfo): _131.SuperfluidIntermediaryAccountInfoAmino;
            fromAminoMsg(object: _131.SuperfluidIntermediaryAccountInfoAminoMsg): _131.SuperfluidIntermediaryAccountInfo;
            toAminoMsg(message: _131.SuperfluidIntermediaryAccountInfo): _131.SuperfluidIntermediaryAccountInfoAminoMsg;
            fromProtoMsg(message: _131.SuperfluidIntermediaryAccountInfoProtoMsg): _131.SuperfluidIntermediaryAccountInfo;
            toProto(message: _131.SuperfluidIntermediaryAccountInfo): Uint8Array;
            toProtoMsg(message: _131.SuperfluidIntermediaryAccountInfo): _131.SuperfluidIntermediaryAccountInfoProtoMsg;
        };
        AllIntermediaryAccountsRequest: {
            typeUrl: string;
            encode(message: _131.AllIntermediaryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _131.AllIntermediaryAccountsRequest;
            toJSON(message: _131.AllIntermediaryAccountsRequest): unknown;
            fromPartial(object: Partial<_131.AllIntermediaryAccountsRequest>): _131.AllIntermediaryAccountsRequest;
            fromSDK(object: _131.AllIntermediaryAccountsRequestSDKType): _131.AllIntermediaryAccountsRequest;
            toSDK(message: _131.AllIntermediaryAccountsRequest): _131.AllIntermediaryAccountsRequestSDKType;
            fromAmino(object: _131.AllIntermediaryAccountsRequestAmino): _131.AllIntermediaryAccountsRequest;
            toAmino(message: _131.AllIntermediaryAccountsRequest): _131.AllIntermediaryAccountsRequestAmino;
            fromAminoMsg(object: _131.AllIntermediaryAccountsRequestAminoMsg): _131.AllIntermediaryAccountsRequest;
            toAminoMsg(message: _131.AllIntermediaryAccountsRequest): _131.AllIntermediaryAccountsRequestAminoMsg;
            fromProtoMsg(message: _131.AllIntermediaryAccountsRequestProtoMsg): _131.AllIntermediaryAccountsRequest;
            toProto(message: _131.AllIntermediaryAccountsRequest): Uint8Array;
            toProtoMsg(message: _131.AllIntermediaryAccountsRequest): _131.AllIntermediaryAccountsRequestProtoMsg;
        };
        AllIntermediaryAccountsResponse: {
            typeUrl: string;
            encode(message: _131.AllIntermediaryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _131.AllIntermediaryAccountsResponse;
            toJSON(message: _131.AllIntermediaryAccountsResponse): unknown;
            fromPartial(object: Partial<_131.AllIntermediaryAccountsResponse>): _131.AllIntermediaryAccountsResponse;
            fromSDK(object: _131.AllIntermediaryAccountsResponseSDKType): _131.AllIntermediaryAccountsResponse;
            toSDK(message: _131.AllIntermediaryAccountsResponse): _131.AllIntermediaryAccountsResponseSDKType;
            fromAmino(object: _131.AllIntermediaryAccountsResponseAmino): _131.AllIntermediaryAccountsResponse;
            toAmino(message: _131.AllIntermediaryAccountsResponse): _131.AllIntermediaryAccountsResponseAmino;
            fromAminoMsg(object: _131.AllIntermediaryAccountsResponseAminoMsg): _131.AllIntermediaryAccountsResponse;
            toAminoMsg(message: _131.AllIntermediaryAccountsResponse): _131.AllIntermediaryAccountsResponseAminoMsg;
            fromProtoMsg(message: _131.AllIntermediaryAccountsResponseProtoMsg): _131.AllIntermediaryAccountsResponse;
            toProto(message: _131.AllIntermediaryAccountsResponse): Uint8Array;
            toProtoMsg(message: _131.AllIntermediaryAccountsResponse): _131.AllIntermediaryAccountsResponseProtoMsg;
        };
        ConnectedIntermediaryAccountRequest: {
            typeUrl: string;
            encode(message: _131.ConnectedIntermediaryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _131.ConnectedIntermediaryAccountRequest;
            toJSON(message: _131.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial(object: Partial<_131.ConnectedIntermediaryAccountRequest>): _131.ConnectedIntermediaryAccountRequest;
            fromSDK(object: _131.ConnectedIntermediaryAccountRequestSDKType): _131.ConnectedIntermediaryAccountRequest;
            toSDK(message: _131.ConnectedIntermediaryAccountRequest): _131.ConnectedIntermediaryAccountRequestSDKType;
            fromAmino(object: _131.ConnectedIntermediaryAccountRequestAmino): _131.ConnectedIntermediaryAccountRequest;
            toAmino(message: _131.ConnectedIntermediaryAccountRequest): _131.ConnectedIntermediaryAccountRequestAmino;
            fromAminoMsg(object: _131.ConnectedIntermediaryAccountRequestAminoMsg): _131.ConnectedIntermediaryAccountRequest;
            toAminoMsg(message: _131.ConnectedIntermediaryAccountRequest): _131.ConnectedIntermediaryAccountRequestAminoMsg;
            fromProtoMsg(message: _131.ConnectedIntermediaryAccountRequestProtoMsg): _131.ConnectedIntermediaryAccountRequest;
            toProto(message: _131.ConnectedIntermediaryAccountRequest): Uint8Array;
            toProtoMsg(message: _131.ConnectedIntermediaryAccountRequest): _131.ConnectedIntermediaryAccountRequestProtoMsg;
        };
        ConnectedIntermediaryAccountResponse: {
            typeUrl: string;
            encode(message: _131.ConnectedIntermediaryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _131.ConnectedIntermediaryAccountResponse;
            toJSON(message: _131.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial(object: Partial<_131.ConnectedIntermediaryAccountResponse>): _131.ConnectedIntermediaryAccountResponse;
            fromSDK(object: _131.ConnectedIntermediaryAccountResponseSDKType): _131.ConnectedIntermediaryAccountResponse;
            toSDK(message: _131.ConnectedIntermediaryAccountResponse): _131.ConnectedIntermediaryAccountResponseSDKType;
            fromAmino(object: _131.ConnectedIntermediaryAccountResponseAmino): _131.ConnectedIntermediaryAccountResponse;
            toAmino(message: _131.ConnectedIntermediaryAccountResponse): _131.ConnectedIntermediaryAccountResponseAmino;
            fromAminoMsg(object: _131.ConnectedIntermediaryAccountResponseAminoMsg): _131.ConnectedIntermediaryAccountResponse;
            toAminoMsg(message: _131.ConnectedIntermediaryAccountResponse): _131.ConnectedIntermediaryAccountResponseAminoMsg;
            fromProtoMsg(message: _131.ConnectedIntermediaryAccountResponseProtoMsg): _131.ConnectedIntermediaryAccountResponse;
            toProto(message: _131.ConnectedIntermediaryAccountResponse): Uint8Array;
            toProtoMsg(message: _131.ConnectedIntermediaryAccountResponse): _131.ConnectedIntermediaryAccountResponseProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            typeUrl: string;
            encode(message: _131.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.QueryTotalDelegationByValidatorForDenomRequest;
            fromJSON(object: any): _131.QueryTotalDelegationByValidatorForDenomRequest;
            toJSON(message: _131.QueryTotalDelegationByValidatorForDenomRequest): unknown;
            fromPartial(object: Partial<_131.QueryTotalDelegationByValidatorForDenomRequest>): _131.QueryTotalDelegationByValidatorForDenomRequest;
            fromSDK(object: _131.QueryTotalDelegationByValidatorForDenomRequestSDKType): _131.QueryTotalDelegationByValidatorForDenomRequest;
            toSDK(message: _131.QueryTotalDelegationByValidatorForDenomRequest): _131.QueryTotalDelegationByValidatorForDenomRequestSDKType;
            fromAmino(object: _131.QueryTotalDelegationByValidatorForDenomRequestAmino): _131.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _131.QueryTotalDelegationByValidatorForDenomRequest): _131.QueryTotalDelegationByValidatorForDenomRequestAmino;
            fromAminoMsg(object: _131.QueryTotalDelegationByValidatorForDenomRequestAminoMsg): _131.QueryTotalDelegationByValidatorForDenomRequest;
            toAminoMsg(message: _131.QueryTotalDelegationByValidatorForDenomRequest): _131.QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
            fromProtoMsg(message: _131.QueryTotalDelegationByValidatorForDenomRequestProtoMsg): _131.QueryTotalDelegationByValidatorForDenomRequest;
            toProto(message: _131.QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
            toProtoMsg(message: _131.QueryTotalDelegationByValidatorForDenomRequest): _131.QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            typeUrl: string;
            encode(message: _131.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.QueryTotalDelegationByValidatorForDenomResponse;
            fromJSON(object: any): _131.QueryTotalDelegationByValidatorForDenomResponse;
            toJSON(message: _131.QueryTotalDelegationByValidatorForDenomResponse): unknown;
            fromPartial(object: Partial<_131.QueryTotalDelegationByValidatorForDenomResponse>): _131.QueryTotalDelegationByValidatorForDenomResponse;
            fromSDK(object: _131.QueryTotalDelegationByValidatorForDenomResponseSDKType): _131.QueryTotalDelegationByValidatorForDenomResponse;
            toSDK(message: _131.QueryTotalDelegationByValidatorForDenomResponse): _131.QueryTotalDelegationByValidatorForDenomResponseSDKType;
            fromAmino(object: _131.QueryTotalDelegationByValidatorForDenomResponseAmino): _131.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _131.QueryTotalDelegationByValidatorForDenomResponse): _131.QueryTotalDelegationByValidatorForDenomResponseAmino;
            fromAminoMsg(object: _131.QueryTotalDelegationByValidatorForDenomResponseAminoMsg): _131.QueryTotalDelegationByValidatorForDenomResponse;
            toAminoMsg(message: _131.QueryTotalDelegationByValidatorForDenomResponse): _131.QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
            fromProtoMsg(message: _131.QueryTotalDelegationByValidatorForDenomResponseProtoMsg): _131.QueryTotalDelegationByValidatorForDenomResponse;
            toProto(message: _131.QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
            toProtoMsg(message: _131.QueryTotalDelegationByValidatorForDenomResponse): _131.QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
        };
        Delegations: {
            typeUrl: string;
            encode(message: _131.Delegations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.Delegations;
            fromJSON(object: any): _131.Delegations;
            toJSON(message: _131.Delegations): unknown;
            fromPartial(object: Partial<_131.Delegations>): _131.Delegations;
            fromSDK(object: _131.DelegationsSDKType): _131.Delegations;
            toSDK(message: _131.Delegations): _131.DelegationsSDKType;
            fromAmino(object: _131.DelegationsAmino): _131.Delegations;
            toAmino(message: _131.Delegations): _131.DelegationsAmino;
            fromAminoMsg(object: _131.DelegationsAminoMsg): _131.Delegations;
            toAminoMsg(message: _131.Delegations): _131.DelegationsAminoMsg;
            fromProtoMsg(message: _131.DelegationsProtoMsg): _131.Delegations;
            toProto(message: _131.Delegations): Uint8Array;
            toProtoMsg(message: _131.Delegations): _131.DelegationsProtoMsg;
        };
        TotalSuperfluidDelegationsRequest: {
            typeUrl: string;
            encode(_: _131.TotalSuperfluidDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _131.TotalSuperfluidDelegationsRequest;
            toJSON(_: _131.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial(_: Partial<_131.TotalSuperfluidDelegationsRequest>): _131.TotalSuperfluidDelegationsRequest;
            fromSDK(_: _131.TotalSuperfluidDelegationsRequestSDKType): _131.TotalSuperfluidDelegationsRequest;
            toSDK(_: _131.TotalSuperfluidDelegationsRequest): _131.TotalSuperfluidDelegationsRequestSDKType;
            fromAmino(_: _131.TotalSuperfluidDelegationsRequestAmino): _131.TotalSuperfluidDelegationsRequest;
            toAmino(_: _131.TotalSuperfluidDelegationsRequest): _131.TotalSuperfluidDelegationsRequestAmino;
            fromAminoMsg(object: _131.TotalSuperfluidDelegationsRequestAminoMsg): _131.TotalSuperfluidDelegationsRequest;
            toAminoMsg(message: _131.TotalSuperfluidDelegationsRequest): _131.TotalSuperfluidDelegationsRequestAminoMsg;
            fromProtoMsg(message: _131.TotalSuperfluidDelegationsRequestProtoMsg): _131.TotalSuperfluidDelegationsRequest;
            toProto(message: _131.TotalSuperfluidDelegationsRequest): Uint8Array;
            toProtoMsg(message: _131.TotalSuperfluidDelegationsRequest): _131.TotalSuperfluidDelegationsRequestProtoMsg;
        };
        TotalSuperfluidDelegationsResponse: {
            typeUrl: string;
            encode(message: _131.TotalSuperfluidDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _131.TotalSuperfluidDelegationsResponse;
            toJSON(message: _131.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial(object: Partial<_131.TotalSuperfluidDelegationsResponse>): _131.TotalSuperfluidDelegationsResponse;
            fromSDK(object: _131.TotalSuperfluidDelegationsResponseSDKType): _131.TotalSuperfluidDelegationsResponse;
            toSDK(message: _131.TotalSuperfluidDelegationsResponse): _131.TotalSuperfluidDelegationsResponseSDKType;
            fromAmino(object: _131.TotalSuperfluidDelegationsResponseAmino): _131.TotalSuperfluidDelegationsResponse;
            toAmino(message: _131.TotalSuperfluidDelegationsResponse): _131.TotalSuperfluidDelegationsResponseAmino;
            fromAminoMsg(object: _131.TotalSuperfluidDelegationsResponseAminoMsg): _131.TotalSuperfluidDelegationsResponse;
            toAminoMsg(message: _131.TotalSuperfluidDelegationsResponse): _131.TotalSuperfluidDelegationsResponseAminoMsg;
            fromProtoMsg(message: _131.TotalSuperfluidDelegationsResponseProtoMsg): _131.TotalSuperfluidDelegationsResponse;
            toProto(message: _131.TotalSuperfluidDelegationsResponse): Uint8Array;
            toProtoMsg(message: _131.TotalSuperfluidDelegationsResponse): _131.TotalSuperfluidDelegationsResponseProtoMsg;
        };
        SuperfluidDelegationAmountRequest: {
            typeUrl: string;
            encode(message: _131.SuperfluidDelegationAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _131.SuperfluidDelegationAmountRequest;
            toJSON(message: _131.SuperfluidDelegationAmountRequest): unknown;
            fromPartial(object: Partial<_131.SuperfluidDelegationAmountRequest>): _131.SuperfluidDelegationAmountRequest;
            fromSDK(object: _131.SuperfluidDelegationAmountRequestSDKType): _131.SuperfluidDelegationAmountRequest;
            toSDK(message: _131.SuperfluidDelegationAmountRequest): _131.SuperfluidDelegationAmountRequestSDKType;
            fromAmino(object: _131.SuperfluidDelegationAmountRequestAmino): _131.SuperfluidDelegationAmountRequest;
            toAmino(message: _131.SuperfluidDelegationAmountRequest): _131.SuperfluidDelegationAmountRequestAmino;
            fromAminoMsg(object: _131.SuperfluidDelegationAmountRequestAminoMsg): _131.SuperfluidDelegationAmountRequest;
            toAminoMsg(message: _131.SuperfluidDelegationAmountRequest): _131.SuperfluidDelegationAmountRequestAminoMsg;
            fromProtoMsg(message: _131.SuperfluidDelegationAmountRequestProtoMsg): _131.SuperfluidDelegationAmountRequest;
            toProto(message: _131.SuperfluidDelegationAmountRequest): Uint8Array;
            toProtoMsg(message: _131.SuperfluidDelegationAmountRequest): _131.SuperfluidDelegationAmountRequestProtoMsg;
        };
        SuperfluidDelegationAmountResponse: {
            typeUrl: string;
            encode(message: _131.SuperfluidDelegationAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _131.SuperfluidDelegationAmountResponse;
            toJSON(message: _131.SuperfluidDelegationAmountResponse): unknown;
            fromPartial(object: Partial<_131.SuperfluidDelegationAmountResponse>): _131.SuperfluidDelegationAmountResponse;
            fromSDK(object: _131.SuperfluidDelegationAmountResponseSDKType): _131.SuperfluidDelegationAmountResponse;
            toSDK(message: _131.SuperfluidDelegationAmountResponse): _131.SuperfluidDelegationAmountResponseSDKType;
            fromAmino(object: _131.SuperfluidDelegationAmountResponseAmino): _131.SuperfluidDelegationAmountResponse;
            toAmino(message: _131.SuperfluidDelegationAmountResponse): _131.SuperfluidDelegationAmountResponseAmino;
            fromAminoMsg(object: _131.SuperfluidDelegationAmountResponseAminoMsg): _131.SuperfluidDelegationAmountResponse;
            toAminoMsg(message: _131.SuperfluidDelegationAmountResponse): _131.SuperfluidDelegationAmountResponseAminoMsg;
            fromProtoMsg(message: _131.SuperfluidDelegationAmountResponseProtoMsg): _131.SuperfluidDelegationAmountResponse;
            toProto(message: _131.SuperfluidDelegationAmountResponse): Uint8Array;
            toProtoMsg(message: _131.SuperfluidDelegationAmountResponse): _131.SuperfluidDelegationAmountResponseProtoMsg;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _131.SuperfluidDelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _131.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _131.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial(object: Partial<_131.SuperfluidDelegationsByDelegatorRequest>): _131.SuperfluidDelegationsByDelegatorRequest;
            fromSDK(object: _131.SuperfluidDelegationsByDelegatorRequestSDKType): _131.SuperfluidDelegationsByDelegatorRequest;
            toSDK(message: _131.SuperfluidDelegationsByDelegatorRequest): _131.SuperfluidDelegationsByDelegatorRequestSDKType;
            fromAmino(object: _131.SuperfluidDelegationsByDelegatorRequestAmino): _131.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _131.SuperfluidDelegationsByDelegatorRequest): _131.SuperfluidDelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _131.SuperfluidDelegationsByDelegatorRequestAminoMsg): _131.SuperfluidDelegationsByDelegatorRequest;
            toAminoMsg(message: _131.SuperfluidDelegationsByDelegatorRequest): _131.SuperfluidDelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _131.SuperfluidDelegationsByDelegatorRequestProtoMsg): _131.SuperfluidDelegationsByDelegatorRequest;
            toProto(message: _131.SuperfluidDelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _131.SuperfluidDelegationsByDelegatorRequest): _131.SuperfluidDelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _131.SuperfluidDelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _131.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _131.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial(object: Partial<_131.SuperfluidDelegationsByDelegatorResponse>): _131.SuperfluidDelegationsByDelegatorResponse;
            fromSDK(object: _131.SuperfluidDelegationsByDelegatorResponseSDKType): _131.SuperfluidDelegationsByDelegatorResponse;
            toSDK(message: _131.SuperfluidDelegationsByDelegatorResponse): _131.SuperfluidDelegationsByDelegatorResponseSDKType;
            fromAmino(object: _131.SuperfluidDelegationsByDelegatorResponseAmino): _131.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _131.SuperfluidDelegationsByDelegatorResponse): _131.SuperfluidDelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _131.SuperfluidDelegationsByDelegatorResponseAminoMsg): _131.SuperfluidDelegationsByDelegatorResponse;
            toAminoMsg(message: _131.SuperfluidDelegationsByDelegatorResponse): _131.SuperfluidDelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _131.SuperfluidDelegationsByDelegatorResponseProtoMsg): _131.SuperfluidDelegationsByDelegatorResponse;
            toProto(message: _131.SuperfluidDelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _131.SuperfluidDelegationsByDelegatorResponse): _131.SuperfluidDelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _131.SuperfluidUndelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _131.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _131.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial(object: Partial<_131.SuperfluidUndelegationsByDelegatorRequest>): _131.SuperfluidUndelegationsByDelegatorRequest;
            fromSDK(object: _131.SuperfluidUndelegationsByDelegatorRequestSDKType): _131.SuperfluidUndelegationsByDelegatorRequest;
            toSDK(message: _131.SuperfluidUndelegationsByDelegatorRequest): _131.SuperfluidUndelegationsByDelegatorRequestSDKType;
            fromAmino(object: _131.SuperfluidUndelegationsByDelegatorRequestAmino): _131.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _131.SuperfluidUndelegationsByDelegatorRequest): _131.SuperfluidUndelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _131.SuperfluidUndelegationsByDelegatorRequestAminoMsg): _131.SuperfluidUndelegationsByDelegatorRequest;
            toAminoMsg(message: _131.SuperfluidUndelegationsByDelegatorRequest): _131.SuperfluidUndelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _131.SuperfluidUndelegationsByDelegatorRequestProtoMsg): _131.SuperfluidUndelegationsByDelegatorRequest;
            toProto(message: _131.SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _131.SuperfluidUndelegationsByDelegatorRequest): _131.SuperfluidUndelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _131.SuperfluidUndelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _131.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _131.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial(object: Partial<_131.SuperfluidUndelegationsByDelegatorResponse>): _131.SuperfluidUndelegationsByDelegatorResponse;
            fromSDK(object: _131.SuperfluidUndelegationsByDelegatorResponseSDKType): _131.SuperfluidUndelegationsByDelegatorResponse;
            toSDK(message: _131.SuperfluidUndelegationsByDelegatorResponse): _131.SuperfluidUndelegationsByDelegatorResponseSDKType;
            fromAmino(object: _131.SuperfluidUndelegationsByDelegatorResponseAmino): _131.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _131.SuperfluidUndelegationsByDelegatorResponse): _131.SuperfluidUndelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _131.SuperfluidUndelegationsByDelegatorResponseAminoMsg): _131.SuperfluidUndelegationsByDelegatorResponse;
            toAminoMsg(message: _131.SuperfluidUndelegationsByDelegatorResponse): _131.SuperfluidUndelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _131.SuperfluidUndelegationsByDelegatorResponseProtoMsg): _131.SuperfluidUndelegationsByDelegatorResponse;
            toProto(message: _131.SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _131.SuperfluidUndelegationsByDelegatorResponse): _131.SuperfluidUndelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _131.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _131.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _131.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial(object: Partial<_131.SuperfluidDelegationsByValidatorDenomRequest>): _131.SuperfluidDelegationsByValidatorDenomRequest;
            fromSDK(object: _131.SuperfluidDelegationsByValidatorDenomRequestSDKType): _131.SuperfluidDelegationsByValidatorDenomRequest;
            toSDK(message: _131.SuperfluidDelegationsByValidatorDenomRequest): _131.SuperfluidDelegationsByValidatorDenomRequestSDKType;
            fromAmino(object: _131.SuperfluidDelegationsByValidatorDenomRequestAmino): _131.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _131.SuperfluidDelegationsByValidatorDenomRequest): _131.SuperfluidDelegationsByValidatorDenomRequestAmino;
            fromAminoMsg(object: _131.SuperfluidDelegationsByValidatorDenomRequestAminoMsg): _131.SuperfluidDelegationsByValidatorDenomRequest;
            toAminoMsg(message: _131.SuperfluidDelegationsByValidatorDenomRequest): _131.SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _131.SuperfluidDelegationsByValidatorDenomRequestProtoMsg): _131.SuperfluidDelegationsByValidatorDenomRequest;
            toProto(message: _131.SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _131.SuperfluidDelegationsByValidatorDenomRequest): _131.SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _131.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _131.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _131.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial(object: Partial<_131.SuperfluidDelegationsByValidatorDenomResponse>): _131.SuperfluidDelegationsByValidatorDenomResponse;
            fromSDK(object: _131.SuperfluidDelegationsByValidatorDenomResponseSDKType): _131.SuperfluidDelegationsByValidatorDenomResponse;
            toSDK(message: _131.SuperfluidDelegationsByValidatorDenomResponse): _131.SuperfluidDelegationsByValidatorDenomResponseSDKType;
            fromAmino(object: _131.SuperfluidDelegationsByValidatorDenomResponseAmino): _131.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _131.SuperfluidDelegationsByValidatorDenomResponse): _131.SuperfluidDelegationsByValidatorDenomResponseAmino;
            fromAminoMsg(object: _131.SuperfluidDelegationsByValidatorDenomResponseAminoMsg): _131.SuperfluidDelegationsByValidatorDenomResponse;
            toAminoMsg(message: _131.SuperfluidDelegationsByValidatorDenomResponse): _131.SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _131.SuperfluidDelegationsByValidatorDenomResponseProtoMsg): _131.SuperfluidDelegationsByValidatorDenomResponse;
            toProto(message: _131.SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _131.SuperfluidDelegationsByValidatorDenomResponse): _131.SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial(object: Partial<_131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromSDK(object: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toSDK(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType;
            fromAmino(object: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
            fromAminoMsg(object: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAminoMsg(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toProto(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial(object: Partial<_131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromSDK(object: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toSDK(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType;
            fromAmino(object: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
            fromAminoMsg(object: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAminoMsg(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toProto(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _131.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
        };
        QueryTotalDelegationByDelegatorRequest: {
            typeUrl: string;
            encode(message: _131.QueryTotalDelegationByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.QueryTotalDelegationByDelegatorRequest;
            fromJSON(object: any): _131.QueryTotalDelegationByDelegatorRequest;
            toJSON(message: _131.QueryTotalDelegationByDelegatorRequest): unknown;
            fromPartial(object: Partial<_131.QueryTotalDelegationByDelegatorRequest>): _131.QueryTotalDelegationByDelegatorRequest;
            fromSDK(object: _131.QueryTotalDelegationByDelegatorRequestSDKType): _131.QueryTotalDelegationByDelegatorRequest;
            toSDK(message: _131.QueryTotalDelegationByDelegatorRequest): _131.QueryTotalDelegationByDelegatorRequestSDKType;
            fromAmino(object: _131.QueryTotalDelegationByDelegatorRequestAmino): _131.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _131.QueryTotalDelegationByDelegatorRequest): _131.QueryTotalDelegationByDelegatorRequestAmino;
            fromAminoMsg(object: _131.QueryTotalDelegationByDelegatorRequestAminoMsg): _131.QueryTotalDelegationByDelegatorRequest;
            toAminoMsg(message: _131.QueryTotalDelegationByDelegatorRequest): _131.QueryTotalDelegationByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _131.QueryTotalDelegationByDelegatorRequestProtoMsg): _131.QueryTotalDelegationByDelegatorRequest;
            toProto(message: _131.QueryTotalDelegationByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _131.QueryTotalDelegationByDelegatorRequest): _131.QueryTotalDelegationByDelegatorRequestProtoMsg;
        };
        QueryTotalDelegationByDelegatorResponse: {
            typeUrl: string;
            encode(message: _131.QueryTotalDelegationByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.QueryTotalDelegationByDelegatorResponse;
            fromJSON(object: any): _131.QueryTotalDelegationByDelegatorResponse;
            toJSON(message: _131.QueryTotalDelegationByDelegatorResponse): unknown;
            fromPartial(object: Partial<_131.QueryTotalDelegationByDelegatorResponse>): _131.QueryTotalDelegationByDelegatorResponse;
            fromSDK(object: _131.QueryTotalDelegationByDelegatorResponseSDKType): _131.QueryTotalDelegationByDelegatorResponse;
            toSDK(message: _131.QueryTotalDelegationByDelegatorResponse): _131.QueryTotalDelegationByDelegatorResponseSDKType;
            fromAmino(object: _131.QueryTotalDelegationByDelegatorResponseAmino): _131.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _131.QueryTotalDelegationByDelegatorResponse): _131.QueryTotalDelegationByDelegatorResponseAmino;
            fromAminoMsg(object: _131.QueryTotalDelegationByDelegatorResponseAminoMsg): _131.QueryTotalDelegationByDelegatorResponse;
            toAminoMsg(message: _131.QueryTotalDelegationByDelegatorResponse): _131.QueryTotalDelegationByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _131.QueryTotalDelegationByDelegatorResponseProtoMsg): _131.QueryTotalDelegationByDelegatorResponse;
            toProto(message: _131.QueryTotalDelegationByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _131.QueryTotalDelegationByDelegatorResponse): _131.QueryTotalDelegationByDelegatorResponseProtoMsg;
        };
        QueryUnpoolWhitelistRequest: {
            typeUrl: string;
            encode(_: _131.QueryUnpoolWhitelistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.QueryUnpoolWhitelistRequest;
            fromJSON(_: any): _131.QueryUnpoolWhitelistRequest;
            toJSON(_: _131.QueryUnpoolWhitelistRequest): unknown;
            fromPartial(_: Partial<_131.QueryUnpoolWhitelistRequest>): _131.QueryUnpoolWhitelistRequest;
            fromSDK(_: _131.QueryUnpoolWhitelistRequestSDKType): _131.QueryUnpoolWhitelistRequest;
            toSDK(_: _131.QueryUnpoolWhitelistRequest): _131.QueryUnpoolWhitelistRequestSDKType;
            fromAmino(_: _131.QueryUnpoolWhitelistRequestAmino): _131.QueryUnpoolWhitelistRequest;
            toAmino(_: _131.QueryUnpoolWhitelistRequest): _131.QueryUnpoolWhitelistRequestAmino;
            fromAminoMsg(object: _131.QueryUnpoolWhitelistRequestAminoMsg): _131.QueryUnpoolWhitelistRequest;
            toAminoMsg(message: _131.QueryUnpoolWhitelistRequest): _131.QueryUnpoolWhitelistRequestAminoMsg;
            fromProtoMsg(message: _131.QueryUnpoolWhitelistRequestProtoMsg): _131.QueryUnpoolWhitelistRequest;
            toProto(message: _131.QueryUnpoolWhitelistRequest): Uint8Array;
            toProtoMsg(message: _131.QueryUnpoolWhitelistRequest): _131.QueryUnpoolWhitelistRequestProtoMsg;
        };
        QueryUnpoolWhitelistResponse: {
            typeUrl: string;
            encode(message: _131.QueryUnpoolWhitelistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.QueryUnpoolWhitelistResponse;
            fromJSON(object: any): _131.QueryUnpoolWhitelistResponse;
            toJSON(message: _131.QueryUnpoolWhitelistResponse): unknown;
            fromPartial(object: Partial<_131.QueryUnpoolWhitelistResponse>): _131.QueryUnpoolWhitelistResponse;
            fromSDK(object: _131.QueryUnpoolWhitelistResponseSDKType): _131.QueryUnpoolWhitelistResponse;
            toSDK(message: _131.QueryUnpoolWhitelistResponse): _131.QueryUnpoolWhitelistResponseSDKType;
            fromAmino(object: _131.QueryUnpoolWhitelistResponseAmino): _131.QueryUnpoolWhitelistResponse;
            toAmino(message: _131.QueryUnpoolWhitelistResponse): _131.QueryUnpoolWhitelistResponseAmino;
            fromAminoMsg(object: _131.QueryUnpoolWhitelistResponseAminoMsg): _131.QueryUnpoolWhitelistResponse;
            toAminoMsg(message: _131.QueryUnpoolWhitelistResponse): _131.QueryUnpoolWhitelistResponseAminoMsg;
            fromProtoMsg(message: _131.QueryUnpoolWhitelistResponseProtoMsg): _131.QueryUnpoolWhitelistResponse;
            toProto(message: _131.QueryUnpoolWhitelistResponse): Uint8Array;
            toProtoMsg(message: _131.QueryUnpoolWhitelistResponse): _131.QueryUnpoolWhitelistResponseProtoMsg;
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
            encode(message: _129.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.GenesisState;
            fromJSON(object: any): _129.GenesisState;
            toJSON(message: _129.GenesisState): unknown;
            fromPartial(object: Partial<_129.GenesisState>): _129.GenesisState;
            fromSDK(object: _129.GenesisStateSDKType): _129.GenesisState;
            toSDK(message: _129.GenesisState): _129.GenesisStateSDKType;
            fromAmino(object: _129.GenesisStateAmino): _129.GenesisState;
            toAmino(message: _129.GenesisState): _129.GenesisStateAmino;
            fromAminoMsg(object: _129.GenesisStateAminoMsg): _129.GenesisState;
            toAminoMsg(message: _129.GenesisState): _129.GenesisStateAminoMsg;
            fromProtoMsg(message: _129.GenesisStateProtoMsg): _129.GenesisState;
            toProto(message: _129.GenesisState): Uint8Array;
            toProtoMsg(message: _129.GenesisState): _129.GenesisStateProtoMsg;
        };
    };
    namespace swaprouter {
        const v1beta1: {
            Msg: typeof _302.Msg;
            Query: typeof _290.Query;
            QueryClientImpl: typeof _290.QueryClientImpl;
            LCDQueryClient: typeof _274.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _138.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _138.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _138.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _138.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _138.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _138.MsgSwapExactAmountOut;
                    };
                };
                toJSON: {
                    swapExactAmountIn(value: _138.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _138.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _138.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _138.MsgSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _138.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _138.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _138.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _138.MsgSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _138.MsgSwapExactAmountIn) => _138.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _138.MsgSwapExactAmountInAmino) => _138.MsgSwapExactAmountIn;
                };
                "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _138.MsgSwapExactAmountOut) => _138.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _138.MsgSwapExactAmountOutAmino) => _138.MsgSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _138.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgSwapExactAmountIn;
                fromJSON(object: any): _138.MsgSwapExactAmountIn;
                toJSON(message: _138.MsgSwapExactAmountIn): unknown;
                fromPartial(object: Partial<_138.MsgSwapExactAmountIn>): _138.MsgSwapExactAmountIn;
                fromSDK(object: _138.MsgSwapExactAmountInSDKType): _138.MsgSwapExactAmountIn;
                toSDK(message: _138.MsgSwapExactAmountIn): _138.MsgSwapExactAmountInSDKType;
                fromAmino(object: _138.MsgSwapExactAmountInAmino): _138.MsgSwapExactAmountIn;
                toAmino(message: _138.MsgSwapExactAmountIn): _138.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _138.MsgSwapExactAmountInAminoMsg): _138.MsgSwapExactAmountIn;
                toAminoMsg(message: _138.MsgSwapExactAmountIn): _138.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _138.MsgSwapExactAmountInProtoMsg): _138.MsgSwapExactAmountIn;
                toProto(message: _138.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _138.MsgSwapExactAmountIn): _138.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _138.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _138.MsgSwapExactAmountInResponse;
                toJSON(message: _138.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_138.MsgSwapExactAmountInResponse>): _138.MsgSwapExactAmountInResponse;
                fromSDK(object: _138.MsgSwapExactAmountInResponseSDKType): _138.MsgSwapExactAmountInResponse;
                toSDK(message: _138.MsgSwapExactAmountInResponse): _138.MsgSwapExactAmountInResponseSDKType;
                fromAmino(object: _138.MsgSwapExactAmountInResponseAmino): _138.MsgSwapExactAmountInResponse;
                toAmino(message: _138.MsgSwapExactAmountInResponse): _138.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _138.MsgSwapExactAmountInResponseAminoMsg): _138.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _138.MsgSwapExactAmountInResponse): _138.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _138.MsgSwapExactAmountInResponseProtoMsg): _138.MsgSwapExactAmountInResponse;
                toProto(message: _138.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _138.MsgSwapExactAmountInResponse): _138.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _138.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgSwapExactAmountOut;
                fromJSON(object: any): _138.MsgSwapExactAmountOut;
                toJSON(message: _138.MsgSwapExactAmountOut): unknown;
                fromPartial(object: Partial<_138.MsgSwapExactAmountOut>): _138.MsgSwapExactAmountOut;
                fromSDK(object: _138.MsgSwapExactAmountOutSDKType): _138.MsgSwapExactAmountOut;
                toSDK(message: _138.MsgSwapExactAmountOut): _138.MsgSwapExactAmountOutSDKType;
                fromAmino(object: _138.MsgSwapExactAmountOutAmino): _138.MsgSwapExactAmountOut;
                toAmino(message: _138.MsgSwapExactAmountOut): _138.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _138.MsgSwapExactAmountOutAminoMsg): _138.MsgSwapExactAmountOut;
                toAminoMsg(message: _138.MsgSwapExactAmountOut): _138.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _138.MsgSwapExactAmountOutProtoMsg): _138.MsgSwapExactAmountOut;
                toProto(message: _138.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _138.MsgSwapExactAmountOut): _138.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _138.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _138.MsgSwapExactAmountOutResponse;
                toJSON(message: _138.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_138.MsgSwapExactAmountOutResponse>): _138.MsgSwapExactAmountOutResponse;
                fromSDK(object: _138.MsgSwapExactAmountOutResponseSDKType): _138.MsgSwapExactAmountOutResponse;
                toSDK(message: _138.MsgSwapExactAmountOutResponse): _138.MsgSwapExactAmountOutResponseSDKType;
                fromAmino(object: _138.MsgSwapExactAmountOutResponseAmino): _138.MsgSwapExactAmountOutResponse;
                toAmino(message: _138.MsgSwapExactAmountOutResponse): _138.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _138.MsgSwapExactAmountOutResponseAminoMsg): _138.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _138.MsgSwapExactAmountOutResponse): _138.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _138.MsgSwapExactAmountOutResponseProtoMsg): _138.MsgSwapExactAmountOutResponse;
                toProto(message: _138.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _138.MsgSwapExactAmountOutResponse): _138.MsgSwapExactAmountOutResponseProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _137.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.SwapAmountInRoute;
                fromJSON(object: any): _137.SwapAmountInRoute;
                toJSON(message: _137.SwapAmountInRoute): unknown;
                fromPartial(object: Partial<_137.SwapAmountInRoute>): _137.SwapAmountInRoute;
                fromSDK(object: _137.SwapAmountInRouteSDKType): _137.SwapAmountInRoute;
                toSDK(message: _137.SwapAmountInRoute): _137.SwapAmountInRouteSDKType;
                fromAmino(object: _137.SwapAmountInRouteAmino): _137.SwapAmountInRoute;
                toAmino(message: _137.SwapAmountInRoute): _137.SwapAmountInRouteAmino;
                fromAminoMsg(object: _137.SwapAmountInRouteAminoMsg): _137.SwapAmountInRoute;
                toAminoMsg(message: _137.SwapAmountInRoute): _137.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _137.SwapAmountInRouteProtoMsg): _137.SwapAmountInRoute;
                toProto(message: _137.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _137.SwapAmountInRoute): _137.SwapAmountInRouteProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _137.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.SwapAmountOutRoute;
                fromJSON(object: any): _137.SwapAmountOutRoute;
                toJSON(message: _137.SwapAmountOutRoute): unknown;
                fromPartial(object: Partial<_137.SwapAmountOutRoute>): _137.SwapAmountOutRoute;
                fromSDK(object: _137.SwapAmountOutRouteSDKType): _137.SwapAmountOutRoute;
                toSDK(message: _137.SwapAmountOutRoute): _137.SwapAmountOutRouteSDKType;
                fromAmino(object: _137.SwapAmountOutRouteAmino): _137.SwapAmountOutRoute;
                toAmino(message: _137.SwapAmountOutRoute): _137.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _137.SwapAmountOutRouteAminoMsg): _137.SwapAmountOutRoute;
                toAminoMsg(message: _137.SwapAmountOutRoute): _137.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _137.SwapAmountOutRouteProtoMsg): _137.SwapAmountOutRoute;
                toProto(message: _137.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _137.SwapAmountOutRoute): _137.SwapAmountOutRouteProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _136.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ParamsRequest;
                fromJSON(_: any): _136.ParamsRequest;
                toJSON(_: _136.ParamsRequest): unknown;
                fromPartial(_: Partial<_136.ParamsRequest>): _136.ParamsRequest;
                fromSDK(_: _136.ParamsRequestSDKType): _136.ParamsRequest;
                toSDK(_: _136.ParamsRequest): _136.ParamsRequestSDKType;
                fromAmino(_: _136.ParamsRequestAmino): _136.ParamsRequest;
                toAmino(_: _136.ParamsRequest): _136.ParamsRequestAmino;
                fromAminoMsg(object: _136.ParamsRequestAminoMsg): _136.ParamsRequest;
                toAminoMsg(message: _136.ParamsRequest): _136.ParamsRequestAminoMsg;
                fromProtoMsg(message: _136.ParamsRequestProtoMsg): _136.ParamsRequest;
                toProto(message: _136.ParamsRequest): Uint8Array;
                toProtoMsg(message: _136.ParamsRequest): _136.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _136.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ParamsResponse;
                fromJSON(object: any): _136.ParamsResponse;
                toJSON(message: _136.ParamsResponse): unknown;
                fromPartial(object: Partial<_136.ParamsResponse>): _136.ParamsResponse;
                fromSDK(object: _136.ParamsResponseSDKType): _136.ParamsResponse;
                toSDK(message: _136.ParamsResponse): _136.ParamsResponseSDKType;
                fromAmino(object: _136.ParamsResponseAmino): _136.ParamsResponse;
                toAmino(message: _136.ParamsResponse): _136.ParamsResponseAmino;
                fromAminoMsg(object: _136.ParamsResponseAminoMsg): _136.ParamsResponse;
                toAminoMsg(message: _136.ParamsResponse): _136.ParamsResponseAminoMsg;
                fromProtoMsg(message: _136.ParamsResponseProtoMsg): _136.ParamsResponse;
                toProto(message: _136.ParamsResponse): Uint8Array;
                toProtoMsg(message: _136.ParamsResponse): _136.ParamsResponseProtoMsg;
            };
            EstimateSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _136.EstimateSwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.EstimateSwapExactAmountInRequest;
                fromJSON(object: any): _136.EstimateSwapExactAmountInRequest;
                toJSON(message: _136.EstimateSwapExactAmountInRequest): unknown;
                fromPartial(object: Partial<_136.EstimateSwapExactAmountInRequest>): _136.EstimateSwapExactAmountInRequest;
                fromSDK(object: _136.EstimateSwapExactAmountInRequestSDKType): _136.EstimateSwapExactAmountInRequest;
                toSDK(message: _136.EstimateSwapExactAmountInRequest): _136.EstimateSwapExactAmountInRequestSDKType;
                fromAmino(object: _136.EstimateSwapExactAmountInRequestAmino): _136.EstimateSwapExactAmountInRequest;
                toAmino(message: _136.EstimateSwapExactAmountInRequest): _136.EstimateSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _136.EstimateSwapExactAmountInRequestAminoMsg): _136.EstimateSwapExactAmountInRequest;
                toAminoMsg(message: _136.EstimateSwapExactAmountInRequest): _136.EstimateSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _136.EstimateSwapExactAmountInRequestProtoMsg): _136.EstimateSwapExactAmountInRequest;
                toProto(message: _136.EstimateSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _136.EstimateSwapExactAmountInRequest): _136.EstimateSwapExactAmountInRequestProtoMsg;
            };
            EstimateSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _136.EstimateSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.EstimateSwapExactAmountInResponse;
                fromJSON(object: any): _136.EstimateSwapExactAmountInResponse;
                toJSON(message: _136.EstimateSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_136.EstimateSwapExactAmountInResponse>): _136.EstimateSwapExactAmountInResponse;
                fromSDK(object: _136.EstimateSwapExactAmountInResponseSDKType): _136.EstimateSwapExactAmountInResponse;
                toSDK(message: _136.EstimateSwapExactAmountInResponse): _136.EstimateSwapExactAmountInResponseSDKType;
                fromAmino(object: _136.EstimateSwapExactAmountInResponseAmino): _136.EstimateSwapExactAmountInResponse;
                toAmino(message: _136.EstimateSwapExactAmountInResponse): _136.EstimateSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _136.EstimateSwapExactAmountInResponseAminoMsg): _136.EstimateSwapExactAmountInResponse;
                toAminoMsg(message: _136.EstimateSwapExactAmountInResponse): _136.EstimateSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _136.EstimateSwapExactAmountInResponseProtoMsg): _136.EstimateSwapExactAmountInResponse;
                toProto(message: _136.EstimateSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _136.EstimateSwapExactAmountInResponse): _136.EstimateSwapExactAmountInResponseProtoMsg;
            };
            EstimateSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _136.EstimateSwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.EstimateSwapExactAmountOutRequest;
                fromJSON(object: any): _136.EstimateSwapExactAmountOutRequest;
                toJSON(message: _136.EstimateSwapExactAmountOutRequest): unknown;
                fromPartial(object: Partial<_136.EstimateSwapExactAmountOutRequest>): _136.EstimateSwapExactAmountOutRequest;
                fromSDK(object: _136.EstimateSwapExactAmountOutRequestSDKType): _136.EstimateSwapExactAmountOutRequest;
                toSDK(message: _136.EstimateSwapExactAmountOutRequest): _136.EstimateSwapExactAmountOutRequestSDKType;
                fromAmino(object: _136.EstimateSwapExactAmountOutRequestAmino): _136.EstimateSwapExactAmountOutRequest;
                toAmino(message: _136.EstimateSwapExactAmountOutRequest): _136.EstimateSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _136.EstimateSwapExactAmountOutRequestAminoMsg): _136.EstimateSwapExactAmountOutRequest;
                toAminoMsg(message: _136.EstimateSwapExactAmountOutRequest): _136.EstimateSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _136.EstimateSwapExactAmountOutRequestProtoMsg): _136.EstimateSwapExactAmountOutRequest;
                toProto(message: _136.EstimateSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _136.EstimateSwapExactAmountOutRequest): _136.EstimateSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _136.EstimateSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.EstimateSwapExactAmountOutResponse;
                fromJSON(object: any): _136.EstimateSwapExactAmountOutResponse;
                toJSON(message: _136.EstimateSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_136.EstimateSwapExactAmountOutResponse>): _136.EstimateSwapExactAmountOutResponse;
                fromSDK(object: _136.EstimateSwapExactAmountOutResponseSDKType): _136.EstimateSwapExactAmountOutResponse;
                toSDK(message: _136.EstimateSwapExactAmountOutResponse): _136.EstimateSwapExactAmountOutResponseSDKType;
                fromAmino(object: _136.EstimateSwapExactAmountOutResponseAmino): _136.EstimateSwapExactAmountOutResponse;
                toAmino(message: _136.EstimateSwapExactAmountOutResponse): _136.EstimateSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _136.EstimateSwapExactAmountOutResponseAminoMsg): _136.EstimateSwapExactAmountOutResponse;
                toAminoMsg(message: _136.EstimateSwapExactAmountOutResponse): _136.EstimateSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _136.EstimateSwapExactAmountOutResponseProtoMsg): _136.EstimateSwapExactAmountOutResponse;
                toProto(message: _136.EstimateSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _136.EstimateSwapExactAmountOutResponse): _136.EstimateSwapExactAmountOutResponseProtoMsg;
            };
            NumPoolsRequest: {
                typeUrl: string;
                encode(_: _136.NumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.NumPoolsRequest;
                fromJSON(_: any): _136.NumPoolsRequest;
                toJSON(_: _136.NumPoolsRequest): unknown;
                fromPartial(_: Partial<_136.NumPoolsRequest>): _136.NumPoolsRequest;
                fromSDK(_: _136.NumPoolsRequestSDKType): _136.NumPoolsRequest;
                toSDK(_: _136.NumPoolsRequest): _136.NumPoolsRequestSDKType;
                fromAmino(_: _136.NumPoolsRequestAmino): _136.NumPoolsRequest;
                toAmino(_: _136.NumPoolsRequest): _136.NumPoolsRequestAmino;
                fromAminoMsg(object: _136.NumPoolsRequestAminoMsg): _136.NumPoolsRequest;
                toAminoMsg(message: _136.NumPoolsRequest): _136.NumPoolsRequestAminoMsg;
                fromProtoMsg(message: _136.NumPoolsRequestProtoMsg): _136.NumPoolsRequest;
                toProto(message: _136.NumPoolsRequest): Uint8Array;
                toProtoMsg(message: _136.NumPoolsRequest): _136.NumPoolsRequestProtoMsg;
            };
            NumPoolsResponse: {
                typeUrl: string;
                encode(message: _136.NumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.NumPoolsResponse;
                fromJSON(object: any): _136.NumPoolsResponse;
                toJSON(message: _136.NumPoolsResponse): unknown;
                fromPartial(object: Partial<_136.NumPoolsResponse>): _136.NumPoolsResponse;
                fromSDK(object: _136.NumPoolsResponseSDKType): _136.NumPoolsResponse;
                toSDK(message: _136.NumPoolsResponse): _136.NumPoolsResponseSDKType;
                fromAmino(object: _136.NumPoolsResponseAmino): _136.NumPoolsResponse;
                toAmino(message: _136.NumPoolsResponse): _136.NumPoolsResponseAmino;
                fromAminoMsg(object: _136.NumPoolsResponseAminoMsg): _136.NumPoolsResponse;
                toAminoMsg(message: _136.NumPoolsResponse): _136.NumPoolsResponseAminoMsg;
                fromProtoMsg(message: _136.NumPoolsResponseProtoMsg): _136.NumPoolsResponse;
                toProto(message: _136.NumPoolsResponse): Uint8Array;
                toProtoMsg(message: _136.NumPoolsResponse): _136.NumPoolsResponseProtoMsg;
            };
            poolTypeFromJSON(object: any): _135.PoolType;
            poolTypeToJSON(object: _135.PoolType): string;
            PoolType: typeof _135.PoolType;
            PoolTypeSDKType: typeof _135.PoolType;
            PoolTypeAmino: typeof _135.PoolType;
            ModuleRoute: {
                typeUrl: string;
                encode(message: _135.ModuleRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.ModuleRoute;
                fromJSON(object: any): _135.ModuleRoute;
                toJSON(message: _135.ModuleRoute): unknown;
                fromPartial(object: Partial<_135.ModuleRoute>): _135.ModuleRoute;
                fromSDK(object: _135.ModuleRouteSDKType): _135.ModuleRoute;
                toSDK(message: _135.ModuleRoute): _135.ModuleRouteSDKType;
                fromAmino(object: _135.ModuleRouteAmino): _135.ModuleRoute;
                toAmino(message: _135.ModuleRoute): _135.ModuleRouteAmino;
                fromAminoMsg(object: _135.ModuleRouteAminoMsg): _135.ModuleRoute;
                toAminoMsg(message: _135.ModuleRoute): _135.ModuleRouteAminoMsg;
                fromProtoMsg(message: _135.ModuleRouteProtoMsg): _135.ModuleRoute;
                toProto(message: _135.ModuleRoute): Uint8Array;
                toProtoMsg(message: _135.ModuleRoute): _135.ModuleRouteProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _134.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Params;
                fromJSON(object: any): _134.Params;
                toJSON(message: _134.Params): unknown;
                fromPartial(object: Partial<_134.Params>): _134.Params;
                fromSDK(object: _134.ParamsSDKType): _134.Params;
                toSDK(message: _134.Params): _134.ParamsSDKType;
                fromAmino(object: _134.ParamsAmino): _134.Params;
                toAmino(message: _134.Params): _134.ParamsAmino;
                fromAminoMsg(object: _134.ParamsAminoMsg): _134.Params;
                toAminoMsg(message: _134.Params): _134.ParamsAminoMsg;
                fromProtoMsg(message: _134.ParamsProtoMsg): _134.Params;
                toProto(message: _134.Params): Uint8Array;
                toProtoMsg(message: _134.Params): _134.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _134.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.GenesisState;
                fromJSON(object: any): _134.GenesisState;
                toJSON(message: _134.GenesisState): unknown;
                fromPartial(object: Partial<_134.GenesisState>): _134.GenesisState;
                fromSDK(object: _134.GenesisStateSDKType): _134.GenesisState;
                toSDK(message: _134.GenesisState): _134.GenesisStateSDKType;
                fromAmino(object: _134.GenesisStateAmino): _134.GenesisState;
                toAmino(message: _134.GenesisState): _134.GenesisStateAmino;
                fromAminoMsg(object: _134.GenesisStateAminoMsg): _134.GenesisState;
                toAminoMsg(message: _134.GenesisState): _134.GenesisStateAminoMsg;
                fromProtoMsg(message: _134.GenesisStateProtoMsg): _134.GenesisState;
                toProto(message: _134.GenesisState): Uint8Array;
                toProtoMsg(message: _134.GenesisState): _134.GenesisStateProtoMsg;
            };
        };
    }
    namespace tokenfactory {
        const v1beta1: {
            Msg: typeof _303.Msg;
            Query: typeof _291.Query;
            QueryClientImpl: typeof _291.QueryClientImpl;
            LCDQueryClient: typeof _275.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _143.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _143.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _143.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _143.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _143.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _143.MsgCreateDenom): {
                        typeUrl: string;
                        value: _143.MsgCreateDenom;
                    };
                    mint(value: _143.MsgMint): {
                        typeUrl: string;
                        value: _143.MsgMint;
                    };
                    burn(value: _143.MsgBurn): {
                        typeUrl: string;
                        value: _143.MsgBurn;
                    };
                    changeAdmin(value: _143.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _143.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _143.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _143.MsgSetDenomMetadata;
                    };
                };
                toJSON: {
                    createDenom(value: _143.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _143.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _143.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _143.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDenomMetadata(value: _143.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _143.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _143.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _143.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _143.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _143.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _143.MsgCreateDenom): {
                        typeUrl: string;
                        value: _143.MsgCreateDenom;
                    };
                    mint(value: _143.MsgMint): {
                        typeUrl: string;
                        value: _143.MsgMint;
                    };
                    burn(value: _143.MsgBurn): {
                        typeUrl: string;
                        value: _143.MsgBurn;
                    };
                    changeAdmin(value: _143.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _143.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _143.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _143.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _143.MsgCreateDenom) => _143.MsgCreateDenomAmino;
                    fromAmino: (object: _143.MsgCreateDenomAmino) => _143.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _143.MsgMint) => _143.MsgMintAmino;
                    fromAmino: (object: _143.MsgMintAmino) => _143.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _143.MsgBurn) => _143.MsgBurnAmino;
                    fromAmino: (object: _143.MsgBurnAmino) => _143.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _143.MsgChangeAdmin) => _143.MsgChangeAdminAmino;
                    fromAmino: (object: _143.MsgChangeAdminAmino) => _143.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _143.MsgSetDenomMetadata) => _143.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _143.MsgSetDenomMetadataAmino) => _143.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _143.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgCreateDenom;
                fromJSON(object: any): _143.MsgCreateDenom;
                toJSON(message: _143.MsgCreateDenom): unknown;
                fromPartial(object: Partial<_143.MsgCreateDenom>): _143.MsgCreateDenom;
                fromSDK(object: _143.MsgCreateDenomSDKType): _143.MsgCreateDenom;
                toSDK(message: _143.MsgCreateDenom): _143.MsgCreateDenomSDKType;
                fromAmino(object: _143.MsgCreateDenomAmino): _143.MsgCreateDenom;
                toAmino(message: _143.MsgCreateDenom): _143.MsgCreateDenomAmino;
                fromAminoMsg(object: _143.MsgCreateDenomAminoMsg): _143.MsgCreateDenom;
                toAminoMsg(message: _143.MsgCreateDenom): _143.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _143.MsgCreateDenomProtoMsg): _143.MsgCreateDenom;
                toProto(message: _143.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _143.MsgCreateDenom): _143.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _143.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgCreateDenomResponse;
                fromJSON(object: any): _143.MsgCreateDenomResponse;
                toJSON(message: _143.MsgCreateDenomResponse): unknown;
                fromPartial(object: Partial<_143.MsgCreateDenomResponse>): _143.MsgCreateDenomResponse;
                fromSDK(object: _143.MsgCreateDenomResponseSDKType): _143.MsgCreateDenomResponse;
                toSDK(message: _143.MsgCreateDenomResponse): _143.MsgCreateDenomResponseSDKType;
                fromAmino(object: _143.MsgCreateDenomResponseAmino): _143.MsgCreateDenomResponse;
                toAmino(message: _143.MsgCreateDenomResponse): _143.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _143.MsgCreateDenomResponseAminoMsg): _143.MsgCreateDenomResponse;
                toAminoMsg(message: _143.MsgCreateDenomResponse): _143.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _143.MsgCreateDenomResponseProtoMsg): _143.MsgCreateDenomResponse;
                toProto(message: _143.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _143.MsgCreateDenomResponse): _143.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _143.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgMint;
                fromJSON(object: any): _143.MsgMint;
                toJSON(message: _143.MsgMint): unknown;
                fromPartial(object: Partial<_143.MsgMint>): _143.MsgMint;
                fromSDK(object: _143.MsgMintSDKType): _143.MsgMint;
                toSDK(message: _143.MsgMint): _143.MsgMintSDKType;
                fromAmino(object: _143.MsgMintAmino): _143.MsgMint;
                toAmino(message: _143.MsgMint): _143.MsgMintAmino;
                fromAminoMsg(object: _143.MsgMintAminoMsg): _143.MsgMint;
                toAminoMsg(message: _143.MsgMint): _143.MsgMintAminoMsg;
                fromProtoMsg(message: _143.MsgMintProtoMsg): _143.MsgMint;
                toProto(message: _143.MsgMint): Uint8Array;
                toProtoMsg(message: _143.MsgMint): _143.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _143.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgMintResponse;
                fromJSON(_: any): _143.MsgMintResponse;
                toJSON(_: _143.MsgMintResponse): unknown;
                fromPartial(_: Partial<_143.MsgMintResponse>): _143.MsgMintResponse;
                fromSDK(_: _143.MsgMintResponseSDKType): _143.MsgMintResponse;
                toSDK(_: _143.MsgMintResponse): _143.MsgMintResponseSDKType;
                fromAmino(_: _143.MsgMintResponseAmino): _143.MsgMintResponse;
                toAmino(_: _143.MsgMintResponse): _143.MsgMintResponseAmino;
                fromAminoMsg(object: _143.MsgMintResponseAminoMsg): _143.MsgMintResponse;
                toAminoMsg(message: _143.MsgMintResponse): _143.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _143.MsgMintResponseProtoMsg): _143.MsgMintResponse;
                toProto(message: _143.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _143.MsgMintResponse): _143.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _143.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgBurn;
                fromJSON(object: any): _143.MsgBurn;
                toJSON(message: _143.MsgBurn): unknown;
                fromPartial(object: Partial<_143.MsgBurn>): _143.MsgBurn;
                fromSDK(object: _143.MsgBurnSDKType): _143.MsgBurn;
                toSDK(message: _143.MsgBurn): _143.MsgBurnSDKType;
                fromAmino(object: _143.MsgBurnAmino): _143.MsgBurn;
                toAmino(message: _143.MsgBurn): _143.MsgBurnAmino;
                fromAminoMsg(object: _143.MsgBurnAminoMsg): _143.MsgBurn;
                toAminoMsg(message: _143.MsgBurn): _143.MsgBurnAminoMsg;
                fromProtoMsg(message: _143.MsgBurnProtoMsg): _143.MsgBurn;
                toProto(message: _143.MsgBurn): Uint8Array;
                toProtoMsg(message: _143.MsgBurn): _143.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _143.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgBurnResponse;
                fromJSON(_: any): _143.MsgBurnResponse;
                toJSON(_: _143.MsgBurnResponse): unknown;
                fromPartial(_: Partial<_143.MsgBurnResponse>): _143.MsgBurnResponse;
                fromSDK(_: _143.MsgBurnResponseSDKType): _143.MsgBurnResponse;
                toSDK(_: _143.MsgBurnResponse): _143.MsgBurnResponseSDKType;
                fromAmino(_: _143.MsgBurnResponseAmino): _143.MsgBurnResponse;
                toAmino(_: _143.MsgBurnResponse): _143.MsgBurnResponseAmino;
                fromAminoMsg(object: _143.MsgBurnResponseAminoMsg): _143.MsgBurnResponse;
                toAminoMsg(message: _143.MsgBurnResponse): _143.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _143.MsgBurnResponseProtoMsg): _143.MsgBurnResponse;
                toProto(message: _143.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _143.MsgBurnResponse): _143.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _143.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgChangeAdmin;
                fromJSON(object: any): _143.MsgChangeAdmin;
                toJSON(message: _143.MsgChangeAdmin): unknown;
                fromPartial(object: Partial<_143.MsgChangeAdmin>): _143.MsgChangeAdmin;
                fromSDK(object: _143.MsgChangeAdminSDKType): _143.MsgChangeAdmin;
                toSDK(message: _143.MsgChangeAdmin): _143.MsgChangeAdminSDKType;
                fromAmino(object: _143.MsgChangeAdminAmino): _143.MsgChangeAdmin;
                toAmino(message: _143.MsgChangeAdmin): _143.MsgChangeAdminAmino;
                fromAminoMsg(object: _143.MsgChangeAdminAminoMsg): _143.MsgChangeAdmin;
                toAminoMsg(message: _143.MsgChangeAdmin): _143.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _143.MsgChangeAdminProtoMsg): _143.MsgChangeAdmin;
                toProto(message: _143.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _143.MsgChangeAdmin): _143.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _143.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgChangeAdminResponse;
                fromJSON(_: any): _143.MsgChangeAdminResponse;
                toJSON(_: _143.MsgChangeAdminResponse): unknown;
                fromPartial(_: Partial<_143.MsgChangeAdminResponse>): _143.MsgChangeAdminResponse;
                fromSDK(_: _143.MsgChangeAdminResponseSDKType): _143.MsgChangeAdminResponse;
                toSDK(_: _143.MsgChangeAdminResponse): _143.MsgChangeAdminResponseSDKType;
                fromAmino(_: _143.MsgChangeAdminResponseAmino): _143.MsgChangeAdminResponse;
                toAmino(_: _143.MsgChangeAdminResponse): _143.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _143.MsgChangeAdminResponseAminoMsg): _143.MsgChangeAdminResponse;
                toAminoMsg(message: _143.MsgChangeAdminResponse): _143.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _143.MsgChangeAdminResponseProtoMsg): _143.MsgChangeAdminResponse;
                toProto(message: _143.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _143.MsgChangeAdminResponse): _143.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _143.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgSetDenomMetadata;
                fromJSON(object: any): _143.MsgSetDenomMetadata;
                toJSON(message: _143.MsgSetDenomMetadata): unknown;
                fromPartial(object: Partial<_143.MsgSetDenomMetadata>): _143.MsgSetDenomMetadata;
                fromSDK(object: _143.MsgSetDenomMetadataSDKType): _143.MsgSetDenomMetadata;
                toSDK(message: _143.MsgSetDenomMetadata): _143.MsgSetDenomMetadataSDKType;
                fromAmino(object: _143.MsgSetDenomMetadataAmino): _143.MsgSetDenomMetadata;
                toAmino(message: _143.MsgSetDenomMetadata): _143.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _143.MsgSetDenomMetadataAminoMsg): _143.MsgSetDenomMetadata;
                toAminoMsg(message: _143.MsgSetDenomMetadata): _143.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _143.MsgSetDenomMetadataProtoMsg): _143.MsgSetDenomMetadata;
                toProto(message: _143.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _143.MsgSetDenomMetadata): _143.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _143.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgSetDenomMetadataResponse;
                fromJSON(_: any): _143.MsgSetDenomMetadataResponse;
                toJSON(_: _143.MsgSetDenomMetadataResponse): unknown;
                fromPartial(_: Partial<_143.MsgSetDenomMetadataResponse>): _143.MsgSetDenomMetadataResponse;
                fromSDK(_: _143.MsgSetDenomMetadataResponseSDKType): _143.MsgSetDenomMetadataResponse;
                toSDK(_: _143.MsgSetDenomMetadataResponse): _143.MsgSetDenomMetadataResponseSDKType;
                fromAmino(_: _143.MsgSetDenomMetadataResponseAmino): _143.MsgSetDenomMetadataResponse;
                toAmino(_: _143.MsgSetDenomMetadataResponse): _143.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _143.MsgSetDenomMetadataResponseAminoMsg): _143.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _143.MsgSetDenomMetadataResponse): _143.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _143.MsgSetDenomMetadataResponseProtoMsg): _143.MsgSetDenomMetadataResponse;
                toProto(message: _143.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _143.MsgSetDenomMetadataResponse): _143.MsgSetDenomMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _142.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.QueryParamsRequest;
                fromJSON(_: any): _142.QueryParamsRequest;
                toJSON(_: _142.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_142.QueryParamsRequest>): _142.QueryParamsRequest;
                fromSDK(_: _142.QueryParamsRequestSDKType): _142.QueryParamsRequest;
                toSDK(_: _142.QueryParamsRequest): _142.QueryParamsRequestSDKType;
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
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.QueryParamsResponse;
                fromJSON(object: any): _142.QueryParamsResponse;
                toJSON(message: _142.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_142.QueryParamsResponse>): _142.QueryParamsResponse;
                fromSDK(object: _142.QueryParamsResponseSDKType): _142.QueryParamsResponse;
                toSDK(message: _142.QueryParamsResponse): _142.QueryParamsResponseSDKType;
                fromAmino(object: _142.QueryParamsResponseAmino): _142.QueryParamsResponse;
                toAmino(message: _142.QueryParamsResponse): _142.QueryParamsResponseAmino;
                fromAminoMsg(object: _142.QueryParamsResponseAminoMsg): _142.QueryParamsResponse;
                toAminoMsg(message: _142.QueryParamsResponse): _142.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _142.QueryParamsResponseProtoMsg): _142.QueryParamsResponse;
                toProto(message: _142.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _142.QueryParamsResponse): _142.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _142.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _142.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _142.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: Partial<_142.QueryDenomAuthorityMetadataRequest>): _142.QueryDenomAuthorityMetadataRequest;
                fromSDK(object: _142.QueryDenomAuthorityMetadataRequestSDKType): _142.QueryDenomAuthorityMetadataRequest;
                toSDK(message: _142.QueryDenomAuthorityMetadataRequest): _142.QueryDenomAuthorityMetadataRequestSDKType;
                fromAmino(object: _142.QueryDenomAuthorityMetadataRequestAmino): _142.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _142.QueryDenomAuthorityMetadataRequest): _142.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _142.QueryDenomAuthorityMetadataRequestAminoMsg): _142.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _142.QueryDenomAuthorityMetadataRequest): _142.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _142.QueryDenomAuthorityMetadataRequestProtoMsg): _142.QueryDenomAuthorityMetadataRequest;
                toProto(message: _142.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _142.QueryDenomAuthorityMetadataRequest): _142.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _142.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _142.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _142.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: Partial<_142.QueryDenomAuthorityMetadataResponse>): _142.QueryDenomAuthorityMetadataResponse;
                fromSDK(object: _142.QueryDenomAuthorityMetadataResponseSDKType): _142.QueryDenomAuthorityMetadataResponse;
                toSDK(message: _142.QueryDenomAuthorityMetadataResponse): _142.QueryDenomAuthorityMetadataResponseSDKType;
                fromAmino(object: _142.QueryDenomAuthorityMetadataResponseAmino): _142.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _142.QueryDenomAuthorityMetadataResponse): _142.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _142.QueryDenomAuthorityMetadataResponseAminoMsg): _142.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _142.QueryDenomAuthorityMetadataResponse): _142.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _142.QueryDenomAuthorityMetadataResponseProtoMsg): _142.QueryDenomAuthorityMetadataResponse;
                toProto(message: _142.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _142.QueryDenomAuthorityMetadataResponse): _142.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _142.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _142.QueryDenomsFromCreatorRequest;
                toJSON(message: _142.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: Partial<_142.QueryDenomsFromCreatorRequest>): _142.QueryDenomsFromCreatorRequest;
                fromSDK(object: _142.QueryDenomsFromCreatorRequestSDKType): _142.QueryDenomsFromCreatorRequest;
                toSDK(message: _142.QueryDenomsFromCreatorRequest): _142.QueryDenomsFromCreatorRequestSDKType;
                fromAmino(object: _142.QueryDenomsFromCreatorRequestAmino): _142.QueryDenomsFromCreatorRequest;
                toAmino(message: _142.QueryDenomsFromCreatorRequest): _142.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _142.QueryDenomsFromCreatorRequestAminoMsg): _142.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _142.QueryDenomsFromCreatorRequest): _142.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _142.QueryDenomsFromCreatorRequestProtoMsg): _142.QueryDenomsFromCreatorRequest;
                toProto(message: _142.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _142.QueryDenomsFromCreatorRequest): _142.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _142.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _142.QueryDenomsFromCreatorResponse;
                toJSON(message: _142.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: Partial<_142.QueryDenomsFromCreatorResponse>): _142.QueryDenomsFromCreatorResponse;
                fromSDK(object: _142.QueryDenomsFromCreatorResponseSDKType): _142.QueryDenomsFromCreatorResponse;
                toSDK(message: _142.QueryDenomsFromCreatorResponse): _142.QueryDenomsFromCreatorResponseSDKType;
                fromAmino(object: _142.QueryDenomsFromCreatorResponseAmino): _142.QueryDenomsFromCreatorResponse;
                toAmino(message: _142.QueryDenomsFromCreatorResponse): _142.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _142.QueryDenomsFromCreatorResponseAminoMsg): _142.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _142.QueryDenomsFromCreatorResponse): _142.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _142.QueryDenomsFromCreatorResponseProtoMsg): _142.QueryDenomsFromCreatorResponse;
                toProto(message: _142.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _142.QueryDenomsFromCreatorResponse): _142.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _141.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.Params;
                fromJSON(object: any): _141.Params;
                toJSON(message: _141.Params): unknown;
                fromPartial(object: Partial<_141.Params>): _141.Params;
                fromSDK(object: _141.ParamsSDKType): _141.Params;
                toSDK(message: _141.Params): _141.ParamsSDKType;
                fromAmino(object: _141.ParamsAmino): _141.Params;
                toAmino(message: _141.Params): _141.ParamsAmino;
                fromAminoMsg(object: _141.ParamsAminoMsg): _141.Params;
                toAminoMsg(message: _141.Params): _141.ParamsAminoMsg;
                fromProtoMsg(message: _141.ParamsProtoMsg): _141.Params;
                toProto(message: _141.Params): Uint8Array;
                toProtoMsg(message: _141.Params): _141.ParamsProtoMsg;
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
            GenesisDenom: {
                typeUrl: string;
                encode(message: _140.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.GenesisDenom;
                fromJSON(object: any): _140.GenesisDenom;
                toJSON(message: _140.GenesisDenom): unknown;
                fromPartial(object: Partial<_140.GenesisDenom>): _140.GenesisDenom;
                fromSDK(object: _140.GenesisDenomSDKType): _140.GenesisDenom;
                toSDK(message: _140.GenesisDenom): _140.GenesisDenomSDKType;
                fromAmino(object: _140.GenesisDenomAmino): _140.GenesisDenom;
                toAmino(message: _140.GenesisDenom): _140.GenesisDenomAmino;
                fromAminoMsg(object: _140.GenesisDenomAminoMsg): _140.GenesisDenom;
                toAminoMsg(message: _140.GenesisDenom): _140.GenesisDenomAminoMsg;
                fromProtoMsg(message: _140.GenesisDenomProtoMsg): _140.GenesisDenom;
                toProto(message: _140.GenesisDenom): Uint8Array;
                toProtoMsg(message: _140.GenesisDenom): _140.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _139.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.DenomAuthorityMetadata;
                fromJSON(object: any): _139.DenomAuthorityMetadata;
                toJSON(message: _139.DenomAuthorityMetadata): unknown;
                fromPartial(object: Partial<_139.DenomAuthorityMetadata>): _139.DenomAuthorityMetadata;
                fromSDK(object: _139.DenomAuthorityMetadataSDKType): _139.DenomAuthorityMetadata;
                toSDK(message: _139.DenomAuthorityMetadata): _139.DenomAuthorityMetadataSDKType;
                fromAmino(object: _139.DenomAuthorityMetadataAmino): _139.DenomAuthorityMetadata;
                toAmino(message: _139.DenomAuthorityMetadata): _139.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _139.DenomAuthorityMetadataAminoMsg): _139.DenomAuthorityMetadata;
                toAminoMsg(message: _139.DenomAuthorityMetadata): _139.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _139.DenomAuthorityMetadataProtoMsg): _139.DenomAuthorityMetadata;
                toProto(message: _139.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _139.DenomAuthorityMetadata): _139.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            Query: typeof _292.Query;
            QueryClientImpl: typeof _292.QueryClientImpl;
            LCDQueryClient: typeof _276.LCDQueryClient;
            TwapRecord: {
                typeUrl: string;
                encode(message: _146.TwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.TwapRecord;
                fromJSON(object: any): _146.TwapRecord;
                toJSON(message: _146.TwapRecord): unknown;
                fromPartial(object: Partial<_146.TwapRecord>): _146.TwapRecord;
                fromSDK(object: _146.TwapRecordSDKType): _146.TwapRecord;
                toSDK(message: _146.TwapRecord): _146.TwapRecordSDKType;
                fromAmino(object: _146.TwapRecordAmino): _146.TwapRecord;
                toAmino(message: _146.TwapRecord): _146.TwapRecordAmino;
                fromAminoMsg(object: _146.TwapRecordAminoMsg): _146.TwapRecord;
                toAminoMsg(message: _146.TwapRecord): _146.TwapRecordAminoMsg;
                fromProtoMsg(message: _146.TwapRecordProtoMsg): _146.TwapRecord;
                toProto(message: _146.TwapRecord): Uint8Array;
                toProtoMsg(message: _146.TwapRecord): _146.TwapRecordProtoMsg;
            };
            ArithmeticTwapRequest: {
                typeUrl: string;
                encode(message: _145.ArithmeticTwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ArithmeticTwapRequest;
                fromJSON(object: any): _145.ArithmeticTwapRequest;
                toJSON(message: _145.ArithmeticTwapRequest): unknown;
                fromPartial(object: Partial<_145.ArithmeticTwapRequest>): _145.ArithmeticTwapRequest;
                fromSDK(object: _145.ArithmeticTwapRequestSDKType): _145.ArithmeticTwapRequest;
                toSDK(message: _145.ArithmeticTwapRequest): _145.ArithmeticTwapRequestSDKType;
                fromAmino(object: _145.ArithmeticTwapRequestAmino): _145.ArithmeticTwapRequest;
                toAmino(message: _145.ArithmeticTwapRequest): _145.ArithmeticTwapRequestAmino;
                fromAminoMsg(object: _145.ArithmeticTwapRequestAminoMsg): _145.ArithmeticTwapRequest;
                toAminoMsg(message: _145.ArithmeticTwapRequest): _145.ArithmeticTwapRequestAminoMsg;
                fromProtoMsg(message: _145.ArithmeticTwapRequestProtoMsg): _145.ArithmeticTwapRequest;
                toProto(message: _145.ArithmeticTwapRequest): Uint8Array;
                toProtoMsg(message: _145.ArithmeticTwapRequest): _145.ArithmeticTwapRequestProtoMsg;
            };
            ArithmeticTwapResponse: {
                typeUrl: string;
                encode(message: _145.ArithmeticTwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ArithmeticTwapResponse;
                fromJSON(object: any): _145.ArithmeticTwapResponse;
                toJSON(message: _145.ArithmeticTwapResponse): unknown;
                fromPartial(object: Partial<_145.ArithmeticTwapResponse>): _145.ArithmeticTwapResponse;
                fromSDK(object: _145.ArithmeticTwapResponseSDKType): _145.ArithmeticTwapResponse;
                toSDK(message: _145.ArithmeticTwapResponse): _145.ArithmeticTwapResponseSDKType;
                fromAmino(object: _145.ArithmeticTwapResponseAmino): _145.ArithmeticTwapResponse;
                toAmino(message: _145.ArithmeticTwapResponse): _145.ArithmeticTwapResponseAmino;
                fromAminoMsg(object: _145.ArithmeticTwapResponseAminoMsg): _145.ArithmeticTwapResponse;
                toAminoMsg(message: _145.ArithmeticTwapResponse): _145.ArithmeticTwapResponseAminoMsg;
                fromProtoMsg(message: _145.ArithmeticTwapResponseProtoMsg): _145.ArithmeticTwapResponse;
                toProto(message: _145.ArithmeticTwapResponse): Uint8Array;
                toProtoMsg(message: _145.ArithmeticTwapResponse): _145.ArithmeticTwapResponseProtoMsg;
            };
            ArithmeticTwapToNowRequest: {
                typeUrl: string;
                encode(message: _145.ArithmeticTwapToNowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ArithmeticTwapToNowRequest;
                fromJSON(object: any): _145.ArithmeticTwapToNowRequest;
                toJSON(message: _145.ArithmeticTwapToNowRequest): unknown;
                fromPartial(object: Partial<_145.ArithmeticTwapToNowRequest>): _145.ArithmeticTwapToNowRequest;
                fromSDK(object: _145.ArithmeticTwapToNowRequestSDKType): _145.ArithmeticTwapToNowRequest;
                toSDK(message: _145.ArithmeticTwapToNowRequest): _145.ArithmeticTwapToNowRequestSDKType;
                fromAmino(object: _145.ArithmeticTwapToNowRequestAmino): _145.ArithmeticTwapToNowRequest;
                toAmino(message: _145.ArithmeticTwapToNowRequest): _145.ArithmeticTwapToNowRequestAmino;
                fromAminoMsg(object: _145.ArithmeticTwapToNowRequestAminoMsg): _145.ArithmeticTwapToNowRequest;
                toAminoMsg(message: _145.ArithmeticTwapToNowRequest): _145.ArithmeticTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _145.ArithmeticTwapToNowRequestProtoMsg): _145.ArithmeticTwapToNowRequest;
                toProto(message: _145.ArithmeticTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _145.ArithmeticTwapToNowRequest): _145.ArithmeticTwapToNowRequestProtoMsg;
            };
            ArithmeticTwapToNowResponse: {
                typeUrl: string;
                encode(message: _145.ArithmeticTwapToNowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ArithmeticTwapToNowResponse;
                fromJSON(object: any): _145.ArithmeticTwapToNowResponse;
                toJSON(message: _145.ArithmeticTwapToNowResponse): unknown;
                fromPartial(object: Partial<_145.ArithmeticTwapToNowResponse>): _145.ArithmeticTwapToNowResponse;
                fromSDK(object: _145.ArithmeticTwapToNowResponseSDKType): _145.ArithmeticTwapToNowResponse;
                toSDK(message: _145.ArithmeticTwapToNowResponse): _145.ArithmeticTwapToNowResponseSDKType;
                fromAmino(object: _145.ArithmeticTwapToNowResponseAmino): _145.ArithmeticTwapToNowResponse;
                toAmino(message: _145.ArithmeticTwapToNowResponse): _145.ArithmeticTwapToNowResponseAmino;
                fromAminoMsg(object: _145.ArithmeticTwapToNowResponseAminoMsg): _145.ArithmeticTwapToNowResponse;
                toAminoMsg(message: _145.ArithmeticTwapToNowResponse): _145.ArithmeticTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _145.ArithmeticTwapToNowResponseProtoMsg): _145.ArithmeticTwapToNowResponse;
                toProto(message: _145.ArithmeticTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _145.ArithmeticTwapToNowResponse): _145.ArithmeticTwapToNowResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _145.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ParamsRequest;
                fromJSON(_: any): _145.ParamsRequest;
                toJSON(_: _145.ParamsRequest): unknown;
                fromPartial(_: Partial<_145.ParamsRequest>): _145.ParamsRequest;
                fromSDK(_: _145.ParamsRequestSDKType): _145.ParamsRequest;
                toSDK(_: _145.ParamsRequest): _145.ParamsRequestSDKType;
                fromAmino(_: _145.ParamsRequestAmino): _145.ParamsRequest;
                toAmino(_: _145.ParamsRequest): _145.ParamsRequestAmino;
                fromAminoMsg(object: _145.ParamsRequestAminoMsg): _145.ParamsRequest;
                toAminoMsg(message: _145.ParamsRequest): _145.ParamsRequestAminoMsg;
                fromProtoMsg(message: _145.ParamsRequestProtoMsg): _145.ParamsRequest;
                toProto(message: _145.ParamsRequest): Uint8Array;
                toProtoMsg(message: _145.ParamsRequest): _145.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _145.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ParamsResponse;
                fromJSON(object: any): _145.ParamsResponse;
                toJSON(message: _145.ParamsResponse): unknown;
                fromPartial(object: Partial<_145.ParamsResponse>): _145.ParamsResponse;
                fromSDK(object: _145.ParamsResponseSDKType): _145.ParamsResponse;
                toSDK(message: _145.ParamsResponse): _145.ParamsResponseSDKType;
                fromAmino(object: _145.ParamsResponseAmino): _145.ParamsResponse;
                toAmino(message: _145.ParamsResponse): _145.ParamsResponseAmino;
                fromAminoMsg(object: _145.ParamsResponseAminoMsg): _145.ParamsResponse;
                toAminoMsg(message: _145.ParamsResponse): _145.ParamsResponseAminoMsg;
                fromProtoMsg(message: _145.ParamsResponseProtoMsg): _145.ParamsResponse;
                toProto(message: _145.ParamsResponse): Uint8Array;
                toProtoMsg(message: _145.ParamsResponse): _145.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _144.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Params;
                fromJSON(object: any): _144.Params;
                toJSON(message: _144.Params): unknown;
                fromPartial(object: Partial<_144.Params>): _144.Params;
                fromSDK(object: _144.ParamsSDKType): _144.Params;
                toSDK(message: _144.Params): _144.ParamsSDKType;
                fromAmino(object: _144.ParamsAmino): _144.Params;
                toAmino(message: _144.Params): _144.ParamsAmino;
                fromAminoMsg(object: _144.ParamsAminoMsg): _144.Params;
                toAminoMsg(message: _144.Params): _144.ParamsAminoMsg;
                fromProtoMsg(message: _144.ParamsProtoMsg): _144.Params;
                toProto(message: _144.Params): Uint8Array;
                toProtoMsg(message: _144.Params): _144.ParamsProtoMsg;
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
        };
    }
    namespace txfees {
        const v1beta1: {
            Query: typeof _293.Query;
            QueryClientImpl: typeof _293.QueryClientImpl;
            LCDQueryClient: typeof _277.LCDQueryClient;
            QueryFeeTokensRequest: {
                typeUrl: string;
                encode(_: _150.QueryFeeTokensRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryFeeTokensRequest;
                fromJSON(_: any): _150.QueryFeeTokensRequest;
                toJSON(_: _150.QueryFeeTokensRequest): unknown;
                fromPartial(_: Partial<_150.QueryFeeTokensRequest>): _150.QueryFeeTokensRequest;
                fromSDK(_: _150.QueryFeeTokensRequestSDKType): _150.QueryFeeTokensRequest;
                toSDK(_: _150.QueryFeeTokensRequest): _150.QueryFeeTokensRequestSDKType;
                fromAmino(_: _150.QueryFeeTokensRequestAmino): _150.QueryFeeTokensRequest;
                toAmino(_: _150.QueryFeeTokensRequest): _150.QueryFeeTokensRequestAmino;
                fromAminoMsg(object: _150.QueryFeeTokensRequestAminoMsg): _150.QueryFeeTokensRequest;
                toAminoMsg(message: _150.QueryFeeTokensRequest): _150.QueryFeeTokensRequestAminoMsg;
                fromProtoMsg(message: _150.QueryFeeTokensRequestProtoMsg): _150.QueryFeeTokensRequest;
                toProto(message: _150.QueryFeeTokensRequest): Uint8Array;
                toProtoMsg(message: _150.QueryFeeTokensRequest): _150.QueryFeeTokensRequestProtoMsg;
            };
            QueryFeeTokensResponse: {
                typeUrl: string;
                encode(message: _150.QueryFeeTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryFeeTokensResponse;
                fromJSON(object: any): _150.QueryFeeTokensResponse;
                toJSON(message: _150.QueryFeeTokensResponse): unknown;
                fromPartial(object: Partial<_150.QueryFeeTokensResponse>): _150.QueryFeeTokensResponse;
                fromSDK(object: _150.QueryFeeTokensResponseSDKType): _150.QueryFeeTokensResponse;
                toSDK(message: _150.QueryFeeTokensResponse): _150.QueryFeeTokensResponseSDKType;
                fromAmino(object: _150.QueryFeeTokensResponseAmino): _150.QueryFeeTokensResponse;
                toAmino(message: _150.QueryFeeTokensResponse): _150.QueryFeeTokensResponseAmino;
                fromAminoMsg(object: _150.QueryFeeTokensResponseAminoMsg): _150.QueryFeeTokensResponse;
                toAminoMsg(message: _150.QueryFeeTokensResponse): _150.QueryFeeTokensResponseAminoMsg;
                fromProtoMsg(message: _150.QueryFeeTokensResponseProtoMsg): _150.QueryFeeTokensResponse;
                toProto(message: _150.QueryFeeTokensResponse): Uint8Array;
                toProtoMsg(message: _150.QueryFeeTokensResponse): _150.QueryFeeTokensResponseProtoMsg;
            };
            QueryDenomSpotPriceRequest: {
                typeUrl: string;
                encode(message: _150.QueryDenomSpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryDenomSpotPriceRequest;
                fromJSON(object: any): _150.QueryDenomSpotPriceRequest;
                toJSON(message: _150.QueryDenomSpotPriceRequest): unknown;
                fromPartial(object: Partial<_150.QueryDenomSpotPriceRequest>): _150.QueryDenomSpotPriceRequest;
                fromSDK(object: _150.QueryDenomSpotPriceRequestSDKType): _150.QueryDenomSpotPriceRequest;
                toSDK(message: _150.QueryDenomSpotPriceRequest): _150.QueryDenomSpotPriceRequestSDKType;
                fromAmino(object: _150.QueryDenomSpotPriceRequestAmino): _150.QueryDenomSpotPriceRequest;
                toAmino(message: _150.QueryDenomSpotPriceRequest): _150.QueryDenomSpotPriceRequestAmino;
                fromAminoMsg(object: _150.QueryDenomSpotPriceRequestAminoMsg): _150.QueryDenomSpotPriceRequest;
                toAminoMsg(message: _150.QueryDenomSpotPriceRequest): _150.QueryDenomSpotPriceRequestAminoMsg;
                fromProtoMsg(message: _150.QueryDenomSpotPriceRequestProtoMsg): _150.QueryDenomSpotPriceRequest;
                toProto(message: _150.QueryDenomSpotPriceRequest): Uint8Array;
                toProtoMsg(message: _150.QueryDenomSpotPriceRequest): _150.QueryDenomSpotPriceRequestProtoMsg;
            };
            QueryDenomSpotPriceResponse: {
                typeUrl: string;
                encode(message: _150.QueryDenomSpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryDenomSpotPriceResponse;
                fromJSON(object: any): _150.QueryDenomSpotPriceResponse;
                toJSON(message: _150.QueryDenomSpotPriceResponse): unknown;
                fromPartial(object: Partial<_150.QueryDenomSpotPriceResponse>): _150.QueryDenomSpotPriceResponse;
                fromSDK(object: _150.QueryDenomSpotPriceResponseSDKType): _150.QueryDenomSpotPriceResponse;
                toSDK(message: _150.QueryDenomSpotPriceResponse): _150.QueryDenomSpotPriceResponseSDKType;
                fromAmino(object: _150.QueryDenomSpotPriceResponseAmino): _150.QueryDenomSpotPriceResponse;
                toAmino(message: _150.QueryDenomSpotPriceResponse): _150.QueryDenomSpotPriceResponseAmino;
                fromAminoMsg(object: _150.QueryDenomSpotPriceResponseAminoMsg): _150.QueryDenomSpotPriceResponse;
                toAminoMsg(message: _150.QueryDenomSpotPriceResponse): _150.QueryDenomSpotPriceResponseAminoMsg;
                fromProtoMsg(message: _150.QueryDenomSpotPriceResponseProtoMsg): _150.QueryDenomSpotPriceResponse;
                toProto(message: _150.QueryDenomSpotPriceResponse): Uint8Array;
                toProtoMsg(message: _150.QueryDenomSpotPriceResponse): _150.QueryDenomSpotPriceResponseProtoMsg;
            };
            QueryDenomPoolIdRequest: {
                typeUrl: string;
                encode(message: _150.QueryDenomPoolIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryDenomPoolIdRequest;
                fromJSON(object: any): _150.QueryDenomPoolIdRequest;
                toJSON(message: _150.QueryDenomPoolIdRequest): unknown;
                fromPartial(object: Partial<_150.QueryDenomPoolIdRequest>): _150.QueryDenomPoolIdRequest;
                fromSDK(object: _150.QueryDenomPoolIdRequestSDKType): _150.QueryDenomPoolIdRequest;
                toSDK(message: _150.QueryDenomPoolIdRequest): _150.QueryDenomPoolIdRequestSDKType;
                fromAmino(object: _150.QueryDenomPoolIdRequestAmino): _150.QueryDenomPoolIdRequest;
                toAmino(message: _150.QueryDenomPoolIdRequest): _150.QueryDenomPoolIdRequestAmino;
                fromAminoMsg(object: _150.QueryDenomPoolIdRequestAminoMsg): _150.QueryDenomPoolIdRequest;
                toAminoMsg(message: _150.QueryDenomPoolIdRequest): _150.QueryDenomPoolIdRequestAminoMsg;
                fromProtoMsg(message: _150.QueryDenomPoolIdRequestProtoMsg): _150.QueryDenomPoolIdRequest;
                toProto(message: _150.QueryDenomPoolIdRequest): Uint8Array;
                toProtoMsg(message: _150.QueryDenomPoolIdRequest): _150.QueryDenomPoolIdRequestProtoMsg;
            };
            QueryDenomPoolIdResponse: {
                typeUrl: string;
                encode(message: _150.QueryDenomPoolIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryDenomPoolIdResponse;
                fromJSON(object: any): _150.QueryDenomPoolIdResponse;
                toJSON(message: _150.QueryDenomPoolIdResponse): unknown;
                fromPartial(object: Partial<_150.QueryDenomPoolIdResponse>): _150.QueryDenomPoolIdResponse;
                fromSDK(object: _150.QueryDenomPoolIdResponseSDKType): _150.QueryDenomPoolIdResponse;
                toSDK(message: _150.QueryDenomPoolIdResponse): _150.QueryDenomPoolIdResponseSDKType;
                fromAmino(object: _150.QueryDenomPoolIdResponseAmino): _150.QueryDenomPoolIdResponse;
                toAmino(message: _150.QueryDenomPoolIdResponse): _150.QueryDenomPoolIdResponseAmino;
                fromAminoMsg(object: _150.QueryDenomPoolIdResponseAminoMsg): _150.QueryDenomPoolIdResponse;
                toAminoMsg(message: _150.QueryDenomPoolIdResponse): _150.QueryDenomPoolIdResponseAminoMsg;
                fromProtoMsg(message: _150.QueryDenomPoolIdResponseProtoMsg): _150.QueryDenomPoolIdResponse;
                toProto(message: _150.QueryDenomPoolIdResponse): Uint8Array;
                toProtoMsg(message: _150.QueryDenomPoolIdResponse): _150.QueryDenomPoolIdResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                encode(_: _150.QueryBaseDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryBaseDenomRequest;
                fromJSON(_: any): _150.QueryBaseDenomRequest;
                toJSON(_: _150.QueryBaseDenomRequest): unknown;
                fromPartial(_: Partial<_150.QueryBaseDenomRequest>): _150.QueryBaseDenomRequest;
                fromSDK(_: _150.QueryBaseDenomRequestSDKType): _150.QueryBaseDenomRequest;
                toSDK(_: _150.QueryBaseDenomRequest): _150.QueryBaseDenomRequestSDKType;
                fromAmino(_: _150.QueryBaseDenomRequestAmino): _150.QueryBaseDenomRequest;
                toAmino(_: _150.QueryBaseDenomRequest): _150.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _150.QueryBaseDenomRequestAminoMsg): _150.QueryBaseDenomRequest;
                toAminoMsg(message: _150.QueryBaseDenomRequest): _150.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _150.QueryBaseDenomRequestProtoMsg): _150.QueryBaseDenomRequest;
                toProto(message: _150.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _150.QueryBaseDenomRequest): _150.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                encode(message: _150.QueryBaseDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryBaseDenomResponse;
                fromJSON(object: any): _150.QueryBaseDenomResponse;
                toJSON(message: _150.QueryBaseDenomResponse): unknown;
                fromPartial(object: Partial<_150.QueryBaseDenomResponse>): _150.QueryBaseDenomResponse;
                fromSDK(object: _150.QueryBaseDenomResponseSDKType): _150.QueryBaseDenomResponse;
                toSDK(message: _150.QueryBaseDenomResponse): _150.QueryBaseDenomResponseSDKType;
                fromAmino(object: _150.QueryBaseDenomResponseAmino): _150.QueryBaseDenomResponse;
                toAmino(message: _150.QueryBaseDenomResponse): _150.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _150.QueryBaseDenomResponseAminoMsg): _150.QueryBaseDenomResponse;
                toAminoMsg(message: _150.QueryBaseDenomResponse): _150.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _150.QueryBaseDenomResponseProtoMsg): _150.QueryBaseDenomResponse;
                toProto(message: _150.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _150.QueryBaseDenomResponse): _150.QueryBaseDenomResponseProtoMsg;
            };
            UpdateFeeTokenProposal: {
                typeUrl: string;
                encode(message: _149.UpdateFeeTokenProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.UpdateFeeTokenProposal;
                fromJSON(object: any): _149.UpdateFeeTokenProposal;
                toJSON(message: _149.UpdateFeeTokenProposal): unknown;
                fromPartial(object: Partial<_149.UpdateFeeTokenProposal>): _149.UpdateFeeTokenProposal;
                fromSDK(object: _149.UpdateFeeTokenProposalSDKType): _149.UpdateFeeTokenProposal;
                toSDK(message: _149.UpdateFeeTokenProposal): _149.UpdateFeeTokenProposalSDKType;
                fromAmino(object: _149.UpdateFeeTokenProposalAmino): _149.UpdateFeeTokenProposal;
                toAmino(message: _149.UpdateFeeTokenProposal): _149.UpdateFeeTokenProposalAmino;
                fromAminoMsg(object: _149.UpdateFeeTokenProposalAminoMsg): _149.UpdateFeeTokenProposal;
                toAminoMsg(message: _149.UpdateFeeTokenProposal): _149.UpdateFeeTokenProposalAminoMsg;
                fromProtoMsg(message: _149.UpdateFeeTokenProposalProtoMsg): _149.UpdateFeeTokenProposal;
                toProto(message: _149.UpdateFeeTokenProposal): Uint8Array;
                toProtoMsg(message: _149.UpdateFeeTokenProposal): _149.UpdateFeeTokenProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _148.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.GenesisState;
                fromJSON(object: any): _148.GenesisState;
                toJSON(message: _148.GenesisState): unknown;
                fromPartial(object: Partial<_148.GenesisState>): _148.GenesisState;
                fromSDK(object: _148.GenesisStateSDKType): _148.GenesisState;
                toSDK(message: _148.GenesisState): _148.GenesisStateSDKType;
                fromAmino(object: _148.GenesisStateAmino): _148.GenesisState;
                toAmino(message: _148.GenesisState): _148.GenesisStateAmino;
                fromAminoMsg(object: _148.GenesisStateAminoMsg): _148.GenesisState;
                toAminoMsg(message: _148.GenesisState): _148.GenesisStateAminoMsg;
                fromProtoMsg(message: _148.GenesisStateProtoMsg): _148.GenesisState;
                toProto(message: _148.GenesisState): Uint8Array;
                toProtoMsg(message: _148.GenesisState): _148.GenesisStateProtoMsg;
            };
            FeeToken: {
                typeUrl: string;
                encode(message: _147.FeeToken, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.FeeToken;
                fromJSON(object: any): _147.FeeToken;
                toJSON(message: _147.FeeToken): unknown;
                fromPartial(object: Partial<_147.FeeToken>): _147.FeeToken;
                fromSDK(object: _147.FeeTokenSDKType): _147.FeeToken;
                toSDK(message: _147.FeeToken): _147.FeeTokenSDKType;
                fromAmino(object: _147.FeeTokenAmino): _147.FeeToken;
                toAmino(message: _147.FeeToken): _147.FeeTokenAmino;
                fromAminoMsg(object: _147.FeeTokenAminoMsg): _147.FeeToken;
                toAminoMsg(message: _147.FeeToken): _147.FeeTokenAminoMsg;
                fromProtoMsg(message: _147.FeeTokenProtoMsg): _147.FeeToken;
                toProto(message: _147.FeeToken): Uint8Array;
                toProtoMsg(message: _147.FeeToken): _147.FeeTokenProtoMsg;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            Msg: typeof _304.Msg;
            Query: typeof _294.Query;
            QueryClientImpl: typeof _294.QueryClientImpl;
            LCDQueryClient: typeof _278.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _153.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _153.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _153.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _153.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _153.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _153.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _153.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _153.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _153.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _153.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _153.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _153.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _153.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _153.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _153.MsgWithdrawDelegationRewards;
                    };
                };
                toJSON: {
                    setValidatorSetPreference(value: _153.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegateToValidatorSet(value: _153.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegateFromValidatorSet(value: _153.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    redelegateValidatorSet(value: _153.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegationRewards(value: _153.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setValidatorSetPreference(value: any): {
                        typeUrl: string;
                        value: _153.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: any): {
                        typeUrl: string;
                        value: _153.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: any): {
                        typeUrl: string;
                        value: _153.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: any): {
                        typeUrl: string;
                        value: _153.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: any): {
                        typeUrl: string;
                        value: _153.MsgWithdrawDelegationRewards;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _153.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _153.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _153.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _153.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _153.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _153.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _153.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _153.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _153.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _153.MsgWithdrawDelegationRewards;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: (message: _153.MsgSetValidatorSetPreference) => _153.MsgSetValidatorSetPreferenceAmino;
                    fromAmino: (object: _153.MsgSetValidatorSetPreferenceAmino) => _153.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _153.MsgDelegateToValidatorSet) => _153.MsgDelegateToValidatorSetAmino;
                    fromAmino: (object: _153.MsgDelegateToValidatorSetAmino) => _153.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _153.MsgUndelegateFromValidatorSet) => _153.MsgUndelegateFromValidatorSetAmino;
                    fromAmino: (object: _153.MsgUndelegateFromValidatorSetAmino) => _153.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _153.MsgRedelegateValidatorSet) => _153.MsgRedelegateValidatorSetAmino;
                    fromAmino: (object: _153.MsgRedelegateValidatorSetAmino) => _153.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: (message: _153.MsgWithdrawDelegationRewards) => _153.MsgWithdrawDelegationRewardsAmino;
                    fromAmino: (object: _153.MsgWithdrawDelegationRewardsAmino) => _153.MsgWithdrawDelegationRewards;
                };
            };
            MsgSetValidatorSetPreference: {
                typeUrl: string;
                encode(message: _153.MsgSetValidatorSetPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgSetValidatorSetPreference;
                fromJSON(object: any): _153.MsgSetValidatorSetPreference;
                toJSON(message: _153.MsgSetValidatorSetPreference): unknown;
                fromPartial(object: Partial<_153.MsgSetValidatorSetPreference>): _153.MsgSetValidatorSetPreference;
                fromSDK(object: _153.MsgSetValidatorSetPreferenceSDKType): _153.MsgSetValidatorSetPreference;
                toSDK(message: _153.MsgSetValidatorSetPreference): _153.MsgSetValidatorSetPreferenceSDKType;
                fromAmino(object: _153.MsgSetValidatorSetPreferenceAmino): _153.MsgSetValidatorSetPreference;
                toAmino(message: _153.MsgSetValidatorSetPreference): _153.MsgSetValidatorSetPreferenceAmino;
                fromAminoMsg(object: _153.MsgSetValidatorSetPreferenceAminoMsg): _153.MsgSetValidatorSetPreference;
                toAminoMsg(message: _153.MsgSetValidatorSetPreference): _153.MsgSetValidatorSetPreferenceAminoMsg;
                fromProtoMsg(message: _153.MsgSetValidatorSetPreferenceProtoMsg): _153.MsgSetValidatorSetPreference;
                toProto(message: _153.MsgSetValidatorSetPreference): Uint8Array;
                toProtoMsg(message: _153.MsgSetValidatorSetPreference): _153.MsgSetValidatorSetPreferenceProtoMsg;
            };
            MsgSetValidatorSetPreferenceResponse: {
                typeUrl: string;
                encode(_: _153.MsgSetValidatorSetPreferenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgSetValidatorSetPreferenceResponse;
                fromJSON(_: any): _153.MsgSetValidatorSetPreferenceResponse;
                toJSON(_: _153.MsgSetValidatorSetPreferenceResponse): unknown;
                fromPartial(_: Partial<_153.MsgSetValidatorSetPreferenceResponse>): _153.MsgSetValidatorSetPreferenceResponse;
                fromSDK(_: _153.MsgSetValidatorSetPreferenceResponseSDKType): _153.MsgSetValidatorSetPreferenceResponse;
                toSDK(_: _153.MsgSetValidatorSetPreferenceResponse): _153.MsgSetValidatorSetPreferenceResponseSDKType;
                fromAmino(_: _153.MsgSetValidatorSetPreferenceResponseAmino): _153.MsgSetValidatorSetPreferenceResponse;
                toAmino(_: _153.MsgSetValidatorSetPreferenceResponse): _153.MsgSetValidatorSetPreferenceResponseAmino;
                fromAminoMsg(object: _153.MsgSetValidatorSetPreferenceResponseAminoMsg): _153.MsgSetValidatorSetPreferenceResponse;
                toAminoMsg(message: _153.MsgSetValidatorSetPreferenceResponse): _153.MsgSetValidatorSetPreferenceResponseAminoMsg;
                fromProtoMsg(message: _153.MsgSetValidatorSetPreferenceResponseProtoMsg): _153.MsgSetValidatorSetPreferenceResponse;
                toProto(message: _153.MsgSetValidatorSetPreferenceResponse): Uint8Array;
                toProtoMsg(message: _153.MsgSetValidatorSetPreferenceResponse): _153.MsgSetValidatorSetPreferenceResponseProtoMsg;
            };
            MsgDelegateToValidatorSet: {
                typeUrl: string;
                encode(message: _153.MsgDelegateToValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgDelegateToValidatorSet;
                fromJSON(object: any): _153.MsgDelegateToValidatorSet;
                toJSON(message: _153.MsgDelegateToValidatorSet): unknown;
                fromPartial(object: Partial<_153.MsgDelegateToValidatorSet>): _153.MsgDelegateToValidatorSet;
                fromSDK(object: _153.MsgDelegateToValidatorSetSDKType): _153.MsgDelegateToValidatorSet;
                toSDK(message: _153.MsgDelegateToValidatorSet): _153.MsgDelegateToValidatorSetSDKType;
                fromAmino(object: _153.MsgDelegateToValidatorSetAmino): _153.MsgDelegateToValidatorSet;
                toAmino(message: _153.MsgDelegateToValidatorSet): _153.MsgDelegateToValidatorSetAmino;
                fromAminoMsg(object: _153.MsgDelegateToValidatorSetAminoMsg): _153.MsgDelegateToValidatorSet;
                toAminoMsg(message: _153.MsgDelegateToValidatorSet): _153.MsgDelegateToValidatorSetAminoMsg;
                fromProtoMsg(message: _153.MsgDelegateToValidatorSetProtoMsg): _153.MsgDelegateToValidatorSet;
                toProto(message: _153.MsgDelegateToValidatorSet): Uint8Array;
                toProtoMsg(message: _153.MsgDelegateToValidatorSet): _153.MsgDelegateToValidatorSetProtoMsg;
            };
            MsgDelegateToValidatorSetResponse: {
                typeUrl: string;
                encode(_: _153.MsgDelegateToValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgDelegateToValidatorSetResponse;
                fromJSON(_: any): _153.MsgDelegateToValidatorSetResponse;
                toJSON(_: _153.MsgDelegateToValidatorSetResponse): unknown;
                fromPartial(_: Partial<_153.MsgDelegateToValidatorSetResponse>): _153.MsgDelegateToValidatorSetResponse;
                fromSDK(_: _153.MsgDelegateToValidatorSetResponseSDKType): _153.MsgDelegateToValidatorSetResponse;
                toSDK(_: _153.MsgDelegateToValidatorSetResponse): _153.MsgDelegateToValidatorSetResponseSDKType;
                fromAmino(_: _153.MsgDelegateToValidatorSetResponseAmino): _153.MsgDelegateToValidatorSetResponse;
                toAmino(_: _153.MsgDelegateToValidatorSetResponse): _153.MsgDelegateToValidatorSetResponseAmino;
                fromAminoMsg(object: _153.MsgDelegateToValidatorSetResponseAminoMsg): _153.MsgDelegateToValidatorSetResponse;
                toAminoMsg(message: _153.MsgDelegateToValidatorSetResponse): _153.MsgDelegateToValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _153.MsgDelegateToValidatorSetResponseProtoMsg): _153.MsgDelegateToValidatorSetResponse;
                toProto(message: _153.MsgDelegateToValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _153.MsgDelegateToValidatorSetResponse): _153.MsgDelegateToValidatorSetResponseProtoMsg;
            };
            MsgUndelegateFromValidatorSet: {
                typeUrl: string;
                encode(message: _153.MsgUndelegateFromValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgUndelegateFromValidatorSet;
                fromJSON(object: any): _153.MsgUndelegateFromValidatorSet;
                toJSON(message: _153.MsgUndelegateFromValidatorSet): unknown;
                fromPartial(object: Partial<_153.MsgUndelegateFromValidatorSet>): _153.MsgUndelegateFromValidatorSet;
                fromSDK(object: _153.MsgUndelegateFromValidatorSetSDKType): _153.MsgUndelegateFromValidatorSet;
                toSDK(message: _153.MsgUndelegateFromValidatorSet): _153.MsgUndelegateFromValidatorSetSDKType;
                fromAmino(object: _153.MsgUndelegateFromValidatorSetAmino): _153.MsgUndelegateFromValidatorSet;
                toAmino(message: _153.MsgUndelegateFromValidatorSet): _153.MsgUndelegateFromValidatorSetAmino;
                fromAminoMsg(object: _153.MsgUndelegateFromValidatorSetAminoMsg): _153.MsgUndelegateFromValidatorSet;
                toAminoMsg(message: _153.MsgUndelegateFromValidatorSet): _153.MsgUndelegateFromValidatorSetAminoMsg;
                fromProtoMsg(message: _153.MsgUndelegateFromValidatorSetProtoMsg): _153.MsgUndelegateFromValidatorSet;
                toProto(message: _153.MsgUndelegateFromValidatorSet): Uint8Array;
                toProtoMsg(message: _153.MsgUndelegateFromValidatorSet): _153.MsgUndelegateFromValidatorSetProtoMsg;
            };
            MsgUndelegateFromValidatorSetResponse: {
                typeUrl: string;
                encode(_: _153.MsgUndelegateFromValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgUndelegateFromValidatorSetResponse;
                fromJSON(_: any): _153.MsgUndelegateFromValidatorSetResponse;
                toJSON(_: _153.MsgUndelegateFromValidatorSetResponse): unknown;
                fromPartial(_: Partial<_153.MsgUndelegateFromValidatorSetResponse>): _153.MsgUndelegateFromValidatorSetResponse;
                fromSDK(_: _153.MsgUndelegateFromValidatorSetResponseSDKType): _153.MsgUndelegateFromValidatorSetResponse;
                toSDK(_: _153.MsgUndelegateFromValidatorSetResponse): _153.MsgUndelegateFromValidatorSetResponseSDKType;
                fromAmino(_: _153.MsgUndelegateFromValidatorSetResponseAmino): _153.MsgUndelegateFromValidatorSetResponse;
                toAmino(_: _153.MsgUndelegateFromValidatorSetResponse): _153.MsgUndelegateFromValidatorSetResponseAmino;
                fromAminoMsg(object: _153.MsgUndelegateFromValidatorSetResponseAminoMsg): _153.MsgUndelegateFromValidatorSetResponse;
                toAminoMsg(message: _153.MsgUndelegateFromValidatorSetResponse): _153.MsgUndelegateFromValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _153.MsgUndelegateFromValidatorSetResponseProtoMsg): _153.MsgUndelegateFromValidatorSetResponse;
                toProto(message: _153.MsgUndelegateFromValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _153.MsgUndelegateFromValidatorSetResponse): _153.MsgUndelegateFromValidatorSetResponseProtoMsg;
            };
            MsgRedelegateValidatorSet: {
                typeUrl: string;
                encode(message: _153.MsgRedelegateValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgRedelegateValidatorSet;
                fromJSON(object: any): _153.MsgRedelegateValidatorSet;
                toJSON(message: _153.MsgRedelegateValidatorSet): unknown;
                fromPartial(object: Partial<_153.MsgRedelegateValidatorSet>): _153.MsgRedelegateValidatorSet;
                fromSDK(object: _153.MsgRedelegateValidatorSetSDKType): _153.MsgRedelegateValidatorSet;
                toSDK(message: _153.MsgRedelegateValidatorSet): _153.MsgRedelegateValidatorSetSDKType;
                fromAmino(object: _153.MsgRedelegateValidatorSetAmino): _153.MsgRedelegateValidatorSet;
                toAmino(message: _153.MsgRedelegateValidatorSet): _153.MsgRedelegateValidatorSetAmino;
                fromAminoMsg(object: _153.MsgRedelegateValidatorSetAminoMsg): _153.MsgRedelegateValidatorSet;
                toAminoMsg(message: _153.MsgRedelegateValidatorSet): _153.MsgRedelegateValidatorSetAminoMsg;
                fromProtoMsg(message: _153.MsgRedelegateValidatorSetProtoMsg): _153.MsgRedelegateValidatorSet;
                toProto(message: _153.MsgRedelegateValidatorSet): Uint8Array;
                toProtoMsg(message: _153.MsgRedelegateValidatorSet): _153.MsgRedelegateValidatorSetProtoMsg;
            };
            MsgRedelegateValidatorSetResponse: {
                typeUrl: string;
                encode(_: _153.MsgRedelegateValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgRedelegateValidatorSetResponse;
                fromJSON(_: any): _153.MsgRedelegateValidatorSetResponse;
                toJSON(_: _153.MsgRedelegateValidatorSetResponse): unknown;
                fromPartial(_: Partial<_153.MsgRedelegateValidatorSetResponse>): _153.MsgRedelegateValidatorSetResponse;
                fromSDK(_: _153.MsgRedelegateValidatorSetResponseSDKType): _153.MsgRedelegateValidatorSetResponse;
                toSDK(_: _153.MsgRedelegateValidatorSetResponse): _153.MsgRedelegateValidatorSetResponseSDKType;
                fromAmino(_: _153.MsgRedelegateValidatorSetResponseAmino): _153.MsgRedelegateValidatorSetResponse;
                toAmino(_: _153.MsgRedelegateValidatorSetResponse): _153.MsgRedelegateValidatorSetResponseAmino;
                fromAminoMsg(object: _153.MsgRedelegateValidatorSetResponseAminoMsg): _153.MsgRedelegateValidatorSetResponse;
                toAminoMsg(message: _153.MsgRedelegateValidatorSetResponse): _153.MsgRedelegateValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _153.MsgRedelegateValidatorSetResponseProtoMsg): _153.MsgRedelegateValidatorSetResponse;
                toProto(message: _153.MsgRedelegateValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _153.MsgRedelegateValidatorSetResponse): _153.MsgRedelegateValidatorSetResponseProtoMsg;
            };
            MsgWithdrawDelegationRewards: {
                typeUrl: string;
                encode(message: _153.MsgWithdrawDelegationRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgWithdrawDelegationRewards;
                fromJSON(object: any): _153.MsgWithdrawDelegationRewards;
                toJSON(message: _153.MsgWithdrawDelegationRewards): unknown;
                fromPartial(object: Partial<_153.MsgWithdrawDelegationRewards>): _153.MsgWithdrawDelegationRewards;
                fromSDK(object: _153.MsgWithdrawDelegationRewardsSDKType): _153.MsgWithdrawDelegationRewards;
                toSDK(message: _153.MsgWithdrawDelegationRewards): _153.MsgWithdrawDelegationRewardsSDKType;
                fromAmino(object: _153.MsgWithdrawDelegationRewardsAmino): _153.MsgWithdrawDelegationRewards;
                toAmino(message: _153.MsgWithdrawDelegationRewards): _153.MsgWithdrawDelegationRewardsAmino;
                fromAminoMsg(object: _153.MsgWithdrawDelegationRewardsAminoMsg): _153.MsgWithdrawDelegationRewards;
                toAminoMsg(message: _153.MsgWithdrawDelegationRewards): _153.MsgWithdrawDelegationRewardsAminoMsg;
                fromProtoMsg(message: _153.MsgWithdrawDelegationRewardsProtoMsg): _153.MsgWithdrawDelegationRewards;
                toProto(message: _153.MsgWithdrawDelegationRewards): Uint8Array;
                toProtoMsg(message: _153.MsgWithdrawDelegationRewards): _153.MsgWithdrawDelegationRewardsProtoMsg;
            };
            MsgWithdrawDelegationRewardsResponse: {
                typeUrl: string;
                encode(_: _153.MsgWithdrawDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgWithdrawDelegationRewardsResponse;
                fromJSON(_: any): _153.MsgWithdrawDelegationRewardsResponse;
                toJSON(_: _153.MsgWithdrawDelegationRewardsResponse): unknown;
                fromPartial(_: Partial<_153.MsgWithdrawDelegationRewardsResponse>): _153.MsgWithdrawDelegationRewardsResponse;
                fromSDK(_: _153.MsgWithdrawDelegationRewardsResponseSDKType): _153.MsgWithdrawDelegationRewardsResponse;
                toSDK(_: _153.MsgWithdrawDelegationRewardsResponse): _153.MsgWithdrawDelegationRewardsResponseSDKType;
                fromAmino(_: _153.MsgWithdrawDelegationRewardsResponseAmino): _153.MsgWithdrawDelegationRewardsResponse;
                toAmino(_: _153.MsgWithdrawDelegationRewardsResponse): _153.MsgWithdrawDelegationRewardsResponseAmino;
                fromAminoMsg(object: _153.MsgWithdrawDelegationRewardsResponseAminoMsg): _153.MsgWithdrawDelegationRewardsResponse;
                toAminoMsg(message: _153.MsgWithdrawDelegationRewardsResponse): _153.MsgWithdrawDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _153.MsgWithdrawDelegationRewardsResponseProtoMsg): _153.MsgWithdrawDelegationRewardsResponse;
                toProto(message: _153.MsgWithdrawDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _153.MsgWithdrawDelegationRewardsResponse): _153.MsgWithdrawDelegationRewardsResponseProtoMsg;
            };
            ValidatorPreference: {
                typeUrl: string;
                encode(message: _152.ValidatorPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.ValidatorPreference;
                fromJSON(object: any): _152.ValidatorPreference;
                toJSON(message: _152.ValidatorPreference): unknown;
                fromPartial(object: Partial<_152.ValidatorPreference>): _152.ValidatorPreference;
                fromSDK(object: _152.ValidatorPreferenceSDKType): _152.ValidatorPreference;
                toSDK(message: _152.ValidatorPreference): _152.ValidatorPreferenceSDKType;
                fromAmino(object: _152.ValidatorPreferenceAmino): _152.ValidatorPreference;
                toAmino(message: _152.ValidatorPreference): _152.ValidatorPreferenceAmino;
                fromAminoMsg(object: _152.ValidatorPreferenceAminoMsg): _152.ValidatorPreference;
                toAminoMsg(message: _152.ValidatorPreference): _152.ValidatorPreferenceAminoMsg;
                fromProtoMsg(message: _152.ValidatorPreferenceProtoMsg): _152.ValidatorPreference;
                toProto(message: _152.ValidatorPreference): Uint8Array;
                toProtoMsg(message: _152.ValidatorPreference): _152.ValidatorPreferenceProtoMsg;
            };
            ValidatorSetPreferences: {
                typeUrl: string;
                encode(message: _152.ValidatorSetPreferences, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.ValidatorSetPreferences;
                fromJSON(object: any): _152.ValidatorSetPreferences;
                toJSON(message: _152.ValidatorSetPreferences): unknown;
                fromPartial(object: Partial<_152.ValidatorSetPreferences>): _152.ValidatorSetPreferences;
                fromSDK(object: _152.ValidatorSetPreferencesSDKType): _152.ValidatorSetPreferences;
                toSDK(message: _152.ValidatorSetPreferences): _152.ValidatorSetPreferencesSDKType;
                fromAmino(object: _152.ValidatorSetPreferencesAmino): _152.ValidatorSetPreferences;
                toAmino(message: _152.ValidatorSetPreferences): _152.ValidatorSetPreferencesAmino;
                fromAminoMsg(object: _152.ValidatorSetPreferencesAminoMsg): _152.ValidatorSetPreferences;
                toAminoMsg(message: _152.ValidatorSetPreferences): _152.ValidatorSetPreferencesAminoMsg;
                fromProtoMsg(message: _152.ValidatorSetPreferencesProtoMsg): _152.ValidatorSetPreferences;
                toProto(message: _152.ValidatorSetPreferences): Uint8Array;
                toProtoMsg(message: _152.ValidatorSetPreferences): _152.ValidatorSetPreferencesProtoMsg;
            };
            UserValidatorPreferencesRequest: {
                typeUrl: string;
                encode(message: _151.UserValidatorPreferencesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.UserValidatorPreferencesRequest;
                fromJSON(object: any): _151.UserValidatorPreferencesRequest;
                toJSON(message: _151.UserValidatorPreferencesRequest): unknown;
                fromPartial(object: Partial<_151.UserValidatorPreferencesRequest>): _151.UserValidatorPreferencesRequest;
                fromSDK(object: _151.UserValidatorPreferencesRequestSDKType): _151.UserValidatorPreferencesRequest;
                toSDK(message: _151.UserValidatorPreferencesRequest): _151.UserValidatorPreferencesRequestSDKType;
                fromAmino(object: _151.UserValidatorPreferencesRequestAmino): _151.UserValidatorPreferencesRequest;
                toAmino(message: _151.UserValidatorPreferencesRequest): _151.UserValidatorPreferencesRequestAmino;
                fromAminoMsg(object: _151.UserValidatorPreferencesRequestAminoMsg): _151.UserValidatorPreferencesRequest;
                toAminoMsg(message: _151.UserValidatorPreferencesRequest): _151.UserValidatorPreferencesRequestAminoMsg;
                fromProtoMsg(message: _151.UserValidatorPreferencesRequestProtoMsg): _151.UserValidatorPreferencesRequest;
                toProto(message: _151.UserValidatorPreferencesRequest): Uint8Array;
                toProtoMsg(message: _151.UserValidatorPreferencesRequest): _151.UserValidatorPreferencesRequestProtoMsg;
            };
            UserValidatorPreferencesResponse: {
                typeUrl: string;
                encode(message: _151.UserValidatorPreferencesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.UserValidatorPreferencesResponse;
                fromJSON(object: any): _151.UserValidatorPreferencesResponse;
                toJSON(message: _151.UserValidatorPreferencesResponse): unknown;
                fromPartial(object: Partial<_151.UserValidatorPreferencesResponse>): _151.UserValidatorPreferencesResponse;
                fromSDK(object: _151.UserValidatorPreferencesResponseSDKType): _151.UserValidatorPreferencesResponse;
                toSDK(message: _151.UserValidatorPreferencesResponse): _151.UserValidatorPreferencesResponseSDKType;
                fromAmino(object: _151.UserValidatorPreferencesResponseAmino): _151.UserValidatorPreferencesResponse;
                toAmino(message: _151.UserValidatorPreferencesResponse): _151.UserValidatorPreferencesResponseAmino;
                fromAminoMsg(object: _151.UserValidatorPreferencesResponseAminoMsg): _151.UserValidatorPreferencesResponse;
                toAminoMsg(message: _151.UserValidatorPreferencesResponse): _151.UserValidatorPreferencesResponseAminoMsg;
                fromProtoMsg(message: _151.UserValidatorPreferencesResponseProtoMsg): _151.UserValidatorPreferencesResponse;
                toProto(message: _151.UserValidatorPreferencesResponse): Uint8Array;
                toProtoMsg(message: _151.UserValidatorPreferencesResponse): _151.UserValidatorPreferencesResponseProtoMsg;
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
                    v1beta1: _279.QueryClientImpl;
                };
                epochs: {
                    v1beta1: _280.QueryClientImpl;
                };
                gamm: {
                    v1beta1: _281.QueryClientImpl;
                    v2: _282.QueryClientImpl;
                };
                ibcratelimit: {
                    v1beta1: _283.QueryClientImpl;
                };
                incentives: _284.QueryClientImpl;
                lockup: _285.QueryClientImpl;
                mint: {
                    v1beta1: _286.QueryClientImpl;
                };
                poolincentives: {
                    v1beta1: _287.QueryClientImpl;
                };
                protorev: {
                    v1beta1: _288.QueryClientImpl;
                };
                superfluid: _289.QueryClientImpl;
                swaprouter: {
                    v1beta1: _290.QueryClientImpl;
                };
                tokenfactory: {
                    v1beta1: _291.QueryClientImpl;
                };
                twap: {
                    v1beta1: _292.QueryClientImpl;
                };
                txfees: {
                    v1beta1: _293.QueryClientImpl;
                };
                valsetpref: {
                    v1beta1: _294.QueryClientImpl;
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
                    v1beta1: _263.LCDQueryClient;
                };
                epochs: {
                    v1beta1: _264.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _265.LCDQueryClient;
                    v2: _266.LCDQueryClient;
                };
                ibcratelimit: {
                    v1beta1: _267.LCDQueryClient;
                };
                incentives: _268.LCDQueryClient;
                lockup: _269.LCDQueryClient;
                mint: {
                    v1beta1: _270.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _271.LCDQueryClient;
                };
                protorev: {
                    v1beta1: _272.LCDQueryClient;
                };
                superfluid: _273.LCDQueryClient;
                swaprouter: {
                    v1beta1: _274.LCDQueryClient;
                };
                tokenfactory: {
                    v1beta1: _275.LCDQueryClient;
                };
                twap: {
                    v1beta1: _276.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _277.LCDQueryClient;
                };
                valsetpref: {
                    v1beta1: _278.LCDQueryClient;
                };
            };
        }>;
    };
}

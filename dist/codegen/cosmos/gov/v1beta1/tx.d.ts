import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption, WeightedVoteOptionAmino, WeightedVoteOptionSDKType, TextProposal, TextProposalProtoMsg, TextProposalSDKType } from "./gov";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalProtoMsg, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositProtoMsg, CommunityPoolSpendProposalWithDepositSDKType } from "../../distribution/v1beta1/distribution";
import { ParameterChangeProposal, ParameterChangeProposalProtoMsg, ParameterChangeProposalSDKType } from "../../params/v1beta1/params";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalProtoMsg, SoftwareUpgradeProposalSDKType, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalProtoMsg, CancelSoftwareUpgradeProposalSDKType } from "../../upgrade/v1beta1/upgrade";
import { ReplacePoolIncentivesProposal, ReplacePoolIncentivesProposalProtoMsg, ReplacePoolIncentivesProposalSDKType, UpdatePoolIncentivesProposal, UpdatePoolIncentivesProposalProtoMsg, UpdatePoolIncentivesProposalSDKType } from "../../../osmosis/pool-incentives/v1beta1/gov";
import { SetProtoRevEnabledProposal, SetProtoRevEnabledProposalProtoMsg, SetProtoRevEnabledProposalSDKType, SetProtoRevAdminAccountProposal, SetProtoRevAdminAccountProposalProtoMsg, SetProtoRevAdminAccountProposalSDKType } from "../../../osmosis/protorev/v1beta1/gov";
import { SetSuperfluidAssetsProposal, SetSuperfluidAssetsProposalProtoMsg, SetSuperfluidAssetsProposalSDKType, RemoveSuperfluidAssetsProposal, RemoveSuperfluidAssetsProposalProtoMsg, RemoveSuperfluidAssetsProposalSDKType, UpdateUnpoolWhiteListProposal, UpdateUnpoolWhiteListProposalProtoMsg, UpdateUnpoolWhiteListProposalSDKType } from "../../../osmosis/superfluid/v1beta1/gov";
import { UpdateFeeTokenProposal, UpdateFeeTokenProposalProtoMsg, UpdateFeeTokenProposalSDKType } from "../../../osmosis/txfees/v1beta1/gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
    content?: (CommunityPoolSpendProposal & CommunityPoolSpendProposalWithDeposit & TextProposal & ParameterChangeProposal & SoftwareUpgradeProposal & CancelSoftwareUpgradeProposal & ReplacePoolIncentivesProposal & UpdatePoolIncentivesProposal & SetProtoRevEnabledProposal & SetProtoRevAdminAccountProposal & SetSuperfluidAssetsProposal & RemoveSuperfluidAssetsProposal & UpdateUnpoolWhiteListProposal & UpdateFeeTokenProposal & Any) | undefined;
    initial_deposit: Coin[];
    proposer: string;
}
export interface MsgSubmitProposalProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgSubmitProposal";
    value: Uint8Array;
}
export interface MsgSubmitProposalProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgSubmitProposal";
    value: Uint8Array;
}
export type MsgSubmitProposalEncoded = Omit<MsgSubmitProposal, "content"> & {
    content?: CommunityPoolSpendProposalProtoMsg | CommunityPoolSpendProposalWithDepositProtoMsg | TextProposalProtoMsg | ParameterChangeProposalProtoMsg | SoftwareUpgradeProposalProtoMsg | CancelSoftwareUpgradeProposalProtoMsg | ReplacePoolIncentivesProposalProtoMsg | UpdatePoolIncentivesProposalProtoMsg | SetProtoRevEnabledProposalProtoMsg | SetProtoRevAdminAccountProposalProtoMsg | SetSuperfluidAssetsProposalProtoMsg | RemoveSuperfluidAssetsProposalProtoMsg | UpdateUnpoolWhiteListProposalProtoMsg | UpdateFeeTokenProposalProtoMsg | AnyProtoMsg | undefined;
};
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalAmino {
    content?: AnyAmino;
    initial_deposit: CoinAmino[];
    proposer: string;
}
export interface MsgSubmitProposalAminoMsg {
    type: "cosmos-sdk/MsgSubmitProposal";
    value: MsgSubmitProposalAmino;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalSDKType {
    content?: CommunityPoolSpendProposalSDKType | CommunityPoolSpendProposalWithDepositSDKType | TextProposalSDKType | ParameterChangeProposalSDKType | SoftwareUpgradeProposalSDKType | CancelSoftwareUpgradeProposalSDKType | ReplacePoolIncentivesProposalSDKType | UpdatePoolIncentivesProposalSDKType | SetProtoRevEnabledProposalSDKType | SetProtoRevAdminAccountProposalSDKType | SetSuperfluidAssetsProposalSDKType | RemoveSuperfluidAssetsProposalSDKType | UpdateUnpoolWhiteListProposalSDKType | UpdateFeeTokenProposalSDKType | AnySDKType | undefined;
    initial_deposit: CoinSDKType[];
    proposer: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    proposal_id: bigint;
}
export interface MsgSubmitProposalResponseProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse";
    value: Uint8Array;
}
export interface MsgSubmitProposalResponseProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse";
    value: Uint8Array;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseAmino {
    proposal_id: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
    type: "cosmos-sdk/MsgSubmitProposalResponse";
    value: MsgSubmitProposalResponseAmino;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
    proposal_id: bigint;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
    proposal_id: bigint;
    voter: string;
    option: VoteOption;
}
export interface MsgVoteProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgVote";
    value: Uint8Array;
}
export interface MsgVoteProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgVote";
    value: Uint8Array;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteAmino {
    proposal_id: string;
    voter: string;
    option: VoteOption;
}
export interface MsgVoteAminoMsg {
    type: "cosmos-sdk/MsgVote";
    value: MsgVoteAmino;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteSDKType {
    proposal_id: bigint;
    voter: string;
    option: VoteOption;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {
}
export interface MsgVoteResponseProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgVoteResponse";
    value: Uint8Array;
}
export interface MsgVoteResponseProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgVoteResponse";
    value: Uint8Array;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseAmino {
}
export interface MsgVoteResponseAminoMsg {
    type: "cosmos-sdk/MsgVoteResponse";
    value: MsgVoteResponseAmino;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeighted {
    proposal_id: bigint;
    voter: string;
    options: WeightedVoteOption[];
}
export interface MsgVoteWeightedProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgVoteWeighted";
    value: Uint8Array;
}
export interface MsgVoteWeightedProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgVoteWeighted";
    value: Uint8Array;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedAmino {
    proposal_id: string;
    voter: string;
    options: WeightedVoteOptionAmino[];
}
export interface MsgVoteWeightedAminoMsg {
    type: "cosmos-sdk/MsgVoteWeighted";
    value: MsgVoteWeightedAmino;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedSDKType {
    proposal_id: bigint;
    voter: string;
    options: WeightedVoteOptionSDKType[];
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponse {
}
export interface MsgVoteWeightedResponseProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse";
    value: Uint8Array;
}
export interface MsgVoteWeightedResponseProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse";
    value: Uint8Array;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponseAmino {
}
export interface MsgVoteWeightedResponseAminoMsg {
    type: "cosmos-sdk/MsgVoteWeightedResponse";
    value: MsgVoteWeightedResponseAmino;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponseSDKType {
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
    proposal_id: bigint;
    depositor: string;
    amount: Coin[];
}
export interface MsgDepositProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgDeposit";
    value: Uint8Array;
}
export interface MsgDepositProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgDeposit";
    value: Uint8Array;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositAmino {
    proposal_id: string;
    depositor: string;
    amount: CoinAmino[];
}
export interface MsgDepositAminoMsg {
    type: "cosmos-sdk/MsgDeposit";
    value: MsgDepositAmino;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositSDKType {
    proposal_id: bigint;
    depositor: string;
    amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
export interface MsgDepositResponseProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgDepositResponse";
    value: Uint8Array;
}
export interface MsgDepositResponseProtoMsg {
    type_url: "/cosmos.gov.v1beta1.MsgDepositResponse";
    value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {
}
export interface MsgDepositResponseAminoMsg {
    type: "cosmos-sdk/MsgDepositResponse";
    value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
export declare const MsgSubmitProposal: {
    typeUrl: string;
    encode(message: MsgSubmitProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal;
    fromSDK(object: MsgSubmitProposalSDKType): MsgSubmitProposal;
    toSDK(message: MsgSubmitProposal): MsgSubmitProposalSDKType;
    fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal;
    toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino;
    fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal;
    toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg;
    fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal;
    toProto(message: MsgSubmitProposal): Uint8Array;
    toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg;
};
export declare const MsgSubmitProposalResponse: {
    typeUrl: string;
    encode(message: MsgSubmitProposalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromJSON(object: any): MsgSubmitProposalResponse;
    toJSON(message: MsgSubmitProposalResponse): unknown;
    fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse;
    fromSDK(object: MsgSubmitProposalResponseSDKType): MsgSubmitProposalResponse;
    toSDK(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseSDKType;
    fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse;
    toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino;
    fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse;
    toAminoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAminoMsg;
    fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse;
    toProto(message: MsgSubmitProposalResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg;
};
export declare const MsgVote: {
    typeUrl: string;
    encode(message: MsgVote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    fromPartial(object: Partial<MsgVote>): MsgVote;
    fromSDK(object: MsgVoteSDKType): MsgVote;
    toSDK(message: MsgVote): MsgVoteSDKType;
    fromAmino(object: MsgVoteAmino): MsgVote;
    toAmino(message: MsgVote): MsgVoteAmino;
    fromAminoMsg(object: MsgVoteAminoMsg): MsgVote;
    toAminoMsg(message: MsgVote): MsgVoteAminoMsg;
    fromProtoMsg(message: MsgVoteProtoMsg): MsgVote;
    toProto(message: MsgVote): Uint8Array;
    toProtoMsg(message: MsgVote): MsgVoteProtoMsg;
};
export declare const MsgVoteResponse: {
    typeUrl: string;
    encode(_: MsgVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse;
    fromJSON(_: any): MsgVoteResponse;
    toJSON(_: MsgVoteResponse): unknown;
    fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse;
    fromSDK(_: MsgVoteResponseSDKType): MsgVoteResponse;
    toSDK(_: MsgVoteResponse): MsgVoteResponseSDKType;
    fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse;
    toAmino(_: MsgVoteResponse): MsgVoteResponseAmino;
    fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse;
    toAminoMsg(message: MsgVoteResponse): MsgVoteResponseAminoMsg;
    fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse;
    toProto(message: MsgVoteResponse): Uint8Array;
    toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg;
};
export declare const MsgVoteWeighted: {
    typeUrl: string;
    encode(message: MsgVoteWeighted, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeighted;
    fromJSON(object: any): MsgVoteWeighted;
    toJSON(message: MsgVoteWeighted): unknown;
    fromPartial(object: Partial<MsgVoteWeighted>): MsgVoteWeighted;
    fromSDK(object: MsgVoteWeightedSDKType): MsgVoteWeighted;
    toSDK(message: MsgVoteWeighted): MsgVoteWeightedSDKType;
    fromAmino(object: MsgVoteWeightedAmino): MsgVoteWeighted;
    toAmino(message: MsgVoteWeighted): MsgVoteWeightedAmino;
    fromAminoMsg(object: MsgVoteWeightedAminoMsg): MsgVoteWeighted;
    toAminoMsg(message: MsgVoteWeighted): MsgVoteWeightedAminoMsg;
    fromProtoMsg(message: MsgVoteWeightedProtoMsg): MsgVoteWeighted;
    toProto(message: MsgVoteWeighted): Uint8Array;
    toProtoMsg(message: MsgVoteWeighted): MsgVoteWeightedProtoMsg;
};
export declare const MsgVoteWeightedResponse: {
    typeUrl: string;
    encode(_: MsgVoteWeightedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeightedResponse;
    fromJSON(_: any): MsgVoteWeightedResponse;
    toJSON(_: MsgVoteWeightedResponse): unknown;
    fromPartial(_: Partial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse;
    fromSDK(_: MsgVoteWeightedResponseSDKType): MsgVoteWeightedResponse;
    toSDK(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseSDKType;
    fromAmino(_: MsgVoteWeightedResponseAmino): MsgVoteWeightedResponse;
    toAmino(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseAmino;
    fromAminoMsg(object: MsgVoteWeightedResponseAminoMsg): MsgVoteWeightedResponse;
    toAminoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseAminoMsg;
    fromProtoMsg(message: MsgVoteWeightedResponseProtoMsg): MsgVoteWeightedResponse;
    toProto(message: MsgVoteWeightedResponse): Uint8Array;
    toProtoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseProtoMsg;
};
export declare const MsgDeposit: {
    typeUrl: string;
    encode(message: MsgDeposit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): unknown;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
    fromSDK(object: MsgDepositSDKType): MsgDeposit;
    toSDK(message: MsgDeposit): MsgDepositSDKType;
    fromAmino(object: MsgDepositAmino): MsgDeposit;
    toAmino(message: MsgDeposit): MsgDepositAmino;
    fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit;
    toAminoMsg(message: MsgDeposit): MsgDepositAminoMsg;
    fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit;
    toProto(message: MsgDeposit): Uint8Array;
    toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg;
};
export declare const MsgDepositResponse: {
    typeUrl: string;
    encode(_: MsgDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(_: any): MsgDepositResponse;
    toJSON(_: MsgDepositResponse): unknown;
    fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse;
    fromSDK(_: MsgDepositResponseSDKType): MsgDepositResponse;
    toSDK(_: MsgDepositResponse): MsgDepositResponseSDKType;
    fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse;
    toAmino(_: MsgDepositResponse): MsgDepositResponseAmino;
    fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse;
    toAminoMsg(message: MsgDepositResponse): MsgDepositResponseAminoMsg;
    fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse;
    toProto(message: MsgDepositResponse): Uint8Array;
    toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg;
};
export declare const Cosmos_govv1beta1Content_InterfaceDecoder: (input: BinaryReader | Uint8Array) => CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | TextProposal | ParameterChangeProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | ReplacePoolIncentivesProposal | UpdatePoolIncentivesProposal | SetProtoRevEnabledProposal | SetProtoRevAdminAccountProposal | SetSuperfluidAssetsProposal | RemoveSuperfluidAssetsProposal | UpdateUnpoolWhiteListProposal | UpdateFeeTokenProposal | Any;
export declare const Cosmos_govv1beta1Content_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_govv1beta1Content_ToAmino: (content: Any) => AnyAmino;

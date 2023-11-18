//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
export const protobufPackage = "cosmos.gov.v1";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
export const VoteOptionSDKType = VoteOption;
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  PROPOSAL_STATUS_PASSED = 3,
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  PROPOSAL_STATUS_REJECTED = 4,
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  PROPOSAL_STATUS_FAILED = 5,
  UNRECOGNIZED = -1,
}
export const ProposalStatusSDKType = ProposalStatus;
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
  /** option defines the valid vote options, it must not contain duplicate vote options. */
  option: VoteOption;
  /** weight is the vote weight associated with the vote option. */
  weight: string;
}
export interface WeightedVoteOptionProtoMsg {
  type_url: "/cosmos.gov.v1.WeightedVoteOption";
  value: Uint8Array;
}
export interface WeightedVoteOptionProtoMsg {
  type_url: "/cosmos.gov.v1.WeightedVoteOption";
  value: Uint8Array;
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOptionAmino {
  /** option defines the valid vote options, it must not contain duplicate vote options. */
  option: VoteOption;
  /** weight is the vote weight associated with the vote option. */
  weight: string;
}
export interface WeightedVoteOptionAminoMsg {
  type: "cosmos-sdk/v1/WeightedVoteOption";
  value: WeightedVoteOptionAmino;
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOptionSDKType {
  option: VoteOption;
  weight: string;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: Coin[];
}
export interface DepositProtoMsg {
  type_url: "/cosmos.gov.v1.Deposit";
  value: Uint8Array;
}
export interface DepositProtoMsg {
  type_url: "/cosmos.gov.v1.Deposit";
  value: Uint8Array;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: CoinAmino[];
}
export interface DepositAminoMsg {
  type: "cosmos-sdk/v1/Deposit";
  value: DepositAmino;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositSDKType {
  proposal_id: bigint;
  depositor: string;
  amount: CoinSDKType[];
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
  /** id defines the unique id of the proposal. */
  id: bigint;
  /** messages are the arbitrary messages to be executed if the proposal passes. */
  messages: Any[];
  /** status defines the proposal status. */
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  final_tally_result?: TallyResult;
  /** submit_time is the time of proposal submission. */
  submit_time?: Date;
  /** deposit_end_time is the end time for deposition. */
  deposit_end_time?: Date;
  /** total_deposit is the total deposit on the proposal. */
  total_deposit: Coin[];
  /** voting_start_time is the starting time to vote on a proposal. */
  voting_start_time?: Date;
  /** voting_end_time is the end time of voting on a proposal. */
  voting_end_time?: Date;
  /**
   * metadata is any arbitrary metadata attached to the proposal.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/gov#proposal-3
   */
  metadata: string;
  /**
   * title is the title of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is a short summary of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */
  summary: string;
  /**
   * proposer is the address of the proposal sumbitter
   * 
   * Since: cosmos-sdk 0.47
   */
  proposer: string;
  /**
   * expedited defines if the proposal is expedited
   * 
   * Since: cosmos-sdk 0.50
   */
  expedited: boolean;
  /**
   * failed_reason defines the reason why the proposal failed
   * 
   * Since: cosmos-sdk 0.50
   */
  failed_reason: string;
}
export interface ProposalProtoMsg {
  type_url: "/cosmos.gov.v1.Proposal";
  value: Uint8Array;
}
export interface ProposalProtoMsg {
  type_url: "/cosmos.gov.v1.Proposal";
  value: Uint8Array;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalAmino {
  /** id defines the unique id of the proposal. */
  id: string;
  /** messages are the arbitrary messages to be executed if the proposal passes. */
  messages: AnyAmino[];
  /** status defines the proposal status. */
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  final_tally_result?: TallyResultAmino;
  /** submit_time is the time of proposal submission. */
  submit_time?: Date;
  /** deposit_end_time is the end time for deposition. */
  deposit_end_time?: Date;
  /** total_deposit is the total deposit on the proposal. */
  total_deposit: CoinAmino[];
  /** voting_start_time is the starting time to vote on a proposal. */
  voting_start_time?: Date;
  /** voting_end_time is the end time of voting on a proposal. */
  voting_end_time?: Date;
  /**
   * metadata is any arbitrary metadata attached to the proposal.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/gov#proposal-3
   */
  metadata: string;
  /**
   * title is the title of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is a short summary of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */
  summary: string;
  /**
   * proposer is the address of the proposal sumbitter
   * 
   * Since: cosmos-sdk 0.47
   */
  proposer: string;
  /**
   * expedited defines if the proposal is expedited
   * 
   * Since: cosmos-sdk 0.50
   */
  expedited: boolean;
  /**
   * failed_reason defines the reason why the proposal failed
   * 
   * Since: cosmos-sdk 0.50
   */
  failed_reason: string;
}
export interface ProposalAminoMsg {
  type: "cosmos-sdk/v1/Proposal";
  value: ProposalAmino;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalSDKType {
  id: bigint;
  messages: AnySDKType[];
  status: ProposalStatus;
  final_tally_result?: TallyResultSDKType;
  submit_time?: Date;
  deposit_end_time?: Date;
  total_deposit: CoinSDKType[];
  voting_start_time?: Date;
  voting_end_time?: Date;
  metadata: string;
  title: string;
  summary: string;
  proposer: string;
  expedited: boolean;
  failed_reason: string;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
  /** yes_count is the number of yes votes on a proposal. */
  yes_count: string;
  /** abstain_count is the number of abstain votes on a proposal. */
  abstain_count: string;
  /** no_count is the number of no votes on a proposal. */
  no_count: string;
  /** no_with_veto_count is the number of no with veto votes on a proposal. */
  no_with_veto_count: string;
}
export interface TallyResultProtoMsg {
  type_url: "/cosmos.gov.v1.TallyResult";
  value: Uint8Array;
}
export interface TallyResultProtoMsg {
  type_url: "/cosmos.gov.v1.TallyResult";
  value: Uint8Array;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultAmino {
  /** yes_count is the number of yes votes on a proposal. */
  yes_count: string;
  /** abstain_count is the number of abstain votes on a proposal. */
  abstain_count: string;
  /** no_count is the number of no votes on a proposal. */
  no_count: string;
  /** no_with_veto_count is the number of no with veto votes on a proposal. */
  no_with_veto_count: string;
}
export interface TallyResultAminoMsg {
  type: "cosmos-sdk/v1/TallyResult";
  value: TallyResultAmino;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultSDKType {
  yes_count: string;
  abstain_count: string;
  no_count: string;
  no_with_veto_count: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: bigint;
  /** voter is the voter address of the proposal. */
  voter: string;
  /** options is the weighted vote options. */
  options: WeightedVoteOption[];
  /**
   * metadata is any arbitrary metadata attached to the vote.
   * the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/gov#vote-5
   */
  metadata: string;
}
export interface VoteProtoMsg {
  type_url: "/cosmos.gov.v1.Vote";
  value: Uint8Array;
}
export interface VoteProtoMsg {
  type_url: "/cosmos.gov.v1.Vote";
  value: Uint8Array;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** voter is the voter address of the proposal. */
  voter: string;
  /** options is the weighted vote options. */
  options: WeightedVoteOptionAmino[];
  /**
   * metadata is any arbitrary metadata attached to the vote.
   * the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/gov#vote-5
   */
  metadata: string;
}
export interface VoteAminoMsg {
  type: "cosmos-sdk/v1/Vote";
  value: VoteAmino;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteSDKType {
  proposal_id: bigint;
  voter: string;
  options: WeightedVoteOptionSDKType[];
  metadata: string;
}
/** DepositParams defines the params for deposits on governance proposals. */
/** @deprecated */
export interface DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: Duration;
}
export interface DepositParamsProtoMsg {
  type_url: "/cosmos.gov.v1.DepositParams";
  value: Uint8Array;
}
export interface DepositParamsProtoMsg {
  type_url: "/cosmos.gov.v1.DepositParams";
  value: Uint8Array;
}
/** DepositParams defines the params for deposits on governance proposals. */
/** @deprecated */
export interface DepositParamsAmino {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: CoinAmino[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: DurationAmino;
}
export interface DepositParamsAminoMsg {
  type: "cosmos-sdk/v1/DepositParams";
  value: DepositParamsAmino;
}
/** DepositParams defines the params for deposits on governance proposals. */
/** @deprecated */
export interface DepositParamsSDKType {
  min_deposit: CoinSDKType[];
  max_deposit_period?: DurationSDKType;
}
/** VotingParams defines the params for voting on governance proposals. */
/** @deprecated */
export interface VotingParams {
  /** Duration of the voting period. */
  voting_period?: Duration;
}
export interface VotingParamsProtoMsg {
  type_url: "/cosmos.gov.v1.VotingParams";
  value: Uint8Array;
}
export interface VotingParamsProtoMsg {
  type_url: "/cosmos.gov.v1.VotingParams";
  value: Uint8Array;
}
/** VotingParams defines the params for voting on governance proposals. */
/** @deprecated */
export interface VotingParamsAmino {
  /** Duration of the voting period. */
  voting_period?: DurationAmino;
}
export interface VotingParamsAminoMsg {
  type: "cosmos-sdk/v1/VotingParams";
  value: VotingParamsAmino;
}
/** VotingParams defines the params for voting on governance proposals. */
/** @deprecated */
export interface VotingParamsSDKType {
  voting_period?: DurationSDKType;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
/** @deprecated */
export interface TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   * vetoed. Default value: 1/3.
   */
  veto_threshold: string;
}
export interface TallyParamsProtoMsg {
  type_url: "/cosmos.gov.v1.TallyParams";
  value: Uint8Array;
}
export interface TallyParamsProtoMsg {
  type_url: "/cosmos.gov.v1.TallyParams";
  value: Uint8Array;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
/** @deprecated */
export interface TallyParamsAmino {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   * vetoed. Default value: 1/3.
   */
  veto_threshold: string;
}
export interface TallyParamsAminoMsg {
  type: "cosmos-sdk/v1/TallyParams";
  value: TallyParamsAmino;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
/** @deprecated */
export interface TallyParamsSDKType {
  quorum: string;
  threshold: string;
  veto_threshold: string;
}
/**
 * Params defines the parameters for the x/gov module.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface Params {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: Duration;
  /** Duration of the voting period. */
  voting_period?: Duration;
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */
  veto_threshold: string;
  /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
  min_initial_deposit_ratio: string;
  /**
   * The cancel ratio which will not be returned back to the depositors when a proposal is cancelled.
   * 
   * Since: cosmos-sdk 0.50
   */
  proposal_cancel_ratio: string;
  /**
   * The address which will receive (proposal_cancel_ratio * deposit) proposal deposits.
   * If empty, the (proposal_cancel_ratio * deposit) proposal deposits will be burned.
   * 
   * Since: cosmos-sdk 0.50
   */
  proposal_cancel_dest: string;
  /**
   * Duration of the voting period of an expedited proposal.
   * 
   * Since: cosmos-sdk 0.50
   */
  expedited_voting_period?: Duration;
  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 0.67.
   * 
   * Since: cosmos-sdk 0.50
   */
  expedited_threshold: string;
  /** Minimum expedited deposit for a proposal to enter voting period. */
  expedited_min_deposit: Coin[];
  /** burn deposits if a proposal does not meet quorum */
  burn_vote_quorum: boolean;
  /** burn deposits if the proposal does not enter voting period */
  burn_proposal_deposit_prevote: boolean;
  /** burn deposits if quorum with vote type no_veto is met */
  burn_vote_veto: boolean;
  /**
   * The ratio representing the proportion of the deposit value minimum that must be met when making a deposit.
   * Default value: 0.01. Meaning that for a chain with a min_deposit of 100stake, a deposit of 1stake would be
   * required.
   * 
   * Since: cosmos-sdk 0.50
   */
  min_deposit_ratio: string;
}
export interface ParamsProtoMsg {
  type_url: "/cosmos.gov.v1.Params";
  value: Uint8Array;
}
export interface ParamsProtoMsg {
  type_url: "/cosmos.gov.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the x/gov module.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface ParamsAmino {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: CoinAmino[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: DurationAmino;
  /** Duration of the voting period. */
  voting_period?: DurationAmino;
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */
  veto_threshold: string;
  /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
  min_initial_deposit_ratio: string;
  /**
   * The cancel ratio which will not be returned back to the depositors when a proposal is cancelled.
   * 
   * Since: cosmos-sdk 0.50
   */
  proposal_cancel_ratio: string;
  /**
   * The address which will receive (proposal_cancel_ratio * deposit) proposal deposits.
   * If empty, the (proposal_cancel_ratio * deposit) proposal deposits will be burned.
   * 
   * Since: cosmos-sdk 0.50
   */
  proposal_cancel_dest: string;
  /**
   * Duration of the voting period of an expedited proposal.
   * 
   * Since: cosmos-sdk 0.50
   */
  expedited_voting_period?: DurationAmino;
  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 0.67.
   * 
   * Since: cosmos-sdk 0.50
   */
  expedited_threshold: string;
  /** Minimum expedited deposit for a proposal to enter voting period. */
  expedited_min_deposit: CoinAmino[];
  /** burn deposits if a proposal does not meet quorum */
  burn_vote_quorum: boolean;
  /** burn deposits if the proposal does not enter voting period */
  burn_proposal_deposit_prevote: boolean;
  /** burn deposits if quorum with vote type no_veto is met */
  burn_vote_veto: boolean;
  /**
   * The ratio representing the proportion of the deposit value minimum that must be met when making a deposit.
   * Default value: 0.01. Meaning that for a chain with a min_deposit of 100stake, a deposit of 1stake would be
   * required.
   * 
   * Since: cosmos-sdk 0.50
   */
  min_deposit_ratio: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/v1/Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the x/gov module.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface ParamsSDKType {
  min_deposit: CoinSDKType[];
  max_deposit_period?: DurationSDKType;
  voting_period?: DurationSDKType;
  quorum: string;
  threshold: string;
  veto_threshold: string;
  min_initial_deposit_ratio: string;
  proposal_cancel_ratio: string;
  proposal_cancel_dest: string;
  expedited_voting_period?: DurationSDKType;
  expedited_threshold: string;
  expedited_min_deposit: CoinSDKType[];
  burn_vote_quorum: boolean;
  burn_proposal_deposit_prevote: boolean;
  burn_vote_veto: boolean;
  min_deposit_ratio: string;
}
function createBaseWeightedVoteOption(): WeightedVoteOption {
  return {
    option: 0,
    weight: ""
  };
}
export const WeightedVoteOption = {
  typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
  encode(message: WeightedVoteOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedVoteOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = (reader.int32() as any);
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedVoteOption {
    return {
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: WeightedVoteOption): unknown {
    const obj: any = {};
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: Partial<WeightedVoteOption>): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    return message;
  },
  fromSDK(object: WeightedVoteOptionSDKType): WeightedVoteOption {
    return {
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      weight: object?.weight
    };
  },
  toSDK(message: WeightedVoteOption): WeightedVoteOptionSDKType {
    const obj: any = {};
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    obj.weight = message.weight;
    return obj;
  },
  fromAmino(object: WeightedVoteOptionAmino): WeightedVoteOption {
    return {
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      weight: object.weight
    };
  },
  toAmino(message: WeightedVoteOption): WeightedVoteOptionAmino {
    const obj: any = {};
    obj.option = message.option;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: WeightedVoteOptionAminoMsg): WeightedVoteOption {
    return WeightedVoteOption.fromAmino(object.value);
  },
  toAminoMsg(message: WeightedVoteOption): WeightedVoteOptionAminoMsg {
    return {
      type: "cosmos-sdk/v1/WeightedVoteOption",
      value: WeightedVoteOption.toAmino(message)
    };
  },
  fromProtoMsg(message: WeightedVoteOptionProtoMsg): WeightedVoteOption {
    return WeightedVoteOption.decode(message.value);
  },
  toProto(message: WeightedVoteOption): Uint8Array {
    return WeightedVoteOption.encode(message).finish();
  },
  toProtoMsg(message: WeightedVoteOption): WeightedVoteOptionProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
      value: WeightedVoteOption.encode(message).finish()
    };
  }
};
function createBaseDeposit(): Deposit {
  return {
    proposal_id: BigInt(0),
    depositor: "",
    amount: []
  };
}
export const Deposit = {
  typeUrl: "/cosmos.gov.v1.Deposit",
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Deposit {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: Deposit): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: DepositSDKType): Deposit {
    return {
      proposal_id: object?.proposal_id,
      depositor: object?.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: Deposit): DepositSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposal_id;
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: DepositAmino): Deposit {
    return {
      proposal_id: BigInt(object.proposal_id),
      depositor: object.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  toAminoMsg(message: Deposit): DepositAminoMsg {
    return {
      type: "cosmos-sdk/v1/Deposit",
      value: Deposit.toAmino(message)
    };
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};
function createBaseProposal(): Proposal {
  return {
    id: BigInt(0),
    messages: [],
    status: 0,
    final_tally_result: undefined,
    submit_time: undefined,
    deposit_end_time: undefined,
    total_deposit: [],
    voting_start_time: undefined,
    voting_end_time: undefined,
    metadata: "",
    title: "",
    summary: "",
    proposer: "",
    expedited: false,
    failed_reason: ""
  };
}
export const Proposal = {
  typeUrl: "/cosmos.gov.v1.Proposal",
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.final_tally_result !== undefined) {
      TallyResult.encode(message.final_tally_result, writer.uint32(34).fork()).ldelim();
    }
    if (message.submit_time !== undefined) {
      Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
    }
    if (message.deposit_end_time !== undefined) {
      Timestamp.encode(toTimestamp(message.deposit_end_time), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.total_deposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.voting_start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.voting_start_time), writer.uint32(66).fork()).ldelim();
    }
    if (message.voting_end_time !== undefined) {
      Timestamp.encode(toTimestamp(message.voting_end_time), writer.uint32(74).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(90).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(98).string(message.summary);
    }
    if (message.proposer !== "") {
      writer.uint32(106).string(message.proposer);
    }
    if (message.expedited === true) {
      writer.uint32(112).bool(message.expedited);
    }
    if (message.failed_reason !== "") {
      writer.uint32(122).string(message.failed_reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status = (reader.int32() as any);
          break;
        case 4:
          message.final_tally_result = TallyResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.submit_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.deposit_end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.total_deposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.voting_start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.voting_end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.metadata = reader.string();
          break;
        case 11:
          message.title = reader.string();
          break;
        case 12:
          message.summary = reader.string();
          break;
        case 13:
          message.proposer = reader.string();
          break;
        case 14:
          message.expedited = reader.bool();
          break;
        case 15:
          message.failed_reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Proposal {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      final_tally_result: isSet(object.final_tally_result) ? TallyResult.fromJSON(object.final_tally_result) : undefined,
      submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
      deposit_end_time: isSet(object.deposit_end_time) ? fromJsonTimestamp(object.deposit_end_time) : undefined,
      total_deposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e: any) => Coin.fromJSON(e)) : [],
      voting_start_time: isSet(object.voting_start_time) ? fromJsonTimestamp(object.voting_start_time) : undefined,
      voting_end_time: isSet(object.voting_end_time) ? fromJsonTimestamp(object.voting_end_time) : undefined,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      expedited: isSet(object.expedited) ? Boolean(object.expedited) : false,
      failed_reason: isSet(object.failed_reason) ? String(object.failed_reason) : ""
    };
  },
  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? TallyResult.toJSON(message.final_tally_result) : undefined);
    message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
    message.deposit_end_time !== undefined && (obj.deposit_end_time = message.deposit_end_time.toISOString());
    if (message.total_deposit) {
      obj.total_deposit = message.total_deposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.total_deposit = [];
    }
    message.voting_start_time !== undefined && (obj.voting_start_time = message.voting_start_time.toISOString());
    message.voting_end_time !== undefined && (obj.voting_end_time = message.voting_end_time.toISOString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.expedited !== undefined && (obj.expedited = message.expedited);
    message.failed_reason !== undefined && (obj.failed_reason = message.failed_reason);
    return obj;
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    message.final_tally_result = object.final_tally_result !== undefined && object.final_tally_result !== null ? TallyResult.fromPartial(object.final_tally_result) : undefined;
    message.submit_time = object.submit_time ?? undefined;
    message.deposit_end_time = object.deposit_end_time ?? undefined;
    message.total_deposit = object.total_deposit?.map(e => Coin.fromPartial(e)) || [];
    message.voting_start_time = object.voting_start_time ?? undefined;
    message.voting_end_time = object.voting_end_time ?? undefined;
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.proposer = object.proposer ?? "";
    message.expedited = object.expedited ?? false;
    message.failed_reason = object.failed_reason ?? "";
    return message;
  },
  fromSDK(object: ProposalSDKType): Proposal {
    return {
      id: object?.id,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromSDK(e)) : [],
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      final_tally_result: object.final_tally_result ? TallyResult.fromSDK(object.final_tally_result) : undefined,
      submit_time: object.submit_time ? Timestamp.fromSDK(object.submit_time) : undefined,
      deposit_end_time: object.deposit_end_time ? Timestamp.fromSDK(object.deposit_end_time) : undefined,
      total_deposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e: any) => Coin.fromSDK(e)) : [],
      voting_start_time: object.voting_start_time ? Timestamp.fromSDK(object.voting_start_time) : undefined,
      voting_end_time: object.voting_end_time ? Timestamp.fromSDK(object.voting_end_time) : undefined,
      metadata: object?.metadata,
      title: object?.title,
      summary: object?.summary,
      proposer: object?.proposer,
      expedited: object?.expedited,
      failed_reason: object?.failed_reason
    };
  },
  toSDK(message: Proposal): ProposalSDKType {
    const obj: any = {};
    obj.id = message.id;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.messages = [];
    }
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? TallyResult.toSDK(message.final_tally_result) : undefined);
    message.submit_time !== undefined && (obj.submit_time = message.submit_time ? Timestamp.toSDK(message.submit_time) : undefined);
    message.deposit_end_time !== undefined && (obj.deposit_end_time = message.deposit_end_time ? Timestamp.toSDK(message.deposit_end_time) : undefined);
    if (message.total_deposit) {
      obj.total_deposit = message.total_deposit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_deposit = [];
    }
    message.voting_start_time !== undefined && (obj.voting_start_time = message.voting_start_time ? Timestamp.toSDK(message.voting_start_time) : undefined);
    message.voting_end_time !== undefined && (obj.voting_end_time = message.voting_end_time ? Timestamp.toSDK(message.voting_end_time) : undefined);
    obj.metadata = message.metadata;
    obj.title = message.title;
    obj.summary = message.summary;
    obj.proposer = message.proposer;
    obj.expedited = message.expedited;
    obj.failed_reason = message.failed_reason;
    return obj;
  },
  fromAmino(object: ProposalAmino): Proposal {
    return {
      id: BigInt(object.id),
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromAmino(e)) : [],
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      final_tally_result: object?.final_tally_result ? TallyResult.fromAmino(object.final_tally_result) : undefined,
      submit_time: object?.submit_time,
      deposit_end_time: object?.deposit_end_time,
      total_deposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e: any) => Coin.fromAmino(e)) : [],
      voting_start_time: object?.voting_start_time,
      voting_end_time: object?.voting_end_time,
      metadata: object.metadata,
      title: object.title,
      summary: object.summary,
      proposer: object.proposer,
      expedited: object.expedited,
      failed_reason: object.failed_reason
    };
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = [];
    }
    obj.status = message.status;
    obj.final_tally_result = message.final_tally_result ? TallyResult.toAmino(message.final_tally_result) : undefined;
    obj.submit_time = message.submit_time;
    obj.deposit_end_time = message.deposit_end_time;
    if (message.total_deposit) {
      obj.total_deposit = message.total_deposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_deposit = [];
    }
    obj.voting_start_time = message.voting_start_time;
    obj.voting_end_time = message.voting_end_time;
    obj.metadata = message.metadata;
    obj.title = message.title;
    obj.summary = message.summary;
    obj.proposer = message.proposer;
    obj.expedited = message.expedited;
    obj.failed_reason = message.failed_reason;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  toAminoMsg(message: Proposal): ProposalAminoMsg {
    return {
      type: "cosmos-sdk/v1/Proposal",
      value: Proposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
function createBaseTallyResult(): TallyResult {
  return {
    yes_count: "",
    abstain_count: "",
    no_count: "",
    no_with_veto_count: ""
  };
}
export const TallyResult = {
  typeUrl: "/cosmos.gov.v1.TallyResult",
  encode(message: TallyResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yes_count !== "") {
      writer.uint32(10).string(message.yes_count);
    }
    if (message.abstain_count !== "") {
      writer.uint32(18).string(message.abstain_count);
    }
    if (message.no_count !== "") {
      writer.uint32(26).string(message.no_count);
    }
    if (message.no_with_veto_count !== "") {
      writer.uint32(34).string(message.no_with_veto_count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yes_count = reader.string();
          break;
        case 2:
          message.abstain_count = reader.string();
          break;
        case 3:
          message.no_count = reader.string();
          break;
        case 4:
          message.no_with_veto_count = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TallyResult {
    return {
      yes_count: isSet(object.yes_count) ? String(object.yes_count) : "",
      abstain_count: isSet(object.abstain_count) ? String(object.abstain_count) : "",
      no_count: isSet(object.no_count) ? String(object.no_count) : "",
      no_with_veto_count: isSet(object.no_with_veto_count) ? String(object.no_with_veto_count) : ""
    };
  },
  toJSON(message: TallyResult): unknown {
    const obj: any = {};
    message.yes_count !== undefined && (obj.yes_count = message.yes_count);
    message.abstain_count !== undefined && (obj.abstain_count = message.abstain_count);
    message.no_count !== undefined && (obj.no_count = message.no_count);
    message.no_with_veto_count !== undefined && (obj.no_with_veto_count = message.no_with_veto_count);
    return obj;
  },
  fromPartial(object: Partial<TallyResult>): TallyResult {
    const message = createBaseTallyResult();
    message.yes_count = object.yes_count ?? "";
    message.abstain_count = object.abstain_count ?? "";
    message.no_count = object.no_count ?? "";
    message.no_with_veto_count = object.no_with_veto_count ?? "";
    return message;
  },
  fromSDK(object: TallyResultSDKType): TallyResult {
    return {
      yes_count: object?.yes_count,
      abstain_count: object?.abstain_count,
      no_count: object?.no_count,
      no_with_veto_count: object?.no_with_veto_count
    };
  },
  toSDK(message: TallyResult): TallyResultSDKType {
    const obj: any = {};
    obj.yes_count = message.yes_count;
    obj.abstain_count = message.abstain_count;
    obj.no_count = message.no_count;
    obj.no_with_veto_count = message.no_with_veto_count;
    return obj;
  },
  fromAmino(object: TallyResultAmino): TallyResult {
    return {
      yes_count: object.yes_count,
      abstain_count: object.abstain_count,
      no_count: object.no_count,
      no_with_veto_count: object.no_with_veto_count
    };
  },
  toAmino(message: TallyResult): TallyResultAmino {
    const obj: any = {};
    obj.yes_count = message.yes_count;
    obj.abstain_count = message.abstain_count;
    obj.no_count = message.no_count;
    obj.no_with_veto_count = message.no_with_veto_count;
    return obj;
  },
  fromAminoMsg(object: TallyResultAminoMsg): TallyResult {
    return TallyResult.fromAmino(object.value);
  },
  toAminoMsg(message: TallyResult): TallyResultAminoMsg {
    return {
      type: "cosmos-sdk/v1/TallyResult",
      value: TallyResult.toAmino(message)
    };
  },
  fromProtoMsg(message: TallyResultProtoMsg): TallyResult {
    return TallyResult.decode(message.value);
  },
  toProto(message: TallyResult): Uint8Array {
    return TallyResult.encode(message).finish();
  },
  toProtoMsg(message: TallyResult): TallyResultProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
function createBaseVote(): Vote {
  return {
    proposal_id: BigInt(0),
    voter: "",
    options: [],
    metadata: ""
  };
}
export const Vote = {
  typeUrl: "/cosmos.gov.v1.Vote",
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 5:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Vote {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromSDK(object: VoteSDKType): Vote {
    return {
      proposal_id: object?.proposal_id,
      voter: object?.voter,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromSDK(e)) : [],
      metadata: object?.metadata
    };
  },
  toSDK(message: Vote): VoteSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposal_id;
    obj.voter = message.voter;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toSDK(e) : undefined);
    } else {
      obj.options = [];
    }
    obj.metadata = message.metadata;
    return obj;
  },
  fromAmino(object: VoteAmino): Vote {
    return {
      proposal_id: BigInt(object.proposal_id),
      voter: object.voter,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromAmino(e)) : [],
      metadata: object.metadata
    };
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.voter = message.voter;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
    } else {
      obj.options = [];
    }
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  toAminoMsg(message: Vote): VoteAminoMsg {
    return {
      type: "cosmos-sdk/v1/Vote",
      value: Vote.toAmino(message)
    };
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
function createBaseDepositParams(): DepositParams {
  return {
    min_deposit: [],
    max_deposit_period: undefined
  };
}
export const DepositParams = {
  typeUrl: "/cosmos.gov.v1.DepositParams",
  encode(message: DepositParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.min_deposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.max_deposit_period !== undefined) {
      Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min_deposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.max_deposit_period = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DepositParams {
    return {
      min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e: any) => Coin.fromJSON(e)) : [],
      max_deposit_period: isSet(object.max_deposit_period) ? Duration.fromJSON(object.max_deposit_period) : undefined
    };
  },
  toJSON(message: DepositParams): unknown {
    const obj: any = {};
    if (message.min_deposit) {
      obj.min_deposit = message.min_deposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.min_deposit = [];
    }
    message.max_deposit_period !== undefined && (obj.max_deposit_period = message.max_deposit_period ? Duration.toJSON(message.max_deposit_period) : undefined);
    return obj;
  },
  fromPartial(object: Partial<DepositParams>): DepositParams {
    const message = createBaseDepositParams();
    message.min_deposit = object.min_deposit?.map(e => Coin.fromPartial(e)) || [];
    message.max_deposit_period = object.max_deposit_period !== undefined && object.max_deposit_period !== null ? Duration.fromPartial(object.max_deposit_period) : undefined;
    return message;
  },
  fromSDK(object: DepositParamsSDKType): DepositParams {
    return {
      min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e: any) => Coin.fromSDK(e)) : [],
      max_deposit_period: object.max_deposit_period ? Duration.fromSDK(object.max_deposit_period) : undefined
    };
  },
  toSDK(message: DepositParams): DepositParamsSDKType {
    const obj: any = {};
    if (message.min_deposit) {
      obj.min_deposit = message.min_deposit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.min_deposit = [];
    }
    message.max_deposit_period !== undefined && (obj.max_deposit_period = message.max_deposit_period ? Duration.toSDK(message.max_deposit_period) : undefined);
    return obj;
  },
  fromAmino(object: DepositParamsAmino): DepositParams {
    return {
      min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e: any) => Coin.fromAmino(e)) : [],
      max_deposit_period: object?.max_deposit_period ? Duration.fromAmino(object.max_deposit_period) : undefined
    };
  },
  toAmino(message: DepositParams): DepositParamsAmino {
    const obj: any = {};
    if (message.min_deposit) {
      obj.min_deposit = message.min_deposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposit = [];
    }
    obj.max_deposit_period = message.max_deposit_period ? Duration.toAmino(message.max_deposit_period) : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositParamsAminoMsg): DepositParams {
    return DepositParams.fromAmino(object.value);
  },
  toAminoMsg(message: DepositParams): DepositParamsAminoMsg {
    return {
      type: "cosmos-sdk/v1/DepositParams",
      value: DepositParams.toAmino(message)
    };
  },
  fromProtoMsg(message: DepositParamsProtoMsg): DepositParams {
    return DepositParams.decode(message.value);
  },
  toProto(message: DepositParams): Uint8Array {
    return DepositParams.encode(message).finish();
  },
  toProtoMsg(message: DepositParams): DepositParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.DepositParams",
      value: DepositParams.encode(message).finish()
    };
  }
};
function createBaseVotingParams(): VotingParams {
  return {
    voting_period: undefined
  };
}
export const VotingParams = {
  typeUrl: "/cosmos.gov.v1.VotingParams",
  encode(message: VotingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voting_period !== undefined) {
      Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VotingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voting_period = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VotingParams {
    return {
      voting_period: isSet(object.voting_period) ? Duration.fromJSON(object.voting_period) : undefined
    };
  },
  toJSON(message: VotingParams): unknown {
    const obj: any = {};
    message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toJSON(message.voting_period) : undefined);
    return obj;
  },
  fromPartial(object: Partial<VotingParams>): VotingParams {
    const message = createBaseVotingParams();
    message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? Duration.fromPartial(object.voting_period) : undefined;
    return message;
  },
  fromSDK(object: VotingParamsSDKType): VotingParams {
    return {
      voting_period: object.voting_period ? Duration.fromSDK(object.voting_period) : undefined
    };
  },
  toSDK(message: VotingParams): VotingParamsSDKType {
    const obj: any = {};
    message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toSDK(message.voting_period) : undefined);
    return obj;
  },
  fromAmino(object: VotingParamsAmino): VotingParams {
    return {
      voting_period: object?.voting_period ? Duration.fromAmino(object.voting_period) : undefined
    };
  },
  toAmino(message: VotingParams): VotingParamsAmino {
    const obj: any = {};
    obj.voting_period = message.voting_period ? Duration.toAmino(message.voting_period) : undefined;
    return obj;
  },
  fromAminoMsg(object: VotingParamsAminoMsg): VotingParams {
    return VotingParams.fromAmino(object.value);
  },
  toAminoMsg(message: VotingParams): VotingParamsAminoMsg {
    return {
      type: "cosmos-sdk/v1/VotingParams",
      value: VotingParams.toAmino(message)
    };
  },
  fromProtoMsg(message: VotingParamsProtoMsg): VotingParams {
    return VotingParams.decode(message.value);
  },
  toProto(message: VotingParams): Uint8Array {
    return VotingParams.encode(message).finish();
  },
  toProtoMsg(message: VotingParams): VotingParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.VotingParams",
      value: VotingParams.encode(message).finish()
    };
  }
};
function createBaseTallyParams(): TallyParams {
  return {
    quorum: "",
    threshold: "",
    veto_threshold: ""
  };
}
export const TallyParams = {
  typeUrl: "/cosmos.gov.v1.TallyParams",
  encode(message: TallyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.veto_threshold !== "") {
      writer.uint32(26).string(message.veto_threshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TallyParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;
        case 2:
          message.threshold = reader.string();
          break;
        case 3:
          message.veto_threshold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TallyParams {
    return {
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      veto_threshold: isSet(object.veto_threshold) ? String(object.veto_threshold) : ""
    };
  },
  toJSON(message: TallyParams): unknown {
    const obj: any = {};
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.veto_threshold !== undefined && (obj.veto_threshold = message.veto_threshold);
    return obj;
  },
  fromPartial(object: Partial<TallyParams>): TallyParams {
    const message = createBaseTallyParams();
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.veto_threshold = object.veto_threshold ?? "";
    return message;
  },
  fromSDK(object: TallyParamsSDKType): TallyParams {
    return {
      quorum: object?.quorum,
      threshold: object?.threshold,
      veto_threshold: object?.veto_threshold
    };
  },
  toSDK(message: TallyParams): TallyParamsSDKType {
    const obj: any = {};
    obj.quorum = message.quorum;
    obj.threshold = message.threshold;
    obj.veto_threshold = message.veto_threshold;
    return obj;
  },
  fromAmino(object: TallyParamsAmino): TallyParams {
    return {
      quorum: object.quorum,
      threshold: object.threshold,
      veto_threshold: object.veto_threshold
    };
  },
  toAmino(message: TallyParams): TallyParamsAmino {
    const obj: any = {};
    obj.quorum = message.quorum;
    obj.threshold = message.threshold;
    obj.veto_threshold = message.veto_threshold;
    return obj;
  },
  fromAminoMsg(object: TallyParamsAminoMsg): TallyParams {
    return TallyParams.fromAmino(object.value);
  },
  toAminoMsg(message: TallyParams): TallyParamsAminoMsg {
    return {
      type: "cosmos-sdk/v1/TallyParams",
      value: TallyParams.toAmino(message)
    };
  },
  fromProtoMsg(message: TallyParamsProtoMsg): TallyParams {
    return TallyParams.decode(message.value);
  },
  toProto(message: TallyParams): Uint8Array {
    return TallyParams.encode(message).finish();
  },
  toProtoMsg(message: TallyParams): TallyParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.TallyParams",
      value: TallyParams.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    min_deposit: [],
    max_deposit_period: undefined,
    voting_period: undefined,
    quorum: "",
    threshold: "",
    veto_threshold: "",
    min_initial_deposit_ratio: "",
    proposal_cancel_ratio: "",
    proposal_cancel_dest: "",
    expedited_voting_period: undefined,
    expedited_threshold: "",
    expedited_min_deposit: [],
    burn_vote_quorum: false,
    burn_proposal_deposit_prevote: false,
    burn_vote_veto: false,
    min_deposit_ratio: ""
  };
}
export const Params = {
  typeUrl: "/cosmos.gov.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.min_deposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.max_deposit_period !== undefined) {
      Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
    }
    if (message.voting_period !== undefined) {
      Duration.encode(message.voting_period, writer.uint32(26).fork()).ldelim();
    }
    if (message.quorum !== "") {
      writer.uint32(34).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(42).string(message.threshold);
    }
    if (message.veto_threshold !== "") {
      writer.uint32(50).string(message.veto_threshold);
    }
    if (message.min_initial_deposit_ratio !== "") {
      writer.uint32(58).string(message.min_initial_deposit_ratio);
    }
    if (message.proposal_cancel_ratio !== "") {
      writer.uint32(66).string(message.proposal_cancel_ratio);
    }
    if (message.proposal_cancel_dest !== "") {
      writer.uint32(74).string(message.proposal_cancel_dest);
    }
    if (message.expedited_voting_period !== undefined) {
      Duration.encode(message.expedited_voting_period, writer.uint32(82).fork()).ldelim();
    }
    if (message.expedited_threshold !== "") {
      writer.uint32(90).string(message.expedited_threshold);
    }
    for (const v of message.expedited_min_deposit) {
      Coin.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.burn_vote_quorum === true) {
      writer.uint32(104).bool(message.burn_vote_quorum);
    }
    if (message.burn_proposal_deposit_prevote === true) {
      writer.uint32(112).bool(message.burn_proposal_deposit_prevote);
    }
    if (message.burn_vote_veto === true) {
      writer.uint32(120).bool(message.burn_vote_veto);
    }
    if (message.min_deposit_ratio !== "") {
      writer.uint32(130).string(message.min_deposit_ratio);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min_deposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.max_deposit_period = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.voting_period = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.quorum = reader.string();
          break;
        case 5:
          message.threshold = reader.string();
          break;
        case 6:
          message.veto_threshold = reader.string();
          break;
        case 7:
          message.min_initial_deposit_ratio = reader.string();
          break;
        case 8:
          message.proposal_cancel_ratio = reader.string();
          break;
        case 9:
          message.proposal_cancel_dest = reader.string();
          break;
        case 10:
          message.expedited_voting_period = Duration.decode(reader, reader.uint32());
          break;
        case 11:
          message.expedited_threshold = reader.string();
          break;
        case 12:
          message.expedited_min_deposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 13:
          message.burn_vote_quorum = reader.bool();
          break;
        case 14:
          message.burn_proposal_deposit_prevote = reader.bool();
          break;
        case 15:
          message.burn_vote_veto = reader.bool();
          break;
        case 16:
          message.min_deposit_ratio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e: any) => Coin.fromJSON(e)) : [],
      max_deposit_period: isSet(object.max_deposit_period) ? Duration.fromJSON(object.max_deposit_period) : undefined,
      voting_period: isSet(object.voting_period) ? Duration.fromJSON(object.voting_period) : undefined,
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      veto_threshold: isSet(object.veto_threshold) ? String(object.veto_threshold) : "",
      min_initial_deposit_ratio: isSet(object.min_initial_deposit_ratio) ? String(object.min_initial_deposit_ratio) : "",
      proposal_cancel_ratio: isSet(object.proposal_cancel_ratio) ? String(object.proposal_cancel_ratio) : "",
      proposal_cancel_dest: isSet(object.proposal_cancel_dest) ? String(object.proposal_cancel_dest) : "",
      expedited_voting_period: isSet(object.expedited_voting_period) ? Duration.fromJSON(object.expedited_voting_period) : undefined,
      expedited_threshold: isSet(object.expedited_threshold) ? String(object.expedited_threshold) : "",
      expedited_min_deposit: Array.isArray(object?.expedited_min_deposit) ? object.expedited_min_deposit.map((e: any) => Coin.fromJSON(e)) : [],
      burn_vote_quorum: isSet(object.burn_vote_quorum) ? Boolean(object.burn_vote_quorum) : false,
      burn_proposal_deposit_prevote: isSet(object.burn_proposal_deposit_prevote) ? Boolean(object.burn_proposal_deposit_prevote) : false,
      burn_vote_veto: isSet(object.burn_vote_veto) ? Boolean(object.burn_vote_veto) : false,
      min_deposit_ratio: isSet(object.min_deposit_ratio) ? String(object.min_deposit_ratio) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.min_deposit) {
      obj.min_deposit = message.min_deposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.min_deposit = [];
    }
    message.max_deposit_period !== undefined && (obj.max_deposit_period = message.max_deposit_period ? Duration.toJSON(message.max_deposit_period) : undefined);
    message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toJSON(message.voting_period) : undefined);
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.veto_threshold !== undefined && (obj.veto_threshold = message.veto_threshold);
    message.min_initial_deposit_ratio !== undefined && (obj.min_initial_deposit_ratio = message.min_initial_deposit_ratio);
    message.proposal_cancel_ratio !== undefined && (obj.proposal_cancel_ratio = message.proposal_cancel_ratio);
    message.proposal_cancel_dest !== undefined && (obj.proposal_cancel_dest = message.proposal_cancel_dest);
    message.expedited_voting_period !== undefined && (obj.expedited_voting_period = message.expedited_voting_period ? Duration.toJSON(message.expedited_voting_period) : undefined);
    message.expedited_threshold !== undefined && (obj.expedited_threshold = message.expedited_threshold);
    if (message.expedited_min_deposit) {
      obj.expedited_min_deposit = message.expedited_min_deposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.expedited_min_deposit = [];
    }
    message.burn_vote_quorum !== undefined && (obj.burn_vote_quorum = message.burn_vote_quorum);
    message.burn_proposal_deposit_prevote !== undefined && (obj.burn_proposal_deposit_prevote = message.burn_proposal_deposit_prevote);
    message.burn_vote_veto !== undefined && (obj.burn_vote_veto = message.burn_vote_veto);
    message.min_deposit_ratio !== undefined && (obj.min_deposit_ratio = message.min_deposit_ratio);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.min_deposit = object.min_deposit?.map(e => Coin.fromPartial(e)) || [];
    message.max_deposit_period = object.max_deposit_period !== undefined && object.max_deposit_period !== null ? Duration.fromPartial(object.max_deposit_period) : undefined;
    message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? Duration.fromPartial(object.voting_period) : undefined;
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.veto_threshold = object.veto_threshold ?? "";
    message.min_initial_deposit_ratio = object.min_initial_deposit_ratio ?? "";
    message.proposal_cancel_ratio = object.proposal_cancel_ratio ?? "";
    message.proposal_cancel_dest = object.proposal_cancel_dest ?? "";
    message.expedited_voting_period = object.expedited_voting_period !== undefined && object.expedited_voting_period !== null ? Duration.fromPartial(object.expedited_voting_period) : undefined;
    message.expedited_threshold = object.expedited_threshold ?? "";
    message.expedited_min_deposit = object.expedited_min_deposit?.map(e => Coin.fromPartial(e)) || [];
    message.burn_vote_quorum = object.burn_vote_quorum ?? false;
    message.burn_proposal_deposit_prevote = object.burn_proposal_deposit_prevote ?? false;
    message.burn_vote_veto = object.burn_vote_veto ?? false;
    message.min_deposit_ratio = object.min_deposit_ratio ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e: any) => Coin.fromSDK(e)) : [],
      max_deposit_period: object.max_deposit_period ? Duration.fromSDK(object.max_deposit_period) : undefined,
      voting_period: object.voting_period ? Duration.fromSDK(object.voting_period) : undefined,
      quorum: object?.quorum,
      threshold: object?.threshold,
      veto_threshold: object?.veto_threshold,
      min_initial_deposit_ratio: object?.min_initial_deposit_ratio,
      proposal_cancel_ratio: object?.proposal_cancel_ratio,
      proposal_cancel_dest: object?.proposal_cancel_dest,
      expedited_voting_period: object.expedited_voting_period ? Duration.fromSDK(object.expedited_voting_period) : undefined,
      expedited_threshold: object?.expedited_threshold,
      expedited_min_deposit: Array.isArray(object?.expedited_min_deposit) ? object.expedited_min_deposit.map((e: any) => Coin.fromSDK(e)) : [],
      burn_vote_quorum: object?.burn_vote_quorum,
      burn_proposal_deposit_prevote: object?.burn_proposal_deposit_prevote,
      burn_vote_veto: object?.burn_vote_veto,
      min_deposit_ratio: object?.min_deposit_ratio
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.min_deposit) {
      obj.min_deposit = message.min_deposit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.min_deposit = [];
    }
    message.max_deposit_period !== undefined && (obj.max_deposit_period = message.max_deposit_period ? Duration.toSDK(message.max_deposit_period) : undefined);
    message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toSDK(message.voting_period) : undefined);
    obj.quorum = message.quorum;
    obj.threshold = message.threshold;
    obj.veto_threshold = message.veto_threshold;
    obj.min_initial_deposit_ratio = message.min_initial_deposit_ratio;
    obj.proposal_cancel_ratio = message.proposal_cancel_ratio;
    obj.proposal_cancel_dest = message.proposal_cancel_dest;
    message.expedited_voting_period !== undefined && (obj.expedited_voting_period = message.expedited_voting_period ? Duration.toSDK(message.expedited_voting_period) : undefined);
    obj.expedited_threshold = message.expedited_threshold;
    if (message.expedited_min_deposit) {
      obj.expedited_min_deposit = message.expedited_min_deposit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.expedited_min_deposit = [];
    }
    obj.burn_vote_quorum = message.burn_vote_quorum;
    obj.burn_proposal_deposit_prevote = message.burn_proposal_deposit_prevote;
    obj.burn_vote_veto = message.burn_vote_veto;
    obj.min_deposit_ratio = message.min_deposit_ratio;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e: any) => Coin.fromAmino(e)) : [],
      max_deposit_period: object?.max_deposit_period ? Duration.fromAmino(object.max_deposit_period) : undefined,
      voting_period: object?.voting_period ? Duration.fromAmino(object.voting_period) : undefined,
      quorum: object.quorum,
      threshold: object.threshold,
      veto_threshold: object.veto_threshold,
      min_initial_deposit_ratio: object.min_initial_deposit_ratio,
      proposal_cancel_ratio: object.proposal_cancel_ratio,
      proposal_cancel_dest: object.proposal_cancel_dest,
      expedited_voting_period: object?.expedited_voting_period ? Duration.fromAmino(object.expedited_voting_period) : undefined,
      expedited_threshold: object.expedited_threshold,
      expedited_min_deposit: Array.isArray(object?.expedited_min_deposit) ? object.expedited_min_deposit.map((e: any) => Coin.fromAmino(e)) : [],
      burn_vote_quorum: object.burn_vote_quorum,
      burn_proposal_deposit_prevote: object.burn_proposal_deposit_prevote,
      burn_vote_veto: object.burn_vote_veto,
      min_deposit_ratio: object.min_deposit_ratio
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.min_deposit) {
      obj.min_deposit = message.min_deposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposit = [];
    }
    obj.max_deposit_period = message.max_deposit_period ? Duration.toAmino(message.max_deposit_period) : undefined;
    obj.voting_period = message.voting_period ? Duration.toAmino(message.voting_period) : undefined;
    obj.quorum = message.quorum;
    obj.threshold = message.threshold;
    obj.veto_threshold = message.veto_threshold;
    obj.min_initial_deposit_ratio = message.min_initial_deposit_ratio;
    obj.proposal_cancel_ratio = message.proposal_cancel_ratio;
    obj.proposal_cancel_dest = message.proposal_cancel_dest;
    obj.expedited_voting_period = message.expedited_voting_period ? Duration.toAmino(message.expedited_voting_period) : undefined;
    obj.expedited_threshold = message.expedited_threshold;
    if (message.expedited_min_deposit) {
      obj.expedited_min_deposit = message.expedited_min_deposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.expedited_min_deposit = [];
    }
    obj.burn_vote_quorum = message.burn_vote_quorum;
    obj.burn_proposal_deposit_prevote = message.burn_proposal_deposit_prevote;
    obj.burn_vote_veto = message.burn_vote_veto;
    obj.min_deposit_ratio = message.min_deposit_ratio;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/v1/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
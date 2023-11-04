//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
export const protobufPackage = "cosmos.group.v1";
/** VoteOption enumerates the valid vote options for a given proposal. */
export enum VoteOption {
  /**
   * VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines an unspecified vote option which will
   * return an error.
   */
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
/** ProposalStatus defines proposal statuses. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when submitted. */
  PROPOSAL_STATUS_SUBMITTED = 1,
  /**
   * PROPOSAL_STATUS_ACCEPTED - Final status of a proposal when the final tally is done and the outcome
   * passes the group policy's decision policy.
   */
  PROPOSAL_STATUS_ACCEPTED = 2,
  /**
   * PROPOSAL_STATUS_REJECTED - Final status of a proposal when the final tally is done and the outcome
   * is rejected by the group policy's decision policy.
   */
  PROPOSAL_STATUS_REJECTED = 3,
  /**
   * PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group policy is modified before the
   * final tally.
   */
  PROPOSAL_STATUS_ABORTED = 4,
  /**
   * PROPOSAL_STATUS_WITHDRAWN - A proposal can be withdrawn before the voting start time by the owner.
   * When this happens the final status is Withdrawn.
   */
  PROPOSAL_STATUS_WITHDRAWN = 5,
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
    case "PROPOSAL_STATUS_SUBMITTED":
      return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
    case 2:
    case "PROPOSAL_STATUS_ACCEPTED":
      return ProposalStatus.PROPOSAL_STATUS_ACCEPTED;
    case 3:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 4:
    case "PROPOSAL_STATUS_ABORTED":
      return ProposalStatus.PROPOSAL_STATUS_ABORTED;
    case 5:
    case "PROPOSAL_STATUS_WITHDRAWN":
      return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
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
    case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
      return "PROPOSAL_STATUS_SUBMITTED";
    case ProposalStatus.PROPOSAL_STATUS_ACCEPTED:
      return "PROPOSAL_STATUS_ACCEPTED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_ABORTED:
      return "PROPOSAL_STATUS_ABORTED";
    case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
      return "PROPOSAL_STATUS_WITHDRAWN";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalExecutorResult defines types of proposal executor results. */
export enum ProposalExecutorResult {
  /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
  PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0,
  /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
  PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1,
  /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
  PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2,
  /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
  PROPOSAL_EXECUTOR_RESULT_FAILURE = 3,
  UNRECOGNIZED = -1,
}
export const ProposalExecutorResultSDKType = ProposalExecutorResult;
export const ProposalExecutorResultAmino = ProposalExecutorResult;
export function proposalExecutorResultFromJSON(object: any): ProposalExecutorResult {
  switch (object) {
    case 0:
    case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
    case 1:
    case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
    case 2:
    case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
    case 3:
    case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalExecutorResult.UNRECOGNIZED;
  }
}
export function proposalExecutorResultToJSON(object: ProposalExecutorResult): string {
  switch (object) {
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
      return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
      return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
      return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
      return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    case ProposalExecutorResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Member represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 */
export interface Member {
  /** address is the member's account address. */
  address: string;
  /** weight is the member's voting weight that should be greater than 0. */
  weight: string;
  /** metadata is any arbitrary metadata attached to the member. */
  metadata: string;
  /** added_at is a timestamp specifying when a member was added. */
  added_at: Date;
}
export interface MemberProtoMsg {
  type_url: "/cosmos.group.v1.Member";
  value: Uint8Array;
}
export interface MemberProtoMsg {
  type_url: "/cosmos.group.v1.Member";
  value: Uint8Array;
}
/**
 * Member represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 */
export interface MemberAmino {
  /** address is the member's account address. */
  address: string;
  /** weight is the member's voting weight that should be greater than 0. */
  weight: string;
  /** metadata is any arbitrary metadata attached to the member. */
  metadata: string;
  /** added_at is a timestamp specifying when a member was added. */
  added_at?: Date;
}
export interface MemberAminoMsg {
  type: "cosmos-sdk/Member";
  value: MemberAmino;
}
/**
 * Member represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 */
export interface MemberSDKType {
  address: string;
  weight: string;
  metadata: string;
  added_at: Date;
}
/**
 * MemberRequest represents a group member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 */
export interface MemberRequest {
  /** address is the member's account address. */
  address: string;
  /** weight is the member's voting weight that should be greater than 0. */
  weight: string;
  /** metadata is any arbitrary metadata attached to the member. */
  metadata: string;
}
export interface MemberRequestProtoMsg {
  type_url: "/cosmos.group.v1.MemberRequest";
  value: Uint8Array;
}
export interface MemberRequestProtoMsg {
  type_url: "/cosmos.group.v1.MemberRequest";
  value: Uint8Array;
}
/**
 * MemberRequest represents a group member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 */
export interface MemberRequestAmino {
  /** address is the member's account address. */
  address: string;
  /** weight is the member's voting weight that should be greater than 0. */
  weight: string;
  /** metadata is any arbitrary metadata attached to the member. */
  metadata: string;
}
export interface MemberRequestAminoMsg {
  type: "cosmos-sdk/MemberRequest";
  value: MemberRequestAmino;
}
/**
 * MemberRequest represents a group member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 */
export interface MemberRequestSDKType {
  address: string;
  weight: string;
  metadata: string;
}
/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voter's weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface ThresholdDecisionPolicy {
  $typeUrl?: "/cosmos.group.v1.ThresholdDecisionPolicy";
  /**
   * threshold is the minimum weighted sum of `YES` votes that must be met or
   * exceeded for a proposal to succeed.
   */
  threshold: string;
  /** windows defines the different windows for voting and execution. */
  windows?: DecisionPolicyWindows;
}
export interface ThresholdDecisionPolicyProtoMsg {
  type_url: "/cosmos.group.v1.ThresholdDecisionPolicy";
  value: Uint8Array;
}
export interface ThresholdDecisionPolicyProtoMsg {
  type_url: "/cosmos.group.v1.ThresholdDecisionPolicy";
  value: Uint8Array;
}
/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voter's weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface ThresholdDecisionPolicyAmino {
  /**
   * threshold is the minimum weighted sum of `YES` votes that must be met or
   * exceeded for a proposal to succeed.
   */
  threshold: string;
  /** windows defines the different windows for voting and execution. */
  windows?: DecisionPolicyWindowsAmino;
}
export interface ThresholdDecisionPolicyAminoMsg {
  type: "cosmos-sdk/ThresholdDecisionPolicy";
  value: ThresholdDecisionPolicyAmino;
}
/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voter's weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface ThresholdDecisionPolicySDKType {
  $typeUrl?: "/cosmos.group.v1.ThresholdDecisionPolicy";
  threshold: string;
  windows?: DecisionPolicyWindowsSDKType;
}
/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface PercentageDecisionPolicy {
  $typeUrl?: "/cosmos.group.v1.PercentageDecisionPolicy";
  /**
   * percentage is the minimum percentage of the weighted sum of `YES` votes must
   * meet for a proposal to succeed.
   */
  percentage: string;
  /** windows defines the different windows for voting and execution. */
  windows?: DecisionPolicyWindows;
}
export interface PercentageDecisionPolicyProtoMsg {
  type_url: "/cosmos.group.v1.PercentageDecisionPolicy";
  value: Uint8Array;
}
export interface PercentageDecisionPolicyProtoMsg {
  type_url: "/cosmos.group.v1.PercentageDecisionPolicy";
  value: Uint8Array;
}
/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface PercentageDecisionPolicyAmino {
  /**
   * percentage is the minimum percentage of the weighted sum of `YES` votes must
   * meet for a proposal to succeed.
   */
  percentage: string;
  /** windows defines the different windows for voting and execution. */
  windows?: DecisionPolicyWindowsAmino;
}
export interface PercentageDecisionPolicyAminoMsg {
  type: "cosmos-sdk/PercentageDecisionPolicy";
  value: PercentageDecisionPolicyAmino;
}
/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface PercentageDecisionPolicySDKType {
  $typeUrl?: "/cosmos.group.v1.PercentageDecisionPolicy";
  percentage: string;
  windows?: DecisionPolicyWindowsSDKType;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindows {
  /**
   * voting_period is the duration from submission of a proposal to the end of voting period
   * Within this times votes can be submitted with MsgVote.
   */
  voting_period: Duration;
  /**
   * min_execution_period is the minimum duration after the proposal submission
   * where members can start sending MsgExec. This means that the window for
   * sending a MsgExec transaction is:
   * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
   * where max_execution_period is a app-specific config, defined in the keeper.
   * If not set, min_execution_period will default to 0.
   * 
   * Please make sure to set a `min_execution_period` that is smaller than
   * `voting_period + max_execution_period`, or else the above execution window
   * is empty, meaning that all proposals created with this decision policy
   * won't be able to be executed.
   */
  min_execution_period: Duration;
}
export interface DecisionPolicyWindowsProtoMsg {
  type_url: "/cosmos.group.v1.DecisionPolicyWindows";
  value: Uint8Array;
}
export interface DecisionPolicyWindowsProtoMsg {
  type_url: "/cosmos.group.v1.DecisionPolicyWindows";
  value: Uint8Array;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindowsAmino {
  /**
   * voting_period is the duration from submission of a proposal to the end of voting period
   * Within this times votes can be submitted with MsgVote.
   */
  voting_period?: DurationAmino;
  /**
   * min_execution_period is the minimum duration after the proposal submission
   * where members can start sending MsgExec. This means that the window for
   * sending a MsgExec transaction is:
   * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
   * where max_execution_period is a app-specific config, defined in the keeper.
   * If not set, min_execution_period will default to 0.
   * 
   * Please make sure to set a `min_execution_period` that is smaller than
   * `voting_period + max_execution_period`, or else the above execution window
   * is empty, meaning that all proposals created with this decision policy
   * won't be able to be executed.
   */
  min_execution_period?: DurationAmino;
}
export interface DecisionPolicyWindowsAminoMsg {
  type: "cosmos-sdk/DecisionPolicyWindows";
  value: DecisionPolicyWindowsAmino;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindowsSDKType {
  voting_period: DurationSDKType;
  min_execution_period: DurationSDKType;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfo {
  /** id is the unique ID of the group. */
  id: bigint;
  /** admin is the account address of the group's admin. */
  admin: string;
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;
  /**
   * version is used to track changes to a group's membership structure that
   * would break existing proposals. Whenever any members weight is changed,
   * or any member is added or removed this version is incremented and will
   * cause proposals based on older versions of this group to fail
   */
  version: bigint;
  /** total_weight is the sum of the group members' weights. */
  total_weight: string;
  /** created_at is a timestamp specifying when a group was created. */
  created_at: Date;
}
export interface GroupInfoProtoMsg {
  type_url: "/cosmos.group.v1.GroupInfo";
  value: Uint8Array;
}
export interface GroupInfoProtoMsg {
  type_url: "/cosmos.group.v1.GroupInfo";
  value: Uint8Array;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfoAmino {
  /** id is the unique ID of the group. */
  id: string;
  /** admin is the account address of the group's admin. */
  admin: string;
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;
  /**
   * version is used to track changes to a group's membership structure that
   * would break existing proposals. Whenever any members weight is changed,
   * or any member is added or removed this version is incremented and will
   * cause proposals based on older versions of this group to fail
   */
  version: string;
  /** total_weight is the sum of the group members' weights. */
  total_weight: string;
  /** created_at is a timestamp specifying when a group was created. */
  created_at?: Date;
}
export interface GroupInfoAminoMsg {
  type: "cosmos-sdk/GroupInfo";
  value: GroupInfoAmino;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfoSDKType {
  id: bigint;
  admin: string;
  metadata: string;
  version: bigint;
  total_weight: string;
  created_at: Date;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMember {
  /** group_id is the unique ID of the group. */
  group_id: bigint;
  /** member is the member data. */
  member?: Member;
}
export interface GroupMemberProtoMsg {
  type_url: "/cosmos.group.v1.GroupMember";
  value: Uint8Array;
}
export interface GroupMemberProtoMsg {
  type_url: "/cosmos.group.v1.GroupMember";
  value: Uint8Array;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMemberAmino {
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** member is the member data. */
  member?: MemberAmino;
}
export interface GroupMemberAminoMsg {
  type: "cosmos-sdk/GroupMember";
  value: GroupMemberAmino;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMemberSDKType {
  group_id: bigint;
  member?: MemberSDKType;
}
/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */
export interface GroupPolicyInfo {
  /** address is the account address of group policy. */
  address: string;
  /** group_id is the unique ID of the group. */
  group_id: bigint;
  /** admin is the account address of the group admin. */
  admin: string;
  /**
   * metadata is any arbitrary metadata attached to the group policy.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/group#decision-policy-1
   */
  metadata: string;
  /**
   * version is used to track changes to a group's GroupPolicyInfo structure that
   * would create a different result on a running proposal.
   */
  version: bigint;
  /** decision_policy specifies the group policy's decision policy. */
  decision_policy?: (ThresholdDecisionPolicy & PercentageDecisionPolicy & Any) | undefined;
  /** created_at is a timestamp specifying when a group policy was created. */
  created_at: Date;
}
export interface GroupPolicyInfoProtoMsg {
  type_url: "/cosmos.group.v1.GroupPolicyInfo";
  value: Uint8Array;
}
export interface GroupPolicyInfoProtoMsg {
  type_url: "/cosmos.group.v1.GroupPolicyInfo";
  value: Uint8Array;
}
export type GroupPolicyInfoEncoded = Omit<GroupPolicyInfo, "decision_policy"> & {
  /** decision_policy specifies the group policy's decision policy. */decision_policy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */
export interface GroupPolicyInfoAmino {
  /** address is the account address of group policy. */
  address: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** admin is the account address of the group admin. */
  admin: string;
  /**
   * metadata is any arbitrary metadata attached to the group policy.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/group#decision-policy-1
   */
  metadata: string;
  /**
   * version is used to track changes to a group's GroupPolicyInfo structure that
   * would create a different result on a running proposal.
   */
  version: string;
  /** decision_policy specifies the group policy's decision policy. */
  decision_policy?: AnyAmino;
  /** created_at is a timestamp specifying when a group policy was created. */
  created_at?: Date;
}
export interface GroupPolicyInfoAminoMsg {
  type: "cosmos-sdk/GroupPolicyInfo";
  value: GroupPolicyInfoAmino;
}
/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */
export interface GroupPolicyInfoSDKType {
  address: string;
  group_id: bigint;
  admin: string;
  metadata: string;
  version: bigint;
  decision_policy?: ThresholdDecisionPolicySDKType | PercentageDecisionPolicySDKType | AnySDKType | undefined;
  created_at: Date;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface Proposal {
  /** id is the unique id of the proposal. */
  id: bigint;
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /**
   * metadata is any arbitrary metadata attached to the proposal.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/group#proposal-4
   */
  metadata: string;
  /** proposers are the account addresses of the proposers. */
  proposers: string[];
  /** submit_time is a timestamp specifying when a proposal was submitted. */
  submit_time: Date;
  /**
   * group_version tracks the version of the group at proposal submission.
   * This field is here for informational purposes only.
   */
  group_version: bigint;
  /**
   * group_policy_version tracks the version of the group policy at proposal submission.
   * When a decision policy is changed, existing proposals from previous policy
   * versions will become invalid with the `ABORTED` status.
   * This field is here for informational purposes only.
   */
  group_policy_version: bigint;
  /** status represents the high level position in the life cycle of the proposal. Initial value is Submitted. */
  status: ProposalStatus;
  /**
   * final_tally_result contains the sums of all weighted votes for this
   * proposal for each vote option. It is empty at submission, and only
   * populated after tallying, at voting period end or at proposal execution,
   * whichever happens first.
   */
  final_tally_result: TallyResult;
  /**
   * voting_period_end is the timestamp before which voting must be done.
   * Unless a successful MsgExec is called before (to execute a proposal whose
   * tally is successful before the voting period ends), tallying will be done
   * at this point, and the `final_tally_result`and `status` fields will be
   * accordingly updated.
   */
  voting_period_end: Date;
  /** executor_result is the final result of the proposal execution. Initial value is NotRun. */
  executor_result: ProposalExecutorResult;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: Any[];
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
}
export interface ProposalProtoMsg {
  type_url: "/cosmos.group.v1.Proposal";
  value: Uint8Array;
}
export interface ProposalProtoMsg {
  type_url: "/cosmos.group.v1.Proposal";
  value: Uint8Array;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface ProposalAmino {
  /** id is the unique id of the proposal. */
  id: string;
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /**
   * metadata is any arbitrary metadata attached to the proposal.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/group#proposal-4
   */
  metadata: string;
  /** proposers are the account addresses of the proposers. */
  proposers: string[];
  /** submit_time is a timestamp specifying when a proposal was submitted. */
  submit_time?: Date;
  /**
   * group_version tracks the version of the group at proposal submission.
   * This field is here for informational purposes only.
   */
  group_version: string;
  /**
   * group_policy_version tracks the version of the group policy at proposal submission.
   * When a decision policy is changed, existing proposals from previous policy
   * versions will become invalid with the `ABORTED` status.
   * This field is here for informational purposes only.
   */
  group_policy_version: string;
  /** status represents the high level position in the life cycle of the proposal. Initial value is Submitted. */
  status: ProposalStatus;
  /**
   * final_tally_result contains the sums of all weighted votes for this
   * proposal for each vote option. It is empty at submission, and only
   * populated after tallying, at voting period end or at proposal execution,
   * whichever happens first.
   */
  final_tally_result?: TallyResultAmino;
  /**
   * voting_period_end is the timestamp before which voting must be done.
   * Unless a successful MsgExec is called before (to execute a proposal whose
   * tally is successful before the voting period ends), tallying will be done
   * at this point, and the `final_tally_result`and `status` fields will be
   * accordingly updated.
   */
  voting_period_end?: Date;
  /** executor_result is the final result of the proposal execution. Initial value is NotRun. */
  executor_result: ProposalExecutorResult;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: AnyAmino[];
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
}
export interface ProposalAminoMsg {
  type: "cosmos-sdk/Proposal";
  value: ProposalAmino;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface ProposalSDKType {
  id: bigint;
  group_policy_address: string;
  metadata: string;
  proposers: string[];
  submit_time: Date;
  group_version: bigint;
  group_policy_version: bigint;
  status: ProposalStatus;
  final_tally_result: TallyResultSDKType;
  voting_period_end: Date;
  executor_result: ProposalExecutorResult;
  messages: AnySDKType[];
  title: string;
  summary: string;
}
/** TallyResult represents the sum of weighted votes for each vote option. */
export interface TallyResult {
  /** yes_count is the weighted sum of yes votes. */
  yes_count: string;
  /** abstain_count is the weighted sum of abstainers. */
  abstain_count: string;
  /** no_count is the weighted sum of no votes. */
  no_count: string;
  /** no_with_veto_count is the weighted sum of veto. */
  no_with_veto_count: string;
}
export interface TallyResultProtoMsg {
  type_url: "/cosmos.group.v1.TallyResult";
  value: Uint8Array;
}
export interface TallyResultProtoMsg {
  type_url: "/cosmos.group.v1.TallyResult";
  value: Uint8Array;
}
/** TallyResult represents the sum of weighted votes for each vote option. */
export interface TallyResultAmino {
  /** yes_count is the weighted sum of yes votes. */
  yes_count: string;
  /** abstain_count is the weighted sum of abstainers. */
  abstain_count: string;
  /** no_count is the weighted sum of no votes. */
  no_count: string;
  /** no_with_veto_count is the weighted sum of veto. */
  no_with_veto_count: string;
}
export interface TallyResultAminoMsg {
  type: "cosmos-sdk/TallyResult";
  value: TallyResultAmino;
}
/** TallyResult represents the sum of weighted votes for each vote option. */
export interface TallyResultSDKType {
  yes_count: string;
  abstain_count: string;
  no_count: string;
  no_with_veto_count: string;
}
/** Vote represents a vote for a proposal. */
export interface Vote {
  /** proposal is the unique ID of the proposal. */
  proposal_id: bigint;
  /** voter is the account address of the voter. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata attached to the vote. */
  metadata: string;
  /** submit_time is the timestamp when the vote was submitted. */
  submit_time: Date;
}
export interface VoteProtoMsg {
  type_url: "/cosmos.group.v1.Vote";
  value: Uint8Array;
}
export interface VoteProtoMsg {
  type_url: "/cosmos.group.v1.Vote";
  value: Uint8Array;
}
/** Vote represents a vote for a proposal. */
export interface VoteAmino {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
  /** voter is the account address of the voter. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata attached to the vote. */
  metadata: string;
  /** submit_time is the timestamp when the vote was submitted. */
  submit_time?: Date;
}
export interface VoteAminoMsg {
  type: "cosmos-sdk/Vote";
  value: VoteAmino;
}
/** Vote represents a vote for a proposal. */
export interface VoteSDKType {
  proposal_id: bigint;
  voter: string;
  option: VoteOption;
  metadata: string;
  submit_time: Date;
}
function createBaseMember(): Member {
  return {
    address: "",
    weight: "",
    metadata: "",
    added_at: new Date()
  };
}
export const Member = {
  typeUrl: "/cosmos.group.v1.Member",
  encode(message: Member, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.added_at !== undefined) {
      Timestamp.encode(toTimestamp(message.added_at), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Member {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.added_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Member {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      added_at: isSet(object.added_at) ? fromJsonTimestamp(object.added_at) : undefined
    };
  },
  toJSON(message: Member): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.added_at !== undefined && (obj.added_at = message.added_at.toISOString());
    return obj;
  },
  fromPartial(object: Partial<Member>): Member {
    const message = createBaseMember();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? "";
    message.added_at = object.added_at ?? undefined;
    return message;
  },
  fromSDK(object: MemberSDKType): Member {
    return {
      address: object?.address,
      weight: object?.weight,
      metadata: object?.metadata,
      added_at: object.added_at ? Timestamp.fromSDK(object.added_at) : undefined
    };
  },
  toSDK(message: Member): MemberSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight;
    obj.metadata = message.metadata;
    message.added_at !== undefined && (obj.added_at = message.added_at ? Timestamp.toSDK(message.added_at) : undefined);
    return obj;
  },
  fromAmino(object: MemberAmino): Member {
    return {
      address: object.address,
      weight: object.weight,
      metadata: object.metadata,
      added_at: object.added_at
    };
  },
  toAmino(message: Member): MemberAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight;
    obj.metadata = message.metadata;
    obj.added_at = message.added_at;
    return obj;
  },
  fromAminoMsg(object: MemberAminoMsg): Member {
    return Member.fromAmino(object.value);
  },
  toAminoMsg(message: Member): MemberAminoMsg {
    return {
      type: "cosmos-sdk/Member",
      value: Member.toAmino(message)
    };
  },
  fromProtoMsg(message: MemberProtoMsg): Member {
    return Member.decode(message.value);
  },
  toProto(message: Member): Uint8Array {
    return Member.encode(message).finish();
  },
  toProtoMsg(message: Member): MemberProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.Member",
      value: Member.encode(message).finish()
    };
  }
};
function createBaseMemberRequest(): MemberRequest {
  return {
    address: "",
    weight: "",
    metadata: ""
  };
}
export const MemberRequest = {
  typeUrl: "/cosmos.group.v1.MemberRequest",
  encode(message: MemberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MemberRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message: MemberRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: Partial<MemberRequest>): MemberRequest {
    const message = createBaseMemberRequest();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromSDK(object: MemberRequestSDKType): MemberRequest {
    return {
      address: object?.address,
      weight: object?.weight,
      metadata: object?.metadata
    };
  },
  toSDK(message: MemberRequest): MemberRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAmino(object: MemberRequestAmino): MemberRequest {
    return {
      address: object.address,
      weight: object.weight,
      metadata: object.metadata
    };
  },
  toAmino(message: MemberRequest): MemberRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object: MemberRequestAminoMsg): MemberRequest {
    return MemberRequest.fromAmino(object.value);
  },
  toAminoMsg(message: MemberRequest): MemberRequestAminoMsg {
    return {
      type: "cosmos-sdk/MemberRequest",
      value: MemberRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: MemberRequestProtoMsg): MemberRequest {
    return MemberRequest.decode(message.value);
  },
  toProto(message: MemberRequest): Uint8Array {
    return MemberRequest.encode(message).finish();
  },
  toProtoMsg(message: MemberRequest): MemberRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MemberRequest",
      value: MemberRequest.encode(message).finish()
    };
  }
};
function createBaseThresholdDecisionPolicy(): ThresholdDecisionPolicy {
  return {
    $typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
    threshold: "",
    windows: undefined
  };
}
export const ThresholdDecisionPolicy = {
  typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
  encode(message: ThresholdDecisionPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ThresholdDecisionPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThresholdDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ThresholdDecisionPolicy {
    return {
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      windows: isSet(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined
    };
  },
  toJSON(message: ThresholdDecisionPolicy): unknown {
    const obj: any = {};
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ThresholdDecisionPolicy>): ThresholdDecisionPolicy {
    const message = createBaseThresholdDecisionPolicy();
    message.threshold = object.threshold ?? "";
    message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
    return message;
  },
  fromSDK(object: ThresholdDecisionPolicySDKType): ThresholdDecisionPolicy {
    return {
      threshold: object?.threshold,
      windows: object.windows ? DecisionPolicyWindows.fromSDK(object.windows) : undefined
    };
  },
  toSDK(message: ThresholdDecisionPolicy): ThresholdDecisionPolicySDKType {
    const obj: any = {};
    obj.threshold = message.threshold;
    message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toSDK(message.windows) : undefined);
    return obj;
  },
  fromAmino(object: ThresholdDecisionPolicyAmino): ThresholdDecisionPolicy {
    return {
      threshold: object.threshold,
      windows: object?.windows ? DecisionPolicyWindows.fromAmino(object.windows) : undefined
    };
  },
  toAmino(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyAmino {
    const obj: any = {};
    obj.threshold = message.threshold;
    obj.windows = message.windows ? DecisionPolicyWindows.toAmino(message.windows) : undefined;
    return obj;
  },
  fromAminoMsg(object: ThresholdDecisionPolicyAminoMsg): ThresholdDecisionPolicy {
    return ThresholdDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyAminoMsg {
    return {
      type: "cosmos-sdk/ThresholdDecisionPolicy",
      value: ThresholdDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: ThresholdDecisionPolicyProtoMsg): ThresholdDecisionPolicy {
    return ThresholdDecisionPolicy.decode(message.value);
  },
  toProto(message: ThresholdDecisionPolicy): Uint8Array {
    return ThresholdDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
      value: ThresholdDecisionPolicy.encode(message).finish()
    };
  }
};
function createBasePercentageDecisionPolicy(): PercentageDecisionPolicy {
  return {
    $typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
    percentage: "",
    windows: undefined
  };
}
export const PercentageDecisionPolicy = {
  typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
  encode(message: PercentageDecisionPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.percentage !== "") {
      writer.uint32(10).string(message.percentage);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PercentageDecisionPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePercentageDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PercentageDecisionPolicy {
    return {
      percentage: isSet(object.percentage) ? String(object.percentage) : "",
      windows: isSet(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined
    };
  },
  toJSON(message: PercentageDecisionPolicy): unknown {
    const obj: any = {};
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PercentageDecisionPolicy>): PercentageDecisionPolicy {
    const message = createBasePercentageDecisionPolicy();
    message.percentage = object.percentage ?? "";
    message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
    return message;
  },
  fromSDK(object: PercentageDecisionPolicySDKType): PercentageDecisionPolicy {
    return {
      percentage: object?.percentage,
      windows: object.windows ? DecisionPolicyWindows.fromSDK(object.windows) : undefined
    };
  },
  toSDK(message: PercentageDecisionPolicy): PercentageDecisionPolicySDKType {
    const obj: any = {};
    obj.percentage = message.percentage;
    message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toSDK(message.windows) : undefined);
    return obj;
  },
  fromAmino(object: PercentageDecisionPolicyAmino): PercentageDecisionPolicy {
    return {
      percentage: object.percentage,
      windows: object?.windows ? DecisionPolicyWindows.fromAmino(object.windows) : undefined
    };
  },
  toAmino(message: PercentageDecisionPolicy): PercentageDecisionPolicyAmino {
    const obj: any = {};
    obj.percentage = message.percentage;
    obj.windows = message.windows ? DecisionPolicyWindows.toAmino(message.windows) : undefined;
    return obj;
  },
  fromAminoMsg(object: PercentageDecisionPolicyAminoMsg): PercentageDecisionPolicy {
    return PercentageDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: PercentageDecisionPolicy): PercentageDecisionPolicyAminoMsg {
    return {
      type: "cosmos-sdk/PercentageDecisionPolicy",
      value: PercentageDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: PercentageDecisionPolicyProtoMsg): PercentageDecisionPolicy {
    return PercentageDecisionPolicy.decode(message.value);
  },
  toProto(message: PercentageDecisionPolicy): Uint8Array {
    return PercentageDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message: PercentageDecisionPolicy): PercentageDecisionPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
      value: PercentageDecisionPolicy.encode(message).finish()
    };
  }
};
function createBaseDecisionPolicyWindows(): DecisionPolicyWindows {
  return {
    voting_period: Duration.fromPartial({}),
    min_execution_period: Duration.fromPartial({})
  };
}
export const DecisionPolicyWindows = {
  typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
  encode(message: DecisionPolicyWindows, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voting_period !== undefined) {
      Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
    }
    if (message.min_execution_period !== undefined) {
      Duration.encode(message.min_execution_period, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DecisionPolicyWindows {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionPolicyWindows();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voting_period = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.min_execution_period = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DecisionPolicyWindows {
    return {
      voting_period: isSet(object.voting_period) ? Duration.fromJSON(object.voting_period) : undefined,
      min_execution_period: isSet(object.min_execution_period) ? Duration.fromJSON(object.min_execution_period) : undefined
    };
  },
  toJSON(message: DecisionPolicyWindows): unknown {
    const obj: any = {};
    message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toJSON(message.voting_period) : undefined);
    message.min_execution_period !== undefined && (obj.min_execution_period = message.min_execution_period ? Duration.toJSON(message.min_execution_period) : undefined);
    return obj;
  },
  fromPartial(object: Partial<DecisionPolicyWindows>): DecisionPolicyWindows {
    const message = createBaseDecisionPolicyWindows();
    message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? Duration.fromPartial(object.voting_period) : undefined;
    message.min_execution_period = object.min_execution_period !== undefined && object.min_execution_period !== null ? Duration.fromPartial(object.min_execution_period) : undefined;
    return message;
  },
  fromSDK(object: DecisionPolicyWindowsSDKType): DecisionPolicyWindows {
    return {
      voting_period: object.voting_period ? Duration.fromSDK(object.voting_period) : undefined,
      min_execution_period: object.min_execution_period ? Duration.fromSDK(object.min_execution_period) : undefined
    };
  },
  toSDK(message: DecisionPolicyWindows): DecisionPolicyWindowsSDKType {
    const obj: any = {};
    message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toSDK(message.voting_period) : undefined);
    message.min_execution_period !== undefined && (obj.min_execution_period = message.min_execution_period ? Duration.toSDK(message.min_execution_period) : undefined);
    return obj;
  },
  fromAmino(object: DecisionPolicyWindowsAmino): DecisionPolicyWindows {
    return {
      voting_period: object?.voting_period ? Duration.fromAmino(object.voting_period) : undefined,
      min_execution_period: object?.min_execution_period ? Duration.fromAmino(object.min_execution_period) : undefined
    };
  },
  toAmino(message: DecisionPolicyWindows): DecisionPolicyWindowsAmino {
    const obj: any = {};
    obj.voting_period = message.voting_period ? Duration.toAmino(message.voting_period) : undefined;
    obj.min_execution_period = message.min_execution_period ? Duration.toAmino(message.min_execution_period) : undefined;
    return obj;
  },
  fromAminoMsg(object: DecisionPolicyWindowsAminoMsg): DecisionPolicyWindows {
    return DecisionPolicyWindows.fromAmino(object.value);
  },
  toAminoMsg(message: DecisionPolicyWindows): DecisionPolicyWindowsAminoMsg {
    return {
      type: "cosmos-sdk/DecisionPolicyWindows",
      value: DecisionPolicyWindows.toAmino(message)
    };
  },
  fromProtoMsg(message: DecisionPolicyWindowsProtoMsg): DecisionPolicyWindows {
    return DecisionPolicyWindows.decode(message.value);
  },
  toProto(message: DecisionPolicyWindows): Uint8Array {
    return DecisionPolicyWindows.encode(message).finish();
  },
  toProtoMsg(message: DecisionPolicyWindows): DecisionPolicyWindowsProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
      value: DecisionPolicyWindows.encode(message).finish()
    };
  }
};
function createBaseGroupInfo(): GroupInfo {
  return {
    id: BigInt(0),
    admin: "",
    metadata: "",
    version: BigInt(0),
    total_weight: "",
    created_at: new Date()
  };
}
export const GroupInfo = {
  typeUrl: "/cosmos.group.v1.GroupInfo",
  encode(message: GroupInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(32).uint64(message.version);
    }
    if (message.total_weight !== "") {
      writer.uint32(42).string(message.total_weight);
    }
    if (message.created_at !== undefined) {
      Timestamp.encode(toTimestamp(message.created_at), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.version = reader.uint64();
          break;
        case 5:
          message.total_weight = reader.string();
          break;
        case 6:
          message.created_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupInfo {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      total_weight: isSet(object.total_weight) ? String(object.total_weight) : "",
      created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined
    };
  },
  toJSON(message: GroupInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
    message.total_weight !== undefined && (obj.total_weight = message.total_weight);
    message.created_at !== undefined && (obj.created_at = message.created_at.toISOString());
    return obj;
  },
  fromPartial(object: Partial<GroupInfo>): GroupInfo {
    const message = createBaseGroupInfo();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.total_weight = object.total_weight ?? "";
    message.created_at = object.created_at ?? undefined;
    return message;
  },
  fromSDK(object: GroupInfoSDKType): GroupInfo {
    return {
      id: object?.id,
      admin: object?.admin,
      metadata: object?.metadata,
      version: object?.version,
      total_weight: object?.total_weight,
      created_at: object.created_at ? Timestamp.fromSDK(object.created_at) : undefined
    };
  },
  toSDK(message: GroupInfo): GroupInfoSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.admin = message.admin;
    obj.metadata = message.metadata;
    obj.version = message.version;
    obj.total_weight = message.total_weight;
    message.created_at !== undefined && (obj.created_at = message.created_at ? Timestamp.toSDK(message.created_at) : undefined);
    return obj;
  },
  fromAmino(object: GroupInfoAmino): GroupInfo {
    return {
      id: BigInt(object.id),
      admin: object.admin,
      metadata: object.metadata,
      version: BigInt(object.version),
      total_weight: object.total_weight,
      created_at: object.created_at
    };
  },
  toAmino(message: GroupInfo): GroupInfoAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.admin = message.admin;
    obj.metadata = message.metadata;
    obj.version = message.version ? message.version.toString() : undefined;
    obj.total_weight = message.total_weight;
    obj.created_at = message.created_at;
    return obj;
  },
  fromAminoMsg(object: GroupInfoAminoMsg): GroupInfo {
    return GroupInfo.fromAmino(object.value);
  },
  toAminoMsg(message: GroupInfo): GroupInfoAminoMsg {
    return {
      type: "cosmos-sdk/GroupInfo",
      value: GroupInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: GroupInfoProtoMsg): GroupInfo {
    return GroupInfo.decode(message.value);
  },
  toProto(message: GroupInfo): Uint8Array {
    return GroupInfo.encode(message).finish();
  },
  toProtoMsg(message: GroupInfo): GroupInfoProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.GroupInfo",
      value: GroupInfo.encode(message).finish()
    };
  }
};
function createBaseGroupMember(): GroupMember {
  return {
    group_id: BigInt(0),
    member: undefined
  };
}
export const GroupMember = {
  typeUrl: "/cosmos.group.v1.GroupMember",
  encode(message: GroupMember, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.group_id);
    }
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupMember {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_id = reader.uint64();
          break;
        case 2:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupMember {
    return {
      group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined
    };
  },
  toJSON(message: GroupMember): unknown {
    const obj: any = {};
    message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
    message.member !== undefined && (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GroupMember>): GroupMember {
    const message = createBaseGroupMember();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
    message.member = object.member !== undefined && object.member !== null ? Member.fromPartial(object.member) : undefined;
    return message;
  },
  fromSDK(object: GroupMemberSDKType): GroupMember {
    return {
      group_id: object?.group_id,
      member: object.member ? Member.fromSDK(object.member) : undefined
    };
  },
  toSDK(message: GroupMember): GroupMemberSDKType {
    const obj: any = {};
    obj.group_id = message.group_id;
    message.member !== undefined && (obj.member = message.member ? Member.toSDK(message.member) : undefined);
    return obj;
  },
  fromAmino(object: GroupMemberAmino): GroupMember {
    return {
      group_id: BigInt(object.group_id),
      member: object?.member ? Member.fromAmino(object.member) : undefined
    };
  },
  toAmino(message: GroupMember): GroupMemberAmino {
    const obj: any = {};
    obj.group_id = message.group_id ? message.group_id.toString() : undefined;
    obj.member = message.member ? Member.toAmino(message.member) : undefined;
    return obj;
  },
  fromAminoMsg(object: GroupMemberAminoMsg): GroupMember {
    return GroupMember.fromAmino(object.value);
  },
  toAminoMsg(message: GroupMember): GroupMemberAminoMsg {
    return {
      type: "cosmos-sdk/GroupMember",
      value: GroupMember.toAmino(message)
    };
  },
  fromProtoMsg(message: GroupMemberProtoMsg): GroupMember {
    return GroupMember.decode(message.value);
  },
  toProto(message: GroupMember): Uint8Array {
    return GroupMember.encode(message).finish();
  },
  toProtoMsg(message: GroupMember): GroupMemberProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.GroupMember",
      value: GroupMember.encode(message).finish()
    };
  }
};
function createBaseGroupPolicyInfo(): GroupPolicyInfo {
  return {
    address: "",
    group_id: BigInt(0),
    admin: "",
    metadata: "",
    version: BigInt(0),
    decision_policy: undefined,
    created_at: new Date()
  };
}
export const GroupPolicyInfo = {
  typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
  encode(message: GroupPolicyInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.group_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.group_id);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(40).uint64(message.version);
    }
    if (message.decision_policy !== undefined) {
      Any.encode((message.decision_policy as Any), writer.uint32(50).fork()).ldelim();
    }
    if (message.created_at !== undefined) {
      Timestamp.encode(toTimestamp(message.created_at), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupPolicyInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupPolicyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.group_id = reader.uint64();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.version = reader.uint64();
          break;
        case 6:
          message.decision_policy = (Cosmos_groupv1DecisionPolicy_InterfaceDecoder(reader) as Any);
          break;
        case 7:
          message.created_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupPolicyInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined,
      created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined
    };
  },
  toJSON(message: GroupPolicyInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
    message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toJSON(message.decision_policy) : undefined);
    message.created_at !== undefined && (obj.created_at = message.created_at.toISOString());
    return obj;
  },
  fromPartial(object: Partial<GroupPolicyInfo>): GroupPolicyInfo {
    const message = createBaseGroupPolicyInfo();
    message.address = object.address ?? "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? Any.fromPartial(object.decision_policy) : undefined;
    message.created_at = object.created_at ?? undefined;
    return message;
  },
  fromSDK(object: GroupPolicyInfoSDKType): GroupPolicyInfo {
    return {
      address: object?.address,
      group_id: object?.group_id,
      admin: object?.admin,
      metadata: object?.metadata,
      version: object?.version,
      decision_policy: object.decision_policy ? Any.fromSDK(object.decision_policy) : undefined,
      created_at: object.created_at ? Timestamp.fromSDK(object.created_at) : undefined
    };
  },
  toSDK(message: GroupPolicyInfo): GroupPolicyInfoSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.group_id = message.group_id;
    obj.admin = message.admin;
    obj.metadata = message.metadata;
    obj.version = message.version;
    message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toSDK(message.decision_policy) : undefined);
    message.created_at !== undefined && (obj.created_at = message.created_at ? Timestamp.toSDK(message.created_at) : undefined);
    return obj;
  },
  fromAmino(object: GroupPolicyInfoAmino): GroupPolicyInfo {
    return {
      address: object.address,
      group_id: BigInt(object.group_id),
      admin: object.admin,
      metadata: object.metadata,
      version: BigInt(object.version),
      decision_policy: object?.decision_policy ? Cosmos_groupv1DecisionPolicy_FromAmino(object.decision_policy) : undefined,
      created_at: object.created_at
    };
  },
  toAmino(message: GroupPolicyInfo): GroupPolicyInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.group_id = message.group_id ? message.group_id.toString() : undefined;
    obj.admin = message.admin;
    obj.metadata = message.metadata;
    obj.version = message.version ? message.version.toString() : undefined;
    obj.decision_policy = message.decision_policy ? Cosmos_groupv1DecisionPolicy_ToAmino((message.decision_policy as Any)) : undefined;
    obj.created_at = message.created_at;
    return obj;
  },
  fromAminoMsg(object: GroupPolicyInfoAminoMsg): GroupPolicyInfo {
    return GroupPolicyInfo.fromAmino(object.value);
  },
  toAminoMsg(message: GroupPolicyInfo): GroupPolicyInfoAminoMsg {
    return {
      type: "cosmos-sdk/GroupPolicyInfo",
      value: GroupPolicyInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: GroupPolicyInfoProtoMsg): GroupPolicyInfo {
    return GroupPolicyInfo.decode(message.value);
  },
  toProto(message: GroupPolicyInfo): Uint8Array {
    return GroupPolicyInfo.encode(message).finish();
  },
  toProtoMsg(message: GroupPolicyInfo): GroupPolicyInfoProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
      value: GroupPolicyInfo.encode(message).finish()
    };
  }
};
function createBaseProposal(): Proposal {
  return {
    id: BigInt(0),
    group_policy_address: "",
    metadata: "",
    proposers: [],
    submit_time: new Date(),
    group_version: BigInt(0),
    group_policy_version: BigInt(0),
    status: 0,
    final_tally_result: TallyResult.fromPartial({}),
    voting_period_end: new Date(),
    executor_result: 0,
    messages: [],
    title: "",
    summary: ""
  };
}
export const Proposal = {
  typeUrl: "/cosmos.group.v1.Proposal",
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.proposers) {
      writer.uint32(34).string(v!);
    }
    if (message.submit_time !== undefined) {
      Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
    }
    if (message.group_version !== BigInt(0)) {
      writer.uint32(48).uint64(message.group_version);
    }
    if (message.group_policy_version !== BigInt(0)) {
      writer.uint32(56).uint64(message.group_policy_version);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.final_tally_result !== undefined) {
      TallyResult.encode(message.final_tally_result, writer.uint32(74).fork()).ldelim();
    }
    if (message.voting_period_end !== undefined) {
      Timestamp.encode(toTimestamp(message.voting_period_end), writer.uint32(82).fork()).ldelim();
    }
    if (message.executor_result !== 0) {
      writer.uint32(88).int32(message.executor_result);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(106).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(114).string(message.summary);
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
          message.group_policy_address = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.proposers.push(reader.string());
          break;
        case 5:
          message.submit_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.group_version = reader.uint64();
          break;
        case 7:
          message.group_policy_version = reader.uint64();
          break;
        case 8:
          message.status = (reader.int32() as any);
          break;
        case 9:
          message.final_tally_result = TallyResult.decode(reader, reader.uint32());
          break;
        case 10:
          message.voting_period_end = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 11:
          message.executor_result = (reader.int32() as any);
          break;
        case 12:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 13:
          message.title = reader.string();
          break;
        case 14:
          message.summary = reader.string();
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
      group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => String(e)) : [],
      submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
      group_version: isSet(object.group_version) ? BigInt(object.group_version.toString()) : BigInt(0),
      group_policy_version: isSet(object.group_policy_version) ? BigInt(object.group_policy_version.toString()) : BigInt(0),
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      final_tally_result: isSet(object.final_tally_result) ? TallyResult.fromJSON(object.final_tally_result) : undefined,
      voting_period_end: isSet(object.voting_period_end) ? fromJsonTimestamp(object.voting_period_end) : undefined,
      executor_result: isSet(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : ""
    };
  },
  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
    message.group_version !== undefined && (obj.group_version = (message.group_version || BigInt(0)).toString());
    message.group_policy_version !== undefined && (obj.group_policy_version = (message.group_policy_version || BigInt(0)).toString());
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? TallyResult.toJSON(message.final_tally_result) : undefined);
    message.voting_period_end !== undefined && (obj.voting_period_end = message.voting_period_end.toISOString());
    message.executor_result !== undefined && (obj.executor_result = proposalExecutorResultToJSON(message.executor_result));
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    return obj;
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.group_policy_address = object.group_policy_address ?? "";
    message.metadata = object.metadata ?? "";
    message.proposers = object.proposers?.map(e => e) || [];
    message.submit_time = object.submit_time ?? undefined;
    message.group_version = object.group_version !== undefined && object.group_version !== null ? BigInt(object.group_version.toString()) : BigInt(0);
    message.group_policy_version = object.group_policy_version !== undefined && object.group_policy_version !== null ? BigInt(object.group_policy_version.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.final_tally_result = object.final_tally_result !== undefined && object.final_tally_result !== null ? TallyResult.fromPartial(object.final_tally_result) : undefined;
    message.voting_period_end = object.voting_period_end ?? undefined;
    message.executor_result = object.executor_result ?? 0;
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    return message;
  },
  fromSDK(object: ProposalSDKType): Proposal {
    return {
      id: object?.id,
      group_policy_address: object?.group_policy_address,
      metadata: object?.metadata,
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => e) : [],
      submit_time: object.submit_time ? Timestamp.fromSDK(object.submit_time) : undefined,
      group_version: object?.group_version,
      group_policy_version: object?.group_policy_version,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      final_tally_result: object.final_tally_result ? TallyResult.fromSDK(object.final_tally_result) : undefined,
      voting_period_end: object.voting_period_end ? Timestamp.fromSDK(object.voting_period_end) : undefined,
      executor_result: isSet(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromSDK(e)) : [],
      title: object?.title,
      summary: object?.summary
    };
  },
  toSDK(message: Proposal): ProposalSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.group_policy_address = message.group_policy_address;
    obj.metadata = message.metadata;
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    message.submit_time !== undefined && (obj.submit_time = message.submit_time ? Timestamp.toSDK(message.submit_time) : undefined);
    obj.group_version = message.group_version;
    obj.group_policy_version = message.group_policy_version;
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? TallyResult.toSDK(message.final_tally_result) : undefined);
    message.voting_period_end !== undefined && (obj.voting_period_end = message.voting_period_end ? Timestamp.toSDK(message.voting_period_end) : undefined);
    message.executor_result !== undefined && (obj.executor_result = proposalExecutorResultToJSON(message.executor_result));
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.messages = [];
    }
    obj.title = message.title;
    obj.summary = message.summary;
    return obj;
  },
  fromAmino(object: ProposalAmino): Proposal {
    return {
      id: BigInt(object.id),
      group_policy_address: object.group_policy_address,
      metadata: object.metadata,
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => e) : [],
      submit_time: object.submit_time,
      group_version: BigInt(object.group_version),
      group_policy_version: BigInt(object.group_policy_version),
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      final_tally_result: object?.final_tally_result ? TallyResult.fromAmino(object.final_tally_result) : undefined,
      voting_period_end: object.voting_period_end,
      executor_result: isSet(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromAmino(e)) : [],
      title: object.title,
      summary: object.summary
    };
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.group_policy_address = message.group_policy_address;
    obj.metadata = message.metadata;
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    obj.submit_time = message.submit_time;
    obj.group_version = message.group_version ? message.group_version.toString() : undefined;
    obj.group_policy_version = message.group_policy_version ? message.group_policy_version.toString() : undefined;
    obj.status = message.status;
    obj.final_tally_result = message.final_tally_result ? TallyResult.toAmino(message.final_tally_result) : undefined;
    obj.voting_period_end = message.voting_period_end;
    obj.executor_result = message.executor_result;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = [];
    }
    obj.title = message.title;
    obj.summary = message.summary;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  toAminoMsg(message: Proposal): ProposalAminoMsg {
    return {
      type: "cosmos-sdk/Proposal",
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
      typeUrl: "/cosmos.group.v1.Proposal",
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
  typeUrl: "/cosmos.group.v1.TallyResult",
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
      type: "cosmos-sdk/TallyResult",
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
      typeUrl: "/cosmos.group.v1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
function createBaseVote(): Vote {
  return {
    proposal_id: BigInt(0),
    voter: "",
    option: 0,
    metadata: "",
    submit_time: new Date()
  };
}
export const Vote = {
  typeUrl: "/cosmos.group.v1.Vote",
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.submit_time !== undefined) {
      Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
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
        case 3:
          message.option = (reader.int32() as any);
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.submit_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined
    };
  },
  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
    return obj;
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.submit_time = object.submit_time ?? undefined;
    return message;
  },
  fromSDK(object: VoteSDKType): Vote {
    return {
      proposal_id: object?.proposal_id,
      voter: object?.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: object?.metadata,
      submit_time: object.submit_time ? Timestamp.fromSDK(object.submit_time) : undefined
    };
  },
  toSDK(message: Vote): VoteSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposal_id;
    obj.voter = message.voter;
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    obj.metadata = message.metadata;
    message.submit_time !== undefined && (obj.submit_time = message.submit_time ? Timestamp.toSDK(message.submit_time) : undefined);
    return obj;
  },
  fromAmino(object: VoteAmino): Vote {
    return {
      proposal_id: BigInt(object.proposal_id),
      voter: object.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: object.metadata,
      submit_time: object.submit_time
    };
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.voter = message.voter;
    obj.option = message.option;
    obj.metadata = message.metadata;
    obj.submit_time = message.submit_time;
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  toAminoMsg(message: Vote): VoteAminoMsg {
    return {
      type: "cosmos-sdk/Vote",
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
      typeUrl: "/cosmos.group.v1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
export const Cosmos_groupv1DecisionPolicy_InterfaceDecoder = (input: BinaryReader | Uint8Array): ThresholdDecisionPolicy | PercentageDecisionPolicy | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.group.v1.ThresholdDecisionPolicy":
      return ThresholdDecisionPolicy.decode(data.value);
    case "/cosmos.group.v1.PercentageDecisionPolicy":
      return PercentageDecisionPolicy.decode(data.value);
    default:
      return data;
  }
};
export const Cosmos_groupv1DecisionPolicy_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "cosmos-sdk/ThresholdDecisionPolicy":
      return Any.fromPartial({
        typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
        value: ThresholdDecisionPolicy.encode(ThresholdDecisionPolicy.fromPartial(ThresholdDecisionPolicy.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/PercentageDecisionPolicy":
      return Any.fromPartial({
        typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
        value: PercentageDecisionPolicy.encode(PercentageDecisionPolicy.fromPartial(PercentageDecisionPolicy.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmos_groupv1DecisionPolicy_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmos.group.v1.ThresholdDecisionPolicy":
      return {
        type: "cosmos-sdk/ThresholdDecisionPolicy",
        value: ThresholdDecisionPolicy.toAmino(ThresholdDecisionPolicy.decode(content.value))
      };
    case "/cosmos.group.v1.PercentageDecisionPolicy":
      return {
        type: "cosmos-sdk/PercentageDecisionPolicy",
        value: PercentageDecisionPolicy.toAmino(PercentageDecisionPolicy.decode(content.value))
      };
    default:
      return Any.toAmino(content);
  }
};
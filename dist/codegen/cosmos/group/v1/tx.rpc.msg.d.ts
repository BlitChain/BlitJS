import * as fm from "../../../grpc-gateway";
import { MsgCreateGroup, MsgCreateGroupResponse, MsgUpdateGroupMembers, MsgUpdateGroupMembersResponse, MsgUpdateGroupAdmin, MsgUpdateGroupAdminResponse, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataResponse, MsgCreateGroupPolicy, MsgCreateGroupPolicyResponse, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicyResponse, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgWithdrawProposal, MsgWithdrawProposalResponse, MsgVote, MsgVoteResponse, MsgExec, MsgExecResponse, MsgLeaveGroup, MsgLeaveGroupResponse } from "./tx";
export declare class Msg {
    /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
    static CreateGroup(request: MsgCreateGroup, initRequest?: fm.InitReq): Promise<MsgCreateGroupResponse>;
    /** UpdateGroupMembers updates the group members with given group id and admin address. */
    static UpdateGroupMembers(request: MsgUpdateGroupMembers, initRequest?: fm.InitReq): Promise<MsgUpdateGroupMembersResponse>;
    /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
    static UpdateGroupAdmin(request: MsgUpdateGroupAdmin, initRequest?: fm.InitReq): Promise<MsgUpdateGroupAdminResponse>;
    /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
    static UpdateGroupMetadata(request: MsgUpdateGroupMetadata, initRequest?: fm.InitReq): Promise<MsgUpdateGroupMetadataResponse>;
    /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
    static CreateGroupPolicy(request: MsgCreateGroupPolicy, initRequest?: fm.InitReq): Promise<MsgCreateGroupPolicyResponse>;
    /** CreateGroupWithPolicy creates a new group with policy. */
    static CreateGroupWithPolicy(request: MsgCreateGroupWithPolicy, initRequest?: fm.InitReq): Promise<MsgCreateGroupWithPolicyResponse>;
    /** UpdateGroupPolicyAdmin updates a group policy admin. */
    static UpdateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin, initRequest?: fm.InitReq): Promise<MsgUpdateGroupPolicyAdminResponse>;
    /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
    static UpdateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy, initRequest?: fm.InitReq): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
    /** UpdateGroupPolicyMetadata updates a group policy metadata. */
    static UpdateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata, initRequest?: fm.InitReq): Promise<MsgUpdateGroupPolicyMetadataResponse>;
    /** SubmitProposal submits a new proposal. */
    static SubmitProposal(request: MsgSubmitProposal, initRequest?: fm.InitReq): Promise<MsgSubmitProposalResponse>;
    /** WithdrawProposal aborts a proposal. */
    static WithdrawProposal(request: MsgWithdrawProposal, initRequest?: fm.InitReq): Promise<MsgWithdrawProposalResponse>;
    /** Vote allows a voter to vote on a proposal. */
    static Vote(request: MsgVote, initRequest?: fm.InitReq): Promise<MsgVoteResponse>;
    /** Exec executes a proposal. */
    static Exec(request: MsgExec, initRequest?: fm.InitReq): Promise<MsgExecResponse>;
    /** LeaveGroup allows a group member to leave the group. */
    static LeaveGroup(request: MsgLeaveGroup, initRequest?: fm.InitReq): Promise<MsgLeaveGroupResponse>;
}

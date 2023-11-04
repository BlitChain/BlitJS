import * as fm from "../../../grpc-gateway";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse } from "./query";
export declare class Query {
    /** GroupInfo queries group info based on group id. */
    static GroupInfo(request: QueryGroupInfoRequest, initRequest?: fm.InitReq): Promise<QueryGroupInfoResponse>;
    /** GroupPolicyInfo queries group policy info based on account address of group policy. */
    static GroupPolicyInfo(request: QueryGroupPolicyInfoRequest, initRequest?: fm.InitReq): Promise<QueryGroupPolicyInfoResponse>;
    /** GroupMembers queries members of a group by group id. */
    static GroupMembers(request: QueryGroupMembersRequest, initRequest?: fm.InitReq): Promise<QueryGroupMembersResponse>;
    /** GroupsByAdmin queries groups by admin address. */
    static GroupsByAdmin(request: QueryGroupsByAdminRequest, initRequest?: fm.InitReq): Promise<QueryGroupsByAdminResponse>;
    /** GroupPoliciesByGroup queries group policies by group id. */
    static GroupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest, initRequest?: fm.InitReq): Promise<QueryGroupPoliciesByGroupResponse>;
    /** GroupPoliciesByAdmin queries group policies by admin address. */
    static GroupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest, initRequest?: fm.InitReq): Promise<QueryGroupPoliciesByAdminResponse>;
    /** Proposal queries a proposal based on proposal id. */
    static Proposal(request: QueryProposalRequest, initRequest?: fm.InitReq): Promise<QueryProposalResponse>;
    /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
    static ProposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest, initRequest?: fm.InitReq): Promise<QueryProposalsByGroupPolicyResponse>;
    /** VoteByProposalVoter queries a vote by proposal id and voter. */
    static VoteByProposalVoter(request: QueryVoteByProposalVoterRequest, initRequest?: fm.InitReq): Promise<QueryVoteByProposalVoterResponse>;
    /** VotesByProposal queries a vote by proposal id. */
    static VotesByProposal(request: QueryVotesByProposalRequest, initRequest?: fm.InitReq): Promise<QueryVotesByProposalResponse>;
    /** VotesByVoter queries a vote by voter. */
    static VotesByVoter(request: QueryVotesByVoterRequest, initRequest?: fm.InitReq): Promise<QueryVotesByVoterResponse>;
    /** GroupsByMember queries groups by member address. */
    static GroupsByMember(request: QueryGroupsByMemberRequest, initRequest?: fm.InitReq): Promise<QueryGroupsByMemberResponse>;
    /**
     * TallyResult returns the tally result of a proposal. If the proposal is
     * still in voting period, then this query computes the current tally state,
     * which might not be final. On the other hand, if the proposal is final,
     * then it simply returns the `final_tally_result` state stored in the
     * proposal itself.
     */
    static TallyResult(request: QueryTallyResultRequest, initRequest?: fm.InitReq): Promise<QueryTallyResultResponse>;
    /**
     * Groups queries all groups in state.
     *
     * Since: cosmos-sdk 0.47.1
     */
    static Groups(request: QueryGroupsRequest, initRequest?: fm.InitReq): Promise<QueryGroupsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** GroupInfo queries group info based on group id. */
    GroupInfo(req: QueryGroupInfoRequest, headers?: HeadersInit): Promise<QueryGroupInfoResponse>;
    /** GroupPolicyInfo queries group policy info based on account address of group policy. */
    GroupPolicyInfo(req: QueryGroupPolicyInfoRequest, headers?: HeadersInit): Promise<QueryGroupPolicyInfoResponse>;
    /** GroupMembers queries members of a group by group id. */
    GroupMembers(req: QueryGroupMembersRequest, headers?: HeadersInit): Promise<QueryGroupMembersResponse>;
    /** GroupsByAdmin queries groups by admin address. */
    GroupsByAdmin(req: QueryGroupsByAdminRequest, headers?: HeadersInit): Promise<QueryGroupsByAdminResponse>;
    /** GroupPoliciesByGroup queries group policies by group id. */
    GroupPoliciesByGroup(req: QueryGroupPoliciesByGroupRequest, headers?: HeadersInit): Promise<QueryGroupPoliciesByGroupResponse>;
    /** GroupPoliciesByAdmin queries group policies by admin address. */
    GroupPoliciesByAdmin(req: QueryGroupPoliciesByAdminRequest, headers?: HeadersInit): Promise<QueryGroupPoliciesByAdminResponse>;
    /** Proposal queries a proposal based on proposal id. */
    Proposal(req: QueryProposalRequest, headers?: HeadersInit): Promise<QueryProposalResponse>;
    /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
    ProposalsByGroupPolicy(req: QueryProposalsByGroupPolicyRequest, headers?: HeadersInit): Promise<QueryProposalsByGroupPolicyResponse>;
    /** VoteByProposalVoter queries a vote by proposal id and voter. */
    VoteByProposalVoter(req: QueryVoteByProposalVoterRequest, headers?: HeadersInit): Promise<QueryVoteByProposalVoterResponse>;
    /** VotesByProposal queries a vote by proposal id. */
    VotesByProposal(req: QueryVotesByProposalRequest, headers?: HeadersInit): Promise<QueryVotesByProposalResponse>;
    /** VotesByVoter queries a vote by voter. */
    VotesByVoter(req: QueryVotesByVoterRequest, headers?: HeadersInit): Promise<QueryVotesByVoterResponse>;
    /** GroupsByMember queries groups by member address. */
    GroupsByMember(req: QueryGroupsByMemberRequest, headers?: HeadersInit): Promise<QueryGroupsByMemberResponse>;
    /**
     * TallyResult returns the tally result of a proposal. If the proposal is
     * still in voting period, then this query computes the current tally state,
     * which might not be final. On the other hand, if the proposal is final,
     * then it simply returns the `final_tally_result` state stored in the
     * proposal itself.
     */
    TallyResult(req: QueryTallyResultRequest, headers?: HeadersInit): Promise<QueryTallyResultResponse>;
    /**
     * Groups queries all groups in state.
     *
     * Since: cosmos-sdk 0.47.1
     */
    Groups(req: QueryGroupsRequest, headers?: HeadersInit): Promise<QueryGroupsResponse>;
}

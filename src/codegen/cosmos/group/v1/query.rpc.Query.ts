//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse } from "./query";
export class Query {
  /** GroupInfo queries group info based on group id. */
  static GroupInfo(request: QueryGroupInfoRequest, initRequest?: fm.InitReq): Promise<QueryGroupInfoResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_info/${request["group_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["group_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GroupPolicyInfo queries group policy info based on account address of group policy. */
  static GroupPolicyInfo(request: QueryGroupPolicyInfoRequest, initRequest?: fm.InitReq): Promise<QueryGroupPolicyInfoResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_policy_info/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GroupMembers queries members of a group by group id. */
  static GroupMembers(request: QueryGroupMembersRequest, initRequest?: fm.InitReq): Promise<QueryGroupMembersResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_members/${request["group_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["group_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GroupsByAdmin queries groups by admin address. */
  static GroupsByAdmin(request: QueryGroupsByAdminRequest, initRequest?: fm.InitReq): Promise<QueryGroupsByAdminResponse> {
    return fm.fetchReq(`/cosmos/group/v1/groups_by_admin/${request["admin"]}?${fm.renderURLSearchParams({
      ...request
    }, ["admin"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GroupPoliciesByGroup queries group policies by group id. */
  static GroupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest, initRequest?: fm.InitReq): Promise<QueryGroupPoliciesByGroupResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_policies_by_group/${request["group_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["group_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GroupPoliciesByAdmin queries group policies by admin address. */
  static GroupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest, initRequest?: fm.InitReq): Promise<QueryGroupPoliciesByAdminResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_policies_by_admin/${request["admin"]}?${fm.renderURLSearchParams({
      ...request
    }, ["admin"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Proposal queries a proposal based on proposal id. */
  static Proposal(request: QueryProposalRequest, initRequest?: fm.InitReq): Promise<QueryProposalResponse> {
    return fm.fetchReq(`/cosmos/group/v1/proposal/${request["proposal_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  static ProposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest, initRequest?: fm.InitReq): Promise<QueryProposalsByGroupPolicyResponse> {
    return fm.fetchReq(`/cosmos/group/v1/proposals_by_group_policy/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  static VoteByProposalVoter(request: QueryVoteByProposalVoterRequest, initRequest?: fm.InitReq): Promise<QueryVoteByProposalVoterResponse> {
    return fm.fetchReq(`/cosmos/group/v1/vote_by_proposal_voter/${request["proposal_id"]}/${request["voter"]}?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id", "voter"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** VotesByProposal queries a vote by proposal id. */
  static VotesByProposal(request: QueryVotesByProposalRequest, initRequest?: fm.InitReq): Promise<QueryVotesByProposalResponse> {
    return fm.fetchReq(`/cosmos/group/v1/votes_by_proposal/${request["proposal_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** VotesByVoter queries a vote by voter. */
  static VotesByVoter(request: QueryVotesByVoterRequest, initRequest?: fm.InitReq): Promise<QueryVotesByVoterResponse> {
    return fm.fetchReq(`/cosmos/group/v1/votes_by_voter/${request["voter"]}?${fm.renderURLSearchParams({
      ...request
    }, ["voter"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GroupsByMember queries groups by member address. */
  static GroupsByMember(request: QueryGroupsByMemberRequest, initRequest?: fm.InitReq): Promise<QueryGroupsByMemberResponse> {
    return fm.fetchReq(`/cosmos/group/v1/groups_by_member/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * TallyResult returns the tally result of a proposal. If the proposal is
   * still in voting period, then this query computes the current tally state,
   * which might not be final. On the other hand, if the proposal is final,
   * then it simply returns the `final_tally_result` state stored in the
   * proposal itself.
   */
  static TallyResult(request: QueryTallyResultRequest, initRequest?: fm.InitReq): Promise<QueryTallyResultResponse> {
    return fm.fetchReq(`/cosmos/group/v1/proposals/${request["proposal_id"]}/tally?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Groups queries all groups in state.
   * 
   * Since: cosmos-sdk 0.47.1
   */
  static Groups(request: QueryGroupsRequest, initRequest?: fm.InitReq): Promise<QueryGroupsResponse> {
    return fm.fetchReq(`/cosmos/group/v1/groups?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class QueryClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** GroupInfo queries group info based on group id. */
  async GroupInfo(req: QueryGroupInfoRequest, headers?: HeadersInit): Promise<QueryGroupInfoResponse> {
    return Query.GroupInfo(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GroupPolicyInfo queries group policy info based on account address of group policy. */
  async GroupPolicyInfo(req: QueryGroupPolicyInfoRequest, headers?: HeadersInit): Promise<QueryGroupPolicyInfoResponse> {
    return Query.GroupPolicyInfo(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GroupMembers queries members of a group by group id. */
  async GroupMembers(req: QueryGroupMembersRequest, headers?: HeadersInit): Promise<QueryGroupMembersResponse> {
    return Query.GroupMembers(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GroupsByAdmin queries groups by admin address. */
  async GroupsByAdmin(req: QueryGroupsByAdminRequest, headers?: HeadersInit): Promise<QueryGroupsByAdminResponse> {
    return Query.GroupsByAdmin(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GroupPoliciesByGroup queries group policies by group id. */
  async GroupPoliciesByGroup(req: QueryGroupPoliciesByGroupRequest, headers?: HeadersInit): Promise<QueryGroupPoliciesByGroupResponse> {
    return Query.GroupPoliciesByGroup(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GroupPoliciesByAdmin queries group policies by admin address. */
  async GroupPoliciesByAdmin(req: QueryGroupPoliciesByAdminRequest, headers?: HeadersInit): Promise<QueryGroupPoliciesByAdminResponse> {
    return Query.GroupPoliciesByAdmin(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Proposal queries a proposal based on proposal id. */
  async Proposal(req: QueryProposalRequest, headers?: HeadersInit): Promise<QueryProposalResponse> {
    return Query.Proposal(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  async ProposalsByGroupPolicy(req: QueryProposalsByGroupPolicyRequest, headers?: HeadersInit): Promise<QueryProposalsByGroupPolicyResponse> {
    return Query.ProposalsByGroupPolicy(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  async VoteByProposalVoter(req: QueryVoteByProposalVoterRequest, headers?: HeadersInit): Promise<QueryVoteByProposalVoterResponse> {
    return Query.VoteByProposalVoter(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** VotesByProposal queries a vote by proposal id. */
  async VotesByProposal(req: QueryVotesByProposalRequest, headers?: HeadersInit): Promise<QueryVotesByProposalResponse> {
    return Query.VotesByProposal(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** VotesByVoter queries a vote by voter. */
  async VotesByVoter(req: QueryVotesByVoterRequest, headers?: HeadersInit): Promise<QueryVotesByVoterResponse> {
    return Query.VotesByVoter(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GroupsByMember queries groups by member address. */
  async GroupsByMember(req: QueryGroupsByMemberRequest, headers?: HeadersInit): Promise<QueryGroupsByMemberResponse> {
    return Query.GroupsByMember(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * TallyResult returns the tally result of a proposal. If the proposal is
   * still in voting period, then this query computes the current tally state,
   * which might not be final. On the other hand, if the proposal is final,
   * then it simply returns the `final_tally_result` state stored in the
   * proposal itself.
   */
  async TallyResult(req: QueryTallyResultRequest, headers?: HeadersInit): Promise<QueryTallyResultResponse> {
    return Query.TallyResult(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Groups queries all groups in state.
   * 
   * Since: cosmos-sdk 0.47.1
   */
  async Groups(req: QueryGroupsRequest, headers?: HeadersInit): Promise<QueryGroupsResponse> {
    return Query.Groups(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
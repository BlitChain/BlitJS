//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** GroupInfo queries group info based on group id. */
    static GroupInfo(request, initRequest) {
        return fm.fetchReq(`/cosmos/group/v1/group_info/${request["group_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["group_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GroupPolicyInfo queries group policy info based on account address of group policy. */
    static GroupPolicyInfo(request, initRequest) {
        return fm.fetchReq(`/cosmos/group/v1/group_policy_info/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GroupMembers queries members of a group by group id. */
    static GroupMembers(request, initRequest) {
        return fm.fetchReq(`/cosmos/group/v1/group_members/${request["group_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["group_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GroupsByAdmin queries groups by admin address. */
    static GroupsByAdmin(request, initRequest) {
        return fm.fetchReq(`/cosmos/group/v1/groups_by_admin/${request["admin"]}?${fm.renderURLSearchParams({
            ...request
        }, ["admin"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GroupPoliciesByGroup queries group policies by group id. */
    static GroupPoliciesByGroup(request, initRequest) {
        return fm.fetchReq(`/cosmos/group/v1/group_policies_by_group/${request["group_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["group_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GroupPoliciesByAdmin queries group policies by admin address. */
    static GroupPoliciesByAdmin(request, initRequest) {
        return fm.fetchReq(`/cosmos/group/v1/group_policies_by_admin/${request["admin"]}?${fm.renderURLSearchParams({
            ...request
        }, ["admin"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Proposal queries a proposal based on proposal id. */
    static Proposal(request, initRequest) {
        return fm.fetchReq(`/cosmos/group/v1/proposal/${request["proposal_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
    static ProposalsByGroupPolicy(request, initRequest) {
        return fm.fetchReq(`/cosmos/group/v1/proposals_by_group_policy/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** VoteByProposalVoter queries a vote by proposal id and voter. */
    static VoteByProposalVoter(request, initRequest) {
        return fm.fetchReq(`/cosmos/group/v1/vote_by_proposal_voter/${request["proposal_id"]}/${request["voter"]}?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id", "voter"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** VotesByProposal queries a vote by proposal id. */
    static VotesByProposal(request, initRequest) {
        return fm.fetchReq(`/cosmos/group/v1/votes_by_proposal/${request["proposal_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** VotesByVoter queries a vote by voter. */
    static VotesByVoter(request, initRequest) {
        return fm.fetchReq(`/cosmos/group/v1/votes_by_voter/${request["voter"]}?${fm.renderURLSearchParams({
            ...request
        }, ["voter"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GroupsByMember queries groups by member address. */
    static GroupsByMember(request, initRequest) {
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
    static TallyResult(request, initRequest) {
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
    static Groups(request, initRequest) {
        return fm.fetchReq(`/cosmos/group/v1/groups?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
}
export class QueryClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** GroupInfo queries group info based on group id. */
    async GroupInfo(req, headers) {
        return Query.GroupInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GroupPolicyInfo queries group policy info based on account address of group policy. */
    async GroupPolicyInfo(req, headers) {
        return Query.GroupPolicyInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GroupMembers queries members of a group by group id. */
    async GroupMembers(req, headers) {
        return Query.GroupMembers(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GroupsByAdmin queries groups by admin address. */
    async GroupsByAdmin(req, headers) {
        return Query.GroupsByAdmin(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GroupPoliciesByGroup queries group policies by group id. */
    async GroupPoliciesByGroup(req, headers) {
        return Query.GroupPoliciesByGroup(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GroupPoliciesByAdmin queries group policies by admin address. */
    async GroupPoliciesByAdmin(req, headers) {
        return Query.GroupPoliciesByAdmin(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Proposal queries a proposal based on proposal id. */
    async Proposal(req, headers) {
        return Query.Proposal(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
    async ProposalsByGroupPolicy(req, headers) {
        return Query.ProposalsByGroupPolicy(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** VoteByProposalVoter queries a vote by proposal id and voter. */
    async VoteByProposalVoter(req, headers) {
        return Query.VoteByProposalVoter(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** VotesByProposal queries a vote by proposal id. */
    async VotesByProposal(req, headers) {
        return Query.VotesByProposal(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** VotesByVoter queries a vote by voter. */
    async VotesByVoter(req, headers) {
        return Query.VotesByVoter(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GroupsByMember queries groups by member address. */
    async GroupsByMember(req, headers) {
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
    async TallyResult(req, headers) {
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
    async Groups(req, headers) {
        return Query.Groups(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
    static CreateGroup(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/CreateGroup`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpdateGroupMembers updates the group members with given group id and admin address. */
    static UpdateGroupMembers(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/UpdateGroupMembers`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
    static UpdateGroupAdmin(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/UpdateGroupAdmin`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
    static UpdateGroupMetadata(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/UpdateGroupMetadata`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
    static CreateGroupPolicy(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/CreateGroupPolicy`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** CreateGroupWithPolicy creates a new group with policy. */
    static CreateGroupWithPolicy(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/CreateGroupWithPolicy`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpdateGroupPolicyAdmin updates a group policy admin. */
    static UpdateGroupPolicyAdmin(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/UpdateGroupPolicyAdmin`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
    static UpdateGroupPolicyDecisionPolicy(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/UpdateGroupPolicyDecisionPolicy`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpdateGroupPolicyMetadata updates a group policy metadata. */
    static UpdateGroupPolicyMetadata(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/UpdateGroupPolicyMetadata`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** SubmitProposal submits a new proposal. */
    static SubmitProposal(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/SubmitProposal`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** WithdrawProposal aborts a proposal. */
    static WithdrawProposal(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/WithdrawProposal`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Vote allows a voter to vote on a proposal. */
    static Vote(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/Vote`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Exec executes a proposal. */
    static Exec(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/Exec`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** LeaveGroup allows a group member to leave the group. */
    static LeaveGroup(request, initRequest) {
        return fm.fetchReq(`/cosmos.group.v1/LeaveGroup`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
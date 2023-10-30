//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgExecLegacyContent, MsgExecLegacyContentResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse, MsgDeposit, MsgDepositResponse } from "./tx";
export class Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  static SubmitProposal(request: MsgSubmitProposal, initRequest?: fm.InitReq): Promise<MsgSubmitProposalResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/SubmitProposal`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  static ExecLegacyContent(request: MsgExecLegacyContent, initRequest?: fm.InitReq): Promise<MsgExecLegacyContentResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/ExecLegacyContent`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Vote defines a method to add a vote on a specific proposal. */
  static Vote(request: MsgVote, initRequest?: fm.InitReq): Promise<MsgVoteResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/Vote`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  static VoteWeighted(request: MsgVoteWeighted, initRequest?: fm.InitReq): Promise<MsgVoteWeightedResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/VoteWeighted`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Deposit defines a method to add deposit on a specific proposal. */
  static Deposit(request: MsgDeposit, initRequest?: fm.InitReq): Promise<MsgDepositResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/Deposit`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
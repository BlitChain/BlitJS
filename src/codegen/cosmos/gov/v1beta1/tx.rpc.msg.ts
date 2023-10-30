//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse, MsgDeposit, MsgDepositResponse } from "./tx";
export class Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  static SubmitProposal(request: MsgSubmitProposal, initRequest?: fm.InitReq): Promise<MsgSubmitProposalResponse> {
    return fm.fetchReq(`/cosmos.gov.v1beta1/SubmitProposal`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Vote defines a method to add a vote on a specific proposal. */
  static Vote(request: MsgVote, initRequest?: fm.InitReq): Promise<MsgVoteResponse> {
    return fm.fetchReq(`/cosmos.gov.v1beta1/Vote`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * VoteWeighted defines a method to add a weighted vote on a specific proposal.
   * 
   * Since: cosmos-sdk 0.43
   */
  static VoteWeighted(request: MsgVoteWeighted, initRequest?: fm.InitReq): Promise<MsgVoteWeightedResponse> {
    return fm.fetchReq(`/cosmos.gov.v1beta1/VoteWeighted`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Deposit defines a method to add deposit on a specific proposal. */
  static Deposit(request: MsgDeposit, initRequest?: fm.InitReq): Promise<MsgDepositResponse> {
    return fm.fetchReq(`/cosmos.gov.v1beta1/Deposit`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
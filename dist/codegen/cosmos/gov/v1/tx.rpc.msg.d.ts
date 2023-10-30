import * as fm from "../../../grpc-gateway";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgExecLegacyContent, MsgExecLegacyContentResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse, MsgDeposit, MsgDepositResponse } from "./tx";
export declare class Msg {
    /** SubmitProposal defines a method to create new proposal given a content. */
    static SubmitProposal(request: MsgSubmitProposal, initRequest?: fm.InitReq): Promise<MsgSubmitProposalResponse>;
    /**
     * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
     * to execute a legacy content-based proposal.
     */
    static ExecLegacyContent(request: MsgExecLegacyContent, initRequest?: fm.InitReq): Promise<MsgExecLegacyContentResponse>;
    /** Vote defines a method to add a vote on a specific proposal. */
    static Vote(request: MsgVote, initRequest?: fm.InitReq): Promise<MsgVoteResponse>;
    /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
    static VoteWeighted(request: MsgVoteWeighted, initRequest?: fm.InitReq): Promise<MsgVoteWeightedResponse>;
    /** Deposit defines a method to add deposit on a specific proposal. */
    static Deposit(request: MsgDeposit, initRequest?: fm.InitReq): Promise<MsgDepositResponse>;
}

import * as fm from "../../../grpc-gateway";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export declare class Query {
    /** Proposal queries proposal details based on ProposalID. */
    static Proposal(request: QueryProposalRequest, initRequest?: fm.InitReq): Promise<QueryProposalResponse>;
    /** Proposals queries all proposals based on given status. */
    static Proposals(request: QueryProposalsRequest, initRequest?: fm.InitReq): Promise<QueryProposalsResponse>;
    /** Vote queries voted information based on proposalID, voterAddr. */
    static Vote(request: QueryVoteRequest, initRequest?: fm.InitReq): Promise<QueryVoteResponse>;
    /** Votes queries votes of a given proposal. */
    static Votes(request: QueryVotesRequest, initRequest?: fm.InitReq): Promise<QueryVotesResponse>;
    /** Params queries all parameters of the gov module. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** Deposit queries single deposit information based proposalID, depositAddr. */
    static Deposit(request: QueryDepositRequest, initRequest?: fm.InitReq): Promise<QueryDepositResponse>;
    /** Deposits queries all deposits of a single proposal. */
    static Deposits(request: QueryDepositsRequest, initRequest?: fm.InitReq): Promise<QueryDepositsResponse>;
    /** TallyResult queries the tally of a proposal vote. */
    static TallyResult(request: QueryTallyResultRequest, initRequest?: fm.InitReq): Promise<QueryTallyResultResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Proposal queries proposal details based on ProposalID. */
    Proposal(req: QueryProposalRequest, headers?: HeadersInit): Promise<QueryProposalResponse>;
    /** Proposals queries all proposals based on given status. */
    Proposals(req: QueryProposalsRequest, headers?: HeadersInit): Promise<QueryProposalsResponse>;
    /** Vote queries voted information based on proposalID, voterAddr. */
    Vote(req: QueryVoteRequest, headers?: HeadersInit): Promise<QueryVoteResponse>;
    /** Votes queries votes of a given proposal. */
    Votes(req: QueryVotesRequest, headers?: HeadersInit): Promise<QueryVotesResponse>;
    /** Params queries all parameters of the gov module. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** Deposit queries single deposit information based proposalID, depositAddr. */
    Deposit(req: QueryDepositRequest, headers?: HeadersInit): Promise<QueryDepositResponse>;
    /** Deposits queries all deposits of a single proposal. */
    Deposits(req: QueryDepositsRequest, headers?: HeadersInit): Promise<QueryDepositsResponse>;
    /** TallyResult queries the tally of a proposal vote. */
    TallyResult(req: QueryTallyResultRequest, headers?: HeadersInit): Promise<QueryTallyResultResponse>;
}

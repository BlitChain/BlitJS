//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export class Query {
  /** Proposal queries proposal details based on ProposalID. */
  static Proposal(request: QueryProposalRequest, initRequest?: fm.InitReq): Promise<QueryProposalResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Proposals queries all proposals based on given status. */
  static Proposals(request: QueryProposalsRequest, initRequest?: fm.InitReq): Promise<QueryProposalsResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Vote queries voted information based on proposalID, voterAddr. */
  static Vote(request: QueryVoteRequest, initRequest?: fm.InitReq): Promise<QueryVoteResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/votes/${request["voter"]}?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id", "voter"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Votes queries votes of a given proposal. */
  static Votes(request: QueryVotesRequest, initRequest?: fm.InitReq): Promise<QueryVotesResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/votes?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params queries all parameters of the gov module. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/params/${request["params_type"]}?${fm.renderURLSearchParams({
      ...request
    }, ["params_type"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Deposit queries single deposit information based on proposalID, depositor address. */
  static Deposit(request: QueryDepositRequest, initRequest?: fm.InitReq): Promise<QueryDepositResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/deposits/${request["depositor"]}?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id", "depositor"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Deposits queries all deposits of a single proposal. */
  static Deposits(request: QueryDepositsRequest, initRequest?: fm.InitReq): Promise<QueryDepositsResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/deposits?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** TallyResult queries the tally of a proposal vote. */
  static TallyResult(request: QueryTallyResultRequest, initRequest?: fm.InitReq): Promise<QueryTallyResultResponse> {
    return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/tally?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
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
  /** Proposal queries proposal details based on ProposalID. */
  async Proposal(req: QueryProposalRequest, headers?: HeadersInit): Promise<QueryProposalResponse> {
    return Query.Proposal(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Proposals queries all proposals based on given status. */
  async Proposals(req: QueryProposalsRequest, headers?: HeadersInit): Promise<QueryProposalsResponse> {
    return Query.Proposals(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Vote queries voted information based on proposalID, voterAddr. */
  async Vote(req: QueryVoteRequest, headers?: HeadersInit): Promise<QueryVoteResponse> {
    return Query.Vote(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Votes queries votes of a given proposal. */
  async Votes(req: QueryVotesRequest, headers?: HeadersInit): Promise<QueryVotesResponse> {
    return Query.Votes(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params queries all parameters of the gov module. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Deposit queries single deposit information based on proposalID, depositor address. */
  async Deposit(req: QueryDepositRequest, headers?: HeadersInit): Promise<QueryDepositResponse> {
    return Query.Deposit(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Deposits queries all deposits of a single proposal. */
  async Deposits(req: QueryDepositsRequest, headers?: HeadersInit): Promise<QueryDepositsResponse> {
    return Query.Deposits(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** TallyResult queries the tally of a proposal vote. */
  async TallyResult(req: QueryTallyResultRequest, headers?: HeadersInit): Promise<QueryTallyResultResponse> {
    return Query.TallyResult(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
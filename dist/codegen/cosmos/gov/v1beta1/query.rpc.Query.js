"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.Query = void 0;
//@ts-nocheck
const fm = __importStar(require("../../../grpc-gateway"));
class Query {
    /** Proposal queries proposal details based on ProposalID. */
    static Proposal(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Proposals queries all proposals based on given status. */
    static Proposals(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Vote queries voted information based on proposalID, voterAddr. */
    static Vote(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/votes/${request["voter"]}?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id", "voter"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Votes queries votes of a given proposal. */
    static Votes(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/votes?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params queries all parameters of the gov module. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/params/${request["params_type"]}?${fm.renderURLSearchParams({
            ...request
        }, ["params_type"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Deposit queries single deposit information based on proposalID, depositor address. */
    static Deposit(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/deposits/${request["depositor"]}?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id", "depositor"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Deposits queries all deposits of a single proposal. */
    static Deposits(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/deposits?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** TallyResult queries the tally of a proposal vote. */
    static TallyResult(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/tally?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
}
exports.Query = Query;
class QueryClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** Proposal queries proposal details based on ProposalID. */
    async Proposal(req, headers) {
        return Query.Proposal(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Proposals queries all proposals based on given status. */
    async Proposals(req, headers) {
        return Query.Proposals(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Vote queries voted information based on proposalID, voterAddr. */
    async Vote(req, headers) {
        return Query.Vote(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Votes queries votes of a given proposal. */
    async Votes(req, headers) {
        return Query.Votes(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params queries all parameters of the gov module. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Deposit queries single deposit information based on proposalID, depositor address. */
    async Deposit(req, headers) {
        return Query.Deposit(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Deposits queries all deposits of a single proposal. */
    async Deposits(req, headers) {
        return Query.Deposits(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** TallyResult queries the tally of a proposal vote. */
    async TallyResult(req, headers) {
        return Query.TallyResult(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map
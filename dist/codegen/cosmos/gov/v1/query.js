"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTallyResultResponse = exports.QueryTallyResultRequest = exports.QueryDepositsResponse = exports.QueryDepositsRequest = exports.QueryDepositResponse = exports.QueryDepositRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryVotesResponse = exports.QueryVotesRequest = exports.QueryVoteResponse = exports.QueryVoteRequest = exports.QueryProposalsResponse = exports.QueryProposalsRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const gov_1 = require("./gov");
const pagination_1 = require("../../base/query/v1beta1/pagination");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.gov.v1";
function createBaseQueryProposalRequest() {
    return {
        proposal_id: BigInt(0)
    };
}
exports.QueryProposalRequest = {
    typeUrl: "/cosmos.gov.v1.QueryProposalRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalRequest();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryProposalRequest",
            value: exports.QueryProposalRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryProposalRequest",
            value: exports.QueryProposalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalResponse() {
    return {
        proposal: undefined
    };
}
exports.QueryProposalResponse = {
    typeUrl: "/cosmos.gov.v1.QueryProposalResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal !== undefined) {
            gov_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = gov_1.Proposal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposal: (0, helpers_1.isSet)(object.proposal) ? gov_1.Proposal.fromJSON(object.proposal) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? gov_1.Proposal.toJSON(message.proposal) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalResponse();
        message.proposal = object.proposal !== undefined && object.proposal !== null ? gov_1.Proposal.fromPartial(object.proposal) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposal: object.proposal ? gov_1.Proposal.fromSDK(object.proposal) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? gov_1.Proposal.toSDK(message.proposal) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            proposal: object?.proposal ? gov_1.Proposal.fromAmino(object.proposal) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal = message.proposal ? gov_1.Proposal.toAmino(message.proposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryProposalResponse",
            value: exports.QueryProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryProposalResponse",
            value: exports.QueryProposalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsRequest() {
    return {
        proposal_status: 0,
        voter: "",
        depositor: "",
        pagination: undefined
    };
}
exports.QueryProposalsRequest = {
    typeUrl: "/cosmos.gov.v1.QueryProposalsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_status !== 0) {
            writer.uint32(8).int32(message.proposal_status);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.depositor !== "") {
            writer.uint32(26).string(message.depositor);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_status = reader.int32();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.depositor = reader.string();
                    break;
                case 4:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposal_status: (0, helpers_1.isSet)(object.proposal_status) ? (0, gov_1.proposalStatusFromJSON)(object.proposal_status) : -1,
            voter: (0, helpers_1.isSet)(object.voter) ? String(object.voter) : "",
            depositor: (0, helpers_1.isSet)(object.depositor) ? String(object.depositor) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_status !== undefined && (obj.proposal_status = (0, gov_1.proposalStatusToJSON)(message.proposal_status));
        message.voter !== undefined && (obj.voter = message.voter);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsRequest();
        message.proposal_status = object.proposal_status ?? 0;
        message.voter = object.voter ?? "";
        message.depositor = object.depositor ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposal_status: (0, helpers_1.isSet)(object.proposal_status) ? (0, gov_1.proposalStatusFromJSON)(object.proposal_status) : -1,
            voter: object?.voter,
            depositor: object?.depositor,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.proposal_status !== undefined && (obj.proposal_status = (0, gov_1.proposalStatusToJSON)(message.proposal_status));
        obj.voter = message.voter;
        obj.depositor = message.depositor;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_status: (0, helpers_1.isSet)(object.proposal_status) ? (0, gov_1.proposalStatusFromJSON)(object.proposal_status) : -1,
            voter: object.voter,
            depositor: object.depositor,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_status = message.proposal_status;
        obj.voter = message.voter;
        obj.depositor = message.depositor;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryProposalsRequest",
            value: exports.QueryProposalsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryProposalsRequest",
            value: exports.QueryProposalsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsResponse() {
    return {
        proposals: [],
        pagination: undefined
    };
}
exports.QueryProposalsResponse = {
    typeUrl: "/cosmos.gov.v1.QueryProposalsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.proposals) {
            gov_1.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => gov_1.Proposal.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? gov_1.Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsResponse();
        message.proposals = object.proposals?.map(e => gov_1.Proposal.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => gov_1.Proposal.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? gov_1.Proposal.toSDK(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => gov_1.Proposal.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? gov_1.Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryProposalsResponse",
            value: exports.QueryProposalsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryProposalsResponse",
            value: exports.QueryProposalsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVoteRequest() {
    return {
        proposal_id: BigInt(0),
        voter: ""
    };
}
exports.QueryVoteRequest = {
    typeUrl: "/cosmos.gov.v1.QueryVoteRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            voter: (0, helpers_1.isSet)(object.voter) ? String(object.voter) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteRequest();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            voter: object?.voter
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.voter = message.voter;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            voter: object.voter
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.voter = message.voter;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVoteRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryVoteRequest",
            value: exports.QueryVoteRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVoteRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVoteRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryVoteRequest",
            value: exports.QueryVoteRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVoteResponse() {
    return {
        vote: undefined
    };
}
exports.QueryVoteResponse = {
    typeUrl: "/cosmos.gov.v1.QueryVoteResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.vote !== undefined) {
            gov_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = gov_1.Vote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            vote: (0, helpers_1.isSet)(object.vote) ? gov_1.Vote.fromJSON(object.vote) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? gov_1.Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteResponse();
        message.vote = object.vote !== undefined && object.vote !== null ? gov_1.Vote.fromPartial(object.vote) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            vote: object.vote ? gov_1.Vote.fromSDK(object.vote) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? gov_1.Vote.toSDK(message.vote) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            vote: object?.vote ? gov_1.Vote.fromAmino(object.vote) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.vote = message.vote ? gov_1.Vote.toAmino(message.vote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryVoteResponse",
            value: exports.QueryVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVoteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryVoteResponse",
            value: exports.QueryVoteResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVotesRequest() {
    return {
        proposal_id: BigInt(0),
        pagination: undefined
    };
}
exports.QueryVotesRequest = {
    typeUrl: "/cosmos.gov.v1.QueryVotesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesRequest();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryVotesRequest",
            value: exports.QueryVotesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVotesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryVotesRequest",
            value: exports.QueryVotesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVotesResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
exports.QueryVotesResponse = {
    typeUrl: "/cosmos.gov.v1.QueryVotesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.votes) {
            gov_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => gov_1.Vote.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? gov_1.Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesResponse();
        message.votes = object.votes?.map(e => gov_1.Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => gov_1.Vote.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? gov_1.Vote.toSDK(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => gov_1.Vote.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? gov_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryVotesResponse",
            value: exports.QueryVotesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVotesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryVotesResponse",
            value: exports.QueryVotesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {
        params_type: ""
    };
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.gov.v1.QueryParamsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params_type !== "") {
            writer.uint32(10).string(message.params_type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params_type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            params_type: (0, helpers_1.isSet)(object.params_type) ? String(object.params_type) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.params_type !== undefined && (obj.params_type = message.params_type);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsRequest();
        message.params_type = object.params_type ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            params_type: object?.params_type
        };
    },
    toSDK(message) {
        const obj = {};
        obj.params_type = message.params_type;
        return obj;
    },
    fromAmino(object) {
        return {
            params_type: object.params_type
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params_type = message.params_type;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryParamsRequest",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        voting_params: undefined,
        deposit_params: undefined,
        tally_params: undefined,
        params: undefined
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.gov.v1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.voting_params !== undefined) {
            gov_1.VotingParams.encode(message.voting_params, writer.uint32(10).fork()).ldelim();
        }
        if (message.deposit_params !== undefined) {
            gov_1.DepositParams.encode(message.deposit_params, writer.uint32(18).fork()).ldelim();
        }
        if (message.tally_params !== undefined) {
            gov_1.TallyParams.encode(message.tally_params, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            gov_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voting_params = gov_1.VotingParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.deposit_params = gov_1.DepositParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tally_params = gov_1.TallyParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.params = gov_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            voting_params: (0, helpers_1.isSet)(object.voting_params) ? gov_1.VotingParams.fromJSON(object.voting_params) : undefined,
            deposit_params: (0, helpers_1.isSet)(object.deposit_params) ? gov_1.DepositParams.fromJSON(object.deposit_params) : undefined,
            tally_params: (0, helpers_1.isSet)(object.tally_params) ? gov_1.TallyParams.fromJSON(object.tally_params) : undefined,
            params: (0, helpers_1.isSet)(object.params) ? gov_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.voting_params !== undefined && (obj.voting_params = message.voting_params ? gov_1.VotingParams.toJSON(message.voting_params) : undefined);
        message.deposit_params !== undefined && (obj.deposit_params = message.deposit_params ? gov_1.DepositParams.toJSON(message.deposit_params) : undefined);
        message.tally_params !== undefined && (obj.tally_params = message.tally_params ? gov_1.TallyParams.toJSON(message.tally_params) : undefined);
        message.params !== undefined && (obj.params = message.params ? gov_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.voting_params = object.voting_params !== undefined && object.voting_params !== null ? gov_1.VotingParams.fromPartial(object.voting_params) : undefined;
        message.deposit_params = object.deposit_params !== undefined && object.deposit_params !== null ? gov_1.DepositParams.fromPartial(object.deposit_params) : undefined;
        message.tally_params = object.tally_params !== undefined && object.tally_params !== null ? gov_1.TallyParams.fromPartial(object.tally_params) : undefined;
        message.params = object.params !== undefined && object.params !== null ? gov_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            voting_params: object.voting_params ? gov_1.VotingParams.fromSDK(object.voting_params) : undefined,
            deposit_params: object.deposit_params ? gov_1.DepositParams.fromSDK(object.deposit_params) : undefined,
            tally_params: object.tally_params ? gov_1.TallyParams.fromSDK(object.tally_params) : undefined,
            params: object.params ? gov_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.voting_params !== undefined && (obj.voting_params = message.voting_params ? gov_1.VotingParams.toSDK(message.voting_params) : undefined);
        message.deposit_params !== undefined && (obj.deposit_params = message.deposit_params ? gov_1.DepositParams.toSDK(message.deposit_params) : undefined);
        message.tally_params !== undefined && (obj.tally_params = message.tally_params ? gov_1.TallyParams.toSDK(message.tally_params) : undefined);
        message.params !== undefined && (obj.params = message.params ? gov_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            voting_params: object?.voting_params ? gov_1.VotingParams.fromAmino(object.voting_params) : undefined,
            deposit_params: object?.deposit_params ? gov_1.DepositParams.fromAmino(object.deposit_params) : undefined,
            tally_params: object?.tally_params ? gov_1.TallyParams.fromAmino(object.tally_params) : undefined,
            params: object?.params ? gov_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.voting_params = message.voting_params ? gov_1.VotingParams.toAmino(message.voting_params) : undefined;
        obj.deposit_params = message.deposit_params ? gov_1.DepositParams.toAmino(message.deposit_params) : undefined;
        obj.tally_params = message.tally_params ? gov_1.TallyParams.toAmino(message.tally_params) : undefined;
        obj.params = message.params ? gov_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryParamsResponse",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositRequest() {
    return {
        proposal_id: BigInt(0),
        depositor: ""
    };
}
exports.QueryDepositRequest = {
    typeUrl: "/cosmos.gov.v1.QueryDepositRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            depositor: (0, helpers_1.isSet)(object.depositor) ? String(object.depositor) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositRequest();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.depositor = object.depositor ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            depositor: object?.depositor
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.depositor = message.depositor;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            depositor: object.depositor
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.depositor = message.depositor;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDepositRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryDepositRequest",
            value: exports.QueryDepositRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDepositRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryDepositRequest",
            value: exports.QueryDepositRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDepositResponse() {
    return {
        deposit: undefined
    };
}
exports.QueryDepositResponse = {
    typeUrl: "/cosmos.gov.v1.QueryDepositResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.deposit !== undefined) {
            gov_1.Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = gov_1.Deposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            deposit: (0, helpers_1.isSet)(object.deposit) ? gov_1.Deposit.fromJSON(object.deposit) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.deposit !== undefined && (obj.deposit = message.deposit ? gov_1.Deposit.toJSON(message.deposit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositResponse();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? gov_1.Deposit.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            deposit: object.deposit ? gov_1.Deposit.fromSDK(object.deposit) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.deposit !== undefined && (obj.deposit = message.deposit ? gov_1.Deposit.toSDK(message.deposit) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            deposit: object?.deposit ? gov_1.Deposit.fromAmino(object.deposit) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit = message.deposit ? gov_1.Deposit.toAmino(message.deposit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDepositResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryDepositResponse",
            value: exports.QueryDepositResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDepositResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryDepositResponse",
            value: exports.QueryDepositResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositsRequest() {
    return {
        proposal_id: BigInt(0),
        pagination: undefined
    };
}
exports.QueryDepositsRequest = {
    typeUrl: "/cosmos.gov.v1.QueryDepositsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositsRequest();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDepositsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryDepositsRequest",
            value: exports.QueryDepositsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryDepositsRequest",
            value: exports.QueryDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDepositsResponse() {
    return {
        deposits: [],
        pagination: undefined
    };
}
exports.QueryDepositsResponse = {
    typeUrl: "/cosmos.gov.v1.QueryDepositsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.deposits) {
            gov_1.Deposit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => gov_1.Deposit.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? gov_1.Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositsResponse();
        message.deposits = object.deposits?.map(e => gov_1.Deposit.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => gov_1.Deposit.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? gov_1.Deposit.toSDK(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => gov_1.Deposit.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? gov_1.Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDepositsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryDepositsResponse",
            value: exports.QueryDepositsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDepositsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryDepositsResponse",
            value: exports.QueryDepositsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTallyResultRequest() {
    return {
        proposal_id: BigInt(0)
    };
}
exports.QueryTallyResultRequest = {
    typeUrl: "/cosmos.gov.v1.QueryTallyResultRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultRequest();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTallyResultRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryTallyResultRequest",
            value: exports.QueryTallyResultRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTallyResultRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTallyResultRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryTallyResultRequest",
            value: exports.QueryTallyResultRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTallyResultResponse() {
    return {
        tally: undefined
    };
}
exports.QueryTallyResultResponse = {
    typeUrl: "/cosmos.gov.v1.QueryTallyResultResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tally !== undefined) {
            gov_1.TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tally = gov_1.TallyResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tally: (0, helpers_1.isSet)(object.tally) ? gov_1.TallyResult.fromJSON(object.tally) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tally !== undefined && (obj.tally = message.tally ? gov_1.TallyResult.toJSON(message.tally) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultResponse();
        message.tally = object.tally !== undefined && object.tally !== null ? gov_1.TallyResult.fromPartial(object.tally) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            tally: object.tally ? gov_1.TallyResult.fromSDK(object.tally) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.tally !== undefined && (obj.tally = message.tally ? gov_1.TallyResult.toSDK(message.tally) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            tally: object?.tally ? gov_1.TallyResult.fromAmino(object.tally) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tally = message.tally ? gov_1.TallyResult.toAmino(message.tally) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTallyResultResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/QueryTallyResultResponse",
            value: exports.QueryTallyResultResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTallyResultResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTallyResultResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.QueryTallyResultResponse",
            value: exports.QueryTallyResultResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_govv1beta1Content_ToAmino = exports.Cosmos_govv1beta1Content_FromAmino = exports.Cosmos_govv1beta1Content_InterfaceDecoder = exports.TallyParams = exports.VotingParams = exports.DepositParams = exports.Vote = exports.TallyResult = exports.Proposal = exports.Deposit = exports.TextProposal = exports.WeightedVoteOption = exports.proposalStatusToJSON = exports.proposalStatusFromJSON = exports.ProposalStatusAmino = exports.ProposalStatusSDKType = exports.ProposalStatus = exports.voteOptionToJSON = exports.voteOptionFromJSON = exports.VoteOptionAmino = exports.VoteOptionSDKType = exports.VoteOption = exports.protobufPackage = void 0;
//@ts-nocheck
const coin_1 = require("../../base/v1beta1/coin");
const any_1 = require("../../../google/protobuf/any");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const distribution_1 = require("../../distribution/v1beta1/distribution");
const params_1 = require("../../params/v1beta1/params");
const upgrade_1 = require("../../upgrade/v1beta1/upgrade");
const client_1 = require("../../../ibc/core/client/v1/client");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.gov.v1beta1";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption || (exports.VoteOption = VoteOption = {}));
exports.VoteOptionSDKType = VoteOption;
exports.VoteOptionAmino = VoteOption;
function voteOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_OPTION_UNSPECIFIED":
            return VoteOption.VOTE_OPTION_UNSPECIFIED;
        case 1:
        case "VOTE_OPTION_YES":
            return VoteOption.VOTE_OPTION_YES;
        case 2:
        case "VOTE_OPTION_ABSTAIN":
            return VoteOption.VOTE_OPTION_ABSTAIN;
        case 3:
        case "VOTE_OPTION_NO":
            return VoteOption.VOTE_OPTION_NO;
        case 4:
        case "VOTE_OPTION_NO_WITH_VETO":
            return VoteOption.VOTE_OPTION_NO_WITH_VETO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteOption.UNRECOGNIZED;
    }
}
exports.voteOptionFromJSON = voteOptionFromJSON;
function voteOptionToJSON(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return "VOTE_OPTION_UNSPECIFIED";
        case VoteOption.VOTE_OPTION_YES:
            return "VOTE_OPTION_YES";
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return "VOTE_OPTION_ABSTAIN";
        case VoteOption.VOTE_OPTION_NO:
            return "VOTE_OPTION_NO";
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return "VOTE_OPTION_NO_WITH_VETO";
        case VoteOption.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.voteOptionToJSON = voteOptionToJSON;
/** ProposalStatus enumerates the valid statuses of a proposal. */
var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus || (exports.ProposalStatus = ProposalStatus = {}));
exports.ProposalStatusSDKType = ProposalStatus;
exports.ProposalStatusAmino = ProposalStatus;
function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_STATUS_UNSPECIFIED":
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
        case 2:
        case "PROPOSAL_STATUS_VOTING_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
        case 3:
        case "PROPOSAL_STATUS_PASSED":
            return ProposalStatus.PROPOSAL_STATUS_PASSED;
        case 4:
        case "PROPOSAL_STATUS_REJECTED":
            return ProposalStatus.PROPOSAL_STATUS_REJECTED;
        case 5:
        case "PROPOSAL_STATUS_FAILED":
            return ProposalStatus.PROPOSAL_STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalStatus.UNRECOGNIZED;
    }
}
exports.proposalStatusFromJSON = proposalStatusFromJSON;
function proposalStatusToJSON(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return "PROPOSAL_STATUS_UNSPECIFIED";
        case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
            return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
            return "PROPOSAL_STATUS_VOTING_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_PASSED:
            return "PROPOSAL_STATUS_PASSED";
        case ProposalStatus.PROPOSAL_STATUS_REJECTED:
            return "PROPOSAL_STATUS_REJECTED";
        case ProposalStatus.PROPOSAL_STATUS_FAILED:
            return "PROPOSAL_STATUS_FAILED";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.proposalStatusToJSON = proposalStatusToJSON;
function createBaseWeightedVoteOption() {
    return {
        option: 0,
        weight: ""
    };
}
exports.WeightedVoteOption = {
    typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.option !== 0) {
            writer.uint32(8).int32(message.option);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedVoteOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.option = reader.int32();
                    break;
                case 2:
                    message.weight = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            option: (0, helpers_1.isSet)(object.option) ? voteOptionFromJSON(object.option) : -1,
            weight: (0, helpers_1.isSet)(object.weight) ? String(object.weight) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWeightedVoteOption();
        message.option = object.option ?? 0;
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWeightedVoteOption();
        if (object.option !== undefined && object.option !== null) {
            message.option = voteOptionFromJSON(object.option);
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.option = message.option;
        obj.weight = message.weight ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WeightedVoteOption.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/WeightedVoteOption",
            value: exports.WeightedVoteOption.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.WeightedVoteOption.decode(message.value);
    },
    toProto(message) {
        return exports.WeightedVoteOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
            value: exports.WeightedVoteOption.encode(message).finish()
        };
    }
};
function createBaseTextProposal() {
    return {
        $typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        title: "",
        description: ""
    };
}
exports.TextProposal = {
    typeUrl: "/cosmos.gov.v1beta1.TextProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTextProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTextProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTextProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TextProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TextProposal",
            value: exports.TextProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TextProposal.decode(message.value);
    },
    toProto(message) {
        return exports.TextProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.TextProposal",
            value: exports.TextProposal.encode(message).finish()
        };
    }
};
function createBaseDeposit() {
    return {
        proposal_id: BigInt(0),
        depositor: "",
        amount: []
    };
}
exports.Deposit = {
    typeUrl: "/cosmos.gov.v1beta1.Deposit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            depositor: (0, helpers_1.isSet)(object.depositor) ? String(object.depositor) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDeposit();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.depositor = object.depositor ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDeposit();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.depositor = message.depositor;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Deposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Deposit",
            value: exports.Deposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Deposit.decode(message.value);
    },
    toProto(message) {
        return exports.Deposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.Deposit",
            value: exports.Deposit.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        proposal_id: BigInt(0),
        content: undefined,
        status: 0,
        final_tally_result: exports.TallyResult.fromPartial({}),
        submit_time: new Date(),
        deposit_end_time: new Date(),
        total_deposit: [],
        voting_start_time: new Date(),
        voting_end_time: new Date()
    };
}
exports.Proposal = {
    typeUrl: "/cosmos.gov.v1beta1.Proposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.content !== undefined) {
            any_1.Any.encode(message.content, writer.uint32(18).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.final_tally_result !== undefined) {
            exports.TallyResult.encode(message.final_tally_result, writer.uint32(34).fork()).ldelim();
        }
        if (message.submit_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submit_time), writer.uint32(42).fork()).ldelim();
        }
        if (message.deposit_end_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.deposit_end_time), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.total_deposit) {
            coin_1.Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.voting_start_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.voting_start_time), writer.uint32(66).fork()).ldelim();
        }
        if (message.voting_end_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.voting_end_time), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.content = (0, exports.Cosmos_govv1beta1Content_InterfaceDecoder)(reader);
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.final_tally_result = exports.TallyResult.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.submit_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.deposit_end_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.total_deposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.voting_start_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.voting_end_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            content: (0, helpers_1.isSet)(object.content) ? any_1.Any.fromJSON(object.content) : undefined,
            status: (0, helpers_1.isSet)(object.status) ? proposalStatusFromJSON(object.status) : -1,
            final_tally_result: (0, helpers_1.isSet)(object.final_tally_result) ? exports.TallyResult.fromJSON(object.final_tally_result) : undefined,
            submit_time: (0, helpers_1.isSet)(object.submit_time) ? (0, helpers_1.fromJsonTimestamp)(object.submit_time) : undefined,
            deposit_end_time: (0, helpers_1.isSet)(object.deposit_end_time) ? (0, helpers_1.fromJsonTimestamp)(object.deposit_end_time) : undefined,
            total_deposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            voting_start_time: (0, helpers_1.isSet)(object.voting_start_time) ? (0, helpers_1.fromJsonTimestamp)(object.voting_start_time) : undefined,
            voting_end_time: (0, helpers_1.isSet)(object.voting_end_time) ? (0, helpers_1.fromJsonTimestamp)(object.voting_end_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.content !== undefined && (obj.content = message.content ? any_1.Any.toJSON(message.content) : undefined);
        message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
        message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? exports.TallyResult.toJSON(message.final_tally_result) : undefined);
        message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
        message.deposit_end_time !== undefined && (obj.deposit_end_time = message.deposit_end_time.toISOString());
        if (message.total_deposit) {
            obj.total_deposit = message.total_deposit.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_deposit = [];
        }
        message.voting_start_time !== undefined && (obj.voting_start_time = message.voting_start_time.toISOString());
        message.voting_end_time !== undefined && (obj.voting_end_time = message.voting_end_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.content = object.content !== undefined && object.content !== null ? any_1.Any.fromPartial(object.content) : undefined;
        message.status = object.status ?? 0;
        message.final_tally_result = object.final_tally_result !== undefined && object.final_tally_result !== null ? exports.TallyResult.fromPartial(object.final_tally_result) : undefined;
        message.submit_time = object.submit_time ?? undefined;
        message.deposit_end_time = object.deposit_end_time ?? undefined;
        message.total_deposit = object.total_deposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.voting_start_time = object.voting_start_time ?? undefined;
        message.voting_end_time = object.voting_end_time ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = (0, exports.Cosmos_govv1beta1Content_FromAmino)(object.content);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = proposalStatusFromJSON(object.status);
        }
        if (object.final_tally_result !== undefined && object.final_tally_result !== null) {
            message.final_tally_result = exports.TallyResult.fromAmino(object.final_tally_result);
        }
        if (object.submit_time !== undefined && object.submit_time !== null) {
            message.submit_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.submit_time));
        }
        if (object.deposit_end_time !== undefined && object.deposit_end_time !== null) {
            message.deposit_end_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.deposit_end_time));
        }
        message.total_deposit = object.total_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.voting_start_time !== undefined && object.voting_start_time !== null) {
            message.voting_start_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.voting_start_time));
        }
        if (object.voting_end_time !== undefined && object.voting_end_time !== null) {
            message.voting_end_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.voting_end_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.content = message.content ? (0, exports.Cosmos_govv1beta1Content_ToAmino)(message.content) : undefined;
        obj.status = message.status;
        obj.final_tally_result = message.final_tally_result ? exports.TallyResult.toAmino(message.final_tally_result) : exports.TallyResult.fromPartial({});
        obj.submit_time = message.submit_time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.submit_time)) : new Date();
        obj.deposit_end_time = message.deposit_end_time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.deposit_end_time)) : new Date();
        if (message.total_deposit) {
            obj.total_deposit = message.total_deposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_deposit = [];
        }
        obj.voting_start_time = message.voting_start_time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.voting_start_time)) : new Date();
        obj.voting_end_time = message.voting_end_time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.voting_end_time)) : new Date();
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Proposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Proposal",
            value: exports.Proposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Proposal.decode(message.value);
    },
    toProto(message) {
        return exports.Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.Proposal",
            value: exports.Proposal.encode(message).finish()
        };
    }
};
function createBaseTallyResult() {
    return {
        yes: "",
        abstain: "",
        no: "",
        no_with_veto: ""
    };
}
exports.TallyResult = {
    typeUrl: "/cosmos.gov.v1beta1.TallyResult",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.yes !== "") {
            writer.uint32(10).string(message.yes);
        }
        if (message.abstain !== "") {
            writer.uint32(18).string(message.abstain);
        }
        if (message.no !== "") {
            writer.uint32(26).string(message.no);
        }
        if (message.no_with_veto !== "") {
            writer.uint32(34).string(message.no_with_veto);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yes = reader.string();
                    break;
                case 2:
                    message.abstain = reader.string();
                    break;
                case 3:
                    message.no = reader.string();
                    break;
                case 4:
                    message.no_with_veto = reader.string();
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
            yes: (0, helpers_1.isSet)(object.yes) ? String(object.yes) : "",
            abstain: (0, helpers_1.isSet)(object.abstain) ? String(object.abstain) : "",
            no: (0, helpers_1.isSet)(object.no) ? String(object.no) : "",
            no_with_veto: (0, helpers_1.isSet)(object.no_with_veto) ? String(object.no_with_veto) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.yes !== undefined && (obj.yes = message.yes);
        message.abstain !== undefined && (obj.abstain = message.abstain);
        message.no !== undefined && (obj.no = message.no);
        message.no_with_veto !== undefined && (obj.no_with_veto = message.no_with_veto);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTallyResult();
        message.yes = object.yes ?? "";
        message.abstain = object.abstain ?? "";
        message.no = object.no ?? "";
        message.no_with_veto = object.no_with_veto ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTallyResult();
        if (object.yes !== undefined && object.yes !== null) {
            message.yes = object.yes;
        }
        if (object.abstain !== undefined && object.abstain !== null) {
            message.abstain = object.abstain;
        }
        if (object.no !== undefined && object.no !== null) {
            message.no = object.no;
        }
        if (object.no_with_veto !== undefined && object.no_with_veto !== null) {
            message.no_with_veto = object.no_with_veto;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.yes = message.yes;
        obj.abstain = message.abstain;
        obj.no = message.no;
        obj.no_with_veto = message.no_with_veto;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TallyResult.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TallyResult",
            value: exports.TallyResult.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TallyResult.decode(message.value);
    },
    toProto(message) {
        return exports.TallyResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.TallyResult",
            value: exports.TallyResult.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        proposal_id: BigInt(0),
        voter: "",
        option: 0,
        options: []
    };
}
exports.Vote = {
    typeUrl: "/cosmos.gov.v1beta1.Vote",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        for (const v of message.options) {
            exports.WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.options.push(exports.WeightedVoteOption.decode(reader, reader.uint32()));
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
            voter: (0, helpers_1.isSet)(object.voter) ? String(object.voter) : "",
            option: (0, helpers_1.isSet)(object.option) ? voteOptionFromJSON(object.option) : -1,
            options: Array.isArray(object?.options) ? object.options.map((e) => exports.WeightedVoteOption.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        if (message.options) {
            obj.options = message.options.map(e => e ? exports.WeightedVoteOption.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        message.options = object.options?.map(e => exports.WeightedVoteOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.option !== undefined && object.option !== null) {
            message.option = voteOptionFromJSON(object.option);
        }
        message.options = object.options?.map(e => exports.WeightedVoteOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : "0";
        obj.voter = message.voter;
        obj.option = message.option;
        if (message.options) {
            obj.options = message.options.map(e => e ? exports.WeightedVoteOption.toAmino(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Vote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Vote",
            value: exports.Vote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Vote.decode(message.value);
    },
    toProto(message) {
        return exports.Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.Vote",
            value: exports.Vote.encode(message).finish()
        };
    }
};
function createBaseDepositParams() {
    return {
        min_deposit: [],
        max_deposit_period: duration_1.Duration.fromPartial({})
    };
}
exports.DepositParams = {
    typeUrl: "/cosmos.gov.v1beta1.DepositParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.min_deposit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.max_deposit_period !== undefined) {
            duration_1.Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.min_deposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.max_deposit_period = duration_1.Duration.decode(reader, reader.uint32());
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
            min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            max_deposit_period: (0, helpers_1.isSet)(object.max_deposit_period) ? duration_1.Duration.fromJSON(object.max_deposit_period) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.min_deposit) {
            obj.min_deposit = message.min_deposit.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        message.max_deposit_period !== undefined && (obj.max_deposit_period = message.max_deposit_period ? duration_1.Duration.toJSON(message.max_deposit_period) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDepositParams();
        message.min_deposit = object.min_deposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.max_deposit_period = object.max_deposit_period !== undefined && object.max_deposit_period !== null ? duration_1.Duration.fromPartial(object.max_deposit_period) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDepositParams();
        message.min_deposit = object.min_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
            message.max_deposit_period = duration_1.Duration.fromAmino(object.max_deposit_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.min_deposit) {
            obj.min_deposit = message.min_deposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        obj.max_deposit_period = message.max_deposit_period ? duration_1.Duration.toAmino(message.max_deposit_period) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DepositParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DepositParams",
            value: exports.DepositParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DepositParams.decode(message.value);
    },
    toProto(message) {
        return exports.DepositParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.DepositParams",
            value: exports.DepositParams.encode(message).finish()
        };
    }
};
function createBaseVotingParams() {
    return {
        voting_period: duration_1.Duration.fromPartial({})
    };
}
exports.VotingParams = {
    typeUrl: "/cosmos.gov.v1beta1.VotingParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.voting_period !== undefined) {
            duration_1.Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVotingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voting_period = duration_1.Duration.decode(reader, reader.uint32());
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
            voting_period: (0, helpers_1.isSet)(object.voting_period) ? duration_1.Duration.fromJSON(object.voting_period) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.voting_period !== undefined && (obj.voting_period = message.voting_period ? duration_1.Duration.toJSON(message.voting_period) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVotingParams();
        message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? duration_1.Duration.fromPartial(object.voting_period) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseVotingParams();
        if (object.voting_period !== undefined && object.voting_period !== null) {
            message.voting_period = duration_1.Duration.fromAmino(object.voting_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.voting_period = message.voting_period ? duration_1.Duration.toAmino(message.voting_period) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VotingParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/VotingParams",
            value: exports.VotingParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.VotingParams.decode(message.value);
    },
    toProto(message) {
        return exports.VotingParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.VotingParams",
            value: exports.VotingParams.encode(message).finish()
        };
    }
};
function createBaseTallyParams() {
    return {
        quorum: new Uint8Array(),
        threshold: new Uint8Array(),
        veto_threshold: new Uint8Array()
    };
}
exports.TallyParams = {
    typeUrl: "/cosmos.gov.v1beta1.TallyParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.quorum.length !== 0) {
            writer.uint32(10).bytes(message.quorum);
        }
        if (message.threshold.length !== 0) {
            writer.uint32(18).bytes(message.threshold);
        }
        if (message.veto_threshold.length !== 0) {
            writer.uint32(26).bytes(message.veto_threshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quorum = reader.bytes();
                    break;
                case 2:
                    message.threshold = reader.bytes();
                    break;
                case 3:
                    message.veto_threshold = reader.bytes();
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
            quorum: (0, helpers_1.isSet)(object.quorum) ? (0, helpers_1.bytesFromBase64)(object.quorum) : new Uint8Array(),
            threshold: (0, helpers_1.isSet)(object.threshold) ? (0, helpers_1.bytesFromBase64)(object.threshold) : new Uint8Array(),
            veto_threshold: (0, helpers_1.isSet)(object.veto_threshold) ? (0, helpers_1.bytesFromBase64)(object.veto_threshold) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.quorum !== undefined && (obj.quorum = (0, helpers_1.base64FromBytes)(message.quorum !== undefined ? message.quorum : new Uint8Array()));
        message.threshold !== undefined && (obj.threshold = (0, helpers_1.base64FromBytes)(message.threshold !== undefined ? message.threshold : new Uint8Array()));
        message.veto_threshold !== undefined && (obj.veto_threshold = (0, helpers_1.base64FromBytes)(message.veto_threshold !== undefined ? message.veto_threshold : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTallyParams();
        message.quorum = object.quorum ?? new Uint8Array();
        message.threshold = object.threshold ?? new Uint8Array();
        message.veto_threshold = object.veto_threshold ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseTallyParams();
        if (object.quorum !== undefined && object.quorum !== null) {
            message.quorum = (0, helpers_1.bytesFromBase64)(object.quorum);
        }
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = (0, helpers_1.bytesFromBase64)(object.threshold);
        }
        if (object.veto_threshold !== undefined && object.veto_threshold !== null) {
            message.veto_threshold = (0, helpers_1.bytesFromBase64)(object.veto_threshold);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.quorum = message.quorum ? (0, helpers_1.base64FromBytes)(message.quorum) : undefined;
        obj.threshold = message.threshold ? (0, helpers_1.base64FromBytes)(message.threshold) : undefined;
        obj.veto_threshold = message.veto_threshold ? (0, helpers_1.base64FromBytes)(message.veto_threshold) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TallyParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TallyParams",
            value: exports.TallyParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TallyParams.decode(message.value);
    },
    toProto(message) {
        return exports.TallyParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.TallyParams",
            value: exports.TallyParams.encode(message).finish()
        };
    }
};
const Cosmos_govv1beta1Content_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
            return distribution_1.CommunityPoolSpendProposal.decode(data.value);
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
            return distribution_1.CommunityPoolSpendProposalWithDeposit.decode(data.value);
        case "/cosmos.gov.v1beta1.TextProposal":
            return exports.TextProposal.decode(data.value);
        case "/cosmos.params.v1beta1.ParameterChangeProposal":
            return params_1.ParameterChangeProposal.decode(data.value);
        case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
            return upgrade_1.SoftwareUpgradeProposal.decode(data.value);
        case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
            return upgrade_1.CancelSoftwareUpgradeProposal.decode(data.value);
        case "/ibc.core.client.v1.ClientUpdateProposal":
            return client_1.ClientUpdateProposal.decode(data.value);
        case "/ibc.core.client.v1.UpgradeProposal":
            return client_1.UpgradeProposal.decode(data.value);
        default:
            return data;
    }
};
exports.Cosmos_govv1beta1Content_InterfaceDecoder = Cosmos_govv1beta1Content_InterfaceDecoder;
const Cosmos_govv1beta1Content_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/CommunityPoolSpendProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
                value: distribution_1.CommunityPoolSpendProposal.encode(distribution_1.CommunityPoolSpendProposal.fromPartial(distribution_1.CommunityPoolSpendProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/CommunityPoolSpendProposalWithDeposit":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
                value: distribution_1.CommunityPoolSpendProposalWithDeposit.encode(distribution_1.CommunityPoolSpendProposalWithDeposit.fromPartial(distribution_1.CommunityPoolSpendProposalWithDeposit.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/TextProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                value: exports.TextProposal.encode(exports.TextProposal.fromPartial(exports.TextProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/ParameterChangeProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
                value: params_1.ParameterChangeProposal.encode(params_1.ParameterChangeProposal.fromPartial(params_1.ParameterChangeProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/SoftwareUpgradeProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
                value: upgrade_1.SoftwareUpgradeProposal.encode(upgrade_1.SoftwareUpgradeProposal.fromPartial(upgrade_1.SoftwareUpgradeProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/CancelSoftwareUpgradeProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
                value: upgrade_1.CancelSoftwareUpgradeProposal.encode(upgrade_1.CancelSoftwareUpgradeProposal.fromPartial(upgrade_1.CancelSoftwareUpgradeProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/ClientUpdateProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
                value: client_1.ClientUpdateProposal.encode(client_1.ClientUpdateProposal.fromPartial(client_1.ClientUpdateProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/UpgradeProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/ibc.core.client.v1.UpgradeProposal",
                value: client_1.UpgradeProposal.encode(client_1.UpgradeProposal.fromPartial(client_1.UpgradeProposal.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.Cosmos_govv1beta1Content_FromAmino = Cosmos_govv1beta1Content_FromAmino;
const Cosmos_govv1beta1Content_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
            return {
                type: "cosmos-sdk/CommunityPoolSpendProposal",
                value: distribution_1.CommunityPoolSpendProposal.toAmino(distribution_1.CommunityPoolSpendProposal.decode(content.value, undefined))
            };
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
            return {
                type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
                value: distribution_1.CommunityPoolSpendProposalWithDeposit.toAmino(distribution_1.CommunityPoolSpendProposalWithDeposit.decode(content.value, undefined))
            };
        case "/cosmos.gov.v1beta1.TextProposal":
            return {
                type: "cosmos-sdk/TextProposal",
                value: exports.TextProposal.toAmino(exports.TextProposal.decode(content.value, undefined))
            };
        case "/cosmos.params.v1beta1.ParameterChangeProposal":
            return {
                type: "cosmos-sdk/ParameterChangeProposal",
                value: params_1.ParameterChangeProposal.toAmino(params_1.ParameterChangeProposal.decode(content.value, undefined))
            };
        case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
            return {
                type: "cosmos-sdk/SoftwareUpgradeProposal",
                value: upgrade_1.SoftwareUpgradeProposal.toAmino(upgrade_1.SoftwareUpgradeProposal.decode(content.value, undefined))
            };
        case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
            return {
                type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
                value: upgrade_1.CancelSoftwareUpgradeProposal.toAmino(upgrade_1.CancelSoftwareUpgradeProposal.decode(content.value, undefined))
            };
        case "/ibc.core.client.v1.ClientUpdateProposal":
            return {
                type: "cosmos-sdk/ClientUpdateProposal",
                value: client_1.ClientUpdateProposal.toAmino(client_1.ClientUpdateProposal.decode(content.value, undefined))
            };
        case "/ibc.core.client.v1.UpgradeProposal":
            return {
                type: "cosmos-sdk/UpgradeProposal",
                value: client_1.UpgradeProposal.toAmino(client_1.UpgradeProposal.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.Cosmos_govv1beta1Content_ToAmino = Cosmos_govv1beta1Content_ToAmino;
//# sourceMappingURL=gov.js.map
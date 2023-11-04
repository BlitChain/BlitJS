//@ts-nocheck
import { Coin } from "../../base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
export const protobufPackage = "cosmos.gov.v1";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export var VoteOption;
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
})(VoteOption || (VoteOption = {}));
export const VoteOptionSDKType = VoteOption;
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object) {
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
export function voteOptionToJSON(object) {
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
/** ProposalStatus enumerates the valid statuses of a proposal. */
export var ProposalStatus;
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
})(ProposalStatus || (ProposalStatus = {}));
export const ProposalStatusSDKType = ProposalStatus;
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object) {
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
export function proposalStatusToJSON(object) {
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
function createBaseWeightedVoteOption() {
    return {
        option: 0,
        weight: ""
    };
}
export const WeightedVoteOption = {
    typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
    encode(message, writer = BinaryWriter.create()) {
        if (message.option !== 0) {
            writer.uint32(8).int32(message.option);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedVoteOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.option = reader.int32();
                    break;
                case 2:
                    message.weight = reader.string();
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
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            weight: isSet(object.weight) ? String(object.weight) : ""
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
    fromSDK(object) {
        return {
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            weight: object?.weight
        };
    },
    toSDK(message) {
        const obj = {};
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        obj.weight = message.weight;
        return obj;
    },
    fromAmino(object) {
        return {
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            weight: object.weight
        };
    },
    toAmino(message) {
        const obj = {};
        obj.option = message.option;
        obj.weight = message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return WeightedVoteOption.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/WeightedVoteOption",
            value: WeightedVoteOption.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return WeightedVoteOption.decode(message.value);
    },
    toProto(message) {
        return WeightedVoteOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
            value: WeightedVoteOption.encode(message).finish()
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
export const Deposit = {
    typeUrl: "/cosmos.gov.v1.Deposit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
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
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            depositor: object?.depositor,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.depositor = message.depositor;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            depositor: object.depositor,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.depositor = message.depositor;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Deposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/Deposit",
            value: Deposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Deposit.decode(message.value);
    },
    toProto(message) {
        return Deposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.Deposit",
            value: Deposit.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        id: BigInt(0),
        messages: [],
        status: 0,
        final_tally_result: undefined,
        submit_time: undefined,
        deposit_end_time: undefined,
        total_deposit: [],
        voting_start_time: undefined,
        voting_end_time: undefined,
        metadata: "",
        title: "",
        summary: "",
        proposer: ""
    };
}
export const Proposal = {
    typeUrl: "/cosmos.gov.v1.Proposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.final_tally_result !== undefined) {
            TallyResult.encode(message.final_tally_result, writer.uint32(34).fork()).ldelim();
        }
        if (message.submit_time !== undefined) {
            Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
        }
        if (message.deposit_end_time !== undefined) {
            Timestamp.encode(toTimestamp(message.deposit_end_time), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.total_deposit) {
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.voting_start_time !== undefined) {
            Timestamp.encode(toTimestamp(message.voting_start_time), writer.uint32(66).fork()).ldelim();
        }
        if (message.voting_end_time !== undefined) {
            Timestamp.encode(toTimestamp(message.voting_end_time), writer.uint32(74).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(82).string(message.metadata);
        }
        if (message.title !== "") {
            writer.uint32(90).string(message.title);
        }
        if (message.summary !== "") {
            writer.uint32(98).string(message.summary);
        }
        if (message.proposer !== "") {
            writer.uint32(106).string(message.proposer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.final_tally_result = TallyResult.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.submit_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.deposit_end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.total_deposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.voting_start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.voting_end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.metadata = reader.string();
                    break;
                case 11:
                    message.title = reader.string();
                    break;
                case 12:
                    message.summary = reader.string();
                    break;
                case 13:
                    message.proposer = reader.string();
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
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => Any.fromJSON(e)) : [],
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
            final_tally_result: isSet(object.final_tally_result) ? TallyResult.fromJSON(object.final_tally_result) : undefined,
            submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
            deposit_end_time: isSet(object.deposit_end_time) ? fromJsonTimestamp(object.deposit_end_time) : undefined,
            total_deposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e) => Coin.fromJSON(e)) : [],
            voting_start_time: isSet(object.voting_start_time) ? fromJsonTimestamp(object.voting_start_time) : undefined,
            voting_end_time: isSet(object.voting_end_time) ? fromJsonTimestamp(object.voting_end_time) : undefined,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            title: isSet(object.title) ? String(object.title) : "",
            summary: isSet(object.summary) ? String(object.summary) : "",
            proposer: isSet(object.proposer) ? String(object.proposer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
        message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? TallyResult.toJSON(message.final_tally_result) : undefined);
        message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
        message.deposit_end_time !== undefined && (obj.deposit_end_time = message.deposit_end_time.toISOString());
        if (message.total_deposit) {
            obj.total_deposit = message.total_deposit.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_deposit = [];
        }
        message.voting_start_time !== undefined && (obj.voting_start_time = message.voting_start_time.toISOString());
        message.voting_end_time !== undefined && (obj.voting_end_time = message.voting_end_time.toISOString());
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.title !== undefined && (obj.title = message.title);
        message.summary !== undefined && (obj.summary = message.summary);
        message.proposer !== undefined && (obj.proposer = message.proposer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
        message.status = object.status ?? 0;
        message.final_tally_result = object.final_tally_result !== undefined && object.final_tally_result !== null ? TallyResult.fromPartial(object.final_tally_result) : undefined;
        message.submit_time = object.submit_time ?? undefined;
        message.deposit_end_time = object.deposit_end_time ?? undefined;
        message.total_deposit = object.total_deposit?.map(e => Coin.fromPartial(e)) || [];
        message.voting_start_time = object.voting_start_time ?? undefined;
        message.voting_end_time = object.voting_end_time ?? undefined;
        message.metadata = object.metadata ?? "";
        message.title = object.title ?? "";
        message.summary = object.summary ?? "";
        message.proposer = object.proposer ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => Any.fromSDK(e)) : [],
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
            final_tally_result: object.final_tally_result ? TallyResult.fromSDK(object.final_tally_result) : undefined,
            submit_time: object.submit_time ? Timestamp.fromSDK(object.submit_time) : undefined,
            deposit_end_time: object.deposit_end_time ? Timestamp.fromSDK(object.deposit_end_time) : undefined,
            total_deposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e) => Coin.fromSDK(e)) : [],
            voting_start_time: object.voting_start_time ? Timestamp.fromSDK(object.voting_start_time) : undefined,
            voting_end_time: object.voting_end_time ? Timestamp.fromSDK(object.voting_end_time) : undefined,
            metadata: object?.metadata,
            title: object?.title,
            summary: object?.summary,
            proposer: object?.proposer
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toSDK(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
        message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? TallyResult.toSDK(message.final_tally_result) : undefined);
        message.submit_time !== undefined && (obj.submit_time = message.submit_time ? Timestamp.toSDK(message.submit_time) : undefined);
        message.deposit_end_time !== undefined && (obj.deposit_end_time = message.deposit_end_time ? Timestamp.toSDK(message.deposit_end_time) : undefined);
        if (message.total_deposit) {
            obj.total_deposit = message.total_deposit.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_deposit = [];
        }
        message.voting_start_time !== undefined && (obj.voting_start_time = message.voting_start_time ? Timestamp.toSDK(message.voting_start_time) : undefined);
        message.voting_end_time !== undefined && (obj.voting_end_time = message.voting_end_time ? Timestamp.toSDK(message.voting_end_time) : undefined);
        obj.metadata = message.metadata;
        obj.title = message.title;
        obj.summary = message.summary;
        obj.proposer = message.proposer;
        return obj;
    },
    fromAmino(object) {
        return {
            id: BigInt(object.id),
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => Any.fromAmino(e)) : [],
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
            final_tally_result: object?.final_tally_result ? TallyResult.fromAmino(object.final_tally_result) : undefined,
            submit_time: object?.submit_time,
            deposit_end_time: object?.deposit_end_time,
            total_deposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e) => Coin.fromAmino(e)) : [],
            voting_start_time: object?.voting_start_time,
            voting_end_time: object?.voting_end_time,
            metadata: object.metadata,
            title: object.title,
            summary: object.summary,
            proposer: object.proposer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        obj.status = message.status;
        obj.final_tally_result = message.final_tally_result ? TallyResult.toAmino(message.final_tally_result) : undefined;
        obj.submit_time = message.submit_time;
        obj.deposit_end_time = message.deposit_end_time;
        if (message.total_deposit) {
            obj.total_deposit = message.total_deposit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_deposit = [];
        }
        obj.voting_start_time = message.voting_start_time;
        obj.voting_end_time = message.voting_end_time;
        obj.metadata = message.metadata;
        obj.title = message.title;
        obj.summary = message.summary;
        obj.proposer = message.proposer;
        return obj;
    },
    fromAminoMsg(object) {
        return Proposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/Proposal",
            value: Proposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Proposal.decode(message.value);
    },
    toProto(message) {
        return Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.Proposal",
            value: Proposal.encode(message).finish()
        };
    }
};
function createBaseTallyResult() {
    return {
        yes_count: "",
        abstain_count: "",
        no_count: "",
        no_with_veto_count: ""
    };
}
export const TallyResult = {
    typeUrl: "/cosmos.gov.v1.TallyResult",
    encode(message, writer = BinaryWriter.create()) {
        if (message.yes_count !== "") {
            writer.uint32(10).string(message.yes_count);
        }
        if (message.abstain_count !== "") {
            writer.uint32(18).string(message.abstain_count);
        }
        if (message.no_count !== "") {
            writer.uint32(26).string(message.no_count);
        }
        if (message.no_with_veto_count !== "") {
            writer.uint32(34).string(message.no_with_veto_count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yes_count = reader.string();
                    break;
                case 2:
                    message.abstain_count = reader.string();
                    break;
                case 3:
                    message.no_count = reader.string();
                    break;
                case 4:
                    message.no_with_veto_count = reader.string();
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
            yes_count: isSet(object.yes_count) ? String(object.yes_count) : "",
            abstain_count: isSet(object.abstain_count) ? String(object.abstain_count) : "",
            no_count: isSet(object.no_count) ? String(object.no_count) : "",
            no_with_veto_count: isSet(object.no_with_veto_count) ? String(object.no_with_veto_count) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.yes_count !== undefined && (obj.yes_count = message.yes_count);
        message.abstain_count !== undefined && (obj.abstain_count = message.abstain_count);
        message.no_count !== undefined && (obj.no_count = message.no_count);
        message.no_with_veto_count !== undefined && (obj.no_with_veto_count = message.no_with_veto_count);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTallyResult();
        message.yes_count = object.yes_count ?? "";
        message.abstain_count = object.abstain_count ?? "";
        message.no_count = object.no_count ?? "";
        message.no_with_veto_count = object.no_with_veto_count ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            yes_count: object?.yes_count,
            abstain_count: object?.abstain_count,
            no_count: object?.no_count,
            no_with_veto_count: object?.no_with_veto_count
        };
    },
    toSDK(message) {
        const obj = {};
        obj.yes_count = message.yes_count;
        obj.abstain_count = message.abstain_count;
        obj.no_count = message.no_count;
        obj.no_with_veto_count = message.no_with_veto_count;
        return obj;
    },
    fromAmino(object) {
        return {
            yes_count: object.yes_count,
            abstain_count: object.abstain_count,
            no_count: object.no_count,
            no_with_veto_count: object.no_with_veto_count
        };
    },
    toAmino(message) {
        const obj = {};
        obj.yes_count = message.yes_count;
        obj.abstain_count = message.abstain_count;
        obj.no_count = message.no_count;
        obj.no_with_veto_count = message.no_with_veto_count;
        return obj;
    },
    fromAminoMsg(object) {
        return TallyResult.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/TallyResult",
            value: TallyResult.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TallyResult.decode(message.value);
    },
    toProto(message) {
        return TallyResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.TallyResult",
            value: TallyResult.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        proposal_id: BigInt(0),
        voter: "",
        options: [],
        metadata: ""
    };
}
export const Vote = {
    typeUrl: "/cosmos.gov.v1.Vote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        for (const v of message.options) {
            WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(42).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                case 4:
                    message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.metadata = reader.string();
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            voter: isSet(object.voter) ? String(object.voter) : "",
            options: Array.isArray(object?.options) ? object.options.map((e) => WeightedVoteOption.fromJSON(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        if (message.options) {
            obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            voter: object?.voter,
            options: Array.isArray(object?.options) ? object.options.map((e) => WeightedVoteOption.fromSDK(e)) : [],
            metadata: object?.metadata
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.voter = message.voter;
        if (message.options) {
            obj.options = message.options.map(e => e ? WeightedVoteOption.toSDK(e) : undefined);
        }
        else {
            obj.options = [];
        }
        obj.metadata = message.metadata;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            voter: object.voter,
            options: Array.isArray(object?.options) ? object.options.map((e) => WeightedVoteOption.fromAmino(e)) : [],
            metadata: object.metadata
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.voter = message.voter;
        if (message.options) {
            obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
        }
        else {
            obj.options = [];
        }
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return Vote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/Vote",
            value: Vote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Vote.decode(message.value);
    },
    toProto(message) {
        return Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.Vote",
            value: Vote.encode(message).finish()
        };
    }
};
function createBaseDepositParams() {
    return {
        min_deposit: [],
        max_deposit_period: undefined
    };
}
export const DepositParams = {
    typeUrl: "/cosmos.gov.v1.DepositParams",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.min_deposit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.max_deposit_period !== undefined) {
            Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.min_deposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.max_deposit_period = Duration.decode(reader, reader.uint32());
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
            min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e) => Coin.fromJSON(e)) : [],
            max_deposit_period: isSet(object.max_deposit_period) ? Duration.fromJSON(object.max_deposit_period) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.min_deposit) {
            obj.min_deposit = message.min_deposit.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        message.max_deposit_period !== undefined && (obj.max_deposit_period = message.max_deposit_period ? Duration.toJSON(message.max_deposit_period) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDepositParams();
        message.min_deposit = object.min_deposit?.map(e => Coin.fromPartial(e)) || [];
        message.max_deposit_period = object.max_deposit_period !== undefined && object.max_deposit_period !== null ? Duration.fromPartial(object.max_deposit_period) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e) => Coin.fromSDK(e)) : [],
            max_deposit_period: object.max_deposit_period ? Duration.fromSDK(object.max_deposit_period) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.min_deposit) {
            obj.min_deposit = message.min_deposit.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        message.max_deposit_period !== undefined && (obj.max_deposit_period = message.max_deposit_period ? Duration.toSDK(message.max_deposit_period) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e) => Coin.fromAmino(e)) : [],
            max_deposit_period: object?.max_deposit_period ? Duration.fromAmino(object.max_deposit_period) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.min_deposit) {
            obj.min_deposit = message.min_deposit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        obj.max_deposit_period = message.max_deposit_period ? Duration.toAmino(message.max_deposit_period) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DepositParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/DepositParams",
            value: DepositParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DepositParams.decode(message.value);
    },
    toProto(message) {
        return DepositParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.DepositParams",
            value: DepositParams.encode(message).finish()
        };
    }
};
function createBaseVotingParams() {
    return {
        voting_period: undefined
    };
}
export const VotingParams = {
    typeUrl: "/cosmos.gov.v1.VotingParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.voting_period !== undefined) {
            Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVotingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voting_period = Duration.decode(reader, reader.uint32());
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
            voting_period: isSet(object.voting_period) ? Duration.fromJSON(object.voting_period) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toJSON(message.voting_period) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVotingParams();
        message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? Duration.fromPartial(object.voting_period) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            voting_period: object.voting_period ? Duration.fromSDK(object.voting_period) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toSDK(message.voting_period) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            voting_period: object?.voting_period ? Duration.fromAmino(object.voting_period) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.voting_period = message.voting_period ? Duration.toAmino(message.voting_period) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return VotingParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/VotingParams",
            value: VotingParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return VotingParams.decode(message.value);
    },
    toProto(message) {
        return VotingParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.VotingParams",
            value: VotingParams.encode(message).finish()
        };
    }
};
function createBaseTallyParams() {
    return {
        quorum: "",
        threshold: "",
        veto_threshold: ""
    };
}
export const TallyParams = {
    typeUrl: "/cosmos.gov.v1.TallyParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.quorum !== "") {
            writer.uint32(10).string(message.quorum);
        }
        if (message.threshold !== "") {
            writer.uint32(18).string(message.threshold);
        }
        if (message.veto_threshold !== "") {
            writer.uint32(26).string(message.veto_threshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quorum = reader.string();
                    break;
                case 2:
                    message.threshold = reader.string();
                    break;
                case 3:
                    message.veto_threshold = reader.string();
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
            quorum: isSet(object.quorum) ? String(object.quorum) : "",
            threshold: isSet(object.threshold) ? String(object.threshold) : "",
            veto_threshold: isSet(object.veto_threshold) ? String(object.veto_threshold) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.quorum !== undefined && (obj.quorum = message.quorum);
        message.threshold !== undefined && (obj.threshold = message.threshold);
        message.veto_threshold !== undefined && (obj.veto_threshold = message.veto_threshold);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTallyParams();
        message.quorum = object.quorum ?? "";
        message.threshold = object.threshold ?? "";
        message.veto_threshold = object.veto_threshold ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            quorum: object?.quorum,
            threshold: object?.threshold,
            veto_threshold: object?.veto_threshold
        };
    },
    toSDK(message) {
        const obj = {};
        obj.quorum = message.quorum;
        obj.threshold = message.threshold;
        obj.veto_threshold = message.veto_threshold;
        return obj;
    },
    fromAmino(object) {
        return {
            quorum: object.quorum,
            threshold: object.threshold,
            veto_threshold: object.veto_threshold
        };
    },
    toAmino(message) {
        const obj = {};
        obj.quorum = message.quorum;
        obj.threshold = message.threshold;
        obj.veto_threshold = message.veto_threshold;
        return obj;
    },
    fromAminoMsg(object) {
        return TallyParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/TallyParams",
            value: TallyParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TallyParams.decode(message.value);
    },
    toProto(message) {
        return TallyParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.TallyParams",
            value: TallyParams.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        min_deposit: [],
        max_deposit_period: undefined,
        voting_period: undefined,
        quorum: "",
        threshold: "",
        veto_threshold: "",
        min_initial_deposit_ratio: "",
        burn_vote_quorum: false,
        burn_proposal_deposit_prevote: false,
        burn_vote_veto: false
    };
}
export const Params = {
    typeUrl: "/cosmos.gov.v1.Params",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.min_deposit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.max_deposit_period !== undefined) {
            Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
        }
        if (message.voting_period !== undefined) {
            Duration.encode(message.voting_period, writer.uint32(26).fork()).ldelim();
        }
        if (message.quorum !== "") {
            writer.uint32(34).string(message.quorum);
        }
        if (message.threshold !== "") {
            writer.uint32(42).string(message.threshold);
        }
        if (message.veto_threshold !== "") {
            writer.uint32(50).string(message.veto_threshold);
        }
        if (message.min_initial_deposit_ratio !== "") {
            writer.uint32(58).string(message.min_initial_deposit_ratio);
        }
        if (message.burn_vote_quorum === true) {
            writer.uint32(104).bool(message.burn_vote_quorum);
        }
        if (message.burn_proposal_deposit_prevote === true) {
            writer.uint32(112).bool(message.burn_proposal_deposit_prevote);
        }
        if (message.burn_vote_veto === true) {
            writer.uint32(120).bool(message.burn_vote_veto);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.min_deposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.max_deposit_period = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voting_period = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.quorum = reader.string();
                    break;
                case 5:
                    message.threshold = reader.string();
                    break;
                case 6:
                    message.veto_threshold = reader.string();
                    break;
                case 7:
                    message.min_initial_deposit_ratio = reader.string();
                    break;
                case 13:
                    message.burn_vote_quorum = reader.bool();
                    break;
                case 14:
                    message.burn_proposal_deposit_prevote = reader.bool();
                    break;
                case 15:
                    message.burn_vote_veto = reader.bool();
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
            min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e) => Coin.fromJSON(e)) : [],
            max_deposit_period: isSet(object.max_deposit_period) ? Duration.fromJSON(object.max_deposit_period) : undefined,
            voting_period: isSet(object.voting_period) ? Duration.fromJSON(object.voting_period) : undefined,
            quorum: isSet(object.quorum) ? String(object.quorum) : "",
            threshold: isSet(object.threshold) ? String(object.threshold) : "",
            veto_threshold: isSet(object.veto_threshold) ? String(object.veto_threshold) : "",
            min_initial_deposit_ratio: isSet(object.min_initial_deposit_ratio) ? String(object.min_initial_deposit_ratio) : "",
            burn_vote_quorum: isSet(object.burn_vote_quorum) ? Boolean(object.burn_vote_quorum) : false,
            burn_proposal_deposit_prevote: isSet(object.burn_proposal_deposit_prevote) ? Boolean(object.burn_proposal_deposit_prevote) : false,
            burn_vote_veto: isSet(object.burn_vote_veto) ? Boolean(object.burn_vote_veto) : false
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.min_deposit) {
            obj.min_deposit = message.min_deposit.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        message.max_deposit_period !== undefined && (obj.max_deposit_period = message.max_deposit_period ? Duration.toJSON(message.max_deposit_period) : undefined);
        message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toJSON(message.voting_period) : undefined);
        message.quorum !== undefined && (obj.quorum = message.quorum);
        message.threshold !== undefined && (obj.threshold = message.threshold);
        message.veto_threshold !== undefined && (obj.veto_threshold = message.veto_threshold);
        message.min_initial_deposit_ratio !== undefined && (obj.min_initial_deposit_ratio = message.min_initial_deposit_ratio);
        message.burn_vote_quorum !== undefined && (obj.burn_vote_quorum = message.burn_vote_quorum);
        message.burn_proposal_deposit_prevote !== undefined && (obj.burn_proposal_deposit_prevote = message.burn_proposal_deposit_prevote);
        message.burn_vote_veto !== undefined && (obj.burn_vote_veto = message.burn_vote_veto);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.min_deposit = object.min_deposit?.map(e => Coin.fromPartial(e)) || [];
        message.max_deposit_period = object.max_deposit_period !== undefined && object.max_deposit_period !== null ? Duration.fromPartial(object.max_deposit_period) : undefined;
        message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? Duration.fromPartial(object.voting_period) : undefined;
        message.quorum = object.quorum ?? "";
        message.threshold = object.threshold ?? "";
        message.veto_threshold = object.veto_threshold ?? "";
        message.min_initial_deposit_ratio = object.min_initial_deposit_ratio ?? "";
        message.burn_vote_quorum = object.burn_vote_quorum ?? false;
        message.burn_proposal_deposit_prevote = object.burn_proposal_deposit_prevote ?? false;
        message.burn_vote_veto = object.burn_vote_veto ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e) => Coin.fromSDK(e)) : [],
            max_deposit_period: object.max_deposit_period ? Duration.fromSDK(object.max_deposit_period) : undefined,
            voting_period: object.voting_period ? Duration.fromSDK(object.voting_period) : undefined,
            quorum: object?.quorum,
            threshold: object?.threshold,
            veto_threshold: object?.veto_threshold,
            min_initial_deposit_ratio: object?.min_initial_deposit_ratio,
            burn_vote_quorum: object?.burn_vote_quorum,
            burn_proposal_deposit_prevote: object?.burn_proposal_deposit_prevote,
            burn_vote_veto: object?.burn_vote_veto
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.min_deposit) {
            obj.min_deposit = message.min_deposit.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        message.max_deposit_period !== undefined && (obj.max_deposit_period = message.max_deposit_period ? Duration.toSDK(message.max_deposit_period) : undefined);
        message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toSDK(message.voting_period) : undefined);
        obj.quorum = message.quorum;
        obj.threshold = message.threshold;
        obj.veto_threshold = message.veto_threshold;
        obj.min_initial_deposit_ratio = message.min_initial_deposit_ratio;
        obj.burn_vote_quorum = message.burn_vote_quorum;
        obj.burn_proposal_deposit_prevote = message.burn_proposal_deposit_prevote;
        obj.burn_vote_veto = message.burn_vote_veto;
        return obj;
    },
    fromAmino(object) {
        return {
            min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e) => Coin.fromAmino(e)) : [],
            max_deposit_period: object?.max_deposit_period ? Duration.fromAmino(object.max_deposit_period) : undefined,
            voting_period: object?.voting_period ? Duration.fromAmino(object.voting_period) : undefined,
            quorum: object.quorum,
            threshold: object.threshold,
            veto_threshold: object.veto_threshold,
            min_initial_deposit_ratio: object.min_initial_deposit_ratio,
            burn_vote_quorum: object.burn_vote_quorum,
            burn_proposal_deposit_prevote: object.burn_proposal_deposit_prevote,
            burn_vote_veto: object.burn_vote_veto
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.min_deposit) {
            obj.min_deposit = message.min_deposit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        obj.max_deposit_period = message.max_deposit_period ? Duration.toAmino(message.max_deposit_period) : undefined;
        obj.voting_period = message.voting_period ? Duration.toAmino(message.voting_period) : undefined;
        obj.quorum = message.quorum;
        obj.threshold = message.threshold;
        obj.veto_threshold = message.veto_threshold;
        obj.min_initial_deposit_ratio = message.min_initial_deposit_ratio;
        obj.burn_vote_quorum = message.burn_vote_quorum;
        obj.burn_proposal_deposit_prevote = message.burn_proposal_deposit_prevote;
        obj.burn_vote_veto = message.burn_vote_veto;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=gov.js.map
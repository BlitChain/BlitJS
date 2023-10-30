//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
/** VoteOption enumerates the valid vote options for a given proposal. */
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
/** ProposalStatus defines proposal statuses. */
export var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when persisted. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_SUBMITTED"] = 1] = "PROPOSAL_STATUS_SUBMITTED";
    /** PROPOSAL_STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_CLOSED"] = 2] = "PROPOSAL_STATUS_CLOSED";
    /** PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group was modified before the final tally. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ABORTED"] = 3] = "PROPOSAL_STATUS_ABORTED";
    /**
     * PROPOSAL_STATUS_WITHDRAWN - A proposal can be deleted before the voting start time by the owner. When this happens the final status
     * is Withdrawn.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_WITHDRAWN"] = 4] = "PROPOSAL_STATUS_WITHDRAWN";
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
        case "PROPOSAL_STATUS_SUBMITTED":
            return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
        case 2:
        case "PROPOSAL_STATUS_CLOSED":
            return ProposalStatus.PROPOSAL_STATUS_CLOSED;
        case 3:
        case "PROPOSAL_STATUS_ABORTED":
            return ProposalStatus.PROPOSAL_STATUS_ABORTED;
        case 4:
        case "PROPOSAL_STATUS_WITHDRAWN":
            return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
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
        case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
            return "PROPOSAL_STATUS_SUBMITTED";
        case ProposalStatus.PROPOSAL_STATUS_CLOSED:
            return "PROPOSAL_STATUS_CLOSED";
        case ProposalStatus.PROPOSAL_STATUS_ABORTED:
            return "PROPOSAL_STATUS_ABORTED";
        case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
            return "PROPOSAL_STATUS_WITHDRAWN";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ProposalResult defines types of proposal results. */
export var ProposalResult;
(function (ProposalResult) {
    /** PROPOSAL_RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_RESULT_UNSPECIFIED";
    /** PROPOSAL_RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_UNFINALIZED"] = 1] = "PROPOSAL_RESULT_UNFINALIZED";
    /** PROPOSAL_RESULT_ACCEPTED - Final result of the tally */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_ACCEPTED"] = 2] = "PROPOSAL_RESULT_ACCEPTED";
    /** PROPOSAL_RESULT_REJECTED - Final result of the tally */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_REJECTED"] = 3] = "PROPOSAL_RESULT_REJECTED";
    ProposalResult[ProposalResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalResult || (ProposalResult = {}));
export const ProposalResultSDKType = ProposalResult;
export const ProposalResultAmino = ProposalResult;
export function proposalResultFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_RESULT_UNSPECIFIED":
            return ProposalResult.PROPOSAL_RESULT_UNSPECIFIED;
        case 1:
        case "PROPOSAL_RESULT_UNFINALIZED":
            return ProposalResult.PROPOSAL_RESULT_UNFINALIZED;
        case 2:
        case "PROPOSAL_RESULT_ACCEPTED":
            return ProposalResult.PROPOSAL_RESULT_ACCEPTED;
        case 3:
        case "PROPOSAL_RESULT_REJECTED":
            return ProposalResult.PROPOSAL_RESULT_REJECTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalResult.UNRECOGNIZED;
    }
}
export function proposalResultToJSON(object) {
    switch (object) {
        case ProposalResult.PROPOSAL_RESULT_UNSPECIFIED:
            return "PROPOSAL_RESULT_UNSPECIFIED";
        case ProposalResult.PROPOSAL_RESULT_UNFINALIZED:
            return "PROPOSAL_RESULT_UNFINALIZED";
        case ProposalResult.PROPOSAL_RESULT_ACCEPTED:
            return "PROPOSAL_RESULT_ACCEPTED";
        case ProposalResult.PROPOSAL_RESULT_REJECTED:
            return "PROPOSAL_RESULT_REJECTED";
        case ProposalResult.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ProposalExecutorResult defines types of proposal executor results. */
export var ProposalExecutorResult;
(function (ProposalExecutorResult) {
    /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_NOT_RUN"] = 1] = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_SUCCESS"] = 2] = "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_FAILURE"] = 3] = "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    ProposalExecutorResult[ProposalExecutorResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalExecutorResult || (ProposalExecutorResult = {}));
export const ProposalExecutorResultSDKType = ProposalExecutorResult;
export const ProposalExecutorResultAmino = ProposalExecutorResult;
export function proposalExecutorResultFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
        case 1:
        case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
        case 2:
        case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
        case 3:
        case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalExecutorResult.UNRECOGNIZED;
    }
}
export function proposalExecutorResultToJSON(object) {
    switch (object) {
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
            return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
            return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
            return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
            return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
        case ProposalExecutorResult.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMember() {
    return {
        address: "",
        weight: "",
        metadata: "",
        added_at: new Date()
    };
}
export const Member = {
    typeUrl: "/cosmos.group.v1.Member",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.added_at !== undefined) {
            Timestamp.encode(toTimestamp(message.added_at), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.added_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            weight: isSet(object.weight) ? String(object.weight) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            added_at: isSet(object.added_at) ? fromJsonTimestamp(object.added_at) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.weight !== undefined && (obj.weight = message.weight);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.added_at !== undefined && (obj.added_at = message.added_at.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMember();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        message.metadata = object.metadata ?? "";
        message.added_at = object.added_at ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            weight: object?.weight,
            metadata: object?.metadata,
            added_at: object.added_at ? Timestamp.fromSDK(object.added_at) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.weight = message.weight;
        obj.metadata = message.metadata;
        message.added_at !== undefined && (obj.added_at = message.added_at ? Timestamp.toSDK(message.added_at) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            weight: object.weight,
            metadata: object.metadata,
            added_at: object.added_at
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.weight = message.weight;
        obj.metadata = message.metadata;
        obj.added_at = message.added_at;
        return obj;
    },
    fromAminoMsg(object) {
        return Member.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Member",
            value: Member.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Member.decode(message.value);
    },
    toProto(message) {
        return Member.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.Member",
            value: Member.encode(message).finish()
        };
    }
};
function createBaseMembers() {
    return {
        members: []
    };
}
export const Members = {
    typeUrl: "/cosmos.group.v1.Members",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.members) {
            Member.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(Member.decode(reader, reader.uint32()));
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
            members: Array.isArray(object?.members) ? object.members.map((e) => Member.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMembers();
        message.members = object.members?.map(e => Member.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            members: Array.isArray(object?.members) ? object.members.map((e) => Member.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toSDK(e) : undefined);
        }
        else {
            obj.members = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            members: Array.isArray(object?.members) ? object.members.map((e) => Member.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Members.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Members",
            value: Members.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Members.decode(message.value);
    },
    toProto(message) {
        return Members.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.Members",
            value: Members.encode(message).finish()
        };
    }
};
function createBaseThresholdDecisionPolicy() {
    return {
        $typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
        threshold: "",
        windows: undefined
    };
}
export const ThresholdDecisionPolicy = {
    typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
    encode(message, writer = BinaryWriter.create()) {
        if (message.threshold !== "") {
            writer.uint32(10).string(message.threshold);
        }
        if (message.windows !== undefined) {
            DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseThresholdDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.string();
                    break;
                case 2:
                    message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
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
            threshold: isSet(object.threshold) ? String(object.threshold) : "",
            windows: isSet(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.threshold !== undefined && (obj.threshold = message.threshold);
        message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseThresholdDecisionPolicy();
        message.threshold = object.threshold ?? "";
        message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            threshold: object?.threshold,
            windows: object.windows ? DecisionPolicyWindows.fromSDK(object.windows) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.threshold = message.threshold;
        message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toSDK(message.windows) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            threshold: object.threshold,
            windows: object?.windows ? DecisionPolicyWindows.fromAmino(object.windows) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.threshold = message.threshold;
        obj.windows = message.windows ? DecisionPolicyWindows.toAmino(message.windows) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ThresholdDecisionPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ThresholdDecisionPolicy",
            value: ThresholdDecisionPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ThresholdDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return ThresholdDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
            value: ThresholdDecisionPolicy.encode(message).finish()
        };
    }
};
function createBasePercentageDecisionPolicy() {
    return {
        $typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
        percentage: "",
        windows: undefined
    };
}
export const PercentageDecisionPolicy = {
    typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
    encode(message, writer = BinaryWriter.create()) {
        if (message.percentage !== "") {
            writer.uint32(10).string(message.percentage);
        }
        if (message.windows !== undefined) {
            DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePercentageDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.percentage = reader.string();
                    break;
                case 2:
                    message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
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
            percentage: isSet(object.percentage) ? String(object.percentage) : "",
            windows: isSet(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.percentage !== undefined && (obj.percentage = message.percentage);
        message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePercentageDecisionPolicy();
        message.percentage = object.percentage ?? "";
        message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            percentage: object?.percentage,
            windows: object.windows ? DecisionPolicyWindows.fromSDK(object.windows) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.percentage = message.percentage;
        message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toSDK(message.windows) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            percentage: object.percentage,
            windows: object?.windows ? DecisionPolicyWindows.fromAmino(object.windows) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.percentage = message.percentage;
        obj.windows = message.windows ? DecisionPolicyWindows.toAmino(message.windows) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PercentageDecisionPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PercentageDecisionPolicy",
            value: PercentageDecisionPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PercentageDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return PercentageDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
            value: PercentageDecisionPolicy.encode(message).finish()
        };
    }
};
function createBaseDecisionPolicyWindows() {
    return {
        voting_period: Duration.fromPartial({}),
        min_execution_period: Duration.fromPartial({})
    };
}
export const DecisionPolicyWindows = {
    typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
    encode(message, writer = BinaryWriter.create()) {
        if (message.voting_period !== undefined) {
            Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
        }
        if (message.min_execution_period !== undefined) {
            Duration.encode(message.min_execution_period, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecisionPolicyWindows();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voting_period = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.min_execution_period = Duration.decode(reader, reader.uint32());
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
            voting_period: isSet(object.voting_period) ? Duration.fromJSON(object.voting_period) : undefined,
            min_execution_period: isSet(object.min_execution_period) ? Duration.fromJSON(object.min_execution_period) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toJSON(message.voting_period) : undefined);
        message.min_execution_period !== undefined && (obj.min_execution_period = message.min_execution_period ? Duration.toJSON(message.min_execution_period) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDecisionPolicyWindows();
        message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? Duration.fromPartial(object.voting_period) : undefined;
        message.min_execution_period = object.min_execution_period !== undefined && object.min_execution_period !== null ? Duration.fromPartial(object.min_execution_period) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            voting_period: object.voting_period ? Duration.fromSDK(object.voting_period) : undefined,
            min_execution_period: object.min_execution_period ? Duration.fromSDK(object.min_execution_period) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toSDK(message.voting_period) : undefined);
        message.min_execution_period !== undefined && (obj.min_execution_period = message.min_execution_period ? Duration.toSDK(message.min_execution_period) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            voting_period: object?.voting_period ? Duration.fromAmino(object.voting_period) : undefined,
            min_execution_period: object?.min_execution_period ? Duration.fromAmino(object.min_execution_period) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.voting_period = message.voting_period ? Duration.toAmino(message.voting_period) : undefined;
        obj.min_execution_period = message.min_execution_period ? Duration.toAmino(message.min_execution_period) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DecisionPolicyWindows.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DecisionPolicyWindows",
            value: DecisionPolicyWindows.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DecisionPolicyWindows.decode(message.value);
    },
    toProto(message) {
        return DecisionPolicyWindows.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
            value: DecisionPolicyWindows.encode(message).finish()
        };
    }
};
function createBaseGroupInfo() {
    return {
        id: BigInt(0),
        admin: "",
        metadata: "",
        version: BigInt(0),
        total_weight: "",
        created_at: new Date()
    };
}
export const GroupInfo = {
    typeUrl: "/cosmos.group.v1.GroupInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(32).uint64(message.version);
        }
        if (message.total_weight !== "") {
            writer.uint32(42).string(message.total_weight);
        }
        if (message.created_at !== undefined) {
            Timestamp.encode(toTimestamp(message.created_at), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.version = reader.uint64();
                    break;
                case 5:
                    message.total_weight = reader.string();
                    break;
                case 6:
                    message.created_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            total_weight: isSet(object.total_weight) ? String(object.total_weight) : "",
            created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.admin !== undefined && (obj.admin = message.admin);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        message.total_weight !== undefined && (obj.total_weight = message.total_weight);
        message.created_at !== undefined && (obj.created_at = message.created_at.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGroupInfo();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.admin = object.admin ?? "";
        message.metadata = object.metadata ?? "";
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.total_weight = object.total_weight ?? "";
        message.created_at = object.created_at ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id,
            admin: object?.admin,
            metadata: object?.metadata,
            version: object?.version,
            total_weight: object?.total_weight,
            created_at: object.created_at ? Timestamp.fromSDK(object.created_at) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        obj.admin = message.admin;
        obj.metadata = message.metadata;
        obj.version = message.version;
        obj.total_weight = message.total_weight;
        message.created_at !== undefined && (obj.created_at = message.created_at ? Timestamp.toSDK(message.created_at) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            id: BigInt(object.id),
            admin: object.admin,
            metadata: object.metadata,
            version: BigInt(object.version),
            total_weight: object.total_weight,
            created_at: object.created_at
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.admin = message.admin;
        obj.metadata = message.metadata;
        obj.version = message.version ? message.version.toString() : undefined;
        obj.total_weight = message.total_weight;
        obj.created_at = message.created_at;
        return obj;
    },
    fromAminoMsg(object) {
        return GroupInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GroupInfo",
            value: GroupInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GroupInfo.decode(message.value);
    },
    toProto(message) {
        return GroupInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.GroupInfo",
            value: GroupInfo.encode(message).finish()
        };
    }
};
function createBaseGroupMember() {
    return {
        group_id: BigInt(0),
        member: undefined
    };
}
export const GroupMember = {
    typeUrl: "/cosmos.group.v1.GroupMember",
    encode(message, writer = BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.member !== undefined) {
            Member.encode(message.member, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
                    break;
                case 2:
                    message.member = Member.decode(reader, reader.uint32());
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
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            member: isSet(object.member) ? Member.fromJSON(object.member) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.member !== undefined && (obj.member = message.member ? Member.toJSON(message.member) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGroupMember();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.member = object.member !== undefined && object.member !== null ? Member.fromPartial(object.member) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            group_id: object?.group_id,
            member: object.member ? Member.fromSDK(object.member) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.group_id;
        message.member !== undefined && (obj.member = message.member ? Member.toSDK(message.member) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            group_id: BigInt(object.group_id),
            member: object?.member ? Member.fromAmino(object.member) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.member = message.member ? Member.toAmino(message.member) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GroupMember.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GroupMember",
            value: GroupMember.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GroupMember.decode(message.value);
    },
    toProto(message) {
        return GroupMember.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.GroupMember",
            value: GroupMember.encode(message).finish()
        };
    }
};
function createBaseGroupPolicyInfo() {
    return {
        address: "",
        group_id: BigInt(0),
        admin: "",
        metadata: "",
        version: BigInt(0),
        decision_policy: undefined,
        created_at: new Date()
    };
}
export const GroupPolicyInfo = {
    typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.group_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.group_id);
        }
        if (message.admin !== "") {
            writer.uint32(26).string(message.admin);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(40).uint64(message.version);
        }
        if (message.decision_policy !== undefined) {
            Any.encode(message.decision_policy, writer.uint32(50).fork()).ldelim();
        }
        if (message.created_at !== undefined) {
            Timestamp.encode(toTimestamp(message.created_at), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupPolicyInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.group_id = reader.uint64();
                    break;
                case 3:
                    message.admin = reader.string();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.version = reader.uint64();
                    break;
                case 6:
                    message.decision_policy = Cosmos_groupDecisionPolicy_InterfaceDecoder(reader);
                    break;
                case 7:
                    message.created_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            admin: isSet(object.admin) ? String(object.admin) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined,
            created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.admin !== undefined && (obj.admin = message.admin);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toJSON(message.decision_policy) : undefined);
        message.created_at !== undefined && (obj.created_at = message.created_at.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGroupPolicyInfo();
        message.address = object.address ?? "";
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.admin = object.admin ?? "";
        message.metadata = object.metadata ?? "";
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? Any.fromPartial(object.decision_policy) : undefined;
        message.created_at = object.created_at ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            group_id: object?.group_id,
            admin: object?.admin,
            metadata: object?.metadata,
            version: object?.version,
            decision_policy: object.decision_policy ? Any.fromSDK(object.decision_policy) : undefined,
            created_at: object.created_at ? Timestamp.fromSDK(object.created_at) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.group_id = message.group_id;
        obj.admin = message.admin;
        obj.metadata = message.metadata;
        obj.version = message.version;
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toSDK(message.decision_policy) : undefined);
        message.created_at !== undefined && (obj.created_at = message.created_at ? Timestamp.toSDK(message.created_at) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            group_id: BigInt(object.group_id),
            admin: object.admin,
            metadata: object.metadata,
            version: BigInt(object.version),
            decision_policy: object?.decision_policy ? Cosmos_groupDecisionPolicy_FromAmino(object.decision_policy) : undefined,
            created_at: object.created_at
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.admin = message.admin;
        obj.metadata = message.metadata;
        obj.version = message.version ? message.version.toString() : undefined;
        obj.decision_policy = message.decision_policy ? Cosmos_groupDecisionPolicy_ToAmino(message.decision_policy) : undefined;
        obj.created_at = message.created_at;
        return obj;
    },
    fromAminoMsg(object) {
        return GroupPolicyInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GroupPolicyInfo",
            value: GroupPolicyInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GroupPolicyInfo.decode(message.value);
    },
    toProto(message) {
        return GroupPolicyInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
            value: GroupPolicyInfo.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        id: BigInt(0),
        address: "",
        metadata: "",
        proposers: [],
        submit_time: new Date(),
        group_version: BigInt(0),
        group_policy_version: BigInt(0),
        status: 0,
        result: 0,
        final_tally_result: TallyResult.fromPartial({}),
        voting_period_end: new Date(),
        executor_result: 0,
        messages: []
    };
}
export const Proposal = {
    typeUrl: "/cosmos.group.v1.Proposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (const v of message.proposers) {
            writer.uint32(34).string(v);
        }
        if (message.submit_time !== undefined) {
            Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
        }
        if (message.group_version !== BigInt(0)) {
            writer.uint32(48).uint64(message.group_version);
        }
        if (message.group_policy_version !== BigInt(0)) {
            writer.uint32(56).uint64(message.group_policy_version);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.result !== 0) {
            writer.uint32(72).int32(message.result);
        }
        if (message.final_tally_result !== undefined) {
            TallyResult.encode(message.final_tally_result, writer.uint32(82).fork()).ldelim();
        }
        if (message.voting_period_end !== undefined) {
            Timestamp.encode(toTimestamp(message.voting_period_end), writer.uint32(90).fork()).ldelim();
        }
        if (message.executor_result !== 0) {
            writer.uint32(96).int32(message.executor_result);
        }
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(106).fork()).ldelim();
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
                    message.address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.proposers.push(reader.string());
                    break;
                case 5:
                    message.submit_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.group_version = reader.uint64();
                    break;
                case 7:
                    message.group_policy_version = reader.uint64();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.result = reader.int32();
                    break;
                case 10:
                    message.final_tally_result = TallyResult.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.voting_period_end = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.executor_result = reader.int32();
                    break;
                case 13:
                    message.messages.push(Any.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => String(e)) : [],
            submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
            group_version: isSet(object.group_version) ? BigInt(object.group_version.toString()) : BigInt(0),
            group_policy_version: isSet(object.group_policy_version) ? BigInt(object.group_policy_version.toString()) : BigInt(0),
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
            result: isSet(object.result) ? proposalResultFromJSON(object.result) : -1,
            final_tally_result: isSet(object.final_tally_result) ? TallyResult.fromJSON(object.final_tally_result) : undefined,
            voting_period_end: isSet(object.voting_period_end) ? fromJsonTimestamp(object.voting_period_end) : undefined,
            executor_result: isSet(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.address !== undefined && (obj.address = message.address);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = [];
        }
        message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
        message.group_version !== undefined && (obj.group_version = (message.group_version || BigInt(0)).toString());
        message.group_policy_version !== undefined && (obj.group_policy_version = (message.group_policy_version || BigInt(0)).toString());
        message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
        message.result !== undefined && (obj.result = proposalResultToJSON(message.result));
        message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? TallyResult.toJSON(message.final_tally_result) : undefined);
        message.voting_period_end !== undefined && (obj.voting_period_end = message.voting_period_end.toISOString());
        message.executor_result !== undefined && (obj.executor_result = proposalExecutorResultToJSON(message.executor_result));
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.address = object.address ?? "";
        message.metadata = object.metadata ?? "";
        message.proposers = object.proposers?.map(e => e) || [];
        message.submit_time = object.submit_time ?? undefined;
        message.group_version = object.group_version !== undefined && object.group_version !== null ? BigInt(object.group_version.toString()) : BigInt(0);
        message.group_policy_version = object.group_policy_version !== undefined && object.group_policy_version !== null ? BigInt(object.group_policy_version.toString()) : BigInt(0);
        message.status = object.status ?? 0;
        message.result = object.result ?? 0;
        message.final_tally_result = object.final_tally_result !== undefined && object.final_tally_result !== null ? TallyResult.fromPartial(object.final_tally_result) : undefined;
        message.voting_period_end = object.voting_period_end ?? undefined;
        message.executor_result = object.executor_result ?? 0;
        message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id,
            address: object?.address,
            metadata: object?.metadata,
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => e) : [],
            submit_time: object.submit_time ? Timestamp.fromSDK(object.submit_time) : undefined,
            group_version: object?.group_version,
            group_policy_version: object?.group_policy_version,
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
            result: isSet(object.result) ? proposalResultFromJSON(object.result) : -1,
            final_tally_result: object.final_tally_result ? TallyResult.fromSDK(object.final_tally_result) : undefined,
            voting_period_end: object.voting_period_end ? Timestamp.fromSDK(object.voting_period_end) : undefined,
            executor_result: isSet(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => Any.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        obj.address = message.address;
        obj.metadata = message.metadata;
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = [];
        }
        message.submit_time !== undefined && (obj.submit_time = message.submit_time ? Timestamp.toSDK(message.submit_time) : undefined);
        obj.group_version = message.group_version;
        obj.group_policy_version = message.group_policy_version;
        message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
        message.result !== undefined && (obj.result = proposalResultToJSON(message.result));
        message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? TallyResult.toSDK(message.final_tally_result) : undefined);
        message.voting_period_end !== undefined && (obj.voting_period_end = message.voting_period_end ? Timestamp.toSDK(message.voting_period_end) : undefined);
        message.executor_result !== undefined && (obj.executor_result = proposalExecutorResultToJSON(message.executor_result));
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toSDK(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            id: BigInt(object.id),
            address: object.address,
            metadata: object.metadata,
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => e) : [],
            submit_time: object.submit_time,
            group_version: BigInt(object.group_version),
            group_policy_version: BigInt(object.group_policy_version),
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
            result: isSet(object.result) ? proposalResultFromJSON(object.result) : -1,
            final_tally_result: object?.final_tally_result ? TallyResult.fromAmino(object.final_tally_result) : undefined,
            voting_period_end: object.voting_period_end,
            executor_result: isSet(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => Any.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.address = message.address;
        obj.metadata = message.metadata;
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = [];
        }
        obj.submit_time = message.submit_time;
        obj.group_version = message.group_version ? message.group_version.toString() : undefined;
        obj.group_policy_version = message.group_policy_version ? message.group_policy_version.toString() : undefined;
        obj.status = message.status;
        obj.result = message.result;
        obj.final_tally_result = message.final_tally_result ? TallyResult.toAmino(message.final_tally_result) : undefined;
        obj.voting_period_end = message.voting_period_end;
        obj.executor_result = message.executor_result;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Proposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Proposal",
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
            typeUrl: "/cosmos.group.v1.Proposal",
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
    typeUrl: "/cosmos.group.v1.TallyResult",
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
            type: "cosmos-sdk/TallyResult",
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
            typeUrl: "/cosmos.group.v1.TallyResult",
            value: TallyResult.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        proposal_id: BigInt(0),
        voter: "",
        option: 0,
        metadata: "",
        submit_time: new Date()
    };
}
export const Vote = {
    typeUrl: "/cosmos.group.v1.Vote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.submit_time !== undefined) {
            Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
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
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.submit_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        message.metadata = object.metadata ?? "";
        message.submit_time = object.submit_time ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            voter: object?.voter,
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            metadata: object?.metadata,
            submit_time: object.submit_time ? Timestamp.fromSDK(object.submit_time) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.voter = message.voter;
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        obj.metadata = message.metadata;
        message.submit_time !== undefined && (obj.submit_time = message.submit_time ? Timestamp.toSDK(message.submit_time) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            voter: object.voter,
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            metadata: object.metadata,
            submit_time: object.submit_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.voter = message.voter;
        obj.option = message.option;
        obj.metadata = message.metadata;
        obj.submit_time = message.submit_time;
        return obj;
    },
    fromAminoMsg(object) {
        return Vote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Vote",
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
            typeUrl: "/cosmos.group.v1.Vote",
            value: Vote.encode(message).finish()
        };
    }
};
export const Cosmos_groupDecisionPolicy_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.group.v1.ThresholdDecisionPolicy":
            return ThresholdDecisionPolicy.decode(data.value);
        case "/cosmos.group.v1.PercentageDecisionPolicy":
            return PercentageDecisionPolicy.decode(data.value);
        default:
            return data;
    }
};
export const Cosmos_groupDecisionPolicy_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/ThresholdDecisionPolicy":
            return Any.fromPartial({
                typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
                value: ThresholdDecisionPolicy.encode(ThresholdDecisionPolicy.fromPartial(ThresholdDecisionPolicy.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/PercentageDecisionPolicy":
            return Any.fromPartial({
                typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
                value: PercentageDecisionPolicy.encode(PercentageDecisionPolicy.fromPartial(PercentageDecisionPolicy.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const Cosmos_groupDecisionPolicy_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.group.v1.ThresholdDecisionPolicy":
            return {
                type: "cosmos-sdk/ThresholdDecisionPolicy",
                value: ThresholdDecisionPolicy.toAmino(ThresholdDecisionPolicy.decode(content.value))
            };
        case "/cosmos.group.v1.PercentageDecisionPolicy":
            return {
                type: "cosmos-sdk/PercentageDecisionPolicy",
                value: PercentageDecisionPolicy.toAmino(PercentageDecisionPolicy.decode(content.value))
            };
        default:
            return Any.toAmino(content);
    }
};
//# sourceMappingURL=types.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_groupv1DecisionPolicy_ToAmino = exports.Cosmos_groupv1DecisionPolicy_FromAmino = exports.Cosmos_groupv1DecisionPolicy_InterfaceDecoder = exports.Vote = exports.TallyResult = exports.Proposal = exports.GroupPolicyInfo = exports.GroupMember = exports.GroupInfo = exports.DecisionPolicyWindows = exports.PercentageDecisionPolicy = exports.ThresholdDecisionPolicy = exports.MemberRequest = exports.Member = exports.proposalExecutorResultToJSON = exports.proposalExecutorResultFromJSON = exports.ProposalExecutorResultAmino = exports.ProposalExecutorResultSDKType = exports.ProposalExecutorResult = exports.proposalStatusToJSON = exports.proposalStatusFromJSON = exports.ProposalStatusAmino = exports.ProposalStatusSDKType = exports.ProposalStatus = exports.voteOptionToJSON = exports.voteOptionFromJSON = exports.VoteOptionAmino = exports.VoteOptionSDKType = exports.VoteOption = exports.protobufPackage = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.group.v1";
/** VoteOption enumerates the valid vote options for a given proposal. */
var VoteOption;
(function (VoteOption) {
    /**
     * VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines an unspecified vote option which will
     * return an error.
     */
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
/** ProposalStatus defines proposal statuses. */
var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when submitted. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_SUBMITTED"] = 1] = "PROPOSAL_STATUS_SUBMITTED";
    /**
     * PROPOSAL_STATUS_ACCEPTED - Final status of a proposal when the final tally is done and the outcome
     * passes the group policy's decision policy.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ACCEPTED"] = 2] = "PROPOSAL_STATUS_ACCEPTED";
    /**
     * PROPOSAL_STATUS_REJECTED - Final status of a proposal when the final tally is done and the outcome
     * is rejected by the group policy's decision policy.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 3] = "PROPOSAL_STATUS_REJECTED";
    /**
     * PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group policy is modified before the
     * final tally.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ABORTED"] = 4] = "PROPOSAL_STATUS_ABORTED";
    /**
     * PROPOSAL_STATUS_WITHDRAWN - A proposal can be withdrawn before the voting start time by the owner.
     * When this happens the final status is Withdrawn.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_WITHDRAWN"] = 5] = "PROPOSAL_STATUS_WITHDRAWN";
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
        case "PROPOSAL_STATUS_SUBMITTED":
            return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
        case 2:
        case "PROPOSAL_STATUS_ACCEPTED":
            return ProposalStatus.PROPOSAL_STATUS_ACCEPTED;
        case 3:
        case "PROPOSAL_STATUS_REJECTED":
            return ProposalStatus.PROPOSAL_STATUS_REJECTED;
        case 4:
        case "PROPOSAL_STATUS_ABORTED":
            return ProposalStatus.PROPOSAL_STATUS_ABORTED;
        case 5:
        case "PROPOSAL_STATUS_WITHDRAWN":
            return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
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
        case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
            return "PROPOSAL_STATUS_SUBMITTED";
        case ProposalStatus.PROPOSAL_STATUS_ACCEPTED:
            return "PROPOSAL_STATUS_ACCEPTED";
        case ProposalStatus.PROPOSAL_STATUS_REJECTED:
            return "PROPOSAL_STATUS_REJECTED";
        case ProposalStatus.PROPOSAL_STATUS_ABORTED:
            return "PROPOSAL_STATUS_ABORTED";
        case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
            return "PROPOSAL_STATUS_WITHDRAWN";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.proposalStatusToJSON = proposalStatusToJSON;
/** ProposalExecutorResult defines types of proposal executor results. */
var ProposalExecutorResult;
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
})(ProposalExecutorResult || (exports.ProposalExecutorResult = ProposalExecutorResult = {}));
exports.ProposalExecutorResultSDKType = ProposalExecutorResult;
exports.ProposalExecutorResultAmino = ProposalExecutorResult;
function proposalExecutorResultFromJSON(object) {
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
exports.proposalExecutorResultFromJSON = proposalExecutorResultFromJSON;
function proposalExecutorResultToJSON(object) {
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
exports.proposalExecutorResultToJSON = proposalExecutorResultToJSON;
function createBaseMember() {
    return {
        address: "",
        weight: "",
        metadata: "",
        added_at: new Date()
    };
}
exports.Member = {
    typeUrl: "/cosmos.group.v1.Member",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.added_at), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.added_at = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            weight: (0, helpers_1.isSet)(object.weight) ? String(object.weight) : "",
            metadata: (0, helpers_1.isSet)(object.metadata) ? String(object.metadata) : "",
            added_at: (0, helpers_1.isSet)(object.added_at) ? (0, helpers_1.fromJsonTimestamp)(object.added_at) : undefined
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
            added_at: object.added_at ? timestamp_1.Timestamp.fromSDK(object.added_at) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.weight = message.weight;
        obj.metadata = message.metadata;
        message.added_at !== undefined && (obj.added_at = message.added_at ? timestamp_1.Timestamp.toSDK(message.added_at) : undefined);
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
        return exports.Member.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Member",
            value: exports.Member.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Member.decode(message.value);
    },
    toProto(message) {
        return exports.Member.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.Member",
            value: exports.Member.encode(message).finish()
        };
    }
};
function createBaseMemberRequest() {
    return {
        address: "",
        weight: "",
        metadata: ""
    };
}
exports.MemberRequest = {
    typeUrl: "/cosmos.group.v1.MemberRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMemberRequest();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            weight: (0, helpers_1.isSet)(object.weight) ? String(object.weight) : "",
            metadata: (0, helpers_1.isSet)(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.weight !== undefined && (obj.weight = message.weight);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMemberRequest();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            weight: object?.weight,
            metadata: object?.metadata
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.weight = message.weight;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            weight: object.weight,
            metadata: object.metadata
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.weight = message.weight;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MemberRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MemberRequest",
            value: exports.MemberRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MemberRequest.decode(message.value);
    },
    toProto(message) {
        return exports.MemberRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MemberRequest",
            value: exports.MemberRequest.encode(message).finish()
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
exports.ThresholdDecisionPolicy = {
    typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.threshold !== "") {
            writer.uint32(10).string(message.threshold);
        }
        if (message.windows !== undefined) {
            exports.DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseThresholdDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.string();
                    break;
                case 2:
                    message.windows = exports.DecisionPolicyWindows.decode(reader, reader.uint32());
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
            threshold: (0, helpers_1.isSet)(object.threshold) ? String(object.threshold) : "",
            windows: (0, helpers_1.isSet)(object.windows) ? exports.DecisionPolicyWindows.fromJSON(object.windows) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.threshold !== undefined && (obj.threshold = message.threshold);
        message.windows !== undefined && (obj.windows = message.windows ? exports.DecisionPolicyWindows.toJSON(message.windows) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseThresholdDecisionPolicy();
        message.threshold = object.threshold ?? "";
        message.windows = object.windows !== undefined && object.windows !== null ? exports.DecisionPolicyWindows.fromPartial(object.windows) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            threshold: object?.threshold,
            windows: object.windows ? exports.DecisionPolicyWindows.fromSDK(object.windows) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.threshold = message.threshold;
        message.windows !== undefined && (obj.windows = message.windows ? exports.DecisionPolicyWindows.toSDK(message.windows) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            threshold: object.threshold,
            windows: object?.windows ? exports.DecisionPolicyWindows.fromAmino(object.windows) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.threshold = message.threshold;
        obj.windows = message.windows ? exports.DecisionPolicyWindows.toAmino(message.windows) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ThresholdDecisionPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ThresholdDecisionPolicy",
            value: exports.ThresholdDecisionPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ThresholdDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.ThresholdDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
            value: exports.ThresholdDecisionPolicy.encode(message).finish()
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
exports.PercentageDecisionPolicy = {
    typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.percentage !== "") {
            writer.uint32(10).string(message.percentage);
        }
        if (message.windows !== undefined) {
            exports.DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePercentageDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.percentage = reader.string();
                    break;
                case 2:
                    message.windows = exports.DecisionPolicyWindows.decode(reader, reader.uint32());
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
            percentage: (0, helpers_1.isSet)(object.percentage) ? String(object.percentage) : "",
            windows: (0, helpers_1.isSet)(object.windows) ? exports.DecisionPolicyWindows.fromJSON(object.windows) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.percentage !== undefined && (obj.percentage = message.percentage);
        message.windows !== undefined && (obj.windows = message.windows ? exports.DecisionPolicyWindows.toJSON(message.windows) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePercentageDecisionPolicy();
        message.percentage = object.percentage ?? "";
        message.windows = object.windows !== undefined && object.windows !== null ? exports.DecisionPolicyWindows.fromPartial(object.windows) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            percentage: object?.percentage,
            windows: object.windows ? exports.DecisionPolicyWindows.fromSDK(object.windows) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.percentage = message.percentage;
        message.windows !== undefined && (obj.windows = message.windows ? exports.DecisionPolicyWindows.toSDK(message.windows) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            percentage: object.percentage,
            windows: object?.windows ? exports.DecisionPolicyWindows.fromAmino(object.windows) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.percentage = message.percentage;
        obj.windows = message.windows ? exports.DecisionPolicyWindows.toAmino(message.windows) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PercentageDecisionPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PercentageDecisionPolicy",
            value: exports.PercentageDecisionPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PercentageDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.PercentageDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
            value: exports.PercentageDecisionPolicy.encode(message).finish()
        };
    }
};
function createBaseDecisionPolicyWindows() {
    return {
        voting_period: duration_1.Duration.fromPartial({}),
        min_execution_period: duration_1.Duration.fromPartial({})
    };
}
exports.DecisionPolicyWindows = {
    typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.voting_period !== undefined) {
            duration_1.Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
        }
        if (message.min_execution_period !== undefined) {
            duration_1.Duration.encode(message.min_execution_period, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecisionPolicyWindows();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voting_period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.min_execution_period = duration_1.Duration.decode(reader, reader.uint32());
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
            voting_period: (0, helpers_1.isSet)(object.voting_period) ? duration_1.Duration.fromJSON(object.voting_period) : undefined,
            min_execution_period: (0, helpers_1.isSet)(object.min_execution_period) ? duration_1.Duration.fromJSON(object.min_execution_period) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.voting_period !== undefined && (obj.voting_period = message.voting_period ? duration_1.Duration.toJSON(message.voting_period) : undefined);
        message.min_execution_period !== undefined && (obj.min_execution_period = message.min_execution_period ? duration_1.Duration.toJSON(message.min_execution_period) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDecisionPolicyWindows();
        message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? duration_1.Duration.fromPartial(object.voting_period) : undefined;
        message.min_execution_period = object.min_execution_period !== undefined && object.min_execution_period !== null ? duration_1.Duration.fromPartial(object.min_execution_period) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            voting_period: object.voting_period ? duration_1.Duration.fromSDK(object.voting_period) : undefined,
            min_execution_period: object.min_execution_period ? duration_1.Duration.fromSDK(object.min_execution_period) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.voting_period !== undefined && (obj.voting_period = message.voting_period ? duration_1.Duration.toSDK(message.voting_period) : undefined);
        message.min_execution_period !== undefined && (obj.min_execution_period = message.min_execution_period ? duration_1.Duration.toSDK(message.min_execution_period) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            voting_period: object?.voting_period ? duration_1.Duration.fromAmino(object.voting_period) : undefined,
            min_execution_period: object?.min_execution_period ? duration_1.Duration.fromAmino(object.min_execution_period) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.voting_period = message.voting_period ? duration_1.Duration.toAmino(message.voting_period) : undefined;
        obj.min_execution_period = message.min_execution_period ? duration_1.Duration.toAmino(message.min_execution_period) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DecisionPolicyWindows.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DecisionPolicyWindows",
            value: exports.DecisionPolicyWindows.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DecisionPolicyWindows.decode(message.value);
    },
    toProto(message) {
        return exports.DecisionPolicyWindows.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
            value: exports.DecisionPolicyWindows.encode(message).finish()
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
exports.GroupInfo = {
    typeUrl: "/cosmos.group.v1.GroupInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.created_at), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.created_at = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            id: (0, helpers_1.isSet)(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            admin: (0, helpers_1.isSet)(object.admin) ? String(object.admin) : "",
            metadata: (0, helpers_1.isSet)(object.metadata) ? String(object.metadata) : "",
            version: (0, helpers_1.isSet)(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            total_weight: (0, helpers_1.isSet)(object.total_weight) ? String(object.total_weight) : "",
            created_at: (0, helpers_1.isSet)(object.created_at) ? (0, helpers_1.fromJsonTimestamp)(object.created_at) : undefined
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
            created_at: object.created_at ? timestamp_1.Timestamp.fromSDK(object.created_at) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        obj.admin = message.admin;
        obj.metadata = message.metadata;
        obj.version = message.version;
        obj.total_weight = message.total_weight;
        message.created_at !== undefined && (obj.created_at = message.created_at ? timestamp_1.Timestamp.toSDK(message.created_at) : undefined);
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
        return exports.GroupInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GroupInfo",
            value: exports.GroupInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GroupInfo.decode(message.value);
    },
    toProto(message) {
        return exports.GroupInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.GroupInfo",
            value: exports.GroupInfo.encode(message).finish()
        };
    }
};
function createBaseGroupMember() {
    return {
        group_id: BigInt(0),
        member: undefined
    };
}
exports.GroupMember = {
    typeUrl: "/cosmos.group.v1.GroupMember",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.member !== undefined) {
            exports.Member.encode(message.member, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
                    break;
                case 2:
                    message.member = exports.Member.decode(reader, reader.uint32());
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
            group_id: (0, helpers_1.isSet)(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            member: (0, helpers_1.isSet)(object.member) ? exports.Member.fromJSON(object.member) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.member !== undefined && (obj.member = message.member ? exports.Member.toJSON(message.member) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGroupMember();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.member = object.member !== undefined && object.member !== null ? exports.Member.fromPartial(object.member) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            group_id: object?.group_id,
            member: object.member ? exports.Member.fromSDK(object.member) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.group_id;
        message.member !== undefined && (obj.member = message.member ? exports.Member.toSDK(message.member) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            group_id: BigInt(object.group_id),
            member: object?.member ? exports.Member.fromAmino(object.member) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.member = message.member ? exports.Member.toAmino(message.member) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GroupMember.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GroupMember",
            value: exports.GroupMember.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GroupMember.decode(message.value);
    },
    toProto(message) {
        return exports.GroupMember.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.GroupMember",
            value: exports.GroupMember.encode(message).finish()
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
exports.GroupPolicyInfo = {
    typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            any_1.Any.encode(message.decision_policy, writer.uint32(50).fork()).ldelim();
        }
        if (message.created_at !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.created_at), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.decision_policy = (0, exports.Cosmos_groupv1DecisionPolicy_InterfaceDecoder)(reader);
                    break;
                case 7:
                    message.created_at = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            group_id: (0, helpers_1.isSet)(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            admin: (0, helpers_1.isSet)(object.admin) ? String(object.admin) : "",
            metadata: (0, helpers_1.isSet)(object.metadata) ? String(object.metadata) : "",
            version: (0, helpers_1.isSet)(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            decision_policy: (0, helpers_1.isSet)(object.decision_policy) ? any_1.Any.fromJSON(object.decision_policy) : undefined,
            created_at: (0, helpers_1.isSet)(object.created_at) ? (0, helpers_1.fromJsonTimestamp)(object.created_at) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.admin !== undefined && (obj.admin = message.admin);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? any_1.Any.toJSON(message.decision_policy) : undefined);
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
        message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? any_1.Any.fromPartial(object.decision_policy) : undefined;
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
            decision_policy: object.decision_policy ? any_1.Any.fromSDK(object.decision_policy) : undefined,
            created_at: object.created_at ? timestamp_1.Timestamp.fromSDK(object.created_at) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.group_id = message.group_id;
        obj.admin = message.admin;
        obj.metadata = message.metadata;
        obj.version = message.version;
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? any_1.Any.toSDK(message.decision_policy) : undefined);
        message.created_at !== undefined && (obj.created_at = message.created_at ? timestamp_1.Timestamp.toSDK(message.created_at) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            group_id: BigInt(object.group_id),
            admin: object.admin,
            metadata: object.metadata,
            version: BigInt(object.version),
            decision_policy: object?.decision_policy ? (0, exports.Cosmos_groupv1DecisionPolicy_FromAmino)(object.decision_policy) : undefined,
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
        obj.decision_policy = message.decision_policy ? (0, exports.Cosmos_groupv1DecisionPolicy_ToAmino)(message.decision_policy) : undefined;
        obj.created_at = message.created_at;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GroupPolicyInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GroupPolicyInfo",
            value: exports.GroupPolicyInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GroupPolicyInfo.decode(message.value);
    },
    toProto(message) {
        return exports.GroupPolicyInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
            value: exports.GroupPolicyInfo.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        id: BigInt(0),
        group_policy_address: "",
        metadata: "",
        proposers: [],
        submit_time: new Date(),
        group_version: BigInt(0),
        group_policy_version: BigInt(0),
        status: 0,
        final_tally_result: exports.TallyResult.fromPartial({}),
        voting_period_end: new Date(),
        executor_result: 0,
        messages: [],
        title: "",
        summary: ""
    };
}
exports.Proposal = {
    typeUrl: "/cosmos.group.v1.Proposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.group_policy_address !== "") {
            writer.uint32(18).string(message.group_policy_address);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (const v of message.proposers) {
            writer.uint32(34).string(v);
        }
        if (message.submit_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submit_time), writer.uint32(42).fork()).ldelim();
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
        if (message.final_tally_result !== undefined) {
            exports.TallyResult.encode(message.final_tally_result, writer.uint32(74).fork()).ldelim();
        }
        if (message.voting_period_end !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.voting_period_end), writer.uint32(82).fork()).ldelim();
        }
        if (message.executor_result !== 0) {
            writer.uint32(88).int32(message.executor_result);
        }
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.title !== "") {
            writer.uint32(106).string(message.title);
        }
        if (message.summary !== "") {
            writer.uint32(114).string(message.summary);
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
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.group_policy_address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.proposers.push(reader.string());
                    break;
                case 5:
                    message.submit_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
                    message.final_tally_result = exports.TallyResult.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.voting_period_end = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.executor_result = reader.int32();
                    break;
                case 12:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.title = reader.string();
                    break;
                case 14:
                    message.summary = reader.string();
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
            id: (0, helpers_1.isSet)(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            group_policy_address: (0, helpers_1.isSet)(object.group_policy_address) ? String(object.group_policy_address) : "",
            metadata: (0, helpers_1.isSet)(object.metadata) ? String(object.metadata) : "",
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => String(e)) : [],
            submit_time: (0, helpers_1.isSet)(object.submit_time) ? (0, helpers_1.fromJsonTimestamp)(object.submit_time) : undefined,
            group_version: (0, helpers_1.isSet)(object.group_version) ? BigInt(object.group_version.toString()) : BigInt(0),
            group_policy_version: (0, helpers_1.isSet)(object.group_policy_version) ? BigInt(object.group_policy_version.toString()) : BigInt(0),
            status: (0, helpers_1.isSet)(object.status) ? proposalStatusFromJSON(object.status) : -1,
            final_tally_result: (0, helpers_1.isSet)(object.final_tally_result) ? exports.TallyResult.fromJSON(object.final_tally_result) : undefined,
            voting_period_end: (0, helpers_1.isSet)(object.voting_period_end) ? (0, helpers_1.fromJsonTimestamp)(object.voting_period_end) : undefined,
            executor_result: (0, helpers_1.isSet)(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromJSON(e)) : [],
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            summary: (0, helpers_1.isSet)(object.summary) ? String(object.summary) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
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
        message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? exports.TallyResult.toJSON(message.final_tally_result) : undefined);
        message.voting_period_end !== undefined && (obj.voting_period_end = message.voting_period_end.toISOString());
        message.executor_result !== undefined && (obj.executor_result = proposalExecutorResultToJSON(message.executor_result));
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        message.title !== undefined && (obj.title = message.title);
        message.summary !== undefined && (obj.summary = message.summary);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.group_policy_address = object.group_policy_address ?? "";
        message.metadata = object.metadata ?? "";
        message.proposers = object.proposers?.map(e => e) || [];
        message.submit_time = object.submit_time ?? undefined;
        message.group_version = object.group_version !== undefined && object.group_version !== null ? BigInt(object.group_version.toString()) : BigInt(0);
        message.group_policy_version = object.group_policy_version !== undefined && object.group_policy_version !== null ? BigInt(object.group_policy_version.toString()) : BigInt(0);
        message.status = object.status ?? 0;
        message.final_tally_result = object.final_tally_result !== undefined && object.final_tally_result !== null ? exports.TallyResult.fromPartial(object.final_tally_result) : undefined;
        message.voting_period_end = object.voting_period_end ?? undefined;
        message.executor_result = object.executor_result ?? 0;
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        message.title = object.title ?? "";
        message.summary = object.summary ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id,
            group_policy_address: object?.group_policy_address,
            metadata: object?.metadata,
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => e) : [],
            submit_time: object.submit_time ? timestamp_1.Timestamp.fromSDK(object.submit_time) : undefined,
            group_version: object?.group_version,
            group_policy_version: object?.group_policy_version,
            status: (0, helpers_1.isSet)(object.status) ? proposalStatusFromJSON(object.status) : -1,
            final_tally_result: object.final_tally_result ? exports.TallyResult.fromSDK(object.final_tally_result) : undefined,
            voting_period_end: object.voting_period_end ? timestamp_1.Timestamp.fromSDK(object.voting_period_end) : undefined,
            executor_result: (0, helpers_1.isSet)(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromSDK(e)) : [],
            title: object?.title,
            summary: object?.summary
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        obj.group_policy_address = message.group_policy_address;
        obj.metadata = message.metadata;
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = [];
        }
        message.submit_time !== undefined && (obj.submit_time = message.submit_time ? timestamp_1.Timestamp.toSDK(message.submit_time) : undefined);
        obj.group_version = message.group_version;
        obj.group_policy_version = message.group_policy_version;
        message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
        message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? exports.TallyResult.toSDK(message.final_tally_result) : undefined);
        message.voting_period_end !== undefined && (obj.voting_period_end = message.voting_period_end ? timestamp_1.Timestamp.toSDK(message.voting_period_end) : undefined);
        message.executor_result !== undefined && (obj.executor_result = proposalExecutorResultToJSON(message.executor_result));
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        obj.title = message.title;
        obj.summary = message.summary;
        return obj;
    },
    fromAmino(object) {
        return {
            id: BigInt(object.id),
            group_policy_address: object.group_policy_address,
            metadata: object.metadata,
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => e) : [],
            submit_time: object.submit_time,
            group_version: BigInt(object.group_version),
            group_policy_version: BigInt(object.group_policy_version),
            status: (0, helpers_1.isSet)(object.status) ? proposalStatusFromJSON(object.status) : -1,
            final_tally_result: object?.final_tally_result ? exports.TallyResult.fromAmino(object.final_tally_result) : undefined,
            voting_period_end: object.voting_period_end,
            executor_result: (0, helpers_1.isSet)(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromAmino(e)) : [],
            title: object.title,
            summary: object.summary
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.group_policy_address = message.group_policy_address;
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
        obj.final_tally_result = message.final_tally_result ? exports.TallyResult.toAmino(message.final_tally_result) : undefined;
        obj.voting_period_end = message.voting_period_end;
        obj.executor_result = message.executor_result;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        obj.title = message.title;
        obj.summary = message.summary;
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
            typeUrl: "/cosmos.group.v1.Proposal",
            value: exports.Proposal.encode(message).finish()
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
exports.TallyResult = {
    typeUrl: "/cosmos.group.v1.TallyResult",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            yes_count: (0, helpers_1.isSet)(object.yes_count) ? String(object.yes_count) : "",
            abstain_count: (0, helpers_1.isSet)(object.abstain_count) ? String(object.abstain_count) : "",
            no_count: (0, helpers_1.isSet)(object.no_count) ? String(object.no_count) : "",
            no_with_veto_count: (0, helpers_1.isSet)(object.no_with_veto_count) ? String(object.no_with_veto_count) : ""
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
            typeUrl: "/cosmos.group.v1.TallyResult",
            value: exports.TallyResult.encode(message).finish()
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
exports.Vote = {
    typeUrl: "/cosmos.group.v1.Vote",
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
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.submit_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submit_time), writer.uint32(42).fork()).ldelim();
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
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.submit_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            metadata: (0, helpers_1.isSet)(object.metadata) ? String(object.metadata) : "",
            submit_time: (0, helpers_1.isSet)(object.submit_time) ? (0, helpers_1.fromJsonTimestamp)(object.submit_time) : undefined
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
            option: (0, helpers_1.isSet)(object.option) ? voteOptionFromJSON(object.option) : -1,
            metadata: object?.metadata,
            submit_time: object.submit_time ? timestamp_1.Timestamp.fromSDK(object.submit_time) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.voter = message.voter;
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        obj.metadata = message.metadata;
        message.submit_time !== undefined && (obj.submit_time = message.submit_time ? timestamp_1.Timestamp.toSDK(message.submit_time) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            voter: object.voter,
            option: (0, helpers_1.isSet)(object.option) ? voteOptionFromJSON(object.option) : -1,
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
            typeUrl: "/cosmos.group.v1.Vote",
            value: exports.Vote.encode(message).finish()
        };
    }
};
const Cosmos_groupv1DecisionPolicy_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.group.v1.ThresholdDecisionPolicy":
            return exports.ThresholdDecisionPolicy.decode(data.value);
        case "/cosmos.group.v1.PercentageDecisionPolicy":
            return exports.PercentageDecisionPolicy.decode(data.value);
        default:
            return data;
    }
};
exports.Cosmos_groupv1DecisionPolicy_InterfaceDecoder = Cosmos_groupv1DecisionPolicy_InterfaceDecoder;
const Cosmos_groupv1DecisionPolicy_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/ThresholdDecisionPolicy":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
                value: exports.ThresholdDecisionPolicy.encode(exports.ThresholdDecisionPolicy.fromPartial(exports.ThresholdDecisionPolicy.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/PercentageDecisionPolicy":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
                value: exports.PercentageDecisionPolicy.encode(exports.PercentageDecisionPolicy.fromPartial(exports.PercentageDecisionPolicy.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.Cosmos_groupv1DecisionPolicy_FromAmino = Cosmos_groupv1DecisionPolicy_FromAmino;
const Cosmos_groupv1DecisionPolicy_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.group.v1.ThresholdDecisionPolicy":
            return {
                type: "cosmos-sdk/ThresholdDecisionPolicy",
                value: exports.ThresholdDecisionPolicy.toAmino(exports.ThresholdDecisionPolicy.decode(content.value))
            };
        case "/cosmos.group.v1.PercentageDecisionPolicy":
            return {
                type: "cosmos-sdk/PercentageDecisionPolicy",
                value: exports.PercentageDecisionPolicy.toAmino(exports.PercentageDecisionPolicy.decode(content.value))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.Cosmos_groupv1DecisionPolicy_ToAmino = Cosmos_groupv1DecisionPolicy_ToAmino;
//# sourceMappingURL=types.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_govv1beta1Content_ToAmino = exports.Cosmos_govv1beta1Content_FromAmino = exports.Cosmos_govv1beta1Content_InterfaceDecoder = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgDepositResponse = exports.MsgDeposit = exports.MsgVoteWeightedResponse = exports.MsgVoteWeighted = exports.MsgVoteResponse = exports.MsgVote = exports.MsgExecLegacyContentResponse = exports.MsgExecLegacyContent = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = exports.protobufPackage = void 0;
//@ts-nocheck
const any_1 = require("../../../google/protobuf/any");
const coin_1 = require("../../base/v1beta1/coin");
const gov_1 = require("./gov");
const distribution_1 = require("../../distribution/v1beta1/distribution");
const gov_2 = require("../v1beta1/gov");
const params_1 = require("../../params/v1beta1/params");
const upgrade_1 = require("../../upgrade/v1beta1/upgrade");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.gov.v1";
function createBaseMsgSubmitProposal() {
    return {
        messages: [],
        initial_deposit: [],
        proposer: "",
        metadata: "",
        title: "",
        summary: ""
    };
}
exports.MsgSubmitProposal = {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.initial_deposit) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.proposer !== "") {
            writer.uint32(26).string(message.proposer);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.title !== "") {
            writer.uint32(42).string(message.title);
        }
        if (message.summary !== "") {
            writer.uint32(50).string(message.summary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.initial_deposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.proposer = reader.string();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
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
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromJSON(e)) : [],
            initial_deposit: Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            proposer: (0, helpers_1.isSet)(object.proposer) ? String(object.proposer) : "",
            metadata: (0, helpers_1.isSet)(object.metadata) ? String(object.metadata) : "",
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            summary: (0, helpers_1.isSet)(object.summary) ? String(object.summary) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        if (message.initial_deposit) {
            obj.initial_deposit = message.initial_deposit.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.initial_deposit = [];
        }
        message.proposer !== undefined && (obj.proposer = message.proposer);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.title !== undefined && (obj.title = message.title);
        message.summary !== undefined && (obj.summary = message.summary);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        message.initial_deposit = object.initial_deposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.proposer = object.proposer ?? "";
        message.metadata = object.metadata ?? "";
        message.title = object.title ?? "";
        message.summary = object.summary ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromSDK(e)) : [],
            initial_deposit: Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e) => coin_1.Coin.fromSDK(e)) : [],
            proposer: object?.proposer,
            metadata: object?.metadata,
            title: object?.title,
            summary: object?.summary
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        if (message.initial_deposit) {
            obj.initial_deposit = message.initial_deposit.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.initial_deposit = [];
        }
        obj.proposer = message.proposer;
        obj.metadata = message.metadata;
        obj.title = message.title;
        obj.summary = message.summary;
        return obj;
    },
    fromAmino(object) {
        return {
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromAmino(e)) : [],
            initial_deposit: Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e) => coin_1.Coin.fromAmino(e)) : [],
            proposer: object.proposer,
            metadata: object.metadata,
            title: object.title,
            summary: object.summary
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        if (message.initial_deposit) {
            obj.initial_deposit = message.initial_deposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_deposit = [];
        }
        obj.proposer = message.proposer;
        obj.metadata = message.metadata;
        obj.title = message.title;
        obj.summary = message.summary;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgSubmitProposal",
            value: exports.MsgSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
            value: exports.MsgSubmitProposal.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitProposalResponse() {
    return {
        proposal_id: BigInt(0)
    };
}
exports.MsgSubmitProposalResponse = {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposalResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
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
        const message = createBaseMsgSubmitProposalResponse();
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
        return exports.MsgSubmitProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgSubmitProposalResponse",
            value: exports.MsgSubmitProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgSubmitProposalResponse",
            value: exports.MsgSubmitProposalResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExecLegacyContent() {
    return {
        content: undefined,
        authority: ""
    };
}
exports.MsgExecLegacyContent = {
    typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.content !== undefined) {
            any_1.Any.encode(message.content, writer.uint32(10).fork()).ldelim();
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecLegacyContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = (0, exports.Cosmos_govv1beta1Content_InterfaceDecoder)(reader);
                    break;
                case 2:
                    message.authority = reader.string();
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
            content: (0, helpers_1.isSet)(object.content) ? any_1.Any.fromJSON(object.content) : undefined,
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined && (obj.content = message.content ? any_1.Any.toJSON(message.content) : undefined);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExecLegacyContent();
        message.content = object.content !== undefined && object.content !== null ? any_1.Any.fromPartial(object.content) : undefined;
        message.authority = object.authority ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            content: object.content ? any_1.Any.fromSDK(object.content) : undefined,
            authority: object?.authority
        };
    },
    toSDK(message) {
        const obj = {};
        message.content !== undefined && (obj.content = message.content ? any_1.Any.toSDK(message.content) : undefined);
        obj.authority = message.authority;
        return obj;
    },
    fromAmino(object) {
        return {
            content: object?.content ? (0, exports.Cosmos_govv1beta1Content_FromAmino)(object.content) : undefined,
            authority: object.authority
        };
    },
    toAmino(message) {
        const obj = {};
        obj.content = message.content ? (0, exports.Cosmos_govv1beta1Content_ToAmino)(message.content) : undefined;
        obj.authority = message.authority;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExecLegacyContent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgExecLegacyContent",
            value: exports.MsgExecLegacyContent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExecLegacyContent.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecLegacyContent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
            value: exports.MsgExecLegacyContent.encode(message).finish()
        };
    }
};
function createBaseMsgExecLegacyContentResponse() {
    return {};
}
exports.MsgExecLegacyContentResponse = {
    typeUrl: "/cosmos.gov.v1.MsgExecLegacyContentResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecLegacyContentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgExecLegacyContentResponse();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExecLegacyContentResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgExecLegacyContentResponse",
            value: exports.MsgExecLegacyContentResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExecLegacyContentResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecLegacyContentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgExecLegacyContentResponse",
            value: exports.MsgExecLegacyContentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgVote() {
    return {
        proposal_id: BigInt(0),
        voter: "",
        option: 0,
        metadata: ""
    };
}
exports.MsgVote = {
    typeUrl: "/cosmos.gov.v1.MsgVote",
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
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
            option: (0, helpers_1.isSet)(object.option) ? (0, gov_1.voteOptionFromJSON)(object.option) : -1,
            metadata: (0, helpers_1.isSet)(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = (0, gov_1.voteOptionToJSON)(message.option));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            voter: object?.voter,
            option: (0, helpers_1.isSet)(object.option) ? (0, gov_1.voteOptionFromJSON)(object.option) : -1,
            metadata: object?.metadata
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.voter = message.voter;
        message.option !== undefined && (obj.option = (0, gov_1.voteOptionToJSON)(message.option));
        obj.metadata = message.metadata;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            voter: object.voter,
            option: (0, helpers_1.isSet)(object.option) ? (0, gov_1.voteOptionFromJSON)(object.option) : -1,
            metadata: object.metadata
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.voter = message.voter;
        obj.option = message.option;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgVote",
            value: exports.MsgVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVote.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgVote",
            value: exports.MsgVote.encode(message).finish()
        };
    }
};
function createBaseMsgVoteResponse() {
    return {};
}
exports.MsgVoteResponse = {
    typeUrl: "/cosmos.gov.v1.MsgVoteResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgVoteResponse",
            value: exports.MsgVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgVoteResponse",
            value: exports.MsgVoteResponse.encode(message).finish()
        };
    }
};
function createBaseMsgVoteWeighted() {
    return {
        proposal_id: BigInt(0),
        voter: "",
        options: [],
        metadata: ""
    };
}
exports.MsgVoteWeighted = {
    typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        for (const v of message.options) {
            gov_1.WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeighted();
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
                    message.options.push(gov_1.WeightedVoteOption.decode(reader, reader.uint32()));
                    break;
                case 4:
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
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            voter: (0, helpers_1.isSet)(object.voter) ? String(object.voter) : "",
            options: Array.isArray(object?.options) ? object.options.map((e) => gov_1.WeightedVoteOption.fromJSON(e)) : [],
            metadata: (0, helpers_1.isSet)(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        if (message.options) {
            obj.options = message.options.map(e => e ? gov_1.WeightedVoteOption.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVoteWeighted();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.options = object.options?.map(e => gov_1.WeightedVoteOption.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            voter: object?.voter,
            options: Array.isArray(object?.options) ? object.options.map((e) => gov_1.WeightedVoteOption.fromSDK(e)) : [],
            metadata: object?.metadata
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.voter = message.voter;
        if (message.options) {
            obj.options = message.options.map(e => e ? gov_1.WeightedVoteOption.toSDK(e) : undefined);
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
            options: Array.isArray(object?.options) ? object.options.map((e) => gov_1.WeightedVoteOption.fromAmino(e)) : [],
            metadata: object.metadata
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.voter = message.voter;
        if (message.options) {
            obj.options = message.options.map(e => e ? gov_1.WeightedVoteOption.toAmino(e) : undefined);
        }
        else {
            obj.options = [];
        }
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteWeighted.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgVoteWeighted",
            value: exports.MsgVoteWeighted.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteWeighted.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteWeighted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
            value: exports.MsgVoteWeighted.encode(message).finish()
        };
    }
};
function createBaseMsgVoteWeightedResponse() {
    return {};
}
exports.MsgVoteWeightedResponse = {
    typeUrl: "/cosmos.gov.v1.MsgVoteWeightedResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeightedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgVoteWeightedResponse();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteWeightedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgVoteWeightedResponse",
            value: exports.MsgVoteWeightedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteWeightedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteWeightedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgVoteWeightedResponse",
            value: exports.MsgVoteWeightedResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeposit() {
    return {
        proposal_id: BigInt(0),
        depositor: "",
        amount: []
    };
}
exports.MsgDeposit = {
    typeUrl: "/cosmos.gov.v1.MsgDeposit",
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
        const message = createBaseMsgDeposit();
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
        const message = createBaseMsgDeposit();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.depositor = object.depositor ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            depositor: object?.depositor,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.depositor = message.depositor;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
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
        return exports.MsgDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgDeposit",
            value: exports.MsgDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgDeposit",
            value: exports.MsgDeposit.encode(message).finish()
        };
    }
};
function createBaseMsgDepositResponse() {
    return {};
}
exports.MsgDepositResponse = {
    typeUrl: "/cosmos.gov.v1.MsgDepositResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgDepositResponse",
            value: exports.MsgDepositResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDepositResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgDepositResponse",
            value: exports.MsgDepositResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: gov_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            gov_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : "",
            params: (0, helpers_1.isSet)(object.params) ? gov_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? gov_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? gov_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            authority: object?.authority,
            params: object.params ? gov_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.authority = message.authority;
        message.params !== undefined && (obj.params = message.params ? gov_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            authority: object.authority,
            params: object?.params ? gov_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.params = message.params ? gov_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/x/gov/v1/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/cosmos.gov.v1.MsgUpdateParamsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
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
            return gov_2.TextProposal.decode(data.value);
        case "/cosmos.params.v1beta1.ParameterChangeProposal":
            return params_1.ParameterChangeProposal.decode(data.value);
        case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
            return upgrade_1.SoftwareUpgradeProposal.decode(data.value);
        case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
            return upgrade_1.CancelSoftwareUpgradeProposal.decode(data.value);
        default:
            return data;
    }
};
exports.Cosmos_govv1beta1Content_InterfaceDecoder = Cosmos_govv1beta1Content_InterfaceDecoder;
const Cosmos_govv1beta1Content_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/v1/CommunityPoolSpendProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
                value: distribution_1.CommunityPoolSpendProposal.encode(distribution_1.CommunityPoolSpendProposal.fromPartial(distribution_1.CommunityPoolSpendProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/v1/CommunityPoolSpendProposalWithDeposit":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
                value: distribution_1.CommunityPoolSpendProposalWithDeposit.encode(distribution_1.CommunityPoolSpendProposalWithDeposit.fromPartial(distribution_1.CommunityPoolSpendProposalWithDeposit.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/TextProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                value: gov_2.TextProposal.encode(gov_2.TextProposal.fromPartial(gov_2.TextProposal.fromAmino(content.value))).finish()
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
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.Cosmos_govv1beta1Content_FromAmino = Cosmos_govv1beta1Content_FromAmino;
const Cosmos_govv1beta1Content_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
            return {
                type: "cosmos-sdk/v1/CommunityPoolSpendProposal",
                value: distribution_1.CommunityPoolSpendProposal.toAmino(distribution_1.CommunityPoolSpendProposal.decode(content.value))
            };
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
            return {
                type: "cosmos-sdk/v1/CommunityPoolSpendProposalWithDeposit",
                value: distribution_1.CommunityPoolSpendProposalWithDeposit.toAmino(distribution_1.CommunityPoolSpendProposalWithDeposit.decode(content.value))
            };
        case "/cosmos.gov.v1beta1.TextProposal":
            return {
                type: "cosmos-sdk/TextProposal",
                value: gov_2.TextProposal.toAmino(gov_2.TextProposal.decode(content.value))
            };
        case "/cosmos.params.v1beta1.ParameterChangeProposal":
            return {
                type: "cosmos-sdk/ParameterChangeProposal",
                value: params_1.ParameterChangeProposal.toAmino(params_1.ParameterChangeProposal.decode(content.value))
            };
        case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
            return {
                type: "cosmos-sdk/SoftwareUpgradeProposal",
                value: upgrade_1.SoftwareUpgradeProposal.toAmino(upgrade_1.SoftwareUpgradeProposal.decode(content.value))
            };
        case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
            return {
                type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
                value: upgrade_1.CancelSoftwareUpgradeProposal.toAmino(upgrade_1.CancelSoftwareUpgradeProposal.decode(content.value))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.Cosmos_govv1beta1Content_ToAmino = Cosmos_govv1beta1Content_ToAmino;
//# sourceMappingURL=tx.js.map
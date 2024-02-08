"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.group.v1";
function createBaseGenesisState() {
    return {
        group_seq: BigInt(0),
        groups: [],
        group_members: [],
        group_policy_seq: BigInt(0),
        group_policies: [],
        proposal_seq: BigInt(0),
        proposals: [],
        votes: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.group.v1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.group_seq !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_seq);
        }
        for (const v of message.groups) {
            types_1.GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.group_members) {
            types_1.GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.group_policy_seq !== BigInt(0)) {
            writer.uint32(32).uint64(message.group_policy_seq);
        }
        for (const v of message.group_policies) {
            types_1.GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.proposal_seq !== BigInt(0)) {
            writer.uint32(48).uint64(message.proposal_seq);
        }
        for (const v of message.proposals) {
            types_1.Proposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.votes) {
            types_1.Vote.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_seq = reader.uint64();
                    break;
                case 2:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.group_members.push(types_1.GroupMember.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.group_policy_seq = reader.uint64();
                    break;
                case 5:
                    message.group_policies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.proposal_seq = reader.uint64();
                    break;
                case 7:
                    message.proposals.push(types_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
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
            group_seq: (0, helpers_1.isSet)(object.group_seq) ? BigInt(object.group_seq.toString()) : BigInt(0),
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromJSON(e)) : [],
            group_members: Array.isArray(object?.group_members) ? object.group_members.map((e) => types_1.GroupMember.fromJSON(e)) : [],
            group_policy_seq: (0, helpers_1.isSet)(object.group_policy_seq) ? BigInt(object.group_policy_seq.toString()) : BigInt(0),
            group_policies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => types_1.GroupPolicyInfo.fromJSON(e)) : [],
            proposal_seq: (0, helpers_1.isSet)(object.proposal_seq) ? BigInt(object.proposal_seq.toString()) : BigInt(0),
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => types_1.Proposal.fromJSON(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_seq !== undefined && (obj.group_seq = (message.group_seq || BigInt(0)).toString());
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        if (message.group_members) {
            obj.group_members = message.group_members.map(e => e ? types_1.GroupMember.toJSON(e) : undefined);
        }
        else {
            obj.group_members = [];
        }
        message.group_policy_seq !== undefined && (obj.group_policy_seq = (message.group_policy_seq || BigInt(0)).toString());
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? types_1.GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        message.proposal_seq !== undefined && (obj.proposal_seq = (message.proposal_seq || BigInt(0)).toString());
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.group_seq = object.group_seq !== undefined && object.group_seq !== null ? BigInt(object.group_seq.toString()) : BigInt(0);
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromPartial(e)) || [];
        message.group_members = object.group_members?.map(e => types_1.GroupMember.fromPartial(e)) || [];
        message.group_policy_seq = object.group_policy_seq !== undefined && object.group_policy_seq !== null ? BigInt(object.group_policy_seq.toString()) : BigInt(0);
        message.group_policies = object.group_policies?.map(e => types_1.GroupPolicyInfo.fromPartial(e)) || [];
        message.proposal_seq = object.proposal_seq !== undefined && object.proposal_seq !== null ? BigInt(object.proposal_seq.toString()) : BigInt(0);
        message.proposals = object.proposals?.map(e => types_1.Proposal.fromPartial(e)) || [];
        message.votes = object.votes?.map(e => types_1.Vote.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.group_seq !== undefined && object.group_seq !== null) {
            message.group_seq = BigInt(object.group_seq);
        }
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromAmino(e)) || [];
        message.group_members = object.group_members?.map(e => types_1.GroupMember.fromAmino(e)) || [];
        if (object.group_policy_seq !== undefined && object.group_policy_seq !== null) {
            message.group_policy_seq = BigInt(object.group_policy_seq);
        }
        message.group_policies = object.group_policies?.map(e => types_1.GroupPolicyInfo.fromAmino(e)) || [];
        if (object.proposal_seq !== undefined && object.proposal_seq !== null) {
            message.proposal_seq = BigInt(object.proposal_seq);
        }
        message.proposals = object.proposals?.map(e => types_1.Proposal.fromAmino(e)) || [];
        message.votes = object.votes?.map(e => types_1.Vote.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_seq = message.group_seq ? message.group_seq.toString() : undefined;
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        if (message.group_members) {
            obj.group_members = message.group_members.map(e => e ? types_1.GroupMember.toAmino(e) : undefined);
        }
        else {
            obj.group_members = [];
        }
        obj.group_policy_seq = message.group_policy_seq ? message.group_policy_seq.toString() : undefined;
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? types_1.GroupPolicyInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        obj.proposal_seq = message.proposal_seq ? message.proposal_seq.toString() : undefined;
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
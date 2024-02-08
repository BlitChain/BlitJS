//@ts-nocheck
import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.group.v1";
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
export const GenesisState = {
    typeUrl: "/cosmos.group.v1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.group_seq !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_seq);
        }
        for (const v of message.groups) {
            GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.group_members) {
            GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.group_policy_seq !== BigInt(0)) {
            writer.uint32(32).uint64(message.group_policy_seq);
        }
        for (const v of message.group_policies) {
            GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.proposal_seq !== BigInt(0)) {
            writer.uint32(48).uint64(message.proposal_seq);
        }
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_seq = reader.uint64();
                    break;
                case 2:
                    message.groups.push(GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.group_members.push(GroupMember.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.group_policy_seq = reader.uint64();
                    break;
                case 5:
                    message.group_policies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.proposal_seq = reader.uint64();
                    break;
                case 7:
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
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
            group_seq: isSet(object.group_seq) ? BigInt(object.group_seq.toString()) : BigInt(0),
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => GroupInfo.fromJSON(e)) : [],
            group_members: Array.isArray(object?.group_members) ? object.group_members.map((e) => GroupMember.fromJSON(e)) : [],
            group_policy_seq: isSet(object.group_policy_seq) ? BigInt(object.group_policy_seq.toString()) : BigInt(0),
            group_policies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => GroupPolicyInfo.fromJSON(e)) : [],
            proposal_seq: isSet(object.proposal_seq) ? BigInt(object.proposal_seq.toString()) : BigInt(0),
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => Proposal.fromJSON(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_seq !== undefined && (obj.group_seq = (message.group_seq || BigInt(0)).toString());
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        if (message.group_members) {
            obj.group_members = message.group_members.map(e => e ? GroupMember.toJSON(e) : undefined);
        }
        else {
            obj.group_members = [];
        }
        message.group_policy_seq !== undefined && (obj.group_policy_seq = (message.group_policy_seq || BigInt(0)).toString());
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        message.proposal_seq !== undefined && (obj.proposal_seq = (message.proposal_seq || BigInt(0)).toString());
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.group_seq = object.group_seq !== undefined && object.group_seq !== null ? BigInt(object.group_seq.toString()) : BigInt(0);
        message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
        message.group_members = object.group_members?.map(e => GroupMember.fromPartial(e)) || [];
        message.group_policy_seq = object.group_policy_seq !== undefined && object.group_policy_seq !== null ? BigInt(object.group_policy_seq.toString()) : BigInt(0);
        message.group_policies = object.group_policies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
        message.proposal_seq = object.proposal_seq !== undefined && object.proposal_seq !== null ? BigInt(object.proposal_seq.toString()) : BigInt(0);
        message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
        message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.group_seq !== undefined && object.group_seq !== null) {
            message.group_seq = BigInt(object.group_seq);
        }
        message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
        message.group_members = object.group_members?.map(e => GroupMember.fromAmino(e)) || [];
        if (object.group_policy_seq !== undefined && object.group_policy_seq !== null) {
            message.group_policy_seq = BigInt(object.group_policy_seq);
        }
        message.group_policies = object.group_policies?.map(e => GroupPolicyInfo.fromAmino(e)) || [];
        if (object.proposal_seq !== undefined && object.proposal_seq !== null) {
            message.proposal_seq = BigInt(object.proposal_seq);
        }
        message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
        message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_seq = message.group_seq ? message.group_seq.toString() : undefined;
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        if (message.group_members) {
            obj.group_members = message.group_members.map(e => e ? GroupMember.toAmino(e) : undefined);
        }
        else {
            obj.group_members = [];
        }
        obj.group_policy_seq = message.group_policy_seq ? message.group_policy_seq.toString() : undefined;
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? GroupPolicyInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        obj.proposal_seq = message.proposal_seq ? message.proposal_seq.toString() : undefined;
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
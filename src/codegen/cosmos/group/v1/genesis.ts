//@ts-nocheck
import { GroupInfo, GroupInfoAmino, GroupInfoSDKType, GroupMember, GroupMemberAmino, GroupMemberSDKType, GroupPolicyInfo, GroupPolicyInfoAmino, GroupPolicyInfoSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.group.v1";
/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  group_seq: bigint;
  /** groups is the list of groups info. */
  groups: GroupInfo[];
  /** group_members is the list of groups members. */
  group_members: GroupMember[];
  /**
   * group_policy_seq is the group policy table orm.Sequence,
   * it is used to generate the next group policy account address.
   */
  group_policy_seq: bigint;
  /** group_policies is the list of group policies info. */
  group_policies: GroupPolicyInfo[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposal_seq: bigint;
  /** proposals is the list of proposals. */
  proposals: Proposal[];
  /** votes is the list of votes. */
  votes: Vote[];
}
export interface GenesisStateProtoMsg {
  type_url: "/cosmos.group.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the group module's genesis state. */
export interface GenesisStateAmino {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  group_seq?: string;
  /** groups is the list of groups info. */
  groups?: GroupInfoAmino[];
  /** group_members is the list of groups members. */
  group_members?: GroupMemberAmino[];
  /**
   * group_policy_seq is the group policy table orm.Sequence,
   * it is used to generate the next group policy account address.
   */
  group_policy_seq?: string;
  /** group_policies is the list of group policies info. */
  group_policies?: GroupPolicyInfoAmino[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposal_seq?: string;
  /** proposals is the list of proposals. */
  proposals?: ProposalAmino[];
  /** votes is the list of votes. */
  votes?: VoteAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the group module's genesis state. */
export interface GenesisStateSDKType {
  group_seq: bigint;
  groups: GroupInfoSDKType[];
  group_members: GroupMemberSDKType[];
  group_policy_seq: bigint;
  group_policies: GroupPolicyInfoSDKType[];
  proposal_seq: bigint;
  proposals: ProposalSDKType[];
  votes: VoteSDKType[];
}
function createBaseGenesisState(): GenesisState {
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
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.group_seq === "bigint" && Array.isArray(o.groups) && (!o.groups.length || GroupInfo.is(o.groups[0])) && Array.isArray(o.group_members) && (!o.group_members.length || GroupMember.is(o.group_members[0])) && typeof o.group_policy_seq === "bigint" && Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.is(o.group_policies[0])) && typeof o.proposal_seq === "bigint" && Array.isArray(o.proposals) && (!o.proposals.length || Proposal.is(o.proposals[0])) && Array.isArray(o.votes) && (!o.votes.length || Vote.is(o.votes[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.group_seq === "bigint" && Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isSDK(o.groups[0])) && Array.isArray(o.group_members) && (!o.group_members.length || GroupMember.isSDK(o.group_members[0])) && typeof o.group_policy_seq === "bigint" && Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.isSDK(o.group_policies[0])) && typeof o.proposal_seq === "bigint" && Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isSDK(o.proposals[0])) && Array.isArray(o.votes) && (!o.votes.length || Vote.isSDK(o.votes[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.group_seq === "bigint" && Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isAmino(o.groups[0])) && Array.isArray(o.group_members) && (!o.group_members.length || GroupMember.isAmino(o.group_members[0])) && typeof o.group_policy_seq === "bigint" && Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.isAmino(o.group_policies[0])) && typeof o.proposal_seq === "bigint" && Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isAmino(o.proposals[0])) && Array.isArray(o.votes) && (!o.votes.length || Vote.isAmino(o.votes[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group_seq !== BigInt(0)) {
      writer.uint32(8).uint64(message.group_seq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.group_members) {
      GroupMember.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.group_policy_seq !== BigInt(0)) {
      writer.uint32(32).uint64(message.group_policy_seq);
    }
    for (const v of message.group_policies) {
      GroupPolicyInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.proposal_seq !== BigInt(0)) {
      writer.uint32(48).uint64(message.proposal_seq);
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
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
  fromJSON(object: any): GenesisState {
    return {
      group_seq: isSet(object.group_seq) ? BigInt(object.group_seq.toString()) : BigInt(0),
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromJSON(e)) : [],
      group_members: Array.isArray(object?.group_members) ? object.group_members.map((e: any) => GroupMember.fromJSON(e)) : [],
      group_policy_seq: isSet(object.group_policy_seq) ? BigInt(object.group_policy_seq.toString()) : BigInt(0),
      group_policies: Array.isArray(object?.group_policies) ? object.group_policies.map((e: any) => GroupPolicyInfo.fromJSON(e)) : [],
      proposal_seq: isSet(object.proposal_seq) ? BigInt(object.proposal_seq.toString()) : BigInt(0),
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.group_seq !== undefined && (obj.group_seq = (message.group_seq || BigInt(0)).toString());
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    if (message.group_members) {
      obj.group_members = message.group_members.map(e => e ? GroupMember.toJSON(e) : undefined);
    } else {
      obj.group_members = [];
    }
    message.group_policy_seq !== undefined && (obj.group_policy_seq = (message.group_policy_seq || BigInt(0)).toString());
    if (message.group_policies) {
      obj.group_policies = message.group_policies.map(e => e ? GroupPolicyInfo.toJSON(e) : undefined);
    } else {
      obj.group_policies = [];
    }
    message.proposal_seq !== undefined && (obj.proposal_seq = (message.proposal_seq || BigInt(0)).toString());
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
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
  fromAmino(object: GenesisStateAmino): GenesisState {
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
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.group_seq = message.group_seq ? message.group_seq.toString() : undefined;
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
    } else {
      obj.groups = [];
    }
    if (message.group_members) {
      obj.group_members = message.group_members.map(e => e ? GroupMember.toAmino(e) : undefined);
    } else {
      obj.group_members = [];
    }
    obj.group_policy_seq = message.group_policy_seq ? message.group_policy_seq.toString() : undefined;
    if (message.group_policies) {
      obj.group_policies = message.group_policies.map(e => e ? GroupPolicyInfo.toAmino(e) : undefined);
    } else {
      obj.group_policies = [];
    }
    obj.proposal_seq = message.proposal_seq ? message.proposal_seq.toString() : undefined;
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
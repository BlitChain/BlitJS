//@ts-nocheck
import { Deposit, DepositAmino, DepositSDKType, Vote, VoteAmino, VoteSDKType, Proposal, ProposalAmino, ProposalSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType, Params, ParamsAmino, ParamsSDKType } from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.gov.v1";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
  /** starting_proposal_id is the ID of the starting proposal. */
  starting_proposal_id: bigint;
  /** deposits defines all the deposits present at genesis. */
  deposits: Deposit[];
  /** votes defines all the votes present at genesis. */
  votes: Vote[];
  /** proposals defines all the proposals present at genesis. */
  proposals: Proposal[];
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines all the paramaters of related to deposit.
   */
  /** @deprecated */
  deposit_params?: DepositParams;
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines all the paramaters of related to voting.
   */
  /** @deprecated */
  voting_params?: VotingParams;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines all the paramaters of related to tally.
   */
  /** @deprecated */
  tally_params?: TallyParams;
  /**
   * params defines all the paramaters of x/gov module.
   * 
   * Since: cosmos-sdk 0.47
   */
  params?: Params;
  /**
   * The constitution allows builders to lay a foundation and define purpose.
   * This is an immutable string set in genesis.
   * There are no amendments, to go outside of scope, just fork.
   * constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals.
   * 
   * Since: cosmos-sdk 0.50
   */
  constitution: string;
}
export interface GenesisStateProtoMsg {
  type_url: "/cosmos.gov.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateAmino {
  /** starting_proposal_id is the ID of the starting proposal. */
  starting_proposal_id?: string;
  /** deposits defines all the deposits present at genesis. */
  deposits?: DepositAmino[];
  /** votes defines all the votes present at genesis. */
  votes?: VoteAmino[];
  /** proposals defines all the proposals present at genesis. */
  proposals?: ProposalAmino[];
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines all the paramaters of related to deposit.
   */
  /** @deprecated */
  deposit_params?: DepositParamsAmino;
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines all the paramaters of related to voting.
   */
  /** @deprecated */
  voting_params?: VotingParamsAmino;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines all the paramaters of related to tally.
   */
  /** @deprecated */
  tally_params?: TallyParamsAmino;
  /**
   * params defines all the paramaters of x/gov module.
   * 
   * Since: cosmos-sdk 0.47
   */
  params?: ParamsAmino;
  /**
   * The constitution allows builders to lay a foundation and define purpose.
   * This is an immutable string set in genesis.
   * There are no amendments, to go outside of scope, just fork.
   * constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals.
   * 
   * Since: cosmos-sdk 0.50
   */
  constitution?: string;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/v1/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateSDKType {
  starting_proposal_id: bigint;
  deposits: DepositSDKType[];
  votes: VoteSDKType[];
  proposals: ProposalSDKType[];
  /** @deprecated */
  deposit_params?: DepositParamsSDKType;
  /** @deprecated */
  voting_params?: VotingParamsSDKType;
  /** @deprecated */
  tally_params?: TallyParamsSDKType;
  params?: ParamsSDKType;
  constitution: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    starting_proposal_id: BigInt(0),
    deposits: [],
    votes: [],
    proposals: [],
    deposit_params: undefined,
    voting_params: undefined,
    tally_params: undefined,
    params: undefined,
    constitution: ""
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.gov.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.starting_proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.starting_proposal_id);
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.deposit_params !== undefined) {
      DepositParams.encode(message.deposit_params, writer.uint32(42).fork()).ldelim();
    }
    if (message.voting_params !== undefined) {
      VotingParams.encode(message.voting_params, writer.uint32(50).fork()).ldelim();
    }
    if (message.tally_params !== undefined) {
      TallyParams.encode(message.tally_params, writer.uint32(58).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(66).fork()).ldelim();
    }
    if (message.constitution !== "") {
      writer.uint32(74).string(message.constitution);
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
          message.starting_proposal_id = reader.uint64();
          break;
        case 2:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 5:
          message.deposit_params = DepositParams.decode(reader, reader.uint32());
          break;
        case 6:
          message.voting_params = VotingParams.decode(reader, reader.uint32());
          break;
        case 7:
          message.tally_params = TallyParams.decode(reader, reader.uint32());
          break;
        case 8:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 9:
          message.constitution = reader.string();
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
      starting_proposal_id: isSet(object.starting_proposal_id) ? BigInt(object.starting_proposal_id.toString()) : BigInt(0),
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      deposit_params: isSet(object.deposit_params) ? DepositParams.fromJSON(object.deposit_params) : undefined,
      voting_params: isSet(object.voting_params) ? VotingParams.fromJSON(object.voting_params) : undefined,
      tally_params: isSet(object.tally_params) ? TallyParams.fromJSON(object.tally_params) : undefined,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      constitution: isSet(object.constitution) ? String(object.constitution) : ""
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.starting_proposal_id !== undefined && (obj.starting_proposal_id = (message.starting_proposal_id || BigInt(0)).toString());
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.deposit_params !== undefined && (obj.deposit_params = message.deposit_params ? DepositParams.toJSON(message.deposit_params) : undefined);
    message.voting_params !== undefined && (obj.voting_params = message.voting_params ? VotingParams.toJSON(message.voting_params) : undefined);
    message.tally_params !== undefined && (obj.tally_params = message.tally_params ? TallyParams.toJSON(message.tally_params) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.constitution !== undefined && (obj.constitution = message.constitution);
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.starting_proposal_id = object.starting_proposal_id !== undefined && object.starting_proposal_id !== null ? BigInt(object.starting_proposal_id.toString()) : BigInt(0);
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.deposit_params = object.deposit_params !== undefined && object.deposit_params !== null ? DepositParams.fromPartial(object.deposit_params) : undefined;
    message.voting_params = object.voting_params !== undefined && object.voting_params !== null ? VotingParams.fromPartial(object.voting_params) : undefined;
    message.tally_params = object.tally_params !== undefined && object.tally_params !== null ? TallyParams.fromPartial(object.tally_params) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.constitution = object.constitution ?? "";
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.starting_proposal_id !== undefined && object.starting_proposal_id !== null) {
      message.starting_proposal_id = BigInt(object.starting_proposal_id);
    }
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.deposit_params !== undefined && object.deposit_params !== null) {
      message.deposit_params = DepositParams.fromAmino(object.deposit_params);
    }
    if (object.voting_params !== undefined && object.voting_params !== null) {
      message.voting_params = VotingParams.fromAmino(object.voting_params);
    }
    if (object.tally_params !== undefined && object.tally_params !== null) {
      message.tally_params = TallyParams.fromAmino(object.tally_params);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.constitution !== undefined && object.constitution !== null) {
      message.constitution = object.constitution;
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.starting_proposal_id = message.starting_proposal_id ? message.starting_proposal_id.toString() : undefined;
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    obj.deposit_params = message.deposit_params ? DepositParams.toAmino(message.deposit_params) : undefined;
    obj.voting_params = message.voting_params ? VotingParams.toAmino(message.voting_params) : undefined;
    obj.tally_params = message.tally_params ? TallyParams.toAmino(message.tally_params) : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.constitution = message.constitution;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/v1/GenesisState",
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
      typeUrl: "/cosmos.gov.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
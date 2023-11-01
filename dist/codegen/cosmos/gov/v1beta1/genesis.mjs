//@ts-nocheck
import { Deposit, Vote, Proposal, DepositParams, VotingParams, TallyParams } from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.gov.v1beta1";
function createBaseGenesisState() {
    return {
        starting_proposal_id: BigInt(0),
        deposits: [],
        votes: [],
        proposals: [],
        deposit_params: DepositParams.fromPartial({}),
        voting_params: VotingParams.fromPartial({}),
        tally_params: TallyParams.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.gov.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.starting_proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.starting_proposal_id);
        }
        for (const v of message.deposits) {
            Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(34).fork()).ldelim();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            starting_proposal_id: isSet(object.starting_proposal_id) ? BigInt(object.starting_proposal_id.toString()) : BigInt(0),
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => Deposit.fromJSON(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : [],
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => Proposal.fromJSON(e)) : [],
            deposit_params: isSet(object.deposit_params) ? DepositParams.fromJSON(object.deposit_params) : undefined,
            voting_params: isSet(object.voting_params) ? VotingParams.fromJSON(object.voting_params) : undefined,
            tally_params: isSet(object.tally_params) ? TallyParams.fromJSON(object.tally_params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.starting_proposal_id !== undefined && (obj.starting_proposal_id = (message.starting_proposal_id || BigInt(0)).toString());
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.deposit_params !== undefined && (obj.deposit_params = message.deposit_params ? DepositParams.toJSON(message.deposit_params) : undefined);
        message.voting_params !== undefined && (obj.voting_params = message.voting_params ? VotingParams.toJSON(message.voting_params) : undefined);
        message.tally_params !== undefined && (obj.tally_params = message.tally_params ? TallyParams.toJSON(message.tally_params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.starting_proposal_id = object.starting_proposal_id !== undefined && object.starting_proposal_id !== null ? BigInt(object.starting_proposal_id.toString()) : BigInt(0);
        message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
        message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
        message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
        message.deposit_params = object.deposit_params !== undefined && object.deposit_params !== null ? DepositParams.fromPartial(object.deposit_params) : undefined;
        message.voting_params = object.voting_params !== undefined && object.voting_params !== null ? VotingParams.fromPartial(object.voting_params) : undefined;
        message.tally_params = object.tally_params !== undefined && object.tally_params !== null ? TallyParams.fromPartial(object.tally_params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            starting_proposal_id: object?.starting_proposal_id,
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => Deposit.fromSDK(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => Vote.fromSDK(e)) : [],
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => Proposal.fromSDK(e)) : [],
            deposit_params: object.deposit_params ? DepositParams.fromSDK(object.deposit_params) : undefined,
            voting_params: object.voting_params ? VotingParams.fromSDK(object.voting_params) : undefined,
            tally_params: object.tally_params ? TallyParams.fromSDK(object.tally_params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.starting_proposal_id = message.starting_proposal_id;
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? Deposit.toSDK(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toSDK(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toSDK(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.deposit_params !== undefined && (obj.deposit_params = message.deposit_params ? DepositParams.toSDK(message.deposit_params) : undefined);
        message.voting_params !== undefined && (obj.voting_params = message.voting_params ? VotingParams.toSDK(message.voting_params) : undefined);
        message.tally_params !== undefined && (obj.tally_params = message.tally_params ? TallyParams.toSDK(message.tally_params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            starting_proposal_id: BigInt(object.starting_proposal_id),
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => Deposit.fromAmino(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => Vote.fromAmino(e)) : [],
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => Proposal.fromAmino(e)) : [],
            deposit_params: object?.deposit_params ? DepositParams.fromAmino(object.deposit_params) : undefined,
            voting_params: object?.voting_params ? VotingParams.fromAmino(object.voting_params) : undefined,
            tally_params: object?.tally_params ? TallyParams.fromAmino(object.tally_params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.starting_proposal_id = message.starting_proposal_id ? message.starting_proposal_id.toString() : undefined;
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        obj.deposit_params = message.deposit_params ? DepositParams.toAmino(message.deposit_params) : undefined;
        obj.voting_params = message.voting_params ? VotingParams.toAmino(message.voting_params) : undefined;
        obj.tally_params = message.tally_params ? TallyParams.toAmino(message.tally_params) : undefined;
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
            typeUrl: "/cosmos.gov.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgCancelProposal } from "./tx";
export const registry = [["/cosmos.gov.v1.MsgSubmitProposal", MsgSubmitProposal], ["/cosmos.gov.v1.MsgExecLegacyContent", MsgExecLegacyContent], ["/cosmos.gov.v1.MsgVote", MsgVote], ["/cosmos.gov.v1.MsgVoteWeighted", MsgVoteWeighted], ["/cosmos.gov.v1.MsgDeposit", MsgDeposit], ["/cosmos.gov.v1.MsgUpdateParams", MsgUpdateParams], ["/cosmos.gov.v1.MsgCancelProposal", MsgCancelProposal]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value: MsgSubmitProposal.encode(value).finish()
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value: MsgExecLegacyContent.encode(value).finish()
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value: MsgVote.encode(value).finish()
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value: MsgVoteWeighted.encode(value).finish()
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value: MsgDeposit.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        },
        cancelProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
                value: MsgCancelProposal.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
                value
            };
        },
        cancelProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
                value
            };
        }
    },
    toJSON: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value: MsgSubmitProposal.toJSON(value)
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value: MsgExecLegacyContent.toJSON(value)
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value: MsgVote.toJSON(value)
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value: MsgVoteWeighted.toJSON(value)
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value: MsgDeposit.toJSON(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
                value: MsgUpdateParams.toJSON(value)
            };
        },
        cancelProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
                value: MsgCancelProposal.toJSON(value)
            };
        }
    },
    fromJSON: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value: MsgSubmitProposal.fromJSON(value)
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value: MsgExecLegacyContent.fromJSON(value)
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value: MsgVote.fromJSON(value)
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value: MsgVoteWeighted.fromJSON(value)
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value: MsgDeposit.fromJSON(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromJSON(value)
            };
        },
        cancelProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
                value: MsgCancelProposal.fromJSON(value)
            };
        }
    },
    fromPartial: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value: MsgSubmitProposal.fromPartial(value)
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value: MsgExecLegacyContent.fromPartial(value)
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value: MsgVote.fromPartial(value)
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value: MsgVoteWeighted.fromPartial(value)
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value: MsgDeposit.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        },
        cancelProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
                value: MsgCancelProposal.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
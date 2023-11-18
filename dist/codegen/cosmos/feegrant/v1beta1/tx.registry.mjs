import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
export const registry = [["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance], ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance], ["/cosmos.feegrant.v1beta1.MsgPruneAllowances", MsgPruneAllowances]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: MsgGrantAllowance.encode(value).finish()
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: MsgRevokeAllowance.encode(value).finish()
            };
        },
        pruneAllowances(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value: MsgPruneAllowances.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value
            };
        },
        pruneAllowances(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value
            };
        }
    },
    toJSON: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: MsgGrantAllowance.toJSON(value)
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: MsgRevokeAllowance.toJSON(value)
            };
        },
        pruneAllowances(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value: MsgPruneAllowances.toJSON(value)
            };
        }
    },
    fromJSON: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: MsgGrantAllowance.fromJSON(value)
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: MsgRevokeAllowance.fromJSON(value)
            };
        },
        pruneAllowances(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value: MsgPruneAllowances.fromJSON(value)
            };
        }
    },
    fromPartial: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: MsgGrantAllowance.fromPartial(value)
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: MsgRevokeAllowance.fromPartial(value)
            };
        },
        pruneAllowances(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value: MsgPruneAllowances.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
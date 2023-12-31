import { MsgTransfer, MsgUpdateParams } from "./tx";
export const registry = [["/ibc.applications.transfer.v1.MsgTransfer", MsgTransfer], ["/ibc.applications.transfer.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        transfer(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: MsgTransfer.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        transfer(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
                value
            };
        }
    },
    toJSON: {
        transfer(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: MsgTransfer.toJSON(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
                value: MsgUpdateParams.toJSON(value)
            };
        }
    },
    fromJSON: {
        transfer(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: MsgTransfer.fromJSON(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromJSON(value)
            };
        }
    },
    fromPartial: {
        transfer(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: MsgTransfer.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
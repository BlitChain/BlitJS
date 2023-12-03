import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
export const registry = [["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount", MsgRegisterInterchainAccount], ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", MsgSendTx], ["/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
                value: MsgRegisterInterchainAccount.encode(value).finish()
            };
        },
        sendTx(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
                value: MsgSendTx.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
                value
            };
        },
        sendTx(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
                value
            };
        }
    },
    toJSON: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
                value: MsgRegisterInterchainAccount.toJSON(value)
            };
        },
        sendTx(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
                value: MsgSendTx.toJSON(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
                value: MsgUpdateParams.toJSON(value)
            };
        }
    },
    fromJSON: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
                value: MsgRegisterInterchainAccount.fromJSON(value)
            };
        },
        sendTx(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
                value: MsgSendTx.fromJSON(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromJSON(value)
            };
        }
    },
    fromPartial: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
                value: MsgRegisterInterchainAccount.fromPartial(value)
            };
        },
        sendTx(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
                value: MsgSendTx.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
export const registry = [["/ibc.core.client.v1.MsgCreateClient", MsgCreateClient], ["/ibc.core.client.v1.MsgUpdateClient", MsgUpdateClient], ["/ibc.core.client.v1.MsgUpgradeClient", MsgUpgradeClient], ["/ibc.core.client.v1.MsgSubmitMisbehaviour", MsgSubmitMisbehaviour], ["/ibc.core.client.v1.MsgRecoverClient", MsgRecoverClient], ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", MsgIBCSoftwareUpgrade], ["/ibc.core.client.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: MsgCreateClient.encode(value).finish()
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: MsgUpdateClient.encode(value).finish()
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: MsgUpgradeClient.encode(value).finish()
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: MsgSubmitMisbehaviour.encode(value).finish()
            };
        },
        recoverClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
                value: MsgRecoverClient.encode(value).finish()
            };
        },
        iBCSoftwareUpgrade(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
                value: MsgIBCSoftwareUpgrade.encode(value).finish()
            };
        },
        updateClientParams(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value
            };
        },
        recoverClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
                value
            };
        },
        iBCSoftwareUpgrade(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
                value
            };
        },
        updateClientParams(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
                value
            };
        }
    },
    toJSON: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: MsgCreateClient.toJSON(value)
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: MsgUpdateClient.toJSON(value)
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: MsgUpgradeClient.toJSON(value)
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: MsgSubmitMisbehaviour.toJSON(value)
            };
        },
        recoverClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
                value: MsgRecoverClient.toJSON(value)
            };
        },
        iBCSoftwareUpgrade(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
                value: MsgIBCSoftwareUpgrade.toJSON(value)
            };
        },
        updateClientParams(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
                value: MsgUpdateParams.toJSON(value)
            };
        }
    },
    fromJSON: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: MsgCreateClient.fromJSON(value)
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: MsgUpdateClient.fromJSON(value)
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: MsgUpgradeClient.fromJSON(value)
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: MsgSubmitMisbehaviour.fromJSON(value)
            };
        },
        recoverClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
                value: MsgRecoverClient.fromJSON(value)
            };
        },
        iBCSoftwareUpgrade(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
                value: MsgIBCSoftwareUpgrade.fromJSON(value)
            };
        },
        updateClientParams(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: MsgCreateClient.fromPartial(value)
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: MsgUpdateClient.fromPartial(value)
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: MsgUpgradeClient.fromPartial(value)
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: MsgSubmitMisbehaviour.fromPartial(value)
            };
        },
        recoverClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
                value: MsgRecoverClient.fromPartial(value)
            };
        },
        iBCSoftwareUpgrade(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
                value: MsgIBCSoftwareUpgrade.fromPartial(value)
            };
        },
        updateClientParams(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
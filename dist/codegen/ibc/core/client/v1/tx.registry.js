"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/ibc.core.client.v1.MsgCreateClient", tx_1.MsgCreateClient], ["/ibc.core.client.v1.MsgUpdateClient", tx_1.MsgUpdateClient], ["/ibc.core.client.v1.MsgUpgradeClient", tx_1.MsgUpgradeClient], ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_1.MsgSubmitMisbehaviour], ["/ibc.core.client.v1.MsgRecoverClient", tx_1.MsgRecoverClient], ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_1.MsgIBCSoftwareUpgrade], ["/ibc.core.client.v1.MsgUpdateParams", tx_1.MsgUpdateParams]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: tx_1.MsgCreateClient.encode(value).finish()
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: tx_1.MsgUpdateClient.encode(value).finish()
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: tx_1.MsgUpgradeClient.encode(value).finish()
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: tx_1.MsgSubmitMisbehaviour.encode(value).finish()
            };
        },
        recoverClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
                value: tx_1.MsgRecoverClient.encode(value).finish()
            };
        },
        iBCSoftwareUpgrade(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
                value: tx_1.MsgIBCSoftwareUpgrade.encode(value).finish()
            };
        },
        updateClientParams(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
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
                value: tx_1.MsgCreateClient.toJSON(value)
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: tx_1.MsgUpdateClient.toJSON(value)
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: tx_1.MsgUpgradeClient.toJSON(value)
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: tx_1.MsgSubmitMisbehaviour.toJSON(value)
            };
        },
        recoverClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
                value: tx_1.MsgRecoverClient.toJSON(value)
            };
        },
        iBCSoftwareUpgrade(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
                value: tx_1.MsgIBCSoftwareUpgrade.toJSON(value)
            };
        },
        updateClientParams(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.toJSON(value)
            };
        }
    },
    fromJSON: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: tx_1.MsgCreateClient.fromJSON(value)
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: tx_1.MsgUpdateClient.fromJSON(value)
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: tx_1.MsgUpgradeClient.fromJSON(value)
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: tx_1.MsgSubmitMisbehaviour.fromJSON(value)
            };
        },
        recoverClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
                value: tx_1.MsgRecoverClient.fromJSON(value)
            };
        },
        iBCSoftwareUpgrade(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
                value: tx_1.MsgIBCSoftwareUpgrade.fromJSON(value)
            };
        },
        updateClientParams(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: tx_1.MsgCreateClient.fromPartial(value)
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: tx_1.MsgUpdateClient.fromPartial(value)
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: tx_1.MsgUpgradeClient.fromPartial(value)
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: tx_1.MsgSubmitMisbehaviour.fromPartial(value)
            };
        },
        recoverClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
                value: tx_1.MsgRecoverClient.fromPartial(value)
            };
        },
        iBCSoftwareUpgrade(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
                value: tx_1.MsgIBCSoftwareUpgrade.fromPartial(value)
            };
        },
        updateClientParams(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
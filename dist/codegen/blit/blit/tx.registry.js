"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/blit.blit.MsgUpdateParams", tx_1.MsgUpdateParams], ["/blit.blit.MsgMintCoins", tx_1.MsgMintCoins], ["/blit.blit.MsgBurnCoins", tx_1.MsgBurnCoins], ["/blit.blit.MsgForceTransferCoins", tx_1.MsgForceTransferCoins], ["/blit.blit.MsgSetDenomMetadata", tx_1.MsgSetDenomMetadata], ["/blit.blit.MsgCreateTask", tx_1.MsgCreateTask], ["/blit.blit.MsgDeleteTask", tx_1.MsgDeleteTask]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        updateParams(value) {
            return {
                typeUrl: "/blit.blit.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
            };
        },
        mintCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgMintCoins",
                value: tx_1.MsgMintCoins.encode(value).finish()
            };
        },
        burnCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgBurnCoins",
                value: tx_1.MsgBurnCoins.encode(value).finish()
            };
        },
        forceTransferCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgForceTransferCoins",
                value: tx_1.MsgForceTransferCoins.encode(value).finish()
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/blit.blit.MsgSetDenomMetadata",
                value: tx_1.MsgSetDenomMetadata.encode(value).finish()
            };
        },
        createTask(value) {
            return {
                typeUrl: "/blit.blit.MsgCreateTask",
                value: tx_1.MsgCreateTask.encode(value).finish()
            };
        },
        deleteTask(value) {
            return {
                typeUrl: "/blit.blit.MsgDeleteTask",
                value: tx_1.MsgDeleteTask.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        updateParams(value) {
            return {
                typeUrl: "/blit.blit.MsgUpdateParams",
                value
            };
        },
        mintCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgMintCoins",
                value
            };
        },
        burnCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgBurnCoins",
                value
            };
        },
        forceTransferCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgForceTransferCoins",
                value
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/blit.blit.MsgSetDenomMetadata",
                value
            };
        },
        createTask(value) {
            return {
                typeUrl: "/blit.blit.MsgCreateTask",
                value
            };
        },
        deleteTask(value) {
            return {
                typeUrl: "/blit.blit.MsgDeleteTask",
                value
            };
        }
    },
    toJSON: {
        updateParams(value) {
            return {
                typeUrl: "/blit.blit.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.toJSON(value)
            };
        },
        mintCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgMintCoins",
                value: tx_1.MsgMintCoins.toJSON(value)
            };
        },
        burnCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgBurnCoins",
                value: tx_1.MsgBurnCoins.toJSON(value)
            };
        },
        forceTransferCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgForceTransferCoins",
                value: tx_1.MsgForceTransferCoins.toJSON(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/blit.blit.MsgSetDenomMetadata",
                value: tx_1.MsgSetDenomMetadata.toJSON(value)
            };
        },
        createTask(value) {
            return {
                typeUrl: "/blit.blit.MsgCreateTask",
                value: tx_1.MsgCreateTask.toJSON(value)
            };
        },
        deleteTask(value) {
            return {
                typeUrl: "/blit.blit.MsgDeleteTask",
                value: tx_1.MsgDeleteTask.toJSON(value)
            };
        }
    },
    fromJSON: {
        updateParams(value) {
            return {
                typeUrl: "/blit.blit.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromJSON(value)
            };
        },
        mintCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgMintCoins",
                value: tx_1.MsgMintCoins.fromJSON(value)
            };
        },
        burnCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgBurnCoins",
                value: tx_1.MsgBurnCoins.fromJSON(value)
            };
        },
        forceTransferCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgForceTransferCoins",
                value: tx_1.MsgForceTransferCoins.fromJSON(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/blit.blit.MsgSetDenomMetadata",
                value: tx_1.MsgSetDenomMetadata.fromJSON(value)
            };
        },
        createTask(value) {
            return {
                typeUrl: "/blit.blit.MsgCreateTask",
                value: tx_1.MsgCreateTask.fromJSON(value)
            };
        },
        deleteTask(value) {
            return {
                typeUrl: "/blit.blit.MsgDeleteTask",
                value: tx_1.MsgDeleteTask.fromJSON(value)
            };
        }
    },
    fromPartial: {
        updateParams(value) {
            return {
                typeUrl: "/blit.blit.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        },
        mintCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgMintCoins",
                value: tx_1.MsgMintCoins.fromPartial(value)
            };
        },
        burnCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgBurnCoins",
                value: tx_1.MsgBurnCoins.fromPartial(value)
            };
        },
        forceTransferCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgForceTransferCoins",
                value: tx_1.MsgForceTransferCoins.fromPartial(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/blit.blit.MsgSetDenomMetadata",
                value: tx_1.MsgSetDenomMetadata.fromPartial(value)
            };
        },
        createTask(value) {
            return {
                typeUrl: "/blit.blit.MsgCreateTask",
                value: tx_1.MsgCreateTask.fromPartial(value)
            };
        },
        deleteTask(value) {
            return {
                typeUrl: "/blit.blit.MsgDeleteTask",
                value: tx_1.MsgDeleteTask.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
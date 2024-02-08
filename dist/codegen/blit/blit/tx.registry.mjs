import { MsgUpdateParams, MsgMintCoins, MsgBurnCoins, MsgForceTransferCoins, MsgSetDenomMetadata, MsgCreateTask, MsgDeleteTask } from "./tx";
export const registry = [["/blit.blit.MsgUpdateParams", MsgUpdateParams], ["/blit.blit.MsgMintCoins", MsgMintCoins], ["/blit.blit.MsgBurnCoins", MsgBurnCoins], ["/blit.blit.MsgForceTransferCoins", MsgForceTransferCoins], ["/blit.blit.MsgSetDenomMetadata", MsgSetDenomMetadata], ["/blit.blit.MsgCreateTask", MsgCreateTask], ["/blit.blit.MsgDeleteTask", MsgDeleteTask]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        updateParams(value) {
            return {
                typeUrl: "/blit.blit.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        },
        mintCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgMintCoins",
                value: MsgMintCoins.encode(value).finish()
            };
        },
        burnCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgBurnCoins",
                value: MsgBurnCoins.encode(value).finish()
            };
        },
        forceTransferCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgForceTransferCoins",
                value: MsgForceTransferCoins.encode(value).finish()
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/blit.blit.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.encode(value).finish()
            };
        },
        createTask(value) {
            return {
                typeUrl: "/blit.blit.MsgCreateTask",
                value: MsgCreateTask.encode(value).finish()
            };
        },
        deleteTask(value) {
            return {
                typeUrl: "/blit.blit.MsgDeleteTask",
                value: MsgDeleteTask.encode(value).finish()
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
                value: MsgUpdateParams.toJSON(value)
            };
        },
        mintCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgMintCoins",
                value: MsgMintCoins.toJSON(value)
            };
        },
        burnCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgBurnCoins",
                value: MsgBurnCoins.toJSON(value)
            };
        },
        forceTransferCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgForceTransferCoins",
                value: MsgForceTransferCoins.toJSON(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/blit.blit.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.toJSON(value)
            };
        },
        createTask(value) {
            return {
                typeUrl: "/blit.blit.MsgCreateTask",
                value: MsgCreateTask.toJSON(value)
            };
        },
        deleteTask(value) {
            return {
                typeUrl: "/blit.blit.MsgDeleteTask",
                value: MsgDeleteTask.toJSON(value)
            };
        }
    },
    fromJSON: {
        updateParams(value) {
            return {
                typeUrl: "/blit.blit.MsgUpdateParams",
                value: MsgUpdateParams.fromJSON(value)
            };
        },
        mintCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgMintCoins",
                value: MsgMintCoins.fromJSON(value)
            };
        },
        burnCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgBurnCoins",
                value: MsgBurnCoins.fromJSON(value)
            };
        },
        forceTransferCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgForceTransferCoins",
                value: MsgForceTransferCoins.fromJSON(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/blit.blit.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.fromJSON(value)
            };
        },
        createTask(value) {
            return {
                typeUrl: "/blit.blit.MsgCreateTask",
                value: MsgCreateTask.fromJSON(value)
            };
        },
        deleteTask(value) {
            return {
                typeUrl: "/blit.blit.MsgDeleteTask",
                value: MsgDeleteTask.fromJSON(value)
            };
        }
    },
    fromPartial: {
        updateParams(value) {
            return {
                typeUrl: "/blit.blit.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        },
        mintCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgMintCoins",
                value: MsgMintCoins.fromPartial(value)
            };
        },
        burnCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgBurnCoins",
                value: MsgBurnCoins.fromPartial(value)
            };
        },
        forceTransferCoins(value) {
            return {
                typeUrl: "/blit.blit.MsgForceTransferCoins",
                value: MsgForceTransferCoins.fromPartial(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/blit.blit.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.fromPartial(value)
            };
        },
        createTask(value) {
            return {
                typeUrl: "/blit.blit.MsgCreateTask",
                value: MsgCreateTask.fromPartial(value)
            };
        },
        deleteTask(value) {
            return {
                typeUrl: "/blit.blit.MsgDeleteTask",
                value: MsgDeleteTask.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
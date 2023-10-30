import { MsgUpdateParams, MsgCreateStorage, MsgUpdateStorage, MsgDeleteStorage } from "./tx";
export const registry = [["/blit.storage.MsgUpdateParams", MsgUpdateParams], ["/blit.storage.MsgCreateStorage", MsgCreateStorage], ["/blit.storage.MsgUpdateStorage", MsgUpdateStorage], ["/blit.storage.MsgDeleteStorage", MsgDeleteStorage]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        updateParams(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        },
        createStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgCreateStorage",
                value: MsgCreateStorage.encode(value).finish()
            };
        },
        updateStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateStorage",
                value: MsgUpdateStorage.encode(value).finish()
            };
        },
        deleteStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgDeleteStorage",
                value: MsgDeleteStorage.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        updateParams(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateParams",
                value
            };
        },
        createStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgCreateStorage",
                value
            };
        },
        updateStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateStorage",
                value
            };
        },
        deleteStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgDeleteStorage",
                value
            };
        }
    },
    toJSON: {
        updateParams(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateParams",
                value: MsgUpdateParams.toJSON(value)
            };
        },
        createStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgCreateStorage",
                value: MsgCreateStorage.toJSON(value)
            };
        },
        updateStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateStorage",
                value: MsgUpdateStorage.toJSON(value)
            };
        },
        deleteStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgDeleteStorage",
                value: MsgDeleteStorage.toJSON(value)
            };
        }
    },
    fromJSON: {
        updateParams(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateParams",
                value: MsgUpdateParams.fromJSON(value)
            };
        },
        createStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgCreateStorage",
                value: MsgCreateStorage.fromJSON(value)
            };
        },
        updateStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateStorage",
                value: MsgUpdateStorage.fromJSON(value)
            };
        },
        deleteStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgDeleteStorage",
                value: MsgDeleteStorage.fromJSON(value)
            };
        }
    },
    fromPartial: {
        updateParams(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        },
        createStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgCreateStorage",
                value: MsgCreateStorage.fromPartial(value)
            };
        },
        updateStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateStorage",
                value: MsgUpdateStorage.fromPartial(value)
            };
        },
        deleteStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgDeleteStorage",
                value: MsgDeleteStorage.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
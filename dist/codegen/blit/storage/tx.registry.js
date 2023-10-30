"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/blit.storage.MsgUpdateParams", tx_1.MsgUpdateParams], ["/blit.storage.MsgCreateStorage", tx_1.MsgCreateStorage], ["/blit.storage.MsgUpdateStorage", tx_1.MsgUpdateStorage], ["/blit.storage.MsgDeleteStorage", tx_1.MsgDeleteStorage]];
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
                typeUrl: "/blit.storage.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
            };
        },
        createStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgCreateStorage",
                value: tx_1.MsgCreateStorage.encode(value).finish()
            };
        },
        updateStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateStorage",
                value: tx_1.MsgUpdateStorage.encode(value).finish()
            };
        },
        deleteStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgDeleteStorage",
                value: tx_1.MsgDeleteStorage.encode(value).finish()
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
                value: tx_1.MsgUpdateParams.toJSON(value)
            };
        },
        createStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgCreateStorage",
                value: tx_1.MsgCreateStorage.toJSON(value)
            };
        },
        updateStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateStorage",
                value: tx_1.MsgUpdateStorage.toJSON(value)
            };
        },
        deleteStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgDeleteStorage",
                value: tx_1.MsgDeleteStorage.toJSON(value)
            };
        }
    },
    fromJSON: {
        updateParams(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromJSON(value)
            };
        },
        createStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgCreateStorage",
                value: tx_1.MsgCreateStorage.fromJSON(value)
            };
        },
        updateStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateStorage",
                value: tx_1.MsgUpdateStorage.fromJSON(value)
            };
        },
        deleteStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgDeleteStorage",
                value: tx_1.MsgDeleteStorage.fromJSON(value)
            };
        }
    },
    fromPartial: {
        updateParams(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        },
        createStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgCreateStorage",
                value: tx_1.MsgCreateStorage.fromPartial(value)
            };
        },
        updateStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgUpdateStorage",
                value: tx_1.MsgUpdateStorage.fromPartial(value)
            };
        },
        deleteStorage(value) {
            return {
                typeUrl: "/blit.storage.MsgDeleteStorage",
                value: tx_1.MsgDeleteStorage.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
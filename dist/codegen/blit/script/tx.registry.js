"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
const msgrun_1 = require("./msgrun");
exports.registry = [["/blit.script.MsgUpdateParams", tx_1.MsgUpdateParams], ["/blit.script.MsgCreateScript", tx_1.MsgCreateScript], ["/blit.script.MsgUpdateScript", tx_1.MsgUpdateScript], ["/blit.script.MsgRun", msgrun_1.MsgRun]];
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
                typeUrl: "/blit.script.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
            };
        },
        createScript(value) {
            return {
                typeUrl: "/blit.script.MsgCreateScript",
                value: tx_1.MsgCreateScript.encode(value).finish()
            };
        },
        updateScript(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateScript",
                value: tx_1.MsgUpdateScript.encode(value).finish()
            };
        },
        run(value) {
            return {
                typeUrl: "/blit.script.MsgRun",
                value: msgrun_1.MsgRun.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        updateParams(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateParams",
                value
            };
        },
        createScript(value) {
            return {
                typeUrl: "/blit.script.MsgCreateScript",
                value
            };
        },
        updateScript(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateScript",
                value
            };
        },
        run(value) {
            return {
                typeUrl: "/blit.script.MsgRun",
                value
            };
        }
    },
    toJSON: {
        updateParams(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.toJSON(value)
            };
        },
        createScript(value) {
            return {
                typeUrl: "/blit.script.MsgCreateScript",
                value: tx_1.MsgCreateScript.toJSON(value)
            };
        },
        updateScript(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateScript",
                value: tx_1.MsgUpdateScript.toJSON(value)
            };
        },
        run(value) {
            return {
                typeUrl: "/blit.script.MsgRun",
                value: msgrun_1.MsgRun.toJSON(value)
            };
        }
    },
    fromJSON: {
        updateParams(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromJSON(value)
            };
        },
        createScript(value) {
            return {
                typeUrl: "/blit.script.MsgCreateScript",
                value: tx_1.MsgCreateScript.fromJSON(value)
            };
        },
        updateScript(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateScript",
                value: tx_1.MsgUpdateScript.fromJSON(value)
            };
        },
        run(value) {
            return {
                typeUrl: "/blit.script.MsgRun",
                value: msgrun_1.MsgRun.fromJSON(value)
            };
        }
    },
    fromPartial: {
        updateParams(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        },
        createScript(value) {
            return {
                typeUrl: "/blit.script.MsgCreateScript",
                value: tx_1.MsgCreateScript.fromPartial(value)
            };
        },
        updateScript(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateScript",
                value: tx_1.MsgUpdateScript.fromPartial(value)
            };
        },
        run(value) {
            return {
                typeUrl: "/blit.script.MsgRun",
                value: msgrun_1.MsgRun.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
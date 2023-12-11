import { MsgUpdateParams, MsgCreateScript, MsgUpdateScript, MsgRun } from "./tx";
export const registry = [["/blit.script.MsgUpdateParams", MsgUpdateParams], ["/blit.script.MsgCreateScript", MsgCreateScript], ["/blit.script.MsgUpdateScript", MsgUpdateScript], ["/blit.script.MsgRun", MsgRun]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        updateParams(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        },
        createScript(value) {
            return {
                typeUrl: "/blit.script.MsgCreateScript",
                value: MsgCreateScript.encode(value).finish()
            };
        },
        updateScript(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateScript",
                value: MsgUpdateScript.encode(value).finish()
            };
        },
        run(value) {
            return {
                typeUrl: "/blit.script.MsgRun",
                value: MsgRun.encode(value).finish()
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
                value: MsgUpdateParams.toJSON(value)
            };
        },
        createScript(value) {
            return {
                typeUrl: "/blit.script.MsgCreateScript",
                value: MsgCreateScript.toJSON(value)
            };
        },
        updateScript(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateScript",
                value: MsgUpdateScript.toJSON(value)
            };
        },
        run(value) {
            return {
                typeUrl: "/blit.script.MsgRun",
                value: MsgRun.toJSON(value)
            };
        }
    },
    fromJSON: {
        updateParams(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateParams",
                value: MsgUpdateParams.fromJSON(value)
            };
        },
        createScript(value) {
            return {
                typeUrl: "/blit.script.MsgCreateScript",
                value: MsgCreateScript.fromJSON(value)
            };
        },
        updateScript(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateScript",
                value: MsgUpdateScript.fromJSON(value)
            };
        },
        run(value) {
            return {
                typeUrl: "/blit.script.MsgRun",
                value: MsgRun.fromJSON(value)
            };
        }
    },
    fromPartial: {
        updateParams(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        },
        createScript(value) {
            return {
                typeUrl: "/blit.script.MsgCreateScript",
                value: MsgCreateScript.fromPartial(value)
            };
        },
        updateScript(value) {
            return {
                typeUrl: "/blit.script.MsgUpdateScript",
                value: MsgUpdateScript.fromPartial(value)
            };
        },
        run(value) {
            return {
                typeUrl: "/blit.script.MsgRun",
                value: MsgRun.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
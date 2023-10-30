"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/blit.blit.MsgUpdateParams", tx_1.MsgUpdateParams]];
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
        }
    },
    withTypeUrl: {
        updateParams(value) {
            return {
                typeUrl: "/blit.blit.MsgUpdateParams",
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
        }
    },
    fromJSON: {
        updateParams(value) {
            return {
                typeUrl: "/blit.blit.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromJSON(value)
            };
        }
    },
    fromPartial: {
        updateParams(value) {
            return {
                typeUrl: "/blit.blit.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
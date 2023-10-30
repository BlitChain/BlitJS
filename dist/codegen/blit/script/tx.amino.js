"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
const msgrun_1 = require("./msgrun");
exports.AminoConverter = {
    "/blit.script.MsgUpdateParams": {
        aminoType: "blit/x/script/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    },
    "/blit.script.MsgCreateScript": {
        aminoType: "/blit.script.MsgCreateScript",
        toAmino: tx_1.MsgCreateScript.toAmino,
        fromAmino: tx_1.MsgCreateScript.fromAmino
    },
    "/blit.script.MsgUpdateScript": {
        aminoType: "/blit.script.MsgUpdateScript",
        toAmino: tx_1.MsgUpdateScript.toAmino,
        fromAmino: tx_1.MsgUpdateScript.fromAmino
    },
    "/blit.script.MsgRun": {
        aminoType: "/blit.script.MsgRun",
        toAmino: msgrun_1.MsgRun.toAmino,
        fromAmino: msgrun_1.MsgRun.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/blit.storage.MsgUpdateParams": {
        aminoType: "blit/x/storage/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    },
    "/blit.storage.MsgCreateStorage": {
        aminoType: "/blit.storage.MsgCreateStorage",
        toAmino: tx_1.MsgCreateStorage.toAmino,
        fromAmino: tx_1.MsgCreateStorage.fromAmino
    },
    "/blit.storage.MsgUpdateStorage": {
        aminoType: "/blit.storage.MsgUpdateStorage",
        toAmino: tx_1.MsgUpdateStorage.toAmino,
        fromAmino: tx_1.MsgUpdateStorage.fromAmino
    },
    "/blit.storage.MsgDeleteStorage": {
        aminoType: "/blit.storage.MsgDeleteStorage",
        toAmino: tx_1.MsgDeleteStorage.toAmino,
        fromAmino: tx_1.MsgDeleteStorage.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map
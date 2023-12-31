"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.mint.v1beta1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/x/mint/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map
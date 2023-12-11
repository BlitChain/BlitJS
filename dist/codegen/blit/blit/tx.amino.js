"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/blit.blit.MsgUpdateParams": {
        aminoType: "blit/x/blit/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    },
    "/blit.blit.MsgMintCoins": {
        aminoType: "/blit.blit.MsgMintCoins",
        toAmino: tx_1.MsgMintCoins.toAmino,
        fromAmino: tx_1.MsgMintCoins.fromAmino
    },
    "/blit.blit.MsgBurnCoins": {
        aminoType: "/blit.blit.MsgBurnCoins",
        toAmino: tx_1.MsgBurnCoins.toAmino,
        fromAmino: tx_1.MsgBurnCoins.fromAmino
    },
    "/blit.blit.MsgForceTransferCoins": {
        aminoType: "/blit.blit.MsgForceTransferCoins",
        toAmino: tx_1.MsgForceTransferCoins.toAmino,
        fromAmino: tx_1.MsgForceTransferCoins.fromAmino
    },
    "/blit.blit.MsgSetDenomMetadata": {
        aminoType: "/blit.blit.MsgSetDenomMetadata",
        toAmino: tx_1.MsgSetDenomMetadata.toAmino,
        fromAmino: tx_1.MsgSetDenomMetadata.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map
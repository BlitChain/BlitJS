"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
        aminoType: "cosmos-sdk/MsgRegisterInterchainAccount",
        toAmino: tx_1.MsgRegisterInterchainAccount.toAmino,
        fromAmino: tx_1.MsgRegisterInterchainAccount.fromAmino
    },
    "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
        aminoType: "cosmos-sdk/MsgSendTx",
        toAmino: tx_1.MsgSendTx.toAmino,
        fromAmino: tx_1.MsgSendTx.fromAmino
    },
    "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map
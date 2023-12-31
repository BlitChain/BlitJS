"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: "cosmos-sdk/MsgCreateClient",
        toAmino: tx_1.MsgCreateClient.toAmino,
        fromAmino: tx_1.MsgCreateClient.fromAmino
    },
    "/ibc.core.client.v1.MsgUpdateClient": {
        aminoType: "cosmos-sdk/MsgUpdateClient",
        toAmino: tx_1.MsgUpdateClient.toAmino,
        fromAmino: tx_1.MsgUpdateClient.fromAmino
    },
    "/ibc.core.client.v1.MsgUpgradeClient": {
        aminoType: "cosmos-sdk/MsgUpgradeClient",
        toAmino: tx_1.MsgUpgradeClient.toAmino,
        fromAmino: tx_1.MsgUpgradeClient.fromAmino
    },
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
        toAmino: tx_1.MsgSubmitMisbehaviour.toAmino,
        fromAmino: tx_1.MsgSubmitMisbehaviour.fromAmino
    },
    "/ibc.core.client.v1.MsgRecoverClient": {
        aminoType: "cosmos-sdk/MsgRecoverClient",
        toAmino: tx_1.MsgRecoverClient.toAmino,
        fromAmino: tx_1.MsgRecoverClient.fromAmino
    },
    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
        aminoType: "cosmos-sdk/MsgIBCSoftwareUpgrade",
        toAmino: tx_1.MsgIBCSoftwareUpgrade.toAmino,
        fromAmino: tx_1.MsgIBCSoftwareUpgrade.fromAmino
    },
    "/ibc.core.client.v1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map
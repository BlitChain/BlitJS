//@ts-nocheck
import { MsgUpdateParams, MsgMintCoins, MsgBurnCoins, MsgForceTransferCoins, MsgSetDenomMetadata, MsgCreateTask, MsgDeleteTask } from "./tx";
export const AminoConverter = {
    "/blit.blit.MsgUpdateParams": {
        aminoType: "blit/x/blit/MsgUpdateParams",
        toAmino: MsgUpdateParams.toAmino,
        fromAmino: MsgUpdateParams.fromAmino
    },
    "/blit.blit.MsgMintCoins": {
        aminoType: "/blit.blit.MsgMintCoins",
        toAmino: MsgMintCoins.toAmino,
        fromAmino: MsgMintCoins.fromAmino
    },
    "/blit.blit.MsgBurnCoins": {
        aminoType: "/blit.blit.MsgBurnCoins",
        toAmino: MsgBurnCoins.toAmino,
        fromAmino: MsgBurnCoins.fromAmino
    },
    "/blit.blit.MsgForceTransferCoins": {
        aminoType: "/blit.blit.MsgForceTransferCoins",
        toAmino: MsgForceTransferCoins.toAmino,
        fromAmino: MsgForceTransferCoins.fromAmino
    },
    "/blit.blit.MsgSetDenomMetadata": {
        aminoType: "/blit.blit.MsgSetDenomMetadata",
        toAmino: MsgSetDenomMetadata.toAmino,
        fromAmino: MsgSetDenomMetadata.fromAmino
    },
    "/blit.blit.MsgCreateTask": {
        aminoType: "/blit.blit.MsgCreateTask",
        toAmino: MsgCreateTask.toAmino,
        fromAmino: MsgCreateTask.fromAmino
    },
    "/blit.blit.MsgDeleteTask": {
        aminoType: "/blit.blit.MsgDeleteTask",
        toAmino: MsgDeleteTask.toAmino,
        fromAmino: MsgDeleteTask.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map
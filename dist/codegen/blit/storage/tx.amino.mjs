//@ts-nocheck
import { MsgUpdateParams, MsgCreateStorage, MsgUpdateStorage, MsgDeleteStorage } from "./tx";
export const AminoConverter = {
    "/blit.storage.MsgUpdateParams": {
        aminoType: "blit/x/storage/MsgUpdateParams",
        toAmino: MsgUpdateParams.toAmino,
        fromAmino: MsgUpdateParams.fromAmino
    },
    "/blit.storage.MsgCreateStorage": {
        aminoType: "/blit.storage.MsgCreateStorage",
        toAmino: MsgCreateStorage.toAmino,
        fromAmino: MsgCreateStorage.fromAmino
    },
    "/blit.storage.MsgUpdateStorage": {
        aminoType: "/blit.storage.MsgUpdateStorage",
        toAmino: MsgUpdateStorage.toAmino,
        fromAmino: MsgUpdateStorage.fromAmino
    },
    "/blit.storage.MsgDeleteStorage": {
        aminoType: "/blit.storage.MsgDeleteStorage",
        toAmino: MsgDeleteStorage.toAmino,
        fromAmino: MsgDeleteStorage.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map
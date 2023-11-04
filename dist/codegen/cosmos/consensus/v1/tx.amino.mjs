//@ts-nocheck
import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
    "/cosmos.consensus.v1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/MsgUpdateParams",
        toAmino: MsgUpdateParams.toAmino,
        fromAmino: MsgUpdateParams.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map
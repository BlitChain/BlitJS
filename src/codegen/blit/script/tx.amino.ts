//@ts-nocheck
import { MsgUpdateParams, MsgCreateScript, MsgUpdateScript, MsgRun } from "./tx";
export const AminoConverter = {
  "/blit.script.MsgUpdateParams": {
    aminoType: "blit/x/script/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/blit.script.MsgCreateScript": {
    aminoType: "/blit.script.MsgCreateScript",
    toAmino: MsgCreateScript.toAmino,
    fromAmino: MsgCreateScript.fromAmino
  },
  "/blit.script.MsgUpdateScript": {
    aminoType: "/blit.script.MsgUpdateScript",
    toAmino: MsgUpdateScript.toAmino,
    fromAmino: MsgUpdateScript.fromAmino
  },
  "/blit.script.MsgRun": {
    aminoType: "/blit.script.MsgRun",
    toAmino: MsgRun.toAmino,
    fromAmino: MsgRun.fromAmino
  }
};
import { MsgUpdateParams, MsgCreateScript, MsgUpdateScript } from "./tx";
import { MsgRun } from "./msgrun";
export declare const AminoConverter: {
    "/blit.script.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    "/blit.script.MsgCreateScript": {
        aminoType: string;
        toAmino: (message: MsgCreateScript) => import("./tx").MsgCreateScriptAmino;
        fromAmino: (object: import("./tx").MsgCreateScriptAmino) => MsgCreateScript;
    };
    "/blit.script.MsgUpdateScript": {
        aminoType: string;
        toAmino: (message: MsgUpdateScript) => import("./tx").MsgUpdateScriptAmino;
        fromAmino: (object: import("./tx").MsgUpdateScriptAmino) => MsgUpdateScript;
    };
    "/blit.script.MsgRun": {
        aminoType: string;
        toAmino: (message: MsgRun) => import("./msgrun").MsgRunAmino;
        fromAmino: (object: import("./msgrun").MsgRunAmino) => MsgRun;
    };
};

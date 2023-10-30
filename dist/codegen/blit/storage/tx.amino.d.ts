import { MsgUpdateParams, MsgCreateStorage, MsgUpdateStorage, MsgDeleteStorage } from "./tx";
export declare const AminoConverter: {
    "/blit.storage.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    "/blit.storage.MsgCreateStorage": {
        aminoType: string;
        toAmino: (message: MsgCreateStorage) => import("./tx").MsgCreateStorageAmino;
        fromAmino: (object: import("./tx").MsgCreateStorageAmino) => MsgCreateStorage;
    };
    "/blit.storage.MsgUpdateStorage": {
        aminoType: string;
        toAmino: (message: MsgUpdateStorage) => import("./tx").MsgUpdateStorageAmino;
        fromAmino: (object: import("./tx").MsgUpdateStorageAmino) => MsgUpdateStorage;
    };
    "/blit.storage.MsgDeleteStorage": {
        aminoType: string;
        toAmino: (message: MsgDeleteStorage) => import("./tx").MsgDeleteStorageAmino;
        fromAmino: (object: import("./tx").MsgDeleteStorageAmino) => MsgDeleteStorage;
    };
};

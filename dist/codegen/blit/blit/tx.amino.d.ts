import { MsgUpdateParams, MsgMintCoins, MsgBurnCoins, MsgForceTransferCoins, MsgSetDenomMetadata } from "./tx";
export declare const AminoConverter: {
    "/blit.blit.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    "/blit.blit.MsgMintCoins": {
        aminoType: string;
        toAmino: (message: MsgMintCoins) => import("./tx").MsgMintCoinsAmino;
        fromAmino: (object: import("./tx").MsgMintCoinsAmino) => MsgMintCoins;
    };
    "/blit.blit.MsgBurnCoins": {
        aminoType: string;
        toAmino: (message: MsgBurnCoins) => import("./tx").MsgBurnCoinsAmino;
        fromAmino: (object: import("./tx").MsgBurnCoinsAmino) => MsgBurnCoins;
    };
    "/blit.blit.MsgForceTransferCoins": {
        aminoType: string;
        toAmino: (message: MsgForceTransferCoins) => import("./tx").MsgForceTransferCoinsAmino;
        fromAmino: (object: import("./tx").MsgForceTransferCoinsAmino) => MsgForceTransferCoins;
    };
    "/blit.blit.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: (message: MsgSetDenomMetadata) => import("./tx").MsgSetDenomMetadataAmino;
        fromAmino: (object: import("./tx").MsgSetDenomMetadataAmino) => MsgSetDenomMetadata;
    };
};

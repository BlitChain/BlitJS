import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: any;
        };
        authz: {
            v1beta1: any;
        };
        bank: {
            v1beta1: any;
        };
        circuit: {
            v1: any;
        };
        consensus: {
            v1: any;
        };
        distribution: {
            v1beta1: any;
        };
        feegrant: {
            v1beta1: any;
        };
        gov: {
            v1: any;
            v1beta1: any;
        };
        group: {
            v1: any;
        };
        mint: {
            v1beta1: any;
        };
        nft: {
            v1beta1: any;
        };
        staking: {
            v1beta1: any;
        };
        upgrade: {
            v1beta1: any;
        };
        vesting: {
            v1beta1: any;
        };
    };
}>;

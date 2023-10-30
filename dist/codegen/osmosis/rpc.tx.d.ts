import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        authz: {
            v1beta1: any;
        };
        bank: {
            v1beta1: any;
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
    osmosis: {
        gamm: {
            poolmodels: {
                balancer: {
                    v1beta1: any;
                };
                stableswap: {
                    v1beta1: any;
                };
            };
            v1beta1: any;
        };
        incentives: any;
        lockup: any;
        protorev: {
            v1beta1: any;
        };
        superfluid: any;
        swaprouter: {
            v1beta1: any;
        };
        tokenfactory: {
            v1beta1: any;
        };
        valsetpref: {
            v1beta1: any;
        };
    };
}>;

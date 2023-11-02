import * as blitjs from './codegen';
export default blitjs;
export declare const experimentalHelpers: {
    makeQueryClient: ({ restEndpoint }: {
        restEndpoint: any;
    }) => Promise<{
        blit: {
            blit: import("./codegen/blit/blit/query.lcd").LCDQueryClient;
            script: import("./codegen/blit/script/query.lcd").LCDQueryClient;
            storage: import("./codegen/blit/storage/query.lcd").LCDQueryClient;
        };
        cosmos: {
            auth: {
                v1beta1: import("./codegen/cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
            };
            authz: {
                v1beta1: import("./codegen/cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
            };
            bank: {
                v1beta1: import("./codegen/cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
            };
            base: {
                tendermint: {
                    v1beta1: import("./codegen/cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            distribution: {
                v1beta1: import("./codegen/cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
            };
            feegrant: {
                v1beta1: import("./codegen/cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
            };
            gov: {
                v1: import("./codegen/cosmos/gov/v1/query.lcd").LCDQueryClient;
                v1beta1: import("./codegen/cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
            };
            group: {
                v1: import("./codegen/cosmos/group/v1/query.lcd").LCDQueryClient;
            };
            mint: {
                v1beta1: import("./codegen/cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
            };
            nft: {
                v1beta1: import("./codegen/cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
            };
            params: {
                v1beta1: import("./codegen/cosmos/params/v1beta1/query.lcd").LCDQueryClient;
            };
            staking: {
                v1beta1: import("./codegen/cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
            };
            tx: {
                v1beta1: import("./codegen/cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
            };
            upgrade: {
                v1beta1: import("./codegen/cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
            };
        };
    }>;
    makeKeplrClient: ({ rpcEndpoint, restEndpoint, chainId }: {
        rpcEndpoint: any;
        restEndpoint: any;
        chainId: any;
    }) => Promise<unknown>;
    runFunction: ({ msgClient, caller_address, script_address, function_name, kwargs, extra_code, grantee }: {
        msgClient: any;
        caller_address: any;
        script_address: any;
        function_name: any;
        kwargs: any;
        extra_code: any;
        grantee: any;
    }) => Promise<any>;
    queryFunction: ({ queryClient, script_address, caller_address, function_name, kwargs, extra_code, grantee }: {
        queryClient: any;
        script_address: any;
        caller_address: any;
        function_name: any;
        kwargs: any;
        extra_code: any;
        grantee: any;
    }) => Promise<any>;
};

import * as blitjs from './codegen';
export default blitjs;
export declare const experimentalHelpers: {
    makeKeplrClient: ({ rpcEndpoint, restEndpoint }: {
        rpcEndpoint: any;
        restEndpoint: any;
    }) => Promise<import("@cosmjs/stargate").SigningStargateClient>;
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
    makeChainInfo: ({ rpcEndpoint, restEndpoint }: {
        rpcEndpoint: any;
        restEndpoint: any;
    }) => Promise<{
        features: any[];
        chainId: string;
        chainName: string;
        rpc: any;
        rest: any;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
    }>;
};

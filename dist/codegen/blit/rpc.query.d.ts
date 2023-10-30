export declare const createGrpcGateWayClient: ({ endpoint }: {
    endpoint: string;
}) => Promise<{
    blit: {
        blit: import("./blit/query.rpc.Query").QueryClientImpl;
        script: import("./script/query.rpc.Query").QueryClientImpl;
        storage: import("./storage/query.rpc.Query").QueryClientImpl;
    };
    cosmos: {
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        base: {
            tendermint: {
                v1beta1: import("../cosmos/base/tendermint/v1beta1/query.rpc.Service").ServiceClientImpl;
            };
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        gov: {
            v1: import("../cosmos/gov/v1/query.rpc.Query").QueryClientImpl;
            v1beta1: import("../cosmos/gov/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        group: {
            v1: import("../cosmos/group/v1/query.rpc.Query").QueryClientImpl;
        };
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        params: {
            v1beta1: import("../cosmos/params/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        tx: {
            v1beta1: import("../cosmos/tx/v1beta1/service.rpc.Service").ServiceClientImpl;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.Query").QueryClientImpl;
        };
    };
}>;

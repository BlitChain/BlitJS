export declare const createGrpcGateWayClient: ({ endpoint }: {
    endpoint: string;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("./auth/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        authz: {
            v1beta1: import("./authz/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        bank: {
            v1beta1: import("./bank/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        base: {
            node: {
                v1beta1: import("./base/node/v1beta1/query.rpc.Service").ServiceClientImpl;
            };
            tendermint: {
                v1beta1: import("./base/tendermint/v1beta1/query.rpc.Service").ServiceClientImpl;
            };
        };
        circuit: {
            v1: import("./circuit/v1/query.rpc.Query").QueryClientImpl;
        };
        consensus: {
            v1: import("./consensus/v1/query.rpc.Query").QueryClientImpl;
        };
        distribution: {
            v1beta1: import("./distribution/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        feegrant: {
            v1beta1: import("./feegrant/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        gov: {
            v1: import("./gov/v1/query.rpc.Query").QueryClientImpl;
            v1beta1: import("./gov/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        group: {
            v1: import("./group/v1/query.rpc.Query").QueryClientImpl;
        };
        mint: {
            v1beta1: import("./mint/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        nft: {
            v1beta1: import("./nft/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        orm: {
            query: {
                v1alpha1: import("./orm/query/v1alpha1/query.rpc.Query").QueryClientImpl;
            };
        };
        params: {
            v1beta1: import("./params/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        staking: {
            v1beta1: import("./staking/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        tx: {
            v1beta1: import("./tx/v1beta1/service.rpc.Service").ServiceClientImpl;
        };
        upgrade: {
            v1beta1: import("./upgrade/v1beta1/query.rpc.Query").QueryClientImpl;
        };
    };
}>;

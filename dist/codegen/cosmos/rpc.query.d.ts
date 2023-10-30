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
            tendermint: {
                v1beta1: import("./base/tendermint/v1beta1/query.rpc.Service").ServiceClientImpl;
            };
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

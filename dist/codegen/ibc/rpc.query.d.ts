export declare const createGrpcGateWayClient: ({ endpoint }: {
    endpoint: string;
}) => Promise<{
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
            node: {
                v1beta1: import("../cosmos/base/node/v1beta1/query.rpc.Service").ServiceClientImpl;
            };
            tendermint: {
                v1beta1: import("../cosmos/base/tendermint/v1beta1/query.rpc.Service").ServiceClientImpl;
            };
        };
        circuit: {
            v1: import("../cosmos/circuit/v1/query.rpc.Query").QueryClientImpl;
        };
        consensus: {
            v1: import("../cosmos/consensus/v1/query.rpc.Query").QueryClientImpl;
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
        nft: {
            v1beta1: import("../cosmos/nft/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        orm: {
            query: {
                v1alpha1: import("../cosmos/orm/query/v1alpha1/query.rpc.Query").QueryClientImpl;
            };
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
    ibc: {
        applications: {
            interchain_accounts: {
                controller: {
                    v1: import("./applications/interchain_accounts/controller/v1/query.rpc.Query").QueryClientImpl;
                };
                host: {
                    v1: import("./applications/interchain_accounts/host/v1/query.rpc.Query").QueryClientImpl;
                };
            };
            transfer: {
                v1: import("./applications/transfer/v1/query.rpc.Query").QueryClientImpl;
            };
        };
        core: {
            channel: {
                v1: import("./core/channel/v1/query.rpc.Query").QueryClientImpl;
            };
            client: {
                v1: import("./core/client/v1/query.rpc.Query").QueryClientImpl;
            };
            connection: {
                v1: import("./core/connection/v1/query.rpc.Query").QueryClientImpl;
            };
        };
    };
}>;

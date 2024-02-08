//@ts-nocheck
export const createGrpcGateWayClient = async ({ endpoint }) => {
    endpoint = endpoint.replace(/\/*$/g, "");
    return {
        blit: {
            blit: new (await import("./blit/query.rpc.Service")).ServiceClientImpl(endpoint),
            script: new (await import("./script/query.rpc.Query")).QueryClientImpl(endpoint),
            storage: new (await import("./storage/query.rpc.Query")).QueryClientImpl(endpoint)
        },
        cosmos: {
            auth: {
                v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            authz: {
                v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            bank: {
                v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            base: {
                node: {
                    v1beta1: new (await import("../cosmos/base/node/v1beta1/query.rpc.Service")).ServiceClientImpl(endpoint)
                },
                tendermint: {
                    v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).ServiceClientImpl(endpoint)
                }
            },
            circuit: {
                v1: new (await import("../cosmos/circuit/v1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            consensus: {
                v1: new (await import("../cosmos/consensus/v1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            distribution: {
                v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            feegrant: {
                v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            gov: {
                v1: new (await import("../cosmos/gov/v1/query.rpc.Query")).QueryClientImpl(endpoint),
                v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            group: {
                v1: new (await import("../cosmos/group/v1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            mint: {
                v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            nft: {
                v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            orm: {
                query: {
                    v1alpha1: new (await import("../cosmos/orm/query/v1alpha1/query.rpc.Query")).QueryClientImpl(endpoint)
                }
            },
            params: {
                v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            staking: {
                v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            tx: {
                v1beta1: new (await import("../cosmos/tx/v1beta1/service.rpc.Service")).ServiceClientImpl(endpoint)
            },
            upgrade: {
                v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            }
        }
    };
};
//# sourceMappingURL=rpc.query.js.map
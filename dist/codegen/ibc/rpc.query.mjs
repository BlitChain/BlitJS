//@ts-nocheck
export const createGrpcGateWayClient = async ({ endpoint }) => {
    endpoint = endpoint.replace(/\/*$/g, "");
    return {
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
                tendermint: {
                    v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).ServiceClientImpl(endpoint)
                }
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
        },
        ibc: {
            applications: {
                interchain_accounts: {
                    controller: {
                        v1: new (await import("./applications/interchain_accounts/controller/v1/query.rpc.Query")).QueryClientImpl(endpoint)
                    },
                    host: {
                        v1: new (await import("./applications/interchain_accounts/host/v1/query.rpc.Query")).QueryClientImpl(endpoint)
                    }
                },
                transfer: {
                    v1: new (await import("./applications/transfer/v1/query.rpc.Query")).QueryClientImpl(endpoint)
                }
            },
            core: {
                channel: {
                    v1: new (await import("./core/channel/v1/query.rpc.Query")).QueryClientImpl(endpoint)
                },
                client: {
                    v1: new (await import("./core/client/v1/query.rpc.Query")).QueryClientImpl(endpoint)
                },
                connection: {
                    v1: new (await import("./core/connection/v1/query.rpc.Query")).QueryClientImpl(endpoint)
                }
            }
        }
    };
};
//# sourceMappingURL=rpc.query.js.map
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
        osmosis: {
            downtimedetector: {
                v1beta1: new (await import("./downtime-detector/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            epochs: {
                v1beta1: new (await import("./epochs/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            gamm: {
                v1beta1: new (await import("./gamm/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint),
                v2: new (await import("./gamm/v2/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            ibcratelimit: {
                v1beta1: new (await import("./ibc-rate-limit/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            incentives: new (await import("./incentives/query.rpc.Query")).QueryClientImpl(endpoint),
            lockup: new (await import("./lockup/query.rpc.Query")).QueryClientImpl(endpoint),
            mint: {
                v1beta1: new (await import("./mint/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            poolincentives: {
                v1beta1: new (await import("./pool-incentives/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            protorev: {
                v1beta1: new (await import("./protorev/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            superfluid: new (await import("./superfluid/query.rpc.Query")).QueryClientImpl(endpoint),
            swaprouter: {
                v1beta1: new (await import("./swaprouter/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            tokenfactory: {
                v1beta1: new (await import("./tokenfactory/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            twap: {
                v1beta1: new (await import("./twap/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            txfees: {
                v1beta1: new (await import("./txfees/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            valsetpref: {
                v1beta1: new (await import("./valset-pref/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            }
        }
    };
};
//# sourceMappingURL=rpc.query.js.map
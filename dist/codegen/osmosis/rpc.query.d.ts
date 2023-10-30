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
    osmosis: {
        downtimedetector: {
            v1beta1: import("./downtime-detector/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        epochs: {
            v1beta1: import("./epochs/query.rpc.Query").QueryClientImpl;
        };
        gamm: {
            v1beta1: import("./gamm/v1beta1/query.rpc.Query").QueryClientImpl;
            v2: import("./gamm/v2/query.rpc.Query").QueryClientImpl;
        };
        ibcratelimit: {
            v1beta1: import("./ibc-rate-limit/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        incentives: import("./incentives/query.rpc.Query").QueryClientImpl;
        lockup: import("./lockup/query.rpc.Query").QueryClientImpl;
        mint: {
            v1beta1: import("./mint/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        poolincentives: {
            v1beta1: import("./pool-incentives/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        protorev: {
            v1beta1: import("./protorev/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        superfluid: import("./superfluid/query.rpc.Query").QueryClientImpl;
        swaprouter: {
            v1beta1: import("./swaprouter/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        tokenfactory: {
            v1beta1: import("./tokenfactory/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        twap: {
            v1beta1: import("./twap/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        txfees: {
            v1beta1: import("./txfees/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        valsetpref: {
            v1beta1: import("./valset-pref/v1beta1/query.rpc.Query").QueryClientImpl;
        };
    };
}>;

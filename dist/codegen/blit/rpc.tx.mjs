export const createRPCMsgClient = async ({ rpc }) => ({
    blit: {
        blit: new (await import("./blit/tx.rpc.msg")).MsgClientImpl(rpc),
        script: new (await import("./script/tx.rpc.msg")).MsgClientImpl(rpc),
        storage: new (await import("./storage/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    cosmos: {
        auth: {
            v1beta1: new (await import("../cosmos/auth/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        authz: {
            v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        bank: {
            v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        consensus: {
            v1: new (await import("../cosmos/consensus/v1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        distribution: {
            v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        feegrant: {
            v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        gov: {
            v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
            v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        group: {
            v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        mint: {
            v1beta1: new (await import("../cosmos/mint/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        nft: {
            v1beta1: new (await import("../cosmos/nft/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        staking: {
            v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        upgrade: {
            v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        vesting: {
            v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        }
    }
});
//# sourceMappingURL=rpc.tx.js.map
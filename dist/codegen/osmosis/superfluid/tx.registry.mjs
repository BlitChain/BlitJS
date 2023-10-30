import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
export const registry = [["/osmosis.superfluid.MsgSuperfluidDelegate", MsgSuperfluidDelegate], ["/osmosis.superfluid.MsgSuperfluidUndelegate", MsgSuperfluidUndelegate], ["/osmosis.superfluid.MsgSuperfluidUnbondLock", MsgSuperfluidUnbondLock], ["/osmosis.superfluid.MsgLockAndSuperfluidDelegate", MsgLockAndSuperfluidDelegate], ["/osmosis.superfluid.MsgUnPoolWhitelistedPool", MsgUnPoolWhitelistedPool]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        superfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
                value: MsgSuperfluidDelegate.encode(value).finish()
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
                value: MsgSuperfluidUndelegate.encode(value).finish()
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
                value: MsgSuperfluidUnbondLock.encode(value).finish()
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
                value: MsgLockAndSuperfluidDelegate.encode(value).finish()
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
                value: MsgUnPoolWhitelistedPool.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        superfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
                value
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
                value
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
                value
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
                value
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
                value
            };
        }
    },
    toJSON: {
        superfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
                value: MsgSuperfluidDelegate.toJSON(value)
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
                value: MsgSuperfluidUndelegate.toJSON(value)
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
                value: MsgSuperfluidUnbondLock.toJSON(value)
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
                value: MsgLockAndSuperfluidDelegate.toJSON(value)
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
                value: MsgUnPoolWhitelistedPool.toJSON(value)
            };
        }
    },
    fromJSON: {
        superfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
                value: MsgSuperfluidDelegate.fromJSON(value)
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
                value: MsgSuperfluidUndelegate.fromJSON(value)
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
                value: MsgSuperfluidUnbondLock.fromJSON(value)
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
                value: MsgLockAndSuperfluidDelegate.fromJSON(value)
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
                value: MsgUnPoolWhitelistedPool.fromJSON(value)
            };
        }
    },
    fromPartial: {
        superfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
                value: MsgSuperfluidDelegate.fromPartial(value)
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
                value: MsgSuperfluidUndelegate.fromPartial(value)
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
                value: MsgSuperfluidUnbondLock.fromPartial(value)
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
                value: MsgLockAndSuperfluidDelegate.fromPartial(value)
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
                value: MsgUnPoolWhitelistedPool.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
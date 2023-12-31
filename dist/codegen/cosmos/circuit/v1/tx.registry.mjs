import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
export const registry = [["/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker", MsgAuthorizeCircuitBreaker], ["/cosmos.circuit.v1.MsgTripCircuitBreaker", MsgTripCircuitBreaker], ["/cosmos.circuit.v1.MsgResetCircuitBreaker", MsgResetCircuitBreaker]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        authorizeCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value: MsgAuthorizeCircuitBreaker.encode(value).finish()
            };
        },
        tripCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value: MsgTripCircuitBreaker.encode(value).finish()
            };
        },
        resetCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value: MsgResetCircuitBreaker.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        authorizeCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value
            };
        },
        tripCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value
            };
        },
        resetCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value
            };
        }
    },
    toJSON: {
        authorizeCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value: MsgAuthorizeCircuitBreaker.toJSON(value)
            };
        },
        tripCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value: MsgTripCircuitBreaker.toJSON(value)
            };
        },
        resetCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value: MsgResetCircuitBreaker.toJSON(value)
            };
        }
    },
    fromJSON: {
        authorizeCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value: MsgAuthorizeCircuitBreaker.fromJSON(value)
            };
        },
        tripCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value: MsgTripCircuitBreaker.fromJSON(value)
            };
        },
        resetCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value: MsgResetCircuitBreaker.fromJSON(value)
            };
        }
    },
    fromPartial: {
        authorizeCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
                value: MsgAuthorizeCircuitBreaker.fromPartial(value)
            };
        },
        tripCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
                value: MsgTripCircuitBreaker.fromPartial(value)
            };
        },
        resetCircuitBreaker(value) {
            return {
                typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
                value: MsgResetCircuitBreaker.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
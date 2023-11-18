//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /**
     * AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another
     * account's circuit breaker permissions.
     */
    static AuthorizeCircuitBreaker(request, initRequest) {
        return fm.fetchReq(`/cosmos.circuit.v1/AuthorizeCircuitBreaker`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** TripCircuitBreaker pauses processing of Msg's in the state machine. */
    static TripCircuitBreaker(request, initRequest) {
        return fm.fetchReq(`/cosmos.circuit.v1/TripCircuitBreaker`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * ResetCircuitBreaker resumes processing of Msg's in the state machine that
     * have been been paused using TripCircuitBreaker.
     */
    static ResetCircuitBreaker(request, initRequest) {
        return fm.fetchReq(`/cosmos.circuit.v1/ResetCircuitBreaker`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
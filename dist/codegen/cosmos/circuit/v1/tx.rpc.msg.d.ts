import * as fm from "../../../grpc-gateway";
import { MsgAuthorizeCircuitBreaker, MsgAuthorizeCircuitBreakerResponse, MsgTripCircuitBreaker, MsgTripCircuitBreakerResponse, MsgResetCircuitBreaker, MsgResetCircuitBreakerResponse } from "./tx";
export declare class Msg {
    /**
     * AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another
     * account's circuit breaker permissions.
     */
    static AuthorizeCircuitBreaker(request: MsgAuthorizeCircuitBreaker, initRequest?: fm.InitReq): Promise<MsgAuthorizeCircuitBreakerResponse>;
    /** TripCircuitBreaker pauses processing of Msg's in the state machine. */
    static TripCircuitBreaker(request: MsgTripCircuitBreaker, initRequest?: fm.InitReq): Promise<MsgTripCircuitBreakerResponse>;
    /**
     * ResetCircuitBreaker resumes processing of Msg's in the state machine that
     * have been been paused using TripCircuitBreaker.
     */
    static ResetCircuitBreaker(request: MsgResetCircuitBreaker, initRequest?: fm.InitReq): Promise<MsgResetCircuitBreakerResponse>;
}

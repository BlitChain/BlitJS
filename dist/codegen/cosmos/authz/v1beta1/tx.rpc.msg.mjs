//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /**
     * Grant grants the provided authorization to the grantee on the granter's
     * account with the provided expiration time. If there is already a grant
     * for the given (granter, grantee, Authorization) triple, then the grant
     * will be overwritten.
     */
    static Grant(request, initRequest) {
        return fm.fetchReq(`/cosmos.authz.v1beta1/Grant`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * Exec attempts to execute the provided messages using
     * authorizations granted to the grantee. Each message should have only
     * one signer corresponding to the granter of the authorization.
     */
    static Exec(request, initRequest) {
        return fm.fetchReq(`/cosmos.authz.v1beta1/Exec`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * Revoke revokes any authorization corresponding to the provided method name on the
     * granter's account that has been granted to the grantee.
     */
    static Revoke(request, initRequest) {
        return fm.fetchReq(`/cosmos.authz.v1beta1/Revoke`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
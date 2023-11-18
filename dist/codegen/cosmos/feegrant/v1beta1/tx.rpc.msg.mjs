//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /**
     * GrantAllowance grants fee allowance to the grantee on the granter's
     * account with the provided expiration time.
     */
    static GrantAllowance(request, initRequest) {
        return fm.fetchReq(`/cosmos.feegrant.v1beta1/GrantAllowance`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * RevokeAllowance revokes any fee allowance of granter's account that
     * has been granted to the grantee.
     */
    static RevokeAllowance(request, initRequest) {
        return fm.fetchReq(`/cosmos.feegrant.v1beta1/RevokeAllowance`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * PruneAllowances prunes expired fee allowances, currently up to 75 at a time.
     *
     * Since cosmos-sdk 0.50
     */
    static PruneAllowances(request, initRequest) {
        return fm.fetchReq(`/cosmos.feegrant.v1beta1/PruneAllowances`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
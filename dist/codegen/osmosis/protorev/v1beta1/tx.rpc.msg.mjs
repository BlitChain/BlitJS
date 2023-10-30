//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /**
     * SetHotRoutes sets the hot routes that will be explored when creating
     * cyclic arbitrage routes. Can only be called by the admin account.
     */
    static SetHotRoutes(request, initRequest) {
        return fm.fetchReq(`/osmosis.protorev.v1beta1/SetHotRoutes`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * SetDeveloperAccount sets the account that can withdraw a portion of the
     * profits from the protorev module. This will be Skip's address.
     */
    static SetDeveloperAccount(request, initRequest) {
        return fm.fetchReq(`/osmosis.protorev.v1beta1/SetDeveloperAccount`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
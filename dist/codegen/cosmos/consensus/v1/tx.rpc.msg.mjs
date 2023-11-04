//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /**
     * UpdateParams defines a governance operation for updating the x/consensus_param module parameters.
     * The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    static UpdateParams(request, initRequest) {
        return fm.fetchReq(`/cosmos.consensus.v1/UpdateParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
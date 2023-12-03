//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /**
     * CreateVestingAccount defines a method that enables creating a vesting
     * account.
     */
    static CreateVestingAccount(request, initRequest) {
        return fm.fetchReq(`/cosmos.vesting.v1beta1/CreateVestingAccount`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * CreatePermanentLockedAccount defines a method that enables creating a permanent
     * locked account.
     */
    static CreatePermanentLockedAccount(request, initRequest) {
        return fm.fetchReq(`/cosmos.vesting.v1beta1/CreatePermanentLockedAccount`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * CreatePeriodicVestingAccount defines a method that enables creating a
     * periodic vesting account.
     */
    static CreatePeriodicVestingAccount(request, initRequest) {
        return fm.fetchReq(`/cosmos.vesting.v1beta1/CreatePeriodicVestingAccount`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
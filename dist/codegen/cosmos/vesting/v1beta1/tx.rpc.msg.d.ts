import * as fm from "../../../grpc-gateway";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountResponse, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountResponse } from "./tx";
export declare class Msg {
    /**
     * CreateVestingAccount defines a method that enables creating a vesting
     * account.
     */
    static CreateVestingAccount(request: MsgCreateVestingAccount, initRequest?: fm.InitReq): Promise<MsgCreateVestingAccountResponse>;
    /**
     * CreatePermanentLockedAccount defines a method that enables creating a permanent
     * locked account.
     *
     * Since: cosmos-sdk 0.46
     */
    static CreatePermanentLockedAccount(request: MsgCreatePermanentLockedAccount, initRequest?: fm.InitReq): Promise<MsgCreatePermanentLockedAccountResponse>;
    /**
     * CreatePeriodicVestingAccount defines a method that enables creating a
     * periodic vesting account.
     *
     * Since: cosmos-sdk 0.46
     */
    static CreatePeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount, initRequest?: fm.InitReq): Promise<MsgCreatePeriodicVestingAccountResponse>;
}

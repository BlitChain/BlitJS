import * as fm from "../../../grpc-gateway";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export declare class Msg {
    /** CreateValidator defines a method for creating a new validator. */
    static CreateValidator(request: MsgCreateValidator, initRequest?: fm.InitReq): Promise<MsgCreateValidatorResponse>;
    /** EditValidator defines a method for editing an existing validator. */
    static EditValidator(request: MsgEditValidator, initRequest?: fm.InitReq): Promise<MsgEditValidatorResponse>;
    /**
     * Delegate defines a method for performing a delegation of coins
     * from a delegator to a validator.
     */
    static Delegate(request: MsgDelegate, initRequest?: fm.InitReq): Promise<MsgDelegateResponse>;
    /**
     * BeginRedelegate defines a method for performing a redelegation
     * of coins from a delegator and source validator to a destination validator.
     */
    static BeginRedelegate(request: MsgBeginRedelegate, initRequest?: fm.InitReq): Promise<MsgBeginRedelegateResponse>;
    /**
     * Undelegate defines a method for performing an undelegation from a
     * delegate and a validator.
     */
    static Undelegate(request: MsgUndelegate, initRequest?: fm.InitReq): Promise<MsgUndelegateResponse>;
    /**
     * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
     * and delegate back to previous validator.
     *
     * Since: cosmos-sdk 0.46
     */
    static CancelUnbondingDelegation(request: MsgCancelUnbondingDelegation, initRequest?: fm.InitReq): Promise<MsgCancelUnbondingDelegationResponse>;
    /**
     * UpdateParams defines an operation for updating the x/staking module
     * parameters.
     * Since: cosmos-sdk 0.47
     */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
}

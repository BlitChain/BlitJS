import * as fm from "../../../grpc-gateway";
import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse } from "./tx";
export declare class Msg {
    /**
     * GrantAllowance grants fee allowance to the grantee on the granter's
     * account with the provided expiration time.
     */
    static GrantAllowance(request: MsgGrantAllowance, initRequest?: fm.InitReq): Promise<MsgGrantAllowanceResponse>;
    /**
     * RevokeAllowance revokes any fee allowance of granter's account that
     * has been granted to the grantee.
     */
    static RevokeAllowance(request: MsgRevokeAllowance, initRequest?: fm.InitReq): Promise<MsgRevokeAllowanceResponse>;
}

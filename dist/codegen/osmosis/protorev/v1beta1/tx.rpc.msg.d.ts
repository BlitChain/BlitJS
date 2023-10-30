import * as fm from "../../../grpc-gateway";
import { MsgSetHotRoutes, MsgSetHotRoutesResponse, MsgSetDeveloperAccount, MsgSetDeveloperAccountResponse } from "./tx";
export declare class Msg {
    /**
     * SetHotRoutes sets the hot routes that will be explored when creating
     * cyclic arbitrage routes. Can only be called by the admin account.
     */
    static SetHotRoutes(request: MsgSetHotRoutes, initRequest?: fm.InitReq): Promise<MsgSetHotRoutesResponse>;
    /**
     * SetDeveloperAccount sets the account that can withdraw a portion of the
     * profits from the protorev module. This will be Skip's address.
     */
    static SetDeveloperAccount(request: MsgSetDeveloperAccount, initRequest?: fm.InitReq): Promise<MsgSetDeveloperAccountResponse>;
}

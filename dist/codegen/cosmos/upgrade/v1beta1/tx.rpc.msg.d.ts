import * as fm from "../../../grpc-gateway";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeResponse, MsgCancelUpgrade, MsgCancelUpgradeResponse } from "./tx";
export declare class Msg {
    /**
     * SoftwareUpgrade is a governance operation for initiating a software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    static SoftwareUpgrade(request: MsgSoftwareUpgrade, initRequest?: fm.InitReq): Promise<MsgSoftwareUpgradeResponse>;
    /**
     * CancelUpgrade is a governance operation for cancelling a previously
     * approved software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    static CancelUpgrade(request: MsgCancelUpgrade, initRequest?: fm.InitReq): Promise<MsgCancelUpgradeResponse>;
}

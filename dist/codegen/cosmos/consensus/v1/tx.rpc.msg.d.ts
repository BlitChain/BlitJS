import * as fm from "../../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export declare class Msg {
    /**
     * UpdateParams defines a governance operation for updating the x/consensus module parameters.
     * The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
}

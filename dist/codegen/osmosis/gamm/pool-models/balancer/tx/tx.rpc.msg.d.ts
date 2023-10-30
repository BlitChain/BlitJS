import * as fm from "../../../../../grpc-gateway";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponse } from "./tx";
export declare class Msg {
    static CreateBalancerPool(request: MsgCreateBalancerPool, initRequest?: fm.InitReq): Promise<MsgCreateBalancerPoolResponse>;
}

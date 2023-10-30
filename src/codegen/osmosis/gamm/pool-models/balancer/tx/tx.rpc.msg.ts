//@ts-nocheck
import * as fm from "../../../../../grpc-gateway";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponse } from "./tx";
export class Msg {
  static CreateBalancerPool(request: MsgCreateBalancerPool, initRequest?: fm.InitReq): Promise<MsgCreateBalancerPoolResponse> {
    return fm.fetchReq(`/osmosis.gamm.poolmodels.balancer.v1beta1/CreateBalancerPool`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
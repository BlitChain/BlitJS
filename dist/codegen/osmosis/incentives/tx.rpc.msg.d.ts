import * as fm from "../../grpc-gateway";
import { MsgCreateGauge, MsgCreateGaugeResponse, MsgAddToGauge, MsgAddToGaugeResponse } from "./tx";
export declare class Msg {
    static CreateGauge(request: MsgCreateGauge, initRequest?: fm.InitReq): Promise<MsgCreateGaugeResponse>;
    static AddToGauge(request: MsgAddToGauge, initRequest?: fm.InitReq): Promise<MsgAddToGaugeResponse>;
}

import { LCDClient } from "@cosmology/lcd";
import { EndpointsRequest, EndpointsResponseSDKType } from "./service";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    endpoints(_params?: EndpointsRequest): Promise<EndpointsResponseSDKType>;
}

//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { EndpointsRequest, EndpointsResponseSDKType } from "./service";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.endpoints = this.endpoints.bind(this);
  }
  /* Config queries for the operator configuration. */
  async endpoints(_params: EndpointsRequest = {}): Promise<EndpointsResponseSDKType> {
    const endpoint = `blit/services/endpoints`;
    return await this.req.get<EndpointsResponseSDKType>(endpoint);
  }
}
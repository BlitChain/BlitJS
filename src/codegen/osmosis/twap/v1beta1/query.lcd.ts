//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { ParamsRequest, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.arithmeticTwap = this.arithmeticTwap.bind(this);
    this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
  }
  /* Params */
  async params(_params: ParamsRequest = {}): Promise<ParamsResponseSDKType> {
    const endpoint = `osmosis/twap/v1beta1/Params`;
    return await this.req.get<ParamsResponseSDKType>(endpoint);
  }
  /* ArithmeticTwap */
  async arithmeticTwap(params: ArithmeticTwapRequest): Promise<ArithmeticTwapResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pool_id !== "undefined") {
      options.params.pool_id = params.pool_id;
    }
    if (typeof params?.base_asset !== "undefined") {
      options.params.base_asset = params.base_asset;
    }
    if (typeof params?.quote_asset !== "undefined") {
      options.params.quote_asset = params.quote_asset;
    }
    if (typeof params?.start_time !== "undefined") {
      options.params.start_time = params.start_time;
    }
    if (typeof params?.end_time !== "undefined") {
      options.params.end_time = params.end_time;
    }
    const endpoint = `osmosis/twap/v1beta1/ArithmeticTwap`;
    return await this.req.get<ArithmeticTwapResponseSDKType>(endpoint, options);
  }
  /* ArithmeticTwapToNow */
  async arithmeticTwapToNow(params: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pool_id !== "undefined") {
      options.params.pool_id = params.pool_id;
    }
    if (typeof params?.base_asset !== "undefined") {
      options.params.base_asset = params.base_asset;
    }
    if (typeof params?.quote_asset !== "undefined") {
      options.params.quote_asset = params.quote_asset;
    }
    if (typeof params?.start_time !== "undefined") {
      options.params.start_time = params.start_time;
    }
    const endpoint = `osmosis/twap/v1beta1/ArithmeticTwapToNow`;
    return await this.req.get<ArithmeticTwapToNowResponseSDKType>(endpoint, options);
  }
}
//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
export class Query {
  /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
  static GaugeIds(request: QueryGaugeIdsRequest, initRequest?: fm.InitReq): Promise<QueryGaugeIdsResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/gauge-ids/${request["pool_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DistrInfo returns the pool's matching gauge ids and weights. */
  static DistrInfo(request: QueryDistrInfoRequest, initRequest?: fm.InitReq): Promise<QueryDistrInfoResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/distr_info?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params returns pool incentives params. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** LockableDurations returns lock durations for pools. */
  static LockableDurations(request: QueryLockableDurationsRequest, initRequest?: fm.InitReq): Promise<QueryLockableDurationsResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/lockable_durations?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** IncentivizedPools returns currently incentivized pools */
  static IncentivizedPools(request: QueryIncentivizedPoolsRequest, initRequest?: fm.InitReq): Promise<QueryIncentivizedPoolsResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/incentivized_pools?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ExternalIncentiveGauges returns external incentive gauges. */
  static ExternalIncentiveGauges(request: QueryExternalIncentiveGaugesRequest, initRequest?: fm.InitReq): Promise<QueryExternalIncentiveGaugesResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/external_incentive_gauges?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class QueryClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
  async GaugeIds(req: QueryGaugeIdsRequest, headers?: HeadersInit): Promise<QueryGaugeIdsResponse> {
    return Query.GaugeIds(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DistrInfo returns the pool's matching gauge ids and weights. */
  async DistrInfo(req: QueryDistrInfoRequest, headers?: HeadersInit): Promise<QueryDistrInfoResponse> {
    return Query.DistrInfo(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params returns pool incentives params. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** LockableDurations returns lock durations for pools. */
  async LockableDurations(req: QueryLockableDurationsRequest, headers?: HeadersInit): Promise<QueryLockableDurationsResponse> {
    return Query.LockableDurations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** IncentivizedPools returns currently incentivized pools */
  async IncentivizedPools(req: QueryIncentivizedPoolsRequest, headers?: HeadersInit): Promise<QueryIncentivizedPoolsResponse> {
    return Query.IncentivizedPools(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ExternalIncentiveGauges returns external incentive gauges. */
  async ExternalIncentiveGauges(req: QueryExternalIncentiveGaugesRequest, headers?: HeadersInit): Promise<QueryExternalIncentiveGaugesResponse> {
    return Query.ExternalIncentiveGauges(req, {
      headers,
      pathPrefix: this.url
    });
  }
}